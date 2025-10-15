"use client";

import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

export default function LoadingPage() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-white to-slate-100 text-neutral-900 dark:from-neutral-950 dark:to-neutral-900 dark:text-neutral-100 px-6">
      {/* Background Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-600 blur-3xl"
      />

      {/* Loader Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center text-center rounded-3xl border border-neutral-200 bg-white/90 p-10 shadow-2xl ring-1 ring-slate-100/50 backdrop-blur-lg dark:border-neutral-800 dark:bg-neutral-900/80">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
          className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-600 text-white shadow-lg shadow-indigo-500/30">
          <Loader2 className="h-10 w-10" />
        </motion.div>

        <h1 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-indigo-400 via-purple-500 to-violet-600 bg-clip-text text-transparent">
          Preparing Your Interview
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm max-w-sm leading-relaxed">
          Please wait a moment while we set up your session and fetch the
          necessary data.
        </p>
      </motion.div>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-indigo-500/10 to-transparent blur-2xl" />
    </div>
  );
}
