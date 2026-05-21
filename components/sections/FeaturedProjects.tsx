"use client";

import { projects } from "@/data/projects/projects";
import { ProjectShowcase } from "@/components/projects/ProjectShowcase";
import { SectionIntro } from "@/components/sections/SectionIntro";

export function FeaturedProjects() {
  return (
    <section id="projects" className="py-32 bg-white/[0.01]">
      <div className="section-container">
        <SectionIntro
          id="projects-intro"
          eyebrow="Featured Work"
          title="Cinematic showcases, not generic cards."
          text="Each project is presented as a product reveal: the problem, architecture, challenge, solution, impact, and the technologies behind it."
        />
      </div>

      <div className="mt-12">
        {projects.map((project, index) => (
          <ProjectShowcase key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
