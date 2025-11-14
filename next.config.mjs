/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // ⬅️ penting
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
