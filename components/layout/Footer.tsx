"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="py-32 border-t border-white/5 bg-black relative overflow-hidden">
      {/* Footer Ambient Glow */}
      <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] bg-apple-blue/5 blur-[120px] rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-16 md:gap-8">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-black text-white tracking-tighter">Tanish Panchal</h2>
              <p className="text-lg text-muted font-medium max-w-sm leading-snug">
                Architecting the next generation of intelligent, distributed systems.
              </p>
            </div>
            
            <div className="flex gap-10 text-[11px] font-black uppercase tracking-[0.4em] text-muted-strong">
               <a href="#projects" className="hover:text-apple-blue transition-colors">Portfolio</a>
               <a href="#about" className="hover:text-apple-blue transition-colors">Biography</a>
               <a href="#lab" className="hover:text-apple-blue transition-colors">The Lab</a>
            </div>
          </div>
          
          <div className="flex flex-col items-start md:items-end gap-10 w-full md:w-auto">
            <div className="flex items-center gap-10 text-[11px] font-black uppercase tracking-[0.4em] text-muted/40">
              <p suppressHydrationWarning>© {new Date().getFullYear()} — Built for Impact</p>
              <div className="hidden sm:flex items-center gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-apple-blue shadow-[0_0_8px_#0071e3]" />
                 <span className="text-apple-blue">Global Availability</span>
              </div>
            </div>

            <div className="w-full md:w-[400px] h-[1px] bg-white/5 relative">
               <motion.div 
                 initial={{ width: 0 }}
                 whileInView={{ width: "100%" }}
                 viewport={{ once: true }}
                 transition={{ duration: 1.5, ease: "circOut" }}
                 className="absolute inset-0 bg-gradient-to-r from-transparent via-apple-blue/40 to-transparent"
               />
            </div>

            <p className="text-[10px] font-bold text-muted/20 uppercase tracking-[0.6em]">
               TechnoCommercial Visionary
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
