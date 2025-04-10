
import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, Rocket, Github, Linkedin, FileText, Sun, Moon } from 'lucide-react';
import { Button } from './ui/button';
import { Switch } from './ui/switch';

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    // Load user's theme preference from localStorage if available
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('light-mode', savedTheme === 'light');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('light-mode', newTheme === 'light');
  };

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
      {/* Theme toggle button */}
      <div className="absolute top-24 right-6 z-20">
        <div className="glass-card px-3 py-2 rounded-full flex items-center gap-2">
          <Sun size={18} className={`transition-opacity ${theme === 'light' ? 'text-yellow-400' : 'text-white/60'}`} />
          <Switch 
            checked={theme === 'light'}
            onCheckedChange={toggleTheme}
            className="data-[state=checked]:bg-yellow-400 data-[state=unchecked]:bg-violet"
          />
          <Moon size={18} className={`transition-opacity ${theme === 'dark' ? 'text-violet' : 'text-white/60'}`} />
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left order-2 md:order-1">
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
              className="glass-card bg-gradient-glow animate-gradient-shift group flex items-center gap-2 px-6 py-6 text-white font-medium"
            >
              <a href="#contact">
                <span>Let's Collaborate</span>
                <Rocket size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
        
        <div className="flex justify-center md:justify-end order-1 md:order-2 animate-on-load opacity-0 translate-y-10 transition-all duration-700 delay-300">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80">
            <div className="absolute inset-0 bg-gradient-to-br from-electric/40 via-violet/30 to-mint/20 rounded-full blur-xl"></div>
            <div className="absolute inset-0 glass-card rounded-full overflow-hidden border-2 border-white/10 hover:border-electric/30 transition-all duration-500 shadow-lg hover:shadow-electric/20">
              <img 
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=400&auto=format" 
                alt="Tanish" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-24 h-24 glass-card rounded-full flex items-center justify-center bg-dark/60 border border-white/10 hover:border-electric/30 transition-all duration-300 shadow-lg">
              <span className="text-mint font-mono text-sm">3+ Years</span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 glass-card rounded-full flex items-center justify-center bg-dark/60 border border-white/10 hover:border-electric/30 transition-all duration-300 shadow-lg">
              <span className="text-electric font-mono text-sm">10+ Projects</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <ArrowDown size={24} className="text-white/80" />
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-electric/10 rounded-full filter blur-[120px] z-0"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-violet/10 rounded-full filter blur-[100px] z-0"></div>
      <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-mint/10 rounded-full filter blur-[80px] z-0"></div>
    </section>
  );
};

export default HeroSection;
