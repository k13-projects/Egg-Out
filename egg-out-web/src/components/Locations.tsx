import Reveal from "./Reveal";

export default function Locations() {
  return (
    <section id="locations" className="px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-farmer">
            Locations
          </p>
          <h2 className="text-[11vw] font-light leading-[0.95] tracking-tight md:text-7xl">
            Find us<span className="text-farmer">.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-[1.2fr_1fr] md:gap-16">
            <div>
              <h3 className="flex items-center gap-3 text-3xl font-medium tracking-tight">
                <svg
                  viewBox="0 0 24 24"
                  className="h-7 w-7 shrink-0 text-farmer"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
                </svg>
                San Clemente
              </h3>
              <p className="mt-3 text-lg text-grill/70">Miramar Food Hall</p>
              <p className="text-lg text-grill/70">
                1720 North El Camino Real
              </p>
              <p className="mt-6 text-sm font-medium uppercase tracking-[0.2em] text-grill/50">
                Open daily
              </p>
              <p className="text-2xl font-medium text-farmer">
                8:00 AM to 2:00 PM
              </p>
            </div>

            {/* PLACEHOLDER map / storefront visual */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem]">
              <div
                className="h-full w-full"
                style={{
                  background:
                    "linear-gradient(135deg, #f0ebd7 0%, #b59d7b 100%)",
                }}
              />
              <span className="absolute bottom-6 left-6 text-xs font-medium uppercase tracking-[0.3em] text-grill/40">
                map / storefront →
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
