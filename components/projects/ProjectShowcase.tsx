"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, Cpu, Zap, Target, Award } from "lucide-react";
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
    <article className="py-40 border-b border-white/5 last:border-0 relative overflow-hidden group/main">
      {/* Background Section Accent */}
      <div className={`absolute top-0 ${isEven ? 'right-0' : 'left-0'} w-1/2 h-full bg-apple-blue/5 blur-[120px] opacity-0 group-hover/main:opacity-100 transition-opacity duration-1000`} />

      <div className="section-container">
        <div className={`grid lg:grid-cols-[1.1fr_0.9fr] gap-20 lg:gap-32 items-center ${isEven ? "" : "lg:[&>div:first-child]:order-2"}`}>
          
          {/* Visual Presentation Side */}
          <Reveal direction={isEven ? "right" : "left"} className="relative">
            <div className="relative group overflow-hidden rounded-[32px] aspect-[16/10] bg-zinc-900 border border-white/10 shadow-2xl">
              <motion.img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
              />
              
              {/* Cinematic Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
              
              {/* Interaction Layer */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <div className="flex gap-6 scale-90 group-hover:scale-100 transition-transform duration-500">
                  <MagneticLink href={project.github} className="p-5 bg-white text-black rounded-full shadow-2xl hover:bg-zinc-200 transition-colors">
                    <Github size={28} />
                  </MagneticLink>
                  <MagneticLink href={project.demo} className="p-5 bg-apple-blue text-white rounded-full shadow-2xl hover:brightness-110 transition-all">
                    <ExternalLink size={28} />
                  </MagneticLink>
                </div>
              </div>
              
              {/* Floating Status Tag */}
              <div className="absolute top-8 left-8">
                <span className="px-5 py-2 rounded-full bg-black/80 text-white border border-white/20 text-[10px] font-black uppercase tracking-[0.3em] backdrop-blur-xl">
                  {project.label}
                </span>
              </div>

              {/* Stack Preview on Visual */}
              <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                <div className="flex gap-2">
                   {project.technologies.slice(0, 3).map(tech => (
                     <div key={tech} className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-[10px] font-bold text-white/80">
                        {tech.charAt(0)}
                     </div>
                   ))}
                </div>
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white">
                   <ArrowUpRight size={20} />
                </div>
              </div>
            </div>

            {/* Reflection Effect */}
            <div className="absolute -bottom-10 left-10 right-10 h-20 bg-gradient-to-t from-transparent via-white/5 to-transparent blur-3xl -z-10 group-hover:via-apple-blue/10 transition-all duration-1000" />
          </Reveal>

          {/* Narrative Content Side */}
          <div className="space-y-12">
            <Reveal direction={isEven ? "left" : "right"}>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-apple-blue font-black text-[11px] uppercase tracking-[0.4em]">
                  <span className="w-8 h-[2px] bg-apple-blue" />
                  Case Study 0{index + 1}
                </div>
                <h3 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter">
                  {project.title}
                </h3>
              </div>
              
              <div className="mt-12 space-y-10">
                <div className="relative pl-8 border-l-2 border-white/5 group-hover/main:border-apple-blue/30 transition-colors">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-strong mb-4 flex items-center gap-2">
                    <Target size={12} className="text-apple-blue" /> The Challenge
                  </h4>
                  <p className="text-xl text-muted leading-relaxed font-medium">{project.problem}</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-12">
                  <section className="space-y-4">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-strong flex items-center gap-2">
                      <Cpu size={12} className="text-apple-blue" /> Architecture
                    </h4>
                    <p className="text-sm text-muted leading-relaxed">{project.architecture}</p>
                  </section>
                  <section className="space-y-4 p-6 bg-white/[0.02] rounded-2xl border border-white/5">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-apple-blue flex items-center gap-2">
                      <Zap size={12} /> Key Impact
                    </h4>
                    <p className="text-sm text-white font-bold leading-relaxed">{project.impact}</p>
                  </section>
                </div>

                <div className="pt-4 flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-4 py-2 text-[10px] font-black uppercase bg-white/5 border border-white/5 rounded-lg text-muted-strong hover:text-white hover:border-white/20 transition-all cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-10 flex items-center gap-12">
                  <MagneticLink href={project.github} className="group flex items-center gap-3 text-xs font-black uppercase tracking-widest text-white border-b-2 border-white/10 pb-2 hover:border-white transition-all">
                    Repository 
                    <Github size={18} className="transition-transform group-hover:scale-110" />
                  </MagneticLink>
                  <MagneticLink href={project.demo} className="group flex items-center gap-3 text-xs font-black uppercase tracking-widest text-apple-blue border-b-2 border-apple-blue/10 pb-2 hover:border-apple-blue transition-all">
                    Production
                    <ExternalLink size={18} className="transition-transform group-hover:scale-110" />
                  </MagneticLink>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </article>
  );
}
