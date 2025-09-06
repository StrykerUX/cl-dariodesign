import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/photos/**',
      },
      {
        protocol: 'https',
        hostname: 'storage.novalabss.app',
        port: '',
        pathname: '/u/**',
      },
    ],
  },
};

export default nextConfig;
