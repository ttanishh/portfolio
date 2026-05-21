"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/animations/Reveal";

export function PhilosophySection() {
  return (
    <section id="philosophy" className="min-h-[80vh] flex items-center justify-center py-32 bg-black">
      <div className="section-container text-center">
        <Reveal centered>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight text-white mb-12">
            I enjoy building systems that solve <br />
            <span className="text-gradient">meaningful problems</span> at scale.
          </h2>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
            className="w-24 h-[2px] bg-apple-blue mx-auto mb-12"
          />

          <p className="text-2xl md:text-3xl text-muted-strong font-medium max-w-4xl mx-auto leading-relaxed">
            Clean architecture and practical impact matter more than unnecessary complexity.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
