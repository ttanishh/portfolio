
import React, { useState, useEffect, useRef } from 'react';
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from '@/components/ui/command';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Terminal, Github, Mail, User, Rocket, FileText, Code, Coffee, HelpCircle } from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, setIsOpen }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<Array<{ type: 'input' | 'output', content: string }>>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputContainerRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when output changes
  useEffect(() => {
    if (outputContainerRef.current) {
      outputContainerRef.current.scrollTop = outputContainerRef.current.scrollHeight;
    }
  }, [output]);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  const handleCommand = (command: string) => {
    setInput('');
    
    // Add command to output history
    setOutput(prev => [...prev, { type: 'input', content: `> ${command}` }]);
    
    // Process command
    const lowerCommand = command.toLowerCase().trim();
    
    if (lowerCommand === 'help' || lowerCommand === 'tanish --help') {
      setOutput(prev => [...prev, { 
        type: 'output', 
        content: `
🔍 Available Commands:
  📂 show projects - Display my featured projects
  👤 about - Learn more about me
  🚀 skills - List my technical skills
  📄 resume - View my professional resume
  📧 contact - Get my contact information
  🧪 experiments - View my experimental projects
  ☕ coffee - Buy me a coffee
  ❓ help - Show this help message
  🚪 exit - Close this terminal
        `
      }]);
    } else if (lowerCommand === 'show projects' || lowerCommand === 'projects') {
      setOutput(prev => [...prev, { 
        type: 'output', 
        content: `
🚀 Featured Projects:
  1. AI-Driven Health Analytics - Machine learning for healthcare data
  2. Blockchain Secure Reporting - Immutable audit trails for financial data
  3. Microservices Deployment Pipeline - Automated CI/CD for containerized apps
  4. Neural Network Optimization - Performance tuning for deep learning models

Navigate to the Projects section to learn more!
        `
      }]);
    } else if (lowerCommand === 'about') {
      setOutput(prev => [...prev, { 
        type: 'output', 
        content: `
👋 Hi, I'm Tanish!

A Computer Science student building professional-grade projects across full-stack, AI, and blockchain technologies.

I'm passionate about creating innovative solutions to real-world problems using cutting-edge technologies.

Want to know more? Check out the About Me section!
        `
      }]);
    } else if (lowerCommand === 'skills' || lowerCommand === 'show skills') {
      setOutput(prev => [...prev, { 
        type: 'output', 
        content: `
🧠 Technical Skills:
  • Programming: JavaScript/TypeScript, Python, Java, C++
  • Front-end: React, Next.js, TailwindCSS
  • Back-end: Node.js, Express, Django
  • Databases: MongoDB, PostgreSQL, Firebase
  • DevOps: Docker, Kubernetes, CI/CD
  • Cloud: AWS, GCP, Azure
  • AI/ML: TensorFlow, PyTorch, Scikit-learn
  • Blockchain: Ethereum, Solidity, Web3.js
        `
      }]);
    } else if (lowerCommand === 'resume' || lowerCommand === 'open resume') {
      setOutput(prev => [...prev, { 
        type: 'output', 
        content: `📄 Opening resume... Check the download in your browser!`
      }]);
      // Simulating opening a resume
      setTimeout(() => {
        window.open('#', '_blank');
      }, 1000);
    } else if (lowerCommand === 'contact') {
      setOutput(prev => [...prev, { 
        type: 'output', 
        content: `
📧 Contact Information:
  Email: contact@example.com
  LinkedIn: linkedin.com/in/tanish
  GitHub: github.com/tanish
  
Or use the contact form in the Contact section!
        `
      }]);
    } else if (lowerCommand === 'experiments') {
      setOutput(prev => [...prev, { 
        type: 'output', 
        content: `
🧪 Current Experiments:
  • Exploring Generative AI for content creation
  • Building a personal knowledge management system
  • Researching zero-knowledge proofs for privacy
  • Developing a blockchain-based voting system
        `
      }]);
    } else if (lowerCommand === 'coffee') {
      setOutput(prev => [...prev, { 
        type: 'output', 
        content: `☕ Thanks for the virtual coffee! If you'd like to support my work, check out the Contact section.`
      }]);
    } else if (lowerCommand === 'exit' || lowerCommand === 'close' || lowerCommand === 'quit') {
      setOutput([]);
      setIsOpen(false);
    } else if (lowerCommand === 'clear' || lowerCommand === 'cls') {
      setOutput([]);
    } else if (lowerCommand === '') {
      // Do nothing for empty command
    } else {
      setOutput(prev => [...prev, { 
        type: 'output', 
        content: `Command not found: ${command}. Type 'help' to see available commands.`
      }]);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-2xl overflow-hidden p-0 glass dark:bg-black/60 backdrop-blur-xl border border-white/10 max-h-[80vh]">
        <div className="flex flex-col h-full">
          <div className="flex items-center border-b border-white/10 px-4 py-2 light-mode:border-gray-200">
            <Terminal className="mr-2 h-5 w-5 text-electric" />
            <span className="font-mono font-semibold">Tanish Terminal</span>
          </div>
          
          {/* Terminal output */}
          <div 
            ref={outputContainerRef}
            className="flex-1 overflow-y-auto font-mono p-4 text-sm space-y-2 max-h-[60vh]"
          >
            <div className="text-electric mb-2">Welcome to Tanish's interactive terminal! Type 'help' to get started.</div>
            {output.map((line, index) => (
              <div 
                key={index} 
                className={`whitespace-pre-wrap ${
                  line.type === 'input' ? 'text-electric font-semibold' : 'text-white/90 light-mode:text-gray-800'
                }`}
              >
                {line.content}
              </div>
            ))}
          </div>
          
          <div className="flex items-center border-t border-white/10 px-4 py-2 light-mode:border-gray-200">
            <span className="text-electric font-bold mr-2">&gt;</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleCommand(input);
                }
              }}
              className="flex-1 bg-transparent border-none outline-none font-mono text-white light-mode:text-gray-800"
              placeholder="Type a command..."
              aria-label="Terminal input"
            />
          </div>
          
          <div className="bg-black/20 p-2 border-t border-white/10 font-mono text-xs text-white/60 light-mode:bg-gray-100 light-mode:text-gray-500 light-mode:border-gray-200">
            Type 'help' for available commands. 'exit' to close.
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CommandPalette;
