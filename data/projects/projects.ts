export interface Project {
  id: string;
  title: string;
  label: string;
  problem: string;
  architecture: string;
  technologies: string[];
  challenges: string;
  solution: string;
  impact: string;
  image: string;
  github: string;
  demo: string;
}

export const projects: Project[] = [
  {
    id: "upl-internship",
    title: "Smart Logistics Dashboard - UPL Internship",
    label: "Enterprise Solutions",
    problem: "Inefficient tracking and visualization of logistics data leading to high turnaround time and frequent downtime.",
    architecture: "Real-time dashboard with integrated Mapbox for tracking and Chart.js for analytics, backed by a Node.js/MongoDB API.",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Chart.js", "Node.js", "MongoDB", "Mapbox"],
    challenges: "Handling real-time data ingestion from multiple fleet sources and ensuring low-latency visualization.",
    solution: "Developed a centralized monitoring system with predictive downtime alerts and optimized route visualization.",
    impact: "12.4% reduction in TAT, 15% reduction in downtime.",
    image: "/placeholder.svg",
    github: "https://github.com/ttanishh",
    demo: "#"
  },
  {
    id: "kavach-crime-reporting",
    title: "KAVACH - Crime Reporting & Prevention Platform",
    label: "Blockchain & AI",
    problem: "Traditional crime reporting systems lack transparency and predictive capabilities to prevent future incidents.",
    architecture: "Hybrid architecture combining a secure blockchain ledger for reports with an AI-driven predictive model for crime hotspots.",
    technologies: ["Next.js", "Node.js", "MongoDB", "Solidity", "TensorFlow"],
    challenges: "Balancing data privacy with transparency and optimizing AI models for real-time risk assessment.",
    solution: "Integrated Solidity smart contracts for immutable report storage and TensorFlow for analyzing historical data to predict crime trends.",
    impact: "Secured data integrity and provided data-driven insights for faster law enforcement response.",
    image: "/placeholder.svg",
    github: "https://github.com/ttanishh",
    demo: "#"
  },
  {
    id: "web3-auth",
    title: "Web3 Authentication System",
    label: "Web3 / Security",
    problem: "Centralized authentication systems are vulnerable to single points of failure and data breaches.",
    architecture: "Decentralized identity verification using Ethereum wallets and smart contracts.",
    technologies: ["Solidity", "Ethers.js", "React"],
    challenges: "Ensuring secure session management without a central database and optimizing gas efficiency.",
    solution: "Built a passwordless authentication flow that leverages cryptographic signatures for secure user login.",
    impact: "Eliminated centralized database risks and improved user sovereignty over identity.",
    image: "/placeholder.svg",
    github: "https://github.com/ttanishh",
    demo: "#"
  },
  {
    id: "kafka-event-driven",
    title: "Kafka Event-driven System",
    label: "Distributed Systems",
    problem: "Synchronous communication between services causing latency and bottleneck issues in high-traffic applications.",
    architecture: "Decoupled producers/consumers with idempotent processing logic using Apache Kafka.",
    technologies: ["Apache Kafka", "Spring Boot", "Docker"],
    challenges: "Managing message delivery guarantees and ensuring consistency across distributed consumers.",
    solution: "Implemented a robust event-driven pipeline using Kafka for reliable, asynchronous message passing and state management.",
    impact: "Improved system scalability and fault tolerance by decoupling service dependencies.",
    image: "/placeholder.svg",
    github: "https://github.com/ttanishh",
    demo: "#"
  },
  {
    id: "sponsorship-detection",
    title: "Sponsorship Detection System",
    label: "AI / ML",
    problem: "Manual detection of sponsorships in digital content is time-consuming and prone to errors.",
    architecture: "Multi-modal AI pipeline combining text analysis and visual recognition.",
    technologies: ["Python", "PyTorch", "BERT", "CNN"],
    challenges: "Syncing multi-modal features and training models on diverse video formats.",
    solution: "Developed a multi-modal AI system that combines custom BERT for text and CNN for visual verification to automatically flag sponsored segments.",
    impact: "Increased detection accuracy and significantly reduced manual auditing time.",
    image: "/placeholder.svg",
    github: "https://github.com/ttanishh",
    demo: "#"
  },
  {
    id: "genai-rag-experiments",
    title: "GenAI / RAG experiments",
    label: "AI / GenAI",
    problem: "General-purpose LLMs lack specific context or domain-specific knowledge for specialized queries.",
    architecture: "Retrieval-Augmented Generation (RAG) using vector embeddings for context-aware response generation.",
    technologies: ["LangChain", "OpenAI", "Pinecone"],
    challenges: "Optimizing retrieval relevance and managing context window constraints of LLMs.",
    solution: "Built an experimental pipeline using LangChain and Pinecone to provide accurate, contextually relevant answers based on custom datasets.",
    impact: "Demonstrated the power of RAG in reducing hallucinations and improving factual accuracy.",
    image: "/placeholder.svg",
    github: "https://github.com/ttanishh",
    demo: "#"
  }
];
