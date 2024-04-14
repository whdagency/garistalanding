/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;

module.exports = {
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/menudemo',
        destination: '/',
        permanent: true,
      },
      
    ]
  },
}
