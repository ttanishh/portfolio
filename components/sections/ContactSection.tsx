"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/animations/Reveal";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { profile } from "@/data/profile/profile";

export function ContactSection() {
  return (
    <section id="contact" className="py-32 relative">
      <div className="section-container">
        <SectionIntro
          id="contact-intro"
          eyebrow="Connect"
          title="Open to internships, collaborations, and engineering opportunities."
          text="Let us build something useful. I am interested in teams and projects where architecture, intelligence, and execution matter."
        />

        <div className="grid lg:grid-cols-[1fr_0.6fr] gap-16">
          {/* Form Side */}
          <Reveal direction="right">
            <form className="glass rounded-apple-lg p-8 md:p-12 space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted ml-4">Full Name</label>
                <input
                  type="text"
                  suppressHydrationWarning
                  placeholder="Tanish Panchal"
                  className="w-full bg-white/5 border border-white/5 focus:border-apple-blue/50 rounded-full px-6 py-4 outline-none transition-colors text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted ml-4">Email Address</label>
                <input
                  type="email"
                  suppressHydrationWarning
                  placeholder="you@example.com"
                  className="w-full bg-white/5 border border-white/5 focus:border-apple-blue/50 rounded-full px-6 py-4 outline-none transition-colors text-white"
                />
              </div>
              </div>

              <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-muted ml-4">Message</label>
              <textarea
                rows={5}
                suppressHydrationWarning
                placeholder="Tell me about your project or opportunity..."
                className="w-full bg-white/5 border border-white/5 focus:border-apple-blue/50 rounded-apple-lg px-6 py-4 outline-none transition-colors text-white resize-none"
              />
              </div>

              <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              suppressHydrationWarning
              className="w-full py-5 bg-white text-black font-bold rounded-full flex items-center justify-center gap-3 shadow-2xl shadow-white/5 transition-transform"
              >
              Send Message <Send size={20} />
              </motion.button>            </form>
          </Reveal>

          {/* Info Side */}
          <div className="space-y-12">
            <Reveal direction="left" delay={0.3}>
              <h3 className="text-2xl font-bold text-white mb-8">Direct Signals</h3>
              
              <div className="space-y-6">
                {[
                  { label: "Email", value: "tp66182303@gmail.com", icon: Mail, href: "mailto:tp66182303@gmail.com" },
                  { label: "GitHub", value: "ttanishh", icon: Github, href: profile.links.github },
                  { label: "LinkedIn", value: "tanish2311", icon: Linkedin, href: profile.links.linkedin },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="flex items-center gap-6 group"
                  >
                    <div className="p-4 bg-white/5 border border-white/5 rounded-full group-hover:bg-apple-blue/10 group-hover:text-apple-blue group-hover:border-apple-blue/20 transition-all">
                      <social.icon size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted">{social.label}</p>
                      <p className="text-lg font-medium text-white group-hover:text-apple-blue transition-colors">{social.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </Reveal>

            <Reveal direction="left" delay={0.5}>
              <div className="p-8 bg-apple-blue/5 border border-apple-blue/10 rounded-apple-lg">
                <p className="text-sm text-apple-blue leading-relaxed">
                  Currently seeking internships and collaboration opportunities in <strong>AI + Backend Systems</strong>. 
                  Based in Surat/India, available for remote work globally.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
