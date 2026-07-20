"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { experience } from "@/lib/site";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-width">
        <SectionHeading
          eyebrow="Experiência"
          title="Linha do tempo vertical com leitura clara e visual contido."
          description="A estrutura enfatiza evolução e maturidade, mantendo um ritmo visual premium."
        />

        <div className="mt-12 relative max-w-4xl">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-sky-500 via-border to-transparent sm:left-5" />
          <div className="space-y-8">
            {experience.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.06 }}
                className="relative pl-12 sm:pl-16"
              >
                <span className="absolute left-0 top-2 size-8 rounded-full border border-border/60 bg-background shadow-premium" />
                <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground">
                  {item.year}
                </p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
