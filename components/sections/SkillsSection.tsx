"use client";

import { skillGroups } from "@/data/skills/skills";
import { Reveal } from "@/components/animations/Reveal";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { Code2, Brain, Cloud, Database, Layout, Terminal, Github, Shield, Box, Server, Monitor } from "lucide-react";
import { MagneticPill } from "@/components/ui/Magnetic";
import { motion } from "framer-motion";

const iconMap: Record<string, any> = {
  "backend": Server,
  "ai / ml": Brain,
  "cloud & devops": Cloud,
  "databases": Database,
  "frontend": Layout,
  "programming languages": Code2,
  "frameworks & libraries": Box,
  "database technologies": Database,
  "computer science fundamentals": Terminal
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-40 relative">
      {/* Dynamic Grid Overlay */}
      <div className="absolute inset-0 z-0 opacity-10" 
           style={{ backgroundImage: 'radial-gradient(var(--accent) 0.5px, transparent 0.5px)', backgroundSize: '32px 32px' }} />

      <div className="section-container relative z-10">
        <SectionIntro
          id="skills-intro"
          eyebrow="Capability"
          title="A focused toolkit for AI and systems engineering."
          text="Technologies and tools I work with across different domains, ranging from low-level fundamentals to high-level AI orchestration."
          centered
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillGroups.map((group, index) => {
            const Icon = iconMap[group.title.toLowerCase()] || Code2;
            const isFundamental = group.title.toLowerCase().includes("fundamental");
            
            return (
              <Reveal key={group.title} delay={index * 0.1} className={isFundamental ? "md:col-span-2 lg:col-span-3" : ""}>
                <motion.div 
                  whileHover={{ y: -8 }}
                  className="h-full glass rounded-[32px] p-10 border-white/5 hover:border-apple-blue/30 transition-all duration-500 group relative overflow-hidden"
                >
                  {/* Subtle Card Glow */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-apple-blue/5 blur-[80px] group-hover:bg-apple-blue/10 transition-colors" />

                  <div className="flex items-center gap-6 mb-12">
                    <div className="w-14 h-14 bg-apple-blue/10 rounded-2xl flex items-center justify-center text-apple-blue shadow-inner group-hover:scale-110 transition-transform duration-500">
                      <Icon size={28} strokeWidth={2.5} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-white tracking-tight">{group.title}</h3>
                      <div className="w-8 h-[3px] bg-apple-blue/40 mt-2 rounded-full group-hover:w-full transition-all duration-500" />
                    </div>
                  </div>

                  <div className={`flex flex-wrap gap-3 ${isFundamental ? "justify-center" : ""}`}>
                    {group.skills.map((skill) => (
                      <MagneticPill
                        key={skill}
                        className="px-6 py-3 bg-white/[0.03] border border-white/5 rounded-2xl text-[13px] font-black uppercase tracking-wider text-muted-strong hover:text-white hover:border-apple-blue/40 hover:bg-apple-blue/5 transition-all cursor-default"
                      >
                        {skill}
                      </MagneticPill>
                    ))}
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
