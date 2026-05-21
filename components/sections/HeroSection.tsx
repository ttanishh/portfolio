"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "@/data/profile/profile";
import { ArrowRight, Download, Sparkles, ChevronDown } from "lucide-react";
import { MagneticLink } from "@/components/ui/Magnetic";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { BackgroundBeams } from "@/components/animations/BackgroundBeams";

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % profile.roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Master Background Effects */}
      <BackgroundBeams />
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-[50vw] h-[50vw] bg-apple-blue/20 blur-[150px] rounded-full mix-blend-screen opacity-50" />
        <div className="absolute bottom-[10%] right-[10%] w-[45vw] h-[45vw] bg-purple-600/10 blur-[150px] rounded-full mix-blend-screen opacity-50" />
      </div>

      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
        >
          {/* Tagline Reveal */}
          <div className="mb-10 inline-flex items-center gap-3 keynote-pill px-6 py-2 border-apple-blue/30 bg-apple-blue/5">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            >
              <Sparkles size={14} className="text-apple-blue" />
            </motion.div>
            <span className="text-[11px] font-bold tracking-[0.2em]">{profile.identity}</span>
          </div>

          {/* Main Headline with Word-by-Word Generate Effect */}
          <div className="hero-title keynote-heading mb-8 text-5xl md:text-8xl">
            <TextGenerateEffect 
              words="Building Intelligent Systems & Scalable Experiences" 
              className="text-white"
            />
          </div>

          {/* Dynamic Rotating Roles with Slide-Fade */}
          <div className="h-16 md:h-20 overflow-hidden mb-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={profile.roles[roleIndex]}
                initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -30, filter: "blur(5px)" }}
                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-apple-blue via-purple-400 to-apple-blue bg-[length:200%_auto] animate-gradient-shift"
              >
                {profile.roles[roleIndex]}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Master Description */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="max-w-3xl mx-auto mb-14 text-xl md:text-2xl text-muted leading-relaxed font-medium"
          >
            {profile.description}
          </motion.p>

          {/* Premium CTA Orchesration */}
          <div className="flex flex-wrap items-center justify-center gap-8">
            <MagneticLink
              href="#projects"
              className="group relative px-10 py-5 bg-white text-black font-black text-sm uppercase tracking-widest rounded-full transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] flex items-center gap-3"
            >
              <span>Explore The Work</span>
              <div className="relative overflow-hidden w-5 h-5">
                <ArrowRight size={20} className="absolute inset-0 transition-transform group-hover:translate-x-full" />
                <ArrowRight size={20} className="absolute inset-0 -translate-x-full transition-transform group-hover:translate-x-0" />
              </div>
            </MagneticLink>
            
            <div className="flex items-center gap-8">
              <MagneticLink
                href="#resume"
                className="group flex items-center gap-3 text-sm font-bold text-muted-strong hover:text-white transition-colors"
              >
                <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
                <span className="border-b border-transparent group-hover:border-white transition-all">Resume</span>
              </MagneticLink>
              
              <MagneticLink
                href="#contact"
                className="text-sm font-bold text-apple-blue hover:brightness-125 transition-all"
              >
                Let&apos;s Build ↗
              </MagneticLink>
            </div>
          </div>
        </motion.div>

        {/* Cinematic Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-muted/40"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-muted/20 to-transparent relative">
             <motion.div 
               animate={{ y: [0, 48, 0] }}
               transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
               className="absolute top-0 left-[-1px] w-[3px] h-[3px] bg-apple-blue rounded-full shadow-[0_0_10px_#0071e3]"
             />
          </div>
          <span className="text-[9px] uppercase tracking-[0.4em] font-black">Scroll Narrative</span>
        </motion.div>
      </div>
    </section>
  );
}
