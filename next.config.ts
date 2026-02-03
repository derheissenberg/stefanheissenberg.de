import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

// LEARNING: Configure server to bind to localhost instead of 0.0.0.0
// This avoids EPERM permission errors on macOS
if (process.env.NODE_ENV === "development") {
  process.env.HOSTNAME = "127.0.0.1";
}

export default nextConfig;
