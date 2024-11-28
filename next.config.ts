/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // IPFS needs to work with different base paths
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  // Disable server-side features
  trailingSlash: true,
}

module.exports = nextConfig
