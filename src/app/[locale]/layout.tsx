import { NextIntlClientProvider } from "next-intl";
import { locales } from "@/i18n/request";

import { ThemeProvider } from "@/components/theme-provider";
import "../globals.css";

import enMessages from '@/messages/en.json';
import esMessages from '@/messages/es.json';
import { Inter } from "next/font/google";

const messages = {
  en: enMessages,
  es: esMessages
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  // Await the params promise
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || 'en';

  // Use statically imported messages
  const selectedMessages = messages[locale as keyof typeof messages] || messages.en;

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased`}
        cz-shortcut-listen="true"
      >
        <NextIntlClientProvider locale={locale} messages={selectedMessages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
} 