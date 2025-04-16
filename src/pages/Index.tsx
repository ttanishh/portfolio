
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import ParticleBackground from '../components/ParticleBackground';
import HeroSection from '../components/HeroSection';
import ProjectsShowcase from '../components/ProjectsShowcase';
import ExperienceTimeline from '../components/ExperienceTimeline';
import TechStack from '../components/TechStack';
import PersonalSection from '../components/PersonalSection';
import AchievementsSection from '../components/AchievementsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import CommandPalette from '../components/CommandPalette';
import MonthlyGoalBanner from '../components/MonthlyGoalBanner';
import ThemeCustomizer from '../components/ThemeCustomizer';
import RandomThought from '../components/RandomThought';

const Index: React.FC = () => {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  // Custom cursor effect
  useEffect(() => {
    const createCustomCursor = () => {
      const cursorDot = document.createElement('div');
      const cursorOutline = document.createElement('div');
      
      cursorDot.className = 'cursor-dot';
      cursorOutline.className = 'cursor-outline';
      
      document.body.appendChild(cursorDot);
      document.body.appendChild(cursorOutline);
      
      const moveCursor = (e: MouseEvent) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        cursorOutline.style.transform = `translate3d(${mouseX - 20}px, ${mouseY - 20}px, 0)`;
      };
      
      const growCursor = () => {
        cursorOutline.style.transform = `translate3d(${parseInt(cursorOutline.style.transform.split('(')[1])}px, ${parseInt(cursorOutline.style.transform.split(',')[1])}px, 0) scale(1.5)`;
        cursorOutline.style.borderColor = 'rgba(30, 174, 219, 0.9)';
      };
      
      const shrinkCursor = () => {
        cursorOutline.style.transform = `translate3d(${parseInt(cursorOutline.style.transform.split('(')[1])}px, ${parseInt(cursorOutline.style.transform.split(',')[1])}px, 0) scale(1)`;
        cursorOutline.style.borderColor = 'rgba(30, 174, 219, 0.5)';
      };
      
      document.addEventListener('mousemove', moveCursor);
      
      document.querySelectorAll('button, a, input, textarea').forEach(element => {
        element.addEventListener('mouseenter', growCursor);
        element.addEventListener('mouseleave', shrinkCursor);
      });
      
      return () => {
        document.removeEventListener('mousemove', moveCursor);
        document.querySelectorAll('button, a, input, textarea').forEach(element => {
          element.removeEventListener('mouseenter', growCursor);
          element.removeEventListener('mouseleave', shrinkCursor);
        });
        document.body.removeChild(cursorDot);
        document.body.removeChild(cursorOutline);
      };
    };

    // Only create custom cursor on larger screens
    const isMobile = window.innerWidth < 768;
    let cleanup: (() => void) | null = null;
    
    if (!isMobile) {
      cleanup = createCustomCursor();
    }
    
    // Easter egg console message
    console.log("%c👋 Hello, curious developer!", "font-size: 24px; font-weight: bold; color: #1EAEDB;");
    console.log("%cWelcome to my interactive console. Try typing these commands:", "font-size: 16px; color: white;");
    console.log("%c➡️ tanish --help", "font-size: 14px; color: #7E69AB;");
    console.log("%c➡️ show projects", "font-size: 14px; color: #7E69AB;");
    console.log("%c➡️ open resume", "font-size: 14px; color: #7E69AB;");
    
    // Handle console commands
    const originalConsoleLog = console.log;
    
    console.log = function(...args) {
      if (typeof args[0] === 'string' && args[0].toLowerCase().includes('tanish --help')) {
        originalConsoleLog.apply(console, [
          "%c🔍 Available Commands:\n" +
          "📂 show projects - Display my featured projects\n" +
          "📄 open resume - View my professional resume\n" +
          "🧠 show skills - List my technical skills\n" +
          "🎮 play game - Try a small surprise game\n" +
          "📧 contact - Get my contact information",
          "font-size: 14px; color: #1EAEDB; background-color: rgba(30, 174, 219, 0.1); padding: 10px; border-radius: 5px;"
        ]);
        return;
      }
      
      if (typeof args[0] === 'string' && args[0].toLowerCase().includes('show projects')) {
        originalConsoleLog.apply(console, [
          "%c🚀 Featured Projects:\n" +
          "1. AI-Driven Health Analytics\n" +
          "2. Blockchain Secure Reporting\n" +
          "3. Microservices Deployment Pipeline\n" +
          "4. Neural Network Optimization",
          "font-size: 14px; color: #7E69AB; background-color: rgba(126, 105, 171, 0.1); padding: 10px; border-radius: 5px;"
        ]);
        return;
      }
      
      if (typeof args[0] === 'string' && args[0].toLowerCase().includes('open resume')) {
        originalConsoleLog.apply(console, [
          "%c📄 Opening resume...\n" +
          "Just kidding! Visit the website and click on the resume link in the footer.",
          "font-size: 14px; color: #A0E7E5; background-color: rgba(160, 231, 229, 0.1); padding: 10px; border-radius: 5px;"
        ]);
        return;
      }
      
      originalConsoleLog.apply(console, args);
    };

    // Add keyboard shortcut for command palette (Ctrl+K or Cmd+K)
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen(true);
      } else if (e.key === '/' && document.activeElement === document.body) {
        e.preventDefault();
        setIsCommandPaletteOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      console.log = originalConsoleLog;
      if (cleanup) cleanup();
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Observe elements for scroll animations
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(element => observer.observe(element));

    return () => {
      animatedElements.forEach(element => observer.unobserve(element));
    };
  }, []);

  return (
    <div className="min-h-screen bg-dark text-white overflow-x-hidden">
      <ParticleBackground />
      <Header onCommandPaletteOpen={() => setIsCommandPaletteOpen(true)} />
      <CommandPalette 
        isOpen={isCommandPaletteOpen} 
        setIsOpen={setIsCommandPaletteOpen} 
      />
      <ThemeCustomizer />
      <main>
        <HeroSection />
        <div className="container mx-auto px-4 md:px-6">
          <RandomThought />
        </div>
        <ProjectsShowcase />
        <AchievementsSection />
        <ExperienceTimeline />
        <TechStack />
        <PersonalSection />
        <ContactSection />
      </main>
      <MonthlyGoalBanner />
      <Footer />
    </div>
  );
};

export default Index;
