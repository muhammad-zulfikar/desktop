// next.config.js

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
    formats: ['image/avif', 'image/webp'],
    imageSizes: [128, 256, 512, 1024, 2048],
    unoptimized: false,
  },
  output: 'standalone',
  basePath: '/desktop',
};
