"use client";

import { profile } from "@/data/profile/profile";
import { Reveal } from "@/components/animations/Reveal";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { Download, GraduationCap, Award, CheckCircle2 } from "lucide-react";
import { MagneticLink } from "@/components/ui/Magnetic";

export function ResumeSection() {
  return (
    <section id="resume" className="py-32">
      <div className="section-container">
        <SectionIntro
          id="resume-intro"
          eyebrow="Resume"
          title="A compact preview of education, certifications, and signal."
          text="Built as a product surface: quick scan, clear proof, and one direct download action."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Signal Side */}
          <div className="space-y-8">
            <Reveal direction="right">
              <div className="glass rounded-apple-lg p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-apple-blue/10 rounded-apple text-apple-blue">
                    <GraduationCap size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">Education</h3>
                </div>
                <div className="space-y-1">
                  <p className="text-lg font-bold text-white">{profile.education.program}</p>
                  <p className="text-apple-blue font-semibold">{profile.education.school}</p>
                  <p className="text-muted text-sm mt-2">{profile.education.detail}</p>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.3}>
              <div className="glass rounded-apple-lg p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-purple-500/10 rounded-apple text-purple-500">
                    <Award size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">Certifications</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {profile.certifications.map((cert) => (
                    <span key={cert} className="px-4 py-2 bg-white/5 border border-white/5 rounded-full text-xs font-semibold text-muted-strong">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Action Side */}
          <Reveal direction="left">
            <div className="glass rounded-apple-lg p-8 md:p-12 text-center border-apple-blue/20">
              <h3 className="text-2xl font-bold text-white mb-6">Full Experience Document</h3>
              <p className="text-muted leading-relaxed mb-10">
                Detailed breakdown of system architectures, performance metrics, and project lifecycles.
              </p>
              
              <div className="space-y-4 mb-12 text-left max-w-sm mx-auto">
                {profile.achievements.slice(0, 3).map((item) => (
                  <div key={item} className="flex gap-3 text-sm text-muted-strong">
                    <CheckCircle2 size={16} className="text-apple-blue shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <MagneticLink
                href={profile.links.resume}
                className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-bold rounded-full transition-transform hover:scale-105 shadow-2xl shadow-apple-blue/20"
              >
                Download Resume <Download size={20} />
              </MagneticLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
