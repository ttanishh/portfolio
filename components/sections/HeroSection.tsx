"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "@/data/profile/profile";
import { ArrowRight, Download, Sparkles, ChevronDown } from "lucide-react";
import { MagneticLink } from "@/components/ui/Magnetic";

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % profile.roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Immersive Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] bg-apple-blue/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[20%] right-[10%] w-[35vw] h-[35vw] bg-purple-500/5 blur-[100px] rounded-full animate-float" />
      </div>

      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
        >
          {/* Keynote Tag */}
          <div className="mb-8 inline-flex items-center gap-2 keynote-pill">
            <Sparkles size={12} className="text-apple-blue" />
            <span>{profile.name}</span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-title keynote-heading mb-6 text-5xl md:text-7xl lg:text-8xl">
            Building <span className="text-gradient">Intelligent Systems</span> <br />
            & Scalable Experiences
          </h1>

          {/* Dynamic Rotating Roles */}
          <div className="h-12 md:h-16 overflow-hidden mb-8">
            <AnimatePresence mode="wait">
              <motion.p
                key={profile.roles[roleIndex]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-2xl md:text-3xl font-semibold text-muted-strong"
              >
                {profile.roles[roleIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Description */}
          <p className="max-w-2xl mx-auto mb-12 text-lg md:text-xl text-muted leading-relaxed">
            {profile.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <MagneticLink
              href="#projects"
              className="px-8 py-4 bg-white text-black font-bold rounded-full transition-transform hover:scale-105 flex items-center gap-2 shadow-xl shadow-white/5"
            >
              View Projects <ArrowRight size={18} />
            </MagneticLink>
            
            <div className="flex items-center gap-4">
              <MagneticLink
                href="#resume"
                className="px-6 py-4 border border-white/10 hover:bg-white/5 rounded-full transition-colors flex items-center gap-2"
              >
                Resume <Download size={18} />
              </MagneticLink>
              
              <MagneticLink
                href="#contact"
                className="text-sm font-semibold hover:text-white transition-colors"
              >
                Contact
              </MagneticLink>
            </div>
          </div>
        </motion.div>

        {/* Scroll Prompt */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted"
        >
          <span className="text-[10px] uppercase tracking-widest font-bold">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
