"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Home } from "lucide-react";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-white to-slate-100 text-neutral-900 dark:from-neutral-950 dark:to-neutral-900 dark:text-neutral-100 px-6">
      {/* Background glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-600 blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center text-center rounded-3xl border border-neutral-200 bg-white/90 p-10 shadow-2xl ring-1 ring-slate-100/50 backdrop-blur-lg dark:border-neutral-800 dark:bg-neutral-900/80">
        {/* Icon Section */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-violet-600 text-white shadow-lg shadow-indigo-500/30">
          <AlertTriangle className="h-12 w-12" />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold tracking-tight mb-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-600 bg-clip-text text-transparent">
          Page Not Found
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-md text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
          Oops! The page you’re looking for doesn’t exist or has been moved. Try
          checking the URL or return to the dashboard.
        </motion.p>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 px-6 py-2.5 text-white text-sm font-medium shadow-md shadow-indigo-500/30 transition hover:shadow-lg hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-600">
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
        </motion.div>
      </motion.div>

      {/* Decorative bottom blur */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-indigo-500/10 to-transparent blur-2xl" />
    </div>
  );
}
