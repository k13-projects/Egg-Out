import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CursorEgg from "@/components/CursorEgg";

const capo = localFont({
  src: [
    { path: "../fonts/capo-light.otf", weight: "300", style: "normal" },
    { path: "../fonts/capo-medium.otf", weight: "500", style: "normal" },
    { path: "../fonts/capo-bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-capo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "EGG & OUT · Your Anytime Egg Spot",
  description:
    "All-day, egg-forward eats in San Clemente. Now & later, all-day eggs.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={capo.variable}>
      <body>
        <CursorEgg />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
