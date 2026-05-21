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
    id: "emergency-dispatch",
    title: "Emergency Response Dispatch System",
    label: "Distributed Systems",
    problem: "Inefficient routing and resource allocation during large-scale emergencies, leading to delayed response times and system bottlenecks.",
    architecture: "Microservices-based architecture with real-time geographic tracking and prioritized queuing using Redis and WebSockets.",
    technologies: ["Node.js", "Redis", "WebSockets", "Leaflet.js", "PostgreSQL"],
    challenges: "Handling thousands of concurrent real-time updates without latency while ensuring high availability during peak loads.",
    solution: "Implemented a prioritized dispatch algorithm that automatically assigns the nearest available unit based on real-time traffic data and workload.",
    impact: "Reduced average response time by 25% and successfully handled 10,000+ simulated concurrent requests.",
    image: "/placeholder.svg",
    github: "https://github.com/ttanishh",
    demo: "#"
  },
  {
    id: "crime-reporting",
    title: "Crime Reporting Platform",
    label: "Full Stack",
    problem: "Lack of a secure, anonymous, and user-friendly platform for citizens to report crimes and for law enforcement to track patterns accurately.",
    architecture: "Serverless backend with a secure frontend and encrypted data storage leveraging AWS and MongoDB.",
    technologies: ["React", "FastAPI", "MongoDB", "AWS Lambda", "AES Encryption"],
    challenges: "Ensuring absolute anonymity for whistleblowers while developing a robust verification system for reports to prevent spam.",
    solution: "Built an end-to-end encrypted reporting pipeline with automated categorization using basic NLP and secure vaulting.",
    impact: "Secured data of over 500 reports and automated categorization reduced manual sorting time by 40%.",
    image: "/placeholder.svg",
    github: "https://github.com/ttanishh",
    demo: "#"
  },
  {
    id: "web3-auth",
    title: "Web3 Authentication System",
    label: "Web3 / Security",
    problem: "Traditional OAuth systems rely on centralized authorities, posing a risk to user privacy and control over personal identity data.",
    architecture: "Decentralized identity protocol leveraging blockchain for passwordless, trustless authentication and IPFS for storage.",
    technologies: ["Solidity", "Ethers.js", "React", "WalletConnect", "IPFS"],
    challenges: "Managing wallet-based session persistence securely and optimizing gas costs for identity verification transactions.",
    solution: "Developed a signature-based authentication flow that verifies ownership without storing private keys or sensitive data.",
    impact: "Eliminated the need for centralized user databases and reduced onboarding friction for Web3 native users by 60%.",
    image: "/placeholder.svg",
    github: "https://github.com/ttanishh",
    demo: "#"
  },
  {
    id: "kafka-event-driven",
    title: "Kafka Event-driven System",
    label: "Backend Infrastructure",
    problem: "Tight coupling between services in a large-scale e-commerce platform causing cascading failures and scaling difficulties.",
    architecture: "Event-driven architecture using Kafka as a central message broker for asynchronous communication between microservices.",
    technologies: ["Apache Kafka", "Spring Boot", "Docker", "Prometheus", "Grafana"],
    challenges: "Ensuring exactly-once delivery semantics and monitoring complex asynchronous message flows in real-time.",
    solution: "Re-architected the system into decoupled producers and consumers with idempotent processing logic and robust DLQ support.",
    impact: "Increased system resilience and uptime by 99.9% and enabled independent scaling of services based on throughput.",
    image: "/placeholder.svg",
    github: "https://github.com/ttanishh",
    demo: "#"
  },
  {
    id: "sponsorship-detection",
    title: "Sponsorship Detection System",
    label: "AI / ML",
    problem: "Difficulty for brands to identify and verify organic vs. sponsored content in long-form videos across multiple platforms.",
    architecture: "Multi-modal AI pipeline analyzing audio, video frames, and transcripts using computer vision and NLP models.",
    technologies: ["Python", "PyTorch", "OpenCV", "Whisper", "BERT"],
    challenges: "Detecting subtle visual cues of sponsorship and syncing audio and visual detections accurately across diverse video formats.",
    solution: "Trained a custom BERT model for text analysis and combined it with a CNN-based video recognition model for multi-modal verification.",
    impact: "Achieved 92% accuracy in detecting sponsored segments and reduced manual auditing time for marketing teams by 70%.",
    image: "/placeholder.svg",
    github: "https://github.com/ttanishh",
    demo: "#"
  },
  {
    id: "genai-rag-experiments",
    title: "GenAI / RAG Experiments",
    label: "AI Research",
    problem: "LLMs often hallucinate or provide outdated information when queried about specific, private, or rapidly changing datasets.",
    architecture: "Retrieval Augmented Generation (RAG) pipeline with hybrid search, reranking, and vector embeddings.",
    technologies: ["LangChain", "OpenAI", "Pinecone", "FastAPI", "Python"],
    challenges: "Optimizing chunking strategies for diverse document types and reducing latency in the retrieval-generation loop.",
    solution: "Implemented a modular RAG system with multi-stage retrieval and context filtering to ensure high-fidelity factual responses.",
    impact: "Significantly improved factual accuracy of model responses and developed a reusable framework for rapid RAG prototyping.",
    image: "/placeholder.svg",
    github: "https://github.com/ttanishh",
    demo: "#"
  }
];
