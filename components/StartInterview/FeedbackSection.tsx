"use client";

import { motion } from "framer-motion";
import { useUser } from "@clerk/nextjs";
import { useFeedback } from "@/app/_hooks/useFeedback";
import { Button } from "@/components/ui/button";
import { Bot, Loader2 } from "lucide-react";
import React from "react";

/* ---------------- Types ---------------- */
export interface Feedback {
  createdAt: string;
  detailed_feedback: {
    communication_clarity: string;
    problem_solving_approach: string;
    relevance_and_engagement: string;
    technical_knowledge: string;
  };
  improvement_suggestions: string;
  scores: {
    communication_clarity: number;
    problem_solving_approach: number;
    relevance_and_engagement: number;
    technical_knowledge: number;
  };
  sessionId: string;
  summary: string;
  userId: string;
}

/* ---------------- Main Component ---------------- */
export default function FeedbackSection({
  interviewId,
}: {
  interviewId?: string;
}) {
  const { user } = useUser();
  const { feedback, loadingFeedback, handleGetFeedback } = useFeedback(
    interviewId ?? "",
    user?.id ?? ""
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-4 mt-4 sm:p-6 md:p-8 rounded-3xl shadow-2xl border border-gray-100 dark:border-neutral-800 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm w-full">
      {/* Header */}
      <div className="flex items-center justify-between gap-3 mb-6 flex-wrap">
        <div className="flex items-center gap-2">
          <Bot className="w-6 h-6 text-indigo-500" />
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100">
            AI Interview Feedback
          </h2>
        </div>

        <Button
          onClick={handleGetFeedback}
          disabled={loadingFeedback || feedback !== null}
          className="rounded-full px-6 py-2 bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white font-semibold shadow-lg transition-all duration-300 flex items-center gap-2">
          {loadingFeedback ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" /> Generating...
            </>
          ) : (
            "Get Feedback"
          )}
        </Button>
      </div>

      {/* Feedback States */}
      {!feedback ? (
        <p className="text-gray-500 dark:text-gray-400 text-center py-10 text-sm sm:text-base italic">
          Click the button above to generate personalized AI feedback for your
          interview session.
        </p>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="space-y-8">
          <FeedbackSummary feedback={feedback} />
          <FeedbackScores feedback={feedback} />
          <FeedbackDetails feedback={feedback} />
          <FeedbackSuggestions feedback={feedback} />
        </motion.div>
      )}
    </motion.div>
  );
}

/* ---------------- Subcomponents ---------------- */
interface FeedbackProps {
  feedback: Feedback;
}

function FeedbackSummary({ feedback }: FeedbackProps) {
  return (
    <section>
      <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
        🧭 Summary
      </h3>
      <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed bg-gray-50 dark:bg-neutral-800 p-4 rounded-2xl border border-gray-200 dark:border-neutral-800">
        {feedback.summary}
      </p>
    </section>
  );
}

function FeedbackScores({ feedback }: FeedbackProps) {
  return (
    <section>
      <h3 className="text-base sm:text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
        📊 Overall Scores
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {Object.entries(feedback.scores).map(([key, value]) => (
          <motion.div
            key={key}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.25 }}
            className="p-4 rounded-2xl border border-gray-200 dark:border-neutral-800 bg-gradient-to-b from-white to-gray-50 dark:from-neutral-900 dark:to-neutral-800 text-center shadow-sm hover:shadow-md transition-all duration-300">
            <p className="text-xs sm:text-sm font-medium capitalize text-gray-500 mb-1">
              {key.replace(/_/g, " ")}
            </p>
            <p className="text-2xl sm:text-3xl font-extrabold text-indigo-500">
              {value}/10
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function FeedbackDetails({ feedback }: FeedbackProps) {
  return (
    <section>
      <h3 className="text-base sm:text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
        💬 Detailed Feedback
      </h3>
      <div className="grid gap-4 sm:gap-5">
        {Object.entries(feedback.detailed_feedback).map(([key, value]) => (
          <motion.div
            key={key}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.25 }}
            className="bg-gray-50 dark:bg-neutral-800 p-4 sm:p-5 rounded-2xl border border-gray-200 dark:border-neutral-800 hover:border-indigo-300/50 dark:hover:border-indigo-700/40 transition-all duration-300">
            <p className="font-semibold text-indigo-500 text-sm sm:text-base mb-1 capitalize">
              {key.replace(/_/g, " ")}
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
              {value}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function FeedbackSuggestions({ feedback }: FeedbackProps) {
  return (
    <section>
      <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
        🚀 Suggestions
      </h3>
      <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/30 dark:via-purple-950/20 dark:to-pink-950/20 border border-indigo-100 dark:border-indigo-900/40 rounded-2xl p-4 sm:p-5 shadow-sm">
        <p className="text-gray-700 dark:text-gray-200 text-sm sm:text-base leading-relaxed">
          {feedback.improvement_suggestions}
        </p>
      </div>
    </section>
  );
}
