import React, { useRef, useState, useEffect } from 'react';
import { Github, ExternalLink, Users, MessageCircle, Star, Eye, X, Link, Calendar, MapPin, Award } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

interface Project {
  id: number;
  title: string;
  description: string;
  detailedDescription?: string;
  image: string;
  status: 'Live' | 'In Progress' | 'Demo';
  role: string;
  stack: string[];
  github?: string;
  demo?: string;
  collaborators?: string[] | { name: string; url?: string; role?: string }[];
  insights?: string[];
  collaborationOpen?: boolean;
  client?: string;
  clientWebsite?: string;
  presentation?: string;
  video?: string;
  features?: string[];
  technicalDetails?: {
    architecture?: string;
    security?: string[];
    performance?: string[];
    challenges?: string[];
    futureEnhancements?: string[];
  };
  useCases?: string[];
  marketScope?: string[];
  implementation?: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Smart Logistics Dashboard - UPL Internship",
    description: "A comprehensive enterprise-grade logistics monitoring system developed during UPL internship that revolutionizes supply chain management. Features real-time fleet tracking, intelligent route optimization, inventory analytics, and predictive maintenance capabilities for data-driven decision making.",
    detailedDescription: "A comprehensive enterprise-grade logistics monitoring system developed during UPL internship that revolutionizes supply chain management. Features real-time fleet tracking, intelligent route optimization, inventory analytics, and predictive maintenance capabilities for data-driven decision making. The system integrates with UPL's existing ERP systems to provide seamless data flow and actionable insights for logistics managers. Built with modern web technologies and deployed on cloud infrastructure for scalability and reliability. The dashboard provides comprehensive fleet management capabilities including real-time GPS tracking, route optimization algorithms, ETA predictions, and performance analytics. The inventory management module features intelligent stock forecasting, automated reorder alerts, and real-time stock availability tracking. The system includes advanced analytics with interactive visualizations, heatmaps for route performance analysis, and predictive maintenance algorithms that reduce vehicle downtime by 15%. The platform is designed with a modular architecture supporting microservices, real-time data processing, and scalable cloud deployment.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    status: "Live",
    role: "Data Analyst and Developer",
    stack: [
      "Next.js", "TypeScript", "Tailwind CSS", "Chart.js", "D3.js", "Node.js", 
      "Express.js", "MongoDB", "Mapbox API", "Vercel", "Data Visualization",
      "Real-time Analytics", "RESTful APIs", "JWT Authentication"
    ],
    github: "https://github.com/ttanishh/Smart-Logistics-Demo-Dashboard",
    demo: "https://smart-logistics-dashboard.vercel.app/",
    client: "UPL (United Phosphorus Limited) - SUPERFORM",
    collaborators: [
      { name: "Tanish Panchal", url: "https://github.com/ttanishh", role: "Data Analyst and Developer" },
      { name: "UPL Digital Transformation Team", role: "Client & Requirements" },
      { name: "UPL (United Phosphorus Limited)", role: "Enterprise Client" }
    ],
    insights: [
      "🚚 Real-time fleet monitoring with GPS tracking, route optimization, and ETA predictions",
      "📊 Advanced analytics dashboard with KPIs for TAT reduction and detention charge optimization",
      "📦 Intelligent inventory management with stock forecasting and automated reorder alerts",
      "🗺️ Interactive route performance metrics with heatmaps of delayed zones and bottleneck analysis",
      "⚡ Predictive maintenance system reducing vehicle downtime by 15%",
      "📈 Data-driven insights leading to 12.4% reduction in vehicle turnaround time",
      "🏭 Complete 8-week enterprise project with requirement gathering, API integration, and deployment"
    ],
    features: [
      "Real-time GPS fleet tracking and monitoring",
      "Intelligent route optimization algorithms",
      "Predictive maintenance system",
      "Inventory management with automated alerts",
      "Advanced analytics and data visualization",
      "ERP system integration",
      "Cloud-based scalable architecture"
    ],
    technicalDetails: {
      architecture: "Microservices-based architecture with real-time data processing and cloud deployment",
      performance: [
        "30+ FPS real-time tracking",
        "12.4% reduction in vehicle turnaround time",
        "15% reduction in vehicle downtime",
        "Scalable cloud infrastructure"
      ],
      challenges: [
        "Integration with legacy ERP systems",
        "Real-time data synchronization",
        "Large-scale fleet management",
        "Predictive analytics implementation"
      ]
    },
    useCases: [
      "Enterprise logistics management",
      "Supply chain optimization",
      "Fleet performance monitoring",
      "Inventory forecasting"
    ],
    collaborationOpen: false
  },
  {
    id: 2,
    title: "KAVACH - Crime Reporting & Prevention Platform",
    description: "A revolutionary interactive, real-time, map-based crime reporting system that empowers communities and supports law enforcement for faster, data-driven crime prevention. Combines AI/ML for predictive analytics, blockchain for secure data management, and real-time communication.",
    detailedDescription: "KAVACH aims to revolutionize crime reporting and prevention by providing an interactive, real-time, map-based crime reporting system. It addresses shortcomings in traditional crime reporting such as delayed law enforcement responses, lack of interactivity, poor data reliability, and minimal public engagement. The platform empowers communities and supports authorities for faster, data-driven crime prevention. The system features AI/ML capabilities for analyzing historical crime data to identify patterns and predict high-risk zones, automatically categorizing and prioritizing incidents based on severity and type, and providing dynamic risk assessments. Blockchain technology ensures all incident reports are stored on an immutable ledger, enhancing data integrity and building public trust through transparent auditable trails. The technical stack includes Next.js for responsive server-rendered web application, Node.js with Express for RESTful APIs and real-time data handling, MongoDB for scalable NoSQL database storage, TensorFlow/PyTorch for ML models, and Ethereum/Hyperledger for smart contracts and immutable ledger services. The platform includes interactive crime maps with live visualization, incident reporting forms with image uploads and location tagging, law enforcement dashboards with heatmaps and analytics, and comprehensive notification systems.",
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg",
    status: "Live",
    role: "Blockchain Developer",
    stack: [
      "Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", 
      "MongoDB", "Solidity", "Web3.js", "TensorFlow", "PyTorch", "Machine Learning",
      "Google Maps API", "Firebase", "Docker", "Vercel"
    ],
    github: "https://github.com/AayudhPanchal/MB-Kavach-",
    demo: "https://kavach-crime-hub.vercel.app/",
    client: "Mindbend 2024 Hackathon",
    clientWebsite: "https://docs.google.com/presentation/d/1oIK-hbCKmE9foj8q1B0eBrHTTsiojjRF/edit?usp=sharing&ouid=108865177191578428927&rtpof=true&sd=true",
    presentation: "https://docs.google.com/presentation/d/1oIK-hbCKmE9foj8q1B0eBrHTTsiojjRF/edit?usp=sharing&ouid=108865177191578428927&rtpof=true&sd=true",
    collaborators: [
      { name: "Aayudh Panchal", url: "https://www.linkedin.com/in/aayudh-panchal/", role: "Machine Learning Developer" },
      { name: "Misbah Shaikh", url: "https://www.linkedin.com/in/misbahsrshaikh/", role: "Core Functionality" },
      { name: "Tanish Panchal", url: "https://github.com/ttanishh", role: "Blockchain Developer" },
      { name: "Mindbend 2024", role: "Hackathon Platform" }
    ],
    insights: [
      "🗺️ Interactive crime map with real-time incident reporting and location tracking",
      "🤖 ML-powered hotspot prediction and incident classification using historical data",
      "⛓️ Blockchain integration for immutable incident records and data integrity",
      "📊 Real-time analytics dashboard with heatmaps and crime trend visualization",
      "🔔 Instant notifications to nearby police and community members",
      "🏆 Comprehensive solution addressing traditional crime reporting limitations",
      "📱 Responsive design supporting mobile, tablet, and desktop platforms"
    ],
    features: [
      "Interactive crime map with real-time visualization",
      "AI/ML-powered hotspot prediction",
      "Blockchain-based immutable records",
      "Real-time notifications and alerts",
      "Law enforcement dashboard with analytics",
      "Incident reporting with image uploads",
      "Multi-platform responsive design"
    ],
    technicalDetails: {
      architecture: "Modular microservices architecture with MVC design pattern",
      security: [
        "Blockchain-based immutable data storage",
        "Multi-level authentication",
        "Encrypted data transmission",
        "Privacy regulation compliance"
      ],
      performance: [
        "Real-time data processing",
        "Scalable cloud infrastructure",
        "API-first design for integration",
        "Continuous deployment pipeline"
      ],
      challenges: [
        "Integration with legacy law enforcement systems",
        "Real-time data reliability",
        "Privacy and security compliance",
        "Public engagement and adoption"
      ],
      futureEnhancements: [
        "Machine Learning Integration for adaptive learning",
        "Blockchain Verification for immutable records",
        "Biometric Cross-referencing with facial recognition",
        "Multi-document Processing capabilities"
      ]
    },
    useCases: [
      "Neighborhood Watch programs",
      "City-wide safety and crime prevention",
      "Law enforcement resource allocation",
      "Community safety awareness"
    ],
    marketScope: [
      "Urban environments with rising crime complexities",
      "Municipal governments for emergency preparedness",
      "Law enforcement agencies for data-driven insights",
      "Community organizations for safety initiatives"
    ],
    implementation: [
      "Agile methodology with iterative cycles",
      "Continuous integration and deployment",
      "API-first design for seamless integration",
      "Scalable infrastructure for growth"
    ],
    collaborationOpen: false
  },
  {
    id: 3,
    title: "AR ID Card Reader - Advanced Security System",
    description: "A sophisticated Augmented Reality security application that leverages computer vision and AR technology to create an efficient, secure, and user-friendly identity verification system. Features real-time ID card recognition, OCR data extraction, and secure document verification.",
    detailedDescription: "This project showcases two innovative Augmented Reality applications developed for Mindbend 2024 at SVNIT Surat in March 2024. The AR ID Card Reader is a sophisticated security application that leverages augmented reality technology to create an efficient, secure, and user-friendly identity verification system. Built for Mindbend 2024, this application represents a modern approach to document verification that combines computer vision, AR tracking, and secure data processing. The system features real-time ID card recognition using Vuforia's robust image recognition engine, multi-format support for various ID card types, continuous tracking with movement compensation, and advanced OCR processing for data extraction. The technical architecture includes Unity implementation with Vuforia integration, comprehensive security features with encrypted processing and anti-fraud measures, and optimized performance maintaining 30+ FPS during recognition and tracking. The application supports various lighting conditions, multiple viewing angles, and includes advanced features like authenticity verification, template matching, and duplicate detection to prevent fraud.",
    image: "https://images.pexels.com/photos/7319168/pexels-photo-7319168.jpeg",
    status: "Demo",
    role: "Unity Developer and C# Scripting",
    stack: [
      "Unity", "C#", "Vuforia", "AR Foundation", "Computer Vision", 
      "OCR", "Image Recognition", "Mobile Development", "Security Protocols",
      "Data Encryption", "Real-time Processing", "Vuforia Database", "Template Matching"
    ],
    github: "https://github.com/ttanishh/AR-Card-Recognition-Furnish",
    demo: "https://photos.google.com/share/AF1QipPN2p5pTarz4trqy5_MSE841nohyGKUuoKMgrEVBNtc1hCKt3F0npUbZ9hqU5aPag?pli=1&key=b3N4SzRjdHlnY3BzVk05WWVIcDF3dExtTjg2YzN3",
    video: "https://photos.google.com/share/AF1QipPN2p5pTarz4trqy5_MSE841nohyGKUuoKMgrEVBNtc1hCKt3F0npUbZ9hqU5aPag?pli=1&key=b3N4SzRjdHlnY3BzVk05WWVIcDF3dExtTjg2YzN3",
    client: "Mindbend 2024, SVNIT Surat",
    collaborators: [
      { name: "Tanish Panchal", url: "https://github.com/ttanishh", role: "Unity Developer and C# Scripting" },
      { name: "Neem Sheth", url: "https://www.linkedin.com/in/neem-sheth/", role: "AR Developer" },
      { name: "SVNIT Surat", url: "https://svnit.ac.in", role: "Academic Institution" },
      { name: "Mindbend 2024", role: "Hackathon Platform" }
    ],
    insights: [
      "🪪 Multi-format ID card recognition supporting driver's licenses, national IDs, employee badges, student IDs",
      "🔍 Real-time OCR data extraction with field mapping, validation, and data consistency checks",
      "🔒 Advanced security features including authenticity verification, anti-fraud measures, and duplicate detection",
      "📱 Vuforia-powered AR tracking with continuous monitoring, movement compensation, and partial occlusion handling",
      "⚡ Optimized performance maintaining 30+ FPS during recognition and tracking with memory management",
      "🌐 Extensible architecture supporting various lighting conditions, viewing angles, and card materials",
      "🏆 Presented at Mindbend 2024 with live demonstration of security applications and practical use cases",
      "🔐 Encrypted processing with local processing options and secure storage protocols"
    ],
    features: [
      "Real-time ID card recognition and tracking",
      "Multi-format document support",
      "Advanced OCR data extraction",
      "Anti-fraud security measures",
      "Vuforia-powered AR tracking",
      "Template matching and validation",
      "Encrypted data processing"
    ],
    technicalDetails: {
      architecture: "Unity-based AR system with Vuforia integration and computer vision pipeline",
      security: [
        "Encrypted data processing and transmission",
        "Local processing options for sensitive operations",
        "Authenticity verification and anti-fraud measures",
        "Template matching and duplicate detection"
      ],
      performance: [
        "30+ FPS during recognition and tracking",
        "Memory-efficient image processing",
        "Battery-optimized processing",
        "Network-efficient data transmission"
      ],
      challenges: [
        "Handling various card materials and conditions",
        "Variable lighting environments",
        "Movement and tremor compensation",
        "Multi-language text recognition"
      ],
      futureEnhancements: [
        "Machine Learning Integration for adaptive learning",
        "Blockchain Verification for immutable records",
        "Biometric Cross-referencing with facial recognition",
        "Multi-document Processing capabilities"
      ]
    },
    useCases: [
      "Airport security verification",
      "Building access control",
      "Event entry management",
      "Border control assistance",
      "Employee verification systems",
      "Government services automation"
    ],
    collaborationOpen: false
  },
  {
    id: 4,
    title: "Leads Analysis Model (LAM) - ML-Powered Lead Scoring",
    description: "An advanced machine learning system that revolutionizes lead qualification and scoring for educational institutions. Combines predictive analytics, automated scoring algorithms, and interactive dashboards to optimize conversion rates and resource allocation.",
    detailedDescription: "An advanced machine learning system that revolutionizes lead qualification and scoring for educational institutions. Combines predictive analytics, automated scoring algorithms, and interactive dashboards to optimize conversion rates and resource allocation. The system features sophisticated ML algorithms for analyzing lead data patterns, predicting conversion probability, and automatically scoring leads based on multiple parameters including engagement level, demographic information, and behavioral patterns. The platform includes a comprehensive RESTful API for seamless integration with existing CRM systems, batch processing capabilities for handling large-scale lead analysis, and automated data export functionality supporting multiple formats. The interactive Streamlit dashboard provides real-time analytics, visualization of lead trends, and performance metrics for educational institutions to make data-driven decisions about resource allocation and marketing strategies.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    status: "Live",
    role: "Solo Project Developer",
    stack: [
      "Python", "Flask", "Streamlit", "Machine Learning", "scikit-learn", 
      "Pandas", "NumPy", "Docker", "Railway", "RESTful APIs", "Data Processing"
    ],
    github: "https://github.com/ttanishh/Leads-Analysis-Model",
    demo: "https://leads-analysis-model-frontend-fpigbwtskthzhmahivkqwd.streamlit.app/",
    client: "Careerline Education Foundation",
    clientWebsite: "https://careerlineeducation.com",
    collaborators: [
      { name: "Tanish Panchal", url: "https://github.com/ttanishh", role: "Solo Project Developer" },
      { name: "Careerline Education Foundation", url: "https://careerlineeducation.com", role: "Client" }
    ],
    insights: [
      "🤖 Advanced ML algorithms for predictive lead scoring and qualification",
      "📊 Interactive Streamlit dashboard with real-time analytics and visualization",
      "🔗 RESTful API for seamless integration with existing CRM systems",
      "📈 Batch processing capabilities for large-scale lead analysis",
      "📋 Automated data export in multiple formats (CSV, Excel, JSON)",
      "☁️ Cloud deployment on Railway with Docker containerization",
      "🎯 Proven ROI improvement for educational lead conversion optimization"
    ],
    features: [
      "Predictive lead scoring algorithms",
      "Interactive analytics dashboard",
      "RESTful API integration",
      "Batch processing capabilities",
      "Automated data export",
      "Cloud deployment with Docker",
      "Real-time analytics and visualization"
    ],
    technicalDetails: {
      architecture: "Microservices architecture with ML pipeline and RESTful API",
      performance: [
        "Real-time lead scoring",
        "Batch processing for large datasets",
        "Scalable cloud infrastructure",
        "Automated data export functionality"
      ],
      challenges: [
        "Integration with existing CRM systems",
        "Large-scale data processing",
        "Real-time analytics implementation",
        "Educational sector compliance"
      ]
    },
    useCases: [
      "Educational lead qualification",
      "Marketing campaign optimization",
      "Resource allocation decisions",
      "Conversion rate improvement"
    ],
    collaborationOpen: false
  },
  {
    id: 5,
    title: "Brew AI Cafe ☕🤖 - AI-Powered Coffee Experience",
    description: "A revolutionary AI-powered coffee shop platform that transforms the traditional cafe experience through intelligent personalization, immersive virtual tours, and seamless digital interactions. Combines cutting-edge AI technology with elegant design.",
    detailedDescription: "A revolutionary AI-powered coffee shop platform that transforms the traditional cafe experience through intelligent personalization, immersive virtual tours, and seamless digital interactions. Combines cutting-edge AI technology with elegant design to create the future of coffee culture. The platform features an intelligent BrewBot AI system that provides personalized coffee recommendations based on user preferences, mood, and previous orders. The immersive 360° virtual tour allows customers to explore the cafe environment before visiting, while the custom latte art preview system generates real-time designs for personalized beverages. The platform includes ambient soundscapes and mood-based music selection to enhance the digital cafe experience, along with a seamless online reservation system with real-time table availability tracking. Built as a Progressive Web App with offline capabilities and push notifications, the system provides a modern, responsive design optimized for all devices and accessibility standards.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
    status: "Live",
    role: "Developer and AI Integration",
    stack: [
      "React", "TypeScript", "Tailwind CSS", "AI/ML", "Vite", "Bun", 
      "Three.js", "WebGL", "Audio APIs", "Responsive Design", "PWA"
    ],
    github: "https://github.com/ttanishh/Cafe-Template-",
    demo: "https://cafe-template-two.vercel.app/",
    client: "Koe The Kafe, Surat",
    clientWebsite: "https://hanushajain66.github.io/Final-KOE-submit/",
    collaborators: [
      { name: "Tanish Panchal", url: "https://github.com/ttanishh", role: "Developer and AI Integration" },
      { name: "Suchi", url: "https://www.linkedin.com/in/suchi-desai-726444290/", role: "Team Member" },
      { name: "Hanusha", url: "https://www.linkedin.com/in/hanusha-jain-332b06288/", role: "Team Member" },
      { name: "Lavanya", url: "https://www.linkedin.com/in/lavanya-pinjarkar-616384277/", role: "Team Member" },
      { name: "Koe The Kafe, Surat", role: "Client" }
    ],
    insights: [
      "🤖 Intelligent BrewBot AI for personalized coffee recommendations and order management",
      "🔄 360° immersive virtual tour with interactive cafe exploration",
      "🎨 Custom latte art preview system with real-time design generation",
      "🎵 Ambient cafe soundscapes and mood-based music selection",
      "📱 Progressive Web App with offline capabilities and push notifications",
      "💳 Seamless online reservation system with real-time table availability",
      "🎯 Modern, responsive design optimized for all devices and accessibility standards"
    ],
    features: [
      "AI-powered personalized recommendations",
      "360° immersive virtual tour",
      "Custom latte art preview system",
      "Ambient soundscapes and music",
      "Progressive Web App capabilities",
      "Online reservation system",
      "Responsive design for all devices"
    ],
    technicalDetails: {
      architecture: "React-based PWA with AI integration and 3D visualization",
      performance: [
        "Offline capabilities with PWA",
        "Real-time AI recommendations",
        "3D virtual tour rendering",
        "Responsive design optimization"
      ],
      challenges: [
        "AI integration for personalization",
        "3D visualization performance",
        "PWA implementation",
        "Real-time reservation system"
      ]
    },
    useCases: [
      "Modern cafe experience",
      "Digital cafe exploration",
      "Personalized coffee recommendations",
      "Online cafe reservations"
    ],
    collaborationOpen: false
  },
  {
    id: 6,
    title: "DataMate - Comprehensive Data Science Platform",
    description: "An all-encompassing educational platform that demystifies the complete data science pipeline through interactive visualizations and hands-on learning. From data preprocessing to advanced analytics, DataMate provides a comprehensive learning environment.",
    detailedDescription: "An all-encompassing educational platform that demystifies the complete data science pipeline through interactive visualizations and hands-on learning. From data preprocessing to advanced analytics, DataMate provides a comprehensive learning environment for mastering modern data science techniques. The platform features interactive data cleaning and profiling tools that allow users to work with real-world datasets, providing hands-on experience with data preprocessing techniques. The animated MapReduce visualizations demonstrate distributed computation concepts through engaging visual representations, while the advanced NLP capabilities include sentiment analysis and emotion detection using pre-trained models. The real-time data stream mining dashboard provides live analytics capabilities, and the graph analytics engine includes recommendation algorithms and network analysis features. The comprehensive data visualization suite leverages D3.js and Chart.js to create engaging, interactive visualizations that help users understand complex data science concepts through visual learning.",
    image: "https://images.unsplash.com/photo-1556740772-1a741367b93e?auto=format&fit=crop&w=600&q=80",
    status: "Live",
    role: "Frontend Developer and Data Visualization",
    stack: [
      "TypeScript", "Vite", "D3.js", "Chart.js", "Tailwind CSS", "Heroicons", 
      "Python", "NLP", "Custom SVG", "Interactive Visualizations", "Real-time Data"
    ],
    github: "https://github.com/ttanishh/data-sci3rd-year",
    demo: "https://data-sci3rd-year.vercel.app/",
    client: "Academic Project (6th Semester)",
    collaborators: [
      { name: "Tanish Panchal", url: "https://github.com/ttanishh", role: "Frontend Developer and Data Visualization" },
      { name: "Neem Sheth", url: "https://www.linkedin.com/in/neem-sheth/", role: "Team Member" },
      { name: "Misbah Shaikh", url: "https://www.linkedin.com/in/misbahsrshaikh/", role: "Team Member" },
      { name: "Aayudh Panchal", url: "https://www.linkedin.com/in/aayudh-panchal/", role: "Team Member" },
      { name: "Raj Vadodaria", url: "https://www.linkedin.com/in/raj-vadodaria/", role: "Team Member" },
      { name: "Academic Project (6th Semester)", role: "Academic Institution" }
    ],
    insights: [
      "🧹 Interactive data cleaning and profiling tools for real-world dataset analysis",
      "⚡ Animated MapReduce visualizations demonstrating distributed computation concepts",
      "🤖 Advanced NLP capabilities with sentiment analysis and emotion detection",
      "📊 Real-time data stream mining dashboard with live analytics",
      "🕸️ Graph analytics engine with recommendation algorithms and network analysis",
      "📈 Comprehensive data visualization suite using D3.js and Chart.js",
      "🎓 Educational platform designed for hands-on data science learning"
    ],
    features: [
      "Interactive data cleaning and profiling",
      "Animated MapReduce visualizations",
      "Advanced NLP capabilities",
      "Real-time data stream mining",
      "Graph analytics engine",
      "Comprehensive data visualization",
      "Educational learning environment"
    ],
    technicalDetails: {
      architecture: "Interactive web platform with data visualization and educational tools",
      performance: [
        "Real-time data processing",
        "Interactive visualizations",
        "Educational content delivery",
        "Multi-user learning environment"
      ],
      challenges: [
        "Complex data visualization implementation",
        "Educational content creation",
        "Real-time data processing",
        "User experience optimization"
      ]
    },
    useCases: [
      "Data science education",
      "Interactive learning platform",
      "Data visualization training",
      "Academic project demonstration"
    ],
    collaborationOpen: false
  },
  {
    id: 7,
    title: "Log Monitoring & Classification System - ELK + ML",
    description: "A sophisticated cloud-native log management platform that combines the power of ELK Stack with advanced machine learning for intelligent log classification and real-time monitoring. Provides comprehensive observability for microservices architecture.",
    detailedDescription: "A sophisticated cloud-native log management platform that combines the power of ELK Stack with advanced machine learning for intelligent log classification and real-time monitoring. Provides comprehensive observability for microservices architecture with automated anomaly detection. The system features centralized log aggregation from distributed microservices architecture, enabling comprehensive monitoring and analysis of application logs across multiple services. The advanced Kibana dashboards provide real-time analytics and custom visualizations for monitoring system health and performance metrics. The BERT-based ML model performs intelligent log classification, automatically categorizing logs as INFO, DEBUG, ERROR, or WARNING based on content analysis. The FastAPI microservice provides high-performance ML inference and API endpoints for real-time log processing. The platform includes Docker Compose orchestration for seamless local development and cloud deployment, along with automated anomaly detection and alerting for proactive system monitoring. The scalable architecture supports high-volume log processing and analysis, making it suitable for enterprise-level applications.",
    image: "https://images.pexels.com/photos/207580/pexels-photo-207580.jpeg",
    status: "Demo",
    role: "Solo Project Developer",
    stack: [
      "Docker", "Elasticsearch", "Logstash", "Kibana", "FastAPI", "Python", 
      "BERT", "HuggingFace Transformers", "Machine Learning", "Microservices",
      "Real-time Analytics", "Anomaly Detection"
    ],
    github: "https://github.com/ttanishh/log-monitor-classifier",
    demo: "http://localhost:5601",
    collaborators: [
      { name: "Tanish Panchal", url: "https://github.com/ttanishh", role: "Solo Project Developer" },
      { name: "ELK Stack", role: "Technology Stack" },
      { name: "BERT ML Model", role: "Machine Learning Component" }
    ],
    insights: [
      "🔍 Centralized log aggregation from distributed microservices architecture",
      "📊 Advanced Kibana dashboards with real-time analytics and custom visualizations",
      "🤖 BERT-based ML model for intelligent log classification (INFO/DEBUG/ERROR/WARNING)",
      "⚡ FastAPI microservice for high-performance ML inference and API endpoints",
      "🐳 Docker Compose orchestration for seamless local development and cloud deployment",
      "🚨 Automated anomaly detection and alerting for proactive system monitoring",
      "📈 Scalable architecture supporting high-volume log processing and analysis"
    ],
    features: [
      "Centralized log aggregation",
      "Advanced Kibana dashboards",
      "BERT-based ML classification",
      "FastAPI microservice",
      "Docker Compose orchestration",
      "Automated anomaly detection",
      "Scalable cloud architecture"
    ],
    technicalDetails: {
      architecture: "ELK Stack with ML microservices and cloud-native deployment",
      security: [
        "Encrypted log transmission",
        "Access control and authentication",
        "Secure data storage",
        "Privacy compliance"
      ],
      performance: [
        "Real-time log processing",
        "High-volume data handling",
        "Automated classification",
        "Scalable infrastructure"
      ],
      challenges: [
        "Large-scale log processing",
        "Real-time ML inference",
        "Microservices coordination",
        "Cloud deployment complexity"
      ]
    },
    useCases: [
      "Enterprise log monitoring",
      "Microservices observability",
      "Anomaly detection",
      "System health monitoring"
    ],
    collaborationOpen: false
  }
];

const ProjectsShowcase: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { user } = useAuth();
  const navigate = useNavigate();

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

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  const handleCollaborate = (projectId: number) => {
    if (!user) {
      navigate('/auth');
      return;
    }
    // Handle collaboration logic here
    console.log(`Collaboration requested for project ${projectId}`);
  };

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-20 px-4 relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className={`transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center md:text-left">
            <span className="text-gradient">Projects</span> Showcase
          </h2>
          <p className="text-white/70 max-w-2xl mb-12 text-center md:text-left">
            A collection of projects demonstrating my expertise across full-stack development, AI, and blockchain technologies.
          </p>
        </div>

        {/* Project Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`glass-card p-6 rounded-xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-electric/20 group ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
              onClick={() => openModal(project)}
            >
              {/* Project Image */}
              <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute top-3 right-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Live' 
                      ? 'bg-green-500/20 text-green-400' 
                      : project.status === 'Demo'
                      ? 'bg-blue-500/20 text-blue-400'
                      : 'bg-amber-500/20 text-amber-400'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="text-white" size={20} />
                </div>
              </div>

              {/* Project Info */}
              <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-electric transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/70 text-sm mb-3 line-clamp-2">
                  {project.description}
                </p>
                <p className="text-white/90 font-medium text-sm mb-3">
                  Role: <span className="text-electric">{project.role}</span>
                </p>
                
                {/* Tech Stack Preview */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {project.stack.slice(0, 3).map((tech, i) => (
                      <span 
                        key={i}
                        className="px-2 py-1 bg-dark-accent text-white/80 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 3 && (
                      <span className="px-2 py-1 bg-dark-accent text-white/60 text-xs rounded-full">
                        +{project.stack.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Quick Links */}
                <div className="flex gap-3">
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 text-white/60 hover:text-white transition-colors text-sm"
                    >
                      <Github size={14} />
                      <span>Code</span>
                    </a>
                  )}
                  {project.demo && (
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 text-electric hover:text-electric/80 transition-colors text-sm"
                    >
                      <ExternalLink size={14} />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Modal */}
        {isModalOpen && selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={closeModal}
            />
            
            {/* Modal Content */}
            <div className="relative w-full max-w-6xl max-h-[95vh] overflow-y-auto glass-card rounded-2xl p-6 md:p-8">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-dark-accent/50 hover:bg-dark-accent transition-colors"
              >
                <X size={20} className="text-white" />
              </button>

              <div className="flex flex-col lg:flex-row gap-8">
                {/* Project Image */}
                <div className="lg:w-1/3 relative">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-64 lg:h-auto object-cover rounded-lg"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      selectedProject.status === 'Live' 
                        ? 'bg-green-500/20 text-green-400' 
                        : selectedProject.status === 'Demo'
                        ? 'bg-blue-500/20 text-blue-400'
                        : 'bg-amber-500/20 text-amber-400'
                    }`}>
                      {selectedProject.status}
                    </span>
                  </div>
                  
                  {/* Collaborators Section */}
                  {selectedProject.collaborators && (
                    <div className="mt-6">
                      <h4 className="text-lg font-semibold mb-3 text-white flex items-center gap-2">
                        <Users size={18} />
                        Team & Collaborators
                      </h4>
                      <div className="space-y-3">
                        {selectedProject.collaborators.map((collaborator, i) => (
                          <div key={i} className="bg-dark-accent/30 rounded-lg p-3">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                {typeof collaborator === 'string' ? (
                                  <span className="text-electric font-medium">{collaborator}</span>
                                ) : collaborator.url ? (
                                  <a
                                    href={collaborator.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-electric hover:underline font-medium flex items-center gap-2"
                                  >
                                    <ExternalLink size={14} />
                                    {collaborator.name}
                                  </a>
                                ) : (
                                  <span className="text-electric font-medium">{collaborator.name}</span>
                                )}
                              </div>
                              {collaborator.role && (
                                <span className="text-white/60 text-sm bg-dark-accent px-2 py-1 rounded-full">
                                  {collaborator.role}
                                </span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Project Details */}
                <div className="lg:w-2/3 flex flex-col justify-between">
                  <div>
                    <h3 className="text-3xl font-bold mb-3">{selectedProject.title}</h3>
                    
                    {/* Detailed Description */}
                    <div className="mb-6">
                      <p className="text-white/70 text-lg leading-relaxed">
                        {selectedProject.detailedDescription || selectedProject.description}
                      </p>
                    </div>

                    {/* Role and Client */}
                    <div className="mb-6 space-y-3">
                      <p className="text-white/90 font-medium text-lg">
                      Role: <span className="text-electric">{selectedProject.role}</span>
                    </p>
                      {selectedProject.client && (
                        <div className="flex items-center gap-2">
                          <span className="text-white/70 font-medium">Client:</span>
                          {selectedProject.clientWebsite ? (
                            <a
                              href={selectedProject.clientWebsite}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-electric hover:underline flex items-center gap-1"
                            >
                              <ExternalLink size={14} />
                              {selectedProject.client}
                            </a>
                          ) : (
                            <span className="text-white/80">{selectedProject.client}</span>
                          )}
                        </div>
                      )}
                    </div>
                    
                    {/* Tech Stack */}
                    <div className="mb-6">
                      <p className="text-sm text-white/70 mb-3 font-medium flex items-center gap-2">
                        <Award size={16} />
                        Tech Stack
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.stack.map((tech, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 bg-dark-accent text-white/80 text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* User-specific content */}
                    {user && (
                      <div className="space-y-6">

                        {/* Key Features */}
                        {selectedProject.features && (
                          <div>
                            <p className="text-sm text-white/70 mb-3 flex items-center gap-2 font-medium">
                              <Star size={16} />
                              Key Features
                            </p>
                            <ul className="space-y-2">
                              {selectedProject.features.map((feature, i) => (
                                <li key={i} className="text-white/80 text-sm flex items-start gap-3">
                                  <div className="w-2 h-2 bg-electric rounded-full mt-2 flex-shrink-0"></div>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Key Insights */}
                        {selectedProject.insights && (
                          <div>
                            <p className="text-sm text-white/70 mb-3 flex items-center gap-2 font-medium">
                              <Star size={16} />
                              Key Achievements & Insights
                            </p>
                            <ul className="space-y-2">
                              {selectedProject.insights.map((insight, i) => (
                                <li key={i} className="text-white/80 text-sm flex items-start gap-3">
                                  <div className="w-2 h-2 bg-electric rounded-full mt-2 flex-shrink-0"></div>
                                  {insight}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Technical Details */}
                        {selectedProject.technicalDetails && (
                          <div className="space-y-4">
                            <div>
                              <p className="text-sm text-white/70 mb-3 flex items-center gap-2 font-medium">
                                <Award size={16} />
                                Technical Architecture
                              </p>
                              <p className="text-white/80 text-sm">{selectedProject.technicalDetails.architecture}</p>
                            </div>

                            {selectedProject.technicalDetails.performance && (
                              <div>
                                <p className="text-sm text-white/70 mb-2 font-medium">Performance Metrics</p>
                                <ul className="space-y-1">
                                  {selectedProject.technicalDetails.performance.map((metric, i) => (
                                    <li key={i} className="text-white/60 text-sm flex items-start gap-2">
                                      <div className="w-1.5 h-1.5 bg-electric rounded-full mt-2 flex-shrink-0"></div>
                                      {metric}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {selectedProject.technicalDetails.security && (
                              <div>
                                <p className="text-sm text-white/70 mb-2 font-medium">Security Features</p>
                                <ul className="space-y-1">
                                  {selectedProject.technicalDetails.security.map((security, i) => (
                                    <li key={i} className="text-white/60 text-sm flex items-start gap-2">
                                      <div className="w-1.5 h-1.5 bg-electric rounded-full mt-2 flex-shrink-0"></div>
                                      {security}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {selectedProject.technicalDetails.challenges && (
                              <div>
                                <p className="text-sm text-white/70 mb-2 font-medium">Technical Challenges Solved</p>
                                <ul className="space-y-1">
                                  {selectedProject.technicalDetails.challenges.map((challenge, i) => (
                                    <li key={i} className="text-white/60 text-sm flex items-start gap-2">
                                      <div className="w-1.5 h-1.5 bg-electric rounded-full mt-2 flex-shrink-0"></div>
                                      {challenge}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {selectedProject.technicalDetails.futureEnhancements && (
                              <div>
                                <p className="text-sm text-white/70 mb-2 font-medium">Future Enhancement Possibilities</p>
                                <ul className="space-y-1">
                                  {selectedProject.technicalDetails.futureEnhancements.map((enhancement, i) => (
                                    <li key={i} className="text-white/60 text-sm flex items-start gap-2">
                                      <div className="w-1.5 h-1.5 bg-electric rounded-full mt-2 flex-shrink-0"></div>
                                      {enhancement}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Use Cases */}
                        {selectedProject.useCases && (
                          <div>
                            <p className="text-sm text-white/70 mb-3 flex items-center gap-2 font-medium">
                              <MapPin size={16} />
                              Use Cases & Applications
                            </p>
                            <ul className="space-y-2">
                              {selectedProject.useCases.map((useCase, i) => (
                                <li key={i} className="text-white/80 text-sm flex items-start gap-3">
                                  <div className="w-2 h-2 bg-electric rounded-full mt-2 flex-shrink-0"></div>
                                  {useCase}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Market Scope */}
                        {selectedProject.marketScope && (
                          <div>
                            <p className="text-sm text-white/70 mb-3 flex items-center gap-2 font-medium">
                              <Calendar size={16} />
                              Market Scope & Impact
                            </p>
                            <ul className="space-y-2">
                              {selectedProject.marketScope.map((scope, i) => (
                                <li key={i} className="text-white/80 text-sm flex items-start gap-3">
                                  <div className="w-2 h-2 bg-electric rounded-full mt-2 flex-shrink-0"></div>
                                  {scope}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Implementation Details */}
                        {selectedProject.implementation && (
                          <div>
                            <p className="text-sm text-white/70 mb-3 flex items-center gap-2 font-medium">
                              <Award size={16} />
                              Implementation Approach
                            </p>
                            <ul className="space-y-2">
                              {selectedProject.implementation.map((impl, i) => (
                                <li key={i} className="text-white/80 text-sm flex items-start gap-3">
                                  <div className="w-2 h-2 bg-electric rounded-full mt-2 flex-shrink-0"></div>
                                  {impl}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                  
                  <div className="flex flex-col gap-4 mt-8">
                    {/* Collaboration button for logged-in users */}
                    {user && selectedProject.collaborationOpen && (
                      <Button
                        onClick={() => handleCollaborate(selectedProject.id)}
                        className="w-full glass-card bg-gradient-glow animate-gradient-shift group flex items-center justify-center gap-2 py-3 text-white font-medium transition-all"
                      >
                        <MessageCircle size={18} />
                        <span>Collaborate on this Project</span>
                      </Button>
                    )}

                    {/* Project links */}
                    <div className="flex flex-wrap gap-4 justify-center">
                      {selectedProject.github && (
                        <a 
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-white/80 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-dark-accent"
                        >
                          <Github size={18} />
                          <span>View Code</span>
                        </a>
                      )}
                      {selectedProject.demo && (
                        <a 
                          href={selectedProject.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-electric hover:text-electric/80 transition-colors px-4 py-2 rounded-lg hover:bg-dark-accent"
                        >
                          <ExternalLink size={18} />
                          <span>Live Demo</span>
                        </a>
                      )}
                      {selectedProject.presentation && (
                        <a 
                          href={selectedProject.presentation}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors px-4 py-2 rounded-lg hover:bg-dark-accent"
                        >
                          <Link size={18} />
                          <span>Presentation</span>
                        </a>
                      )}
                      {selectedProject.video && (
                        <a 
                          href={selectedProject.video}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors px-4 py-2 rounded-lg hover:bg-dark-accent"
                        >
                          <ExternalLink size={18} />
                          <span>Demo Video</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsShowcase;