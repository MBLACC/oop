import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: {
    // @ts-expect-error - appIsrStatus is a new property in Next.js 15/16
    appIsrStatus: false,
  },
};

export default nextConfig;
