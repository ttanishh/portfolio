
import React, { useState, useRef, useEffect } from 'react';

interface SkillCategory {
  name: string;
  skills: Skill[];
}

interface Skill {
  name: string;
  proficiency: number;
  experience: string;
}

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "React", proficiency: 90, experience: "3 years" },
      { name: "TypeScript", proficiency: 85, experience: "2 years" },
      { name: "Next.js", proficiency: 80, experience: "1.5 years" },
      { name: "Tailwind CSS", proficiency: 95, experience: "2.5 years" },
      { name: "Redux", proficiency: 75, experience: "2 years" },
    ]
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", proficiency: 85, experience: "3 years" },
      { name: "Express", proficiency: 90, experience: "3 years" },
      { name: "MongoDB", proficiency: 80, experience: "2.5 years" },
      { name: "PostgreSQL", proficiency: 75, experience: "2 years" },
      { name: "GraphQL", proficiency: 70, experience: "1 year" },
    ]
  },
  {
    name: "AI / ML",
    skills: [
      { name: "Python", proficiency: 95, experience: "4 years" },
      { name: "TensorFlow", proficiency: 80, experience: "2 years" },
      { name: "PyTorch", proficiency: 75, experience: "1.5 years" },
      { name: "Scikit-Learn", proficiency: 85, experience: "3 years" },
      { name: "NLP", proficiency: 70, experience: "1 year" },
    ]
  },
  {
    name: "Blockchain",
    skills: [
      { name: "Solidity", proficiency: 80, experience: "1.5 years" },
      { name: "Web3.js", proficiency: 75, experience: "1 year" },
      { name: "Smart Contracts", proficiency: 85, experience: "1.5 years" },
      { name: "Ethereum", proficiency: 80, experience: "2 years" },
      { name: "Hardhat", proficiency: 70, experience: "1 year" },
    ]
  },
  {
    name: "DevOps",
    skills: [
      { name: "Docker", proficiency: 85, experience: "2 years" },
      { name: "Kubernetes", proficiency: 70, experience: "1 year" },
      { name: "CI/CD", proficiency: 80, experience: "1.5 years" },
      { name: "AWS", proficiency: 75, experience: "1.5 years" },
      { name: "Linux", proficiency: 90, experience: "3 years" },
    ]
  }
];

const TechStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);
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

  return (
    <section 
      id="tech-stack" 
      ref={sectionRef}
      className="py-20 px-4 relative"
    >
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center md:text-left">
            <span className="text-gradient">Tech Stack</span> Matrix
          </h2>
          <p className="text-white/70 max-w-2xl mb-12 text-center md:text-left">
            A visual representation of my technical expertise and experience across different domains.
          </p>
        </div>

        <div className="glass-card p-6 md:p-8 overflow-hidden">
          <div className="mb-8 flex flex-wrap gap-3">
            {skillCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`px-4 py-2 rounded-full transition-all ${
                  index === activeCategory
                    ? 'bg-electric text-white'
                    : 'bg-dark-accent text-white/70 hover:text-white'
                } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${100 + index * 100}ms` }}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <div 
                  key={index}
                  className={`mb-5 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-electric">{skill.experience}</span>
                  </div>
                  <div className="w-full h-2 bg-dark-accent rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-electric to-violet rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: isVisible ? `${skill.proficiency}%` : '0%',
                        transitionDelay: `${300 + index * 100}ms`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className={`relative h-80 bg-dark-accent rounded-lg overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-64">
                  {/* Radar Chart Background */}
                  <div className="absolute inset-0 rounded-full border border-white/10"></div>
                  <div className="absolute inset-[15%] rounded-full border border-white/10"></div>
                  <div className="absolute inset-[30%] rounded-full border border-white/10"></div>
                  <div className="absolute inset-[45%] rounded-full border border-white/10"></div>
                  <div className="absolute inset-[60%] rounded-full border border-white/10"></div>
                  <div className="absolute inset-[75%] rounded-full border border-white/10"></div>
                  
                  {/* Axes */}
                  <div className="absolute top-0 left-1/2 bottom-0 -translate-x-1/2 w-px bg-white/10"></div>
                  <div className="absolute left-0 top-1/2 right-0 -translate-y-1/2 h-px bg-white/10"></div>
                  <div className="absolute top-0 left-0 bottom-0 right-0 rotate-45 w-px mx-auto bg-white/10"></div>
                  <div className="absolute top-0 left-0 bottom-0 right-0 -rotate-45 w-px mx-auto bg-white/10"></div>
                  
                  {/* Radar Chart Points */}
                  {skillCategories.map((category, index) => {
                    const angle = (index * (2 * Math.PI)) / skillCategories.length;
                    const avgProficiency = category.skills.reduce((sum, skill) => sum + skill.proficiency, 0) / category.skills.length;
                    const radius = (avgProficiency / 100) * 32;
                    const x = 32 + radius * Math.sin(angle);
                    const y = 32 - radius * Math.cos(angle);
                    
                    return (
                      <div
                        key={index}
                        className={`absolute w-3 h-3 rounded-full transition-all duration-1000 ${
                          activeCategory === index ? 'bg-electric' : 'bg-violet'
                        } ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
                        style={{ 
                          left: `${x}%`, 
                          top: `${y}%`,
                          transitionDelay: `${400 + index * 100}ms`,
                          transform: activeCategory === index ? 'scale(1.5)' : 'scale(1)',
                          boxShadow: activeCategory === index ? '0 0 10px rgba(30, 174, 219, 0.7)' : 'none',
                        }}
                      ></div>
                    );
                  })}
                  
                  {/* Radar Chart Lines */}
                  <svg className="absolute inset-0 w-full h-full" style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 1s ease-out', transitionDelay: '500ms' }}>
                    <polygon
                      points={skillCategories.map((category, index) => {
                        const angle = (index * (2 * Math.PI)) / skillCategories.length;
                        const avgProficiency = category.skills.reduce((sum, skill) => sum + skill.proficiency, 0) / category.skills.length;
                        const radius = (avgProficiency / 100) * 32;
                        const x = 32 + radius * Math.sin(angle);
                        const y = 32 - radius * Math.cos(angle);
                        return `${x},${y}`;
                      }).join(' ')}
                      fill="rgba(30, 174, 219, 0.1)"
                      stroke="rgba(30, 174, 219, 0.5)"
                      strokeWidth="1"
                    />
                  </svg>
                  
                  {/* Category Labels */}
                  {skillCategories.map((category, index) => {
                    const angle = (index * (2 * Math.PI)) / skillCategories.length;
                    const x = 32 + 35 * Math.sin(angle);
                    const y = 32 - 35 * Math.cos(angle);
                    
                    return (
                      <div
                        key={index}
                        className={`absolute text-xs font-medium transition-all duration-1000 ${
                          activeCategory === index ? 'text-electric' : 'text-white/70'
                        } ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                        style={{ 
                          left: `${x}%`, 
                          top: `${y}%`, 
                          transform: 'translate(-50%, -50%)',
                          transitionDelay: `${500 + index * 100}ms`,
                        }}
                      >
                        {category.name}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
