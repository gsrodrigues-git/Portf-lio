"use client";

import { SectionHeading } from "@/components/section-heading";
import { StatCounter } from "@/components/stat-counter";
import { stats } from "@/lib/site";

export function StatsSection() {
  return (
    <section className="section-padding">
      <div className="container-width">
        <SectionHeading
          eyebrow="Estatísticas"
          title="Contadores animados com presença visual discreta."
          description="Os números funcionam como prova social e ajudam a consolidar a narrativa profissional."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <StatCounter key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
