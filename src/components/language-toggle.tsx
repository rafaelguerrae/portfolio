"use client";

import * as React from "react";
import { GlobeIcon } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const locales = ["en", "es"];

export function LanguageToggle() {
  const t = useTranslations("common.language");
  const router = useRouter();
  const pathname = usePathname();
  
  const handleLocaleChange = React.useCallback(
    (locale: string) => {
      const newPathname = pathname.replace(/^\/(en|es)/, `/${locale}`);
      router.push(newPathname);
    },
    [pathname, router]
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <GlobeIcon className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">{t("toggle")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((locale) => (
          <DropdownMenuItem 
            key={locale}
            onClick={() => handleLocaleChange(locale)}
          >
            {t(locale)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
} 