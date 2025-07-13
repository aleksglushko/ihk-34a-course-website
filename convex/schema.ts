import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({

    users: defineTable({
        email: v.string(),
        password: v.string(),
        createdAt: v.number(),
        name: v.string(),
        surname: v.string(),
        phone: v.string(),
        address: v.optional(v.string()),
        hasAccess: v.boolean(),
        lastLogin: v.optional(v.number()),
        paymentId: v.optional(v.string()),
    }).index("by_email", ["email"]),

    payments: defineTable({
        userId: v.id("users"),
        status: v.union(v.literal("pending"), v.literal("completed"), v.literal("failed")),
        purchaseDate: v.optional(v.number()),
        amount: v.number(),
        currency: v.string(),
        promoCode: v.optional(v.string()),
    }).index("by_user", ["userId"]),

    examProgress: defineTable({
        userId: v.id("users"),
        startedAt: v.number(),
        completedAt: v.optional(v.number()),
        questionsOrder: v.array(v.number()), // Array of question IDs in the order they were presented
        answeredQuestionsIds: v.array(v.number()), // Array of question IDs in the order they were presented
        answers: v.array(v.number()), // User's answers (A, B, C, D or empty string for no answer)
    }).index("by_user", ["userId"]),
}); 