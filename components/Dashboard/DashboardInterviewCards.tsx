"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

import {
  FileQuestion,
  Clock,
  Briefcase,
  MessageSquare,
  Lightbulb,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

/* ----------------------------
 🔹 Type Definitions
---------------------------- */
export interface FeedbackScores {
  technical_knowledge: number;
  communication_clarity: number;
  problem_solving_approach: number;
  relevance_and_engagement: number;
}

export interface FeedbackData {
  summary: string;
  scores: FeedbackScores;
  improvement_suggestions: string;
}

export interface InterviewSession {
  _id: string;
  _creationTime: number;
  userId: string;
  jobTitle: string;
  jobDescription?: string;
  experience?: string;
  status: "completed" | "in-progress" | "scheduled";
}

/* ----------------------------
 🔹 Animation Variants
---------------------------- */
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: "easeOut" },
  }),
};

/* ----------------------------
 🔹 Interview Card
---------------------------- */
interface InterviewCardProps {
  interview: InterviewSession;
  index: number;
  onOpenFeedback: (feedback: FeedbackData) => void;
}

function InterviewCard({
  interview,
  index,
  onOpenFeedback,
}: InterviewCardProps) {
  const feedback = useQuery(
    api.feedback.getFeedbackBySession,
    interview?._id ? { sessionId: interview._id } : "skip"
  ) as FeedbackData | undefined;

  return (
    <motion.div
      key={interview._id}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 220, damping: 15 }}
      className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm ring-1 ring-slate-100/50 transition-all hover:border-indigo-400 hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900">
      {/* Header */}
      <div className="relative flex h-28 items-center justify-between overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-600 px-4 sm:px-6">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-white/25 backdrop-blur-md text-white shadow-md">
            <FileQuestion className="h-5 w-5 sm:h-6 sm:w-6" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-white drop-shadow-sm">
              {interview.jobTitle || "Untitled Role"}
            </h3>
            <p className="flex items-center gap-1 text-xs text-white/80">
              <Clock className="h-3.5 w-3.5" />
              {new Date(interview._creationTime).toLocaleDateString()}
            </p>
          </div>
        </div>

        {/* Status */}
        <span
          className={`hidden sm:inline-block rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset shadow-sm ${
            interview.status === "completed"
              ? "bg-emerald-100 text-emerald-700 ring-emerald-300 dark:bg-emerald-900/30 dark:text-emerald-300"
              : interview.status === "scheduled"
                ? "bg-sky-100 text-sky-700 ring-sky-300 dark:bg-sky-900/30 dark:text-sky-300"
                : interview.status === "in-progress"
                  ? "bg-amber-100 text-amber-700 ring-amber-300 dark:bg-amber-900/30 dark:text-amber-300"
                  : "bg-slate-100 text-slate-600 ring-slate-300 dark:bg-slate-800/30 dark:text-slate-400"
          }`}>
          {interview.status}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col justify-between space-y-5 px-4 sm:px-6 py-5">
        {interview.jobDescription ? (
          <p className="line-clamp-3 text-sm sm:text-[15px] leading-relaxed text-gray-700 dark:text-gray-300">
            {interview.jobDescription}
          </p>
        ) : (
          <div className="rounded-md bg-slate-100/70 p-3 text-sm italic text-gray-400 dark:bg-neutral-800/60">
            No details available yet
          </div>
        )}

        <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          <Briefcase className="h-3.5 w-3.5" />
          {interview.experience || "No experience set"}
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col gap-2 px-4 sm:px-6 pb-6">
        <Link
          href={`/interview/${interview._id}`}
          className="group relative inline-flex w-full items-center justify-center rounded-xl border border-transparent bg-gradient-to-r from-indigo-500 to-violet-600 px-4 py-2 text-sm font-medium text-white shadow-md transition hover:shadow-lg hover:brightness-110">
          <span className="relative z-10">View Interview</span>
        </Link>

        {feedback && (
          <button
            onClick={() => onOpenFeedback(feedback)}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-indigo-500 px-4 py-2 text-sm font-medium text-indigo-600 transition hover:bg-indigo-50 dark:hover:bg-neutral-800">
            <MessageSquare className="h-4 w-4" />
            View Feedback
          </button>
        )}
      </div>
    </motion.div>
  );
}

/* ----------------------------
 🔹 DashboardInterviewCards
---------------------------- */
interface DashboardInterviewCardsProps {
  interviews: InterviewSession[];
}

export function DashboardInterviewCards({
  interviews,
}: DashboardInterviewCardsProps) {
  const [open, setOpen] = useState(false);
  const [selectedFeedback, setSelectedFeedback] = useState<FeedbackData | null>(
    null
  );

  const handleOpenFeedback = (feedback: FeedbackData) => {
    setSelectedFeedback(feedback);
    setOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {interviews.map((interview, i) => (
          <InterviewCard
            key={interview._id}
            interview={interview}
            index={i}
            onOpenFeedback={handleOpenFeedback}
          />
        ))}
      </div>

      {/* Feedback Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg w-[92%] sm:w-full rounded-2xl border shadow-2xl p-6 max-h-[90vh] overflow-y-auto transition-colors bg-white text-neutral-900 border-neutral-200 dark:bg-neutral-950 dark:text-neutral-100 dark:border-neutral-800">
          {selectedFeedback ? (
            <>
              {/* Header */}
              <DialogHeader className="space-y-2 border-b pb-3 mb-4 border-neutral-200 dark:border-neutral-800">
                <DialogTitle className="text-lg sm:text-xl font-semibold flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
                  <MessageSquare className="h-5 w-5" />
                  Interview Feedback
                </DialogTitle>
                <DialogDescription className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
                  {selectedFeedback.summary}
                </DialogDescription>
              </DialogHeader>

              {/* Score Section */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                {[
                  {
                    label: "Technical Knowledge",
                    score: selectedFeedback.scores.technical_knowledge,
                    icon: Lightbulb,
                  },
                  {
                    label: "Communication",
                    score: selectedFeedback.scores.communication_clarity,
                    icon: MessageSquare,
                  },
                  {
                    label: "Problem Solving",
                    score: selectedFeedback.scores.problem_solving_approach,
                    icon: Briefcase,
                  },
                  {
                    label: "Engagement",
                    score: selectedFeedback.scores.relevance_and_engagement,
                    icon: Clock,
                  },
                ].map((item, idx) => {
                  const percentage = (item.score / 10) * 100;
                  const color =
                    item.score >= 8
                      ? "bg-emerald-500"
                      : item.score >= 6
                        ? "bg-amber-500"
                        : "bg-rose-500";
                  const Icon = item.icon;

                  return (
                    <div
                      key={idx}
                      className="rounded-xl p-4 border shadow-sm transition-all bg-neutral-50 border-neutral-200 hover:border-indigo-400 dark:bg-neutral-900 dark:border-neutral-800 dark:hover:border-indigo-500">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="h-4 w-4 text-indigo-500 dark:text-indigo-400" />
                        <p className="text-xs text-neutral-500 dark:text-neutral-400">
                          {item.label}
                        </p>
                      </div>
                      <p className="text-base sm:text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                        {item.score}/10
                      </p>
                      <div className="w-full h-2 bg-neutral-200 dark:bg-neutral-800 rounded-full mt-2 overflow-hidden">
                        <div
                          className={`${color} h-full rounded-full transition-all`}
                          data-width={percentage}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Suggestions */}
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2 text-neutral-800 dark:text-neutral-200">
                  <Lightbulb className="h-4 w-4 text-amber-500" />
                  Suggestions for Improvement
                </h4>
                <p className="whitespace-pre-line leading-relaxed rounded-xl p-4 border bg-neutral-50 border-neutral-200 text-neutral-700 dark:bg-neutral-900 dark:border-neutral-800 dark:text-neutral-300">
                  {selectedFeedback.improvement_suggestions}
                </p>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center py-10">
              <p className="text-center text-neutral-500 text-sm animate-pulse">
                Loading feedback...
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
