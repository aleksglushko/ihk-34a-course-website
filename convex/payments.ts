import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const createPayment = mutation({
  args: {
    userId: v.id("users"),
    amount: v.number(),
    currency: v.string(),
    paypalOrderId: v.string(),
  },
  handler: async (ctx, args) => {
    const paymentId = await ctx.db.insert("payments", {
      userId: args.userId,
      amount: args.amount,
      currency: args.currency,
      paypalOrderId: args.paypalOrderId,
      status: "pending",
      createdAt: Date.now(),
    });

    return paymentId;
  },
});

export const updatePaymentStatus = mutation({
  args: {
    paypalOrderId: v.string(),
    paypalPaymentId: v.optional(v.string()),
    status: v.union(v.literal("pending"), v.literal("completed"), v.literal("failed")),
  },
  handler: async (ctx, args) => {
    const payment = await ctx.db
      .query("payments")
      .withIndex("by_paypal_order_id", (q) => q.eq("paypalOrderId", args.paypalOrderId))
      .first();

    if (!payment) {
      throw new Error("Payment not found");
    }

    await ctx.db.patch(payment._id, {
      status: args.status,
      paypalPaymentId: args.paypalPaymentId,
      completedAt: args.status === "completed" ? Date.now() : undefined,
    });

    // If payment is completed, grant user access
    if (args.status === "completed") {
      await ctx.db.patch(payment.userId, {
        hasAccess: true,
        paymentStatus: "completed",
        paymentId: args.paypalPaymentId,
        purchaseDate: Date.now(),
      });
    }

    return payment.userId;
  },
});

export const getPaymentByOrderId = query({
  args: {
    paypalOrderId: v.string(),
  },
  handler: async (ctx, args) => {
    const payment = await ctx.db
      .query("payments")
      .withIndex("by_paypal_order_id", (q) => q.eq("paypalOrderId", args.paypalOrderId))
      .first();

    return payment;
  },
});

export const getUserPayments = query({
  args: {
    userId: v.id("users"),
  },
  handler: async (ctx, args) => {
    const payments = await ctx.db
      .query("payments")
      .filter((q) => q.eq(q.field("userId"), args.userId))
      .collect();

    return payments;
  },
}); 