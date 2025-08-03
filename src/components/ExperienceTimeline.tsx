import React, { useRef, useEffect, useState } from 'react';
import { Calendar, Briefcase, GraduationCap, ExternalLink, Award, X, Download, Image } from 'lucide-react';
import uplCert from '../assets/upl-cert.png';
import sahanaCert from '../assets/sahana-cert.png';
import mentorship1 from '../assets/mentorship1.jpg';
import mentorship2 from '../assets/mentorship2.jpg';
import lamCert from '../assets/lam-cert.png';

interface Experience {
  id: number;
  title: string;
  organization: string;
  organizationUrl?: string;
  period: string;
  description: string;
  impact: string;
  stack: string[];
  type: 'work' | 'freelance' | 'education' | 'mentorship';
  images?: string[];
  linkedinUrl?: string;
  certificateUrl?: string;
  certificateImage?: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    title: "AI-Powered Lead Management System",
    organization: "Careerline Education Foundation",
    organizationUrl: "https://careerline.org/",
    period: "July 25-31, 2025",
    description: "Proposed and presented an end-to-end ML-driven Lead Scoring Intelligence System to address real-world challenges in student admissions. Built a fully functional AI system that analyzes behavioral and form data to predict conversion potential with up to 95% accuracy, delivering instant results on lead uploads (<2s).",
    impact: "Developed a sleek Streamlit interface with real-time scoring, interactive dashboards, and Excel integration. Improved conversion rates by up to 85% and reduced counselor lead triaging time by 2x. The system was appreciated for its simplicity, usability, and seamless integration potential into operational workflows.",
    stack: ["Machine Learning", "Lead Scoring", "Streamlit", "Python", "Data Analysis", "Feature Engineering", "Model Deployment", "Google Sheets Integration", "Real-time Analytics", "Business Intelligence"],
    type: "freelance",
    linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7357284181506195456/",
    certificateImage: lamCert
  },
  {
    id: 2,
    title: "Manufacturing IT and Software 'NextGen' Intern",
    organization: "United Phosphorus Limited (SUPERFORM)",
    organizationUrl: "https://www.upl-ltd.com/",
    period: "May 2025 - July 2025",
    description: "Completed a rewarding two-month internship at UPL (SUPERFORM) as part of the NextGen Internship Program, gaining hands-on experience in Manufacturing IT and witnessing firsthand how digital transformation powers the operational excellence of a global leader in specialty chemicals.",
    impact: "Contributed to Smart Logistics project involving IoT integration, AI/ML for demand forecasting, route optimization, and inventory management. Worked on digital transformation initiatives migrating from manual systems to cloud-based platforms.",
    stack: ["Manufacturing IT", "Digital Transformation", "Smart Logistics", "IoT", "AI/ML", "Cloud Computing", "Data Analytics", "Process Automation"],
    type: "work",
    linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7357044314742427651/",
    certificateImage: uplCert
  },
  {
    id: 3,
    title: "Machine Learning Intern and Data Manager",
    organization: "Sahana Systems Limited",
    organizationUrl: "https://www.sahanasystem.com/",
    period: "June 2024 - August 2024",
    description: "Successfully completed a comprehensive internship at Sahana Systems Limited, Ahmedabad, gaining valuable hands-on experience in Artificial Intelligence and Machine Learning. Worked on cutting-edge Product Vision Intelligence projects and contributed to the team's innovative goals.",
    impact: "Developed and implemented machine learning models for Product Vision Intelligence, achieving significant improvements in data processing and analysis. Contributed to ERP system data management, enhancing operational efficiency and decision-making capabilities through AI-driven insights.",
    stack: ["Artificial Intelligence", "Machine Learning", "Computer Vision", "Product Vision Intelligence", "Data Management", "ERP Systems", "Python", "Data Science", "Problem Solving", "Critical Thinking"],
    type: "work",
    linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7234754375364050944/",
    certificateImage: sahanaCert
  },
  {
    id: 4,
    title: "DSA & Web Development Mentor",
    organization: "Nexus, SVNIT Surat",
    organizationUrl: "https://www.nexus-svnit.in/",
    period: "May 2024 - March 2025",
    description: "Mentored students in Data Structures and Algorithms, and Web Development.",
    impact: "Guided 50+ students of batch 2027 & 2028 in mastering DSA and web development concepts, leading to improved problem-solving and development skills.",
    stack: ["React", "Node.js", "MongoDB", "Express.js", "JavaScript", "Python", "C++", "DSA", "Web Development", "Problem Solving", "Critical Thinking"],
    type: "mentorship",
    images: [mentorship1, mentorship2]
  },
];

const ExperienceTimeline: React.FC = () => {
  const [visibleElements, setVisibleElements] = useState<{ [key: number]: boolean }>({});
  const [selectedCertificate, setSelectedCertificate] = useState<{image: string, title: string, organization: string, period: string} | null>(null);
  const [selectedImages, setSelectedImages] = useState<string[] | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = parseInt(entry.target.getAttribute('data-id') || '0');
          if (entry.isIntersecting) {
            setVisibleElements(prev => ({ ...prev, [id]: true }));
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      itemRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedCertificate) {
          setSelectedCertificate(null);
        }
        if (selectedImages) {
          setSelectedImages(null);
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedCertificate, selectedImages]);

  const getIcon = (type: string, isVisible: boolean) => {
    const baseClass = 'text-2xl md:text-3xl transition-transform duration-500';
    const animateClass = isVisible ? 'scale-110 opacity-100' : 'scale-75 opacity-60';
    switch (type) {
      case 'work':
        return <Briefcase className={`text-electric ${baseClass} ${animateClass}`} aria-label="Work Experience" />;
      case 'freelance':
        return <GraduationCap className={`text-mint ${baseClass} ${animateClass}`} aria-label="Freelance Project" />;
      case 'education':
        return <GraduationCap className={`text-mint ${baseClass} ${animateClass}`} aria-label="Education" />;
      case 'mentorship':
        return <Calendar className={`text-violet ${baseClass} ${animateClass}`} aria-label="Mentorship" />;
      default:
        return <Briefcase className={`text-electric ${baseClass} ${animateClass}`} aria-label="Work Experience" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'work':
        return 'border-electric';
      case 'freelance':
        return 'border-mint';
      case 'education':
        return 'border-mint';
      case 'mentorship':
        return 'border-violet';
      default:
        return 'border-electric';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'work':
        return 'Work Experience';
      case 'freelance':
        return 'Freelance Project';
      case 'education':
        return 'Education';
      case 'mentorship':
        return 'Mentorship';
      default:
        return 'Experience';
    }
  };

  return (
    <section id="experience" ref={sectionRef} className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center md:text-left">
            <span className="text-gradient">Experience</span> Timeline
          </h2>
          <p className="text-white/70 max-w-2xl mb-8 text-center md:text-left">
            My journey through real-world experience in internships, mentorship, and contributions.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-8 md:pl-12 before:content-[''] before:absolute before:left-4 md:before:left-6 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-electric before:via-violet before:to-mint before:rounded-full">
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              ref={el => (itemRefs.current[index] = el)}
              data-id={index}
              className={`relative mb-16 md:mb-20 transition-all duration-700 ease-out ${
                visibleElements[index] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
              aria-label={`Timeline item: ${experience.title} at ${experience.organization}`}
            >
              {/* Icon */}
              <div className="absolute left-[-6px] md:left-0 top-4 p-2 rounded-full bg-dark border border-white/10 z-30 shadow-md flex items-center justify-center">
                {getIcon(experience.type, !!visibleElements[index])}
              </div>

              <div className={`glass-card p-6 md:p-8 mt-2 md:ml-12 shadow-xl hover:shadow-[0_12px_32px_rgba(30,174,219,0.25)] group transition-all duration-300 border-l-4 ${getTypeColor(experience.type)}`}>
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                         experience.type === 'work' ? 'bg-electric/20 text-electric' :
                         experience.type === 'freelance' ? 'bg-mint/20 text-mint' :
                         experience.type === 'education' ? 'bg-mint/20 text-mint' :
                         experience.type === 'mentorship' ? 'bg-violet/20 text-violet' :
                         'bg-electric/20 text-electric'
                       }`}>
                        {getTypeLabel(experience.type)}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-electric transition-colors duration-200">{experience.title}</h3>
                    {experience.organizationUrl ? (
                      <a
                        href={experience.organizationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/80 font-medium hover:text-electric transition-colors duration-200 inline-flex items-center gap-1 group/org"
                      >
                        {experience.organization}
                        <ExternalLink size={14} className="opacity-0 group-hover/org:opacity-100 transition-opacity duration-200" />
                      </a>
                    ) : (
                      <p className="text-white/80 font-medium">{experience.organization}</p>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-gradient-to-r from-electric via-violet to-mint text-dark font-mono px-3 py-1 rounded-full text-xs font-semibold shadow-sm border border-white/10">
                      {experience.period}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <p className="text-white/70 leading-relaxed">{experience.description}</p>
                </div>

                {/* Impact Section */}
                <div className="mb-6 p-4 bg-electric/10 rounded-lg border border-electric/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Award size={16} className="text-electric" />
                    <p className="text-white font-medium">Key Impact</p>
                  </div>
                  <p className="text-white/80 leading-relaxed">{experience.impact}</p>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <p className="text-sm text-white/70 mb-3 font-medium">Technologies & Skills</p>
                  <div className="flex flex-wrap gap-2">
                    {experience.stack.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-dark-accent text-white/80 text-xs rounded-full border border-white/10 hover:bg-electric/20 transition-colors duration-200 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                {(experience.linkedinUrl || experience.certificateUrl || experience.certificateImage || experience.images) && (
                  <div className="flex gap-4 flex-wrap">
                    {experience.linkedinUrl && (
                      <a
                        href={experience.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-electric/80 hover:bg-electric text-white text-sm font-medium transition shadow hover:scale-105 focus:outline-none focus:ring-2 focus:ring-electric/60"
                        aria-label="View LinkedIn profile"
                      >
                        <span>View on LinkedIn</span>
                        <ExternalLink size={14} />
                      </a>
                    )}
                    {(experience.certificateUrl || experience.certificateImage) && (
                      <button
                        onClick={() => experience.certificateImage && setSelectedCertificate({
                          image: experience.certificateImage,
                          title: experience.title,
                          organization: experience.organization,
                          period: experience.period
                        })}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-violet/80 hover:bg-violet text-white text-sm font-medium transition shadow hover:scale-105 focus:outline-none focus:ring-2 focus:ring-violet/60"
                        aria-label="View Certificate"
                      >
                        <span>View Certificate</span>
                        <ExternalLink size={14} />
                      </button>
                    )}
                    {experience.images && (
                      <button
                        onClick={() => setSelectedImages(experience.images)}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-mint/80 hover:bg-mint text-white text-sm font-medium transition shadow hover:scale-105 focus:outline-none focus:ring-2 focus:ring-mint/60"
                        aria-label="View Images"
                      >
                        <span>View Images</span>
                        <Image size={14} />
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative max-w-4xl max-h-[90vh] bg-dark rounded-2xl shadow-2xl border border-white/10 overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h3 className="text-xl font-bold text-white">{selectedCertificate.organization} Certificate</h3>
              <button
                onClick={() => setSelectedCertificate(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="p-6 overflow-auto max-h-[calc(90vh-120px)]">
              <div className="space-y-4">
                <div className="text-center">
                  <img 
                    src={selectedCertificate.image} 
                    alt={`${selectedCertificate.organization} Certificate`} 
                    className="max-w-full h-auto rounded-lg shadow-lg border border-white/10"
                  />
                </div>
                
                <div className="text-center space-y-2">
                  <p className="text-white/80 text-sm">
                    {selectedCertificate.title}
                  </p>
                  <p className="text-electric font-medium">
                    {selectedCertificate.organization}
                  </p>
                  <p className="text-white/60 text-xs">
                    {selectedCertificate.period}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Images Modal */}
      {selectedImages && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative max-w-5xl max-h-[90vh] bg-dark rounded-2xl shadow-2xl border border-white/10 overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h3 className="text-xl font-bold text-white">Mentorship Images</h3>
              <button
                onClick={() => setSelectedImages(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="p-6 overflow-auto max-h-[calc(90vh-120px)]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {selectedImages.map((image, index) => (
                  <div key={index} className="space-y-3">
                    <div className="text-center">
                      <img 
                        src={image} 
                        alt={`Mentorship Image ${index + 1}`} 
                        className="max-w-full h-auto rounded-lg shadow-lg border border-white/10"
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-white/60 text-sm">
                        {/* Mentorship Session {index + 1} */}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-6 pt-4 border-t border-white/10">
                <p className="text-white/80 text-sm">
                  DSA & Web Development Mentorship at Nexus, SVNIT Surat
                </p>
                <p className="text-mint font-medium">
                  May 2024 - March 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ExperienceTimeline;