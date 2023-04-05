/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}


module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
      },
    ],
  },
  nextConfig
}