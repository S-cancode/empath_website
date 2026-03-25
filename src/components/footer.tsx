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
    <footer className="w-full relative">
      {/* Blue accent bar */}
      <div className="h-1 bg-[#0088CC]" />

      <div className="bg-sky-50 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-start justify-between gap-10">
            {/* Logo icon */}
            <div className="flex-shrink-0">
              <EmpathIcon size={64} />
            </div>

            {/* Link columns */}
            <div className="grid grid-cols-3 gap-8 sm:gap-16">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h5 className="font-heading font-semibold text-gray-900 text-sm mb-3">
                    {category}
                  </h5>
                  <ul className="space-y-2">
                    {links.map((link) => (
                      <li key={link.label}>
                        {link.href.startsWith("/") ? (
                          <Link
                            href={link.href}
                            className="text-sm font-body text-gray-500 hover:text-gray-700 transition-colors"
                          >
                            {link.label}
                          </Link>
                        ) : (
                          <a
                            href={link.href}
                            target={link.href.startsWith("http") ? "_blank" : undefined}
                            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="text-sm font-body text-gray-500 hover:text-gray-700 transition-colors"
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
        </div>
      </div>

      {/* Empath icon bottom-right */}
      <div className="absolute bottom-4 right-4">
        <EmpathIcon size={40} className="opacity-50" />
      </div>
    </footer>
  );
}
