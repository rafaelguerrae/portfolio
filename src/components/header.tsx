"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { useTranslations } from "next-intl";

export function Header() {
  const t = useTranslations("app");
  
  return (
    <header className="w-full flex items-center justify-between p-4 md:p-6">
      <div className="text-2xl font-bold">{t("title")}</div>
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <LanguageToggle />
      </div>
    </header>
  );
} 