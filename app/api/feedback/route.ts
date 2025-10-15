import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { aj } from "@/lib/arject";

const N8N_WEBHOOK_URL =
  "https://sunsun1123123.app.n8n.cloud/webhook/fa251747-722b-4e7c-aace-12b03610913a";

export async function POST(req: NextRequest) {
  try {
    // 🛡️ Proteksi dengan Arcjet
    const decision = await aj.protect(req, { requested: 5 });
    if (decision.isDenied()) {
      console.warn("🚫 Blocked by Arcjet:", decision.reason);
      return NextResponse.json(
        { error: "Access denied by security rules" },
        { status: 403 }
      );
    }

    // 📦 Ambil body JSON
    const { messages } = await req.json();

    if (!Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Invalid payload: 'messages' must be an array" },
        { status: 400 }
      );
    }

    // 🚀 Kirim ke webhook n8n
    const { data } = await axios.post(
      N8N_WEBHOOK_URL,
      { messages },
      { headers: { "Content-Type": "application/json" } }
    );

    console.log("✅ Webhook success:", data);

    return NextResponse.json({ status: "success", data });
  } catch (error: unknown) {
    console.error("❌ Error while sending to n8n:", error);

    const message = axios.isAxiosError(error)
      ? error.response?.data || error.message
      : error instanceof Error
        ? error.message
        : "Unexpected error";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
