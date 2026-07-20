import dynamic from "next/dynamic";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/sections/hero-section";
import { BentoSection } from "@/sections/bento-section";
import { AboutSection } from "@/sections/about-section";
import { StackSection } from "@/sections/stack-section";
import { ProjectsSection } from "@/sections/projects-section";
import { ExperienceSection } from "@/sections/experience-section";
import { StatsSection } from "@/sections/stats-section";
import { getBlogPosts } from "@/lib/blog";

const BlogSection = dynamic(
  () => import("@/sections/blog-section").then((mod) => mod.BlogSection),
  { ssr: true },
);

const ContactSection = dynamic(
  () => import("@/sections/contact-section").then((mod) => mod.ContactSection),
  { ssr: true },
);

export default async function HomePage() {
  const posts = await getBlogPosts();

  return (
    <>
      <Navbar />
      <main id="home" className="relative">
        <HeroSection />
        <BentoSection />
        <AboutSection />
        <StackSection />
        <ProjectsSection />
        <ExperienceSection />
        <StatsSection />
        <BlogSection posts={posts} />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
