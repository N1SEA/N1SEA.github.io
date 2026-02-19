import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

// Явно указываем путь к нашему новому файлу request.ts
const withNextIntl = createNextIntlPlugin('./i18n/request.ts'); 
// Если есть папка src, то './src/i18n/request.ts'

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default withNextIntl(nextConfig);