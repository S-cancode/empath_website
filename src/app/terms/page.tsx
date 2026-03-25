import Link from "next/link";
import { EmpathIcon } from "@/components/empath-logo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Empath",
  description: "Terms of Service for the Empath platform.",
};

export default function TermsPage() {
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
          Terms of Service
        </h1>
        <p className="text-sm text-gray-400 font-body mb-12">Last updated: March 2026</p>

        <div className="prose prose-gray max-w-none font-body space-y-8 text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-heading font-semibold text-gray-900 mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Empath platform (&quot;Service&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, you may not use the Service. Empath reserves the right to update these Terms at any time, and continued use of the Service constitutes acceptance of any changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-semibold text-gray-900 mb-3">2. Description of Service</h2>
            <p>
              Empath is a peer support platform that uses AI-powered matching to connect individuals going through similar life experiences for anonymous, empathetic conversations. Empath is not a medical service, therapy platform, or crisis intervention tool. The Service is designed to facilitate peer-to-peer support and should not be used as a substitute for professional mental health care.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-semibold text-gray-900 mb-3">3. Eligibility</h2>
            <p>
              You must be at least 18 years of age to use the Service. By using Empath, you represent and warrant that you meet this age requirement and have the legal capacity to enter into these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-semibold text-gray-900 mb-3">4. User Accounts &amp; Anonymity</h2>
            <p>
              Empath is designed to protect your anonymity. You are not required to provide your real name or identifying information to participate in peer conversations. However, you must provide a valid email address to join the waitlist and create an account. You are responsible for maintaining the confidentiality of your account credentials.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-semibold text-gray-900 mb-3">5. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Use the Service to harass, abuse, threaten, or harm other users</li>
              <li>Share personally identifiable information about yourself or others during conversations</li>
              <li>Use the Service for any unlawful purpose</li>
              <li>Attempt to circumvent any security features of the platform</li>
              <li>Impersonate another person or misrepresent your experiences</li>
              <li>Use the Service to promote commercial products or services</li>
              <li>Transmit any malicious code, viruses, or harmful content</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-heading font-semibold text-gray-900 mb-3">6. Content &amp; Conversations</h2>
            <p>
              All conversations on Empath are intended to be private and anonymous. However, Empath may monitor conversations using automated systems to ensure user safety and compliance with these Terms. If we detect content that suggests imminent harm to a user or others, we reserve the right to intervene, including notifying appropriate authorities.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-semibold text-gray-900 mb-3">7. Disclaimers</h2>
            <p>
              The Service is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, whether express or implied. Empath does not guarantee the accuracy of AI matching, the quality of peer interactions, or the availability of the Service at any given time. Empath is not responsible for the content of conversations between users.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-semibold text-gray-900 mb-3">8. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Empath shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of the Service. This includes, but is not limited to, damages for emotional distress, loss of data, or any outcomes resulting from peer conversations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-semibold text-gray-900 mb-3">9. Termination</h2>
            <p>
              Empath may suspend or terminate your access to the Service at any time, with or without cause, and with or without notice. You may also delete your account at any time. Upon termination, your right to use the Service ceases immediately.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-semibold text-gray-900 mb-3">10. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of England and Wales, without regard to conflict of law principles. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-semibold text-gray-900 mb-3">11. Contact</h2>
            <p>
              If you have any questions about these Terms, please contact us at{" "}
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
