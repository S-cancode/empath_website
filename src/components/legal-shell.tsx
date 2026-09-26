import Link from "next/link";
import { EmpathIcon } from "@/components/empath-logo";

const legalLinks = [
  { label: "Terms", href: "/terms" },
  { label: "Privacy", href: "/privacy" },
];

export function LegalShell({
  title,
  eyebrow,
  lastUpdated,
  intro,
  children,
}: {
  title: string;
  eyebrow: string;
  lastUpdated: string;
  intro?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 flex h-14 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <EmpathIcon size={28} />
            <span className="font-heading font-semibold text-[#0088CC]">Empath</span>
          </Link>
          <div className="flex items-center gap-5">
            {legalLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-body text-gray-500 hover:text-gray-900 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-3xl px-4 sm:px-6 py-16 sm:py-24">
        <p className="text-xs font-body font-medium uppercase tracking-[0.2em] text-[#0088CC] mb-4">
          {eyebrow}
        </p>
        <h1 className="text-4xl sm:text-5xl font-heading font-medium text-gray-900 mb-3 tracking-tight">
          {title}
        </h1>
        <p className="text-sm text-gray-400 font-body mb-10">Last updated: {lastUpdated}</p>

        {intro && (
          <div className="mb-12 rounded-2xl bg-sky-50 px-5 py-4 text-sm sm:text-base font-body text-gray-600 leading-relaxed">
            {intro}
          </div>
        )}

        <div className="max-w-none font-body space-y-10 text-gray-600 leading-relaxed [&_h2]:text-xl [&_h2]:font-heading [&_h2]:font-semibold [&_h2]:text-gray-900 [&_h2]:mb-3 [&_a]:text-[#0088CC] [&_a:hover]:underline [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul]:mt-2 [&_strong]:text-gray-800">
          {children}
        </div>

        <div className="mt-16 border-t border-gray-100 pt-8 text-sm font-body text-gray-500">
          Questions? Contact{" "}
          <a href="mailto:help@empathapp.co.uk" className="text-[#0088CC] hover:underline">
            help@empathapp.co.uk
          </a>
          . <Link href="/" className="text-[#0088CC] hover:underline">Back to Empath</Link>
        </div>
      </main>
    </div>
  );
}
