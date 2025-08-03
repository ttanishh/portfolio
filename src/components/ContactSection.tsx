import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, MessagesSquare, Lightbulb, Users, LogIn, Mail, MapPin, Phone, Github, Linkedin, Globe, FileText } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '../contexts/AuthContext';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [purpose, setPurpose] = useState('collaborate');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // Resume request form states
  const [showResumeForm, setShowResumeForm] = useState(false);
  const [resumeEmail, setResumeEmail] = useState('');
  const [resumeDescription, setResumeDescription] = useState('');
  const [isSubmittingResume, setIsSubmittingResume] = useState(false);
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const resumeFormRef = useRef<HTMLFormElement>(null);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const API_URL = import.meta.env.PROD 
        ? 'https://cosmic-forge-tanish-dzn61q54d-tanishs-projects-86e64b52.vercel.app/api/contact'
        : 'http://localhost:3001/api/contact';
      
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          purpose,
          message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "🎉 Message sent successfully!",
          description: "Thanks for reaching out. I'll get back to you soon.",
          variant: "default",
        });
        // Reset form
        setName('');
        setEmail('');
        setMessage('');
        setPurpose('collaborate');
      } else {
        toast({
          title: "❌ Error",
          description: data.error || "Failed to send message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "❌ Connection Error",
        description: "Unable to connect to server. Please check your internet connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResumeRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingResume(true);

    try {
      const API_URL = import.meta.env.PROD 
        ? 'https://cosmic-forge-tanish-dzn61q54d-tanishs-projects-86e64b52.vercel.app/api/contact'
        : 'http://localhost:3001/api/contact';
      
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'Resume Request',
          email: resumeEmail,
          purpose: 'resume',
          message: resumeDescription,
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "📄 Resume request sent!",
          description: "I'll send you my resume shortly. Check your email!",
          variant: "default",
        });
        // Reset form and hide it
        setResumeEmail('');
        setResumeDescription('');
        setShowResumeForm(false);
      } else {
        toast({
          title: "❌ Error",
          description: data.error || "Failed to send resume request. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error submitting resume request:', error);
      toast({
        title: "❌ Connection Error",
        description: "Unable to connect to server. Please check your internet connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmittingResume(false);
    }
  };

  const handleLoginForCollaboration = () => {
    navigate('/auth');
  };

  const purposeOptions = [
    { id: 'collaborate', label: 'Collaborate on a project', icon: <Sparkles size={18} className="text-electric" /> },
    { id: 'mentorship', label: 'Ask for mentorship', icon: <Users size={18} className="text-violet" /> },
    { id: 'brainstorm', label: 'Brainstorm or connect', icon: <Lightbulb size={18} className="text-mint" /> },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center md:text-left">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <p className="text-white/70 max-w-2xl mb-16 text-center md:text-left">
            Have an idea or project in mind? Let's connect and create something amazing together.
          </p>
        </div>

        {/* Organized Contact Sections */}
        <div className={`space-y-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          
          {/* Contact Form Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-electric mb-6 text-center md:text-left">💬 Send a Message</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <div className="glass-card p-6 md:p-8 h-full border-l-4 border-electric">
                  {user ? (
                    <>
                      <div className="flex items-center gap-3 mb-6">
                        <MessagesSquare size={24} className="text-electric" />
                        <h3 className="text-xl font-bold text-white">Let's Build Something Together</h3>
                      </div>
                      
                      <p className="text-white/70 mb-6 leading-relaxed">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                      </p>
                      
                      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="block text-sm font-medium text-white/80">Your Name</label>
                          <div className="relative">
                            <input
                              type="text"
                              id="name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              className="w-full px-4 py-3 bg-dark-accent rounded-lg border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-electric/50 transition-all"
                              placeholder="John Doe"
                              required
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="email" className="block text-sm font-medium text-white/80">Your Email</label>
                          <div className="relative">
                            <input
                              type="email"
                              id="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="w-full px-4 py-3 bg-dark-accent rounded-lg border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-electric/50 transition-all"
                              placeholder="john@example.com"
                              required
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-white/80">What's this about?</label>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            {purposeOptions.map((option) => (
                              <label 
                                key={option.id}
                                className={`flex items-center gap-2 p-3 border rounded-lg cursor-pointer transition-all ${
                                  purpose === option.id 
                                    ? 'border-electric bg-electric/10' 
                                    : 'border-white/10 bg-dark-accent hover:bg-dark-accent/70'
                                }`}
                              >
                                <input
                                  type="radio"
                                  name="purpose"
                                  value={option.id}
                                  checked={purpose === option.id}
                                  onChange={() => setPurpose(option.id)}
                                  className="sr-only"
                                />
                                {option.icon}
                                <span className="text-sm">{option.label}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="message" className="block text-sm font-medium text-white/80">Your Message</label>
                          <div className="relative">
                            <textarea
                              id="message"
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}
                              rows={4}
                              className="w-full px-4 py-3 bg-dark-accent rounded-lg border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-electric/50 transition-all"
                              placeholder="Tell me about your project, idea, or question..."
                              required
                            ></textarea>
                          </div>
                        </div>
                        
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full glass-card bg-gradient-glow animate-gradient-shift group flex items-center justify-center gap-2 py-3 text-white font-medium transition-all hover:scale-105"
                        >
                          {isSubmitting ? (
                            <span>Sending...</span>
                          ) : (
                            <>
                              <span>Send Message</span>
                              <Send size={18} className="transition-transform group-hover:translate-x-1" />
                            </>
                          )}
                        </button>
                      </form>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center gap-3 mb-6">
                        <LogIn size={24} className="text-electric" />
                        <h3 className="text-xl font-bold text-white">Login to Collaborate</h3>
                      </div>
                      
                      <p className="text-white/70 mb-6 leading-relaxed">
                        To collaborate on projects, ask for mentorship, or start a conversation, please log in to your account.
                      </p>
                      
                      <div className="space-y-4">
                        <div className="p-4 bg-dark-accent rounded-lg border border-white/10">
                          <h4 className="font-medium mb-2 text-white">What you can do after logging in:</h4>
                          <ul className="text-white/70 text-sm space-y-1">
                            <li>• Send collaboration requests</li>
                            <li>• Ask for mentorship</li>
                            <li>• Start brainstorming sessions</li>
                            <li>• Get priority responses</li>
                          </ul>
                        </div>
                        
                        <Button
                          onClick={handleLoginForCollaboration}
                          className="w-full glass-card bg-gradient-glow animate-gradient-shift group flex items-center justify-center gap-2 py-3 text-white font-medium transition-all hover:scale-105"
                        >
                          <LogIn size={18} />
                          <span>Login to Collaborate</span>
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Contact Information */}
              <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <div className="glass-card p-6 md:p-8 h-full border-l-4 border-violet">
                  <h3 className="text-xl font-bold mb-6 text-white">📞 Contact Information</h3>
                  <p className="text-white/70 mb-6 leading-relaxed">
                    Feel free to reach out through any of these channels:
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3 p-3 bg-dark-accent rounded-lg">
                      <Mail size={20} className="text-electric" />
                      <div>
                        <p className="font-medium text-white">Email</p>
                        <p className="text-white/70 text-sm">tanish@example.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-dark-accent rounded-lg">
                      <MapPin size={20} className="text-electric" />
                      <div>
                        <p className="font-medium text-white">Location</p>
                        <p className="text-white/70 text-sm">Available for remote collaboration</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-dark-accent rounded-lg">
                      <Linkedin size={20} className="text-electric" />
                      <div>
                        <p className="font-medium text-white">LinkedIn</p>
                        <p className="text-white/70 text-sm">linkedin.com/in/tanish</p>
                      </div>
                    </div>
                  </div>

                  {/* Resume Request Button */}
                  <div className="border-t border-white/10 pt-6">
                    <h4 className="text-lg font-bold mb-3 text-white">📄 Need My Resume?</h4>
                    <p className="text-white/70 text-sm mb-4 leading-relaxed">
                      Interested in working together? Request my detailed resume and portfolio.
                    </p>
                    
                    {!showResumeForm ? (
                      <button
                        onClick={() => setShowResumeForm(true)}
                        className="w-full glass-card bg-gradient-to-r from-mint to-electric group flex items-center justify-center gap-2 py-3 text-white font-medium transition-all hover:scale-105 rounded-lg"
                      >
                        <FileText size={18} />
                        <span>Request Resume</span>
                      </button>
                    ) : (
                      <form ref={resumeFormRef} onSubmit={handleResumeRequest} className="space-y-4">
                        <div className="space-y-2">
                          <label htmlFor="resume-email" className="block text-sm font-medium text-white/80">Your Email</label>
                          <input
                            type="email"
                            id="resume-email"
                            value={resumeEmail}
                            onChange={(e) => setResumeEmail(e.target.value)}
                            className="w-full px-3 py-2 bg-dark-accent rounded-lg border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-electric/50 transition-all text-sm"
                            placeholder="your@email.com"
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="resume-description" className="block text-sm font-medium text-white/80">Brief Description</label>
                          <textarea
                            id="resume-description"
                            value={resumeDescription}
                            onChange={(e) => setResumeDescription(e.target.value)}
                            rows={3}
                            className="w-full px-3 py-2 bg-dark-accent rounded-lg border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-electric/50 transition-all text-sm"
                            placeholder="Tell me about the opportunity or why you'd like my resume..."
                            required
                          ></textarea>
                        </div>
                        
                        <div className="flex gap-2">
                          <button
                            type="submit"
                            disabled={isSubmittingResume}
                            className="flex-1 glass-card bg-gradient-to-r from-mint to-electric group flex items-center justify-center gap-2 py-2 text-white font-medium transition-all hover:scale-105 rounded-lg text-sm"
                          >
                            {isSubmittingResume ? (
                              <span>Sending...</span>
                            ) : (
                              <>
                                <Send size={16} />
                                <span>Send Request</span>
                              </>
                            )}
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setShowResumeForm(false);
                              setResumeEmail('');
                              setResumeDescription('');
                            }}
                            className="px-4 py-2 bg-dark-accent text-white/70 rounded-lg hover:bg-dark-accent/70 transition-all text-sm"
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Collaboration Opportunities Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-electric mb-6 text-center md:text-left">🤝 Collaboration Opportunities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-card p-6 md:p-8 border-l-4 border-lime-400">
                <h3 className="text-xl font-bold mb-4 text-white">🚀 Looking For Collaborators</h3>
                <p className="text-white/70 mb-6 leading-relaxed">
                  I'm currently seeking collaborators for these exciting projects:
                </p>
                
                <div className="space-y-4">
                  <div className="p-4 bg-dark-accent rounded-lg border border-white/10">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium text-white">AI-Enhanced Learning Platform</h4>
                      <span className="px-2 py-1 text-xs bg-electric/20 text-electric rounded-full font-medium">In Progress</span>
                    </div>
                    <p className="text-white/70 text-sm mb-2 leading-relaxed">
                      Building an adaptive learning system that uses AI to personalize educational content.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-dark text-xs px-2 py-1 rounded-full font-medium">ML Engineer</span>
                      <span className="bg-dark text-xs px-2 py-1 rounded-full font-medium">UI/UX Designer</span>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-dark-accent rounded-lg border border-white/10">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium text-white">Decentralized Content Platform</h4>
                      <span className="px-2 py-1 text-xs bg-amber-500/20 text-amber-400 rounded-full font-medium">Idea Phase</span>
                    </div>
                    <p className="text-white/70 text-sm mb-2 leading-relaxed">
                      Creating a censorship-resistant platform for creators to publish and monetize content.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-dark text-xs px-2 py-1 rounded-full font-medium">Blockchain Dev</span>
                      <span className="bg-dark text-xs px-2 py-1 rounded-full font-medium">Smart Contract Dev</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-6 md:p-8 border-l-4 border-pink-400">
                <h3 className="text-xl font-bold mb-4 text-white">🌟 Community Impact</h3>
                <p className="text-white/70 mb-6 leading-relaxed">
                  I'm passionate about giving back to the tech community through mentorship and knowledge sharing.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-dark-accent rounded-lg">
                    <div className="w-3 h-3 bg-electric rounded-full"></div>
                    <span className="text-sm text-white">Free mentorship sessions for students</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-dark-accent rounded-lg">
                    <div className="w-3 h-3 bg-electric rounded-full"></div>
                    <span className="text-sm text-white">Open source contributions</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-dark-accent rounded-lg">
                    <div className="w-3 h-3 bg-electric rounded-full"></div>
                    <span className="text-sm text-white">Tech community events and workshops</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-dark-accent rounded-lg">
                    <div className="w-3 h-3 bg-electric rounded-full"></div>
                    <span className="text-sm text-white">Hackathon mentoring and judging</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;