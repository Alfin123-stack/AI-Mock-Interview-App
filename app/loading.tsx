"use client";

import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

export default function LoadingPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-4 rounded-3xl border border-neutral-200 bg-white px-10 py-12 shadow-lg ring-1 ring-slate-100/50 dark:border-neutral-800 dark:bg-neutral-900">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-600 text-white shadow-md">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
        <h2 className="text-lg font-medium">Loading your content...</h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Please wait a moment while we prepare everything.
        </p>
      </motion.div>
    </div>
  );
}
