"use client";

import { profile } from "@/data/profile/profile";
import { Reveal } from "@/components/animations/Reveal";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { Download, GraduationCap, Award, CheckCircle2, ChevronRight } from "lucide-react";
import { MagneticLink } from "@/components/ui/Magnetic";
import { motion } from "framer-motion";

export function ResumeSection() {
  return (
    <section id="resume" className="py-48 relative overflow-hidden">
      {/* Dynamic Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-apple-blue/5 blur-[200px] opacity-20" />

      <div className="section-container relative z-10">
        <SectionIntro
          id="resume-intro"
          eyebrow="Credentials"
          title="Verified Professional Signal."
          text="The resume section is built as a product surface: quick scan, clear proof, and one direct download action."
          centered
        />

        <div className="grid lg:grid-cols-[1fr_0.7fr] gap-16 items-stretch">
          {/* Detailed Signal Side */}
          <div className="grid gap-10">
            <Reveal direction="right" className="h-full">
              <motion.div 
                whileHover={{ y: -5 }}
                className="h-full glass rounded-[40px] p-12 md:p-16 border-white/5 relative group overflow-hidden"
              >
                <div className="flex items-center gap-6 mb-12">
                  <div className="w-16 h-16 bg-apple-blue/10 rounded-2xl flex items-center justify-center text-apple-blue shadow-inner group-hover:scale-110 transition-transform duration-500">
                    <GraduationCap size={32} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-white tracking-tighter">Academic Background</h3>
                    <div className="w-12 h-[3px] bg-apple-blue/40 mt-2 rounded-full group-hover:w-full transition-all duration-500" />
                  </div>
                </div>

                <div className="space-y-12">
                  <div className="relative pl-10">
                    <div className="absolute left-0 top-2 w-3 h-3 bg-apple-blue rounded-full" />
                    <p className="text-2xl font-black text-white tracking-tight leading-none mb-3">
                      {profile.education.program}
                    </p>
                    <p className="text-apple-blue font-black uppercase tracking-[0.2em] text-[11px] mb-6">
                      {profile.education.school}
                    </p>
                    <p className="text-lg text-muted-strong leading-relaxed font-medium">
                      {profile.education.detail}
                    </p>
                  </div>
                  
                  <div className="pt-10 border-t border-white/5">
                     <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-strong mb-10">Core Achievements</h4>
                     <div className="grid sm:grid-cols-2 gap-10">
                        {profile.achievements.map((item) => (
                          <div key={item} className="flex gap-6 items-start group/ach">
                            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-apple-blue group-hover/ach:bg-apple-blue group-hover/ach:text-white transition-all duration-500 shrink-0">
                               <CheckCircle2 size={18} />
                            </div>
                            <span className="text-base text-muted leading-snug font-bold group-hover/ach:text-white transition-colors">{item}</span>
                          </div>
                        ))}
                     </div>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          </div>

          {/* Action & Certs Slide */}
          <div className="flex flex-col gap-10">
             <Reveal direction="left" className="h-full">
                <div className="h-full glass rounded-[40px] p-12 border-apple-blue/20 bg-apple-blue/[0.03] flex flex-col justify-between relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                     <Download size={160} />
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-4xl font-black text-white tracking-tighter mb-8 leading-[0.9]">Master <br />Documentation</h3>
                    <p className="text-lg text-muted leading-relaxed font-medium mb-12">
                      A high-fidelity document detailing system architectures, performance benchmarks, and deep-technical execution strategies.
                    </p>
                    
                    <div className="space-y-6 mb-16">
                       <div className="flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.3em] text-apple-blue">
                          <div className="w-2 h-2 rounded-full bg-apple-blue animate-pulse" />
                          ATS Optimized Structure
                       </div>
                       <div className="flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.3em] text-apple-blue">
                          <div className="w-2 h-2 rounded-full bg-apple-blue animate-pulse" />
                          Detailed Impact Metrics
                       </div>
                    </div>

                    <MagneticLink
                      href={profile.links.resume}
                      className="group w-full py-6 bg-white text-black font-black text-sm uppercase tracking-[0.2em] rounded-[20px] flex items-center justify-center gap-4 hover:scale-[1.02] transition-all shadow-[0_0_50px_rgba(255,255,255,0.1)]"
                    >
                      Retrieve Assets <Download size={20} className="group-hover:translate-y-0.5 transition-transform" />
                    </MagneticLink>
                  </div>
                </div>
             </Reveal>

             <Reveal direction="left" delay={0.2}>
               <div className="glass rounded-[32px] p-10 border-white/5 relative overflow-hidden group">
                  <div className="flex items-center justify-between mb-8">
                     <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-strong">Global Validations</h4>
                     <Award size={18} className="text-apple-blue" />
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {profile.certifications.map((cert) => (
                      <span key={cert} className="px-5 py-2.5 bg-white/5 border border-white/5 rounded-xl text-[11px] font-black uppercase tracking-wider text-muted-strong hover:text-white hover:border-apple-blue/30 hover:bg-apple-blue/5 transition-all cursor-default">
                        {cert}
                      </span>
                    ))}
                  </div>
               </div>
             </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
