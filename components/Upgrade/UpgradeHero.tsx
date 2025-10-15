"use client";

import { motion } from "framer-motion";

export function UpgradeHero() {
  return (
    <section className="relative py-24 text-center">
      <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-violet-400/20 blur-3xl" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-slate-800 dark:text-slate-100"
        >
          Upgrade Your Plan
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 max-w-2xl mx-auto text-lg text-neutral-600 dark:text-neutral-400"
        >
          Unlock advanced features and take your interview prep to the next level.
        </motion.p>
      </div>
    </section>
  );
}
