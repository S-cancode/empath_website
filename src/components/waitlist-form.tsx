"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitted(true);
        setEmail("");
        toast.success("You're on the list! Check your email for confirmation.");
      } else if (res.status === 409) {
        toast.info("You're already on the waitlist! We'll be in touch soon.");
      } else {
        toast.error(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="w-full max-w-md mx-auto text-center">
        <p className="text-[#0088CC] font-body font-medium text-lg">
          You&apos;re on the list! Check your inbox.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto flex flex-col gap-3">
      <Input
        type="email"
        placeholder="name@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="h-11 rounded-lg border-gray-200 bg-gray-50/50 px-4 text-base font-body placeholder:text-gray-400 focus-visible:border-[#0088CC] focus-visible:ring-[#0088CC]/20"
      />
      <Button
        type="submit"
        disabled={loading}
        className="h-11 w-full rounded-lg bg-gray-900 text-white font-body font-medium hover:bg-gray-800 transition-colors text-base"
      >
        {loading ? "Joining..." : "Get early access"}
      </Button>
    </form>
  );
}
