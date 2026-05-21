"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="py-20 border-t border-white/5 bg-black">
      <div className="section-container flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-2">
          <p className="text-sm text-white font-bold tracking-tight">Tanish Panchal</p>
          <p className="text-xs text-muted">Building intelligent systems & scalable experiences.</p>
        </div>
        
        <div className="flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-muted">
          <p suppressHydrationWarning>© {new Date().getFullYear()} — Built for Impact</p>
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-apple-blue" />
            <span className="text-apple-blue">Available for Opportunities</span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
