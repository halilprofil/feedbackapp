/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*", // frontend'den gelen istek
        destination: "https://feedback.nazlisunay.com.tr/api/:path*", // backend API'nizin adresi
      },
    ];
  },
};

export default nextConfig;
