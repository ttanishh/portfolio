export interface Profile {
  name: string;
  roles: string[];
  headline: string;
  identity: string;
  description: string;
  shortDescription: string;
  heroDescription: string;
  areas: string[];
  links: {
    github: string;
    linkedin: string;
    email: string;
    resume: string;
  };
  education: {
    program: string;
    school: string;
    detail: string;
  };
  certifications: string[];
  achievements: string[];
}

export const profile: Profile = {
  name: "Tanish Panchal",
  roles: [
    "AI + Systems Engineer",
    "Backend Developer",
    "Distributed Systems Builder"
  ],
  headline: "Building Intelligent Systems & Scalable Experiences",
  identity: "AI + Systems Engineer | Backend | Distributed Builder",
  description: "I design and build AI-driven systems, scalable architectures, distributed applications, and modern software solutions.",
  shortDescription: "I enjoy engineering because it turns ambiguity into systems: something measurable, usable, and sturdy enough for real people to depend on.",
  heroDescription: "I design and build AI-driven systems, scalable architectures, distributed applications, and modern software solutions.",
  areas: [
    "AI / GenAI",
    "Distributed Systems",
    "Backend Engineering",
    "Event-driven Architectures",
    "Cloud Systems",
    "Web3",
    "Security"
  ],
  links: {
    github: "https://github.com/ttanishh",
    linkedin: "https://linkedin.com/in/tanish2311",
    email: "mailto:tp66182303@gmail.com",
    resume: "#"
  },
  education: {
    program: "B.Tech in Computer Science",
    school: "SVNIT Surat",
    detail: "Focus on Intelligent Systems and Distributed Backend Architectures. Grade: 9.2 CGPA (Expected)."
  },
  certifications: [
    "AWS Certified Solutions Architect",
    "Deep Learning Specialization (DeepLearning.AI)",
    "Distributed Systems by MIT (OpenCourseWare)",
    "Solidity & Web3 Security Certificate"
  ],
  achievements: [
    "Reduced average system response time by 25% in internship role.",
    "Built and deployed a Kafka-driven event system handling 1M+ events/day.",
    "Led a team of 4 to win a regional system design hackathon.",
    "Authored research notes on RAG pipeline optimization."
  ]
};
