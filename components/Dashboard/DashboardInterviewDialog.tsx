"use client";

import { Button } from "@/components/ui/button";
import { Plus, Loader2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FileUpload } from "@/components/ui/file-upload";

import axios from "axios";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { motion } from "framer-motion";

export default function DashboardInterviewDialog() {
  const { user } = useUser();
  const router = useRouter();

  const createInterviewSession = useMutation(
    api.interview.createInterviewSession
  );

  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");

  const handleFileUpload = (files: File[]) => setFiles(files);

  const handleSubmit = async (type: "resume" | "jobdesc") => {
    if (!user) return;
    setLoading(true);

    try {
      const formData = new FormData();
      if (type === "resume" && files.length) {
        files.forEach((file) => formData.append("file", file));
      }
      formData.append("jobTitle", jobTitle || "");
      formData.append("jobDescription", jobDescription || "");

      const res = await axios.post("/api/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      const uploadedUrl = res.data.uploadedUrl || undefined;
      const questions =
        res.data.message?.content?.questions ||
        res.data.message?.content?.interviewQuestions ||
        res.data.message?.content?.interview_questions ||
        [];

      const interviewId = await createInterviewSession({
        interviewQuestions: questions,
        resumeUrl: uploadedUrl,
        jobTitle: jobTitle || undefined,
        jobDescription: jobDescription || undefined,
        status: "completed",
        userId: user.id as string,
      });

      router.push(`/interview/${interviewId}`);
    } catch (err) {
      console.error("Upload failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
          <Button className="flex items-center gap-2 px-6 py-2.5 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow hover:shadow-lg transition">
            <Plus size={18} />
            <span className="font-medium">Create New Interview</span>
          </Button>
        </motion.div>
      </DialogTrigger>

      <DialogContent
        className="
          w-[92vw] sm:w-[90vw] md:w-[600px] lg:w-[650px] 
          max-w-full rounded-2xl 
          shadow-2xl border border-slate-200 dark:border-neutral-800 
          bg-white dark:bg-neutral-900 
          p-4 sm:p-6
          overflow-y-auto max-h-[85vh]
        ">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100 text-center sm:text-left">
            Create a New Interview
          </DialogTitle>
          <DialogDescription className="text-neutral-500 dark:text-neutral-400 mt-1 text-center sm:text-left text-sm sm:text-base">
            Upload your resume or provide a job description to start your AI
            mock interview.
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="resume" className="w-full mt-5">
          <TabsList className="grid w-full grid-cols-2 rounded-xl bg-slate-100 dark:bg-neutral-800 p-1">
            <TabsTrigger
              value="resume"
              className="rounded-lg text-xs sm:text-sm md:text-base data-[state=active]:bg-white dark:data-[state=active]:bg-neutral-900 shadow-sm">
              Resume Upload
            </TabsTrigger>
            <TabsTrigger
              value="jobdesc"
              className="rounded-lg text-xs sm:text-sm md:text-base data-[state=active]:bg-white dark:data-[state=active]:bg-neutral-900 shadow-sm">
              Job Description
            </TabsTrigger>
          </TabsList>

          {/* Resume Upload */}
          <TabsContent value="resume" className="mt-6 space-y-5">
            <div className="w-full min-h-52 sm:min-h-64 border-2 border-dashed rounded-2xl p-4 sm:p-6 bg-slate-50 dark:bg-neutral-950 flex flex-col items-center justify-center text-center">
              <FileUpload onChange={handleFileUpload} />
              <p className="text-xs sm:text-sm text-neutral-500 mt-3">
                Upload PDF or DOCX (max 5MB)
              </p>
            </div>
            <Button
              onClick={() => handleSubmit("resume")}
              disabled={loading}
              className="w-full h-10 sm:h-11 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow hover:shadow-lg transition text-sm sm:text-base">
              {loading ? (
                <Loader2 className="animate-spin" />
              ) : (
                "Upload & Start Interview"
              )}
            </Button>
          </TabsContent>

          {/* Job Description */}
          <TabsContent value="jobdesc" className="mt-6">
            <Card className="p-4 sm:p-6 shadow-md border rounded-2xl bg-slate-50 dark:bg-neutral-950">
              <div className="space-y-5">
                <div className="grid gap-2">
                  <Label htmlFor="jobTitle">Job Title</Label>
                  <Input
                    id="jobTitle"
                    placeholder="e.g. Frontend Developer"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    className="rounded-xl text-sm sm:text-base"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="jobDesc">Job Description</Label>
                  <Textarea
                    id="jobDesc"
                    placeholder="Paste the job description here..."
                    rows={5}
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    className="rounded-xl text-sm sm:text-base"
                  />
                </div>
                <Button
                  onClick={() => handleSubmit("jobdesc")}
                  disabled={loading}
                  className="w-full h-10 sm:h-11 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow hover:shadow-lg transition text-sm sm:text-base">
                  {loading ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    "Create Interview"
                  )}
                </Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
