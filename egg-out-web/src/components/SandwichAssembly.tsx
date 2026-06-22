"use client";

import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef } from "react";

/**
 * Scroll-driven sandwich build (ref: cravburgers.shop).
 * Left = menu / description; right = ingredients fly in from the right and
 * stack as you scroll, then the lobster-roll bun closes on top.
 * Each layer is a CSS PLACEHOLDER — swap for an alpha-PNG ingredient
 * (see MEDIA-BRIEF.md "Ingredient layer set") when generated.
 */

type Layer = {
  key: string;
  label: string;
  win: [number, number];
  from: "right" | "top";
  bottom: number; // px offset within the 440px stack
  height: number;
  z: number;
  className: string;
  style?: React.CSSProperties;
};

const LAYERS: Layer[] = [
  {
    key: "bun-bottom",
    label: "Toasted lobster-roll base",
    win: [0.06, 0.2],
    from: "right",
    bottom: 0,
    height: 64,
    z: 1,
    className: "rounded-[50%/70%]",
    style: {
      background:
        "linear-gradient(180deg,#e9c074 0%,#d9a24e 60%,#b97f33 100%)",
    },
  },
  {
    key: "egg",
    label: "Folded farm egg",
    win: [0.2, 0.34],
    from: "right",
    bottom: 46,
    height: 58,
    z: 2,
    className: "rounded-[50%/65%]",
    style: {
      background:
        "radial-gradient(circle at 50% 40%, #ffcd00 0%, #ffcd00 22%, #fffdf5 24%, #fff 70%)",
    },
  },
  {
    key: "lettuce",
    label: "Crisp lettuce",
    win: [0.34, 0.48],
    from: "right",
    bottom: 86,
    height: 46,
    z: 3,
    className: "rounded-[50%/80%]",
    style: {
      background: "linear-gradient(180deg,#8db84a 0%,#5f9136 100%)",
    },
  },
  {
    key: "sauce",
    label: "House sauces",
    win: [0.48, 0.6],
    from: "right",
    bottom: 120,
    height: 26,
    z: 4,
    className: "rounded-[50%/90%]",
    style: { background: "linear-gradient(180deg,#f7a23b,#f26a22)" },
  },
  {
    key: "tomato",
    label: "Vine tomato",
    win: [0.6, 0.72],
    from: "right",
    bottom: 140,
    height: 40,
    z: 5,
    className: "rounded-[50%/75%]",
    style: { background: "radial-gradient(circle at 50% 40%, #e8536a, #c80f2e)" },
  },
  {
    key: "bun-top",
    label: "...and close it up",
    win: [0.74, 0.9],
    from: "top",
    bottom: 158,
    height: 120,
    z: 6,
    className: "rounded-t-[140px] rounded-b-[40px]",
    style: {
      background:
        "linear-gradient(180deg,#f0c674 0%,#e3a951 55%,#cf8a36 100%)",
    },
  },
];

function StackLayer({
  layer,
  progress,
}: {
  layer: Layer;
  progress: MotionValue<number>;
}) {
  const [s, e] = layer.win;
  const mid = s + (e - s) * 0.55;
  const x = useTransform(
    progress,
    layer.win,
    [layer.from === "right" ? 560 : 0, 0],
  );
  const y = useTransform(
    progress,
    layer.win,
    [layer.from === "top" ? -360 : 0, 0],
  );
  const opacity = useTransform(progress, [s, mid], [0, 1]);

  return (
    <motion.div
      style={{
        x,
        y,
        opacity,
        bottom: layer.bottom,
        height: layer.height,
        zIndex: layer.z,
        ...layer.style,
      }}
      className={`absolute left-1/2 w-[300px] -translate-x-1/2 shadow-[0_18px_30px_-12px_rgba(120,60,10,0.35)] ${layer.className}`}
      aria-hidden
    />
  );
}

function StepRow({
  layer,
  progress,
  index,
}: {
  layer: Layer;
  progress: MotionValue<number>;
  index: number;
}) {
  const [s] = layer.win;
  const color = useTransform(
    progress,
    [s - 0.02, s + 0.04],
    ["rgba(33,33,33,0.35)", "#f26a22"],
  );
  const x = useTransform(progress, [s - 0.02, s + 0.04], [0, 10]);
  return (
    <motion.li
      style={{ color, x }}
      className="flex items-baseline gap-4 text-2xl font-medium tracking-tight md:text-3xl"
    >
      <span className="text-sm font-medium tabular-nums opacity-50">
        0{index + 1}
      </span>
      {layer.label}
    </motion.li>
  );
}

export default function SandwichAssembly() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Finished sandwich flourish
  const stackScale = useTransform(scrollYProgress, [0.9, 1], [1, 1.06]);
  const steamOpacity = useTransform(scrollYProgress, [0.9, 0.96, 1], [0, 0.6, 0.4]);

  return (
    <section id="build" ref={ref} className="relative h-[360vh] bg-offwhite">
      <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden">
        <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-10 px-6 md:grid-cols-2 md:px-10">
          {/* LEFT — menu / description */}
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-farmer">
              Built to order
            </p>
            <h2 className="mb-3 text-[12vw] font-light leading-[0.9] tracking-tight md:text-7xl">
              The Signature.
            </h2>
            <p className="mb-10 max-w-sm text-lg leading-relaxed text-grill/60">
              Keep scrolling — we&apos;ll build it. Egg, greens, sauces, all
              tucked into a toasted lobster-roll bun.
            </p>
            <ul className="flex flex-col gap-4">
              {LAYERS.map((l, i) => (
                <StepRow
                  key={l.key}
                  layer={l}
                  progress={scrollYProgress}
                  index={i}
                />
              ))}
            </ul>
          </div>

          {/* RIGHT — the build stage */}
          <div className="flex justify-center">
            <motion.div
              style={{ scale: stackScale }}
              className="relative h-[440px] w-[360px]"
            >
              {/* steam */}
              <motion.div
                style={{ opacity: steamOpacity }}
                className="absolute left-1/2 top-6 z-10 -translate-x-1/2 text-xs font-medium uppercase tracking-[0.3em] text-grill/40"
              >
                ~ fresh ~
              </motion.div>
              {LAYERS.map((l) => (
                <StackLayer key={l.key} layer={l} progress={scrollYProgress} />
              ))}
              <span className="absolute bottom-[-28px] left-1/2 -translate-x-1/2 text-[11px] font-medium uppercase tracking-[0.25em] text-grill/30">
                ingredient PNGs →
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
