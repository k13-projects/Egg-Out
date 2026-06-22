import Reveal from "./Reveal";

export default function Catering() {
  return (
    <section id="catering" className="px-6 py-10 md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="relative overflow-hidden rounded-[3rem] bg-grill px-8 py-20 text-offwhite md:px-16 md:py-28">
            {/* PLACEHOLDER catering spread visual */}
            <div
              className="pointer-events-none absolute right-[-10%] top-1/2 h-[120%] w-[60%] -translate-y-1/2 opacity-30 blur-2xl"
              style={{
                background:
                  "radial-gradient(circle, #f26a22 0%, transparent 70%)",
              }}
              aria-hidden
            />
            <div className="relative max-w-2xl">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-sunny">
                Catering
              </p>
              <h2 className="text-[11vw] font-light leading-[0.95] tracking-tight md:text-7xl">
                Bring the eggs to the party.
              </h2>
              <p className="mt-7 max-w-md text-lg leading-relaxed text-offwhite/70">
                Office mornings, events, big crews — pickup or delivery. Tell us
                the people, the date, and the vibe; we&apos;ll handle the rest.
              </p>
              <a
                href="#catering"
                className="mt-9 inline-block rounded-full bg-farmer px-7 py-3.5 text-base font-bold text-offwhite transition-transform duration-300 hover:scale-105 active:scale-95"
              >
                Order catering
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
