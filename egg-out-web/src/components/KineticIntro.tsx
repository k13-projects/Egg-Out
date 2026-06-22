"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Automatic 3D type-room intro (ref: 333southwabash.com "The Red").
 * "EGG & OUT" starts small in the center, then bursts outward to tile
 * the floor / ceiling / left / right walls of a one-point-perspective
 * room, holds, then fades — handing off to the faint PatternBg so the
 * wordmark "becomes the background".
 */

const TILE = "EGG & OUT  ".repeat(200);

// One-point-perspective room. Each wall is a plane rotated into place.
const X = 720; // half width
const Y = 460; // half height
const D = 2200; // room depth
const WALLS = [
  { key: "left", w: D, h: 2 * Y, t: `translateX(-${X}px) rotateY(90deg)` },
  { key: "right", w: D, h: 2 * Y, t: `translateX(${X}px) rotateY(-90deg)` },
  { key: "floor", w: 2 * X, h: D, t: `translateY(${Y}px) rotateX(-90deg)` },
  { key: "ceiling", w: 2 * X, h: D, t: `translateY(-${Y}px) rotateX(90deg)` },
];

export default function KineticIntro() {
  const [done, setDone] = useState(false);
  const [showRoom, setShowRoom] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    // Centered wordmark plays first on clean orange; mount the room after,
    // so it bursts in (avoids any tiny far-room artifact at the start).
    const room = setTimeout(() => setShowRoom(true), 700);
    const t = setTimeout(() => {
      document.body.style.overflow = "";
      setDone(true);
    }, 5000);
    return () => {
      clearTimeout(room);
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, []);

  if (done) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] overflow-hidden bg-farmer"
      style={{ perspective: 600, perspectiveOrigin: "50% 50%" }}
      initial={{ opacity: 1 }}
      animate={{ opacity: [1, 1, 1, 0] }}
      transition={{ duration: 5.0, times: [0, 0.78, 0.9, 1], ease: "easeInOut" }}
    >
      {/* The 3D room — SPIRALS in: translateZ (dolly) + rotateZ (spin) for a
          multi-dimensional spiral feel, then keeps flying forward through the
          back so the end resolves instead of freezing. Animate ONLY transforms
          here (z/rotate) — opacity/overflow/filter would force
          transform-style:flat and collapse the walls. The intro fades out via
          the OUTER div's opacity. */}
      {showRoom && (
      <motion.div
        className="absolute left-1/2 top-1/2"
        style={{ transformStyle: "preserve-3d" }}
        initial={{ z: -11000, rotate: -240 }}
        animate={{ z: [-11000, 0, 0, 1400], rotate: [-240, 0, 0, 70] }}
        transition={{ duration: 3.8, times: [0, 0.5, 0.72, 1], ease: [0.22, 1, 0.32, 1] }}
      >
        {WALLS.map((w) => (
          <div
            key={w.key}
            className="absolute select-none overflow-hidden font-bold uppercase tracking-tight"
            style={{
              width: w.w,
              height: w.h,
              marginLeft: -w.w / 2,
              marginTop: -w.h / 2,
              transform: w.t,
              color: "rgba(33,33,33,0.74)",
              fontSize: 78,
              lineHeight: 0.82,
              wordBreak: "break-word",
              whiteSpace: "normal",
            }}
            aria-hidden
          >
            {TILE}
          </div>
        ))}
      </motion.div>
      )}

      {/* Centered wordmark — stays FIXED (no zoom into the camera), then
          fades out once the spiralling text has wrapped the whole room. */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 5.0, times: [0, 0.1, 0.55, 0.66], ease: "easeInOut" }}
      >
        <span className="text-3xl font-bold uppercase tracking-[0.3em] text-grill md:text-5xl">
          EGG &amp; OUT
        </span>
      </motion.div>
    </motion.div>
  );
}
