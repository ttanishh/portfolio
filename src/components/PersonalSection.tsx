import React, { useState, useRef, useEffect } from 'react';
import { Book, Activity, Mic } from 'lucide-react';
import beforeYourMemoryFades from '../assets/books/beforeYourMemoryFades.webp';
import darkMatter from '../assets/books/darkmatter.jpg';
import doEpicShit from '../assets/books/doepicshit.avif';
import shoeDog from '../assets/books/shoedog.jpg';
import surroundedByIdiots from '../assets/books/surroundedByIdiots.jpg';
import theoryOfSuspicion from '../assets/books/theory of suspicion.png';
import winningInDigitalAge from '../assets/books/winning in the digital age.jpeg';
import rohanImage from '../assets/books/rohan.jpg';
import sp1 from '../assets/stage presence/sp1.jpg';
import sp2 from '../assets/stage presence/sp2.jpg';
import sp3 from '../assets/stage presence/sp3.jpg';
import sp4 from '../assets/stage presence/sp4.jpg';
import sp5 from '../assets/stage presence/sp5.jpg';
import sp6 from '../assets/stage presence/sp6.jpg';
import sportsImage from '../assets/sports.jpg';

const PersonalSection: React.FC = () => {
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

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            <span className="text-gradient">Beyond</span> The Code
          </h2>
          <p className="text-white/70 max-w-2xl mb-16 text-center mx-auto">
            I'm more than just a developer. I build systems, mentor minds, speak on ideas, and challenge myself beyond screens.
          </p>
        </div>

        {/* Organized Grid Layout */}
        <div className={`space-y-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          
          {/* Books Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-electric mb-6 text-center">📚 My Favorite Reads</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <BookCard 
                title="Before Your Memory Fades" 
                author="Toshikazu Kawaguchi"
                image={beforeYourMemoryFades}
                takeaway="A touching novel about reconnecting with lost loved ones through a mystical café. Explores grief, longing, and the importance of cherishing the present."
                isVisible={isVisible}
                delay={200}
              />

              <BookCard 
                title="Dark Matter"
                author="Blake Crouch"
                image={darkMatter}
                takeaway="A mind-bending science-fiction thriller about quantum theory, identity, and destiny. Follows a physics professor navigating multiverses to return to his family."
                isVisible={isVisible}
                delay={300}
              />

              <BookCard 
                title="Do Epic Shit"
                author="Ankur Warikoo"
                image={doEpicShit}
                takeaway="Lessons from ups and downs emphasizing that epic achievements stem from action, curiosity, and persistence. Encourages embracing failures and finding purpose."
                isVisible={isVisible}
                delay={400}
              />

              <BookCard 
                title="Shoe Dog"
                author="Phil Knight"
                image={shoeDog}
                takeaway="Nike co-founder's candid memoir about building a global brand from selling shoes out of a car. Spotlights entrepreneurship, passion, and the unpredictable path to greatness."
                isVisible={isVisible}
                delay={500}
              />

              <BookCard 
                title="Surrounded by Idiots"
                author="Thomas Erikson"
                image={surroundedByIdiots}
                takeaway="Explores four personality types using the DISA model to explain human behavior and communication. Offers insights on understanding and adapting to different people."
                isVisible={isVisible}
                delay={600}
              />

              <BookCard 
                title="Theory of Suspicion"
                author="Kirit Panwala"
                image={theoryOfSuspicion}
                takeaway="Judge Raj Deshmukh formulates a provocative doctrine on suspicion, exploring its impact on justice and society. Analyzes historical and psychological roots of suspicion."
                isVisible={isVisible}
                delay={700}
              />

              <BookCard 
                title="Winning in the Digital Age"
                author="Nitin Seth"
                image={winningInDigitalAge}
                takeaway="A roadmap for personal and corporate success amid digital transformation. Details seven 'building blocks' to master for thriving in the digital era."
                isVisible={isVisible}
                delay={800}
              />

              <AuthorMeetingCard 
                title="Meeting with Author"
                author="Rohan Panwala"
                image={rohanImage}
                takeaway="Had the privilege of meeting with Rohan Panwala, discussing the Theory of Suspicion and its implications on modern justice and social dynamics."
                isVisible={isVisible}
                delay={900}
              />
            </div>
          </div>

          {/* Stage Presence Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-electric mb-6 text-center">🎤 Stage Presence</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <StageCard 
                title="Public Speaking"
                description="Delivering engaging tech talks and presentations on emerging technologies, system design, and innovation."
                image={sp5}
                isVisible={isVisible}
                delay={1000}
              />


              <StageCard 
                title="Speech Delivery"
                description="Crafting and delivering compelling speeches that inspire and motivate audiences across different platforms and events."
                image={sp3}
                isVisible={isVisible}
                delay={1200}
              />

              <StageCard 
                title="Tech Presentations"
                description="Presenting complex technical concepts with clarity and enthusiasm, making technology accessible to diverse audiences."
                image={sp1}
                isVisible={isVisible}
                delay={1300}
              />

              <StageCard 
                title="Event Hosting"
                description="Leading events with energy and professionalism, ensuring smooth flow and engaging audience participation."
                image={sp4}
                isVisible={isVisible}
                delay={1400}
              />

              <StageCard 
                title="Community Speaking"
                description="Sharing knowledge and experiences with the community through various speaking engagements and workshops."
                image={sp2}
                isVisible={isVisible}
                delay={1500}
              />
            </div>
          </div>

          {/* Sports Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-electric mb-6 text-center">⚽ Sports & Athletics</h3>
            <div className="mb-8">
              <div className="relative h-64 md:h-80 overflow-hidden rounded-2xl">
                <img 
                  src={sportsImage} 
                  alt="Sports and Athletics"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h4 className="text-2xl font-bold text-white mb-2">Passionate About Sports</h4>
                  <p className="text-white/90 text-sm">From cricket fields to football grounds, athletics tracks to pickleball courts</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <SportsCard 
                title="Cricket"
                description="My favorite sport since childhood. I play as a spin bowler and middle-order batsman. The strategic depth and team dynamics continue to fascinate me."
                symbol="🏏"
                tags={["Spin Bowler", "Middle-order Batsman", "Team Strategy"]}
                isVisible={isVisible}
                delay={1600}
              />

              <SportsCard 
                title="Football"
                description="When I'm not on the cricket field, you'll find me playing football. It keeps me agile and provides a different kind of team experience."
                symbol="⚽"
                tags={["Midfielder", "Team Sport", "Fitness"]}
                isVisible={isVisible}
                delay={1700}
              />

              <SportsCard 
                title="Pickleball"
                description="A newer addition to my sports repertoire. This fast-paced paddle sport combines elements of tennis, badminton, and table tennis."
                symbol="🏓"
                tags={["Paddle Sport", "Fast-paced", "Strategy"]}
                isVisible={isVisible}
                delay={1800}
              />

              <SportsCard 
                title="Athletics"
                description="Track and field activities that keep me in peak physical condition and improve my overall athletic performance."
                symbol="🏃"
                tags={["Track & Field", "Fitness", "Performance"]}
                isVisible={isVisible}
                delay={1900}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Book Card Component
interface BookCardProps {
  title: string;
  author: string;
  image: string;
  takeaway: string;
  isVisible: boolean;
  delay: number;
}

const BookCard: React.FC<BookCardProps> = ({ title, author, image, takeaway, isVisible, delay }) => (
  <div 
    className={`glass-card overflow-hidden transition-all duration-700 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className="relative h-48 overflow-hidden">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      <div className="absolute bottom-4 left-4 right-4">
        <div className="flex items-center gap-2 mb-2">
          <Book size={16} className="text-electric" />
          <span className="text-white/80 text-sm font-medium">Book</span>
        </div>
        <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
        <p className="text-white/80 text-sm">by {author}</p>
      </div>
    </div>
    <div className="p-5">
      <p className="text-white/70 text-sm leading-relaxed">{takeaway}</p>
    </div>
  </div>
);

// Author Meeting Card Component
interface AuthorMeetingCardProps {
  title: string;
  author: string;
  image: string;
  takeaway: string;
  isVisible: boolean;
  delay: number;
}

const AuthorMeetingCard: React.FC<AuthorMeetingCardProps> = ({ title, author, image, takeaway, isVisible, delay }) => (
  <div 
    className={`glass-card overflow-hidden transition-all duration-700 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className="relative h-48 overflow-hidden">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      <div className="absolute bottom-4 left-4 right-4">
        <div className="flex items-center gap-2 mb-2">
          <Mic size={16} className="text-violet" />
          <span className="text-white/80 text-sm font-medium">Author Meeting</span>
        </div>
        <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
        <p className="text-white/80 text-sm">with {author}</p>
      </div>
    </div>
    <div className="p-5">
      <p className="text-white/70 text-sm leading-relaxed">{takeaway}</p>
    </div>
  </div>
);

// Stage Card Component
interface StageCardProps {
  title: string;
  description: string;
  image: string;
  isVisible: boolean;
  delay: number;
}

const StageCard: React.FC<StageCardProps> = ({ title, description, image, isVisible, delay }) => (
  <div 
    className={`glass-card overflow-hidden transition-all duration-700 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className="relative h-48 overflow-hidden">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      <div className="absolute bottom-4 left-4 right-4">
        <div className="flex items-center gap-2 mb-2">
          <Mic size={16} className="text-violet" />
          <span className="text-white/80 text-sm font-medium">Stage Presence</span>
        </div>
        <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
      </div>
    </div>
    <div className="p-5">
      <p className="text-white/70 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

// Sports Card Component
interface SportsCardProps {
  title: string;
  description: string;
  symbol: string;
  tags: string[];
  isVisible: boolean;
  delay: number;
}

const SportsCard: React.FC<SportsCardProps> = ({ title, description, symbol, tags, isVisible, delay }) => (
  <div 
    className={`glass-card p-6 transition-all duration-700 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="text-4xl">{symbol}</div>
      <div>
        <div className="flex items-center gap-2 mb-1">
          <Activity size={16} className="text-green-400" />
          <span className="text-white/80 text-sm font-medium">Sports</span>
        </div>
        <h3 className="text-lg font-bold text-white">{title}</h3>
      </div>
    </div>
    <div className="mb-4">
      <p className="text-white/70 text-sm leading-relaxed">{description}</p>
    </div>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <span 
          key={index}
          className="bg-dark-accent px-3 py-1 rounded-full text-white/80 text-xs font-medium"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);



export default PersonalSection;

