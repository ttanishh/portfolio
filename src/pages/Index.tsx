import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutJourney } from '../components/sections/AboutJourney';
import { SkillsSection } from '../components/sections/SkillsSection';
import { ExperienceTimeline } from '../components/sections/ExperienceTimeline';
import { FeaturedProjects } from '../components/sections/FeaturedProjects';
import { LabSection } from '../components/sections/LabSection';
import { PhilosophySection } from '../components/sections/PhilosophySection';
import { ContactSection } from '../components/sections/ContactSection';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-apple-blue/30">
      <Navbar />
      <main>
        <HeroSection />
        <AboutJourney />
        <SkillsSection />
        <ExperienceTimeline />
        <FeaturedProjects />
        <LabSection />
        <PhilosophySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
