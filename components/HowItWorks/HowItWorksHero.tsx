"use client";

import { motion } from "motion/react";

export default function HowItWorksHero() {
  return (
    <section className="relative text-center py-24">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-gradient-to-tr from-violet-500/20 to-pink-500/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 md:px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-slate-800 dark:text-slate-100">
          How It Works
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 max-w-2xl mx-auto text-lg text-neutral-600 dark:text-neutral-400">
          A simple, effective process designed to prepare you for success.
        </motion.p>

        <div className="mt-10 h-px w-24 mx-auto bg-gradient-to-r from-violet-500 to-pink-500 rounded-full" />
      </div>
    </section>
  );
}
