import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      // The Delivery Hero case-study deck is a static SPA in /public — real files
      // (assets, docs) win first; every other path under it falls back to its shell.
      afterFiles: [
        {
          source: "/case-study-presentation-delivery-hero",
          destination: "/case-study-presentation-delivery-hero/index.html",
        },
        {
          source: "/case-study-presentation-delivery-hero/:path*",
          destination: "/case-study-presentation-delivery-hero/index.html",
        },
      ],
    };
  },
  async headers() {
    return [
      {
        // Interview deck stays out of search indexes.
        source: "/case-study-presentation-delivery-hero/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

// LEARNING: Configure server to bind to localhost instead of 0.0.0.0
// This avoids EPERM permission errors on macOS
if (process.env.NODE_ENV === "development") {
  process.env.HOSTNAME = "127.0.0.1";
}

export default nextConfig;
