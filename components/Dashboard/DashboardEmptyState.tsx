"use client";

import { motion } from "framer-motion";
import { FileQuestion } from "lucide-react";
import CreateInterviewDialog from "./DashboardInterviewDialog";

export default function DashboardEmptyState() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 dark:border-neutral-800 bg-gradient-to-br from-slate-50/70 to-white/60 dark:from-neutral-900/60 dark:to-neutral-950/60 backdrop-blur-md p-8 sm:p-10 md:p-16 text-center shadow-sm">
      <motion.div
        whileHover={{ scale: 1.1, rotate: 3 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-violet-500/10 to-pink-500/10">
        <FileQuestion className="h-10 w-10 text-violet-500 dark:text-violet-400" />
      </motion.div>

      <h2 className="text-xl sm:text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-2">
        No interviews yet
      </h2>
      <p className="text-sm sm:text-base text-muted-foreground mb-6 max-w-md">
        You haven’t created any mock interviews yet. Start your first one below
        and practice like a pro.
      </p>

      <CreateInterviewDialog />
    </motion.div>
  );
}
