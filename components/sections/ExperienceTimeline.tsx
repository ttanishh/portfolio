"use client";

import { experiences } from "@/data/timeline/journey";
import { Reveal } from "@/components/animations/Reveal";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { Briefcase, Calendar, Award } from "lucide-react";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-32">
      <div className="section-container">
        <SectionIntro
          id="experience-intro"
          eyebrow="Experience"
          title="Credibility through systems, internships, and applied work."
          text="Each chapter is framed by role, organization, technology, achievements, and the practical impact of the work."
        />

        <div className="grid gap-12">
          {experiences.map((item, index) => (
            <Reveal key={item.role} delay={index * 0.1}>
              <div className="group relative glass rounded-apple-lg p-8 md:p-12 hover:bg-white/[0.07] transition-all duration-500 overflow-hidden">
                {/* Background Accent */}
                <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Briefcase size={120} />
                </div>

                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        {item.role}
                      </h3>
                      <p className="text-apple-blue font-semibold text-lg">
                        {item.organization}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-muted-strong font-mono text-sm px-4 py-1.5 bg-white/5 rounded-full border border-white/5">
                      <Calendar size={14} />
                      {item.duration}
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-[1fr_0.4fr] gap-12">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-muted mb-4">Achievements</h4>
                      <ul className="space-y-4">
                        {item.achievements.map((achievement, i) => (
                          <li key={i} className="flex gap-4 text-muted-strong leading-relaxed">
                            <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-apple-blue shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-8">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-muted mb-4 flex items-center gap-2">
                          <Award size={14} className="text-apple-blue" />
                          Impact
                        </h4>
                        <p className="text-sm text-white font-medium bg-apple-blue/10 border border-apple-blue/20 p-4 rounded-apple leading-relaxed">
                          {item.impact}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-muted mb-4">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.map((tech) => (
                            <span key={tech} className="px-3 py-1 text-[10px] font-bold uppercase bg-white/5 border border-white/5 rounded-full text-muted-strong">
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
          ))}
        </div>
      </div>
    </section>
  );
}
