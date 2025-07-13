import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Simple hash function for passwords (for demo purposes)
// In production, use proper password hashing on the client side
const simpleHash = (password: string): string => {
  let hash = 0;
  for (let i = 0; i < password.length; i++) {
    const char = password.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return hash.toString();
};

// Generate simple token (for demo purposes)
const generateToken = (userId: string, email: string): string => {
  const timestamp = Date.now();
  return `${userId}-${email}-${timestamp}`;
};

// Register a new user
export const registerUser = mutation({
  args: {
    email: v.string(),
    password: v.string(),
    name: v.string(),
    surname: v.string(),
    phone: v.string(),
    address: v.optional(v.string()),
    promoCode: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    // Check if user already exists
    const existingUser = await ctx.db
      .query("users")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .first();

    if (existingUser) {
      throw new Error("User with this email already exists");
    }

    // Hash the password (simple hash for demo)
    const hashedPassword = simpleHash(args.password);

    // Determine if user gets free access with KOCH100 promo code
    const hasAccess = args.promoCode?.toUpperCase() === "KOCH100";
    
    // Create new user
    const userId = await ctx.db.insert("users", {
      email: args.email,
      password: hashedPassword,
      name: args.name,
      surname: args.surname,
      phone: args.phone,
      address: args.address,
      hasAccess,
      createdAt: Date.now(),
      lastLogin: Date.now(),
    });

    // Create payment record
    if (!hasAccess) {
      // Pending payment for regular users
      await ctx.db.insert("payments", {
        userId,
        status: "pending" as const,
        amount: 89.99,
        currency: "EUR",
        promoCode: args.promoCode,
      });
    } else {
      // Free payment record for KOCH100 users
      await ctx.db.insert("payments", {
        userId,
        status: "completed" as const,
        amount: 0,
        currency: "EUR",
        promoCode: args.promoCode,
        purchaseDate: Date.now(),
      });
    }

    const user = await ctx.db.get(userId);
    if (!user) {
      throw new Error("Failed to create user");
    }

    // Generate simple token
    const token = generateToken(user._id, user.email);

    return {
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        surname: user.surname,
        hasAccess: user.hasAccess,
      },
      token,
    };
  },
});

// Login user
export const loginUser = mutation({
  args: {
    email: v.string(),
    password: v.string(),
  },
  handler: async (ctx, args) => {
    // Find user by email
    const user = await ctx.db
      .query("users")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .first();

    if (!user) {
      throw new Error("Invalid email or password");
    }

    // Verify password (simple hash comparison)
    const hashedPassword = simpleHash(args.password);
    if (user.password !== hashedPassword) {
      throw new Error("Invalid email or password");
    }

    // Update last login
    await ctx.db.patch(user._id, {
      lastLogin: Date.now(),
    });

    // Generate simple token
    const token = generateToken(user._id, user.email);

    return {
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        surname: user.surname,
        hasAccess: user.hasAccess,
      },
      token,
    };
  },
});

// Verify token (simple implementation)
export const verifyToken = query({
  args: {
    token: v.string(),
  },
  handler: async (ctx, args) => {
    try {
      // Parse simple token format: userId-email-timestamp
      const parts = args.token.split('-');
      if (parts.length < 3) {
        return { user: null, valid: false };
      }
      
      const userId = parts[0];
      const email = parts[1];
      const timestamp = parseInt(parts[2]);
      
      // Check if token is older than 4 hours (4 * 60 * 60 * 1000 ms)
      const fourHoursInMs = 4 * 60 * 60 * 1000;
      const currentTime = Date.now();
      
      if (currentTime - timestamp > fourHoursInMs) {
        return { user: null, valid: false };
      }
      
      // Get user from database
      const user = await ctx.db
        .query("users")
        .withIndex("by_email", (q) => q.eq("email", email))
        .first();
      
      if (!user || user._id !== userId) {
        return { user: null, valid: false };
      }

      return {
        user: {
          id: user._id,
          email: user.email,
          name: user.name,
          surname: user.surname,
          hasAccess: user.hasAccess,
        },
        valid: true,
      };
    } catch {
      return {
        user: null,
        valid: false,
      };
    }
  },
});

// Get user by email
export const getUserByEmail = query({
  args: {
    email: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("users")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .first();
  },
});

// Update user access (for completing payments)
export const updateUserAccess = mutation({
  args: {
    userId: v.id("users"),
    hasAccess: v.boolean(),
    paymentId: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.userId, {
      hasAccess: args.hasAccess,
      paymentId: args.paymentId,
    });
  },
});

// Get user's payments
export const getUserPayments = query({
  args: {
    userId: v.id("users"),
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("payments")
      .withIndex("by_user", (q) => q.eq("userId", args.userId))
      .order("desc")
      .collect();
  },
}); 