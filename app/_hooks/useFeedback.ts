import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useState, useEffect } from "react";

interface Feedback {
  createdAt: string;
  detailed_feedback: {
    communication_clarity: string;
    problem_solving_approach: string;
    relevance_and_engagement: string;
    technical_knowledge: string;
  };
  improvement_suggestions: string;
  scores: {
    communication_clarity: number;
    problem_solving_approach: number;
    relevance_and_engagement: number;
    technical_knowledge: number;
  };
  sessionId: string;
  summary: string;
  userId: string;
}

export function useFeedback(sessionId: string, userId: string) {
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [loadingFeedback, setLoadingFeedback] = useState(false);

  // convex hooks
  const createFeedback = useMutation(api.feedback.createFeedback);
  const existingFeedback = useQuery(api.feedback.getFeedbackBySession, {
    sessionId,
  });

  // update state otomatis jika feedback sudah ada di convex
  useEffect(() => {
    if (existingFeedback) {
      setFeedback(existingFeedback);
    }
  }, [existingFeedback]);

  const handleGetFeedback = async () => {
    // 🧩 Jika sudah ada feedback, langsung pakai yang ada
    if (existingFeedback) {
      console.log("✅ Feedback already exists:", existingFeedback);
      setFeedback(existingFeedback);
      return;
    }

    setLoadingFeedback(true);

    // 🧩 Dummy conversation (sementara)
    const dummyMessages = [
      {
        from: "user",
        text: "I mainly use JavaScript, TypeScript, and Python.",
      },
      {
        from: "bot",
        text: "Can you describe a project where you used TypeScript?",
      },
      {
        from: "user",
        text: "Yes, I built a REST API using Next.js and TypeScript.",
      },
      { from: "bot", text: "What was the most challenging part?" },
      { from: "user", text: "Handling async data flow and type safety." },
      { from: "bot", text: "Great. Thank you!" },
    ];

    try {
      // 1️⃣ Panggil API lokal (AI feedback)
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: dummyMessages }),
      });

      if (!res.ok) throw new Error("Failed to get feedback");
      const data = await res.json();
      const aiFeedback = data.data.message.content;

      console.log("✅ Feedback received:", aiFeedback);

      // 2️⃣ Simpan ke Convex database
      const feedbackId = await createFeedback({
        sessionId,
        userId,
        summary: aiFeedback.summary ?? "No summary available.",
        scores: {
          technical_knowledge: aiFeedback.scores?.technical_knowledge ?? 0,
          communication_clarity: aiFeedback.scores?.communication_clarity ?? 0,
          problem_solving_approach:
            aiFeedback.scores?.problem_solving_approach ?? 0,
          relevance_and_engagement:
            aiFeedback.scores?.relevance_and_engagement ?? 0,
        },
        detailed_feedback: {
          technical_knowledge:
            aiFeedback.detailed_feedback?.technical_knowledge ?? "",
          communication_clarity:
            aiFeedback.detailed_feedback?.communication_clarity ?? "",
          problem_solving_approach:
            aiFeedback.detailed_feedback?.problem_solving_approach ?? "",
          relevance_and_engagement:
            aiFeedback.detailed_feedback?.relevance_and_engagement ?? "",
        },
        improvement_suggestions: aiFeedback.improvement_suggestions ?? "",
      });

      console.log("🗄️ Saved to Convex with ID:", feedbackId);
      setFeedback(aiFeedback);
    } catch (err) {
      console.error("❌ Error getting feedback:", err);
    } finally {
      setLoadingFeedback(false);
    }
  };

  return { feedback, loadingFeedback, handleGetFeedback };
}
