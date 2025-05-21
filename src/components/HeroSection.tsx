
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex flex-col items-center justify-center py-16 px-4"
    >
      <div className="w-full max-w-4xl mx-auto text-center">
        {/* Simple profile image */}
        <div className="mb-8">
          <div className="relative w-40 h-40 mx-auto">
            <img 
              src="/lovable-uploads/987dae1f-21b6-479e-8593-7a535b2896a7.png" 
              alt="Profile" 
              className="w-full h-full object-cover rounded-full border-2 border-electric"
            />
          </div>
        </div>

        {/* Simple text content */}
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Hi, I'm <span className="text-electric">Tanish</span>
        </h1>
        
        <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
          3rd-year B.Tech Computer Science student building projects across full-stack, AI, and blockchain technologies.
        </p>
        
        {/* Simple CTA */}
        <Button 
          asChild
          variant="default"
          className="bg-electric hover:bg-electric/80"
        >
          <a href="#projects">
            View My Work <ArrowDown size={16} className="ml-2" />
          </a>
        </Button>
      </div>

      {/* Simple background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-electric/5 rounded-full filter blur-[100px] z-0"></div>
    </section>
  );
};

export default HeroSection;
