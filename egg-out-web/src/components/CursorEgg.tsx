"use client";

import {
  motion,
  useAnimationControls,
  useMotionValue,
  useSpring,
  useTransform,
  useVelocity,
  type MotionValue,
  type SpringOptions,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* ------------------------------------------------------------------
   CursorEgg — a runny sunny-side-up egg that glides across the page.
   The cooked yolk leads (stable highlight, no spin); a single white pool
   trails it, hard-clamped so the yolk can never escape the white. Faint
   grease streaks smear out behind it as it moves. Left click → a slow
   spatula flip that shows the browned underside. Right click → the yolk
   alone jiggles in place.
------------------------------------------------------------------ */

// Yolk: quick to follow, lightly springy so it settles with a little jiggle.
const YOLK_SPRING: SpringOptions = { stiffness: 600, damping: 22, mass: 0.7 };
// White: trails the YOLK on a soft, well-damped spring (smooth, settled glide).
const WHITE_SPRING: SpringOptions = { stiffness: 230, damping: 30, mass: 1.1 };

const WHITE_SIZE = 66; // px diameter (before squash)
const MAX_LAG = 15; // max gap between centres — keeps the yolk inside the pool

const clamp = (v: number, lo: number, hi: number) =>
  Math.min(Math.max(v, lo), hi);

// A grease streak: lags the pointer on a loose spring, orients along its own
// travel, sits offset sideways (perpendicular to motion) by `lateral`, and
// only shows while moving → reads as residue left on the surface.
function useStreak(
  mx: MotionValue<number>,
  my: MotionValue<number>,
  spring: SpringOptions,
  maxOpacity: number,
  lateral: number
) {
  const sx = useSpring(mx, spring);
  const sy = useSpring(my, spring);
  const vx = useVelocity(sx);
  const vy = useVelocity(sy);
  const angle = useTransform(
    () => (Math.atan2(vy.get(), vx.get()) * 180) / Math.PI
  );
  const opacity = useTransform(() => {
    const s = Math.hypot(vx.get(), vy.get());
    return clamp((s - 60) / 950, 0, 1) * maxOpacity;
  });
  // shift perpendicular to travel: perp of (vx,vy) is (-vy,vx), normalised.
  const x = useTransform(() => {
    const s = Math.hypot(vx.get(), vy.get()) || 1;
    return sx.get() + (-vy.get() / s) * lateral;
  });
  const y = useTransform(() => {
    const s = Math.hypot(vx.get(), vy.get()) || 1;
    return sy.get() + (vx.get() / s) * lateral;
  });
  return { x, y, angle, opacity };
}

export default function CursorEgg() {
  const [enabled, setEnabled] = useState(false);

  // Raw pointer position (viewport coords).
  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);

  // Yolk follows quickly, overshoots a touch → settles with a jiggle.
  const yolkX = useSpring(mx, YOLK_SPRING);
  const yolkY = useSpring(my, YOLK_SPRING);

  // Gentle jelly squash from the yolk's velocity — axis aligned, no spin.
  const vx = useVelocity(yolkX);
  const vy = useVelocity(yolkY);
  const squashX = useTransform(() => {
    const ax = Math.abs(vx.get());
    const ay = Math.abs(vy.get());
    return clamp(1 + (ax - ay) / 3600, 0.86, 1.14);
  });
  const squashY = useTransform(() => {
    const ax = Math.abs(vx.get());
    const ay = Math.abs(vy.get());
    return clamp(1 + (ay - ax) / 3600, 0.86, 1.14);
  });
  const squashXW = useTransform(() => {
    const ax = Math.abs(vx.get());
    const ay = Math.abs(vy.get());
    return clamp(1 + (ax - ay) / 2600, 0.82, 1.2);
  });
  const squashYW = useTransform(() => {
    const ax = Math.abs(vx.get());
    const ay = Math.abs(vy.get());
    return clamp(1 + (ay - ax) / 2600, 0.82, 1.2);
  });

  // The white trails the yolk on a soft spring, but we clamp the gap to
  // MAX_LAG so the yolk rides to the white's edge and never escapes it.
  const wsx = useSpring(yolkX, WHITE_SPRING);
  const wsy = useSpring(yolkY, WHITE_SPRING);
  const whiteX = useTransform(() => {
    const lx = wsx.get() - yolkX.get();
    const ly = wsy.get() - yolkY.get();
    const mag = Math.hypot(lx, ly);
    const k = mag > MAX_LAG ? MAX_LAG / mag : 1;
    return yolkX.get() + lx * k;
  });
  const whiteY = useTransform(() => {
    const lx = wsx.get() - yolkX.get();
    const ly = wsy.get() - yolkY.get();
    const mag = Math.hypot(lx, ly);
    const k = mag > MAX_LAG ? MAX_LAG / mag : 1;
    return yolkY.get() + ly * k;
  });

  // Three grease streaks abreast — centre, left, right — small and cute.
  const STREAK_SPRING: SpringOptions = { stiffness: 110, damping: 24, mass: 1.1 };
  const streakC = useStreak(mx, my, STREAK_SPRING, 0.2, 0);
  const streakL = useStreak(mx, my, STREAK_SPRING, 0.15, -10);
  const streakR = useStreak(mx, my, STREAK_SPRING, 0.15, 10);
  const streaks = [
    { ...streakC, w: 15, h: 3.5 },
    { ...streakL, w: 10, h: 3 },
    { ...streakR, w: 10, h: 3 },
  ];

  // Grow the yolk a hair over clickable things.
  const [hot, setHot] = useState(false);
  const hover = useSpring(1, { stiffness: 400, damping: 22 });

  // Spatula flip (whole egg) and right-click jiggle (yolk only).
  const flip = useAnimationControls();
  const shake = useAnimationControls();
  const flipping = useRef(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || calm.matches) return;

    setEnabled(true);
    document.documentElement.classList.add("egg-cursor");

    // Small hop, a slow tumble that lingers as it shows its browned back,
    // then lands — a lazy spatula flip.
    const doFlip = () => {
      if (flipping.current) return;
      flipping.current = true;
      flip
        .start({
          y: [0, -13, -13, 0],
          rotateX: [0, 165, 195, 360],
          scale: [1, 1.06, 1.06, 1],
          transition: {
            rotateX: { duration: 0.78, times: [0, 0.36, 0.6, 1], ease: "easeInOut" },
            y: { duration: 0.78, times: [0, 0.26, 0.42, 1], ease: "easeOut" },
            scale: { duration: 0.78, times: [0, 0.26, 0.42, 1], ease: "easeOut" },
          },
        })
        .then(() => {
          flipping.current = false;
        });
    };

    // Just the yolk: a quick wobble that settles back home.
    const doShake = () => {
      shake.start({
        rotate: [0, -15, 12, -7, 4, 0],
        scale: [1, 1.2, 0.92, 1.08, 1],
        transition: { duration: 0.5, ease: "easeOut" },
      });
    };

    const move = (e: PointerEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
      const interactive = (e.target as Element | null)?.closest(
        "a, button, [role='button'], input, label, select, textarea"
      );
      setHot(Boolean(interactive));
    };

    const down = (e: PointerEvent) => {
      if (e.button === 2) doFlip(); // right click → flip
      else if (e.button === 0) doShake(); // left click → yolk jiggle
    };

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", down);

    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", down);
      document.documentElement.classList.remove("egg-cursor");
    };
  }, [mx, my, flip, shake]);

  useEffect(() => {
    hover.set(hot ? 1.35 : 1);
  }, [hot, hover]);

  if (!enabled) return null;

  return (
    <div aria-hidden className="egg-cursor-layer">
      {/* grease residue — furthest back, only visible while moving */}
      {streaks.map((s, i) => (
        <motion.div key={i} className="egg-cursor-follow" style={{ x: s.x, y: s.y }}>
          <div className="egg-cursor-center">
            <motion.div
              className="egg-cursor-residue"
              style={{ width: s.w, height: s.h, rotate: s.angle, opacity: s.opacity }}
            />
          </div>
        </motion.div>
      ))}

      {/* the white pool — painted behind, dragged along by the yolk */}
      <motion.div className="egg-cursor-follow" style={{ x: whiteX, y: whiteY }}>
        <div className="egg-cursor-center">
          <motion.div className="egg-cursor-flip" animate={flip} initial={false}>
            <motion.div
              className="egg-cursor-white"
              style={{ width: WHITE_SIZE, height: WHITE_SIZE, scaleX: squashXW, scaleY: squashYW }}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* the cooked yolk — stable shine, browned underside on the flip */}
      <motion.div className="egg-cursor-follow" style={{ x: yolkX, y: yolkY }}>
        <div className="egg-cursor-center">
          <motion.div className="egg-cursor-flip" animate={flip} initial={false}>
            <motion.div className="egg-cursor-shake" animate={shake} initial={false}>
              <motion.div
                className="egg-cursor-yolk"
                style={{ scaleX: squashX, scaleY: squashY, scale: hover }}
              >
                <div className="yolk-face yolk-front" />
                <div className="yolk-face yolk-back" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
