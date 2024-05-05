/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: ['/assets/*'],
      domains: ['b.zmtcdn.com'], // Add the hostname here
    },
  };
  
  export default nextConfig;
  
