import Link from "next/link";
import type { Metadata } from "next";
import { LegalShell } from "@/components/legal-shell";
import { CONSENT_TEXT, CONSENT_VERSION } from "@/lib/legal-text";

export const metadata: Metadata = {
  title: "Privacy Policy — Empath",
  description:
    "How Empath collects, uses, shares and deletes your data: Sign in with Apple, AI matching and pre-delivery safety checks via OpenAI, 7-day message deletion, and your UK GDPR rights.",
  alternates: { canonical: "/privacy" },
};

const LAST_UPDATED = "26 September 2026";

const processors = [
  {
    name: "OpenAI (US)",
    what: (
      <>
        (a) an identity-stripped version of your matching text; (b) <strong>every chat message you
        send</strong>, to its moderation service, before it is delivered to your peer; (c) the audio
        of any voice note you send, transcribed for a safety check, then the transcript is discarded;
        (d) <strong>only if you turn on auto-translate</strong>, your chat messages for translation
      </>
    ),
    why: "Matching analysis; pre-delivery safety moderation of text and voice; optional translation",
  },
  {
    name: "Apple",
    what: "Sign in with Apple identifier, optional relay email",
    why: "Account creation and security",
  },
  {
    name: "Sentry (EU ingest)",
    what: "Crash and diagnostic data (no message content)",
    why: "Reliability",
  },
  {
    name: "Expo / Apple Push (APNs)",
    what: "Device push token",
    why: "Neutral “new message” notifications (no message content)",
  },
  {
    name: "Railway",
    what: "Encrypted application data",
    why: "Hosting (backend and database)",
  },
];

export default function PrivacyPage() {
  return (
    <LegalShell
      eyebrow="UK GDPR · Data Protection Act 2018"
      title="Privacy Policy"
      lastUpdated={LAST_UPDATED}
      intro={
        <>
          This policy covers the Empath iPhone app and this website. It matches the Privacy Notice
          and the consent screen inside the app. In short: we use OpenAI for matching and to
          safety-check every message before it is delivered, messages are encrypted at rest and
          deleted after 7 days, and your peer only ever sees the nickname you choose.
        </>
      }
    >
      <section>
        <h2>1. Who we are</h2>
        <p>
          Empath is operated by Empath Ltd, 47 Meadway, London, N14 6NJ, United Kingdom. Empath Ltd
          is the data controller. Data protection lead: Dr Rohan Choudhari. Contact:{" "}
          <a href="mailto:help@empathapp.co.uk">help@empathapp.co.uk</a>.
        </p>
      </section>

      <section>
        <h2>2. What we collect</h2>
        <ul>
          <li>Sign in with Apple identifier (to create and secure your account)</li>
          <li>Device identifiers (used for safety enforcement, e.g. blocks and bans)</li>
          <li>Email address (from Apple; may be an Apple private-relay address)</li>
          <li>Date of birth and age declaration (to verify you are 18+)</li>
          <li>Free-text matching prompts (analysed for matching, then deleted)</li>
          <li>
            Anonymised matching data (numeric representations of your text, topic categories and
            match-quality scores, used to improve matching accuracy)
          </li>
          <li>Chat messages (text and voice notes), encrypted at rest</li>
          <li>
            Crisis-signposting event logs (recording that a safety keyword was detected, without
            storing the full message)
          </li>
          <li>Session ratings and basic usage analytics</li>
        </ul>
      </section>

      <section>
        <h2>3. Why we collect it and our legal basis</h2>
        <p>We process your data to provide our peer support matching service.</p>
        <ul>
          <li>Account data (email, nickname): contract (Art. 6(1)(b))</li>
          <li>Device identifiers and IP addresses: legitimate interest (Art. 6(1)(f))</li>
          <li>Chat messages: contract (Art. 6(1)(b))</li>
          <li>
            Free-text prompts and other special-category data: explicit consent (Art. 9(2)(a))
          </li>
          <li>Age verification: legal obligation (Art. 6(1)(c))</li>
        </ul>
        <p className="mt-3">
          Before you can be matched or chat, the app asks for your explicit consent to this
          processing, including by our AI provider. If you do not agree, you can still use your
          account, but you cannot be matched or chat. You can give or withdraw consent at any time
          in Profile. Voice notes and message translation are optional and ask for your permission
          separately when you first use them.
        </p>
        <details className="mt-4 rounded-2xl border border-gray-100 px-5 py-4">
          <summary className="cursor-pointer font-medium text-gray-900">
            Read the consent text shown in the app (version {CONSENT_VERSION})
          </summary>
          <p className="mt-3 whitespace-pre-line text-sm">{CONSENT_TEXT}</p>
        </details>
      </section>

      <section>
        <h2>4. Who we share it with</h2>
        <ul>
          <li>
            <strong>Your matched peer</strong> sees your messages, the nickname you choose and a
            short AI-written summary of what you shared. They never see your name, email or Apple
            ID.
          </li>
          <li>
            <strong>Our trained moderators</strong> may review a conversation that you or your peer
            reports, or one preserved for a safety review (limited, logged access).
          </li>
          <li>
            <strong>Law enforcement</strong>, only where we are legally compelled.
          </li>
        </ul>
        <p className="mt-4">
          We use a small number of processors. We do not sell your personal data.
        </p>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-100">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead className="bg-sky-50 text-gray-900">
              <tr>
                <th className="px-4 py-3 font-semibold">Processor</th>
                <th className="px-4 py-3 font-semibold">What we send</th>
                <th className="px-4 py-3 font-semibold">Why</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 align-top">
              {processors.map((p) => (
                <tr key={p.name}>
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{p.name}</td>
                  <td className="px-4 py-3">{p.what}</td>
                  <td className="px-4 py-3">{p.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4">
          Empath can technically read message content. Messages are encrypted in transit and at
          rest, but they are <strong>not</strong> end-to-end encrypted. This is what makes
          pre-delivery moderation, crisis signposting and reporting possible.
        </p>
      </section>

      <section>
        <h2>5. International transfers</h2>
        <p>
          The only routine transfer outside the UK is to our AI provider, OpenAI, whose servers are
          in the United States: an identity-stripped version of your matching text (for matching),
          the full content of each chat message (for the pre-delivery safety check), voice-note audio
          (transcribed for that check, then discarded) and, only if you turn on auto-translate, your
          chat messages for translation. These transfers are protected by Standard Contractual
          Clauses.
        </p>
      </section>

      <section>
        <h2>6. How long we keep it</h2>
        <ul>
          <li>Free-text prompts: deleted after matching (within minutes)</li>
          <li>
            Chat messages, including voice notes: encrypted at rest and automatically deleted after 7
            days. They are kept longer only in two bounded cases: while a report about the
            conversation is open (until it is resolved), or under a moderator safeguarding escalation
            (up to 90 days). Automated crisis-keyword detection alone does not extend message
            retention. Deleted immediately when you delete your account.
          </li>
          <li>Voice-note safety transcripts: discarded immediately after the check, never stored</li>
          <li>
            Anonymised matching data (numeric text representations, category and quality scores, and
            derived match context): deleted or anonymised after 180 days
          </li>
          <li>Translated text (auto-translate users only): encrypted cache for up to 24 hours</li>
          <li>Crisis-signposting event logs: 12 months</li>
          <li>Session ratings and usage analytics: anonymised within 90 days</li>
          <li>Account data: until you delete your account</li>
          <li>
            Device identifiers and IP addresses: lifetime of the account, deleted within 30 days of
            account deletion
          </li>
        </ul>
        <p className="mt-3">
          After account deletion we keep only what the law requires: terms-acceptance records (2
          years), consent records (6 years) and report records (12 months from resolution).
          Everything else is deleted within 30 days.
        </p>
      </section>

      <section>
        <h2>7. Automated decision-making</h2>
        <p>
          We use AI to analyse your free-text prompt to find a relevant match. This analysis
          extracts themes and keywords. It does <strong>not</strong> diagnose or categorise health
          conditions, and you are never shown to a match based on a health label.
        </p>
      </section>

      <section>
        <h2>8. Sign in with Apple and account deletion</h2>
        <p>
          You can delete your account in the app (Profile → Delete Account). We erase your personal
          data immediately (subject to the legal-retention items above) and attempt to revoke Sign in
          with Apple access on Apple&apos;s side. If we cannot complete that automatically, the app
          tells you and gives you the manual steps (Settings → your name → Sign in with Apple →
          Empath → Stop Using Apple ID). We never tell you Apple access was revoked when it was not.
        </p>
      </section>

      <section>
        <h2>9. Provider retention</h2>
        <p>
          We are seeking written confirmation of OpenAI&apos;s data-processing terms and
          zero-data-retention for the moderation, transcription and translation endpoints. Until that
          is confirmed, we do not claim that providers immediately delete inputs.
        </p>
      </section>

      <section>
        <h2>10. This website</h2>
        <p>
          This website does not require an account and does not use advertising or tracking cookies.
          Our hosting provider processes standard technical data, such as your IP address, to deliver
          the site.
        </p>
        <p className="mt-3">
          If you joined our waitlist here, we hold your email address, with your consent (Art.
          6(1)(a)), to send you updates about Empath. It is stored with our database provider
          (Supabase), and confirmation emails are sent through our email provider (Resend). We keep
          it until you unsubscribe or ask us to delete it. Email{" "}
          <a href="mailto:help@empathapp.co.uk">help@empathapp.co.uk</a> to be removed.
        </p>
      </section>

      <section>
        <h2>11. Your rights</h2>
        <p>Under UK GDPR you have the right to:</p>
        <ul>
          <li>Access your personal data</li>
          <li>Correct inaccurate data</li>
          <li>Delete your data (including via in-app account deletion)</li>
          <li>Restrict processing</li>
          <li>Data portability</li>
          <li>Object to processing</li>
          <li>Withdraw consent at any time</li>
        </ul>
        <p className="mt-3">
          To exercise any of these rights, contact{" "}
          <a href="mailto:help@empathapp.co.uk">help@empathapp.co.uk</a>.
        </p>
      </section>

      <section>
        <h2>12. How to complain</h2>
        <p>
          If you are unhappy with how we handle your data, you can complain to the Information
          Commissioner&apos;s Office (ICO) at{" "}
          <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">
            ico.org.uk
          </a>{" "}
          or on 0303 123 1113.
        </p>
      </section>

      <section>
        <h2>13. Changes to this policy</h2>
        <p>
          We will notify you of material changes in the app and update the &quot;Last updated&quot;
          date at the top of this page. See also our <Link href="/terms">Terms of Service</Link>.
        </p>
      </section>
    </LegalShell>
  );
}
