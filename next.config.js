/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  pageExtensions: ['*.tsx', '*.ts', '*.jsx', '*.js'],
}

module.exports = nextConfig
