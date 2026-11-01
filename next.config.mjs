/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: `npm run build` writes a plain HTML site to ./out that any host can serve.
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
