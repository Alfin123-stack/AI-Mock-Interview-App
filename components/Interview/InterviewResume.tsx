"use client";

import { FileText } from "lucide-react";

export function InterviewResume({ url }: { url: string }) {
  return (
    <section className="mx-auto mb-12 w-full max-w-4xl sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900 sm:p-8">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-slate-900 dark:text-slate-100 sm:text-xl">
          <FileText className="h-5 w-5 text-indigo-500" />
          Resume
        </h2>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            You can view or download the uploaded resume below.
          </p>

          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 px-5 py-2 text-sm font-medium text-white shadow-md transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-indigo-400">
            <FileText className="h-4 w-4" />
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
}
