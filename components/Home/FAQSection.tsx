"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export function FAQSection() {
  const faqs = [
    {
      q: "Is my data secure?",
      a: "Yes. All sessions are stored securely in Convex DB with Arcjet protection.",
    },
    {
      q: "Can I use it for free?",
      a: "We offer a free plan with limited mock interviews. You can upgrade for unlimited sessions and advanced analytics.",
    },
    {
      q: "Do I need to install anything?",
      a: "No installation needed. Everything runs directly in your browser.",
    },
    {
      q: "How realistic is the AI avatar?",
      a: "The avatar is powered by HeyGen, making conversations feel natural and engaging.",
    },
  ];

  return (
    <section className="relative bg-slate-50 py-24 dark:bg-neutral-900">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-800 dark:text-slate-100">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="mt-12 space-y-4">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-md dark:border-neutral-800 dark:bg-neutral-950 transition-transform hover:scale-[1.01] hover:shadow-lg">
              <AccordionTrigger className="flex w-full items-center justify-between px-6 py-4 text-left text-lg font-semibold text-slate-800 dark:text-slate-100 hover:bg-slate-100/50 dark:hover:bg-neutral-800/50 transition-colors">
                {f.q}
                <ChevronDown
                  className="h-5 w-5 text-neutral-500 transition-transform duration-200 data-[state=open]:rotate-180"
                  aria-hidden="true"
                />
              </AccordionTrigger>

              <AccordionContent className="px-6 pb-4 text-sm text-neutral-600 dark:text-neutral-400">
                <motion.p
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}>
                  {f.a}
                </motion.p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
