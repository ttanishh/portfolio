
import React, { useState } from 'react';
import { Brain, Send } from 'lucide-react';
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
  "Code is read more than it's written. Make it readable."
];

const RandomThought: React.FC = () => {
  const [userThought, setUserThought] = useState('');
  const { toast } = useToast();
  
  // Get a random thought
  const randomIndex = Math.floor(Math.random() * thoughts.length);
  const randomThought = thoughts[randomIndex];
  
  const handleShareThought = (e: React.FormEvent) => {
    e.preventDefault();
    if (userThought.trim()) {
      toast({
        title: "Thanks for sharing your thought!",
        description: "Your perspective is valuable and appreciated.",
      });
      setUserThought('');
    }
  };
  
  return (
    <div className="glass-card p-5 max-w-xl mx-auto my-8">
      <div className="flex items-start gap-3 mb-4">
        <Brain className="text-electric flex-shrink-0 mt-1" size={24} />
        <div>
          <h3 className="font-medium text-lg mb-1 light-mode:text-gray-800">Random Thought</h3>
          <blockquote className="pl-3 border-l-2 border-electric/50 italic text-white/80 light-mode:text-gray-700">
            "{randomThought}"
          </blockquote>
        </div>
      </div>
      
      <form onSubmit={handleShareThought} className="mt-5">
        <div className="text-sm text-white/70 mb-2 light-mode:text-gray-700">Share your thought too:</div>
        <div className="flex gap-2">
          <input 
            type="text" 
            value={userThought}
            onChange={(e) => setUserThought(e.target.value)}
            placeholder="I think coding is like..."
            className="flex-grow bg-dark-accent rounded px-3 py-2 text-white/90 border border-white/10 focus:border-electric focus:outline-none transition-colors light-mode:bg-gray-100 light-mode:text-gray-800 light-mode:border-gray-200" 
          />
          <button 
            type="submit" 
            className="bg-electric hover:bg-electric/80 text-white px-3 py-2 rounded flex items-center gap-1 transition-colors"
            disabled={!userThought.trim()}
          >
            <Send size={16} />
            <span className="hidden sm:inline">Share</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default RandomThought;
