
import React, { useState, useEffect } from 'react';
import { Moon, Sun, Zap, Code } from 'lucide-react';

type ThemeOption = 'default' | 'chill' | 'neon' | 'hacker';

const ThemeCustomizer: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState<ThemeOption>('default');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Apply theme classes to document body
    document.body.classList.remove('theme-chill', 'theme-neon', 'theme-hacker');
    if (currentTheme !== 'default') {
      document.body.classList.add(`theme-${currentTheme}`);
    }
  }, [currentTheme]);

  return (
    <div className="fixed top-24 right-4 z-50">
      <div 
        className="glass-card p-3 cursor-pointer" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {currentTheme === 'default' && <Sun size={20} className="text-electric" />}
        {currentTheme === 'chill' && <Moon size={20} className="text-blue-400" />}
        {currentTheme === 'neon' && <Zap size={20} className="text-pink-500" />}
        {currentTheme === 'hacker' && <Code size={20} className="text-green-400" />}
      </div>
      
      {isOpen && (
        <div className="glass-card mt-2 p-3 animate-slide-down">
          <div className="text-sm text-white/90 mb-2 font-medium light-mode:text-gray-800">Choose a Vibe:</div>
          <div className="grid grid-cols-2 gap-2">
            <button 
              className={`theme-option p-2 rounded ${currentTheme === 'default' ? 'bg-electric/20 border border-electric' : 'hover:bg-white/5'}`}
              onClick={() => setCurrentTheme('default')}
            >
              <Sun size={18} className="mx-auto text-electric mb-1" />
              <span className="text-xs">Default</span>
            </button>
            <button 
              className={`theme-option p-2 rounded ${currentTheme === 'chill' ? 'bg-blue-400/20 border border-blue-400' : 'hover:bg-white/5'}`}
              onClick={() => setCurrentTheme('chill')}
            >
              <Moon size={18} className="mx-auto text-blue-400 mb-1" />
              <span className="text-xs">Chill 🧊</span>
            </button>
            <button 
              className={`theme-option p-2 rounded ${currentTheme === 'neon' ? 'bg-pink-500/20 border border-pink-500' : 'hover:bg-white/5'}`}
              onClick={() => setCurrentTheme('neon')}
            >
              <Zap size={18} className="mx-auto text-pink-500 mb-1" />
              <span className="text-xs">Neon ⚡</span>
            </button>
            <button 
              className={`theme-option p-2 rounded ${currentTheme === 'hacker' ? 'bg-green-400/20 border border-green-400' : 'hover:bg-white/5'}`}
              onClick={() => setCurrentTheme('hacker')}
            >
              <Code size={18} className="mx-auto text-green-400 mb-1" />
              <span className="text-xs">Hacker 💻</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeCustomizer;
