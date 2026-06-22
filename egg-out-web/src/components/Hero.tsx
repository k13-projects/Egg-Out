"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], [0, -90]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden px-6 md:px-10"
    >
      <motion.div
        style={{ y: textY }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto w-full max-w-[1400px]"
      >
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.35em] text-farmer">
          Your Anytime Egg Spot
        </p>
        <h1 className="font-light leading-[0.9] tracking-tight text-grill">
          <span className="block text-[15vw] md:text-[9rem]">NOW &amp;</span>
          <span className="block text-[15vw] md:text-[9rem]">
            LATER<span className="text-farmer">.</span>
          </span>
          <span className="mt-3 block text-[9vw] font-medium md:text-[3.5rem]">
            All-day eggs.
          </span>
        </h1>
        <p className="mt-7 max-w-md text-lg leading-relaxed text-grill/70">
          An all-day, egg-forward kitchen in San Clemente. Sandwiches, burritos,
          and the good stuff — cracked fresh from open to close.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#menu"
            className="rounded-full bg-grill px-7 py-3.5 text-base font-bold text-offwhite transition-transform duration-300 hover:scale-105 active:scale-95"
          >
            See the menu
          </a>
          <a
            href="#order"
            className="rounded-full bg-farmer px-7 py-3.5 text-base font-bold text-offwhite transition-transform duration-300 hover:scale-105 active:scale-95"
          >
            Order online
          </a>
        </div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="text-xs font-medium uppercase tracking-[0.3em] text-grill/40"
        >
          Scroll
        </motion.div>
      </div>
    </section>
  );
}
