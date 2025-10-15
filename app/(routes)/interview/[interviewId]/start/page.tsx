import type { Metadata } from "next";
import React from "react";
import StartInterviewPage from "../../../../../components/StartInterview/StartInterviewPage";

export const metadata: Metadata = {
  title: "Start Your AI Mock Interview | AI Interview Practice",
  description:
    "Begin your personalized AI-powered mock interview session. Interact with your AI interviewer, answer real-world questions, and receive instant performance feedback.",
  keywords: [
    "AI mock interview",
    "AI interviewer",
    "virtual interview",
    "mock interview simulator",
    "AI interview preparation",
    "AI feedback system",
    "communication skill training",
    "interview practice online",
  ],
  openGraph: {
    title: "Start Your AI Mock Interview | AI Interview Practice",
    description:
      "Engage in a realistic AI-driven mock interview experience. Practice answering questions, track your performance, and get intelligent feedback in real time.",
    url: "https://aimockinterview.app/interview/start",
    siteName: "AI Mock Interview",
    images: [
      {
        url: "https://aimockinterview.app/og-start-interview.png",
        width: 1200,
        height: 630,
        alt: "AI Mock Interview Session Interface",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Start Your AI Mock Interview | AI Interview Practice",
    description:
      "Experience a next-gen mock interview with an AI interviewer that gives real-time analytics and professional feedback.",
    images: ["https://aimockinterview.app/og-start-interview.png"],
  },
  authors: [
    { name: "AI Mock Interview Team", url: "https://aimockinterview.app" },
  ],
  robots: {
    index: false, // halaman interview bersifat pribadi
    follow: false,
  },
  alternates: {
    canonical: "https://aimockinterview.app/interview/start",
  },
};

export default function page() {
  return <StartInterviewPage />;
}
