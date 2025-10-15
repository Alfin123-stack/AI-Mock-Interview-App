"use client";

import { motion } from "motion/react";
import { UserPlus, PlayCircle, ClipboardCheck, LineChart } from "lucide-react";

const steps = [
  {
    icon: <UserPlus className="h-6 w-6 text-white" />,
    title: "Sign Up & Log In",
    desc: "Create your account securely with Clerk and get started instantly.",
    gradient: "from-violet-500 to-pink-500",
  },
  {
    icon: <PlayCircle className="h-6 w-6 text-white" />,
    title: "Start a Mock Interview",
    desc: "Pick your role and type of interview, then meet your AI avatar.",
    gradient: "from-pink-500 to-orange-400",
  },
  {
    icon: <ClipboardCheck className="h-6 w-6 text-white" />,
    title: "Receive Feedback",
    desc: "Get instant analytics on tone, clarity, and communication skills.",
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    icon: <LineChart className="h-6 w-6 text-white" />,
    title: "Track Your Progress",
    desc: "Review your sessions and see your improvement over time.",
    gradient: "from-blue-500 to-indigo-500",
  },
];

export default function HowItWorksSteps() {
  return (
    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4 px-4 md:px-6 max-w-6xl mx-auto">
      {steps.map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2 }}
          viewport={{ once: true }}
          className="group rounded-xl border border-neutral-200 bg-white p-6 shadow-md transition hover:scale-[1.03] hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-950">
          <div
            className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r ${s.gradient} shadow-md transition-transform group-hover:rotate-6`}>
            {s.icon}
          </div>
          <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
            {s.title}
          </h3>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
            {s.desc}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
