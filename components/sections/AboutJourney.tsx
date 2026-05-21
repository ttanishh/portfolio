"use client";

import { journey } from "@/data/timeline/journey";
import { profile } from "@/data/profile/profile";
import { Reveal } from "@/components/animations/Reveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function AboutJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="about" className="py-32 relative" ref={containerRef}>
      <div className="section-container">
        <div className="grid lg:grid-cols-[0.4fr_0.6fr] gap-20">
          {/* Left: Intro */}
          <div className="sticky top-32 h-fit">
            <Reveal direction="right">
              <span className="keynote-pill mb-6 text-apple-blue">Introduction</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Ambiguity into <span className="text-muted-strong">Systems</span>.
              </h2>
              <p className="text-lg text-muted leading-relaxed mb-6">
                I enjoy engineering because it turns ambiguity into systems: something measurable, usable, and sturdy enough for real people to depend on.
              </p>
              <p className="text-base text-muted-strong">
                {profile.description}
              </p>
            </Reveal>
          </div>

          {/* Right: Timeline */}
          <div className="relative pl-12">
            {/* Timeline Line */}
            <div className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-white/5 rounded-full" />
            <motion.div
              style={{ scaleY: pathLength }}
              className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-apple-blue origin-top z-10"
            />

            {/* Journey Items */}
            <div className="space-y-24">
              {journey.map((item, index) => (
                <div key={item.title} className="relative group">
                  {/* Dot */}
                  <div className="absolute -left-[12px] top-2 w-[12px] h-[12px] rounded-full bg-apple-blue border-4 border-black z-20 transition-transform group-hover:scale-125" />
                  
                  <Reveal delay={index * 0.1}>
                    <div className="bg-white/[0.03] border border-white/5 p-8 rounded-apple-lg hover:bg-white/[0.05] transition-colors">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-apple-blue mb-2 block">
                        {item.period}
                      </span>
                      <h3 className="text-2xl font-bold mb-4 text-white">
                        {item.title}
                      </h3>
                      <p className="text-muted leading-relaxed">
                        {item.text}
                      </p>
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
