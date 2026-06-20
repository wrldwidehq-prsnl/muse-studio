import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "www.villageba.com" },
      { protocol: "https", hostname: "villageba.com" },
    ],
  },
};

export default nextConfig;
