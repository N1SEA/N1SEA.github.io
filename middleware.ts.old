import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // Список всех поддерживаемых языков
  locales: ['en', 'uk'],
 
  // Язык по умолчанию, если в URL ничего не указано
  defaultLocale: 'uk'
});
 
export const config = {
  // Настройка соответствия путей (matchers)
  // Пропускаем все внутренние папки Next.js (_next), API и статику (картинки)
  matcher: ['/', '/(uk|en)/:path*']
};