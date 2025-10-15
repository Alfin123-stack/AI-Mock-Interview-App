"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { Loader2 } from "lucide-react";
import HeaderSection from "./HeaderSection";
import AvatarSection from "./AvatarSection";
import CameraSection from "./CameraSection";
import FeedbackSection from "./FeedbackSection";
import InterviewQuestions from "./InterviewQuestions";

export default function StartInterviewPage() {
  const params = useParams();
  const interviewId = params?.interviewId as string | undefined;

  const interview = useQuery(
    api.interview.getInterviewById,
    interviewId ? { id: interviewId as Id<"interviewSessionTable"> } : "skip"
  );

  if (!interview) {
    return (
      <div className="flex h-64 items-center justify-center">
        <Loader2 className="animate-spin w-7 h-7 text-indigo-500" />
      </div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 12 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { staggerChildren: 0.1, duration: 0.6 },
        },
      }}>
      <HeaderSection title={interview.jobTitle} />
      <div className="grid grid-cols-1 md:grid-cols-5 gap-5 mb-6">
        {/* Avatar: ambil 3 kolom */}
        <div className="md:col-span-3">
          <AvatarSection />
        </div>

        {/* Camera: ambil 2 kolom */}
        <div className="md:col-span-2">
          <CameraSection />
        </div>
      </div>
      <InterviewQuestions interviewQuestions={interview.interviewQuestions} />
      <FeedbackSection interviewId={interviewId} />
    </motion.div>
  );
}
