/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*", // Match any request starting with /api
        destination: "http://localhost:3004/api/:path*", // Proxy to backend server
      },
    ];
  },
};

export default nextConfig;
