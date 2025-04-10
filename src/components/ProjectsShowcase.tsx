
import React, { useRef, useState, useEffect } from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  status: 'Live' | 'In Progress';
  role: string;
  stack: string[];
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "AI-Driven Health Analytics",
    description: "Neural network system that analyzes medical data to predict potential health issues before they become serious problems.",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=600&auto=format",
    status: "Live",
    role: "Lead Developer",
    stack: ["Python", "TensorFlow", "Flask", "React", "MongoDB"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    id: 2,
    title: "Blockchain Secure Reporting",
    description: "Decentralized platform that enables secure and anonymous crime reporting with immutable record keeping.",
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=600&auto=format",
    status: "Live",
    role: "Blockchain Architect",
    stack: ["Solidity", "Web3.js", "React", "Node.js", "Ethereum"],
    github: "https://github.com",
  },
  {
    id: 3,
    title: "Microservices Deployment Pipeline",
    description: "Automated CI/CD pipeline for microservices deployment with monitoring and rollback capabilities.",
    image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=600&auto=format",
    status: "In Progress",
    role: "DevOps Engineer",
    stack: ["Docker", "Kubernetes", "Jenkins", "ELK Stack", "Prometheus"],
    github: "https://github.com",
  },
  {
    id: 4,
    title: "Neural Network Optimization",
    description: "Research project focused on optimizing neural networks for resource-constrained environments like mobile devices.",
    image: "https://images.unsplash.com/photo-1677442135968-6261d84dae97?q=80&w=600&auto=format",
    status: "In Progress",
    role: "AI Researcher",
    stack: ["Python", "PyTorch", "ONNX", "TensorRT", "C++"],
    github: "https://github.com",
  },
];

const ProjectsShowcase: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const scrollToProject = (index: number) => {
    setActiveIndex(index);
    if (scrollContainerRef.current) {
      const projectWidth = scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollTo({
        left: index * projectWidth,
        behavior: 'smooth',
      });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollPosition = scrollContainerRef.current.scrollLeft;
      const projectWidth = scrollContainerRef.current.offsetWidth;
      const index = Math.round(scrollPosition / projectWidth);
      setActiveIndex(index);
    }
  };

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-20 px-4 relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className={`transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center md:text-left">
            <span className="text-gradient">Projects</span> Showcase
          </h2>
          <p className="text-white/70 max-w-2xl mb-12 text-center md:text-left">
            A collection of projects demonstrating my expertise across full-stack development, AI, and blockchain technologies.
          </p>
        </div>

        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar"
            onScroll={handleScroll}
          >
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className={`min-w-full snap-center transition-all duration-1000 delay-${200 + index * 100} ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
              >
                <div className="max-w-7xl mx-auto glass-card p-6 md:p-8 overflow-hidden">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden rounded-lg">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform hover:scale-105"
                      />
                      <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          project.status === 'Live' 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-amber-500/20 text-amber-400'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                    
                    <div className="md:w-1/2 flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                        <p className="text-white/70 mb-4">{project.description}</p>
                        <p className="text-white/90 font-medium mb-3">Role: <span className="text-electric">{project.role}</span></p>
                        
                        <div className="mb-6">
                          <p className="text-sm text-white/70 mb-2">Tech Stack</p>
                          <div className="flex flex-wrap gap-2">
                            {project.stack.map((tech, i) => (
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
                      
                      <div className="flex gap-4">
                        {project.github && (
                          <a 
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                          >
                            <Github size={18} />
                            <span>GitHub</span>
                          </a>
                        )}
                        {project.demo && (
                          <a 
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-electric hover:text-electric/80 transition-colors"
                          >
                            <ExternalLink size={18} />
                            <span>Live Demo</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full mx-1 transition-all ${
                  index === activeIndex 
                    ? 'bg-electric w-10' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                onClick={() => scrollToProject(index)}
                aria-label={`View project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
