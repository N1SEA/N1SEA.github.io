// next.config.ts
import createNextIntlPlugin from 'next-intl/plugin';
import { NextConfig } from 'next';

const withNextIntl = createNextIntlPlugin('./i18n.ts'); // Теперь указываем на корень

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  typescript: { ignoreBuildErrors: true },
};

export default withNextIntl(nextConfig);