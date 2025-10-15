import { ClipboardCheck, LineChart, PlayCircle, UserPlus } from "lucide-react";
import { motion } from "motion/react";


// ========== How It Works Section ==========
export function HowItWorksSection() {
  const steps = [
    {
      step: <UserPlus className="h-6 w-6 text-white" />,
      title: "Sign Up & Log In",
      desc: "Create your free account securely with Clerk authentication.",
    },
    {
      step: <PlayCircle className="h-6 w-6 text-white" />,
      title: "Start a Mock Interview",
      desc: "Choose your role and interview type, then meet your AI avatar.",
    },
    {
      step: <ClipboardCheck className="h-6 w-6 text-white" />,
      title: "Receive Feedback",
      desc: "Get instant performance analytics and improvement tips.",
    },
    {
      step: <LineChart className="h-6 w-6 text-white" />,
      title: "Track Your Progress",
      desc: "All your sessions are stored securely in Convex DB.",
    },
  ];

  return (
    <section className="relative bg-slate-50 py-24 dark:bg-neutral-900">
      <div className="mx-auto max-w-7xl px-4 text-center md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-slate-800 dark:text-slate-100">
          How It Works
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="rounded-xl border border-neutral-200 bg-white p-6 shadow-md transition hover:scale-[1.02] hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-950">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-pink-500 shadow-md">
                {s.step}
              </div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
