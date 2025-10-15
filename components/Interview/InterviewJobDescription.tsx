"use client";
import { ClipboardList } from "lucide-react";

export function InterviewJobDescription({ desc }: { desc: string }) {
  return (
    <section className="mx-auto mb-10">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900 sm:p-8">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-slate-900 dark:text-slate-100 sm:text-xl">
          <ClipboardList className="h-5 w-5 text-indigo-500" />
          Job Description
        </h2>

        <div className="prose prose-sm max-w-none whitespace-pre-line text-slate-700 dark:prose-invert dark:text-slate-300 sm:prose-base">
          {desc || "No job description provided."}
        </div>
      </div>
    </section>
  );
}
