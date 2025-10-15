// app/api/heygen/knowledgebase/route.ts
import { NextRequest, NextResponse } from "next/server";
import axios, { AxiosError } from "axios";

interface KnowledgeBase {
  id: string;
  name: string;
  description?: string;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    // console.log("📩 Request body:", body);

    const { name, opening, prompt, qa } = body;

    if (!name || !qa || !Array.isArray(qa)) {
      return NextResponse.json(
        { error: "Request harus berisi name dan qa[]" },
        { status: 400 }
      );
    }

    // 🔎 Cek apakah KB dengan nama ini sudah ada
    const listRes = await axios.get(
      "https://api.heygen.com/v1/streaming/knowledge_base/list",
      {
        headers: {
          accept: "application/json",
          "x-api-key": process.env.HEYGEN_API_KEY!,
        },
      }
    );

    const kbList: KnowledgeBase[] = listRes.data?.data?.list ?? [];
    const existing = kbList.find((kb) => kb.name === name);

    if (existing) {
      console.log("⚠️ KB sudah ada, skip create:", existing.id);
      return NextResponse.json({
        success: true,
        knowledge_base_id: existing.id,
        data: existing,
        skipped: true,
      });
    }

    // gabungkan Q&A jadi string
    const qaContent = qa
      .map(
        (q: { question: string; answer?: string }, idx: number) =>
          `Q${idx + 1}: ${q.question}\nA: ${q.answer || "Belum ada jawaban"}`
      )
      .join("\n\n");

    // create knowledge base baru dengan Q&A di prompt
    const createRes = await axios.post(
      "https://api.heygen.com/v1/streaming/knowledge_base/create",
      {
        name,
        opening: opening || "Halo, saya AI interviewer untuk sesi ini.",
        prompt:
          (prompt ||
            "Gunakan daftar pertanyaan & jawaban berikut untuk interview kandidat.") +
          "\n\n" +
          qaContent,
      },
      {
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          "x-api-key": process.env.HEYGEN_API_KEY!,
        },
      }
    );

    console.log("✅ Create KB Response:", createRes.data);

    const kbId = createRes.data?.data?.id;
    if (!kbId) {
      return NextResponse.json(
        { error: "Gagal membuat knowledge base", details: createRes.data },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      knowledge_base_id: kbId,
      data: createRes.data,
      skipped: false,
    });
  } catch (err: unknown) {
    if (err instanceof AxiosError) {
      console.error("❌ Error create knowledge base:", err.response?.data);
      return NextResponse.json(
        { error: err.response?.data },
        { status: err.response?.status || 500 }
      );
    }

    console.error("❌ Unknown error:", err);
    return NextResponse.json(
      { error: (err as Error).message ?? "Unexpected error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const res = await axios.get(
      "https://api.heygen.com/v1/streaming/knowledge_base/list",
      {
        headers: {
          accept: "application/json",
          "x-api-key": process.env.HEYGEN_API_KEY!,
        },
      }
    );

    return NextResponse.json(res.data);
  } catch (err: unknown) {
    if (err instanceof AxiosError) {
      console.error("❌ Error list KB:", err.response?.data || err.message);
      return NextResponse.json(
        { error: err.response?.data || err.message },
        { status: err.response?.status || 500 }
      );
    }

    console.error("❌ Unknown error listing KB:", err);
    return NextResponse.json(
      { error: (err as Error).message || "Unknown error" },
      { status: 500 }
    );
  }
}
