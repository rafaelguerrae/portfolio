import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { locales } from "@/i18n/request";
import { getTranslations } from "next-intl/server";

import { ThemeProvider } from "@/components/theme-provider";
import "../globals.css";

import enMessages from '@/messages/en.json';
import esMessages from '@/messages/es.json';

const messages = {
  en: enMessages,
  es: esMessages
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type Props = {
  params: { locale: string };
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  // Use the locale safely
  const locale = params?.locale || 'en';
  const t = await getTranslations({ locale, namespace: "app" });
  
  return {
    title: t("title"),
    description: t("description"),
  };
}

export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // Use the locale safely
  const locale = params?.locale || 'en';

  // Use statically imported messages
  const selectedMessages = messages[locale as keyof typeof messages] || messages.en;

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider locale={locale} messages={selectedMessages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
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