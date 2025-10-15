// convex/functions/users.ts
import { mutation } from "./_generated/server";
import { v } from "convex/values";

// Mutation untuk membuat user baru
export const createNewUser = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    imageUrl: v.string(),
  },
  handler: async (ctx, args) => {
    // Cek apakah user sudah ada berdasarkan email
    const existingUser = await ctx.db
      .query("users")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .unique();

    if (existingUser) {
      return existingUser._id; // kalau sudah ada, balikin id existing
    }

    // Kalau belum ada, buat user baru
    const userId = await ctx.db.insert("users", {
      name: args.name,
      email: args.email,
      imageUrl: args.imageUrl,
    });

    return userId;
  },
});
