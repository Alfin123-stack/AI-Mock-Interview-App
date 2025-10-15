"use client";

import { motion } from "framer-motion";
import DashboardGradientIcon from "./DashboardGradientIcon";

export default function DashboardActionCard({
  icon,
  title,
  desc,
  gradient,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  gradient?: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.04, y: -3 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="cursor-pointer rounded-2xl border bg-white p-6 shadow-md transition hover:shadow-xl dark:bg-neutral-900">
      <div className="mb-3 flex items-center gap-4">
        <DashboardGradientIcon gradient={gradient}>
          {icon}
        </DashboardGradientIcon>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </motion.div>
  );
}
