"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import UserCamera from "./UserCamera";

export default function CameraSection() {
  const [micOn, setMicOn] = useState(false);
  const [videoOn, setVideoOn] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const userVideoRef = useRef<HTMLVideoElement>(null);

  const handleToggleMic = async () => {
    if (!micOn) {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: videoOn,
        });
        setStream(mediaStream);
        setMicOn(true);
        if (videoOn && userVideoRef.current)
          userVideoRef.current.srcObject = mediaStream;
      } catch (err) {
        console.error("Mic access denied", err);
      }
    } else {
      stream?.getAudioTracks().forEach((t) => t.stop());
      setMicOn(false);
    }
  };

  const handleToggleVideo = async () => {
    if (!videoOn) {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: micOn,
        });
        setStream(mediaStream);
        if (userVideoRef.current) userVideoRef.current.srcObject = mediaStream;
        setVideoOn(true);
      } catch (err) {
        console.error("Camera access denied", err);
      }
    } else {
      stream?.getVideoTracks().forEach((t) => t.stop());
      setVideoOn(false);
      if (userVideoRef.current) userVideoRef.current.srcObject = null;
    }
  };

  return (
    <motion.div whileHover={{ scale: 1.02 }} className="w-full h-full">
      <UserCamera
        userVideoRef={userVideoRef}
        videoOn={videoOn}
        micOn={micOn}
        handleToggleMic={handleToggleMic}
        handleToggleVideo={handleToggleVideo}
      />
    </motion.div>
  );
}
