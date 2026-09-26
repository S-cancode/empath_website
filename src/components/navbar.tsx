import { EmpathIcon } from "./empath-logo";
import { TESTFLIGHT_URL } from "@/lib/site";

const links = [
  { label: "How it works", href: "#how-it-works" },
  { label: "About", href: "#about" },
  { label: "Safety", href: "#safety" },
];

// Theme (dark/light) is switched by the scroll engine via data-theme as the page
// moves from the dark world into the light one.
export function Navbar() {
  return (
    <nav data-nav data-theme="dark" className="x-nav" aria-label="Main">
      <a href="#hero" className="x-nav-logo" aria-label="Empath, back to top">
        <EmpathIcon size={30} />
        <span>Empath</span>
      </a>
      <div className="x-nav-links">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="x-nav-link">
            {l.label}
          </a>
        ))}
        <a href={TESTFLIGHT_URL} target="_blank" rel="noopener noreferrer" className="x-nav-cta">
          Join the beta
        </a>
      </div>
    </nav>
  );
}
