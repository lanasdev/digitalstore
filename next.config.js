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
      "upload.wikimedia.org",
      "de.wikipedia.org",
    ],
  },
  // typescript: { ignoreBuildErrors: true },
};

module.exports = nextConfig;
