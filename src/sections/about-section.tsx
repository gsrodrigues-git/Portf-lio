"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { timeline } from "@/lib/site";

export function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="container-width">
        <SectionHeading
          eyebrow="Sobre"
          title="Evolução técnica com foco em clareza, refinamento e consistência."
          description="A narrativa da evolução ajuda a mostrar maturidade técnica sem recorrer a excesso de texto."
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="glass">
            <CardContent className="p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                Trajetória
              </p>
              <div className="mt-6 border-l border-border/70 pl-6">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: index * 0.08 }}
                    className="relative pb-10 last:pb-0"
                  >
                    <span className="absolute -left-[33px] top-1 size-3 rounded-full bg-gradient-to-r from-sky-500 to-violet-500 shadow-glow" />
                    <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                      {item.year}
                    </p>
                    <h3 className="mt-2 text-xl font-medium">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Design system",
                description:
                  "Componentes consistentes, tokens globais e variações semânticas para escalar a UI.",
              },
              {
                title: "Acessibilidade",
                description:
                  "Contraste, foco visível, navegação por teclado e semântica pensada para WCAG.",
              },
              {
                title: "Performance",
                description:
                  "Imagens otimizadas, animações leves e divisão inteligente de responsabilidades.",
              },
              {
                title: "Product thinking",
                description:
                  "Interações e layouts tratados como produto, não como decoração.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -4 }}
                className="glass rounded-[1.5rem] p-5 shadow-premium transition-transform"
              >
                <h3 className="text-lg font-medium">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
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
