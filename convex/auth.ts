import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Create or get user by email
export const createUser = mutation({
  args: {
    email: v.string(),
    name: v.string(),
  },
  handler: async (ctx, args) => {
    // Check if user already exists
    const existingUser = await ctx.db
      .query("users")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .first();

    if (existingUser) {
      // Update last login
      await ctx.db.patch(existingUser._id, {
        lastLogin: Date.now(),
      });
      return existingUser;
    }

    // Create new user
    const userId = await ctx.db.insert("users", {
      email: args.email,
      name: args.name,
      hasAccess: false,
      paymentStatus: "pending",
      lastLogin: Date.now(),
    });

    return await ctx.db.get(userId);
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

// Update user payment status
export const updateUserPayment = mutation({
  args: {
    userId: v.id("users"),
    paymentId: v.string(),
    status: v.union(v.literal("pending"), v.literal("completed"), v.literal("failed")),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.userId, {
      hasAccess: args.status === "completed",
      paymentStatus: args.status,
      paymentId: args.paymentId,
      purchaseDate: args.status === "completed" ? Date.now() : undefined,
    });
  },
});

// Create payment record
export const createPayment = mutation({
  args: {
    userId: v.id("users"),
    amount: v.number(),
    currency: v.string(),
    paypalOrderId: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("payments", {
      userId: args.userId,
      amount: args.amount,
      currency: args.currency,
      paypalOrderId: args.paypalOrderId,
      status: "pending",
      createdAt: Date.now(),
    });
  },
});

// Complete payment
export const completePayment = mutation({
  args: {
    paypalOrderId: v.string(),
    paypalPaymentId: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const payment = await ctx.db
      .query("payments")
      .withIndex("by_paypal_order_id", (q) => q.eq("paypalOrderId", args.paypalOrderId))
      .first();

    if (!payment) {
      throw new Error("Payment not found");
    }

    // Update payment status
    await ctx.db.patch(payment._id, {
      status: "completed",
      completedAt: Date.now(),
      paypalPaymentId: args.paypalPaymentId,
    });

    // Update user access
    await ctx.db.patch(payment.userId, {
      hasAccess: true,
      paymentStatus: "completed",
      paymentId: args.paypalOrderId,
      purchaseDate: Date.now(),
    });

    return payment;
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