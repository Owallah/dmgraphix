import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // React Compiler — stable in Next.js 16
  reactCompiler: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },

  // Turbopack is default in Next.js 16 for dev.
  // Vercel handles production builds automatically — no extra config needed.
}

export default nextConfig
