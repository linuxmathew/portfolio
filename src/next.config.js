/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, // Only if using the app router
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
};

module.exports = nextConfig;
