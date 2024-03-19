module.exports = {
	reactStrictMode: true,
	images: {
		domains: ['res.cloudinary.com'],
		formats: ['image/avif', 'image/webp'],
		imageSizes: [128, 256, 512, 1024, 2048],
	},
};

/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
};

module.exports = nextConfig;