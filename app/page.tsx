import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutJourney } from "@/components/sections/AboutJourney";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { ResumeSection } from "@/components/sections/ResumeSection";
import { LabSection } from "@/components/sections/LabSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative bg-black">
      <Navbar />
      
      <div className="relative z-10">
        <HeroSection />
        <AboutJourney />
        <ExperienceTimeline />
        <FeaturedProjects />
        <SkillsSection />
        <PhilosophySection />
        <ResumeSection />
        <LabSection />
        <ContactSection />
      </div>

      <Footer />
    </main>
  );
}
