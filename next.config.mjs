/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'i.ibb.co',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'http',  // Add http support if needed
            hostname: 'res.cloudinary.com',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'http',  // Add http support if needed
            hostname: 'www.gcekjr.ac.in',
            port: '',
            pathname: '/**',
          },
        ],
        domains: ['www.gcekjr.ac.in']
      },

};

export default nextConfig;
