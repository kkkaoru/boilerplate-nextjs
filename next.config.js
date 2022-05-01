/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx'],
  experimental: {
    emotion: true,
  },
};

module.exports = nextConfig;
