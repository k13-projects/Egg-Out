import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contact" className="bg-grill px-6 pb-12 pt-24 text-offwhite md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col items-start justify-between gap-12 md:flex-row md:items-end">
          <div className="max-w-md">
            <h2 className="text-[12vw] font-light leading-none tracking-tight md:text-7xl">
              Say hi<span className="text-farmer">.</span>
            </h2>
            <p className="mt-6 text-lg text-offwhite/60">
              Follow along for drops, specials, and very good eggs.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="relative h-12 w-12 transition-transform duration-300 hover:scale-110"
              >
                <Image
                  src="/assets/icon-social.png"
                  alt="Instagram"
                  fill
                  className="object-contain"
                />
              </a>
              <span className="text-sm text-offwhite/40">@eggandout · TBC</span>
            </div>
          </div>

          <div className="relative h-10 w-[180px]">
            <Image
              src="/assets/logotype-white.png"
              alt="EGG & OUT"
              fill
              className="object-contain object-left md:object-right"
            />
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-2 border-0 text-sm text-offwhite/40 md:flex-row md:justify-between">
          <p>© {2026} Egg &amp; Out · Tiger Hospitality Group</p>
          <p>San Clemente, CA · Daily 11:00 AM — 9:00 PM</p>
        </div>
      </div>
    </footer>
  );
}
