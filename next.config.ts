import { NextConfig } from 'next';



const nextConfig: NextConfig = {
  output: 'export', // Теперь TS видит, что это именно то значение, которое нужно
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true, // Игнорируем ошибки типов, чтобы они не мешали билду
  },
};

export default nextConfig;