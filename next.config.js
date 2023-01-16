/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'images.unsplash.com',
      'images.pexels.com',
      'user-images.githubusercontent.com',
      'camo.githubusercontent.com',
    ],
  },
}

module.exports = nextConfig
