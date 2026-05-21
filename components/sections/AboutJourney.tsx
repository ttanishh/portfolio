"use client";

import { journey } from "@/data/timeline/journey";
import { profile } from "@/data/profile/profile";
import { Reveal } from "@/components/animations/Reveal";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export function AboutJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const pathLength = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1]), {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="about" className="py-48 relative overflow-hidden bg-black" ref={containerRef}>
      {/* Narrative Background */}
      <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-apple-blue/5 blur-[150px] rounded-full -z-10 translate-x-1/2 -translate-y-1/2" />
      
      <div className="section-container">
        <div className="grid lg:grid-cols-[0.4fr_0.6fr] gap-32">
          {/* Left: Presentation Slide */}
          <div className="sticky top-40 h-fit space-y-12">
            <Reveal direction="right">
              <div className="flex items-center gap-4 text-apple-blue font-black text-[11px] uppercase tracking-[0.4em] mb-8">
                 <span className="w-12 h-[2px] bg-apple-blue" />
                 Biography
              </div>
              <h2 className="text-5xl md:text-7xl font-black mb-12 leading-tight tracking-tighter text-white">
                Ambiguity into <br />
                <span className="text-muted/40">Reliable Systems</span>.
              </h2>
              <div className="space-y-10">
                <p className="text-2xl text-muted leading-relaxed font-medium">
                  {profile.shortDescription}
                </p>
                <p className="text-lg text-muted-strong leading-relaxed opacity-80 border-l-2 border-white/5 pl-8 italic">
                  I like the moment where a problem stops being abstract and becomes architecture: APIs, queues, and small decisions that make the final system feel inevitable.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right: Orchestrated Timeline */}
          <div className="relative pl-20">
            {/* Master Timeline Track */}
            <div className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-white/5 rounded-full" />
            <motion.div
              style={{ scaleY: pathLength }}
              className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-apple-blue origin-top z-10 shadow-[0_0_20px_#0071e3]"
            />

            {/* Narrative Nodes */}
            <div className="space-y-40">
              {journey.map((item, index) => (
                <div key={item.title} className="relative group">
                  {/* Glowing Node */}
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="absolute -left-[20px] top-4 w-9 h-9 bg-black border-2 border-white/10 rounded-full z-20 flex items-center justify-center group-hover:border-apple-blue transition-colors duration-500 shadow-2xl"
                  >
                     <div className="w-2.5 h-2.5 bg-white/20 rounded-full group-hover:bg-apple-blue transition-colors duration-500" />
                  </motion.div>
                  
                  <Reveal delay={0.1} direction="up" className="w-full">
                    <div className="relative">
                      <span className="text-[12px] font-black uppercase tracking-[0.4em] text-apple-blue mb-6 block group-hover:translate-x-2 transition-transform duration-500">
                        Phase {item.period}
                      </span>
                      <div className="bg-white/[0.02] border border-white/5 p-10 md:p-14 rounded-[40px] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-700 group/card relative overflow-hidden">
                        {/* Interactive Grid Background on Card */}
                        <div className="absolute inset-0 opacity-0 group-hover/card:opacity-10 transition-opacity duration-700" 
                             style={{ backgroundImage: 'radial-gradient(var(--accent) 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />
                        
                        <h3 className="text-3xl md:text-4xl font-black mb-8 text-white tracking-tighter leading-none relative z-10">
                          {item.title}
                        </h3>
                        <p className="text-lg text-muted-strong leading-relaxed font-medium relative z-10 opacity-90">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
