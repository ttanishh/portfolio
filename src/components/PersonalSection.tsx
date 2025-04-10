import React, { useState, useRef, useEffect } from 'react';
import { Book, PenLine, Activity, Dumbbell, Music } from 'lucide-react';

interface TabContent {
  id: string;
  label: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

const PersonalSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('read');
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

  const tabContent: TabContent[] = [
    {
      id: 'read',
      label: 'Read',
      icon: <Book size={20} />,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <BookCard 
            title="Clean Code" 
            author="Robert C. Martin"
            image="https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?q=80&w=400&auto=format"
            takeaway="Crafting maintainable code through consistent practices and thoughtful architecture."
            isVisible={isVisible}
            delay={200}
          />
          <BookCard 
            title="Designing Data-Intensive Applications"
            author="Martin Kleppmann"
            image="https://images.unsplash.com/photo-1654277041218-84424c78f0ae?q=80&w=400&auto=format"
            takeaway="Understanding the fundamental principles behind scalable data systems."
            isVisible={isVisible}
            delay={300}
          />
          <BookCard 
            title="Atomic Habits"
            author="James Clear"
            image="https://images.unsplash.com/photo-1594312915251-48db9280c8f1?q=80&w=400&auto=format"
            takeaway="Small improvements accumulate into remarkable results over time."
            isVisible={isVisible}
            delay={400}
          />
          <BookCard 
            title="AI Superpowers"
            author="Kai-Fu Lee"
            image="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=400&auto=format"
            takeaway="The global implications of AI and how it's reshaping industries and societies."
            isVisible={isVisible}
            delay={500}
          />
        </div>
      ),
    },
    {
      id: 'write',
      label: 'Write',
      icon: <PenLine size={20} />,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ArticleCard 
            title="Optimizing Neural Networks for Edge Devices"
            date="March 15, 2024"
            description="Exploring techniques to make neural networks run efficiently on resource-constrained devices."
            readTime="8 min read"
            link="#"
            isVisible={isVisible}
            delay={200}
          />
          <ArticleCard 
            title="The Future of Web3 Development"
            date="February 22, 2024"
            description="My thoughts on how blockchain technology will evolve and impact web development."
            readTime="6 min read"
            link="#"
            isVisible={isVisible}
            delay={300}
          />
          <ArticleCard 
            title="Building Scalable Microservices"
            date="January 10, 2024"
            description="Lessons learned from designing and implementing microservices architecture."
            readTime="10 min read"
            link="#"
            isVisible={isVisible}
            delay={400}
          />
          <ArticleCard 
            title="React Performance Optimization Techniques"
            date="December 5, 2023"
            description="Practical strategies to improve React application performance."
            readTime="7 min read"
            link="#"
            isVisible={isVisible}
            delay={500}
          />
        </div>
      ),
    },
    {
      id: 'play',
      label: 'Play',
      icon: <Activity size={20} />,
      content: (
        <div className="space-y-8">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Activity size={24} className="text-electric" />
              Cricket
            </h3>
            <div className="glass-card p-6">
              <p className="text-white/80 mb-4">
                My favorite sport - I've been playing cricket since childhood and currently play as a spin bowler
                for my college team. The strategic depth and team dynamics of cricket continue to fascinate me.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-dark-accent px-3 py-1 rounded-full text-sm">Team Player</span>
                <span className="bg-dark-accent px-3 py-1 rounded-full text-sm">Spin Bowler</span>
                <span className="bg-dark-accent px-3 py-1 rounded-full text-sm">Middle Order Batsman</span>
              </div>
            </div>
          </div>
          
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '300ms' }}>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Dumbbell size={24} className="text-violet" />
              Basketball
            </h3>
            <div className="glass-card p-6">
              <p className="text-white/80 mb-4">
                When I'm not on the cricket field, you might find me shooting hoops. Basketball helps me 
                stay active and provides a different kind of team experience compared to cricket.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-dark-accent px-3 py-1 rounded-full text-sm">Point Guard</span>
                <span className="bg-dark-accent px-3 py-1 rounded-full text-sm">3-Point Shooter</span>
              </div>
            </div>
          </div>
          
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '400ms' }}>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Music size={24} className="text-mint" />
              Music
            </h3>
            <div className="glass-card p-6">
              <p className="text-white/80 mb-4">
                I'm an amateur guitarist and enjoy playing classic rock tunes. Music offers me a creative outlet
                that balances my technical work and keeps my mind fresh.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-dark-accent px-3 py-1 rounded-full text-sm">Guitar</span>
                <span className="bg-dark-accent px-3 py-1 rounded-full text-sm">Classic Rock</span>
                <span className="bg-dark-accent px-3 py-1 rounded-full text-sm">Lo-fi</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center md:text-left">
            <span className="text-gradient">Beyond</span> The Code
          </h2>
          <p className="text-white/70 max-w-2xl mb-12 text-center md:text-left">
            There's more to me than just programming. Here's a glimpse into what I read, write, and how I play.
          </p>
        </div>

        <div className="glass-card p-6 md:p-8 overflow-hidden">
          <div className="flex flex-wrap gap-2 mb-8 bg-dark-accent p-1 rounded-lg">
            {tabContent.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${
                  activeTab === tab.id
                    ? 'bg-electric text-white'
                    : 'bg-transparent text-white/70 hover:text-white'
                } ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                style={{ transitionDelay: '100ms' }}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          <div className="min-h-[400px]">
            {tabContent.map((tab) => (
              <div
                key={tab.id}
                className={`transition-opacity duration-300 ${
                  activeTab === tab.id ? 'block opacity-100' : 'hidden opacity-0'
                }`}
              >
                {tab.content}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface BookCardProps {
  title: string;
  author: string;
  image: string;
  takeaway: string;
  isVisible: boolean;
  delay: number;
}

const BookCard: React.FC<BookCardProps> = ({ title, author, image, takeaway, isVisible, delay }) => {
  return (
    <div 
      className={`glass-card overflow-hidden transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`} 
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex flex-col h-full">
        <div className="h-40 overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <h4 className="text-lg font-bold mb-1">{title}</h4>
          <p className="text-white/70 text-sm mb-4">by {author}</p>
          <div className="mt-auto">
            <p className="text-sm text-white/60 mb-1">Key Takeaway:</p>
            <p className="text-electric italic text-sm">{takeaway}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ArticleCardProps {
  title: string;
  date: string;
  description: string;
  readTime: string;
  link: string;
  isVisible: boolean;
  delay: number;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ title, date, description, readTime, link, isVisible, delay }) => {
  return (
    <div 
      className={`glass-card p-5 flex flex-col h-full transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="mb-2 flex justify-between items-center">
        <span className="text-white/60 text-xs">{date}</span>
        <span className="bg-dark-accent px-2 py-1 rounded-full text-white/70 text-xs">{readTime}</span>
      </div>
      <h4 className="text-lg font-bold mb-3">{title}</h4>
      <p className="text-white/70 text-sm mb-4 flex-grow">{description}</p>
      <a 
        href={link} 
        className="text-electric hover:text-electric/80 text-sm font-medium transition-colors"
      >
        Read Article →
      </a>
    </div>
  );
};

export default PersonalSection;
