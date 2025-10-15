import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ConvexClientProvider } from "./_contexts/ConvexClientProvider";
import { UserProvider } from "./_contexts/AuthUserContext";
import { ThemeProvider } from "@/components/theme-provider";
import { StreamingAvatarProvider } from "./components/logic";
import { Navbar } from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AI Mock Interview | Smart Practice for Real Job Interviews",
    template: "%s | AI Mock Interview",
  },
  description:
    "Prepare for your next job interview with AI Mock Interview — an intelligent platform that simulates real interview scenarios, gives instant feedback, and helps you improve communication and confidence.",

  keywords: [
    "AI mock interview",
    "interview preparation",
    "AI career coach",
    "mock interview app",
    "AI feedback",
    "job interview simulator",
    "AI resume practice",
    "technical interview AI",
  ],

  authors: [
    {
      name: "AI Mock Interview Team",
      url: "https://aimockinterview.app",
    },
  ],

  creator: "AI Mock Interview",
  publisher: "AI Mock Interview",

  metadataBase: new URL("https://aimockinterview.app"),

  openGraph: {
    title: "AI Mock Interview – Practice Smarter, Interview Better",
    description:
      "Experience realistic AI-powered mock interviews with instant performance feedback, personalized tips, and dynamic question sets.",
    url: "https://aimockinterview.app",
    siteName: "AI Mock Interview",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://aimockinterview.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Mock Interview App Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AI Mock Interview – Practice Smarter, Interview Better",
    description:
      "Level up your interview skills with AI-generated questions, video analysis, and real-time feedback.",
    creator: "@aimockinterview",
    images: ["https://aimockinterview.app/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],

  category: "Artificial Intelligence",

  alternates: {
    canonical: "https://aimockinterview.app",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-violet-50 via-indigo-50 to-white shadow-sm dark:from-neutral-800 dark:via-neutral-900 dark:to-neutral-950`}>
          <StreamingAvatarProvider>
            <ConvexClientProvider>
              <UserProvider>
                <ThemeProvider
                  attribute="class"
                  defaultTheme="system"
                  enableSystem
                  disableTransitionOnChange>
                  <Navbar />
                  {children}
                </ThemeProvider>
              </UserProvider>
            </ConvexClientProvider>
          </StreamingAvatarProvider>
        </body>
      </ClerkProvider>
    </html>
  );
}
