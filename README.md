# Gabriel Silva Rodrigues

Portfólio pessoal construído com Next.js 15, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion, GSAP e next-themes.

## Visão geral

Este projeto foi montado para destacar trabalho front-end com foco em UI premium, SEO, desempenho e motion com propósito.

## Destaques

- App Router com SEO completo.
- Dark/Light mode com persistência.
- PWA com manifest e service worker.
- Seções modulares e data-driven.
- Blog preparado com MDX.
- Formulário com validação usando `zod` e `react-hook-form`.
- Animações leves com Framer Motion e GSAP.
- Deploy pronto para Vercel.

## Stack

- Next.js 15
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
- GSAP
- next-themes
- Lucide Icons

## Acesso

- Deploy: [portf-lio-tec14.vercel.app](https://portf-lio-tec14.vercel.app)
- GitHub: [gsrodrigues-git](https://github.com/gsrodrigues-git)
- E-mail: [gabrielsilvaerodrigues@gmail.com](mailto:gabrielsilvaerodrigues@gmail.com)

## Conteúdo editável

- `src/lib/site.ts`: copy principal, links e dados do portfólio.
- `content/blog/*.mdx`: artigos do blog.
- `public/projects/*.svg`: imagens de projetos.
- `src/app/layout.tsx`: metadata global, open graph e manifest.
- `LICENSE`: licença MIT.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run typecheck
```

## Observações

- `NEXT_PUBLIC_SITE_URL` já pode apontar para a URL grátis da Vercel.
- O projeto está conectado ao GitHub, então qualquer `push` em `main` dispara um novo deploy.
- Se você quiser adicionar o LinkedIn depois, basta preencher `src/lib/site.ts` e o link aparece automaticamente.
