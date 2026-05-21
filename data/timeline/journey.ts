export interface TimelineItem {
  period: string;
  title: string;
  text: string;
}

export interface Experience {
  role: string;
  organization: string;
  duration: string;
  technologies: string[];
  achievements: string[];
  impact: string;
}

export const journey: TimelineItem[] = [
  {
    period: "2024",
    title: "NextGen Digital Transformation",
    text: "Joined UPL (SUPERFORM) as an intern, contributing to enterprise-level logistics solutions and witnessing digital transformation in specialty chemicals.",
  },
  {
    period: "2024",
    title: "Technical Mentorship",
    text: "Led mentorship initiatives at Nexus, SVNIT Surat, guiding 50+ students through the complexities of DSA and Full Stack Web Development.",
  },
  {
    period: "2024",
    title: "AR Innovation",
    text: "Developed sophisticated AR applications for Mindbend 2024, focusing on secure identity verification using Unity and Vuforia.",
  },
  {
    period: "2023",
    title: "Blockchain & Security",
    text: "Dived deep into Web3 and Decentralized Identity, building trustless authentication systems and exploring smart contract security.",
  },
  {
    period: "2022",
    title: "Foundations of AI & Systems",
    text: "Started exploring Distributed Systems and Machine Learning, focusing on scalable backend architectures and NLP model integration.",
  }
];

export const experiences: Experience[] = [
  {
    role: "AI & Full Stack Developer Intern",
    organization: "UPL (SUPERFORM)",
    duration: "June 2024 - July 2024",
    technologies: ["Next.js", "Node.js", "MongoDB", "Mapbox", "Chart.js", "Tailwind CSS"],
    achievements: [
      "Developed a comprehensive enterprise-grade Smart Logistics Dashboard.",
      "Integrated real-time GPS tracking and route optimization algorithms.",
      "Implemented predictive maintenance alerts reducing vehicle downtime by 15%."
    ],
    impact: "Achieved a 12.4% reduction in Turnaround Time (TAT) and enhanced operational efficiency for global supply chains."
  },
  {
    role: "Lead Technical Mentor",
    organization: "Nexus, SVNIT Surat",
    duration: "Aug 2023 - Present",
    technologies: ["DSA", "Web Development", "System Design", "Python", "React"],
    achievements: [
      "Mentored 50+ students in mastering Data Structures, Algorithms, and Full Stack Engineering.",
      "Developed an ML-driven Lead Scoring System with 95% accuracy for admissions.",
      "Built a high-performance AI inference pipeline with sub-2s response times."
    ],
    impact: "Empowered the next generation of engineers with industry-ready skills and technical excellence."
  }
];
