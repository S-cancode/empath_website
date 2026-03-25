import Link from "next/link";
import { EmpathIcon } from "@/components/empath-logo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Empath",
  description: "Privacy Policy for the Empath platform.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 flex h-14 items-center">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <EmpathIcon size={28} />
            <span className="font-heading font-semibold text-[#0088CC]">Empath</span>
          </Link>
        </div>
      </nav>

      <main className="mx-auto max-w-3xl px-4 sm:px-6 py-16 sm:py-24">
        <h1 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-400 font-body mb-12">Last updated: March 2026</p>

        <div className="prose prose-gray max-w-none font-body space-y-8 text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-heading font-semibold text-gray-900 mb-3">1. Introduction</h2>
            <p>
              Empath (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and protect your personal data when you use our platform and services. We comply with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-semibold text-gray-900 mb-3">2. Data Controller</h2>
            <p>
              Empath is the data controller for the personal data processed through this platform. For any data protection queries, contact us at{" "}
              <a href="mailto:help@empathapp.co.uk" className="text-[#0088CC] hover:underline">
                help@empathapp.co.uk
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-semibold text-gray-900 mb-3">3. Data We Collect</h2>
            <p>We collect the following types of data:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Email address</strong> — provided when you join the waitlist or create an account</li>
              <li><strong>Experience data</strong> — information you share about your situation for the purpose of AI matching (e.g. what you&apos;re going through, how you&apos;re feeling)</li>
              <li><strong>Conversation data</strong> — messages exchanged during peer conversations, stored in encrypted form</li>
              <li><strong>Usage data</strong> — anonymous analytics such as page views, session duration, and feature usage</li>
              <li><strong>Device data</strong> — browser type, operating system, and IP address (anonymised)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-heading font-semibold text-gray-900 mb-3">4. How We Use Your Data</h2>
            <p>We use your data for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>To provide and operate the Empath platform</li>
              <li>To match you with appropriate peers using our AI matching system</li>
              <li>To send you waitlist updates and service communications</li>
              <li>To ensure user safety through automated content monitoring</li>
              <li>To improve our matching algorithms and platform experience</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-heading font-semibold text-gray-900 mb-3">5. Legal Basis for Processing</h2>
            <p>We process your personal data on the following legal bases under UK GDPR:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Consent</strong> — for joining the waitlist and receiving communications</li>
              <li><strong>Contract</strong> — for providing the Service as described in our Terms</li>
              <li><strong>Legitimate interest</strong> — for improving the platform, ensuring safety, and preventing misuse</li>
              <li><strong>Legal obligation</strong> — where we are required to process data by law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-heading font-semibold text-gray-900 mb-3">6. Data Sharing</h2>
            <p>
              We do not sell your personal data. We may share data with the following categories of third parties, only as necessary to operate the Service:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Infrastructure providers</strong> — hosting and database services (e.g. Vercel, Supabase)</li>
              <li><strong>Email services</strong> — for transactional emails (e.g. Resend)</li>
              <li><strong>Analytics providers</strong> — anonymised usage data only</li>
              <li><strong>Law enforcement</strong> — only where required by law or to prevent imminent harm</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-heading font-semibold text-gray-900 mb-3">7. Data Retention</h2>
            <p>
              We retain your data only for as long as necessary to fulfil the purposes outlined in this policy. Waitlist email addresses are retained until you unsubscribe or request deletion. Conversation data is retained for a maximum of 90 days after the conversation ends, after which it is permanently deleted. Account data is retained until you delete your account.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-semibold text-gray-900 mb-3">8. Data Security</h2>
            <p>
              We implement appropriate technical and organisational measures to protect your personal data, including encryption at rest and in transit, access controls, and regular security reviews. All conversations are encrypted and stored securely. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-semibold text-gray-900 mb-3">9. Your Rights</h2>
            <p>Under UK GDPR, you have the following rights:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Right of access</strong> — request a copy of your personal data</li>
              <li><strong>Right to rectification</strong> — request correction of inaccurate data</li>
              <li><strong>Right to erasure</strong> — request deletion of your personal data</li>
              <li><strong>Right to restrict processing</strong> — request limitation of how we use your data</li>
              <li><strong>Right to data portability</strong> — receive your data in a structured, machine-readable format</li>
              <li><strong>Right to object</strong> — object to processing based on legitimate interests</li>
              <li><strong>Right to withdraw consent</strong> — withdraw consent at any time where processing is based on consent</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, contact us at{" "}
              <a href="mailto:help@empathapp.co.uk" className="text-[#0088CC] hover:underline">
                help@empathapp.co.uk
              </a>. We will respond within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-semibold text-gray-900 mb-3">10. Cookies</h2>
            <p>
              We use essential cookies required for the Service to function. We do not use advertising or tracking cookies. Analytics cookies, if used, collect only anonymised data. You can control cookies through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-semibold text-gray-900 mb-3">11. International Transfers</h2>
            <p>
              Your data may be processed in countries outside the UK. Where this occurs, we ensure appropriate safeguards are in place, such as Standard Contractual Clauses or adequacy decisions, to protect your data in accordance with UK GDPR.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-semibold text-gray-900 mb-3">12. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of significant changes by email or through the platform. The &quot;Last updated&quot; date at the top of this page indicates when the policy was last revised.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-semibold text-gray-900 mb-3">13. Complaints</h2>
            <p>
              If you are not satisfied with how we handle your personal data, you have the right to lodge a complaint with the Information Commissioner&apos;s Office (ICO) at{" "}
              <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-[#0088CC] hover:underline">
                ico.org.uk
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-semibold text-gray-900 mb-3">14. Contact</h2>
            <p>
              For any questions about this Privacy Policy or your personal data, contact us at{" "}
              <a href="mailto:help@empathapp.co.uk" className="text-[#0088CC] hover:underline">
                help@empathapp.co.uk
              </a>.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
