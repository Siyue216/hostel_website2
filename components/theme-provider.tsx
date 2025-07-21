"use client";

import * as React from "react";
import { ThemeProvider } from "next-themes";

import { Toaster } from "@/components/ui/toaster";

interface NextThemeProviderProps {
  children: React.ReactNode;
}

export function NextThemeProvider({ children }: NextThemeProviderProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
      <Toaster />
    </ThemeProvider>
  );
}
