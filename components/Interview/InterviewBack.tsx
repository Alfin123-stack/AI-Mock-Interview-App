"use client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function InterviewBack() {
  return (
    <div className="flex justify-center mt-10 mb-6 sm:px-0">
      <Link
        href="/dashboard"
        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 px-5 py-2.5 text-sm font-medium text-white shadow-md transition-all duration-200 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:from-indigo-600 dark:to-violet-700">
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Dashboard</span>
      </Link>
    </div>
  );
}
