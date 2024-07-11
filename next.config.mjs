/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "random.dog",
      },
    ],
  },
  output: "standalone",
};

export default nextConfig;
