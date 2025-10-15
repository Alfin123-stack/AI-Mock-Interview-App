"use client";

import { useUser } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

import {
  CalendarCheck,
  Timer,
  BarChart3,
  PlusCircle,
  History,
  Sparkles,
} from "lucide-react";
import DashboardHero from "./DashboardHero";
import DashboardActionCard from "./DashboardActionCard";
import DashboardStatCard from "./DashboardStatCard";
import DashboardLoadingSkeleton from "./DashboardLoadingSkeleton";
import DashboardEmptyState from "./DashboardEmptyState";
import { DashboardInterviewCards } from "./DashboardInterviewCards";
import DashboardAISuggestions from "./DashboardAISuggestions";
import DashboardSectionHeading from "./DashboardSectionHeading";

export default function DashboardPage() {
  const { user } = useUser();
  const interviews = useQuery(
    api.interview.listInterviewSessions,
    user ? { userId: user.id as string } : "skip"
  );

  return (
    <div className="space-y-14">
      {/* Hero */}
      <DashboardHero user={user ?? null} />

      {/* Quick Actions */}
      <DashboardSectionHeading title="Quick Actions" />
      <div className="grid gap-6 md:grid-cols-3">
        <DashboardActionCard
          icon={<PlusCircle className="h-6 w-6" />}
          title="Start New Interview"
          desc="Practice now with AI-driven mock interview sessions."
        />
        <DashboardActionCard
          icon={<History className="h-6 w-6" />}
          title="Review Past Interviews"
          desc="Check your answers, feedback, and improvement areas."
          gradient="from-purple-500 to-pink-500"
        />
        <DashboardActionCard
          icon={<Sparkles className="h-6 w-6" />}
          title="AI Tips & Coaching"
          desc="Get personalized guidance to level up your interviews."
          gradient="from-violet-500 to-indigo-500"
        />
      </div>

      {/* Stats */}
      <DashboardSectionHeading title="Your Stats" />
      <div className="grid gap-6 md:grid-cols-3">
        <DashboardStatCard
          icon={<BarChart3 className="h-8 w-8 text-indigo-600" />}
          label="Total Interviews"
          value={interviews?.length ?? 0}
        />
        <DashboardStatCard
          icon={<CalendarCheck className="h-8 w-8 text-purple-600" />}
          label="Upcoming"
          value={
            interviews?.filter((i) => i.status === "scheduled").length ?? 0
          }
        />
        <DashboardStatCard
          icon={<Timer className="h-8 w-8 text-violet-600" />}
          label="Last Activity"
          value={
            interviews && interviews.length > 0
              ? new Date(
                  Math.max(
                    ...interviews.map((i) =>
                      new Date(i._creationTime).getTime()
                    )
                  )
                ).toLocaleDateString()
              : "—"
          }
        />
      </div>

      {/* Content */}
      <DashboardSectionHeading title="Your Interviews" />
      <div>
        {!interviews ? (
          <DashboardLoadingSkeleton />
        ) : interviews.length === 0 ? (
          <DashboardEmptyState />
        ) : (
          <DashboardInterviewCards
            interviews={interviews
              .filter(
                (i) =>
                  i.status === "completed" ||
                  i.status === "in-progress" ||
                  i.status === "scheduled"
              )
              .map((i) => ({
                ...i,
                status: i.status as "completed" | "in-progress" | "scheduled",
                jobTitle: i.jobTitle ?? "",
                jobDescription: i.jobDescription ?? "",
              }))}
          />
        )}
      </div>

      {/* AI Suggestions */}
      <DashboardAISuggestions />
    </div>
  );
}
