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
  }).index("by_paypal_order_id", ["paypalOrderId"])
    .index("by_user", ["userId"]),

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

  examSessions: defineTable({
    userId: v.id("users"),
    questions: v.array(v.number()), // Array of question IDs in the order they were presented
    answers: v.array(v.string()), // User's answers (A, B, C, D or empty string for no answer)
    correctAnswers: v.array(v.string()), // Correct answers for comparison
    currentQuestionIndex: v.number(),
    isCompleted: v.boolean(),
    score: v.optional(v.number()),
    startedAt: v.number(),
    completedAt: v.optional(v.number()),
  }).index("by_user", ["userId"]),
}); 