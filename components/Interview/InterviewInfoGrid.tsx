"use client";

import { motion } from "framer-motion";
import { Rocket, FileText, Users } from "lucide-react";
import { ReactNode } from "react";

interface Interview {
  status: "pending" | "completed" | "in_progress" | "failed" | string;
  _creationTime: number | string;
  participants?: string[];
}

interface InfoCardProps {
  icon: ReactNode;
  label: string;
  value: string | number;
}

export function InterviewInfoGrid({ interview }: { interview: Interview }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mx-auto mb-12 grid w-full max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <InfoCard
        icon={<Rocket className="h-8 w-8 text-indigo-500" />}
        label="Status"
        value={interview.status}
      />

      <InfoCard
        icon={<FileText className="h-8 w-8 text-indigo-500" />}
        label="Created"
        value={new Date(interview._creationTime).toLocaleDateString()}
      />

      <InfoCard
        icon={<Users className="h-8 w-8 text-indigo-500" />}
        label="Participants"
        value={interview.participants?.length || 1}
      />
    </motion.div>
  );
}

function InfoCard({ icon, label, value }: InfoCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.04, y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900">
      <div className="flex items-center justify-center rounded-xl bg-indigo-50 p-3 dark:bg-neutral-800">
        {icon}
      </div>
      <p className="text-sm text-slate-600 dark:text-slate-400">{label}</p>
      <p className="text-lg font-semibold capitalize text-slate-900 dark:text-slate-100">
        {value}
      </p>
    </motion.div>
  );
}
