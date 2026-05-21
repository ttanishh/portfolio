"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/animations/Reveal";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { Github, Linkedin, Mail, Send, Activity, Shield, Terminal, MessageSquare } from "lucide-react";
import { profile } from "@/data/profile/profile";
import { MagneticLink } from "@/components/ui/Magnetic";

export function ContactSection() {
  return (
    <section id="contact" className="py-48 relative overflow-hidden bg-black">
      {/* Cinematic Pulse Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-apple-blue/5 blur-[150px] rounded-full opacity-30" />
      </div>

      <div className="section-container relative z-10">
        <SectionIntro
          id="contact-intro"
          eyebrow="Collaboration"
          title="Initiate Project Inquiry."
          text="Let us build something useful. I am interested in teams and projects where architecture, intelligence, and execution matter."
        />

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-24 items-start">
          {/* Form Surface */}
          <Reveal direction="right">
            <div className="glass rounded-[40px] p-12 md:p-16 border-white/5 relative overflow-hidden group">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-700 pointer-events-none" 
                   style={{ backgroundImage: 'radial-gradient(var(--accent) 0.5px, transparent 0.5px)', backgroundSize: '32px 32px' }} />
              
              <form className="space-y-12 relative z-10">
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-strong ml-4">Identifier</label>
                    <input
                      type="text"
                      suppressHydrationWarning
                      placeholder="Name or Organization"
                      className="w-full bg-white/[0.03] border border-white/5 focus:border-apple-blue/40 focus:bg-white/[0.05] rounded-2xl px-8 py-5 outline-none transition-all text-white font-medium placeholder:text-muted/40"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-strong ml-4">Endpoint</label>
                    <input
                      type="email"
                      suppressHydrationWarning
                      placeholder="email@example.com"
                      className="w-full bg-white/[0.03] border border-white/5 focus:border-apple-blue/40 focus:bg-white/[0.05] rounded-2xl px-8 py-5 outline-none transition-all text-white font-medium placeholder:text-muted/40"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-strong ml-4">Payload</label>
                  <textarea
                    rows={6}
                    suppressHydrationWarning
                    placeholder="Technical requirements or opportunity brief..."
                    className="w-full bg-white/[0.03] border border-white/5 focus:border-apple-blue/40 focus:bg-white/[0.05] rounded-[24px] px-8 py-6 outline-none transition-all text-white font-medium placeholder:text-muted/40 resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  suppressHydrationWarning
                  className="w-full py-6 bg-white text-black font-black text-sm uppercase tracking-[0.3em] rounded-2xl flex items-center justify-center gap-4 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-white/20 transition-all"
                >
                  Dispatch Signal <Send size={18} strokeWidth={2.5} />
                </motion.button>
              </form>
            </div>
          </Reveal>

          {/* Direct Signals Side */}
          <div className="space-y-20">
            <Reveal direction="left" delay={0.2}>
              <div className="flex items-center gap-4 text-apple-blue font-black text-[11px] uppercase tracking-[0.4em] mb-12">
                 <span className="w-12 h-[2px] bg-apple-blue" />
                 Direct Access
              </div>
              
              <div className="grid gap-10">
                {[
                  { label: "Signal", value: "tp66182303@gmail.com", icon: Mail, href: "mailto:tp66182303@gmail.com" },
                  { label: "Source", value: "ttanishh", icon: Github, href: profile.links.github },
                  { label: "Network", value: "tanish2311", icon: Linkedin, href: profile.links.linkedin },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="flex items-center gap-8 group"
                  >
                    <div className="w-16 h-16 bg-white/[0.02] border border-white/5 rounded-[20px] flex items-center justify-center text-muted-strong group-hover:bg-apple-blue/10 group-hover:text-apple-blue group-hover:border-apple-blue/20 group-hover:scale-110 transition-all duration-500">
                      <social.icon size={26} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-strong mb-2">{social.label}</p>
                      <p className="text-xl font-bold text-white group-hover:text-apple-blue transition-colors tracking-tight">{social.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </Reveal>

            <Reveal direction="left" delay={0.4}>
              <div className="p-10 bg-apple-blue/[0.03] border border-apple-blue/10 rounded-[32px] relative overflow-hidden group/status">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover/status:rotate-12 transition-transform duration-700">
                   <Activity size={32} className="text-apple-blue" />
                </div>
                <div className="flex items-center gap-3 mb-6">
                   <div className="w-2 h-2 rounded-full bg-apple-blue animate-pulse" />
                   <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-apple-blue">System Status</h4>
                </div>
                <p className="text-base text-muted-strong leading-relaxed font-medium">
                  Currently open to internships and core engineering roles in <strong>AI Infrastructure</strong> and <strong>Distributed Systems</strong>. Available for remote work across global timezones.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
