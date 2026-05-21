"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import { MagneticLink } from "@/components/ui/Magnetic";

interface Project {
  id: string;
  title: string;
  label: string;
  problem: string;
  architecture: string;
  technologies: string[];
  challenges: string;
  solution: string;
  impact: string;
  image: string;
  github: string;
  demo: string;
}

export function ProjectShowcase({ project, index }: { project: Project; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <article className="py-32 border-b border-white/5 last:border-0">
      <div className="section-container">
        <div className={`grid lg:grid-cols-2 gap-16 lg:gap-24 items-center ${isEven ? "" : "lg:[&>div:first-child]:order-2"}`}>
          
          {/* Visual Side */}
          <Reveal direction={isEven ? "right" : "left"}>
            <div className="relative group overflow-hidden rounded-apple-lg aspect-[16/10] bg-white/5">
              <motion.img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                whileHover={{ scale: 1.05 }}
              />
              <div className="image-reveal-overlay">
                <div className="flex gap-4">
                  <MagneticLink href={project.github} className="p-4 bg-white text-black rounded-full shadow-2xl">
                    <Github size={24} />
                  </MagneticLink>
                  <MagneticLink href={project.demo} className="p-4 bg-apple-blue text-white rounded-full shadow-2xl">
                    <ExternalLink size={24} />
                  </MagneticLink>
                </div>
              </div>
              
              {/* Floating Label */}
              <div className="absolute top-6 left-6">
                <span className="keynote-pill bg-black/60 text-white border-white/20">
                  {project.label}
                </span>
              </div>
            </div>
          </Reveal>

          {/* Content Side */}
          <div className="space-y-10">
            <Reveal direction={isEven ? "left" : "right"}>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {project.title}
              </h3>
              
              <div className="space-y-8">
                <section>
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-apple-blue mb-3">Problem</h4>
                  <p className="text-lg text-muted-strong leading-relaxed">{project.problem}</p>
                </section>

                <section>
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-apple-blue mb-3">Architecture</h4>
                  <p className="text-muted leading-relaxed">{project.architecture}</p>
                </section>

                <div className="grid sm:grid-cols-2 gap-8">
                  <section>
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-apple-blue mb-3">Core Solution</h4>
                    <p className="text-sm text-muted-strong leading-relaxed">{project.solution}</p>
                  </section>
                  <section>
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-apple-blue mb-3">Key Impact</h4>
                    <p className="text-sm text-white font-medium leading-relaxed">{project.impact}</p>
                  </section>
                </div>

                <div className="pt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-[10px] font-bold uppercase bg-white/5 border border-white/5 rounded-full text-muted">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-8 flex items-center gap-8">
                  <a href={project.github} className="text-sm font-bold flex items-center gap-2 group text-white">
                    Source Code <Github size={16} className="transition-transform group-hover:translate-y-[-2px] group-hover:translate-x-[2px]" />
                  </a>
                  <a href={project.demo} className="text-sm font-bold flex items-center gap-2 group text-apple-blue">
                    Live Experience <ArrowUpRight size={16} className="transition-transform group-hover:translate-y-[-2px] group-hover:translate-x-[2px]" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </article>
  );
}
