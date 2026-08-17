import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      // The interview decks are static SPAs in /public — real files
      // (assets, docs) win first; every other path under them falls back to their shell.
      afterFiles: [
        {
          source: "/case-study-presentation-delivery-hero",
          destination: "/case-study-presentation-delivery-hero/index.html",
        },
        {
          source: "/case-study-presentation-delivery-hero/:path*",
          destination: "/case-study-presentation-delivery-hero/index.html",
        },
        {
          source: "/design-deep-dive-zeos",
          destination: "/design-deep-dive-zeos/index.html",
        },
        {
          source: "/design-deep-dive-zeos/:path*",
          destination: "/design-deep-dive-zeos/index.html",
        },
      ],
    };
  },
  async headers() {
    return [
      {
        // Interview decks stay out of search indexes.
        source: "/case-study-presentation-delivery-hero/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
      {
        source: "/design-deep-dive-zeos/:path*",
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
