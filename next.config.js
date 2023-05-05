/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}


module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nestjsproject-production-364f.up.railway.app',
        port: '3000',    
      },
    ],
  },
  nextConfig
}