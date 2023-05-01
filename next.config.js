/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}


module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'https://nestjsproject-production-364f.up.railway.app/',
        port: '3000',
      },
    ],
  },
  nextConfig
}