export function About() {
  return (
    <section id="about" className="w-full">
      {/* Mission statement */}
      <div className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-medium text-gray-900 mb-4 leading-tight">
            You don&apos;t have to go through this alone.
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-[#0088CC] leading-relaxed max-w-3xl mx-auto font-body">
            Empath connects you with someone who truly gets what you&apos;re
            going through. Not a therapist. Not a bot. A real person, matched by
            AI.
          </p>

          {/* Pagination dots from design */}
          <div className="flex items-center justify-center gap-2 mt-10">
            <div className="w-3 h-3 rounded-full bg-gray-900" />
            <div className="w-3 h-3 rounded-full bg-gray-300" />
          </div>
        </div>
      </div>

      {/* "Finally, someone who gets it" */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-heading font-medium text-gray-900 mb-6">
            Finally, someone who gets it.
          </h2>
          <div className="space-y-6 max-w-3xl">
            <p className="text-base sm:text-lg text-[#0088CC]/70 leading-relaxed font-body">
              We all go through things that are hard to put into words. Grief.
              Anxiety. Loneliness. Life transitions. Relationship breakdowns. The
              kind of pain that feels impossible to explain to the people around
              you — even the ones who love you.
            </p>
            <p className="text-base sm:text-lg text-[#0088CC]/70 leading-relaxed font-body">
              Empath exists for those moments. It is a safe, private space where
              you can talk to a real person who has been through something
              similar. Not a professional. Not someone who will judge you. Just
              someone who understands, because they have lived it too.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
