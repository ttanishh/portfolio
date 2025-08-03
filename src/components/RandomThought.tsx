
import React, { useState, useEffect } from 'react';
import { Brain, Send, RefreshCw, Heart, Lightbulb, Sparkles, Quote, BookOpen, Zap, Coffee } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const thoughts = [
  "Every time I learn something hard, I feel 1% more powerful.",
  "Today's bug was fixed by taking a walk.",
  "Does AI feel things? Asking for my model.",
  "The best code is the one you don't have to write.",
  "Sometimes I debug in my dreams. Is that normal?",
  "Found a 3-year-old TODO comment in my code today. Still relevant.",
  "Writing clean code is like doing the dishes - future you will thank you.",
  "The hardest part of programming? Naming things.",
  "If it works on the first try, be very suspicious.",
  "Code is read more than it's written. Make it readable.",
  "Rubber duck debugging: because sometimes you need to explain it to a friend.",
  "Coffee: the fuel that powers the internet.",
  "Version control is time travel for code.",
  "The best feature is the one users don't notice working.",
  "Premature optimization is the root of all evil.",
  "There are only two hard things: cache invalidation and naming things.",
  "Code without tests is legacy code the moment it's written.",
  "Documentation is a love letter to your future self.",
  "Every expert was once a beginner who refused to give up.",
  "The computer was born to solve problems that did not exist before.",
  "Sometimes the best debugging tool is a good night's sleep.",
  "Git commit messages are like text messages to your future self.",
  "The most dangerous phrase in programming: 'It works on my machine.'",
  "Stack Overflow: where developers go to confess their sins.",
  "Code reviews are like having someone proofread your diary.",
  "The best code is self-documenting, but comments are still your friend.",
  "Technical debt is like credit card debt - it compounds over time.",
  "Pair programming: two heads are better than one, especially when debugging.",
  "The internet is just a series of tubes, and we're the plumbers.",
  "Every bug is a feature waiting to be discovered.",
  "The best developers are lazy developers - they automate everything.",
  "Code is like humor. When you have to explain it, it's bad.",
  "The only constant in programming is change.",
  "Debugging is twice as hard as writing the code in the first place.",
  "If you can't explain it simply, you don't understand it well enough."
];

const thoughtCategories = [
  { icon: Brain, label: "Deep Thoughts", color: "text-electric", bgColor: "from-electric to-violet" },
  { icon: Lightbulb, label: "Insights", color: "text-violet", bgColor: "from-violet to-mint" },
  { icon: Sparkles, label: "Inspiration", color: "text-mint", bgColor: "from-mint to-electric" },
  { icon: BookOpen, label: "Wisdom", color: "text-electric", bgColor: "from-electric to-mint" },
  { icon: Zap, label: "Energy", color: "text-violet", bgColor: "from-violet to-electric" },
  { icon: Coffee, label: "Fuel", color: "text-mint", bgColor: "from-mint to-violet" },
];

const EnhancedRandomThought: React.FC = () => {
  const [userThought, setUserThought] = useState('');
  const [currentThought, setCurrentThought] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  const [liked, setLiked] = useState(false);
  const [sharedThoughts, setSharedThoughts] = useState<string[]>([]);
  const [thoughtIndex, setThoughtIndex] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [thoughtHistory, setThoughtHistory] = useState<number[]>([]);
  const { toast } = useToast();
  
  // Initialize with first thought
  useEffect(() => {
    setCurrentThought(thoughts[0]);
  }, []);
  
  const showNotification = (message: string, type: 'success' | 'info' = 'success') => {
    toast({
      title: message,
      description: type === 'success' ? "Thanks for sharing!" : "Keep the thoughts flowing!",
    });
  };
  
  const getNewThought = () => {
    setIsAnimating(true);
    setLiked(false);
    
    setTimeout(() => {
      let newIndex;
      let attempts = 0;
      const maxAttempts = 10;
      
      do {
        newIndex = Math.floor(Math.random() * thoughts.length);
        attempts++;
      } while (
        (newIndex === thoughtIndex && thoughts.length > 1) || 
        thoughtHistory.includes(newIndex) && attempts < maxAttempts
      );
      
      setThoughtIndex(newIndex);
      setCurrentThought(thoughts[newIndex]);
      setThoughtHistory(prev => [...prev.slice(-4), newIndex]); // Keep last 5 thoughts
      setIsAnimating(false);
      
      // Show confetti for special thoughts
      if (newIndex % 7 === 0) {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 2000);
      }
    }, 300);
  };
  
  const handleShareThought = (e: React.FormEvent) => {
    e.preventDefault();
    if (userThought.trim()) {
      setSharedThoughts(prev => [userThought.trim(), ...prev.slice(0, 4)]); // Keep last 5 shared thoughts
      showNotification("Thanks for sharing your thought! 💭");
      setUserThought('');
    }
  };
  
  const handleLike = () => {
    setLiked(!liked);
    if (!liked) {
      showNotification("Thought appreciated! ❤️");
    }
  };
  
  const handleCopyThought = () => {
    navigator.clipboard.writeText(currentThought);
    showNotification("Thought copied to clipboard! 📋", 'info');
  };
  
  const currentCategory = thoughtCategories[thoughtIndex % thoughtCategories.length];
  const CategoryIcon = currentCategory.icon;
  
  return (
    <div className="relative max-w-3xl mx-auto my-8">
              {/* Confetti Effect */}
        {showConfetti && (
          <div className="fixed inset-0 pointer-events-none z-50">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-bounce"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${2 + Math.random() * 2}s`,
                }}
              >
                <Sparkles className="text-mint" size={16} />
              </div>
            ))}
          </div>
        )}
      
      {/* Main Card */}
      <div className="glass-card backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-electric via-violet to-mint animate-pulse"></div>
        </div>
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6 relative z-10">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-full bg-gradient-to-r ${currentCategory.bgColor} ${isAnimating ? 'animate-spin' : 'animate-pulse'}`}>
              <CategoryIcon className="text-white" size={24} />
            </div>
            <div>
              <h3 className="font-bold text-xl text-white light-mode:text-gray-800">Thought Generator</h3>
              <div className="flex items-center gap-2">
                <span className={`text-sm ${currentCategory.color} font-medium`}>
                  {currentCategory.label}
                </span>
                <span className="text-xs text-white/50 light-mode:text-gray-500">
                  • {thoughts.length} thoughts available
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex gap-2">
            <button 
              onClick={handleCopyThought}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 group"
              title="Copy thought"
            >
              <BookOpen className="text-white group-hover:text-electric transition-colors" size={20} />
            </button>
            <button 
              onClick={getNewThought}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 group"
              disabled={isAnimating}
              title="New thought"
            >
              <RefreshCw 
                className={`text-white group-hover:text-violet transition-colors ${isAnimating ? 'animate-spin' : ''}`} 
                size={20} 
              />
            </button>
          </div>
        </div>
        
        {/* Quote Section */}
        <div className={`relative mb-6 transition-all duration-300 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          <Quote className="text-electric mb-2" size={24} />
          <blockquote className="text-lg text-white/90 light-mode:text-gray-700 font-light leading-relaxed pl-6 border-l-4 border-gradient-to-b from-electric to-violet bg-gradient-to-r from-electric/10 to-violet/10 rounded-r-lg p-4 cursor-pointer hover:bg-gradient-to-r hover:from-electric/20 hover:to-violet/20 transition-all duration-300" onClick={handleCopyThought}>
            "{currentThought}"
          </blockquote>
          
          {/* Action Buttons */}
          <div className="flex justify-between items-center mt-3">
            <div className="text-xs text-white/50 light-mode:text-gray-500">
              Thought #{thoughtIndex + 1} of {thoughts.length}
            </div>
            <button
              onClick={handleLike}
              className={`flex items-center gap-2 px-3 py-1 rounded-full transition-all duration-300 ${
                liked 
                  ? 'bg-red-500 text-white' 
                  : 'bg-white/10 text-white/70 hover:bg-white/20 light-mode:bg-gray-100 light-mode:text-gray-700'
              }`}
            >
              <Heart 
                className={`transition-all duration-300 ${liked ? 'fill-current animate-bounce' : ''}`} 
                size={16} 
              />
              <span className="text-sm">{liked ? 'Loved it!' : 'Like'}</span>
            </button>
          </div>
        </div>
        
        {/* Share Section */}
        <div className="space-y-4 relative z-10">
          <div className="text-sm text-white/70 light-mode:text-gray-600 flex items-center gap-2">
            <Sparkles size={16} className="text-mint" />
            Share your own thought:
          </div>
          <form onSubmit={handleShareThought} className="flex gap-3">
            <input 
              type="text" 
              value={userThought}
              onChange={(e) => setUserThought(e.target.value)}
              placeholder="I think coding is like..."
              className="flex-grow bg-white/10 backdrop-blur rounded-xl px-4 py-3 text-white placeholder-white/50 border border-white/20 focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/20 transition-all duration-300 light-mode:bg-gray-100 light-mode:text-gray-800 light-mode:placeholder-gray-500 light-mode:border-gray-200"
            />
            <button 
              type="submit"
              className="bg-gradient-to-r from-electric to-violet hover:from-electric/90 hover:to-violet/90 text-white px-6 py-3 rounded-xl flex items-center gap-2 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg"
              disabled={!userThought.trim()}
            >
              <Send size={16} />
              <span className="hidden sm:inline font-medium">Share</span>
            </button>
          </form>
        </div>
        
        {/* Shared Thoughts */}
        {sharedThoughts.length > 0 && (
          <div className="mt-6 space-y-3 relative z-10">
                      <div className="text-sm text-white/70 light-mode:text-gray-600 flex items-center gap-2">
            <Brain size={16} className="text-electric" />
            Recent thoughts from the community:
          </div>
            <div className="max-h-48 overflow-y-auto space-y-2">
              {sharedThoughts.map((thought, index) => (
                <div 
                  key={index}
                  className="bg-white/5 backdrop-blur rounded-lg p-3 border border-white/10 animate-fade-in light-mode:bg-gray-50 light-mode:border-gray-200"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <p className="text-white/80 light-mode:text-gray-700 text-sm italic">"{thought}"</p>
                  <div className="text-xs text-white/50 light-mode:text-gray-500 mt-1">
                    Shared {index === 0 ? 'just now' : `${index + 1} thoughts ago`}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Thought History */}
        {thoughtHistory.length > 0 && (
          <div className="mt-4 pt-4 border-t border-white/10 light-mode:border-gray-200">
            <div className="text-xs text-white/50 light-mode:text-gray-500 flex items-center gap-2 mb-2">
              <BookOpen size={12} />
              Recent thoughts seen: {thoughtHistory.length}
            </div>
                          <div className="flex gap-1">
                {thoughtHistory.slice(-5).map((index, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full bg-gradient-to-r from-electric to-violet opacity-60"
                    title={`Thought #${index + 1}`}
                  />
                ))}
              </div>
          </div>
        )}
        

      </div>
      
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default EnhancedRandomThought;
