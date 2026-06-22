/**
 * Full-bleed checkerboard band — Lorena's checkerboard graphic, tiled
 * horizontally as a subtle section break. Decorative only.
 */
export default function Divider({ height = 26 }: { height?: number }) {
  return (
    <div
      aria-hidden
      className="w-full"
      style={{
        height,
        backgroundImage: "url(/assets/checkerboard.png)",
        backgroundRepeat: "repeat-x",
        backgroundPosition: "center",
        backgroundSize: "auto 100%",
      }}
    />
  );
}
