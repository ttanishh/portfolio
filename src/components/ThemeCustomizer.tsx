
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
    
    // Apply light/dark mode independently
    const isLightMode = document.body.classList.contains('light-mode');
    
    // Add appropriate visual effects based on theme
    const addThemeEffects = () => {
      // Remove any existing theme effects
      const existingEffects = document.querySelectorAll('.theme-effect');
      existingEffects.forEach(effect => effect.remove());
      
      if (currentTheme === 'chill') {
        // Add snowflake effect for chill mode
        createSnowflakes();
      } else if (currentTheme === 'neon') {
        // Add neon glow effect
        createNeonGlow();
      } else if (currentTheme === 'hacker') {
        // Add matrix code effect
        createMatrixEffect();
      }
    };
    
    addThemeEffects();
    
    return () => {
      // Clean up theme effects when component unmounts
      const effects = document.querySelectorAll('.theme-effect');
      effects.forEach(effect => effect.remove());
    };
  }, [currentTheme]);

  // Create snowflake effect for chill mode
  const createSnowflakes = () => {
    const snowContainer = document.createElement('div');
    snowContainer.className = 'theme-effect absolute top-0 left-0 w-full h-screen pointer-events-none overflow-hidden z-0';
    
    // Create 50 snowflakes
    for (let i = 0; i < 50; i++) {
      const snowflake = document.createElement('div');
      snowflake.className = 'absolute rounded-full bg-white/80 pointer-events-none animate-float';
      snowflake.style.width = `${Math.random() * 10 + 3}px`;
      snowflake.style.height = snowflake.style.width;
      snowflake.style.left = `${Math.random() * 100}%`;
      snowflake.style.top = `${Math.random() * 100}%`;
      snowflake.style.opacity = `${Math.random() * 0.7 + 0.3}`;
      snowflake.style.animationDuration = `${Math.random() * 10 + 5}s`;
      snowflake.style.animationDelay = `${Math.random() * 5}s`;
      
      snowContainer.appendChild(snowflake);
    }
    
    document.body.appendChild(snowContainer);
  };

  // Create neon glow effect
  const createNeonGlow = () => {
    const glowContainer = document.createElement('div');
    glowContainer.className = 'theme-effect fixed top-0 left-0 w-full h-screen pointer-events-none z-0';
    
    // Create 5 neon glow elements
    const colors = ['#FF00FF', '#00FFFF', '#FF0099', '#9D50BB', '#FC466B'];
    for (let i = 0; i < 5; i++) {
      const glow = document.createElement('div');
      glow.className = 'absolute rounded-full blur-3xl animate-pulse-glow pointer-events-none';
      glow.style.width = `${Math.random() * 300 + 100}px`;
      glow.style.height = glow.style.width;
      glow.style.left = `${Math.random() * 100}%`;
      glow.style.top = `${Math.random() * 100}%`;
      glow.style.opacity = '0.1';
      glow.style.backgroundColor = colors[i % colors.length];
      glow.style.animationDuration = `${Math.random() * 8 + 4}s`;
      
      glowContainer.appendChild(glow);
    }
    
    document.body.appendChild(glowContainer);
  };

  // Create matrix code effect
  const createMatrixEffect = () => {
    const matrixContainer = document.createElement('div');
    matrixContainer.className = 'theme-effect absolute top-0 left-0 w-full h-screen pointer-events-none overflow-hidden z-0';
    
    // Create 20 falling code strings
    for (let i = 0; i < 20; i++) {
      const codeString = document.createElement('div');
      codeString.className = 'absolute text-[#00FF41] text-opacity-30 font-mono text-xs pointer-events-none';
      codeString.style.left = `${Math.random() * 100}%`;
      codeString.style.top = `${Math.random() * 100}%`;
      codeString.style.animationDuration = `${Math.random() * 10 + 8}s`;
      codeString.style.animationDelay = `${Math.random() * 5}s`;
      
      // Generate random matrix-like code
      const chars = '01';
      let text = '';
      const length = Math.floor(Math.random() * 15) + 5;
      for (let j = 0; j < length; j++) {
        text += chars.charAt(Math.floor(Math.random() * chars.length));
        text += '<br>';
      }
      
      codeString.innerHTML = text;
      codeString.style.animation = `fall ${Math.random() * 15 + 5}s linear infinite`;
      
      matrixContainer.appendChild(codeString);
    }
    
    document.body.appendChild(matrixContainer);
  };

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
