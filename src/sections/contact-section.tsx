"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useState, useTransition } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Informe seu nome."),
  email: z.string().email("Informe um e-mail válido."),
  message: z.string().min(20, "Escreva uma mensagem mais detalhada."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactSection() {
  const hasLinkedIn = Boolean(site.linkedin.trim());
  const [feedback, setFeedback] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = handleSubmit((values) => {
    startTransition(async () => {
      setFeedback(null);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = (await response.json()) as {
        ok: boolean;
        message?: string;
        error?: string;
      };

      if (!response.ok) {
        setFeedback(data.error ?? "Não foi possível enviar.");
        return;
      }

      setFeedback(data.message ?? "Mensagem enviada.");
      reset();
    });
  });

  return (
    <section id="contact" className="section-padding">
      <div className="container-width">
        <SectionHeading
          eyebrow="Contato"
          title="Formulário elegante com validação e feedback visual."
          description="A seção foi pensada para conversão e mantém o padrão visual premium do restante da página."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="glass space-y-5 rounded-[2rem] p-6 shadow-premium"
          >
            <div className="grid gap-2">
              <Label htmlFor="name">Nome</Label>
              <Input id="name" placeholder="Seu nome" {...register("name")} />
              {errors.name ? (
                <p className="text-xs text-red-500">{errors.name.message}</p>
              ) : null}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="voce@empresa.com"
                {...register("email")}
              />
              {errors.email ? (
                <p className="text-xs text-red-500">{errors.email.message}</p>
              ) : null}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="message">Mensagem</Label>
              <Textarea
                id="message"
                placeholder="Descreva seu projeto, objetivo ou desafio..."
                {...register("message")}
              />
              {errors.message ? (
                <p className="text-xs text-red-500">{errors.message.message}</p>
              ) : null}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button type="submit" variant="premium" size="lg" disabled={pending}>
                <Send className="mr-2 size-4" />
                {pending ? "Enviando..." : "Enviar mensagem"}
              </Button>
              {feedback ? (
                <p
                  className={cn(
                    "text-sm",
                    feedback.toLowerCase().includes("sucesso") ||
                      feedback.toLowerCase().includes("enviada")
                      ? "text-emerald-500"
                      : "text-red-500",
                  )}
                >
                  {feedback}
                </p>
              ) : null}
            </div>
          </motion.form>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.08 }}
            className="space-y-4"
          >
            <div className="glass rounded-[2rem] p-6 shadow-premium">
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                Conexões
              </p>
              <div className="mt-4 grid gap-3">
                <Link
                  href={site.github}
                  className="flex items-center justify-between rounded-2xl border border-border/60 bg-background/70 px-4 py-3 text-sm transition-colors hover:bg-foreground/5"
                >
                  GitHub
                  <Github className="size-4 text-muted-foreground" />
                </Link>
                {hasLinkedIn ? (
                  <Link
                    href={site.linkedin}
                    className="flex items-center justify-between rounded-2xl border border-border/60 bg-background/70 px-4 py-3 text-sm transition-colors hover:bg-foreground/5"
                  >
                    LinkedIn
                    <Linkedin className="size-4 text-muted-foreground" />
                  </Link>
                ) : null}
                <Link
                  href={`mailto:${site.email}`}
                  className="flex items-center justify-between rounded-2xl border border-border/60 bg-background/70 px-4 py-3 text-sm transition-colors hover:bg-foreground/5"
                >
                  E-mail
                  <Mail className="size-4 text-muted-foreground" />
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-border/60 bg-card/70 p-6 shadow-premium">
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                Resposta esperada
              </p>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                Este formulário está pronto para ser conectado ao seu provedor de
                e-mail favorito. O endpoint atual valida os dados e devolve feedback
                visual imediato.
              </p>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
