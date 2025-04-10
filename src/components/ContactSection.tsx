
import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, MessagesSquare, Lightbulb, Users } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [purpose, setPurpose] = useState('collaborate');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
        variant: "default",
      });
      setIsSubmitting(false);
      setName('');
      setEmail('');
      setMessage('');
      setPurpose('collaborate');
    }, 1500);
  };

  const purposeOptions = [
    { id: 'collaborate', label: 'Collaborate on a project', icon: <Sparkles size={18} className="text-electric" /> },
    { id: 'mentorship', label: 'Ask for mentorship', icon: <Users size={18} className="text-violet" /> },
    { id: 'brainstorm', label: 'Brainstorm or connect', icon: <Lightbulb size={18} className="text-mint" /> },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center md:text-left">
            <span className="text-gradient">Collaborate</span> With Me
          </h2>
          <p className="text-white/70 max-w-2xl mb-12 text-center md:text-left">
            Have an idea or project in mind? Let's connect and create something amazing together.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className={`md:w-1/2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="glass-card p-6 md:p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <MessagesSquare size={24} className="text-electric" />
                <h3 className="text-xl font-bold">Let's Build Something Together</h3>
              </div>
              
              <p className="text-white/70 mb-6">
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
                  className="w-full glass-card bg-gradient-glow animate-gradient-shift group flex items-center justify-center gap-2 py-3 text-white font-medium transition-all"
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
            </div>
          </div>
          
          <div className={`md:w-1/2 flex flex-col gap-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="glass-card p-6 md:p-8">
              <h3 className="text-xl font-bold mb-4">Looking For Collaborators</h3>
              <p className="text-white/70 mb-6">
                I'm currently seeking collaborators for these exciting projects:
              </p>
              
              <div className="space-y-4">
                <div className="p-4 bg-dark-accent rounded-lg border border-white/10">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">AI-Enhanced Learning Platform</h4>
                    <span className="px-2 py-1 text-xs bg-electric/20 text-electric rounded-full">In Progress</span>
                  </div>
                  <p className="text-white/70 text-sm mb-2">
                    Building an adaptive learning system that uses AI to personalize educational content.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-dark text-xs px-2 py-1 rounded-full">ML Engineer</span>
                    <span className="bg-dark text-xs px-2 py-1 rounded-full">UI/UX Designer</span>
                  </div>
                </div>
                
                <div className="p-4 bg-dark-accent rounded-lg border border-white/10">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">Decentralized Content Platform</h4>
                    <span className="px-2 py-1 text-xs bg-amber-500/20 text-amber-400 rounded-full">Idea Phase</span>
                  </div>
                  <p className="text-white/70 text-sm mb-2">
                    Creating a censorship-resistant platform for creators to publish and monetize content.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-dark text-xs px-2 py-1 rounded-full">Blockchain Dev</span>
                    <span className="bg-dark text-xs px-2 py-1 rounded-full">Smart Contract Dev</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6 md:p-8 flex-grow">
              <h3 className="text-xl font-bold mb-4">Community Impact</h3>
              <p className="text-white/70 mb-6">
                I'm passionate about giving back to the tech community through mentorship and knowledge sharing.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-dark-accent rounded-lg border border-white/10 text-center">
                  <div className="text-2xl font-bold text-electric mb-1">25+</div>
                  <div className="text-white/70 text-sm">Mentees Guided</div>
                </div>
                
                <div className="p-4 bg-dark-accent rounded-lg border border-white/10 text-center">
                  <div className="text-2xl font-bold text-violet mb-1">30+</div>
                  <div className="text-white/70 text-sm">DSA Sessions</div>
                </div>
                
                <div className="p-4 bg-dark-accent rounded-lg border border-white/10 text-center">
                  <div className="text-2xl font-bold text-mint mb-1">12+</div>
                  <div className="text-white/70 text-sm">OSS Contributions</div>
                </div>
                
                <div className="p-4 bg-dark-accent rounded-lg border border-white/10 text-center">
                  <div className="text-2xl font-bold text-electric mb-1">5+</div>
                  <div className="text-white/70 text-sm">Workshops Led</div>
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
