"use client";

export default function DashboardSectionHeading({ title }: { title: string }) {
  return (
    <h2 className="flex items-center gap-2 text-2xl font-bold tracking-tight">
      <span className="h-2 w-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600" />
      {title}
    </h2>
  );
}
