import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react";

// ========== Footer ==========
export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white py-12 dark:border-neutral-800 dark:bg-neutral-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 md:flex-row md:px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="size-7 rounded-full bg-gradient-to-br from-violet-500 to-pink-500" />
          <span className="text-base font-semibold text-slate-700 dark:text-slate-200">
            Aceternity Mock Interview
          </span>
        </div>

        {/* Social Links */}
        <div className="flex gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 transition hover:text-violet-500 dark:text-neutral-400">
            <IconBrandGithub className="h-5 w-5" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 transition hover:text-pink-500 dark:text-neutral-400">
            <IconBrandTwitter className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 transition hover:text-blue-500 dark:text-neutral-400">
            <IconBrandLinkedin className="h-5 w-5" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          © {new Date().getFullYear()} Aceternity. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
