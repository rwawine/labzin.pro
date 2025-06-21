import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['framer-motion'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Optimize CSS loading and prevent unnecessary preloading
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Optimize CSS extraction and prevent unnecessary preloading
      config.optimization.splitChunks.cacheGroups.styles = {
        name: 'styles',
        test: /\.(css|scss)$/,
        chunks: 'all',
        enforce: true,
        priority: 20,
      };
    }
    return config;
  },
  // Optimize images and static assets
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Enable compression
  compress: true,
  // Optimize bundle size
  swcMinify: true,
};

export default nextConfig;
