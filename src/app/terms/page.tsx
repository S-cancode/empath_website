import Link from "next/link";
import type { Metadata } from "next";
import { LegalShell } from "@/components/legal-shell";
import { TERMS_LAST_UPDATED, TERMS_SECTIONS, TERMS_VERSION } from "@/lib/legal-text";

export const metadata: Metadata = {
  title: "Terms of Service — Empath",
  description:
    "The Terms of Service you accept in the Empath app: eligibility (18+), community rules, moderation, reporting and blocking, and your rights.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalShell
      eyebrow={`Version ${TERMS_VERSION}`}
      title="Terms of Service"
      lastUpdated={TERMS_LAST_UPDATED}
      intro={
        <>
          These are the same Terms you accept in the Empath app (version {TERMS_VERSION}). Empath is
          not therapy, medical advice or a crisis service. If you or someone else is in immediate
          danger, call <strong>999</strong>. For free 24/7 emotional support in the UK, call
          Samaritans on <strong>116 123</strong>.
        </>
      }
    >
      {TERMS_SECTIONS.map((section) => (
        <section key={section.title}>
          <h2>{section.title}</h2>
          <p className="whitespace-pre-line">{section.body}</p>
        </section>
      ))}

      <section>
        <p>
          Read our <Link href="/privacy">Privacy Notice</Link> to see how we handle your data.
        </p>
      </section>
    </LegalShell>
  );
}
