// next.config.js

module.exports = {
  experimental: {images: {unoptimized: false}},basePath: "/desktop",reactStrictMode: true,
  images: {
    unoptimized: false,domains: ['res.cloudinary.com'],
    formats: ['image/avif', 'image/webp'],
    imageSizes: [128, 256, 512, 1024, 2048],
  },
  output: 'standalone',
