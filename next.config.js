/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  nextConfig,
  images: {
    domains: ['**'],
    remotePatterns: [
        {
            protocol: "https",
            hostname: "**"
        },
        {
          protocol: "http",
          hostname: "**"
        }
      ]
  }
  
}
