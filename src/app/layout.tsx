import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { getSiteUrl } from "@/lib/site-url";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Gabriel Silva Rodrigues | Front-end Developer & UI Engineer",
    template: "%s | Gabriel Silva Rodrigues",
  },
  description:
    "Portfólio de Gabriel Silva Rodrigues em Next.js 15, TypeScript, Tailwind, Framer Motion e GSAP, com foco em UI sofisticada, SEO e performance.",
  keywords: [
    "Front-end Developer",
    "UI Engineer",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "GSAP",
    "Portfolio",
  ],
  authors: [{ name: "Gabriel Silva Rodrigues" }],
  creator: "Gabriel Silva Rodrigues",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Gabriel Silva Rodrigues",
    title: "Gabriel Silva Rodrigues | Front-end Developer & UI Engineer",
    description:
      "Um portfólio com linguagem visual de produto SaaS de alto nível, pronto para destacar trabalho front-end em 2026.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel Silva Rodrigues | Front-end Developer & UI Engineer",
    description:
      "Um portfólio premium com foco em design, motion, acessibilidade e performance.",
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.svg",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
