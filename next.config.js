/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "images.unsplash.com",
      "images.pexels.com",
      "user-images.githubusercontent.com",
      "camo.githubusercontent.com",
      "avatars.githubusercontent.com",
      "i.scdn.co",
    ],
  },
  // typescript: { ignoreBuildErrors: true },
};

module.exports = nextConfig;
