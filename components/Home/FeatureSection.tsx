"use client";
import { BarChart3, Bot, Database, Workflow } from "lucide-react";
import { motion } from "motion/react";
// ========== Features Section ==========
export function FeaturesSection() {
  const features = [
    {
      icon: <Bot className="h-6 w-6 text-violet-500" />,
      title: "AI-Powered Avatar",
      desc: "Have realistic mock interviews with a lifelike AI avatar powered by HeyGen.",
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-pink-500" />,
      title: "Instant Feedback",
      desc: "Get detailed insights into your performance, tone, and answers.",
    },
    {
      icon: <Database className="h-6 w-6 text-blue-500" />,
      title: "Secure Database",
      desc: "Your data is safe with Convex and Arcjet security layers.",
    },
    {
      icon: <Workflow className="h-6 w-6 text-green-500" />,
      title: "Custom Workflows",
      desc: "Automated interview flows powered by n8n integrations.",
    },
  ];

  return (
    <section className="relative bg-white py-24 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 text-center md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-slate-800 dark:text-slate-100">
          Why Choose Our Platform?
        </h2>
        <p className="mt-4 text-neutral-600 dark:text-neutral-400">
          Designed to help you land your dream job with confidence.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="rounded-xl border border-neutral-200/60 bg-neutral-50 p-6 shadow-md transition hover:scale-[1.02] hover:border-violet-300/40 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-tr from-violet-500/10 to-pink-500/10">
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
                {f.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
