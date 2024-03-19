// next.config.js

const repo = 'desktop'
assetPrefix = `/${repo}/`
basePath = `/${repo}`

module.exports = {
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    path: `${basePath}/_next/image`,
  },
};
