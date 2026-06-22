import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-farmer">
            About us
          </p>
          <h2 className="text-[10vw] font-light leading-[0.98] tracking-tight md:text-6xl">
            An egg spot that never clocks out.
          </h2>
          <p className="mt-7 max-w-md text-lg leading-relaxed text-grill/70">
            Egg &amp; Out is an all-day, egg-forward kitchen by Tiger Hospitality
            Group — born in San Clemente, built for whenever the craving hits.
            Breakfast at 3pm? That&apos;s the whole point.
          </p>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-grill/70">
            Young, fast, and a little obsessed with the perfect yolk.
          </p>
        </Reveal>

        {/* PLACEHOLDER atmosphere visual */}
        <Reveal delay={0.1}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem]">
            <div
              className="h-full w-full"
              style={{
                background:
                  "linear-gradient(150deg, #f7e859 0%, #ffcd00 35%, #f26a22 100%)",
              }}
            />
            <span className="absolute bottom-6 left-6 text-xs font-medium uppercase tracking-[0.3em] text-grill/40">
              atmosphere photo →
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
