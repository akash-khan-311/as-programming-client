/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    isr: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
      {
        protocol: "https",
        hostname: "varthana.com",
      },
    ],
  },
};

export default nextConfig;
