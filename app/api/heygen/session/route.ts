import { NextResponse } from "next/server";
import axios, { AxiosError } from "axios";

const HEYGEN_API_KEY = process.env.HEYGEN_API_KEY as string;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { action, session_id } = body;

    if (action === "new") {
      // === New Session ===
      const response = await axios.post(
        "https://api.heygen.com/v1/streaming.new",
        {
          quality: "medium",
          avatar_id: "Abigail_expressive_2024112501", // <-- ganti dengan avatar_id kamu
          voice: {
            voice_id: "73c0b6a2e29d4d38aca41454bf58c955",
            rate: 1.0,
          },
          video_encoding: "VP8",
          disable_idle_timeout: false,
          version: "v2",
          stt_settings: { provider: "deepgram", confidence: 0.55 },
          activity_idle_timeout: 120,
        },
        {
          headers: {
            "x-api-key": HEYGEN_API_KEY,
            "Content-Type": "application/json",
          },
        }
      );
      return NextResponse.json(response.data);
    }

    if (action === "start") {
      if (!session_id) {
        return NextResponse.json(
          { error: "session_id required" },
          { status: 400 }
        );
      }

      const response = await axios.post(
        "https://api.heygen.com/v1/streaming.start",
        { session_id },
        {
          headers: {
            "x-api-key": HEYGEN_API_KEY,
            "Content-Type": "application/json",
          },
        }
      );
      return NextResponse.json(response.data);
    }

    return NextResponse.json({ error: "Invalid action" }, { status: 400 });
  } catch (err: unknown) {
    if (err instanceof AxiosError) {
      const message = err.response?.data || err.message;
      const status = err.response?.status || 500;
      console.error("❌ Heygen API error:", message);
      return NextResponse.json({ error: message }, { status });
    }

    const message = (err as Error).message || "Unknown Heygen error";
    console.error("❌ Heygen API unknown error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
