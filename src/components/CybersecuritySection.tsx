
import React, { useState } from 'react';
import { Shield, Code, Lock, Key, AlertTriangle, FileCode, Database, Search } from 'lucide-react';

// Define types for security tools and mini lessons
interface SecurityTool {
  id: number;
  name: string;
  description: string;
  icon: React.ReactNode;
  usedFor: string;
  link?: string;
}

interface MiniLesson {
  id: number;
  title: string;
  content: string;
  readMoreLink?: string;
}

const CybersecuritySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'tools' | 'lessons' | 'philosophy' | 'challenge'>('tools');
  const [challengeAttempted, setChallengeAttempted] = useState(false);
  const [challengeSolved, setChallengeSolved] = useState(false);
  const [hackPassword, setHackPassword] = useState('');
  
  // Security tools data
  const securityTools: SecurityTool[] = [
    {
      id: 1,
      name: "Burp Suite",
      description: "Web vulnerability scanner and proxy for security testing",
      icon: <Search size={24} className="text-electric" />,
      usedFor: "Testing my blockchain secure reporting system for API vulnerabilities",
      link: "https://portswigger.net/burp"
    },
    {
      id: 2,
      name: "Wireshark",
      description: "Network protocol analyzer for monitoring traffic",
      icon: <Database size={24} className="text-electric" />,
      usedFor: "Analyzing data flow in my microservices deployment pipeline",
      link: "https://www.wireshark.org/"
    },
    {
      id: 3,
      name: "Metasploit",
      description: "Penetration testing framework for vulnerability exploitation",
      icon: <AlertTriangle size={24} className="text-electric" />,
      usedFor: "Learning about common vulnerabilities and testing defense mechanisms",
      link: "https://www.metasploit.com/"
    },
    {
      id: 4,
      name: "Ganache",
      description: "Personal blockchain for Ethereum development",
      icon: <FileCode size={24} className="text-electric" />,
      usedFor: "Testing smart contracts in my blockchain secure reporting project",
      link: "https://trufflesuite.com/ganache/"
    }
  ];
  
  // Mini lessons data
  const miniLessons: MiniLesson[] = [
    {
      id: 1,
      title: "Why Passwordless Login is the Future",
      content: "Traditional passwords are increasingly vulnerable to phishing, keylogging, and database breaches. Passwordless authentication using blockchain validates identity without exposing credentials to these risks. In my projects, I'm implementing zero-knowledge proofs to authenticate users while keeping their data truly private.",
      readMoreLink: "https://owasp.org/www-community/Passwordless_Authentication"
    },
    {
      id: 2,
      title: "XSS & SQL Injection Explained Simply",
      content: "Cross-Site Scripting (XSS) is like someone sneaking their own note into your message to trick others. SQL Injection is like changing the question you're asked to get a different answer. Both exploit poor input validation, which is why I implement strict data sanitization in all my projects.",
      readMoreLink: "https://owasp.org/www-community/attacks/"
    },
    {
      id: 3,
      title: "The Blockchain Security Mindset",
      content: "Blockchain security isn't just about crypto wallets - it requires thinking about consensus mechanisms, smart contract vulnerabilities, and oracle manipulation. For my secure reporting system, I implemented validation nodes to ensure data integrity before immutable storage.",
      readMoreLink: "https://ethereum.org/en/developers/docs/smart-contracts/security/"
    }
  ];
  
  // Simple "hack me" challenge
  const handleHackChallenge = () => {
    setChallengeAttempted(true);
    
    // The "vulnerability" is that the password is stored in the frontend
    // and is using a simple base64 encoding (in a real app, this would be terrible practice)
    if (hackPassword.toLowerCase() === 'admin123' || hackPassword === btoa('hackme')) {
      setChallengeSolved(true);
    }
  };
  
  return (
    <section id="cybersecurity" className="py-20 px-4 relative bg-gradient-to-b from-dark to-dark-accent">
      <div className="max-w-7xl mx-auto">
        <div className="animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center md:text-left">
            Cyber<span className="text-electric">Security</span> Zone
          </h2>
          <p className="text-white/70 max-w-2xl mb-8 text-center md:text-left">
            Exploring the intersection of security, privacy, and modern web development through practical tools and concepts.
          </p>
          
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center md:justify-start">
            <button
              onClick={() => setActiveTab('tools')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === 'tools' 
                  ? 'bg-electric text-white' 
                  : 'bg-dark-accent text-white/70 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-2">
                <Shield size={16} />
                <span>Security Tools</span>
              </div>
            </button>
            
            <button
              onClick={() => setActiveTab('lessons')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === 'lessons' 
                  ? 'bg-electric text-white' 
                  : 'bg-dark-accent text-white/70 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-2">
                <Code size={16} />
                <span>InfoSec Bytes</span>
              </div>
            </button>
            
            <button
              onClick={() => setActiveTab('philosophy')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === 'philosophy' 
                  ? 'bg-electric text-white' 
                  : 'bg-dark-accent text-white/70 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-2">
                <Lock size={16} />
                <span>Privacy Philosophy</span>
              </div>
            </button>
            
            <button
              onClick={() => setActiveTab('challenge')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === 'challenge' 
                  ? 'bg-electric text-white' 
                  : 'bg-dark-accent text-white/70 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-2">
                <Key size={16} />
                <span>Hack Me!</span>
              </div>
            </button>
          </div>
          
          {/* Content based on active tab */}
          <div className="glass-card p-6 md:p-8">
            {/* Security Tools Tab */}
            {activeTab === 'tools' && (
              <div className="animate-fade-in">
                <h3 className="text-xl font-bold mb-4 text-white">Security Tools I Use & Recommend</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {securityTools.map(tool => (
                    <div key={tool.id} className="bg-dark-accent/50 rounded-xl p-5 hover:bg-dark-accent transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-dark/50 rounded-lg">
                          {tool.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-white mb-1">{tool.name}</h4>
                          <p className="text-white/70 text-sm mb-3">{tool.description}</p>
                          <p className="text-sm text-electric mb-2">
                            <span className="font-medium">Where I used it:</span> {tool.usedFor}
                          </p>
                          {tool.link && (
                            <a 
                              href={tool.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-xs inline-flex items-center text-white/60 hover:text-electric transition-colors"
                            >
                              Learn more <span className="ml-1">→</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-4 border border-electric/30 rounded-lg bg-electric/5">
                  <h4 className="text-lg font-medium mb-2 flex items-center gap-2">
                    <FileCode size={20} className="text-electric" />
                    Security Tags on My Projects
                  </h4>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="px-3 py-1 bg-dark-accent text-electric text-xs rounded-full">#BlockchainSec</span>
                    <span className="px-3 py-1 bg-dark-accent text-electric text-xs rounded-full">#XSS-Protected</span>
                    <span className="px-3 py-1 bg-dark-accent text-electric text-xs rounded-full">#EndToEndEncrypted</span>
                    <span className="px-3 py-1 bg-dark-accent text-electric text-xs rounded-full">#Web3Auth</span>
                    <span className="px-3 py-1 bg-dark-accent text-electric text-xs rounded-full">#ZeroKnowledge</span>
                    <span className="px-3 py-1 bg-dark-accent text-electric text-xs rounded-full">#SmartContractAudit</span>
                  </div>
                </div>
              </div>
            )}
            
            {/* InfoSec Lessons Tab */}
            {activeTab === 'lessons' && (
              <div className="animate-fade-in">
                <h3 className="text-xl font-bold mb-6 text-white">Infosec Byte-sized Lessons</h3>
                <div className="space-y-8">
                  {miniLessons.map(lesson => (
                    <div key={lesson.id} className="border-l-2 border-electric pl-4 pb-6">
                      <h4 className="text-lg font-medium text-white mb-2">{lesson.title}</h4>
                      <p className="text-white/70 mb-3">{lesson.content}</p>
                      {lesson.readMoreLink && (
                        <a 
                          href={lesson.readMoreLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-sm inline-flex items-center text-electric hover:text-electric/80 transition-colors"
                        >
                          Read more on OWASP <span className="ml-1">→</span>
                        </a>
                      )}
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-5 bg-dark-accent/50 rounded-lg">
                  <h4 className="text-lg font-medium mb-3">CyberSec Learning Roadmap</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="h-6 w-6 rounded-full bg-electric/20 flex items-center justify-center text-electric text-xs font-medium">1</div>
                      <div>
                        <p className="text-white font-medium">Mastering OWASP Top 10</p>
                        <p className="text-white/60 text-sm">Understanding common vulnerabilities in web applications</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-6 w-6 rounded-full bg-electric/20 flex items-center justify-center text-electric text-xs font-medium">2</div>
                      <div>
                        <p className="text-white font-medium">Building Secure Architecture</p>
                        <p className="text-white/60 text-sm">Designing systems with security-first principles</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-6 w-6 rounded-full bg-electric/20 flex items-center justify-center text-electric text-xs font-medium">3</div>
                      <div>
                        <p className="text-white font-medium">Bug Bounty Platforms</p>
                        <p className="text-white/60 text-sm">Contributing to real-world security through responsible disclosure</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            )}
            
            {/* Privacy Philosophy Tab */}
            {activeTab === 'philosophy' && (
              <div className="animate-fade-in">
                <h3 className="text-xl font-bold mb-4 text-white">My Privacy & Ethics Philosophy</h3>
                <div className="space-y-6">
                  <div className="bg-dark-accent/50 p-5 rounded-lg">
                    <h4 className="text-lg font-medium text-white mb-2">Security as a First-Class Feature</h4>
                    <p className="text-white/70">
                      I believe security should never be an afterthought. Every application I build starts with threat modeling 
                      and security constraints before a single line of code is written. This approach ensures that security 
                      controls are baked into the architecture rather than patched on later.
                    </p>
                  </div>
                  
                  <div className="bg-dark-accent/50 p-5 rounded-lg">
                    <h4 className="text-lg font-medium text-white mb-2">Data Minimalism</h4>
                    <p className="text-white/70">
                      The best way to protect user data is to never collect it in the first place. I practice data minimalism
                      in all my projects, collecting only what's absolutely necessary and being transparent about usage.
                      When personal data is needed, I implement strong encryption and clear retention policies.
                    </p>
                  </div>
                  
                  <div className="bg-dark-accent/50 p-5 rounded-lg">
                    <h4 className="text-lg font-medium text-white mb-2">Balancing Innovation with Responsibility</h4>
                    <p className="text-white/70">
                      My KavachAuth project demonstrates my commitment to balancing blockchain innovation with responsibility.
                      While the system offers passwordless authentication, I've ensured that it maintains auditability for
                      critical systems while preserving individual privacy through zero-knowledge proofs.
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 p-5 border border-dashed border-electric/40 rounded-lg">
                  <h4 className="text-lg font-medium mb-3 text-electric">Vulnerability Disclosure Timeline</h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="text-sm text-white/60 w-24 pt-1">March 2025</div>
                      <div>
                        <p className="text-white font-medium">API Rate Limiting Bypass</p>
                        <p className="text-white/70 text-sm">Fixed authentication rate limiting in blockchain reporting system to prevent brute force attacks</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="text-sm text-white/60 w-24 pt-1">January 2025</div>
                      <div>
                        <p className="text-white font-medium">Input Sanitization</p>
                        <p className="text-white/70 text-sm">Improved regex validation on health analytics system to prevent potential XSS attacks</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="text-sm text-white/60 w-24 pt-1">November 2024</div>
                      <div>
                        <p className="text-white font-medium">Firestore Rules</p>
                        <p className="text-white/70 text-sm">Updated Firebase security rules to ensure proper authentication checks on all data access</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Hack Me Challenge Tab */}
            {activeTab === 'challenge' && (
              <div className="animate-fade-in">
                <h3 className="text-xl font-bold mb-4 text-white">Hack Me! Challenge</h3>
                <div className="bg-dark-accent/50 p-5 rounded-lg mb-6">
                  <p className="text-white/70 mb-4">
                    This is a purposely vulnerable login form with a security flaw. Can you find a way to bypass it?
                    <br />
                    <span className="text-electric">Hint:</span> Sometimes, the answer is hiding in plain sight.
                  </p>
                  
                  <div className="max-w-md mx-auto">
                    <div className="mb-4">
                      <input
                        type="password"
                        value={hackPassword}
                        onChange={(e) => setHackPassword(e.target.value)}
                        placeholder="Password"
                        className="w-full px-4 py-3 bg-dark border border-white/10 rounded-lg focus:outline-none focus:ring-1 focus:ring-electric focus:border-electric"
                      />
                    </div>
                    
                    <button
                      onClick={handleHackChallenge}
                      className="w-full bg-electric hover:bg-electric/90 text-white font-medium py-3 px-4 rounded-lg transition-colors"
                    >
                      Login
                    </button>
                    
                    {challengeAttempted && (
                      <div className={`mt-4 p-3 rounded-lg ${challengeSolved ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                        {challengeSolved ? (
                          <p>🎉 Well done! You found the vulnerability. The password was stored client-side and could be found in the source code or using 'admin123'. In real applications, this would be a critical security flaw.</p>
                        ) : (
                          <p>Access denied. Keep trying! Remember to check the source code or try common passwords.</p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="border border-electric/30 rounded-lg p-5 bg-electric/5">
                  <h4 className="text-lg font-medium mb-3 flex items-center gap-2">
                    <Code size={20} className="text-electric" />
                    Mini Challenges
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <p className="text-white font-medium mb-2">Decode this encoded string:</p>
                      <p className="font-mono bg-dark p-3 rounded text-sm mb-2">c2VjdXJpdHlfaXNfYV9qb3VybmV5</p>
                      <details className="text-white/70 text-sm">
                        <summary className="cursor-pointer text-electric hover:text-electric/80 transition-colors">View Answer</summary>
                        <p className="mt-2 p-2 bg-dark-accent rounded">security_is_a_journey</p>
                      </details>
                    </div>
                    
                    <div>
                      <p className="text-white font-medium mb-2">Find the vulnerability in this code snippet:</p>
                      <pre className="font-mono bg-dark p-3 rounded text-sm mb-2 overflow-x-auto">
                        <code>
{`function login(username, password) {
  if(username === 'admin' && 
     password === 'secretpassword123') {
    return true;
  }
  return false;
}`}
                        </code>
                      </pre>
                      <details className="text-white/70 text-sm">
                        <summary className="cursor-pointer text-electric hover:text-electric/80 transition-colors">View Answer</summary>
                        <p className="mt-2 p-2 bg-dark-accent rounded">
                          1. Hardcoded credentials in client-side code<br />
                          2. Lack of password hashing<br />
                          3. No timing attack protection (constant-time comparison)<br />
                          4. No brute force protection
                        </p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CybersecuritySection;
