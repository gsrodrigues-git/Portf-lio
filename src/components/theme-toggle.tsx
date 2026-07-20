"use client";

import { useTheme } from "next-themes";
import { MoonStar, SunMedium } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useMounted } from "@/hooks/use-mounted";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      aria-label="Alternar tema"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative overflow-hidden rounded-full border border-border/60 bg-background/70 backdrop-blur-md"
    >
      <motion.span
        className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-violet-500/10"
        animate={{ opacity: [0.55, 1, 0.55] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <span className="relative z-10">
        {mounted && theme === "dark" ? (
          <SunMedium className="size-4" />
        ) : (
          <MoonStar className="size-4" />
        )}
      </span>
    </Button>
  );
}
