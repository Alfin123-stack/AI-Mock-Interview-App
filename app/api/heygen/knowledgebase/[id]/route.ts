import { NextRequest, NextResponse } from "next/server";
import axios, { AxiosError } from "axios";

interface KnowledgeBase {
  id: string;
  name: string;
  description?: string;
}

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> } // ✅ Next.js 15 expects Promise<{ id }>
) {
  const { id } = await context.params; // ✅ await params promise

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

    const kbList: KnowledgeBase[] = res.data?.data ?? [];
    const kb = kbList.find((item) => item.id === id);

    if (!kb) {
      return NextResponse.json(
        { error: "Knowledge base not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(kb);
  } catch (err: unknown) {
    if (err instanceof AxiosError) {
      console.error("❌ Error get KB:", err.response?.data || err.message);
      return NextResponse.json(
        { error: err.response?.data || err.message },
        { status: err.response?.status || 500 }
      );
    }

    console.error("❌ Unknown error get KB:", err);
    return NextResponse.json(
      { error: (err as Error).message || "Unknown error" },
      { status: 500 }
    );
  }
}
