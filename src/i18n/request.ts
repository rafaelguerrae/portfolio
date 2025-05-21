import { getRequestConfig } from 'next-intl/server';
import enMessages from '@/messages/en.json';
import esMessages from '@/messages/es.json';

export const locales = ['en', 'es'];
export const defaultLocale = 'en';

const messages = {
  en: enMessages,
  es: esMessages
};

export default getRequestConfig(async ({ locale }) => {
  // Make sure to validate the locale and provide a default if it's undefined
  const safeLocale = locale || defaultLocale;
  const validLocale = locales.includes(safeLocale) ? safeLocale : defaultLocale;
  
  return {
    locale: validLocale,
    messages: messages[validLocale as keyof typeof messages]
  };
}); 