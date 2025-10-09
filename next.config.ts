import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL("https://cabin-rental.weblium.site/**")],
  },
  turbopack: {
    root: path.join(__dirname, ""),
  },
};

export default withPayload(nextConfig);
