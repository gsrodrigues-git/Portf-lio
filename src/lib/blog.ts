import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import type { BlogPostMeta } from "@/types";
import { MdxComponents } from "@/components/mdx";

const blogDirectory = path.join(process.cwd(), "content", "blog");

type Frontmatter = Omit<BlogPostMeta, "slug">;

export async function getBlogPosts(): Promise<BlogPostMeta[]> {
  try {
    const files = await fs.readdir(blogDirectory);
    const posts = await Promise.all(
      files
        .filter((file) => file.endsWith(".mdx"))
        .map(async (file) => {
          const slug = file.replace(/\.mdx$/, "");
          const source = await fs.readFile(path.join(blogDirectory, file), "utf8");
          const { data } = matter(source);
          const frontmatter = data as Frontmatter;

          return {
            slug,
            title: frontmatter.title,
            description: frontmatter.description,
            date: frontmatter.date,
            readingTime: frontmatter.readingTime,
            tags: frontmatter.tags ?? [],
          } satisfies BlogPostMeta;
        }),
    );

    return posts.sort((a, b) => +new Date(b.date) - +new Date(a.date));
  } catch {
    return [];
  }
}

export async function getBlogPostBySlug(slug: string) {
  const filePath = path.join(blogDirectory, `${slug}.mdx`);
  const source = await fs.readFile(filePath, "utf8");
  const { content, data } = matter(source);

  const { content: rendered } = await compileMDX<Frontmatter>({
    source: content,
    options: {
      parseFrontmatter: false,
    },
    components: MdxComponents,
  });

  return {
    meta: {
      slug,
      ...(data as Frontmatter),
    },
    content: rendered,
  };
}
