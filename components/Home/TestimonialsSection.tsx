import { motion } from "motion/react";
import Image from "next/image";
// ========== Testimonials Section ==========
export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer @ Google",
      feedback:
        "This platform helped me gain confidence before my real interviews. The AI avatar feels surprisingly natural!",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Michael Chen",
      role: "Data Analyst @ Spotify",
      feedback:
        "The instant feedback is gold. It pointed out things I never realized about my communication style.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Alicia Gomez",
      role: "Product Manager @ Meta",
      feedback:
        "Being able to practice anytime with AI made my prep much easier. Highly recommend it!",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];

  return (
    <section className="relative bg-white py-24 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 text-center md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-slate-800 dark:text-slate-100">
          What Our Users Say
        </h2>
        <p className="mt-4 text-neutral-600 dark:text-neutral-400">
          Trusted by job seekers worldwide to prepare for their dream roles.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="rounded-xl border border-neutral-200/60 bg-neutral-50 p-6 shadow-md transition hover:scale-[1.02] hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900">
              <div className="flex items-center gap-4">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-violet-500/40"
                />
                <div className="text-left">
                  <h3 className="text-base font-semibold text-slate-800 dark:text-slate-100">
                    {t.name}
                  </h3>
                  <p className="text-sm text-neutral-500">{t.role}</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
                “{t.feedback}”
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
