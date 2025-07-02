import withPlaiceholder from "@plaiceholder/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "*.almadinait.com",
      },
    ],
  },
  env: {
    APP_URL: "http://localhost:3000",
    API_URL: "https://api.almadinait.com/wp-json/wp/v2",
    NEXT_PUBLIC_SERVER_URL: "http://localhost:4000/v1/api",
  }
};

export default withPlaiceholder(nextConfig);
