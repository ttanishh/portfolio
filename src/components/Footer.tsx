
import React from 'react';
import { Github, Linkedin, Twitter, FileText, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="glass border-t border-white/5 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <a href="#hero" className="text-2xl font-bold text-gradient">
              &lt;Tanish /&gt;
            </a>
            <p className="text-white/60 mt-2 max-w-md text-center md:text-left">
              Engineering smart, secure, and scalable solutions at the intersection of full-stack, AI, and blockchain.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="text-white/70 hover:text-white transition-colors flex items-center gap-1">
              <FileText size={18} />
              <span>Resume</span>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors flex items-center gap-1">
              <Github size={18} />
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors flex items-center gap-1">
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors flex items-center gap-1">
              <Twitter size={18} />
              <span>Twitter</span>
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-6 mt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Tanish. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
              Type 'tanish --help' in console
            </a>
            <span className="text-white/40">|</span>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-electric/80 hover:text-electric flex items-center gap-1 text-sm transition-colors"
            >
              <span>View Source</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
