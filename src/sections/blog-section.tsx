"use client";

import Link from "next/link";
import { ArrowUpRight, CalendarDays, Clock3 } from "lucide-react";
import { motion } from "framer-motion";
import type { BlogPostMeta } from "@/types";
import { SectionHeading } from "@/components/section-heading";

export function BlogSection({ posts }: { posts: BlogPostMeta[] }) {
  return (
    <section id="blog" className="section-padding">
      <div className="container-width">
        <SectionHeading
          eyebrow="Blog"
          title="Estrutura pronta para MDX, artigos e conteúdo técnico escalável."
          description="O blog entra como uma camada editorial premium para aprofundar decisões de engenharia e design."
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {posts.slice(0, 2).map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.08 }}
              className="glass rounded-[1.75rem] p-6 shadow-premium"
            >
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <CalendarDays className="size-4" />
                  {new Intl.DateTimeFormat("pt-BR", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  }).format(new Date(post.date))}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock3 className="size-4" />
                  {post.readingTime}
                </span>
              </div>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                {post.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {post.description}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground"
              >
                Ler artigo
                <ArrowUpRight className="size-4" />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
