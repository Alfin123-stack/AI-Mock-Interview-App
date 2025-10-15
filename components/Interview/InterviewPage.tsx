"use client";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { useParams } from "next/navigation";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

import { InterviewHero } from "@/components/Interview/InterviewHero";
import { InterviewInfoGrid } from "@/components/Interview/InterviewInfoGrid";
import { InterviewCTA } from "@/components/Interview/InterviewCTA";
import { InterviewJobDescription } from "@/components/Interview/InterviewJobDescription";
import { InterviewResume } from "@/components/Interview/InterviewResume";
import { InterviewInvite } from "@/components/Interview/InterviewInvite";
import { InterviewBack } from "@/components/Interview/InterviewBack";

export default function InterviewPage() {
  const params = useParams();
  const interviewId = params.interviewId as string;

  const interview = useQuery(api.interview.getInterviewById, {
    id: interviewId as Id<"interviewSessionTable">,
  });

  if (!interview) {
    return (
      <div className="flex h-64 items-center justify-center">
        <Loader2 className="animate-spin w-6 h-6 text-gray-500 dark:text-gray-400" />
      </div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="min-h-screen py-10 space-y-10 ">
      <InterviewHero
        interview={{ ...interview, jobTitle: interview.jobTitle ?? "" }}
      />
      <InterviewInfoGrid interview={interview} />
      <InterviewCTA interviewId={interview._id} />
      {interview.jobDescription && (
        <InterviewJobDescription desc={interview.jobDescription} />
      )}
      {interview.resumeUrl && <InterviewResume url={interview.resumeUrl} />}
      <InterviewInvite interviewId={interview._id} />
      <InterviewBack />
    </motion.div>
  );
}
