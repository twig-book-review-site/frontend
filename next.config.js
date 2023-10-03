/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'contents.kyobobook.co.kr',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/bookshelf',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
