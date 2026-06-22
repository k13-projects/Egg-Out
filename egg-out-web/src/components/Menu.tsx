import Reveal from "./Reveal";

// PLACEHOLDER menu — real menu PDF/items to be confirmed.
const ITEMS = [
  {
    name: "Signature Egg Sandwich",
    desc: "Brioche, folded egg, melted cheddar, crispy lacy edges.",
    grad: "radial-gradient(circle at 35% 30%, #fff8d8, #ffcd00 40%, #f26a22)",
  },
  {
    name: "Breakfast Burrito",
    desc: "Soft scramble, crispy potato, salsa verde, wrapped tight.",
    grad: "radial-gradient(circle at 35% 30%, #fdf3c0, #f2aa00 45%, #ec8b00)",
  },
  {
    name: "Sunny Smash",
    desc: "Smashed avo, sunny-side-up, chili crunch on sourdough.",
    grad: "radial-gradient(circle at 35% 30%, #fff7c2, #f7e859 35%, #ffcd00)",
  },
  {
    name: "Yolk Melt",
    desc: "Double egg, American, secret sauce, pillow-soft bun.",
    grad: "radial-gradient(circle at 35% 30%, #fff1d0, #f2aa00 40%, #f26a22)",
  },
  {
    name: "Scramble Bowl",
    desc: "Fluffy scramble, greens, grains, pickled onion.",
    grad: "radial-gradient(circle at 35% 30%, #fdf6cf, #ffcd00 45%, #ec8b00)",
  },
  {
    name: "House Cold Brew",
    desc: "Slow-steeped, smooth, all-day fuel.",
    grad: "radial-gradient(circle at 35% 30%, #e9d8b8, #b59d7b 55%, #8a7355)",
  },
];

export default function Menu() {
  return (
    <section id="menu" className="px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-farmer">
            Our menu
          </p>
          <h2 className="max-w-3xl text-[11vw] font-light leading-[0.95] tracking-tight md:text-7xl">
            Eggs, turned into art<span className="text-farmer">.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item, i) => (
            <Reveal key={item.name} delay={(i % 3) * 0.08}>
              <div className="group cursor-pointer">
                {/* PLACEHOLDER product visual */}
                <div className="relative mb-6 aspect-square overflow-hidden rounded-[2rem]">
                  <div
                    className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-110"
                    style={{ background: item.grad }}
                  />
                  <span className="absolute bottom-4 left-5 text-[11px] font-medium uppercase tracking-[0.25em] text-grill/30">
                    product shot →
                  </span>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-2xl font-medium tracking-tight">
                    {item.name}
                  </h3>
                  <span className="text-lg font-medium text-grill/40">$—</span>
                </div>
                <p className="mt-2 text-base leading-relaxed text-grill/60">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 flex flex-wrap items-center gap-4">
          <a
            href="#menu"
            className="rounded-full bg-grill px-7 py-3.5 text-base font-bold text-offwhite transition-transform duration-300 hover:scale-105 active:scale-95"
          >
            See full menu (PDF)
          </a>
          <a
            href="#order"
            className="rounded-full border-0 bg-farmer px-7 py-3.5 text-base font-bold text-offwhite transition-transform duration-300 hover:scale-105 active:scale-95"
          >
            Order online
          </a>
          <span className="text-sm text-grill/40">Menu items to be confirmed.</span>
        </Reveal>
      </div>
    </section>
  );
}
