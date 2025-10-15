"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { statusBadgeClass } from "@/lib/utils";

interface Interview {
  jobTitle: string;
  status: "pending" | "completed" | "in_progress" | "failed" | string;
  _creationTime: number | string;
}

export function InterviewHero({ interview }: { interview: Interview }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mx-auto mb-12 w-full max-w-4xl text-center sm:mb-16 md:mb-20">
      {/* Judul */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-3 text-3xl font-extrabold leading-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl">
        <span className="bg-gradient-to-r from-indigo-500 to-violet-600 bg-clip-text text-transparent">
          {interview.jobTitle || "Interview Detail"}
        </span>
      </motion.h1>

      {/* Deskripsi */}
      <p className="mx-auto max-w-2xl text-sm text-gray-600 dark:text-gray-400 sm:text-base md:text-lg">
        Prepare yourself for a smooth, AI-powered mock interview experience.
      </p>

      {/* Status + Created Date */}
      <div className="mt-5 flex flex-col items-center justify-center gap-2 sm:mt-6 sm:flex-row sm:gap-4">
        <span
          className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ring-1 sm:text-sm ${statusBadgeClass(
            interview.status
          )}`}>
          <Clock className="h-4 w-4 sm:h-5 sm:w-5" />
          <span className="capitalize">{interview.status || "unknown"}</span>
        </span>

        <span className="text-xs text-muted-foreground sm:text-sm">
          Created:{" "}
          <strong className="text-slate-700 dark:text-slate-200">
            {new Date(interview._creationTime).toLocaleDateString()}
          </strong>
        </span>
      </div>
    </motion.section>
  );
}
