"use client";

import { labItems } from "@/data/skills/skills";
import { Reveal } from "@/components/animations/Reveal";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { FlaskConical, Binary, Sparkles, BookOpen } from "lucide-react";

export function LabSection() {
  const icons = [FlaskConical, Binary, Sparkles, BookOpen];

  return (
    <section id="lab" className="py-32 bg-white/[0.01]">
      <div className="section-container">
        <SectionIntro
          id="lab-intro"
          eyebrow="Hidden Lab"
          title="A quiet shelf for curiosity and experiments."
          text="MCP, RAG testing, AI agents, small utilities, side projects, and writing ideas live here as a signal of ongoing exploration."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {labItems.map((group, index) => {
            const Icon = icons[index % icons.length];
            return (
              <Reveal key={group.title} delay={index * 0.1}>
                <div className="group glass rounded-apple-lg p-8 h-full hover:bg-white/[0.08] transition-all duration-500 flex flex-col">
                  <div className="p-3 bg-white/5 rounded-apple w-fit mb-6 group-hover:bg-apple-blue/10 group-hover:text-apple-blue transition-colors">
                    <Icon size={24} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-apple-blue transition-colors">
                    {group.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {group.items.map((item) => (
                      <span key={item} className="px-3 py-1.5 bg-white/5 border border-white/5 rounded-apple text-xs text-muted font-medium group-hover:border-white/10 transition-colors">
                        {item}
                      </span>
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
