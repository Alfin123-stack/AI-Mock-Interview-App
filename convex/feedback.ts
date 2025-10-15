import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

/**
 * Mutation untuk menyimpan feedback AI baru
 */
export const createFeedback = mutation({
  args: {
    sessionId: v.string(),
    userId: v.string(),

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
  },
  handler: async (ctx, args) => {
    const feedbackId = await ctx.db.insert("feedbackTable", {
      sessionId: args.sessionId,
      userId: args.userId,
      summary: args.summary,
      scores: args.scores,
      detailed_feedback: args.detailed_feedback,
      improvement_suggestions: args.improvement_suggestions,
      createdAt: new Date().toISOString(),
    });

    return feedbackId;
  },
});

/**
 * Mutation untuk memperbarui feedback (misal regenerasi dari AI)
 */
// export const updateFeedback = mutation({
//   args: {
//     feedbackId: v.id("feedbackTable"),
//     summary: v.optional(v.string()),
//     scores: v.optional(
//       v.object({
//         technical_knowledge: v.number(),
//         communication_clarity: v.number(),
//         problem_solving_approach: v.number(),
//         relevance_and_engagement: v.number(),
//       })
//     ),
//     detailed_feedback: v.optional(
//       v.object({
//         technical_knowledge: v.string(),
//         communication_clarity: v.string(),
//         problem_solving_approach: v.string(),
//         relevance_and_engagement: v.string(),
//       })
//     ),
//     improvement_suggestions: v.optional(v.string()),
//   },
//   handler: async (ctx, args) => {
//     const existing = await ctx.db.get(args.feedbackId);
//     if (!existing) throw new Error("Feedback not found");

//     await ctx.db.patch(args.feedbackId, {
//       ...(args.summary && { summary: args.summary }),
//       ...(args.scores && { scores: args.scores }),
//       ...(args.detailed_feedback && { detailed_feedback: args.detailed_feedback }),
//       ...(args.improvement_suggestions && { improvement_suggestions: args.improvement_suggestions }),
//       updatedAt: new Date().toISOString(),
//     });

//     return args.feedbackId;
//   },
// });

/**
 * Query untuk mengambil feedback berdasarkan sessionId
 */
export const getFeedbackBySession = query({
  args: { sessionId: v.string() },
  handler: async (ctx, args) => {
    const feedback = await ctx.db
      .query("feedbackTable")
      .filter((q) => q.eq(q.field("sessionId"), args.sessionId))
      .first();
    return feedback;
  },
});

/**
 * Query untuk menampilkan semua feedback milik user
 */
export const listFeedbackByUser = query({
  args: { userId: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("feedbackTable")
      .filter((q) => q.eq(q.field("userId"), args.userId))
      .collect();
  },
});
