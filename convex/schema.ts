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
        paymentStatus: v.optional(v.string()),
        purchaseDate: v.optional(v.number()),
    }).index("by_email", ["email"]),

    payments: defineTable({
        userId: v.id("users"),
        status: v.union(v.literal("pending"), v.literal("completed"), v.literal("failed")),
        purchaseDate: v.optional(v.number()),
        amount: v.number(),
        currency: v.string(),
        promoCode: v.optional(v.string()),
        paypalOrderId: v.optional(v.string()),
        paypalPaymentId: v.optional(v.string()),
        createdAt: v.number(),
        completedAt: v.optional(v.number()),
    }).index("by_user", ["userId"]),

    examProgress: defineTable({
        userId: v.id("users"),
        startedAt: v.number(),
        completedAt: v.optional(v.number()),
        questionsOrder: v.array(v.number()),
        answeredQuestionsIds: v.array(v.number()),
        answers: v.array(v.number()),
    }).index("by_user", ["userId"]),

    examSessions: defineTable({
        userId: v.id("users"),
        questions: v.array(v.any()),
        answers: v.array(v.string()),
        correctAnswers: v.array(v.string()),
        currentQuestionIndex: v.number(),
        isCompleted: v.boolean(),
        startedAt: v.number(),
        completedAt: v.optional(v.number()),
        score: v.optional(v.number()),
    }).index("by_user", ["userId"]),

    quizResults: defineTable({
        userId: v.id("users"),
        score: v.number(),
        correctAnswers: v.number(),
        totalQuestions: v.number(),
        completedAt: v.number(),
        quizType: v.string(),
        passed: v.boolean(),
    }).index("by_user", ["userId"]),

    courseProgress: defineTable({
        userId: v.id("users"),
        moduleId: v.string(),
        completed: v.boolean(),
        completedAt: v.optional(v.number()),
        score: v.optional(v.number()),
        moduleName: v.optional(v.string()),
    }).index("by_user", ["userId"]),
}); 