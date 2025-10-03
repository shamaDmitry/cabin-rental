import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL("https://cabin-rental.weblium.site/**")],
  },
};

export default nextConfig;
