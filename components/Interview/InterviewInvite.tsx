"use client";
import { useState } from "react";
import { Users, Mail, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function InterviewInvite({ interviewId } : { interviewId: string }) {
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviting, setInviting] = useState(false);

  async function handleInvite(e: React.FormEvent) {
    e.preventDefault();
    if (!inviteEmail) return;
    setInviting(true);
    try {
      // TODO: panggil API kirim undangan
      // await inviteUser({ interviewId, email: inviteEmail });
      setInviteEmail("");
    } catch (err) {
      console.error("Invite failed:", err);
    } finally {
      setInviting(false);
    }
  }

  return (
    <div className="p-8 rounded-2xl shadow-lg border bg-white dark:bg-neutral-900">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <Users className="w-5 h-5 text-indigo-500" />
        Invite Participant
      </h2>

      <form onSubmit={handleInvite} className="flex flex-col gap-3 md:flex-row">
        <div className="relative flex-1">
          <Input
            type="email"
            placeholder="Enter participant email"
            value={inviteEmail}
            onChange={(e) => setInviteEmail(e.target.value)}
            required
          />
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
            <Mail className="w-4 h-4 text-muted-foreground" />
          </div>
        </div>

        <Button
          type="submit"
          disabled={inviting}
          className="bg-gradient-to-r from-indigo-500 to-violet-600 text-white"
        >
          {inviting ? <Loader2 className="animate-spin w-4 h-4" /> : "Invite"}
        </Button>
      </form>
    </div>
  );
}
