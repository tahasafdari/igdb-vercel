/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  async headers() {
    return [
      {
        // matching all API routes
        source: "http://harmonia.ink:5001/file/",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  },

  nextConfig,
  images: {
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
