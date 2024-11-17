/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    serverPath: "http://localhost:4000/",
    imagePath: "https://server.almadinait.com/upload/",
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.pexels.com",
      },
      {
        protocol: "https",
        hostname: "server.almadinait.com",
      },
    ],
  },
};

export default nextConfig;
