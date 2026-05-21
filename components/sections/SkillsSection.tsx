"use client";

import { skillGroups } from "@/data/skills/skills";
import { Reveal } from "@/components/animations/Reveal";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { Code2, Brain, Cloud, Database, Layout } from "lucide-react";
import { MagneticPill } from "@/components/ui/Magnetic";

const iconMap: Record<string, any> = {
  "backend": Code2,
  "ai / ml": Brain,
  "cloud & devops": Cloud,
  "databases": Database,
  "frontend": Layout,
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-32">
      <div className="section-container">
        <SectionIntro
          id="skills-intro"
          eyebrow="Toolkit"
          title="A focused toolkit for AI and systems engineering."
          text="Backend, AI, cloud, databases, and frontend skills grouped as reusable capability surfaces."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, index) => {
            const Icon = iconMap[group.title.toLowerCase()] || Code2;
            return (
              <Reveal key={group.title} delay={index * 0.1}>
                <div className="h-full glass rounded-apple-lg p-8 hover:bg-white/[0.08] transition-all duration-500 group">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-apple-blue/10 rounded-apple text-apple-blue group-hover:scale-110 transition-transform">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white">{group.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <MagneticPill
                        key={skill}
                        className="px-4 py-2 bg-white/5 border border-white/5 rounded-full text-sm text-muted-strong hover:text-white hover:border-white/20 transition-colors"
                      >
                        {skill}
                      </MagneticPill>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
