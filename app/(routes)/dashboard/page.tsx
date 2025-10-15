import DashboardPage from "@/components/Dashboard/DashboardPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | AI Mock Interview",
  description:
    "Access your personalized AI mock interviews, feedback reports, and performance analytics — all in one smart dashboard. Continue your journey to mastering job interviews with AI-driven insights.",
  keywords: [
    "AI interview dashboard",
    "mock interview results",
    "AI feedback",
    "interview analytics",
    "AI mock interview practice",
    "career preparation tools",
  ],
  openGraph: {
    title: "Dashboard | AI Mock Interview",
    description:
      "Your central hub for AI mock interviews and feedback analytics. Review your sessions, track progress, and improve your interview skills with data-driven insights.",
    url: "https://aimockinterview.app/dashboard",
    siteName: "AI Mock Interview",
    images: [
      {
        url: "https://aimockinterview.app/og-dashboard.png",
        width: 1200,
        height: 630,
        alt: "AI Mock Interview Dashboard Overview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dashboard | AI Mock Interview",
    description:
      "Track your interview progress, review AI feedback, and get personalized improvement insights in your AI Mock Interview dashboard.",
    images: ["https://aimockinterview.app/og-dashboard.png"],
  },
  authors: [
    { name: "AI Mock Interview Team", url: "https://aimockinterview.app" },
  ],
  robots: {
    index: false, // dashboard biasanya hanya untuk user yang login
    follow: false,
  },
  alternates: {
    canonical: "https://aimockinterview.app/dashboard",
  },
};

export default function page() {
  return <DashboardPage />;
}
