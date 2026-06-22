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

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => {
      document.body.style.overflow = "";
      setDone(true);
    }, 4200);
    return () => {
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
      transition={{ duration: 4.2, times: [0, 0.55, 0.82, 1], ease: "easeInOut" }}
    >
      {/* The 3D room — bursts open from the center */}
      <motion.div
        className="absolute left-1/2 top-1/2"
        style={{ transformStyle: "preserve-3d" }}
        initial={{ scale: 0.02, opacity: 0 }}
        animate={{ scale: [0.02, 0.02, 1, 1, 1], opacity: [0, 0, 1, 1, 1] }}
        transition={{
          duration: 4.2,
          times: [0, 0.22, 0.44, 0.8, 1],
          ease: [0.16, 1, 0.3, 1],
        }}
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

      {/* Centered wordmark — bursts/scales out as the room opens */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: [0, 1, 1, 0], scale: [1, 1, 1.6, 9] }}
        transition={{ duration: 4.2, times: [0, 0.1, 0.24, 0.42], ease: "easeIn" }}
      >
        <span className="text-3xl font-bold uppercase tracking-[0.3em] text-grill md:text-5xl">
          EGG &amp; OUT
        </span>
      </motion.div>
    </motion.div>
  );
}
