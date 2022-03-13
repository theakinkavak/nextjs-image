/** @type {import('next').NextConfig} */

module.exports = nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["assets.www.unsplash.com"],
    formats: ["image/avif", "image/webp"],
  },
};
