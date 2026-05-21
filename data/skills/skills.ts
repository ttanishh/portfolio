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
    title: "Backend",
    skills: ["Python", "FastAPI", "Node.js", "Spring Boot", "Go"]
  },
  {
    title: "AI / ML",
    skills: ["NLP", "BERT", "RAG", "LLMs", "PyTorch", "TensorFlow"]
  },
  {
    title: "Cloud & DevOps",
    skills: ["Docker", "Kubernetes", "Kafka", "AWS", "CI/CD"]
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Vector Databases"]
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "TypeScript"]
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
