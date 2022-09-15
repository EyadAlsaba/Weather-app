/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ]
  },
  env: {
    API_KEY: '1e4230fe055eddcdc467e6d28cd39619'
  }
}

module.exports = nextConfig
