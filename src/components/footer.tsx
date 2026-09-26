import { EmpathIcon } from "./empath-logo";
import Link from "next/link";

const footerLinks = {
  Empath: [
    { label: "Instagram", href: "https://www.instagram.com/empath.app_/" },
    { label: "TikTok", href: "https://tiktok.com/@empath.app" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/empath-app-uk/?viewAsMember=true" },
  ],
  Company: [
    { label: "About", href: "#about" },
    { label: "Terms", href: "/terms" },
    { label: "Privacy", href: "/privacy" },
  ],
  Contact: [
    { label: "help@empathapp.co.uk", href: "mailto:help@empathapp.co.uk" },
    { label: "Support", href: "mailto:help@empathapp.co.uk" },
    { label: "Empath 2026", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="relative z-10 w-full bg-white">
      <div className="h-px bg-gradient-to-r from-transparent via-[#0088CC] to-transparent" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">
          <div className="flex items-center gap-3">
            <EmpathIcon size={44} />
            <span className="font-heading text-2xl text-gray-900">Empath</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 sm:gap-16">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h5 className="font-body font-medium uppercase tracking-[0.18em] text-[11px] text-[#0088CC] mb-4">
                  {category}
                </h5>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      {link.href.startsWith("/") ? (
                        <Link
                          href={link.href}
                          className="text-sm font-body text-gray-500 hover:text-gray-900 transition-colors"
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          target={link.href.startsWith("http") ? "_blank" : undefined}
                          rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-sm font-body text-gray-500 hover:text-gray-900 transition-colors break-all"
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-14 max-w-2xl text-xs font-body leading-relaxed text-gray-400">
          Empath is peer support, not therapy, medical advice or a crisis service. If you or someone
          else is in immediate danger, call 999. Samaritans: 116 123, free and 24/7.
        </p>
      </div>
    </footer>
  );
}
