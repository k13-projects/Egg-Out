import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The password gate in src/proxy.ts 401s every request — including the image
  // optimizer's own internal refetch of the source file, which then sees the
  // auth challenge instead of a PNG and fails the request with "not a valid
  // image" (400). Skipping optimization removes that internal fetch entirely,
  // so every asset stays behind the password instead of being excluded from it.
  //
  // Tied to the same env var as the gate: unset PREVIEW_PASSWORD at launch and
  // full image optimization comes back on its own, no code change needed.
  images: { unoptimized: Boolean(process.env.PREVIEW_PASSWORD) },

  // Private stakeholder preview on egg.k13projects.com — keep it out of search.
  // The header covers what a <meta> tag cannot: images, the menu PDF, icons and
  // any other non-HTML asset a crawler could surface on its own.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow, noarchive, nosnippet, noimageindex",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
