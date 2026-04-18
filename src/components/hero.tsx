import { EmpathLogoFull } from "./empath-logo";

export function Hero() {
  return (
    <section id="hero" className="w-full bg-white">
      <div className="mx-auto max-w-4xl px-4 pt-16 pb-24 sm:pt-20 sm:pb-32 flex flex-col items-center text-center">
        {/* Full logo (rings + text) centered */}
        <EmpathLogoFull className="mb-8" width={500} />

        {/* Beta live badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#0088CC]/10 px-4 py-1.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#0088CC] opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#0088CC]"></span>
          </span>
          <span className="text-sm font-body font-medium text-[#0088CC]">
            The beta is live
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl font-heading font-medium text-gray-900 mb-3">
          Try Empath on TestFlight.
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-[#0088CC] mb-10 max-w-xl font-body">
          Join the beta below to get Empath on your iPhone.
        </p>

        {/* TestFlight CTA */}
        <a
          href="https://testflight.apple.com/join/erW4n6zc"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 w-full max-w-md items-center justify-center rounded-lg bg-gray-900 px-6 text-base font-body font-medium text-white transition-colors hover:bg-gray-800"
        >
          Join the TestFlight beta
        </a>
        <p className="mt-3 text-sm font-body text-gray-500 break-all">
          testflight.apple.com/join/erW4n6zc
        </p>
      </div>
    </section>
  );
}
