"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const LINKS = [
  { label: "About us", href: "#about" },
  { label: "Our menu", href: "#menu" },
  { label: "Locations", href: "#locations" },
  { label: "Catering", href: "#catering" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-offwhite/85 backdrop-blur-md py-3" : "bg-transparent py-6"
      }`}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 md:px-10">
        <a href="#top" className="relative block h-7 w-[120px] shrink-0">
          <Image
            src="/assets/logotype-black.png"
            alt="EGG & OUT"
            fill
            priority
            className="object-contain object-left"
          />
        </a>

        <ul className="hidden items-center gap-8 text-[15px] font-medium tracking-tight md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-grill/80 transition-colors hover:text-farmer"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#order"
          className="rounded-full bg-farmer px-5 py-2.5 text-sm font-bold text-offwhite transition-transform duration-300 hover:scale-105 active:scale-95"
        >
          Order now
        </a>
      </nav>
    </header>
  );
}
