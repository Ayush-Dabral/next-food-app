/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'b.zmtcdn.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: '/assets',
        port: '',
      }
    ],
  },
  };
  
  export default nextConfig;
  
