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
              <h3 className="text-3xl font-medium tracking-tight">
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
                11:00 AM — 9:00 PM
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
