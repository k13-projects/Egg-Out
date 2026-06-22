const PHRASE = "ALL-DAY EGGS · NOW & LATER · YOUR ANYTIME EGG SPOT · ";

export default function Marquee() {
  const line = PHRASE.repeat(6);
  return (
    <div className="overflow-hidden bg-farmer py-5 text-offwhite">
      <div className="marquee-track text-3xl font-bold tracking-tight md:text-5xl">
        <span>{line}</span>
        <span aria-hidden>{line}</span>
      </div>
    </div>
  );
}
