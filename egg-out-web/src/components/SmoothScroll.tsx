"use client";

import { ReactLenis } from "lenis/react";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  // Allow disabling Lenis for automated QA (native scrollTo lands accurately).
  const [noLenis, setNoLenis] = useState(false);
  useEffect(() => {
    if (new URLSearchParams(window.location.search).has("noLenis")) {
      setNoLenis(true);
    }
  }, []);

  if (noLenis) return <>{children}</>;

  return (
    <ReactLenis root options={{ lerp: 0.09, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
