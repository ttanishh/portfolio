
import React, { useRef, useState, useEffect } from 'react';
import { Medal, Star, Award, Trophy, Badge, Lightbulb } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: 'academic' | 'project' | 'competition' | 'leadership';
  date: string;
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: "National Coding Hackathon Winner",
    description: "First place among 200+ teams with an AI-driven solution for healthcare access challenges.",
    icon: <Trophy className="text-yellow-400" />,
    category: 'competition',
    date: 'November 2023'
  },
  {
    id: 2,
    title: "Published Research Paper",
    description: "Co-authored a paper on optimized neural networks for edge devices in IEEE conference.",
    icon: <Badge className="text-sky-400" />,
    category: 'academic',
    date: 'March 2024'
  },
  {
    id: 3,
    title: "10,000+ GitHub Stars",
    description: "Open-source library for simplified blockchain integration has gained significant community adoption.",
    icon: <Star className="text-yellow-500" />,
    category: 'project',
    date: 'Ongoing'
  },
  {
    id: 4,
    title: "Dean's Merit List",
    description: "Top 5% academic performance for three consecutive semesters in Computer Science program.",
    icon: <Award className="text-violet" />,
    category: 'academic',
    date: '2022-2024'
  },
  {
    id: 5,
    title: "Coding Club President",
    description: "Led the university's largest technical club with 200+ active members and organized major events.",
    icon: <Medal className="text-orange-500" />,
    category: 'leadership',
    date: '2023-2024'
  },
  {
    id: 6,
    title: "Innovation Grant Recipient",
    description: "Secured $5,000 funding for developing an AI-powered accessibility solution for vision-impaired users.",
    icon: <Lightbulb className="text-electric" />,
    category: 'project',
    date: 'January 2024'
  }
];

const AchievementsSection: React.FC = () => {
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
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
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

  return (
    <section id="achievements" ref={sectionRef} className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center md:text-left">
            <span className="text-gradient">Recognition</span> & Achievements
          </h2>
          <p className="text-white/70 max-w-2xl mb-8 text-center md:text-left">
            Milestones that reflect my commitment to excellence and impact in the tech community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.id}
              ref={el => (itemRefs.current[index] = el)}
              data-id={index}
              className={`transition-all duration-700 ease-out delay-${index * 100} ${
                visibleElements[index]
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <Card className="glass-card h-full overflow-hidden border-none bg-transparent hover:shadow-[0_8px_20px_rgba(30,174,219,0.3)]">
                <CardContent className="p-6">
                  <div className="bg-dark-accent p-3 rounded-lg inline-flex mb-4">
                    {achievement.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                  
                  <p className="text-white/70 mb-4">{achievement.description}</p>
                  
                  <div className="flex justify-between items-center mt-auto">
                    <span className="bg-dark-accent px-3 py-1 rounded-full text-white/80 text-xs">
                      {achievement.category}
                    </span>
                    <span className="text-electric text-sm font-mono">{achievement.date}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-violet/10 rounded-full filter blur-[120px] z-0"></div>
      <div className="absolute bottom-1/4 left-0 w-48 h-48 bg-electric/10 rounded-full filter blur-[100px] z-0"></div>
    </section>
  );
};

export default AchievementsSection;
