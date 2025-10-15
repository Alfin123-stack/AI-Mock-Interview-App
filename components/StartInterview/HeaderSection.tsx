"use client";

import { motion } from "framer-motion";

export default function HeaderSection({ title }: { title?: string }) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: "easeOut" },
        },
      }}
      className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 px-4">
      <motion.h1
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-3 sm:mb-4 
                   bg-clip-text text-transparent 
                   bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
                   drop-shadow-sm">
        {title || "Start Interview"}
      </motion.h1>

      <p className="text-sm sm:text-base text-gray-700 dark:text-gray-400 leading-relaxed">
        Prepare and begin your{" "}
        <span className="font-semibold text-indigo-500">AI-powered</span> mock
        interview session.
      </p>
    </motion.section>
  );
}
