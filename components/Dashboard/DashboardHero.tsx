"use client";

import { motion } from "framer-motion";
import DashboardInterviewDialog from "./DashboardInterviewDialog";
import type { UserResource } from "@clerk/types";

interface DashboardHeroProps {
  user: UserResource | null;
}

export default function DashboardHero({ user }: DashboardHeroProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-3xl border bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 p-6 sm:p-8 lg:p-12 shadow-xl text-white">
      {/* Decorative light gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.15),transparent_60%)]" />

      <div className="relative z-10 flex flex-col-reverse items-center gap-8 md:flex-row md:items-center md:justify-between">
        {/* Left: Text Section */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight drop-shadow-sm">
            Welcome back, {user?.firstName ?? "Guest"} 👋
          </h1>

          <p className="mt-3 text-sm sm:text-base opacity-90 leading-relaxed">
            Ready to practice? Manage your mock interviews, track your progress,
            and improve your skills with AI-powered coaching.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <DashboardInterviewDialog />
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm backdrop-blur-md transition hover:bg-white/20">
              Explore Tips ✨
            </motion.button>
          </div>
        </div>

        {/* Right: Illustration */}
        <motion.img
          src="https://illustrations.popsy.co/white/work-from-home.svg"
          alt="AI Interview"
          className="w-40 sm:w-52 md:w-60 lg:w-72 drop-shadow-lg"
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
}
