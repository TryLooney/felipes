"use client";

import { NextUIProvider } from "@nextui-org/react";
import { type ReactNode } from "react";
import { ThemeProvider } from "./theme-provider";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <NextUIProvider>{children}</NextUIProvider>
    </ThemeProvider>
  );
}
