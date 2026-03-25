import { EmpathLogoFull } from "./empath-logo";
import { WaitlistForm } from "./waitlist-form";

export function Hero() {
  return (
    <section id="hero" className="w-full bg-white">
      <div className="mx-auto max-w-4xl px-4 pt-16 pb-24 sm:pt-20 sm:pb-32 flex flex-col items-center text-center">
        {/* Full logo (rings + text) centered */}
        <EmpathLogoFull className="mb-8" width={500} />

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl font-heading font-medium text-gray-900 mb-3">
          Get early access.
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-[#0088CC] mb-10 max-w-xl font-body">
          Join the waitlist for exclusive updates on Empath&apos;s launch.
        </p>

        {/* Email form */}
        <WaitlistForm />
      </div>
    </section>
  );
}
