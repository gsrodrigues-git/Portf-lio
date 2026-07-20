"use client";

import Link from "next/link";
import { Menu, Sparkles, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navigation, site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { useActiveSection } from "@/hooks/use-active-section";

export function Navbar() {
  const activeSection = useActiveSection(
    navigation.map((item) => item.href.replace("#", "")),
  );
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const desktopLinks = useMemo(
    () =>
      navigation.map((item) => {
        const isActive = activeSection === item.href.replace("#", "");
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "group relative text-sm text-muted-foreground transition-colors hover:text-foreground",
              isActive && "text-foreground",
            )}
          >
            {item.label}
            <span
              className={cn(
                "absolute -bottom-2 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-sky-500 to-violet-500 transition-transform duration-300 group-hover:scale-x-100",
                isActive && "scale-x-100",
              )}
            />
          </Link>
        );
      }),
    [activeSection],
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div
        className={cn(
          "container-width flex items-center justify-between rounded-full border border-transparent py-3 transition-all duration-300",
          scrolled && "glass shadow-premium backdrop-blur-2xl",
        )}
      >
        <Link
          href="#home"
          className="group inline-flex items-center gap-3 rounded-full px-2 py-1"
        >
          <span className="flex size-10 items-center justify-center rounded-full border border-border/70 bg-background/80 font-mono text-xs">
            {site.name
              .split(" ")
              .map((part) => part[0])
              .join("")
              .slice(0, 2)
              .toUpperCase()}
          </span>
          <span className="hidden text-sm font-medium sm:block">
            {site.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">{desktopLinks}</nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Abrir menu"
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="container-width mt-3 md:hidden"
          >
            <div className="glass rounded-[1.75rem] p-4 shadow-premium">
              <div className="grid gap-1">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      "rounded-2xl px-4 py-3 text-sm transition-colors hover:bg-foreground/5",
                      activeSection === item.href.replace("#", "") &&
                        "bg-foreground/5 text-foreground",
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2 rounded-2xl border border-border/60 bg-background/70 p-3 text-xs text-muted-foreground">
                <Sparkles className="size-4 text-sky-500" />
                Navegação responsiva com active section e tema.
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
