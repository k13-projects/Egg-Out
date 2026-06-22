import Image from "next/image";
import Reveal from "./Reveal";
import Badge from "./Badge";
import ModalTrigger from "./modal/ModalTrigger";

export default function Catering() {
  return (
    <section id="catering" className="px-6 py-10 md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="relative overflow-hidden rounded-[3rem] bg-grill px-8 py-20 text-offwhite md:px-16 md:py-28">
            {/* Lorena's tonal arrow texture, faint, as the card's surface */}
            <Image
              src="/assets/arrows-orange.png"
              alt=""
              fill
              aria-hidden
              sizes="100vw"
              className="pointer-events-none object-cover opacity-[0.14] mix-blend-screen"
            />
            <div
              className="pointer-events-none absolute right-[-10%] top-1/2 h-[120%] w-[60%] -translate-y-1/2 opacity-30 blur-2xl"
              style={{
                background:
                  "radial-gradient(circle, #f26a22 0%, transparent 70%)",
              }}
              aria-hidden
            />

            {/* spinning circle badge accent */}
            <div className="absolute right-8 top-8 z-10 hidden md:block">
              <Badge variant="blue" size={140} />
            </div>

            <div className="relative max-w-2xl">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-sunny">
                Catering
              </p>
              <h2 className="text-[11vw] font-light leading-[0.95] tracking-tight md:text-7xl">
                Bring the eggs to the party.
              </h2>
              <p className="mt-7 max-w-md text-lg leading-relaxed text-offwhite/70">
                Egg &amp; Out catering is perfect for team mornings, beach
                gatherings, family celebrations, and everything in between.
                Because great food shouldn&apos;t be limited to one table.
              </p>
              <ModalTrigger
                modal="catering"
                className="mt-9 inline-block rounded-full bg-farmer px-7 py-3.5 text-base font-bold text-offwhite transition-transform duration-300 hover:scale-105 active:scale-95"
              >
                Order catering
              </ModalTrigger>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
