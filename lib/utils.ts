import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function statusBadgeClass(status?: string) {
  switch ((status || "").toLowerCase()) {
    case "completed":
      return "bg-emerald-100 text-emerald-700 ring-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300";
    case "scheduled":
      return "bg-sky-100 text-sky-700 ring-sky-200 dark:bg-sky-900/30 dark:text-sky-300";
    case "in-progress":
    case "in progress":
      return "bg-amber-100 text-amber-700 ring-amber-200 dark:bg-amber-900/30 dark:text-amber-300";
    case "canceled":
    case "cancelled":
      return "bg-rose-100 text-rose-700 ring-rose-200 dark:bg-rose-900/30 dark:text-rose-300";
    default:
      return "bg-indigo-100 text-indigo-700 ring-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300";
  }
}
