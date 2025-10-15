import UpgradePage from "@/components/Upgrade/UpgradePage";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Upgrade Your Plan | AI Mock Interview",
  description:
    "Unlock the full power of AI Mock Interview. Access unlimited sessions, advanced analytics, and personalized AI feedback to supercharge your interview prep.",
  keywords: [
    "AI interview practice",
    "mock interview",
    "interview preparation",
    "AI career coach",
    "AI feedback",
    "tech interviews",
    "upgrade plan",
  ],
  openGraph: {
    title: "Upgrade to Pro | AI Mock Interview",
    description:
      "Enhance your interview preparation with AI-powered insights, unlimited mock sessions, and pro tools.",
    url: "https://aimockinterview.app/upgrade",
    siteName: "AI Mock Interview",
    images: [
      {
        url: "https://aimockinterview.app/og-upgrade.png",
        width: 1200,
        height: 630,
        alt: "AI Mock Interview Upgrade",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Upgrade to Pro | AI Mock Interview",
    description:
      "Boost your interview readiness with Pro features — unlimited AI sessions, analytics, and smart feedback.",
    images: ["https://aimockinterview.app/og-upgrade.png"],
  },
  authors: [
    { name: "AI Mock Interview Team", url: "https://aimockinterview.app" },
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://aimockinterview.app/upgrade",
  },
};

export default function Page() {
  return <UpgradePage />;
}
