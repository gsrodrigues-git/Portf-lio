# Portfólio Premium

Portfólio premium para desenvolvedor Front-end construído com Next.js 15, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion, GSAP e next-themes.

## Destaques

- App Router com SEO completo.
- Dark/Light mode com persistência.
- PWA com manifest e service worker.
- Seções modulares e data-driven.
- Blog preparado com MDX.
- Validação de formulário com `zod` + `react-hook-form`.
- Animações leves com Framer Motion e GSAP.
- Deploy-ready para Vercel.

## Stack

- Next.js 15
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
- GSAP
- next-themes
- Lucide Icons

## Estrutura

```txt
src/
  app/
  animations/
  components/
  data/
  hooks/
  lib/
  sections/
  types/
content/
public/
```

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run typecheck
```

## Conteúdo editável

- `src/lib/site.ts`: copy principal, links e dados do portfólio.
- `content/blog/*.mdx`: artigos do blog.
- `public/projects/*.svg`: imagens de projetos.
- `src/app/layout.tsx`: metadata global, open graph e manifest.
- `LICENSE`: licença MIT.

## Notas

- Configure `NEXT_PUBLIC_SITE_URL` na Vercel para a URL final do deploy.
- Se quiser usar o domínio grátis da Vercel, o valor atual do projeto é `https://portf-lio-tec14.vercel.app`.
- Atualize os links de GitHub, LinkedIn e e-mail em `src/lib/site.ts`.
- O endpoint de contato em `src/app/api/contact/route.ts` valida os dados e já pode ser integrado a um provedor de e-mail.
- A publicação em produção funciona melhor com um repositório Git conectado à Vercel.
