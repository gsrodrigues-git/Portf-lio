"use client";

import Link from "next/link";
import { ArrowDownRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { useGsapParallax, useGsapReveal } from "@/hooks/use-gsap-reveal";
import { useRef } from "react";

export function HeroSection() {
  const titleRef = useRef<HTMLDivElement | null>(null);
  const orbRef = useRef<HTMLDivElement | null>(null);

  useGsapReveal(titleRef, { y: 32 });
  useGsapParallax(orbRef, -18);

  return (
    <section className="relative overflow-hidden pt-36 sm:pt-40">
      <div className="container-width relative">
        <div
          ref={orbRef}
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-[560px] max-w-5xl rounded-full bg-hero-radial blur-3xl"
        />
        <div className="absolute inset-x-0 top-20 -z-20 h-[420px] bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.18),transparent_42%)]" />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto flex max-w-4xl flex-col items-start text-left"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-4 py-2 text-xs text-muted-foreground backdrop-blur-md">
            <Sparkles className="size-3.5 text-sky-500" />
            {site.heroHighlights.join(" · ")}
          </div>

          <div ref={titleRef} className="mt-8">
            <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">
              {site.name}
            </p>
            <h1 className="mt-4 max-w-5xl text-5xl font-semibold tracking-tight text-balance sm:text-7xl lg:text-8xl">
              {site.role}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              {site.description}
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" variant="premium">
              <Link href="#projects">
                Ver Projetos
                <ArrowDownRight className="ml-2 size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#contact">Contato</Link>
            </Button>
          </div>

          <div className="mt-12 grid w-full gap-3 sm:grid-cols-3">
            {[
              "Next.js 15",
              "Motion systems fluídos",
              "SEO, PWA e performance",
            ].map((item) => (
              <div
                key={item}
                className="glass rounded-2xl px-4 py-3 text-sm text-muted-foreground shadow-premium"
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
