/**
 * Full-bleed EGG&OUT wordmark band — Lorena's orange "pattern-bg" asset as a
 * bold closing brand moment before the footer. Decorative.
 */
export default function BrandBand() {
  return (
    <div
      aria-hidden
      className="h-32 w-full md:h-44"
      style={{
        backgroundImage: "url(/assets/pattern-bg.png)",
        backgroundRepeat: "repeat",
        backgroundSize: "auto 100%",
        backgroundPosition: "center",
      }}
    />
  );
}
