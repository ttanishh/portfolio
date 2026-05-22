export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface LabItem {
  title: string;
  items: string[];
}

export const skillGroups: SkillCategory[] = [
  {
    title: "Programming",
    skills: ["Python", "JavaScript", "Java", "C++", "SQL", "HTML5"]
  },
  {
    title: "Frameworks",
    skills: ["PyTorch", "SpringBoot", "React", "Next", "Node", "FastAPI", "Streamlit", "Kafka"]
  },
  {
    title: "Tools",
    skills: ["Postman", "GitHub", "Docker", "Jenkins"]
  },
  {
    title: "Databases",
    skills: ["MySQL", "NoSQL", "MongoDB"]
  },
  {
    title: "CS Fundamentals",
    skills: ["DSA", "OS", "OOPS", "System Design", "DBMS", "CN"]
  }
];

export const labItems: LabItem[] = [
  {
    title: "Experiments",
    items: ["MCP", "RAG testing", "AI agents"]
  },
  {
    title: "Mini Tools",
    items: ["Small utilities", "Visual demos"]
  },
  {
    title: "Side Projects",
    items: ["Work in progress ideas"]
  },
  {
    title: "Writing",
    items: ["System Design Notes", "AI research"]
  }
];
