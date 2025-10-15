"use client";

import { motion } from "framer-motion";

export function UpgradeFAQ() {
  const faqs = [
    {
      q: "Can I cancel anytime?",
      a: "Yes, you can cancel your subscription at any time with no hidden fees.",
    },
    {
      q: "Do you offer refunds?",
      a: "We offer a 7-day refund policy if you're not satisfied.",
    },
    {
      q: "Is there a free trial?",
      a: "Yes, you can try the Free plan before upgrading.",
    },
  ];

  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-800 dark:text-slate-100">
          Frequently Asked Questions
        </h2>
        <div className="mt-12 space-y-6">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                y: -6,
                boxShadow:
                  "0 12px 25px rgba(0,0,0,0.08), 0 0 15px rgba(129,140,248,0.2)",
              }}
              className="rounded-lg border border-neutral-200 bg-white p-6 shadow-md dark:border-neutral-800 dark:bg-neutral-900 hover:shadow-lg transition-shadow hover:scale-[1.01] hover:z-10 hover:-translate-y-1 hover:dark:shadow-neutral-800/30 ease-in-out 1s">
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
                {faq.q}
              </h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                {faq.a}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
