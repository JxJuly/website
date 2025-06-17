/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'psn-rsc.prod.dl.playstation.net',
      },
      {
        protocol: 'https',
        hostname: 'image.api.playstation.com',
      },
    ],
  },
};

module.exports = nextConfig;
