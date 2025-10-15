import HowItWorksPage from "@/components/HowItWorks/HowItWorksPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works | AI Mock Interview",
  description:
    "Discover how AI Mock Interview helps you prepare smarter. Learn how our AI interviewer analyzes your responses, scores your performance, and gives real-time feedback to help you improve.",
  keywords: [
    "how AI interview works",
    "AI mock interview process",
    "AI job interview practice",
    "interview preparation",
    "AI interview feedback",
    "mock interview demo",
  ],
  openGraph: {
    title: "How AI Mock Interview Works",
    description:
      "Step inside our AI-powered interview simulator. See how you can practice, get feedback, and improve your interview performance with cutting-edge AI.",
    url: "https://aimockinterview.app/how-it-works",
    siteName: "AI Mock Interview",
    images: [
      {
        url: "https://aimockinterview.app/og-how-it-works.png",
        width: 1200,
        height: 630,
        alt: "AI Mock Interview - How It Works Overview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How It Works | AI Mock Interview",
    description:
      "Learn how AI Mock Interview uses advanced AI to help you master job interviews with realistic practice sessions and personalized feedback.",
    images: ["https://aimockinterview.app/og-how-it-works.png"],
  },
  authors: [
    { name: "AI Mock Interview Team", url: "https://aimockinterview.app" },
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://aimockinterview.app/how-it-works",
  },
};

export default function Page() {
  return <HowItWorksPage />;
}
