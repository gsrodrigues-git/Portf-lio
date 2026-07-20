import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const MdxComponents: MDXComponents = {
  h1: ({ className, ...props }) => (
    <h1
      className={cn("mt-10 text-4xl font-semibold tracking-tight", className)}
      {...props}
    />
  ),
  h2: ({ className, ...props }) => (
    <h2
      className={cn("mt-10 text-3xl font-semibold tracking-tight", className)}
      {...props}
    />
  ),
  h3: ({ className, ...props }) => (
    <h3
      className={cn("mt-8 text-2xl font-semibold tracking-tight", className)}
      {...props}
    />
  ),
  p: ({ className, ...props }) => (
    <p
      className={cn("mt-5 text-base leading-8 text-muted-foreground", className)}
      {...props}
    />
  ),
  a: ({ className, href, ...props }) => {
    const isExternal = typeof href === "string" && /^https?:\/\//.test(href);

    if (isExternal) {
      return (
        <a
          href={href}
          className={cn("text-primary underline-offset-4 hover:underline", className)}
          target="_blank"
          rel="noreferrer"
          {...props}
        />
      );
    }

    return (
      <Link
        href={href ?? "#"}
        className={cn("text-primary underline-offset-4 hover:underline", className)}
        {...props}
      />
    );
  },
  ul: ({ className, ...props }) => (
    <ul className={cn("mt-5 list-disc pl-6", className)} {...props} />
  ),
  ol: ({ className, ...props }) => (
    <ol className={cn("mt-5 list-decimal pl-6", className)} {...props} />
  ),
  li: ({ className, ...props }) => (
    <li className={cn("mt-2 text-muted-foreground", className)} {...props} />
  ),
  blockquote: ({ className, ...props }) => (
    <blockquote
      className={cn(
        "mt-6 border-l-2 border-primary pl-4 italic text-muted-foreground",
        className,
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }) => (
    <pre
      className={cn(
        "mt-6 overflow-x-auto rounded-2xl border border-border/60 bg-card p-5 text-sm",
        className,
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }) => (
    <code
      className={cn(
        "rounded-md bg-muted px-1.5 py-0.5 font-mono text-[0.9em]",
        className,
      )}
      {...props}
    />
  ),
};
