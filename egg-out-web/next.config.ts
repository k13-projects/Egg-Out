import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
