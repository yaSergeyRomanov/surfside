import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    domains: ["localhost"],
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /.svg$/,

      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
