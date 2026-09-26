/**
 * Terms of Service shown on the website. Mirrors the app's current published
 * version (empath repo: client/src/lib/legal-text.ts, TERMS_SECTIONS v1.2) so
 * the public page matches what users accept in the app. When the app bumps its
 * terms version, update this file to match rather than editing wording here.
 */

export const TERMS_VERSION = "1.2";
export const TERMS_LAST_UPDATED = "26 September 2026";

export interface TermsSection {
  title: string;
  body: string;
}

export const TERMS_SECTIONS: TermsSection[] = [
  {
    title: "1. What This Service Is",
    body: "Empath is a peer connection platform for people experiencing similar life challenges. It is NOT therapy, NOT medical advice, and NOT a crisis service. Conversations are with other users, not professionals.",
  },
  {
    title: "2. Eligibility",
    body: "You must be 18 or older to use this service.",
  },
  {
    title: "3. Community Rules",
    body: `Empath has zero tolerance for objectionable content or abusive users. The following are prohibited:

• No illegal content
• No encouraging self-harm or suicide
• No harassment, bullying, or threats
• No sexual or romantic solicitation
• No providing medical, therapeutic, or clinical advice
• No sharing personal contact information
• No impersonation
• No spam or commercial solicitation`,
  },
  {
    title: "4. Moderation & Enforcement",
    body: "Messages are automatically checked before delivery, and harmful content is blocked. We review reports within 24 hours and remove content that breaks these rules. Users who break these rules are warned, suspended, or permanently banned; serious or repeated violations lead to a permanent ban.",
  },
  {
    title: "5. Reporting & Blocking",
    body: "You can report a message or a user, and block any user, from within a conversation. Blocking a user also alerts our moderation team.",
  },
  {
    title: "6. Complaints",
    body: "To make a complaint about how we handled a report or moderation decision, contact help@empathapp.co.uk. We will respond within 14 days.",
  },
  {
    title: "7. Disclaimer",
    body: "Conversations on this platform are with other users, not professionals. Nothing said on this platform constitutes medical advice, diagnosis, or treatment. We are not responsible for the content of conversations between users.",
  },
  {
    title: "8. Privacy",
    body: "Your use of Empath is also governed by our Privacy Notice, available via the link below. Before you can be matched or chat, you will be asked for explicit consent to the processing of sensitive personal data, including by our AI provider, as described on the consent screen.",
  },
  {
    title: "9. Your Content",
    body: "You retain ownership of the text you submit. By using Empath, you grant us a limited licence to process your text for the purposes described in our Privacy Notice, including matching, safety assessment, and moderation.",
  },
  {
    title: "10. Account Termination",
    body: "You may delete your account at any time in Profile. We may terminate or suspend your account if you violate these Terms, as described in Section 4.",
  },
  {
    title: "11. Limitation of Liability",
    body: "Nothing in these Terms excludes or limits our liability for death or personal injury caused by our negligence, fraud or fraudulent misrepresentation, or any other liability that cannot be excluded or limited under English law. Subject to the foregoing, to the fullest extent permitted by law, Empath shall not be liable for any indirect, incidental, or consequential damages arising from your use of the service.",
  },
  {
    title: "12. Changes to Terms",
    body: "We will notify you of material changes via in-app notification. Your continued use after changes constitutes acceptance.",
  },
  {
    title: "13. Governing Law",
    body: "These terms are governed by the laws of England and Wales.",
  },
];

/** The consent text users agree to in the app before matching or chat (v1.2). */
export const CONSENT_VERSION = "1.2";
export const CONSENT_TEXT = `Empath uses OpenAI (servers in the United States) for two things the app needs in order to work:

• Matching: the text you write about what you're going through is sent to OpenAI, with names, contact details and other identifiers removed where we can detect them, so we can find someone in a similar situation. Your original text is deleted after matching.
• Safety checks: every message you send in a chat is checked by OpenAI's moderation service before it is delivered, to block harassment and other harmful content.

Your text may include information about your health, emotions or personal circumstances. Under UK law, this is sensitive personal data.

Who sees what:
• Your matched peer sees your messages and a short AI-written summary of what you shared.
• Our moderators may review a conversation if it is reported.
• We may review anonymised samples of text to improve our matching and safety systems.

We do not diagnose you or categorise your health condition.

Voice notes and message translation are optional and ask for your permission separately when you first use them.

If you do not agree, you can still use your account, but you cannot be matched or chat. You can give or withdraw consent at any time in Profile.`;
