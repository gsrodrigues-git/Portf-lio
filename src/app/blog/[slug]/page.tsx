import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CalendarDays, Clock3, Tag } from "lucide-react";
import { notFound } from "next/navigation";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/blog";
import { Button } from "@/components/ui/button";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const posts = await getBlogPosts();
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    return { title: "Artigo não encontrado" };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;

  try {
    const post = await getBlogPostBySlug(slug);

    return (
      <main className="container-width section-padding">
        <Button asChild variant="ghost" className="mb-10">
          <Link href="/blog">
            <ArrowLeft className="mr-2 size-4" />
            Voltar ao blog
          </Link>
        </Button>

        <article className="mx-auto max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">
            Blog
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
            {post.meta.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <CalendarDays className="size-4" />
              {new Intl.DateTimeFormat("pt-BR", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              }).format(new Date(post.meta.date))}
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock3 className="size-4" />
              {post.meta.readingTime}
            </span>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {post.meta.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 rounded-full border border-border/70 bg-card px-3 py-1 text-xs text-muted-foreground"
              >
                <Tag className="size-3" />
                {tag}
              </span>
            ))}
          </div>
          <div className="prose prose-neutral mt-10 max-w-none prose-headings:tracking-tight prose-a:text-primary dark:prose-invert">
            {post.content}
          </div>
        </article>
      </main>
    );
  } catch {
    notFound();
  }
}
