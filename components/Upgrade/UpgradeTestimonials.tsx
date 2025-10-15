"use client";

import { motion } from "framer-motion";

export function UpgradeTestimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer",
      text: "The Pro plan completely changed my prep. I landed my dream role thanks to the feedback system!",
    },
    {
      name: "David Kim",
      role: "Data Scientist",
      text: "I love the analytics. Seeing my progress over time keeps me motivated.",
    },
    {
      name: "Aisha Patel",
      role: "Product Manager",
      text: "Enterprise gave our team a huge edge. Custom avatars made practice fun and realistic.",
    },
  ];

  return (
    <>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(129,140,248,0.15),transparent_50%)]" />
      <div className="mx-auto max-w-6xl px-4 text-center md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-slate-800 dark:text-slate-100">
          Trusted by professionals worldwide
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-3 text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          Hear what real users say about upgrading to Pro and Enterprise plans.
        </motion.p>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{
                y: -6,
                boxShadow:
                  "0 12px 25px rgba(0,0,0,0.08), 0 0 15px rgba(129,140,248,0.2)",
              }}
              className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white/90 dark:border-neutral-800 dark:bg-neutral-950/80 backdrop-blur-sm p-8 text-left transition-transform">
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed italic">
                “{t.text}”
              </p>

              <div className="mt-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 text-white font-semibold text-lg">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="font-semibold text-slate-800 dark:text-slate-100">
                    {t.name}
                  </div>
                  <div className="text-sm text-neutral-500 dark:text-neutral-400">
                    {t.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
