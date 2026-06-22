import Image from "next/image";

/**
 * Rotating circular stamp built from Lorena's circle badges ("YOUR ANYTIME
 * EGG SPOT"). The text ring spins (.spin-slow); a glossy yolk dot sits
 * static in the hollow centre. Decorative.
 */
export default function Badge({
  variant = "yellow",
  size = 150,
  className = "",
}: {
  variant?: "yellow" | "blue";
  size?: number;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`relative ${className}`}
      style={{ width: size, height: size }}
    >
      <div className="spin-slow absolute inset-0">
        <Image
          src={`/assets/badge-${variant}.png`}
          alt=""
          fill
          sizes="200px"
          className="object-contain"
        />
      </div>
      <span
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: size * 0.16,
          height: size * 0.16,
          background:
            "radial-gradient(circle at 35% 30%, #fff6d8 0%, #ffcd00 22%, #f2aa00 55%, #f26a22 100%)",
          boxShadow: "0 2px 6px -1px rgba(210,82,26,0.5)",
        }}
      />
    </div>
  );
}
