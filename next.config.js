/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

// module.exports = nextConfig;

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.jsdelivr.net"],
  },
};
