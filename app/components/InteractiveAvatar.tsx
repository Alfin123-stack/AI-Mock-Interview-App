"use client";
import {
  AvatarQuality,
  StreamingEvents,
  VoiceChatTransport,
  VoiceEmotion,
  StartAvatarRequest,
  STTProvider,
  ElevenLabsModel,
} from "@heygen/streaming-avatar";
import { useEffect, useRef, useState } from "react";
import { useMemoizedFn, useUnmount } from "ahooks";

import { Button } from "./Button";
import { AvatarVideo } from "./AvatarSession/AvatarVideo";
import { useStreamingAvatarSession } from "./logic/useStreamingAvatarSession";
import { AvatarControls } from "./AvatarSession/AvatarControls";
import { useVoiceChat } from "./logic/useVoiceChat";
import { StreamingAvatarProvider, StreamingAvatarSessionState } from "./logic";
import { MessageHistory } from "./AvatarSession/MessageHistory";

const DEFAULT_CONFIG: StartAvatarRequest = {
  quality: AvatarQuality.Low,
  avatarName: "Ann_Therapist_public",
  knowledgeId: "j97a99sxfa75yb8n562gp680kx7ranq9",
  voice: {
    rate: 1.5,
    emotion: VoiceEmotion.EXCITED,
    model: ElevenLabsModel.eleven_flash_v2_5,
  },
  language: "en",
  voiceChatTransport: VoiceChatTransport.WEBSOCKET,
  sttSettings: {
    provider: STTProvider.DEEPGRAM,
  },
};

function InteractiveAvatar() {
  const { initAvatar, startAvatar, stopAvatar, sessionState, stream } =
    useStreamingAvatarSession();
  const { startVoiceChat } = useVoiceChat();

  const [config] = useState<StartAvatarRequest>(DEFAULT_CONFIG);

  const mediaStream = useRef<HTMLVideoElement>(null);

  async function fetchAccessToken() {
    try {
      const response = await fetch("/api/heygen/token", {
        method: "POST",
      });
      const token = await response.text();

      console.log("Access Token:", token); // Log the token to verify

      return token;
    } catch (error) {
      console.error("Error fetching access token:", error);
      throw error;
    }
  }

  const startSessionV2 = useMemoizedFn(async (isVoiceChat: boolean) => {
    try {
      const newToken = await fetchAccessToken();
      console.log("hi" + newToken);
      const avatar = initAvatar(newToken);

      avatar.on(StreamingEvents.AVATAR_START_TALKING, (e) => {
        console.log("Avatar started talking", e);
      });
      avatar.on(StreamingEvents.AVATAR_STOP_TALKING, (e) => {
        console.log("Avatar stopped talking", e);
      });
      avatar.on(StreamingEvents.STREAM_DISCONNECTED, () => {
        console.log("Stream disconnected");
      });
      avatar.on(StreamingEvents.STREAM_READY, (event) => {
        console.log(">>>>> Stream ready:", event.detail);
      });
      avatar.on(StreamingEvents.USER_START, (event) => {
        console.log(">>>>> User started talking:", event);
      });
      avatar.on(StreamingEvents.USER_STOP, (event) => {
        console.log(">>>>> User stopped talking:", event);
      });
      avatar.on(StreamingEvents.USER_END_MESSAGE, (event) => {
        console.log(">>>>> User end message:", event);
      });
      avatar.on(StreamingEvents.USER_TALKING_MESSAGE, (event) => {
        console.log(">>>>> User talking message:", event);
      });
      avatar.on(StreamingEvents.AVATAR_TALKING_MESSAGE, (event) => {
        console.log(">>>>> Avatar talking message:", event);
      });
      avatar.on(StreamingEvents.AVATAR_END_MESSAGE, (event) => {
        console.log(">>>>> Avatar end message:", event);
      });

      await startAvatar(config);

      if (isVoiceChat) {
        await startVoiceChat();
      }
    } catch (error) {
      console.error("Error starting avatar session:", error);
    }
  });

  useEffect(() => {
    async function fetchTokenAndStart() {
      await startSessionV2(true);
    }
    fetchTokenAndStart();
  }, [startSessionV2]);

  useUnmount(() => {
    stopAvatar();
  });

  useEffect(() => {
    if (stream && mediaStream.current) {
      mediaStream.current.srcObject = stream;
      mediaStream.current.onloadedmetadata = () => {
        mediaStream.current!.play();
      };
    }
  }, [mediaStream, stream]);

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Interviewer Card */}
      <div className="flex flex-col rounded-2xl bg-white shadow-md overflow-hidden border border-zinc-200">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-zinc-200 bg-zinc-50">
          <h2 className="text-lg font-semibold text-zinc-800 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            AI Interviewer
          </h2>
          <Button className="bg-red-100 text-red-600 hover:bg-red-200 rounded-lg px-3 py-1 text-sm">
            Disable
          </Button>
        </div>

        {/* Video */}
        <div className="relative w-full aspect-video bg-zinc-900 flex items-center justify-center">
          <AvatarVideo ref={mediaStream} />
        </div>

        {/* Controls */}
        <div className="flex flex-col gap-4 items-center justify-center p-4">
          <AvatarControls />
        </div>
      </div>

      {/* Chat History */}
      {sessionState === StreamingAvatarSessionState.CONNECTED && (
        <div className="rounded-2xl bg-white shadow-md border border-zinc-200">
          <MessageHistory />
        </div>
      )}
    </div>
  );
}

export default function InteractiveAvatarWrapper() {
  return (
    <StreamingAvatarProvider basePath={process.env.NEXT_PUBLIC_BASE_API_URL}>
      <InteractiveAvatar />
    </StreamingAvatarProvider>
  );
}
