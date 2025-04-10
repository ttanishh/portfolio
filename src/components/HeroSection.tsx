
import React, { useEffect, useRef } from 'react';
import { ArrowDown, Rocket } from 'lucide-react';

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = sectionRef.current?.querySelectorAll('.animate-on-load');
    animatedElements?.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      animatedElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section 
      id="hero" 
      ref={sectionRef} 
      className="min-h-screen flex flex-col items-center justify-center relative pt-20 pb-10 px-4"
    >
      <div className="w-full max-w-6xl mx-auto z-10 text-center md:text-left">
        <h4 className="text-electric font-mono mb-4 animate-on-load opacity-0 translate-y-10 transition-all duration-700 delay-100">
          Crafting Digital Innovation
        </h4>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-on-load opacity-0 translate-y-10 transition-all duration-700 delay-200">
          Hi, I'm <span className="text-gradient">Tanish</span> —
          <br className="hidden md:block" /> Engineering <span className="text-electric">Smart</span>, <span className="text-violet">Secure</span>, and <span className="text-mint">Scalable</span> Ideas
        </h1>
        
        <p className="text-lg text-white/80 max-w-2xl md:ml-1 mb-10 animate-on-load opacity-0 translate-y-10 transition-all duration-700 delay-300">
          3rd-year B.Tech Computer Science student building professional-grade projects across full-stack, AI, and blockchain technologies.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 animate-on-load opacity-0 translate-y-10 transition-all duration-700 delay-400">
          <a 
            href="#projects" 
            className="glass-card group flex items-center gap-2 px-6 py-3 text-white font-medium"
          >
            <span>Explore My Work</span>
            <ArrowDown size={18} className="transition-transform group-hover:translate-y-1" />
          </a>
          
          <a 
            href="#contact" 
            className="glass-card bg-gradient-glow animate-gradient-shift group flex items-center gap-2 px-6 py-3 text-white font-medium"
          >
            <span>Let's Collaborate</span>
            <Rocket size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <ArrowDown size={24} className="text-white/80" />
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-1/3 right-10 w-64 h-64 bg-electric/20 rounded-full filter blur-[100px] z-0"></div>
      <div className="absolute bottom-1/3 left-10 w-48 h-48 bg-violet/20 rounded-full filter blur-[80px] z-0"></div>
    </section>
  );
};

export default HeroSection;
