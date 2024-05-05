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
        protocol: 'https', // Empty string matches both http and https protocols
        hostname: 'nextjs-food-ordering-application.vercel.app', // Empty string matches any hostname
        port: '', // Empty string matches any port
        pathname: '/assets/**',
      }
    ],
  },
};

export default nextConfig;

  
