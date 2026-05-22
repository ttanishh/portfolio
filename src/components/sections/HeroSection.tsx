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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Master Background Effects */}
      <BackgroundBeams />
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-[50vw] h-[50vw] bg-apple-blue/20 blur-[150px] rounded-full mix-blend-screen opacity-50" />
        <div className="absolute bottom-[10%] right-[10%] w-[45vw] h-[45vw] bg-purple-600/10 blur-[150px] rounded-full mix-blend-screen opacity-50" />
      </div>

      <div className="section-container relative z-10 w-full">
        <div className="grid lg:grid-cols-[1fr_0.8fr] gap-12 lg:gap-20 items-center text-left">
          
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
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

            {/* Main Headline */}
            <div className="hero-title keynote-heading mb-8 text-5xl md:text-7xl lg:text-8xl tracking-tighter">
              <TextGenerateEffect 
                words="Building Intelligent Systems & Scalable Experiences" 
                className="text-white"
              />
            </div>

            {/* Dynamic Rotating Roles */}
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

            {/* Premium CTA Orchestration */}
            <div className="flex flex-wrap items-center gap-8">
              <MagneticLink
                href="#projects"
                className="group relative px-10 py-5 bg-white text-black font-black text-sm uppercase tracking-widest rounded-full transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] flex items-center gap-3"
              >
                <span>Explore Work</span>
                <ArrowRight size={20} />
              </MagneticLink>
              
              <div className="flex items-center gap-8">
                <MagneticLink
                  href="#resume"
                  className="group flex items-center gap-3 text-sm font-bold text-muted-strong hover:text-white transition-colors"
                >
                  <Download size={18} />
                  <span>Resume</span>
                </MagneticLink>
                
                <MagneticLink
                  href="#contact"
                  className="text-sm font-bold text-apple-blue hover:brightness-125 transition-all"
                >
                  Connect ↗
                </MagneticLink>
              </div>
            </div>
          </motion.div>

          {/* Photo Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, delay: 0.5, ease: [0.19, 1, 0.22, 1] }}
            className="relative group hidden lg:block"
          >
            <div className="relative z-10 w-full aspect-[4/5] overflow-hidden rounded-[40px] border border-white/10 bg-zinc-900 shadow-2xl">
              <img 
                src="/portfolio-assets/tanish1.jpg" 
                alt="Tanish Panchal" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60" />
              
              {/* Internal Label */}
              <div className="absolute bottom-10 left-10 right-10">
                 <p className="text-white font-black text-2xl tracking-tighter mb-2">Tanish Panchal</p>
                 <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-apple-blue animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-strong">System Core Active</span>
                 </div>
              </div>
            </div>
            
            {/* Background Glow behind Photo */}
            <div className="absolute -inset-10 bg-apple-blue/20 blur-[100px] rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          </motion.div>

        </div>

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
        </motion.div>
      </div>
    </section>
  );
}
