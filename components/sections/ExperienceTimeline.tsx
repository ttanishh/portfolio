"use client";

import { experiences } from "@/data/timeline/journey";
import { Reveal } from "@/components/animations/Reveal";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { Briefcase, Calendar, Award, Globe, Shield, Activity } from "lucide-react";
import { TracingBeam } from "@/components/ui/TracingBeam";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-40 bg-zinc-950/50">
      <div className="section-container">
        <SectionIntro
          id="experience-intro"
          eyebrow="Chronicle"
          title="Credibility through systems, internships, and applied work."
          text="Each chapter is framed by role, organization, technology, achievements, and the practical impact of the work."
          centered
        />

        <TracingBeam className="px-6">
          <div className="max-w-4xl mx-auto antialiased pt-4 relative">
            {experiences.map((item, index) => (
              <div key={item.role} className="mb-20">
                <Reveal delay={index * 0.1} direction={index % 2 === 0 ? "right" : "left"}>
                  <div className="group relative glass rounded-[24px] p-10 md:p-14 hover:bg-white/[0.05] border-white/5 hover:border-apple-blue/20 transition-all duration-700">
                    
                    {/* Status Indicator */}
                    <div className="absolute -top-3 -right-3">
                       <div className="px-4 py-1 rounded-full bg-apple-blue text-white text-[9px] font-black uppercase tracking-[0.2em] shadow-xl">
                          {item.duration.includes('Present') ? 'Active' : 'Completed'}
                       </div>
                    </div>

                    <div className="relative z-10">
                      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                        <div>
                          <div className="flex items-center gap-3 text-apple-blue mb-4">
                             <div className="w-10 h-10 rounded-xl bg-apple-blue/10 flex items-center justify-center">
                                <Activity size={20} />
                             </div>
                             <span className="text-[10px] font-black uppercase tracking-[0.3em]">Professional Log</span>
                          </div>
                          <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-2">
                            {item.role}
                          </h3>
                          <p className="text-apple-blue font-bold text-xl flex items-center gap-2">
                            {item.organization}
                            <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                            <span className="text-muted-strong text-sm font-mono tracking-tighter">{item.duration}</span>
                          </p>
                        </div>
                      </div>

                      <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16">
                        <div className="space-y-8">
                          <div className="space-y-4">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-strong">Technical Execution</h4>
                            <ul className="grid gap-6">
                              {item.achievements.map((achievement, i) => (
                                <li key={i} className="flex gap-5 text-muted-strong leading-relaxed text-lg font-medium group/item">
                                  <div className="mt-1.5 w-2 h-2 rounded-full bg-apple-blue/40 group-hover/item:bg-apple-blue transition-colors shrink-0" />
                                  <span className="group-hover/item:text-white transition-colors">{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="space-y-12">
                          <div className="p-8 bg-apple-blue/5 border border-apple-blue/10 rounded-[20px] relative overflow-hidden group/impact">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover/impact:scale-110 transition-transform">
                               <Award size={48} className="text-apple-blue" />
                            </div>
                            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-apple-blue mb-6 flex items-center gap-2">
                              <Zap size={14} /> Systems Impact
                            </h4>
                            <p className="text-base text-white font-bold leading-relaxed relative z-10">
                              {item.impact}
                            </p>
                          </div>

                          <div className="space-y-6">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-strong flex items-center gap-2">
                               <Cpu size={14} className="text-apple-blue" /> Core Stack
                            </h4>
                            <div className="flex flex-wrap gap-3">
                              {item.technologies.map((tech) => (
                                <span key={tech} className="px-4 py-2 text-[10px] font-black uppercase bg-white/5 border border-white/5 rounded-lg text-muted-strong hover:text-white hover:border-apple-blue/40 transition-all cursor-default">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </TracingBeam>
      </div>
    </section>
  );
}

function Zap({ size = 16, className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}
