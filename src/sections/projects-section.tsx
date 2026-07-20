"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/site";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-width">
        <SectionHeading
          eyebrow="Projetos"
          title="Cards premium com imagem, narrativa e hover 3D."
          description="Cada projeto é tratado como peça de portfólio e não apenas como screenshot."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -8, rotateX: 4, rotateY: -4 }}
              className="group overflow-hidden rounded-[2rem] border border-border/60 bg-card/80 shadow-premium backdrop-blur-xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                  priority={project.featured}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              </div>

              <div className="space-y-5 p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-semibold tracking-tight">
                    {project.title}
                  </h3>
                  {project.featured ? (
                    <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">
                      Destaque
                    </span>
                  ) : null}
                </div>

                <p className="text-sm leading-7 text-muted-foreground">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-border/70 bg-background/60 px-3 py-1 text-xs text-muted-foreground"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button asChild variant="outline" size="sm">
                    <Link href={project.github} target="_blank" rel="noreferrer">
                      <Github className="mr-2 size-4" />
                      GitHub
                    </Link>
                  </Button>
                  <Button asChild variant="premium" size="sm">
                    <Link href={project.deploy} target="_blank" rel="noreferrer">
                      Deploy
                      <ArrowUpRight className="ml-2 size-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
