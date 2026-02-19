import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  // Если локаль не определена, используем 'en' по умолчанию
  const activeLocale = locale || 'en';

  return {
    locale: activeLocale,
    // Путь к папке messages из корня проекта
    messages: (await import(`./messages/${activeLocale}.json`)).default
  };
});