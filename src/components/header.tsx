"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  const t = useTranslations("app");
  
  return (
    <header className="w-full flex items-center justify-between p-4 md:p-6">
        <Link href="/"  className="hover:opacity-80 transition-opacity">
          <Image src="/rafael.png" alt="Rafael Guerra" width={64} height={64} />
        </Link>
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <LanguageToggle />
      </div>
    </header>
  );
} 