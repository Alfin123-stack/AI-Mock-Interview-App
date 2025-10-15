"use client";

import { motion } from "framer-motion";

export default function DashboardLoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 py-10">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.15 }}
          className="flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm ring-1 ring-slate-100/50 dark:border-neutral-800 dark:bg-neutral-900 animate-pulse">
          {/* Header Skeleton */}
          <div className="relative flex h-28 items-center justify-between bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-600 px-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-white/25 backdrop-blur-md shadow-md" />
              <div className="space-y-2">
                <div className="h-4 w-32 bg-white/30 rounded" />
                <div className="h-3 w-20 bg-white/20 rounded" />
              </div>
            </div>
            <div className="h-6 w-16 bg-white/30 rounded-full" />
          </div>

          {/* Body Skeleton */}
          <div className="flex flex-1 flex-col space-y-5 px-6 py-6">
            <div className="space-y-2">
              <div className="h-3.5 w-full bg-neutral-200 dark:bg-neutral-800 rounded" />
              <div className="h-3.5 w-5/6 bg-neutral-200 dark:bg-neutral-800 rounded" />
              <div className="h-3.5 w-2/3 bg-neutral-200 dark:bg-neutral-800 rounded" />
            </div>

            <div className="flex items-center gap-2">
              <div className="h-4 w-4 bg-neutral-300 dark:bg-neutral-700 rounded" />
              <div className="h-3 w-24 bg-neutral-200 dark:bg-neutral-800 rounded" />
            </div>
          </div>

          {/* Footer Skeleton */}
          <div className="flex flex-col gap-3 px-6 pb-6">
            <div className="h-9 w-full rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 opacity-70" />
            <div className="h-9 w-full rounded-xl border border-indigo-500/30 bg-transparent" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
