import InterviewPage from "@/components/Interview/InterviewPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Interview Session | AI Mock Interview",
  description:
    "Start your AI-powered mock interview. Practice real-time with an intelligent AI interviewer and receive instant feedback to enhance your communication and confidence.",
  keywords: [
    "AI mock interview",
    "AI interviewer",
    "mock interview practice",
    "AI job interview simulation",
    "AI interview feedback",
    "AI communication assessment",
    "virtual interview tool",
  ],
  openGraph: {
    title: "AI Interview Session | AI Mock Interview",
    description:
      "Engage with your personalized AI interviewer. Practice your responses, get real-time AI feedback, and track your performance — all in one immersive interview session.",
    url: "https://aimockinterview.app/interview",
    siteName: "AI Mock Interview",
    images: [
      {
        url: "https://aimockinterview.app/og-interview.png",
        width: 1200,
        height: 630,
        alt: "AI Mock Interview Session",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Interview Session | AI Mock Interview",
    description:
      "Experience realistic AI-driven interviews and receive professional feedback to improve your interview performance.",
    images: ["https://aimockinterview.app/og-interview.png"],
  },
  authors: [
    { name: "AI Mock Interview Team", url: "https://aimockinterview.app" },
  ],
  robots: {
    index: false, // session page bersifat private
    follow: false,
  },
  alternates: {
    canonical: "https://aimockinterview.app/interview",
  },
};

export default function page() {
  return <InterviewPage />;
}
