"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

export function InterviewCTA({ interviewId }: { interviewId: string }) {
  return (
    <section className="mx-auto mb-16 flex w-full max-w-3xl flex-col items-center justify-center gap-8 px-4 text-center sm:gap-10 md:gap-12">
      {/* Animated Illustration */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full max-w-[360px] sm:max-w-[420px] md:max-w-[500px]">
        <Image
          src="https://illustrations.popsy.co/white/presentation.svg"
          alt="Interview preparation illustration"
          width={500}
          height={350}
          priority
          className="mx-auto w-full rounded-xl drop-shadow-lg"
        />
      </motion.div>

      {/* CTA Text and Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center">
        <Link href={`/interview/${interviewId}/start`} passHref>
          <Button
            size="lg"
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 px-6 py-3 text-base font-semibold text-white shadow-md transition-all hover:scale-105 hover:shadow-lg sm:px-8 sm:py-4 sm:text-lg">
            <Rocket className="h-5 w-5 sm:h-6 sm:w-6" />
            Start Interview
          </Button>
        </Link>

        <p className="mt-3 text-sm text-muted-foreground sm:text-base">
          Expected duration: <strong>20–30 minutes</strong>
        </p>
      </motion.div>
    </section>
  );
}
