import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    email: v.string(),
    name: v.string(),
    hasAccess: v.boolean(),
    paymentStatus: v.union(v.literal("pending"), v.literal("completed"), v.literal("failed")),
    paymentId: v.optional(v.string()),
    purchaseDate: v.optional(v.number()),
    lastLogin: v.optional(v.number()),
  }).index("by_email", ["email"]),

  payments: defineTable({
    userId: v.id("users"),
    amount: v.number(),
    currency: v.string(),
    paypalOrderId: v.string(),
    paypalPaymentId: v.optional(v.string()),
    status: v.union(v.literal("pending"), v.literal("completed"), v.literal("failed")),
    createdAt: v.number(),
    completedAt: v.optional(v.number()),
  }).index("by_paypal_order_id", ["paypalOrderId"]),

  courseProgress: defineTable({
    userId: v.id("users"),
    moduleId: v.string(),
    moduleName: v.string(),
    completed: v.boolean(),
    completedAt: v.optional(v.number()),
    score: v.optional(v.number()),
  }).index("by_user", ["userId"]),

  quizResults: defineTable({
    userId: v.id("users"),
    quizType: v.union(v.literal("practice"), v.literal("final")),
    score: v.number(),
    totalQuestions: v.number(),
    correctAnswers: v.number(),
    completedAt: v.number(),
    passed: v.boolean(),
  }).index("by_user", ["userId"]),
}); 