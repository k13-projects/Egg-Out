/**
 * Site-wide faint EGG & OUT background — the "resting" state the kinetic
 * 3D intro resolves into (the wordmark becomes the background). Seamless
 * repeating text, very low opacity, on the off-white base.
 */
const FIELD = "EGG & OUT  ".repeat(700);

export default function PatternBg() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      style={{ backgroundColor: "#f0ebd7" }}
    >
      <div
        className="h-full w-full font-bold uppercase tracking-tight text-grill"
        style={{
          fontSize: 40,
          lineHeight: 0.9,
          opacity: 0.045,
          wordBreak: "break-word",
          whiteSpace: "normal",
        }}
      >
        {FIELD}
      </div>
    </div>
  );
}
