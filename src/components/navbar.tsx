"use client";

import { EmpathIcon } from "./empath-logo";

export function Navbar() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          {/* Left - Logo icon */}
          <button onClick={() => scrollToSection("hero")} className="hover:opacity-80 transition-opacity">
            <EmpathIcon size={32} />
          </button>

          {/* Right nav links */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-sm font-body text-gray-700 hover:text-gray-900 transition-colors"
            >
              How it works
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-body text-gray-700 hover:text-gray-900 transition-colors"
            >
              About
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
