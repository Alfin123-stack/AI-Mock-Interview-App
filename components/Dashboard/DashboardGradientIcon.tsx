"use client";

export default function DashboardGradientIcon({
  children,
  gradient = "from-indigo-500 to-violet-500",
}: {
  children: React.ReactNode;
  gradient?: string;
}) {
  return (
    <div
      className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${gradient} text-white shadow-md ring-1 ring-black/10`}
    >
      {children}
    </div>
  );
}
