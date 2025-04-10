
import React, { useRef, useEffect, useState } from 'react';
import { Calendar, Briefcase, GraduationCap } from 'lucide-react';

interface Experience {
  id: number;
  title: string;
  organization: string;
  period: string;
  description: string;
  impact: string;
  stack: string[];
  type: 'work' | 'education' | 'mentorship';
}

const experiences: Experience[] = [
  {
    id: 1,
    title: "AI Research Intern",
    organization: "Neural Innovations Lab",
    period: "Jun 2024 - Present",
    description: "Working on neural network optimization for resource-constrained environments.",
    impact: "Improved model efficiency by 40% while maintaining 98% accuracy",
    stack: ["Python", "TensorFlow", "PyTorch", "ONNX"],
    type: "work"
  },
  {
    id: 2,
    title: "DSA Mentor",
    organization: "College Coding Club",
    period: "Jan 2024 - Present",
    description: "Mentor junior students in Data Structures and Algorithms.",
    impact: "Guided 15+ students to improve competitive programming skills",
    stack: ["C++", "Java", "Problem Solving", "Algorithms"],
    type: "mentorship"
  },
  {
    id: 3,
    title: "Full Stack Developer",
    organization: "TechStart Solutions",
    period: "May 2023 - Aug 2023",
    description: "Developed and maintained web applications for clients across industries.",
    impact: "Built a real-time dashboard that reduced reporting time by 60%",
    stack: ["React", "Node.js", "MongoDB", "Express", "Redis"],
    type: "work"
  },
  {
    id: 4,
    title: "Blockchain Enthusiast",
    organization: "Decentralized Learning Community",
    period: "Sep 2022 - Dec 2022",
    description: "Collaborated on building decentralized applications for social impact.",
    impact: "Created a prototype for secure and anonymous reporting system",
    stack: ["Solidity", "Ethereum", "Web3.js", "Smart Contracts"],
    type: "education"
  },
];

const ExperienceTimeline: React.FC = () => {
  const [visibleElements, setVisibleElements] = useState<{ [key: number]: boolean }>({});
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = parseInt(entry.target.getAttribute('data-id') || '0');
          if (entry.isIntersecting) {
            setVisibleElements(prev => ({ ...prev, [id]: true }));
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      itemRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const getIcon = (type: string) => {
    switch (type) {
      case 'work':
        return <Briefcase className="text-electric" />;
      case 'education':
        return <GraduationCap className="text-mint" />;
      case 'mentorship':
        return <Calendar className="text-violet" />;
      default:
        return <Briefcase className="text-electric" />;
    }
  };

  return (
    <section id="experience" ref={sectionRef} className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center md:text-left">
          <span className="text-gradient">Experience</span> Timeline
        </h2>
        <p className="text-white/70 max-w-2xl mb-16 text-center md:text-left">
          My journey through real-world experience in internships, mentorship, and contributions.
        </p>

        <div className="relative pl-8 before:content-[''] before:absolute before:left-4 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-electric before:via-violet before:to-mint">
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              ref={el => (itemRefs.current[index] = el)}
              data-id={index}
              className={`mb-12 transition-all duration-700 ease-out ${
                visibleElements[index]
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-8'
              }`}
            >
              <div className="absolute left-0 p-2 rounded-full bg-dark border border-white/10 z-10">
                {getIcon(experience.type)}
              </div>
              
              <div className="glass-card p-6 md:p-8">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{experience.title}</h3>
                    <p className="text-white/80">{experience.organization}</p>
                  </div>
                  <div className="text-electric font-mono mt-2 md:mt-0">{experience.period}</div>
                </div>
                
                <p className="text-white/70 mb-3">{experience.description}</p>
                
                <div className="mb-4 p-3 bg-electric/10 rounded-lg">
                  <p className="text-white font-medium">Impact: {experience.impact}</p>
                </div>
                
                <div>
                  <p className="text-sm text-white/70 mb-2">Tech & Skills</p>
                  <div className="flex flex-wrap gap-2">
                    {experience.stack.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-dark-accent text-white/80 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
