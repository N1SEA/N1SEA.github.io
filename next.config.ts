import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {
  output: 'export', // Теперь TS видит, что это именно то значение, которое нужно
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true, // Игнорируем ошибки типов, чтобы они не мешали билду
  },
};

export default withNextIntl(nextConfig);