"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import InteractiveAvatarWrapper from "@/app/components/InteractiveAvatar";

export default function AvatarSection() {
  const [avatarOn, setAvatarOn] = useState(false);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 16 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      initial="hidden"
      animate="visible"
      className="w-full">
      <Card>
        {/* Header */}
        <div className="flex sm:flex-row justify-start items-center gap-2 mb-2">
          {/* Header */}
          <div className="flex items-center gap-2">
            <Bot className="h-4 w-4 text-indigo-500" />
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
              AI Interviewer
            </span>
          </div>

          <Button
            variant={avatarOn ? "destructive" : "default"}
            size="sm"
            className="rounded-full px-4 py-2 text-xs sm:text-sm"
            onClick={() => setAvatarOn(!avatarOn)}>
            {avatarOn ? "Disable" : "Enable"}
          </Button>
        </div>

        {/* Avatar Area */}
        <div
          className="relative flex items-center justify-center bg-gradient-to-br 
          from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900 
          rounded-2xl overflow-hidden transition-all duration-300 
          aspect-[16/10] sm:aspect-[16/9] w-full max-h-[480px] sm:max-h-[560px] lg:max-h-[640px]">
          {avatarOn ? (
            <InteractiveAvatarWrapper />
          ) : (
            <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base text-center">
              AI Avatar is disabled
            </p>
          )}
        </div>
      </Card>
    </motion.div>
  );
}

/* Card container */
function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-3xl h-full shadow-2xl border border-gray-100 dark:border-neutral-800 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md p-4 sm:p-6 transition-all duration-300">
      {children}
    </div>
  );
}
