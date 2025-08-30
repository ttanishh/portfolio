
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
    name: "Programming Languages",
    skills: [
      { name: "Python", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "JavaScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Java", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "C++", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "SQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "HTML5", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" }
    ]
  },
  {
    name: "Frameworks & Libraries",
    skills: [
      { name: "PyTorch", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
      { name: "SpringBoot", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
      { name: "React.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Node.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "FastAPI", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      { name: "Streamlit", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg" },
      { name: "Kafka", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" },
      { name: "Postman", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
      { name: "GitHub", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Docker", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Jenkins", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" }
    ]
  },
  {
    name: "Database Technologies",
    skills: [
      { name: "MySQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "NoSQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "MongoDB", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
    ]
  },
  {
    name: "Computer Science Fundamentals",
    skills: [
      { name: "Data Structures & Algorithms", image: "DSA" },
      { name: "Operating Systems", image: "OS" },
      { name: "Object-Oriented Programming", image: "OOPS" },
      { name: "System Design", image: "SD" },
      { name: "Database Management Systems", image: "DBMS" },
      { name: "Computer Networks", image: "CN" }
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
              className={`glass-card p-6 rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-electric/20 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'} ${category.name === "Computer Science Fundamentals" ? "md:col-span-2 lg:col-span-3" : ""}`}
              style={{ transitionDelay: `${300 + categoryIndex * 100}ms` }}
            >
              {/* Category Header */}
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2 text-electric">{category.name}</h3>
                <div className="w-12 h-1 bg-gradient-to-r from-electric to-violet rounded-full"></div>
              </div>

              {/* Skills Grid */}
              <div className={category.name === "Computer Science Fundamentals" ? "flex gap-3 justify-center w-full" : "grid grid-cols-2 gap-4"}>
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className={`flex flex-col items-center p-4 rounded-lg bg-dark-accent/30 hover:bg-dark-accent/50 transition-all duration-300 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    style={{ transitionDelay: `${400 + categoryIndex * 100 + skillIndex * 50}ms` }}
                  >
                    <div className={category.name === "Computer Science Fundamentals" ? "w-20 h-20 mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 bg-white/5 rounded-xl p-2 group-hover:bg-white/10" : "w-14 h-14 mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 bg-white/5 rounded-xl p-2 group-hover:bg-white/10"}>
                      {category.name === "Computer Science Fundamentals" ? (
                        <div className="w-full h-full bg-gradient-to-br from-electric to-violet rounded-lg flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                          {skill.image}
                        </div>
                      ) : (
                        <>
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
                        </>
                      )}
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


      </div>
    </section>
  );
};

export default TechStack;
