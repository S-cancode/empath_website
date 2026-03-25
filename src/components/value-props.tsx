import { Search, Handshake, Lock, Clock } from "lucide-react";

const props = [
  {
    icon: Search,
    title: "Real people, not bots",
  },
  {
    icon: Handshake,
    title: "Matched to your experience",
  },
  {
    icon: Lock,
    title: "Private and anonymous by default",
  },
  {
    icon: Clock,
    title: "Available when you need it",
  },
];

export function ValueProps() {
  return (
    <section className="w-full bg-sky-50/50 pb-16 sm:pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {props.map((prop) => (
            <div key={prop.title} className="flex flex-col items-center text-center gap-3">
              <prop.icon className="w-10 h-10 text-[#0088CC] stroke-[1.5]" />
              <h4 className="text-sm sm:text-base font-heading font-semibold text-[#0088CC]">
                {prop.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
