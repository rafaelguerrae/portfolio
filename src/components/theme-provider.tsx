"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// Fixed import by getting props type directly from next-themes
type ThemeProviderProps = React.ComponentProps<typeof NextThemesProvider>;

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      {children}
    </NextThemesProvider>
  );
} 