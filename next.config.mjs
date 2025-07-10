/** @type {import('next').NextConfig} */
const nextConfig = {
  // 🔥 Add these for Vercel deployment
  experimental: {
    serverComponentsExternalPackages: ['inngest']
  },
  // Increase API timeout for content generation
  api: {
    responseLimit: false,
    bodyParser: {
      sizeLimit: '10mb',
    },
  }
};

export default nextConfig;
