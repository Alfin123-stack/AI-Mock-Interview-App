import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import imagekit from "@/lib/imagekit";
import { aj } from "@/lib/arject";

export async function POST(req: NextRequest) {
  try {
    console.log("📥 API hit: /api/upload");

    // ✅ Lindungi dengan Arcjet
    const decision = await aj.protect(req, { requested: 5 });
    if (decision.isDenied()) {
      console.warn("🚫 Request blocked by Arcjet:", decision.reason);
      return NextResponse.json(
        { error: "Access denied by security rules" },
        { status: 403 }
      );
    }

    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    const jobTitle = (formData.get("jobTitle") as string) || null;
    const jobDescription = (formData.get("jobDescription") as string) || null;

    let resumeUrl: string | null = null;

    if (file) {
      console.log("📄 File received:", file.name, file.size);

      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      console.log("📦 Buffer created, size:", buffer.length);

      // Upload ke ImageKit
      const uploadResponse = await imagekit.upload({
        file: buffer,
        fileName: file.name,
        folder: "resumes",
        useUniqueFileName: true,
      });

      console.log("✅ ImageKit upload success:", uploadResponse);

      resumeUrl = uploadResponse.url;
      console.log("🔗 Resume URL:", resumeUrl);
    } else {
      console.log("⚠️ No file provided, resumeUrl = null");
    }

    // Kirim ke webhook n8n
    const webhookResponse = await axios.post(
      "https://alfin948ii.app.n8n.cloud/webhook/39b67bae-b31a-472e-9334-2f0667fa3193",
      {
        resumeUrl,
        jobTitle,
        jobDescription,
      }
    );

    console.log("✅ Webhook success:", webhookResponse.data);

    return NextResponse.json({
      uploadedUrl: resumeUrl,
      jobTitle,
      jobDescription,
      ...webhookResponse.data,
    });
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      console.error("❌ Axios error:", err.response?.data || err.message);
      return NextResponse.json(
        { error: err.response?.data || err.message || "Something went wrong" },
        { status: 500 }
      );
    } else if (err instanceof Error) {
      console.error("❌ Error:", err.message);
      return NextResponse.json(
        { error: err.message || "Something went wrong" },
        { status: 500 }
      );
    } else {
      console.error("❌ Unknown error:", err);
      return NextResponse.json(
        { error: "Something went wrong" },
        { status: 500 }
      );
    }
  }
}
