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
  // Make sure to validate the locale
  const validLocale = locales.includes(locale) ? locale : defaultLocale;
  
  return {
    locale: validLocale,
    messages: messages[validLocale as keyof typeof messages]
  };
}); 