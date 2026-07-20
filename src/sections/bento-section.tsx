"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { bentoStats, quickFacts, site } from "@/lib/site";

const cards = [
  {
    title: "Experiência",
    description: "Front-end com foco em interfaces premium e produto.",
  },
  {
    title: "Stack favorita",
    description: "Next.js, TypeScript, Tailwind, Framer Motion e GSAP.",
  },
  {
    title: "Localização",
    description: site.location,
  },
  {
    title: "Disponibilidade",
    description: site.availability,
  },
];

export function BentoSection() {
  return (
    <section className="section-padding">
      <div className="container-width">
        <SectionHeading
          eyebrow="Visão geral"
          title="Uma apresentação objetiva, com densidade visual e informação essencial."
          description="O bento grid organiza contexto, métricas e posicionamento profissional sem ruído visual."
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="glass rounded-[2rem] p-6 lg:col-span-5"
          >
            <p className="text-sm text-muted-foreground">Resumo</p>
            <div className="mt-4 grid gap-3">
              {cards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-border/60 bg-background/60 p-4"
                >
                  <h3 className="text-base font-medium">{card.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {bentoStats.map((stat) => (
                <Card key={stat.label} className="overflow-hidden">
                  <CardContent className="p-6">
                    <span className="text-4xl font-semibold tracking-tight">
                      {stat.value}
                      {stat.suffix}
                    </span>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {quickFacts.map((item) => (
                <Card key={item.label}>
                  <CardContent className="p-5">
                    <Badge variant="outline">{item.label}</Badge>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {item.value}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
