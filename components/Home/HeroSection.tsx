"use client";

import { motion } from "motion/react";

// ========== Hero Section ==========
export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950">
      {/* Background blur decoration */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-gradient-to-tr from-violet-500/30 to-pink-500/30 blur-3xl" />
      <div className="absolute top-0 right-0 h-60 w-60 rounded-full bg-blue-400/20 blur-3xl" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-4 pt-24 text-center md:px-6 md:pt-32">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-5xl text-balance text-4xl font-bold tracking-tight text-slate-800 md:text-6xl lg:text-7xl dark:text-slate-100">
          Ace Your Next{" "}
          <span className="bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">
            AI Mock Interview
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-6 max-w-2xl text-lg text-balance text-neutral-600 dark:text-neutral-400">
          Practice interviews with an AI-powered avatar, get instant feedback,
          and boost your confidence. Secure, interactive, and designed for
          real-world interview prep.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button className="w-48 transform rounded-xl bg-gradient-to-r from-violet-600 to-pink-500 px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:opacity-90 hover:shadow-xl dark:from-violet-500 dark:to-pink-400">
            Start Practicing
          </button>
          <button className="w-48 transform rounded-xl border border-violet-200/40 bg-white/60 px-6 py-3 text-base font-medium text-slate-800 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/80 dark:border-violet-500/20 dark:bg-neutral-900/60 dark:text-white dark:hover:bg-neutral-800/80">
            Watch Demo
          </button>
        </motion.div>
      </div>
    </section>
  );
}
