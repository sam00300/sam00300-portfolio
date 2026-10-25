import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Hero } from "@/components/hero/hero";
import { AboutSection } from "@/components/about/about-section";
import { ExperienceSection } from "@/components/experience/experience-section";
import { Projects } from "@/components/projects/projects";
import { SkillsSection } from "@/components/skills/skills-section";
import { AccomplishmentsSection } from "@/components/accomplishments/accomplishments-section";
import { ContactSection } from "@/components/contact/contact-section";
import { Footer } from "@/components/layout/footer";
import { createMetadata, siteConfig } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Home",
  description: `${siteConfig.name} - ${siteConfig.description}`,
  path: "/",
});

export default function HomePage(): ReactNode {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <Hero />
      <AboutSection />
      <ExperienceSection />
      <Projects withHeadline />
      <SkillsSection />
      <AccomplishmentsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
