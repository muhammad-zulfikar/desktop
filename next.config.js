// next.config.js

const repo = 'desktop'
assetPrefix = `/${repo}/`
basePath = `/${repo}`

module.exports = {
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    domains: ['res.cloudinary.com'],
    formats: ['image/avif', 'image/webp'],
    imageSizes: [128, 256, 512, 1024, 2048],
    path: `${basePath}/_next/image`,
  },
};
