"use client";

import Sidebar from "../components/Sidebar";
import Section from "../components/Section";
import MobileNav from "../components/MobileNav";
import About from "../components/About";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import { SECTIONS } from "../lib/sections";
import { useActiveSection } from "../hooks/useActiveSection";

export default function HomePage() {
  const ids = SECTIONS.map((sections) => sections.id);
  const activeId = useActiveSection(ids);

  return (
    <>
      <MobileNav />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Sidebar activeId={activeId} sections={SECTIONS} />

        <main className="lg:ml-[var(--sidebar-w)] lg:pl-[var(--gutter)] lg:pt-12">
          <Section id="about" title="About" className="pt-6 sm:pt-8 lg:pt-0">
            <About />
          </Section>

          <Section id="experience" title="Experience">
            <Experience />
          </Section>

          <Section id="projects" title="Projects">
            <Projects />
          </Section>
          <Section id="skills" title="Skills">
            <Skills />
          </Section>

          <Section id="contact" title="Contact">
            <Contact />
          </Section>
        </main>
      </div>
    </>
  );
}
