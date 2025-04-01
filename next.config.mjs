/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '**.public.blob.vercel-storage.com',
          },
        ],
      },
      allowDangerousEmailAccountLinking: true,
};

export default nextConfig;
