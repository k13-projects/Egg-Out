/**
 * Site-wide faint EGG & OUT background — Lorena's actual logotype pattern
 * asset, tiled very faintly over the off-white base. This is the "resting"
 * state the kinetic 3D intro resolves into (the wordmark becomes the field).
 */
export default function PatternBg() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10"
      style={{ backgroundColor: "#f0ebd7" }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/assets/logotype-pattern-tile.png)",
          backgroundRepeat: "repeat",
          backgroundSize: "440px auto",
          opacity: 0.05,
        }}
      />
    </div>
  );
}
