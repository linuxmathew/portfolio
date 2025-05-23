import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/images/**/*",
      },
    ],
    // Optional: For Next.js 12 or mixed environments
    domains: ["cdn.sanity.io"],
  },
};

export default nextConfig;
