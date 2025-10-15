// convex/interview.ts
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// mutation untuk membuat session interview baru
export const createInterviewSession = mutation({
  args: {
    interviewQuestions: v.array(
      v.object({
        question: v.string(),
        answer: v.string(),
      })
    ),
    resumeUrl: v.optional(v.string()), // optional
    jobTitle: v.optional(v.string()), // baru
    jobDescription: v.optional(v.string()), // baru
    status: v.string(),
    userId: v.string(),
  },
  handler: async (ctx, args) => {
    const id = await ctx.db.insert("interviewSessionTable", {
      interviewQuestions: args.interviewQuestions,
      resumeUrl: args.resumeUrl ?? undefined,
      jobTitle: args.jobTitle ?? undefined,
      jobDescription: args.jobDescription ?? undefined,
      status: args.status,
      userId: args.userId,
    });

    return id;
  },
});

// export const inviteUserByEmail = mutation({
//   args: { interviewId: v.id("interviewSessionTable"), email: v.string() },
//   handler: async (ctx, { interviewId, email }) => {
//     const interview = await ctx.db.get(interviewId);
//     if (!interview) throw new Error("Interview not found");

//     const invited = interview.invitedEmails || [];
//     if (!invited.includes(email)) {
//       invited.push(email);
//       await ctx.db.patch(interviewId, { invitedEmails: invited });
//     }

//     return invited;
//   },
// });

export const getInterviewById = query({
  args: { id: v.id("interviewSessionTable") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

// query untuk list interview session user
export const listInterviewSessions = query({
  args: { userId: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("interviewSessionTable")
      .filter((q) => q.eq(q.field("userId"), args.userId))
      .collect();
  },
});
