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
  roles: ["AI Systems Engineer", "Backend Developer", "Distributed Systems Builder", "Data Analyst"],
  headline: "Delivering Engineering Brilliance — Smart, Secure, and Always Ready to Grow.",
  identity: "U22CS069, B.Tech in Computer Science and Engineering, SVNIT'26",
  description: "Delivering Engineering Brilliance—Smart, Secure, and Always Ready to Grow.",
  shortDescription: "I enjoy building systems that solve meaningful problems at scale. Clean architecture and practical impact matter more than unnecessary complexity.",
  heroDescription: "Developing with Vision; Fostering TechnoCommercial.",
  areas: ["AI / GenAI", "Distributed Systems", "Backend Engineering", "Event-driven Architectures", "Cloud Systems", "Web3", "Security"],
  links: {
    github: "https://github.com/ttanishh",
    linkedin: "https://linkedin.com/in/tanish2311",
    email: "mailto:tp66182303@gmail.com",
    resume: "#"
  },
  education: {
    program: "B.Tech in Computer Science and Engineering",
    school: "SVNIT'26",
    detail: "U22CS069. Grade: 9.2 CGPA (Expected)."
  },
  certifications: [
    "AWS Certified Solutions Architect",
    "Deep Learning Specialization (DeepLearning.AI)",
    "Distributed Systems by MIT (OpenCourseWare)",
    "Solidity & Web3 Security Certificate"
  ],
  achievements: ["7+ Projects Completed", "2+ Years of Engineering Focus", "50+ Students Mentored"]
};
