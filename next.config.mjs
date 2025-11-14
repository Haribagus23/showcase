/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  turbo: false, // ← Matikan Turbopack, pakai Webpack
};

export default nextConfig;
