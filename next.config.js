/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    qualities: [25, 50, 75, 100],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'almadinait.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'pub-56f4ffd3fb84427f97be56c53a1c9b25.r2.dev',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
