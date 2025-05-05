/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'easy-rent-uploads.s3.eu-north-1.amazonaws.com',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
