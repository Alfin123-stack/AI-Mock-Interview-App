import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // ================================
  // Users Table
  // ================================
  users: defineTable({
    name: v.string(),
    imageUrl: v.string(),
    email: v.string(),
  }).index("by_email", ["email"]),

  // ================================
  // Interview Session Table
  // ================================
  interviewSessionTable: defineTable({
    interviewQuestions: v.array(
      v.object({
        question: v.string(),
        answer: v.string(),
      })
    ),
    resumeUrl: v.optional(v.string()), // bisa null kalau user pakai job desc
    jobTitle: v.optional(v.string()),  // optional
    jobDescription: v.optional(v.string()),  // optional
    status: v.string(),
    userId: v.string(),
  }),

  // ================================
  // Feedback Table (AI Interview Feedback)
  // ================================
  feedbackTable: defineTable({
    sessionId: v.string(), // relasi ke interviewSessionTable
    userId: v.string(),    // siapa yang punya feedback ini

    summary: v.string(),

    scores: v.object({
      technical_knowledge: v.number(),
      communication_clarity: v.number(),
      problem_solving_approach: v.number(),
      relevance_and_engagement: v.number(),
    }),

    detailed_feedback: v.object({
      technical_knowledge: v.string(),
      communication_clarity: v.string(),
      problem_solving_approach: v.string(),
      relevance_and_engagement: v.string(),
    }),

    improvement_suggestions: v.string(),

    createdAt: v.string(), // tanggal feedback dibuat
  }),
});
