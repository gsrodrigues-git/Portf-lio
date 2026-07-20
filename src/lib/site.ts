import type { NavItem, Project, Skill, Stat, TimelineItem } from "@/types";

export const site = {
  name: "Gabriel Silva Rodrigues",
  role: "Front-end Developer & UI Engineer",
  description:
    "Crio experiências web rápidas, elegantes e orientadas a produto, com foco em performance, acessibilidade e refinamento visual.",
  location: "Fortaleza, Brasil",
  availability: "Disponível para projetos seletos e consultoria.",
  email: "gabrielsilvaerodrigues@gmail.com",
  github: "https://github.com/gsrodrigues-git",
  linkedin: "",
  ctaPrimary: "Ver Projetos",
  ctaSecondary: "Contato",
  yearsStudying: 3,
  heroHighlights: [
    "Interfaces premium",
    "Performance acima da média",
    "Motion com propósito",
  ],
};

export const navigation: NavItem[] = [
  { label: "Início", href: "#home" },
  { label: "Sobre", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Projetos", href: "#projects" },
  { label: "Experiência", href: "#experience" },
  { label: "Blog", href: "#blog" },
  { label: "Contato", href: "#contact" },
];

export const bentoStats = [
  { label: "Projetos entregues", value: 20, suffix: "+" },
  { label: "Anos estudando", value: 3, suffix: "+" },
  { label: "Horas codando", value: 1000, suffix: "+" },
  { label: "Stack principal", value: 12, suffix: " tools" },
];

export const quickFacts = [
  { label: "Experiência", value: "Front-end sênior em formação contínua" },
  { label: "Tecnologias", value: "React, Next.js, Tailwind, Motion" },
  { label: "Localização", value: site.location },
  { label: "Disponibilidade", value: site.availability },
];

export const stats: Stat[] = [
  { label: "Projetos", value: 20, suffix: "+" },
  { label: "Anos", value: 3, suffix: "+" },
  { label: "Horas", value: 1000, suffix: "+" },
  { label: "Deploys", value: 40, suffix: "+" },
];

export const stack: Skill[] = [
  { name: "HTML", category: "Fundação" },
  { name: "CSS", category: "Fundação" },
  { name: "JavaScript", category: "Linguagem" },
  { name: "TypeScript", category: "Linguagem" },
  { name: "React", category: "UI" },
  { name: "Next.js", category: "Framework" },
  { name: "Tailwind", category: "UI" },
  { name: "Node.js", category: "Backend" },
  { name: "Git", category: "Workflow" },
  { name: "GitHub", category: "Workflow" },
  { name: "Figma", category: "Design" },
  { name: "Framer Motion", category: "Motion" },
];

export const timeline: TimelineItem[] = [
  {
    year: "2021",
    title: "Primeiros projetos",
    description:
      "Comecei com fundamentos sólidos em HTML, CSS e lógica de programação, focando em interface e responsividade.",
  },
  {
    year: "2022",
    title: "React e componentização",
    description:
      "Passei a construir interfaces reutilizáveis, estruturando a base de componentes e boas práticas de estado.",
  },
  {
    year: "2023",
    title: "Next.js e performance",
    description:
      "Aprimorei SEO, renderização híbrida, imagens otimizadas e componentes com foco em experiências mais rápidas.",
  },
  {
    year: "2024",
    title: "Motion e produto",
    description:
      "Integrei Framer Motion e GSAP para criar microinterações e transições com intenção, sem comprometer a performance.",
  },
];

export const experience: TimelineItem[] = [
  {
    year: "2024 - 2026",
    title: "Front-end Developer",
    description:
      "Construção de interfaces premium para produtos SaaS, landing pages e dashboards com foco em conversão e clareza.",
  },
  {
    year: "2023 - 2024",
    title: "UI Engineer",
    description:
      "Implementação de design systems, componentes acessíveis e fluxos responsivos com forte consistência visual.",
  },
  {
    year: "2021 - 2023",
    title: "Desenvolvedor Web",
    description:
      "Evolução técnica em projetos acadêmicos e reais, consolidando lógica, acessibilidade e atenção a detalhes.",
  },
];

export const projects: Project[] = [
  {
    title: "Nova Analytics",
    description:
      "Plataforma de dados com UI editorial, gráficos elegantes e navegação fluida para análise em tempo real.",
    image: "/projects/project-1.svg",
    technologies: ["Next.js", "TypeScript", "GSAP", "Tailwind"],
    github: "https://github.com/gsrodrigues-git",
    deploy: "https://portf-lio-tec14.vercel.app",
    featured: true,
  },
  {
    title: "Aster Studio",
    description:
      "Site institucional para estúdio criativo, com narrativa visual sofisticada e transições suaves entre seções.",
    image: "/projects/project-2.svg",
    technologies: ["React", "Framer Motion", "MDX", "SEO"],
    github: "https://github.com/gsrodrigues-git",
    deploy: "https://portf-lio-tec14.vercel.app",
  },
  {
    title: "Pulse Commerce",
    description:
      "Experiência de e-commerce com foco em performance, clareza de conversão e layout premium em mobile.",
    image: "/projects/project-3.svg",
    technologies: ["Next.js", "Zod", "UI System", "PWA"],
    github: "https://github.com/gsrodrigues-git",
    deploy: "https://portf-lio-tec14.vercel.app",
  },
];
