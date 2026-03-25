import Image from "next/image";

const steps = [
  {
    number: 1,
    title: "Tell us what you are going through",
    description:
      "Answer a few simple questions about your situation and how you are feeling. No clinical labels. No diagnosis. Just your experience in your own words.",
    image: "/images/step-1.jpg",
    alt: "Person reflecting at their laptop",
    imagePosition: "right" as const,
  },
  {
    number: 2,
    title: "We find your match using AI",
    description:
      "Our AI reads between the lines and finds someone whose experience mirrors yours. Someone who has been through something similar and is ready to listen.",
    image: "/images/step-2.jpg",
    alt: "Hands passing a heart",
    imagePosition: "left" as const,
  },
  {
    number: 3,
    title: "Start a real, private conversation",
    description:
      "Connect instantly in a safe, anonymous chat. No social profiles. No followers. Just two people, talking honestly.",
    image: "/images/step-3.jpg",
    alt: "Two people having a conversation",
    imagePosition: "right" as const,
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full bg-sky-50/50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {steps.map((step) => (
          <div
            key={step.number}
            className={`flex flex-col ${
              step.imagePosition === "left" ? "md:flex-row-reverse" : "md:flex-row"
            } items-center gap-8 md:gap-16 mb-16 sm:mb-24 last:mb-0`}
          >
            {/* Text */}
            <div className="flex-1 w-full">
              <h3 className="text-2xl sm:text-3xl font-heading font-medium text-gray-900 mb-4">
                Step {step.number} - {step.title}
              </h3>
              <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-md font-body">
                {step.description}
              </p>
            </div>

            {/* Image */}
            <div className="flex-1 w-full">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
                <Image
                  src={step.image}
                  alt={step.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
