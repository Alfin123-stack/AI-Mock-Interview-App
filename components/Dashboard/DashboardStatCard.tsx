"use client";

import { motion } from "framer-motion";

export default function DashboardStatCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string | number;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="flex flex-col sm:flex-row items-center sm:items-start sm:gap-4 gap-2 rounded-2xl border bg-white p-4 sm:p-6 shadow-sm transition dark:bg-neutral-900 dark:border-neutral-800">
      {/* Icon */}
      <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gradient-to-br from-violet-500/10 to-pink-500/10 dark:from-violet-400/10 dark:to-pink-400/10">
        <div className="text-violet-600 dark:text-violet-400">{icon}</div>
      </div>

      {/* Text */}
      <div className="text-center sm:text-left">
        <p className="text-xs sm:text-sm text-muted-foreground">{label}</p>
        <p className="text-xl sm:text-2xl font-semibold text-slate-800 dark:text-slate-100">
          {value}
        </p>
      </div>
    </motion.div>
  );
}
