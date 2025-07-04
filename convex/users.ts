import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

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
      return existingUser._id;
    }

    // Create new user
    const userId = await ctx.db.insert("users", {
      email: args.email,
      name: args.name,
      hasAccess: false,
      paymentStatus: "pending",
      lastLogin: Date.now(),
    });

    return userId;
  },
});

export const getUserByEmail = query({
  args: {
    email: v.string(),
  },
  handler: async (ctx, args) => {
    const user = await ctx.db
      .query("users")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .first();

    return user;
  },
});

export const updateUserAccess = mutation({
  args: {
    userId: v.id("users"),
    hasAccess: v.boolean(),
    paymentStatus: v.union(v.literal("pending"), v.literal("completed"), v.literal("failed")),
    paymentId: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.userId, {
      hasAccess: args.hasAccess,
      paymentStatus: args.paymentStatus,
      paymentId: args.paymentId,
      purchaseDate: args.hasAccess ? Date.now() : undefined,
    });
  },
});

export const updateLastLogin = mutation({
  args: {
    userId: v.id("users"),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.userId, {
      lastLogin: Date.now(),
    });
  },
});

export const getCourseProgress = query({
  args: {
    userId: v.id("users"),
  },
  handler: async (ctx, args) => {
    const progress = await ctx.db
      .query("courseProgress")
      .withIndex("by_user", (q) => q.eq("userId", args.userId))
      .collect();

    return progress;
  },
});

export const updateCourseProgress = mutation({
  args: {
    userId: v.id("users"),
    moduleId: v.string(),
    moduleName: v.string(),
    completed: v.boolean(),
    score: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    // Check if progress entry exists
    const existingProgress = await ctx.db
      .query("courseProgress")
      .withIndex("by_user", (q) => q.eq("userId", args.userId))
      .filter((q) => q.eq(q.field("moduleId"), args.moduleId))
      .first();

    if (existingProgress) {
      await ctx.db.patch(existingProgress._id, {
        completed: args.completed,
        completedAt: args.completed ? Date.now() : undefined,
        score: args.score,
      });
    } else {
      await ctx.db.insert("courseProgress", {
        userId: args.userId,
        moduleId: args.moduleId,
        moduleName: args.moduleName,
        completed: args.completed,
        completedAt: args.completed ? Date.now() : undefined,
        score: args.score,
      });
    }
  },
}); 