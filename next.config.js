/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  nextConfig,
  images: {
    remotePatterns: [
        {
            protocol: "http",
            hostname: "**"
        }
      ]
  }
  
}
