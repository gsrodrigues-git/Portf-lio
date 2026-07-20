import Link from "next/link";
import { ArrowUpRight, CalendarDays, Clock3, Tag } from "lucide-react";
import { getBlogPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog",
  description: "Artigos sobre front-end, UI engineering, motion e performance.",
};

export default async function BlogIndexPage() {
  const posts = await getBlogPosts();

  return (
    <main className="container-width section-padding">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">
          Blog
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
          Processos, decisões e boas práticas para construir produtos front-end premium.
        </h1>
      </div>

      <div className="mt-12 grid gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group glass rounded-[1.75rem] p-6 transition-transform duration-300 hover:-translate-y-1"
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
            <div className="mt-4 flex items-start justify-between gap-6">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight group-hover:text-primary">
                  {post.title}
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
                  {post.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 rounded-full border border-border/70 bg-background px-3 py-1 text-xs text-muted-foreground"
                    >
                      <Tag className="size-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <span className="rounded-full border border-border bg-background p-3 text-muted-foreground transition-colors group-hover:text-foreground">
                <ArrowUpRight className="size-5" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
