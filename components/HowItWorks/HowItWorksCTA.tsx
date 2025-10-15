"use client";

import { motion } from "motion/react";

export default function HowItWorksCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      viewport={{ once: true }}
      className="mt-20 text-center">
      <button className="rounded-xl bg-gradient-to-r from-violet-600 to-pink-500 px-8 py-3 mb-6 font-semibold text-white shadow-md hover:opacity-90 transition">
        Start Practicing
      </button>
    </motion.div>
  );
}
