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
  metadataBase: new URL("https://egg.k13projects.com"),
  title: "EGG & OUT · Your Anytime Egg Spot",
  description:
    "All-day, egg-forward eats in San Clemente. Now & later, all-day eggs.",
  // Private stakeholder preview — must not appear in search results.
  // Lift this only on the real Egg & Out domain. See src/app/robots.ts.
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-video-preview": 0,
      "max-image-preview": "none",
      "max-snippet": 0,
    },
  },
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
