import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.10minuteschool.com', pathname: '/**' },
      {
        protocol: 'https',
        hostname: 's3.ap-southeast-1.amazonaws.com',   // ⬅️ add this
        pathname: '/cdn.10minuteschool.com/**',
      },
    ],
  },
};

export default nextConfig;
