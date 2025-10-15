"use client";

import { useState } from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { Menu, X, Bot } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ModeToggle from "./ModeToggle";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/70 backdrop-blur-xl dark:border-neutral-800 dark:bg-neutral-950/70 transition-colors">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        {/* === Logo === */}
        <Link href="/" className="group flex items-center gap-3">
          {/* Animated Icon */}
          <motion.div
            whileHover={{
              rotate: 10,
              scale: 1.1,
              boxShadow: "0 0 18px rgba(139,92,246,0.35)",
            }}
            transition={{ type: "spring", stiffness: 260, damping: 12 }}
            className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 text-white shadow-lg">
            <Bot className="size-5" />
          </motion.div>

          {/* Brand Name */}
          <motion.h1
            whileHover={{
              backgroundPosition: "100% 0",
              scale: 1.03,
            }}
            transition={{ duration: 0.4 }}
            className="bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 bg-[length:200%_auto] bg-clip-text text-lg font-extrabold text-transparent md:text-2xl group-hover:drop-shadow-[0_0_12px_rgba(139,92,246,0.3)]">
            AI Mock Interview
          </motion.h1>
        </Link>

        {/* === Desktop Menu === */}
        <div className="hidden items-center gap-6 md:flex">
          <SignedIn>
            <Link
              href="/dashboard"
              className="relative text-sm font-medium text-slate-700 transition hover:text-violet-600 dark:text-slate-200 dark:hover:text-violet-400">
              Dashboard
            </Link>
            <Link
              href="/how-it-works"
              className="relative text-sm font-medium text-slate-700 transition hover:text-violet-600 dark:text-slate-200 dark:hover:text-violet-400">
              How it works
            </Link>
            <Link
              href="/upgrade"
              className="relative text-sm font-medium text-slate-700 transition hover:text-violet-600 dark:text-slate-200 dark:hover:text-violet-400">
              Upgrade
            </Link>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>

          <SignedOut>
            <div className="flex gap-3">
              <SignInButton>
                <button className="rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-900 dark:text-slate-100 dark:hover:bg-neutral-800">
                  Log in
                </button>
              </SignInButton>
              <SignUpButton>
                <button className="rounded-lg bg-gradient-to-r from-violet-600 to-pink-500 px-4 py-2 text-sm font-medium text-white shadow-md transition hover:opacity-90">
                  Sign up
                </button>
              </SignUpButton>
            </div>
          </SignedOut>

          <ModeToggle />
        </div>

        {/* === Mobile Hamburger === */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block md:hidden rounded-lg p-2 transition hover:bg-slate-100 dark:hover:bg-neutral-800"
          aria-label="Toggle Menu">
          {isOpen ? (
            <X className="h-6 w-6 text-slate-700 dark:text-slate-200" />
          ) : (
            <Menu className="h-6 w-6 text-slate-700 dark:text-slate-200" />
          )}
        </button>
      </div>

      {/* === Mobile Dropdown Menu === */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="border-t border-neutral-200 bg-white px-4 py-5 dark:border-neutral-800 dark:bg-neutral-950 md:hidden">
            <SignedIn>
              <div className="flex flex-col gap-3">
                <Link
                  href="/dashboard"
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-slate-700 hover:text-violet-600 dark:text-slate-200 dark:hover:text-violet-400">
                  Dashboard
                </Link>
                <Link
                  href="/how-it-works"
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-slate-700 hover:text-violet-600 dark:text-slate-200 dark:hover:text-violet-400">
                  How it works
                </Link>
                <Link
                  href="/upgrade"
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-slate-700 hover:text-violet-600 dark:text-slate-200 dark:hover:text-violet-400">
                  Upgrade
                </Link>
                <UserButton afterSignOutUrl="/" />
              </div>
            </SignedIn>

            <SignedOut>
              <div className="mt-4 flex flex-col gap-3">
                <SignInButton>
                  <button className="rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-900 dark:text-slate-100 dark:hover:bg-neutral-800">
                    Log in
                  </button>
                </SignInButton>
                <SignUpButton>
                  <button className="rounded-lg bg-gradient-to-r from-violet-600 to-pink-500 px-4 py-2 text-sm font-medium text-white shadow-md transition hover:opacity-90">
                    Sign up
                  </button>
                </SignUpButton>
              </div>
            </SignedOut>

            <div className="mt-5">
              <ModeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
