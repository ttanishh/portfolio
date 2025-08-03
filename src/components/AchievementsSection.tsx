
import React, { useRef, useState, useEffect } from 'react';
import { Medal, Star, Award, Trophy, Badge, Lightbulb, X, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface Achievement {
  id: number;
  title: string;
  description: string;
  detailedDescription: string;
  icon: React.ReactNode;
  category: 'academic' | 'project' | 'competition' | 'leadership';
  date: string;
  technologies?: string[];
  impact?: string;
  link?: string;
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: "Capture The Flag - Cybersecurity Competition",
    description: "Top 7 among 50+ teams. Solved challenges in cryptography, reverse engineering, web security, and forensics.",
    detailedDescription: "Participated in a comprehensive cybersecurity competition where I demonstrated expertise across multiple domains. Successfully solved complex challenges involving cryptographic algorithms, reverse engineering of binary files, web application security vulnerabilities, and digital forensics analysis. The competition tested both theoretical knowledge and practical skills in a time-pressured environment.",
    icon: <Trophy className="text-yellow-400" />,
    category: 'competition',
    date: '2025',
    technologies: ['Cryptography', 'Reverse Engineering', 'Web Security', 'Digital Forensics', 'Binary Analysis'],
    impact: 'Demonstrated advanced cybersecurity skills and problem-solving abilities in a competitive environment.'
  },
  {
    id: 2,
    title: "Odoo x Mindbend Hackathon Finalist",
    description: "Built a crime-reporting platform, KAVACH with map UI, ML-based incident analysis, and Blockchain-backed data integrity.",
    detailedDescription: "Developed KAVACH, a comprehensive crime-reporting platform that integrates multiple cutting-edge technologies. The system features real-time location tracking, machine learning-based incident classification, blockchain-verified data integrity, and an intuitive map-based user interface. The project addresses critical challenges in public safety and emergency response systems.",
    icon: <Badge className="text-sky-400" />,
    category: 'project',
    date: '2025',
    technologies: ['React', 'Next.js', 'Firebase', 'Solidity', 'Machine Learning', 'Google Maps API', 'IPFS'],
    impact: 'Created a scalable solution for crime reporting with potential for real-world deployment in law enforcement.',
    link: 'https://kavach-demo.vercel.app'
  },
  {
    id: 3,
    title: "Mindbend Webathon 3rd Place",
    description: "3rd place among 50+ teams. Developed an AR-based Android app for open innovation.",
    detailedDescription: "Created an innovative Augmented Reality application that combines card recognition technology with interior design visualization. The app allows users to scan ID cards for secure verification and visualize furniture placement in real-world spaces using AR technology. This dual-purpose application showcases both security and lifestyle innovation.",
    icon: <Star className="text-yellow-500" />,
    category: 'competition',
    date: '2024',
    technologies: ['Unity', 'C#', 'Vuforia', 'AR Foundation', 'Android Development', 'Image Recognition'],
    impact: 'Demonstrated practical applications of AR technology in both security and lifestyle domains.'
  },
  {
    id: 4,
    title: "GDSC Hack The Tank",
    description: "Created a food-ordering app for Zorko and Co.; qualified for finals.",
    detailedDescription: "Developed a comprehensive food-ordering application for Zorko and Co., featuring user authentication, menu management, order tracking, and payment integration. The app streamlines the ordering process and enhances customer experience while providing restaurant owners with efficient order management tools.",
    icon: <Award className="text-violet" />,
    category: 'project',
    date: '2024',
    technologies: ['React Native', 'Firebase', 'Node.js', 'Payment Gateway', 'Real-time Updates'],
    impact: 'Created a functional solution that addresses real business needs in the food service industry.'
  },
  {
    id: 5,
    title: "GDSC Ideathon 1st Place",
    description: "1st place in problem track among 20 teams.",
    detailedDescription: "Won first place in the problem-solving track by presenting an innovative solution to a complex technical challenge. The project demonstrated creative thinking, technical expertise, and the ability to communicate complex ideas effectively to judges and peers.",
    icon: <Medal className="text-orange-500" />,
    category: 'competition',
    date: '2024',
    technologies: ['Problem Solving', 'Technical Communication', 'Innovation'],
    impact: 'Recognized for exceptional problem-solving skills and innovative thinking in a competitive environment.'
  },
  {
    id: 6,
    title: "AR Innovation Excellence",
    description: "Demonstrated expertise in Augmented Reality with card recognition and furnish applications at Mindbend 2024.",
    detailedDescription: "Showcased advanced AR capabilities through two distinct applications: an ID card reader for secure document verification and a furniture visualization tool for interior design. Both applications leverage computer vision and AR technology to solve real-world problems in security and lifestyle domains.",
    icon: <Lightbulb className="text-electric" />,
    category: 'project',
    date: '2024',
    technologies: ['Unity', 'C#', 'Computer Vision', 'AR Foundation', 'OCR', '3D Modeling'],
    impact: 'Demonstrated practical applications of AR technology with potential for commercial deployment.'
  }
];

const AchievementsSection: React.FC = () => {
  const [visibleElements, setVisibleElements] = useState<{ [key: number]: boolean }>({});
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const openModal = (achievement: Achievement) => {
    setSelectedAchievement(achievement);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAchievement(null);
  };

  // Group achievements by category
  const groupedAchievements = achievements.reduce((acc, achievement) => {
    if (!acc[achievement.category]) {
      acc[achievement.category] = [];
    }
    acc[achievement.category].push(achievement);
    return acc;
  }, {} as Record<string, Achievement[]>);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'competition':
        return <Trophy className="text-yellow-400" size={20} />;
      case 'project':
        return <Badge className="text-sky-400" size={20} />;
      case 'academic':
        return <Star className="text-yellow-500" size={20} />;
      case 'leadership':
        return <Medal className="text-orange-500" size={20} />;
      default:
        return <Award className="text-violet" size={20} />;
    }
  };

  const getCategoryTitle = (category: string) => {
    switch (category) {
      case 'competition':
        return '🏆 Competition Wins';
      case 'project':
        return '🚀 Project Excellence';
      case 'academic':
        return '📚 Academic Achievements';
      case 'leadership':
        return '👑 Leadership & Recognition';
      default:
        return '🏅 Achievements';
    }
  };

  return (
    <section id="achievements" ref={sectionRef} className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center md:text-left">
            <span className="text-gradient">Recognition</span> & Achievements
          </h2>
          <p className="text-white/70 max-w-2xl mb-8 text-center md:text-left">
            Milestones that reflect my commitment to excellence and impact in the tech community.
          </p>
        </div>

        {/* Organized Achievement Sections */}
        <div className="space-y-12">
          {Object.entries(groupedAchievements).map(([category, categoryAchievements], categoryIndex) => (
            <div key={category} className="space-y-6">
              <h3 className="text-2xl font-bold text-electric mb-6 text-center md:text-left">
                {getCategoryTitle(category)}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryAchievements.map((achievement, index) => (
                  <div
                    key={achievement.id}
                    ref={el => (itemRefs.current[achievement.id] = el)}
                    data-id={achievement.id}
                    className={`transition-all duration-700 ease-out delay-${index * 100} ${
                      visibleElements[achievement.id]
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-10'
                    }`}
                  >
                    <Card className="glass-card h-full overflow-hidden border-none bg-transparent hover:shadow-[0_8px_20px_rgba(30,174,219,0.3)] hover:scale-105 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="bg-dark-accent p-3 rounded-xl inline-flex mb-4">
                          {achievement.icon}
                        </div>
                        
                        <h3 className="text-xl font-bold mb-3 text-white">{achievement.title}</h3>
                        
                        <p className="text-white/70 mb-4 leading-relaxed">{achievement.description}</p>
                        
                        <div className="flex justify-between items-center mb-4">
                          <span className="bg-dark-accent px-3 py-1 rounded-full text-white/80 text-xs font-medium">
                            {achievement.category}
                          </span>
                          <span className="text-electric text-sm font-mono">{achievement.date}</span>
                        </div>

                        <button
                          onClick={() => openModal(achievement)}
                          className="w-full bg-electric/10 hover:bg-electric/20 text-electric font-medium py-3 px-4 rounded-lg transition-all duration-300 hover:scale-105"
                        >
                          View Details
                        </button>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Modal */}
      {isModalOpen && selectedAchievement && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-dark/95 border border-electric/20 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className="bg-dark-accent p-3 rounded-xl">
                    {selectedAchievement.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{selectedAchievement.title}</h3>
                    <p className="text-electric text-sm font-mono">{selectedAchievement.date}</p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-electric mb-2">Description</h4>
                  <p className="text-white/80 leading-relaxed">{selectedAchievement.detailedDescription}</p>
                </div>

                {selectedAchievement.technologies && (
                  <div>
                    <h4 className="text-lg font-semibold text-electric mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedAchievement.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-dark-accent px-3 py-1 rounded-full text-white/80 text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {selectedAchievement.impact && (
                  <div>
                    <h4 className="text-lg font-semibold text-electric mb-2">Impact</h4>
                    <p className="text-white/80 leading-relaxed">{selectedAchievement.impact}</p>
                  </div>
                )}

                {selectedAchievement.link && (
                  <div>
                    <h4 className="text-lg font-semibold text-electric mb-2">Project Link</h4>
                    <a
                      href={selectedAchievement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-electric/10 hover:bg-electric/20 text-electric font-medium py-2 px-4 rounded-lg transition-all duration-300"
                    >
                      View Project
                      <ExternalLink size={16} />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-violet/10 rounded-full filter blur-[120px] z-0"></div>
      <div className="absolute bottom-1/4 left-0 w-48 h-48 bg-electric/10 rounded-full filter blur-[100px] z-0"></div>
    </section>
  );
};

export default AchievementsSection;
