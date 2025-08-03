import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, LogOut, User, ChevronDown, LogIn, Calendar, Target } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  onCommandPaletteOpen?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCommandPaletteOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const handleLogin = () => {
    navigate('/auth');
  };

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Tech Stack', href: '#tech-stack' },
    { name: 'About Me', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const currentMonth = new Date().toLocaleString('default', { month: 'long' });

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrollPosition > 50 ? 'glass backdrop-blur-xl border-b border-white/10' : ''
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Terminal size={24} className="text-electric" />
            <span className="text-xl font-bold text-white">Tanish</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white/80 hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            {/* Monthly Goal Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white/80 hover:text-white hover:bg-white/10"
                >
                  <Target size={16} className="mr-2" />
                  <span className="text-sm">Monthly Goal</span>
                  <ChevronDown size={14} className="ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80 bg-gray-800 border-gray-700">
                <DropdownMenuLabel className="text-white">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-electric" />
                    <span>{currentMonth} Goal</span>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-gray-600" />
                <div className="p-3">
                  <p className="text-white/90 text-sm mb-3">
                    <span className="font-medium">📌 Current Focus:</span> Finish Web3 Login + Collaborator UI
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-electric rounded-full"></div>
                      <span className="text-white/80">Complete Web3 authentication system</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-electric rounded-full"></div>
                      <span className="text-white/80">Build collaborator management interface</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-electric rounded-full"></div>
                      <span className="text-white/80">Integrate real-time collaboration features</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-gray-600">
                    <a 
                      href="#contact" 
                      className="text-electric hover:text-electric/80 text-sm font-medium transition-colors"
                    >
                      🤝 Wanna join the project?
                    </a>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Command Palette Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={onCommandPaletteOpen}
              className="text-white/80 hover:text-white hover:bg-white/10"
            >
              <Terminal size={16} />
            </Button>

            {/* User Menu or Login Button */}
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2 text-white/80 hover:text-white hover:bg-white/10">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback className="bg-electric text-white text-sm">
                        {user.name?.charAt(0).toUpperCase() || user.email?.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <span className="hidden lg:block text-sm">{user.name}</span>
                    <ChevronDown size={16} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-gray-800 border-gray-700">
                  <DropdownMenuLabel className="text-white">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium">{user.name}</p>
                      <p className="text-xs text-gray-400">{user.email}</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-gray-600" />
                  <DropdownMenuItem 
                    onClick={handleLogout}
                    className="text-red-400 hover:text-red-300 hover:bg-red-500/10 cursor-pointer"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button
                onClick={handleLogin}
                variant="outline"
                className="text-white border-white/20 hover:bg-white/10"
              >
                <LogIn className="mr-2 h-4 w-4" />
                Login
              </Button>
            )}
          </div>

          {/* Mobile Navigation Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white/80 hover:text-white hover:bg-white/10"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden glass backdrop-blur-xl absolute top-full left-0 right-0 flex flex-col space-y-4 p-6 border-t border-white/10 animate-slide-down light-mode:border-gray-200">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white/80 hover:text-white py-2 light-mode:text-gray-700 light-mode:hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            
            {/* Mobile Monthly Goal */}
            <div className="border-t border-white/10 pt-4">
              <div className="flex items-center gap-2 mb-3">
                <Target size={16} className="text-electric" />
                <span className="text-white font-medium">{currentMonth} Goal</span>
              </div>
              <p className="text-white/80 text-sm mb-2">
                <span className="font-medium">📌 Current Focus:</span> Finish Web3 Login + Collaborator UI
              </p>
              <div className="space-y-1 mb-3">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-electric rounded-full"></div>
                  <span className="text-white/70">Complete Web3 authentication system</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-electric rounded-full"></div>
                  <span className="text-white/70">Build collaborator management interface</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-electric rounded-full"></div>
                  <span className="text-white/70">Integrate real-time collaboration features</span>
                </div>
              </div>
              <a 
                href="#contact" 
                className="text-electric hover:text-electric/80 text-sm font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                🤝 Wanna join the project?
              </a>
            </div>
            
            {/* Mobile User Info and Logout/Login */}
            {user ? (
              <>
                <div className="border-t border-white/10 pt-4 mt-4">
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback className="bg-electric text-white">
                        {user.name?.charAt(0).toUpperCase() || user.email?.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-white font-medium">{user.name}</p>
                      <p className="text-white/60 text-sm">{user.email}</p>
                    </div>
                  </div>
                  <Button
                    onClick={handleLogout}
                    variant="ghost"
                    className="w-full text-red-400 hover:text-red-300 hover:bg-red-500/10 justify-start"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Log out
                  </Button>
                </div>
              </>
            ) : (
              <div className="border-t border-white/10 pt-4 mt-4">
                <Button
                  onClick={handleLogin}
                  variant="outline"
                  className="w-full text-white border-white/20 hover:bg-white/10"
                >
                  <LogIn className="mr-2 h-4 w-4" />
                  Login
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
