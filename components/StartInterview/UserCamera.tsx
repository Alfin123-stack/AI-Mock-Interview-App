"use client";

import { Button } from "@/components/ui/button";
import { Mic, Video, Camera } from "lucide-react";
import { RefObject } from "react";
import { motion } from "framer-motion";

interface UserCameraProps {
  userVideoRef: RefObject<HTMLVideoElement | null>;
  videoOn: boolean;
  micOn: boolean;
  handleToggleMic: () => void;
  handleToggleVideo: () => void;
}

export default function UserCamera({
  userVideoRef,
  videoOn,
  micOn,
  handleToggleMic,
  handleToggleVideo,
}: UserCameraProps) {
  return (
    <div className="w-full h-full bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md rounded-3xl shadow-lg p-4 sm:p-6 flex flex-col border border-neutral-200 dark:border-neutral-800">
      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <Camera className="h-4 w-4 text-indigo-500" />
        <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
          Your Camera
        </span>
      </div>

      {/* Video Area */}
      <div
        className={`flex-1 w-full rounded-2xl overflow-hidden shadow-inner flex items-center justify-center relative border transition-all duration-500 ${
          videoOn
            ? "border-indigo-400 dark:border-indigo-500"
            : "border-neutral-200 dark:border-neutral-700"
        }`}>
        <video
          ref={userVideoRef}
          autoPlay
          playsInline
          muted
          className="w-full h-full object-cover"
        />
        {!videoOn && (
          <motion.div
            initial={{ opacity: 0.6, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="absolute flex flex-col items-center justify-center">
            <div className="h-24 w-24 sm:h-32 sm:w-32 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-3xl sm:text-4xl shadow-lg animate-pulse">
              U
            </div>
            <span className="mt-3 text-gray-400 text-sm sm:text-base">
              Camera Off
            </span>
          </motion.div>
        )}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-6 mt-6">
        {/* Mic */}
        <div className="flex flex-col items-center">
          <motion.div whileTap={{ scale: 0.9 }}>
            <Button
              onClick={handleToggleMic}
              size="icon"
              className={`rounded-full w-10 h-10 sm:w-12 sm:h-12 shadow-md transition-colors duration-300 ${
                micOn
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-red-500 hover:bg-red-600"
              }`}>
              <Mic className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            </Button>
          </motion.div>
          <span
            className={`mt-2 px-2 py-0.5 text-xs rounded-full font-medium ${
              micOn
                ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
            }`}>
            {micOn ? "Mic On" : "Mic Off"}
          </span>
        </div>

        {/* Video */}
        <div className="flex flex-col items-center">
          <motion.div whileTap={{ scale: 0.9 }}>
            <Button
              onClick={handleToggleVideo}
              size="icon"
              className={`rounded-full w-10 h-10 sm:w-12 sm:h-12 shadow-md transition-colors duration-300 ${
                videoOn
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-red-500 hover:bg-red-600"
              }`}>
              <Video className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            </Button>
          </motion.div>
          <span
            className={`mt-2 px-2 py-0.5 text-xs rounded-full font-medium ${
              videoOn
                ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
            }`}>
            {videoOn ? "Video On" : "Video Off"}
          </span>
        </div>
      </div>
    </div>
  );
}
