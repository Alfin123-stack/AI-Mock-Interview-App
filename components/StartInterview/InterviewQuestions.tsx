"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { ClipboardList } from "lucide-react";

interface InterviewQuestionsProps {
  interviewQuestions: { question: string; answer?: string }[];
}

export default function InterviewQuestions({
  interviewQuestions,
}: InterviewQuestionsProps) {
  if (!interviewQuestions?.length) {
    return (
      <div className="rounded-2xl shadow-lg border bg-white dark:bg-neutral-900 p-6 text-center text-gray-600 dark:text-gray-400">
        No interview questions available.
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-4 sm:p-6 md:p-8 rounded-3xl shadow-2xl border border-gray-100 dark:border-neutral-800 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm w-full">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <ClipboardList className="w-6 h-6 text-indigo-500" />
        <h2 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100">
          Interview Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
        {interviewQuestions.map((q, idx) => (
          <AccordionItem
            key={idx}
            value={`q-${idx}`}
            className="overflow-hidden rounded-2xl border border-gray-200 dark:border-neutral-800 bg-gradient-to-b from-white to-gray-50 dark:from-neutral-900 dark:to-neutral-800 shadow-sm hover:shadow-md transition-all duration-300">
            <AccordionTrigger className="flex items-start justify-between px-4 py-4 text-left hover:bg-gray-50 dark:hover:bg-neutral-800/60 transition">
              <div className="flex items-start gap-3 sm:gap-4 w-full">
                {/* ✅ Lingkaran nomor fix sempurna */}
                <div className="flex-shrink-0 flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-semibold text-base sm:text-lg shadow-md">
                  {idx + 1}
                </div>

                <div className="flex-1">
                  <p className="font-medium text-gray-900 dark:text-gray-100 text-sm sm:text-base leading-snug">
                    {q.question}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Tap to view answer
                  </p>
                </div>
              </div>
            </AccordionTrigger>

            <AccordionContent className="px-4 pb-4">
              {q.answer ? (
                <div className="text-sm sm:text-base bg-gray-50 dark:bg-neutral-800 p-4 rounded-xl border text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong className="text-indigo-500">Answer:</strong>
                  <div className="mt-2 whitespace-pre-line">{q.answer}</div>
                </div>
              ) : (
                <div className="text-sm text-gray-600 dark:text-gray-400 italic">
                  No saved answer yet. Practice during session.
                </div>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.div>
  );
}
