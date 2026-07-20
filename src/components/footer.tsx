import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { site } from "@/lib/site";

export function Footer() {
  const hasLinkedIn = Boolean(site.linkedin.trim());

  return (
    <footer className="border-t border-border/60">
      <div className="container-width flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium">{site.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Front-end premium, UI engineering e motion com propósito.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href={site.github}
            className="rounded-full border border-border/60 bg-background p-3 text-muted-foreground transition-colors hover:text-foreground"
          >
            <Github className="size-4" />
          </Link>
          {hasLinkedIn ? (
            <Link
              href={site.linkedin}
              className="rounded-full border border-border/60 bg-background p-3 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Linkedin className="size-4" />
            </Link>
          ) : null}
          <Link
            href={`mailto:${site.email}`}
            className="rounded-full border border-border/60 bg-background p-3 text-muted-foreground transition-colors hover:text-foreground"
          >
            <Mail className="size-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
