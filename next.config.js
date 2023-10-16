/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  nextConfig,
  images: {
    domains: ['**', 'harmonia.ink'],
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
