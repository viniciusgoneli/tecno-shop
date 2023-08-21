/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["firebasestorage.googleapis.com", "localhost"],
	},
	compiler: {
		styledComponents: true,
	},
};

module.exports = nextConfig;
