/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*", // Match any request starting with /api
        destination: "https://scholarship-finder-ha7y.onrender.com/api/:path*", // Proxy to backend server
      },
    ];
  },
};

export default nextConfig;
