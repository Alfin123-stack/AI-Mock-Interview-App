"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    title: "Free",
    price: "$0",
    features: ["Basic AI interviews", "Limited sessions", "Community support"],
    highlighted: false,
  },
  {
    title: "Pro",
    price: "$19/mo",
    features: [
      "Unlimited interviews",
      "Advanced analytics",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    title: "Enterprise",
    price: "Custom",
    features: ["Team collaboration", "Custom AI avatars", "Dedicated support"],
    highlighted: false,
  },
];

export function UpgradePricing() {
  return (
    <section className="relative pb-24">
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6 grid gap-8 md:grid-cols-3">
        {plans.map((plan, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
            viewport={{ once: true }}
            className={`rounded-2xl border shadow-md p-8 flex flex-col ${
              plan.highlighted
                ? "border-violet-500 bg-gradient-to-br from-violet-50 to-pink-50 dark:from-violet-950/40 dark:to-pink-950/40"
                : "border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950"
            }`}
          >
            <h2 className="text-2xl font-bold mb-3">{plan.title}</h2>
            <p className="text-4xl font-extrabold mb-6">{plan.price}</p>
            <ul className="flex-1 space-y-3 text-left">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-violet-500" /> {f}
                </li>
              ))}
            </ul>
            <button
              className={`mt-8 w-full transform rounded-xl px-6 py-3 font-semibold shadow-md transition hover:-translate-y-0.5 hover:shadow-lg ${
                plan.highlighted
                  ? "bg-gradient-to-r from-violet-600 to-pink-500 text-white"
                  : "border border-neutral-300 bg-white dark:bg-neutral-900 dark:border-neutral-700 text-slate-800 dark:text-white"
              }`}
            >
              {plan.highlighted ? "Get Pro" : "Select"}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
