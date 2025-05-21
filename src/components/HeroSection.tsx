
import React, { useEffect, useRef } from 'react';
import { ArrowDown, Rocket, Github, Linkedin, FileText } from 'lucide-react';
import { Button } from './ui/button';

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
      <div className="w-full max-w-6xl mx-auto z-10 flex flex-col md:flex-row gap-8 items-center justify-between">
        <div className="text-center md:text-left md:w-3/5">
          <h4 className="text-electric font-mono mb-4 animate-on-load opacity-0 translate-y-10 transition-all duration-700 delay-100">
            Crafting Digital Innovation
          </h4>
          
          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold mb-6 animate-on-load opacity-0 translate-y-10 transition-all duration-700 delay-200">
            Hi, I'm <span className="text-gradient">Tanish</span> —
            <br className="hidden md:block" /> Engineering <span className="text-electric">Smart</span>, <span className="text-violet">Secure</span>, and <span className="text-mint">Scalable</span> Ideas
          </h1>
          
          <p className="text-lg text-white/80 max-w-xl md:ml-1 mb-8 animate-on-load opacity-0 translate-y-10 transition-all duration-700 delay-300">
            3rd-year B.Tech Computer Science student building professional-grade projects across full-stack, AI, and blockchain technologies.
          </p>
          
          {/* Social links */}
          <div className="flex items-center justify-center md:justify-start gap-4 mb-8 animate-on-load opacity-0 translate-y-10 transition-all duration-700 delay-350">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-card h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300 hover:text-electric hover:scale-110"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-card h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300 hover:text-electric hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="#" 
              className="glass-card h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300 hover:text-electric hover:scale-110"
              aria-label="Resume"
            >
              <FileText size={20} />
            </a>
          </div>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 animate-on-load opacity-0 translate-y-10 transition-all duration-700 delay-400">
            <Button 
              asChild
              variant="outline" 
              className="glass-card group flex items-center gap-2 px-6 py-6 text-white font-medium hover:border-electric"
            >
              <a href="#projects">
                <span>Explore My Work</span>
                <ArrowDown size={18} className="transition-transform group-hover:translate-y-1" />
              </a>
            </Button>
            
            <Button 
              asChild
              variant="default"
              className="glass-card bg-gradient-to-r from-electric via-violet to-mint group flex items-center gap-2 px-6 py-6 text-white font-medium"
            >
              <a href="#contact">
                <span>Let's Collaborate</span>
                <Rocket size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
        
        {/* Profile image section */}
        <div className="md:w-2/5 animate-on-load opacity-0 translate-y-10 transition-all duration-700 delay-300">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-electric/40 via-violet/30 to-mint/20 rounded-full blur-xl"></div>
            <div className="relative w-72 h-72 sm:w-80 sm:h-80">
              <img 
                src="/lovable-uploads/987dae1f-21b6-479e-8593-7a535b2896a7.png" 
                alt="Profile" 
                className="w-full h-full object-cover rounded-full border-2 border-white/10 hover:border-electric/30 transition-all duration-500"
              />
              
              {/* Experience badge */}
              <div className="absolute -top-4 -right-4 w-24 h-24 glass-card rounded-full flex items-center justify-center bg-dark/60 border border-white/10 hover:border-electric/30 transition-all duration-300">
                <span className="text-mint font-mono text-sm">3+ Years</span>
              </div>
              
              {/* Projects badge */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 glass-card rounded-full flex items-center justify-center bg-dark/60 border border-white/10 hover:border-electric/30 transition-all duration-300">
                <span className="text-electric font-mono text-sm">10+ Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-electric/10 rounded-full filter blur-[120px] z-0"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-violet/10 rounded-full filter blur-[100px] z-0"></div>
      <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-mint/10 rounded-full filter blur-[80px] z-0"></div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <ArrowDown size={24} className="text-white/80" />
      </div>
    </section>
  );
};

export default HeroSection;
