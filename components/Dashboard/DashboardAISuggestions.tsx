"use client";

import { Lightbulb } from "lucide-react";

export default function DashboardAISuggestions() {
  const tips = [
    "Practice answering behavioral questions with STAR method.",
    "Focus on concise answers (2–3 minutes max).",
    "Track your progress weekly to spot improvement areas.",
  ];

  return (
    <div className="rounded-2xl border bg-gradient-to-br from-violet-50 via-indigo-50 to-white p-6 shadow-sm dark:from-neutral-800 dark:via-neutral-900 dark:to-neutral-950">
      <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold">
        <Lightbulb className="h-5 w-5 text-yellow-500" /> Improve your
        performance
      </h3>
      <ul className="space-y-3 text-sm text-muted-foreground">
        {tips.map((tip, i) => (
          <li
            key={i}
            className="flex items-center gap-2 rounded-md px-2 py-1 transition hover:bg-slate-100 dark:hover:bg-neutral-800">
            <span
              className={`h-2 w-2 rounded-full ${
                i === 0
                  ? "bg-indigo-500"
                  : i === 1
                    ? "bg-purple-500"
                    : "bg-violet-500"
              }`}
            />
            {tip}
          </li>
        ))}
      </ul>
    </div>
  );
}
