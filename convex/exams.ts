import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Start a new exam session
export const startExamSession = mutation({
  args: {
    userId: v.id("users"),
    questions: v.array(v.number()), // Array of question IDs in shuffled order
    correctAnswers: v.array(v.string()), // Correct answers for the questions
  },
  handler: async (ctx, args) => {
    // Check if user has an active exam session
    const activeSession = await ctx.db
      .query("examSessions")
      .withIndex("by_user", (q) => q.eq("userId", args.userId))
      .filter((q) => q.eq(q.field("isCompleted"), false))
      .first();

    if (activeSession) {
      // Return existing active session
      return activeSession;
    }

    // Create new exam session
    const sessionId = await ctx.db.insert("examSessions", {
      userId: args.userId,
      questions: args.questions,
      answers: new Array(args.questions.length).fill(""), // Initialize with empty answers
      correctAnswers: args.correctAnswers,
      currentQuestionIndex: 0,
      isCompleted: false,
      startedAt: Date.now(),
    });

    return await ctx.db.get(sessionId);
  },
});

// Update exam session with answer
export const updateExamAnswer = mutation({
  args: {
    sessionId: v.id("examSessions"),
    questionIndex: v.number(),
    answer: v.string(),
  },
  handler: async (ctx, args) => {
    const session = await ctx.db.get(args.sessionId);
    if (!session) {
      throw new Error("Exam session not found");
    }

    if (session.isCompleted) {
      throw new Error("Exam session is already completed");
    }

    // Update the answer at the specified index
    const updatedAnswers = [...session.answers];
    updatedAnswers[args.questionIndex] = args.answer;

    await ctx.db.patch(args.sessionId, {
      answers: updatedAnswers,
      currentQuestionIndex: Math.max(session.currentQuestionIndex, args.questionIndex + 1),
    });

    return await ctx.db.get(args.sessionId);
  },
});

// Complete exam session
export const completeExamSession = mutation({
  args: {
    sessionId: v.id("examSessions"),
  },
  handler: async (ctx, args) => {
    const session = await ctx.db.get(args.sessionId);
    if (!session) {
      throw new Error("Exam session not found");
    }

    if (session.isCompleted) {
      throw new Error("Exam session is already completed");
    }

    // Calculate score
    let correctCount = 0;
    for (let i = 0; i < session.questions.length; i++) {
      if (session.answers[i] === session.correctAnswers[i]) {
        correctCount++;
      }
    }

    const score = Math.round((correctCount / session.questions.length) * 100);

    // Update session
    await ctx.db.patch(args.sessionId, {
      isCompleted: true,
      score: score,
      completedAt: Date.now(),
    });

    // Save to quiz results
    await ctx.db.insert("quizResults", {
      userId: session.userId,
      quizType: "final",
      score: score,
      totalQuestions: session.questions.length,
      correctAnswers: correctCount,
      completedAt: Date.now(),
      passed: score >= 50,
    });

    return await ctx.db.get(args.sessionId);
  },
});

// Get active exam session for user
export const getActiveExamSession = query({
  args: {
    userId: v.id("users"),
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("examSessions")
      .withIndex("by_user", (q) => q.eq("userId", args.userId))
      .filter((q) => q.eq(q.field("isCompleted"), false))
      .first();
  },
});

// Get exam results for user
export const getExamResults = query({
  args: {
    userId: v.id("users"),
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("quizResults")
      .withIndex("by_user", (q) => q.eq("userId", args.userId))
      .order("desc")
      .collect();
  },
});

// Get completed exam sessions for user
export const getCompletedExamSessions = query({
  args: {
    userId: v.id("users"),
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("examSessions")
      .withIndex("by_user", (q) => q.eq("userId", args.userId))
      .filter((q) => q.eq(q.field("isCompleted"), true))
      .order("desc")
      .collect();
  },
}); 