"use client";

import { ThemeProvider } from "next-themes";
import { ServiceWorkerRegister } from "@/components/sw-register";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <ServiceWorkerRegister />
      {children}
    </ThemeProvider>
  );
}
