/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'images.unsplash.com',
              pathname: '/**', // Allows all paths from Unsplash
            },
          ],
      },
};

export default nextConfig;
