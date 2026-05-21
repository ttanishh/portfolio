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
    period: "2020",
    title: "Genesis of Code",
    text: "Began my journey with Python and C++, exploring the fundamentals of algorithms and data structures while building small scale CLI tools.",
  },
  {
    period: "2021",
    title: "Intelligence Layer",
    text: "Secured an AI internship focused on NLP models. Gained hands-on experience with BERT and transformer architectures to solve sentiment analysis problems.",
  },
  {
    period: "2022",
    title: "Scaling the Backend",
    text: "Shifted focus to distributed systems. Started building scalable backend services and explored event-driven architectures using Apache Kafka.",
  },
  {
    period: "2023",
    title: "Trustless Systems",
    text: "Dived into Web3 and blockchain development. Built smart contracts and decentralized authentication protocols to ensure user-centric data sovereignty.",
  },
  {
    period: "2024",
    title: "Autonomous Intelligence",
    text: "Current focus is synthesizing AI and distributed systems to build autonomous, scalable agents and high-fidelity RAG pipelines for production.",
  }
];

export const experiences: Experience[] = [
  {
    role: "AI Systems Engineer",
    organization: "Tech Innovators Lab",
    duration: "Jan 2024 - Present",
    technologies: ["Python", "PyTorch", "FastAPI", "Docker", "Pinecone"],
    achievements: [
      "Designed and deployed a production-grade RAG pipeline for internal document retrieval.",
      "Optimized model inference latency by 30% using quantization and efficient caching strategies.",
      "Led the transition to a microservices architecture for AI model deployment."
    ],
    impact: "Streamlined data access for 50+ researchers, reducing query response times significantly."
  },
  {
    role: "Backend Developer",
    organization: "Scalable Systems Corp",
    duration: "June 2022 - Dec 2023",
    technologies: ["Node.js", "Go", "Kafka", "PostgreSQL", "Kubernetes"],
    achievements: [
      "Developed an event-driven notification system handling 1M+ daily events.",
      "Implemented a distributed locking mechanism to ensure data consistency across clusters.",
      "Automated CI/CD pipelines, reducing deployment errors by 15%."
    ],
    impact: "Improved system reliability and enabled seamless horizontal scaling during high-traffic periods."
  }
];
