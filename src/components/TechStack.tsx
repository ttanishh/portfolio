
import React, { useState, useRef, useEffect } from 'react';

interface SkillCategory {
  name: string;
  skills: Skill[];
}

interface Skill {
  name: string;
  image: string;
}

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "React", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "TypeScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "Tailwind CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
      { name: "Vite", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" }
    ]
  },
  {
    name: "Backend & Database",
    skills: [
      { name: "Node.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Python", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Express", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "Firebase", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      { name: "PostgreSQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" }
    ]
  },
  {
    name: "AI / ML / Data",
    skills: [
      { name: "TensorFlow", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "PyTorch", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
      { name: "Scikit-Learn", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
      { name: "Pandas", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
      { name: "Jupyter", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" }
    ]
  },
  {
    name: "Blockchain & Web3",
    skills: [
      { name: "Solidity", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg" },
      { name: "Ethereum", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ethereum/ethereum-original.svg" },
      { name: "Truffle", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/truffle/truffle-original.svg" },
      { name: "Hardhat", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hardhat/hardhat-original.svg" },
      { name: "Web3.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/web3js/web3js-original.svg" }
    ]
  },
  {
    name: "DevOps & Cloud",
    skills: [
      { name: "Docker", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "AWS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
      { name: "Kubernetes", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
      { name: "Jenkins", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
      { name: "Vercel", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" }
    ]
  },
  {
    name: "Tools & Platforms",
    skills: [
      { name: "Git", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "VS Code", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Unity", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" },
      { name: "C#", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" }
    ]
  }
];

const TechStack: React.FC = () => {
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
      <div className="max-w-7xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center md:text-left">
            <span className="text-gradient">Tech Stack</span> Matrix
          </h2>
          <p className="text-white/70 max-w-2xl mb-12 text-center md:text-left">
            Technologies and tools I work with across different domains.
          </p>
        </div>

        {/* Category Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className={`glass-card p-6 rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-electric/20 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${300 + categoryIndex * 100}ms` }}
            >
              {/* Category Header */}
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2 text-electric">{category.name}</h3>
                <div className="w-12 h-1 bg-gradient-to-r from-electric to-violet rounded-full"></div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className={`flex flex-col items-center p-4 rounded-lg bg-dark-accent/30 hover:bg-dark-accent/50 transition-all duration-300 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    style={{ transitionDelay: `${400 + categoryIndex * 100 + skillIndex * 50}ms` }}
                  >
                    <div className="w-14 h-14 mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 bg-white/5 rounded-xl p-2 group-hover:bg-white/10">
                      <img 
                        src={skill.image} 
                        alt={skill.name}
                        className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-all duration-300"
                        onError={(e) => {
                          // Fallback for missing images
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      <div className="hidden w-full h-full bg-gradient-to-br from-electric to-violet rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {skill.name.charAt(0)}
                      </div>
                    </div>
                    <span className="text-sm font-medium text-white/90 text-center group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* All Technologies Overview */}
        <div className={`mt-12 glass-card p-6 md:p-8 rounded-xl transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl font-bold mb-6 text-center text-electric">All Technologies</h3>
          
          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-4">
            {skillCategories.flatMap(category => category.skills).map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-3 rounded-lg bg-dark-accent/30 hover:bg-dark-accent/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 mb-2 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 bg-white/5 rounded-lg p-2 group-hover:bg-white/10">
                  <img 
                    src={skill.image} 
                    alt={skill.name}
                    className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-all duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden w-full h-full bg-gradient-to-br from-electric to-violet rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {skill.name.charAt(0)}
                  </div>
                </div>
                <span className="text-xs font-medium text-white/80 text-center group-hover:text-white transition-colors">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
