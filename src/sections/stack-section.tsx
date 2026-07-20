"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { stack } from "@/lib/site";

export function StackSection() {
  return (
    <section id="stack" className="section-padding">
      <div className="container-width">
        <SectionHeading
          eyebrow="Stack"
          title="Tecnologias apresentadas como um sistema vivo, não uma lista estática."
          description="Os cards têm hover refinado e deixam claro o ecossistema técnico principal do portfólio."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {stack.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.03 }}
              whileHover={{ y: -6, rotateX: 4, rotateY: -4 }}
              className="group glass rounded-[1.5rem] p-5 shadow-premium transition-transform"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                {item.category}
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight group-hover:text-primary">
                {item.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
