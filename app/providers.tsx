// app/providers.tsx
"use client";

import { NextUIProvider } from "@nextui-org/react";
import { LanguageProvider } from "@/context/language";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <LanguageProvider>{children}</LanguageProvider>
    </NextUIProvider>
  );
}
