import React, { useState, useEffect } from 'react';

const techExplorations = [
  {
    title: 'Event Driven Architecture',
    description: 'Exploring event-driven patterns with microservices, message queues, and real-time event processing for scalable systems.',
    stack: ['Node.js', 'Redis', 'Event Sourcing', 'Microservices'],
    thumbnail: 'https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg',
    hasModal: true,
    modalContent: {
      title: 'Event Driven Architecture Patterns',
      description: 'Comprehensive exploration of key event-driven patterns for building scalable, resilient distributed systems.',
      stack: ['FastAPI', 'Python', 'Saga Pattern', 'Microservices', 'Event Sourcing', 'CQRS', 'Publish-Subscribe'],
      link: 'https://github.com/ttanishh/Event-Driven-Architecture-Implementation',
      demoLink: 'https://event-driven-architecture-implementation.onrender.com/',
      linkLabel: 'Sagas Implementation',
      demoLabel: 'Live Demo',
      thumbnail: 'https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg',
      patterns: [
        {
          name: 'Sagas Pattern',
          useCase: 'Managing long-running, distributed transactions across multiple microservices.',
          howItWorks: 'A saga is a sequence of local transactions where each step triggers the next through an event. If one step fails, compensating actions are triggered to undo the changes of previous steps.',
          example: 'Booking a flight: Step 1: Reserve seat → Step 2: Deduct payment → Step 3: Send confirmation. If Step 2 fails → Step 1 is rolled back (seat reservation is canceled).',
          types: [
            'Choreography: Services communicate through events without a central coordinator.',
            'Orchestration: A central service dictates the order of operations.'
          ]
        },
        {
          name: 'Publish-Subscribe Pattern',
          useCase: 'Asynchronous communication between multiple decoupled components.',
          howItWorks: 'Publisher emits events to a message broker (like Kafka, RabbitMQ). Subscribers receive relevant events by subscribing to specific topics/channels.',
          benefits: [
            'Highly scalable and decoupled',
            'Supports multiple consumers with minimal changes to the publisher'
          ],
          example: 'A user registration service publishes a UserCreated event. Email service sends a welcome email. Analytics service logs the signup event.'
        },
        {
          name: 'Event Sourcing',
          useCase: 'Persisting the state of a system by storing a sequence of state-changing events.',
          howItWorks: 'Instead of storing the current state in a database, you store every change as an immutable event. Current state is reconstructed by replaying events.',
          benefits: [
            'Full audit log',
            'Temporal query capabilities (what was the state at time X?)',
            'Enables complex recovery and debugging'
          ],
          challenges: [
            'Requires careful versioning and event schema evolution',
            'Performance concerns if event replay is large (can be mitigated with snapshots)'
          ]
        },
        {
          name: 'Command Query Responsibility Segregation (CQRS)',
          useCase: 'Separating read and write workloads for better scalability and flexibility.',
          howItWorks: 'Command model handles writes (state changes), often with event sourcing. Query model handles reads, possibly optimized for fast data retrieval. Often paired with Event sourcing, to update the read model asynchronously.',
          example: 'A command service emits a ProductPriceUpdated event. The event updates the read model used by the UI for displaying product prices.'
        }
      ]
    }
  },
  {
    title: 'Web Scraping & Data Extraction',
    description: 'Advanced web scraping techniques using BeautifulSoup, Selenium, and automated data extraction pipelines.',
    stack: ['Python', 'BeautifulSoup', 'Selenium', 'Pandas'],
    thumbnail: 'https://images.pexels.com/photos/6963740/pexels-photo-6963740.png',
    hasModal: true,
    modalContent: {
      title: 'InsightEdge — Real-Time Financial News Sentiment API',
      description: 'A microservice that scrapes real-time financial headlines from multiple trusted sources and performs sentiment analysis to provide market insights.',
      stack: ['Python', 'FastAPI', 'BeautifulSoup', 'Selenium', 'ML Sentiment Analysis', 'Web Scraping'],
      link: 'https://github.com/ttanishh/insight-edge',
      demoLink: 'https://insight-edge-1.onrender.com',
      linkLabel: 'GitHub Repository',
      demoLabel: 'Live API',
      thumbnail: 'https://images.pexels.com/photos/6963740/pexels-photo-6963740.png',
      projectDetails: {
        features: [
          'Scrapes top financial news from multiple sources',
          'Yahoo Finance (Static scraping)',
          'Google News (Dynamic via JavaScript)',
          'Economic Times (Interactive Forms)',
          'CNBC (Lazy-loaded content)',
          'Performs sentiment analysis using pre-trained ML model',
          'Returns JSON responses with title, source, link, and sentiment',
          'FastAPI-powered backend for scalability'
        ],
        sources: [
          'Yahoo Finance - Static content scraping',
          'Google News - Dynamic JavaScript content',
          'Economic Times - Interactive form handling',
          'CNBC - Lazy-loaded content extraction'
        ],
        apiEndpoints: [
          {
            method: 'GET /',
            description: 'Health check route',
            response: '{"message": "InsightEdge API is running"}'
          },
          {
            method: 'GET /headlines',
            description: 'Fetches top headlines per source with sentiment',
            parameters: 'limit (optional): Number of headlines per source (default: 10)',
            example: 'GET https://insight-edge-1.onrender.com/headlines?limit=5',
            response: `{
  "Yahoo Finance": [
    {
      "title": "S&P 500 hits record high...",
      "link": "https://finance.yahoo.com/...",
      "sentiment": "Positive"
    }
  ],
  "Google News": [...],
  ...
}`
          }
        ],
        techStack: [
          'Python 3.10+',
          'FastAPI - Modern web framework',
          'BeautifulSoup - HTML parsing',
          'Selenium - Dynamic content scraping',
          'Machine Learning - Sentiment analysis',
          'Render - Cloud deployment'
        ],
        development: {
          setup: [
            'Clone the repository',
            'Create virtual environment',
            'Install dependencies with pip',
            'Run with uvicorn'
          ],
          commands: [
            'git clone https://github.com/ttanishh/insight-edge.git',
            'python -m venv .venv',
            'source .venv/bin/activate',
            'pip install -r requirements.txt',
            'uvicorn app.main:app --reload'
          ]
        },
        deployment: {
          platform: 'Render',
          buildCommand: 'pip install -r requirements.txt',
          startCommand: 'uvicorn app.main:app --host=0.0.0.0 --port=10000',
          pythonVersion: '3.10+'
        },
        documentation: [
          'Automatically generated Swagger Docs at /docs',
          'ReDoc documentation at /redoc',
          'Interactive API testing interface'
        ],
        testing: {
          manual: [
            'Postman for API testing',
            'cURL for command-line testing',
            'FastAPI Swagger UI at /docs'
          ],
          automated: [
            'pytest for unit testing',
            'httpx for HTTP client testing',
            'FastAPI TestClient for integration testing'
          ]
        },
        challenges: [
          'Handling dynamic JavaScript content',
          'Managing different website structures',
          'Rate limiting and anti-bot measures',
          'Maintaining scraping reliability',
          'Sentiment analysis accuracy'
        ],
        solutions: [
          'Selenium for JavaScript-heavy sites',
          'Robust error handling and retry logic',
          'Respectful scraping with delays',
          'Multiple fallback strategies',
          'Pre-trained ML models for sentiment'
        ]
      }
    }
  },
  {
    title: 'Kafka Streaming Platform',
    description: 'Real-time data streaming with Apache Kafka, including producers, consumers, and stream processing applications.',
    stack: ['Python', 'Kafka', 'Docker', 'Stream Processing'],
    thumbnail: 'https://images.pexels.com/photos/5833270/pexels-photo-5833270.jpeg',
    hasModal: true,
    modalContent: {
      title: 'Kafka Producer-Consumer Demo Project',
      description: 'This project demonstrates a simple Apache Kafka producer-consumer setup using Spring Boot. It consists of two separate applications: a Producer that sends messages to a Kafka topic and a Consumer that receives and processes those messages.',
      stack: ['Spring Boot', 'Spring Kafka', 'Java 24', 'Maven', 'Apache Kafka'],
      link: 'https://github.com/ttanishh/Kafka-basics',
      linkLabel: 'GitHub Repository',
      thumbnail: 'https://images.pexels.com/photos/5833270/pexels-photo-5833270.jpeg',
      projectDetails: {
        structure: {
          title: 'Project Structure',
          content: `Kafka/
├── producer/                 # Kafka Producer Application
│   ├── src/main/java/com/example/producer/
│   │   ├── KafkaProducer.java      # REST controller for sending messages
│   │   └── ProducerApplication.java # Main application class
│   ├── src/main/resources/
│   │   └── application.yml         # Producer configuration
│   └── pom.xml                     # Maven dependencies
├── consumer/                 # Kafka Consumer Application
│   ├── src/main/java/com/example/consumer/
│   │   ├── KafkaConsumer.java      # Kafka listener components
│   │   └── ConsumerApplication.java # Main application class
│   ├── src/main/resources/
│   │   └── application.yml         # Consumer configuration
│   └── pom.xml                     # Maven dependencies
└── README.md                # This file`
        },
        features: [
          'Producer Application: REST API to send messages to Kafka topic',
          'Consumer Application: Multiple consumers listening to the same topic',
          'Spring Boot Integration: Built with Spring Boot 3.5.4 and Spring Kafka',
          'Java 24: Uses the latest Java version',
          'Maven Build: Standard Maven project structure'
        ],
        prerequisites: [
          'Java 24 installed on your system',
          'Apache Kafka running locally on localhost:9092',
          'Maven for building the projects'
        ],
        techStack: [
          'Spring Boot: 3.5.4',
          'Spring Kafka: For Kafka integration',
          'Java: 24',
          'Maven: Build tool',
          'Apache Kafka: Message broker'
        ],
        configuration: {
          producer: `spring:
  application:
    name: producer
  kafka:
    producer:
      bootstrap-servers: localhost:9092`,
          consumer: `spring:
  application:
    name: consumer
  kafka:
    consumer:
      bootstrap-servers: localhost:9092

server:
  port: 8081`
        },
        apiUsage: {
          endpoint: 'POST /api/send',
          parameter: 'message (String)',
          response: '"Message sent: Hello Kafka!"',
          example: 'curl -X POST "http://localhost:8080/api/send?message=Hello Kafka!"'
        },
        topicDetails: {
          name: 'my-topic',
          consumerGroups: [
            'my-group-id (Consumer 1)',
            'my-group-id2 (Consumer 2)'
          ]
        },
        codeExamples: {
          producer: `@RestController
@RequestMapping("/api")
public class KafkaProducer {
    private final KafkaTemplate<String, String> kafkaTemplate;
    
    @PostMapping("/send")
    public String sendMessage(@RequestParam String message){
        kafkaTemplate.send("my-topic", message);
        return "Message sent: " + message;
    }
}`,
          consumer: `@Component
public class KafkaConsumer {
    @KafkaListener(topics = "my-topic", groupId = "my-group-id")
    public void listen1(String message){
        System.out.println("Received message1: " + message);
    }

    @KafkaListener(topics = "my-topic", groupId = "my-group-id2")
    public void listen2(String message){
        System.out.println("Received message2: " + message);
    }
}`
        },
        dependencies: [
          'spring-boot-starter-web: Web application support',
          'spring-kafka: Kafka integration',
          'spring-boot-starter-test: Testing support',
          'spring-kafka-test: Kafka testing utilities'
        ],
        expectedBehavior: [
          'Producer: Sends messages to Kafka topic my-topic',
          'Consumer 1: Receives and logs messages with "Received message1:"',
          'Consumer 2: Receives and logs messages with "Received message2:"',
          'Since both consumers are in different consumer groups, they will both receive the same messages (fan-out pattern)'
        ],
        troubleshooting: [
          'Kafka Connection Error: Ensure Kafka is running on localhost:9092',
          'Port Conflicts: Consumer runs on port 8081, Producer on 8080',
          'Java Version: Ensure Java 24 is installed and configured',
          'Maven Issues: Run mvn clean install to resolve dependency issues'
        ],
        scalingConsiderations: [
          'Multiple Consumers: The current setup demonstrates multiple consumers in different groups',
          'Partitioning: Consider adding partitions to the topic for better throughput',
          'Error Handling: Add proper error handling and retry mechanisms',
          'Monitoring: Integrate with monitoring tools for production use'
        ]
      }
    }
  },
  {
    title: 'Model Context Protocol',
    description: 'Exploring MCP for standardized AI model interactions, context management, and model orchestration.',
    stack: ['Python', 'MCP', 'AI Models', 'Context Management'],
    link: 'https://github.com/ttanishh/mcp-exploration',
    linkLabel: 'GitHub',
    thumbnail: 'https://images.pexels.com/photos/16094055/pexels-photo-16094055.jpeg',
  },
  {
    title: 'LangChain Ecosystem',
    description: 'Building LLM applications with LangChain, LangFlow, LangGraph, and LangSmith for comprehensive AI workflows.',
    stack: ['Python', 'LangChain', 'LangFlow', 'LangGraph', 'LangSmith'],
    link: 'https://github.com/ttanishh/langchain-ecosystem-demo',
    linkLabel: 'GitHub',
    thumbnail: 'https://images.pexels.com/photos/7988759/pexels-photo-7988759.jpeg',
  },

  {
    title: 'FirstML',
    description: 'Comprehensive machine learning projects covering customer segmentation, feature engineering, PCA implementation, and end-to-end ML pipelines.',
    stack: ['Python', 'scikit-learn', 'Pandas', 'Clustering', 'PCA', 'Gradio'],
    thumbnail: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg',
    hasModal: true,
    modalContent: {
      title: 'FirstML — Machine Learning Projects & Concepts',
      description: 'A comprehensive collection of machine learning projects and implementations covering customer segmentation, feature engineering, dimensionality reduction, and end-to-end ML pipelines.',
      stack: ['Python', 'scikit-learn', 'Pandas', 'NumPy', 'Clustering', 'PCA', 'Gradio', 'XGBoost', 'SHAP'],
      link: 'https://github.com/ttanishh/clustering-customerSegmentation',
      linkLabel: 'Customer Segmentation Project',
      thumbnail: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg',
      projects: [
        {
          name: 'Customer Segmentation with Clustering | Gradio Dashboard',
          description: 'Interactive Customer Segmentation Tool built with unsupervised learning using clustering algorithms. Features a clean, Gradio-powered interface for data upload, cluster visualization, and segmentation insights.',
          features: [
            'Unsupervised learning with KMeans clustering',
            'Dynamic visualization of customer clusters',
            'PCA-based dimensionality reduction',
            'Interactive dashboard using Gradio',
            'Segment-wise analysis with average features and proportions',
            'Upload custom datasets for real-time analysis'
          ],
          techStack: [
            'Python',
            'pandas',
            'scikit-learn',
            'matplotlib',
            'seaborn',
            'gradio'
          ],
          projectStructure: `Clustering-CustoSeg/
├── seg.ipynb               # Main notebook with logic and Gradio interface
├── cluster_analysis.py     # Core clustering logic and data transformation
├── assets/                 # Images and assets used for UI/README
├── requirements.txt        # Dependencies
├── sample_data.csv         # Example customer dataset
├── README.md               # This file`,
          sampleData: [
            'Age: Age of the customer',
            'Annual Income: Income in USD',
            'Spending Score: Score assigned by marketing team',
            'Gender: Categorical column',
            'Profession: Job type/category',
            'Family Size: No. of dependents in household'
          ],
          clusteringProcess: [
            'Data Preprocessing: Handles missing values, categorical encoding, scaling',
            'PCA Visualization: Reduces dimensionality for plotting clusters in 2D',
            'KMeans Clustering: Segments users based on similarity',
            'Segment Interpretation: Mean values and population of each cluster'
          ],
          dashboardFeatures: [
            'Upload CSV: Upload custom dataset with relevant customer features',
            'Visualize Clusters: 2D scatterplot of clusters using PCA',
            'Segment Table: Detailed breakdown of each cluster stats',
            'Feature Distributions: Boxplots comparing clusters for each feature',
            'Download Segmented Data: Export labeled dataset with cluster IDs'
          ],
          exampleOutput: [
            'Cluster 0: Young High-Spenders (Age: 23.4, Income: $48,000, Spending: 87.2, 30% users)',
            'Cluster 1: Mid-age Budget-Conscious (Age: 45.2, Income: $65,000, Spending: 45.1, 40% users)',
            'Cluster 2: Young Moderate Spenders (Age: 34.9, Income: $38,000, Spending: 62.7, 30% users)'
          ],
          edaFeatures: [
            'Null value analysis',
            'Feature distributions',
            'Correlation matrix',
            'Categorical feature breakdown',
            'Dimensionality reduction for visualization (PCA)'
          ],
          deployment: [
            'Render (recommended for simplicity)',
            'HuggingFace Spaces',
            'Streamlit Sharing',
            'Dockerized on AWS / GCP / Azure'
          ],
          futureEnhancements: [
            'User authentication for multi-tenant analysis',
            'Persistent segment storage',
            'Real-time dashboard with customer behavioral metrics',
            'Integration with marketing campaign data'
          ]
        },
        {
          name: '🧠 Advanced Feature Engineering Pipeline',
          description: 'A comprehensive, production-ready feature engineering pipeline for tabular data preprocessing using scikit-learn and feature-engine. This modular system handles missing values, encodes categorical features, and ensures pipeline reusability for machine learning workflows.',
          features: [
            'Modular pipeline architecture using scikit-learn.Pipeline',
            'Comprehensive missing value handling (numerical & categorical)',
            'Advanced categorical encoding with OneHotEncoder',
            'Pipeline persistence and deployment capabilities',
            'Clean separation of concerns and maintainable code',
            'Custom domain-specific feature engineering capabilities',
            'Scalable transformation logic for large datasets',
            'Custom TransformerMixin classes for specialized transformations',
            'Pipeline and ColumnTransformer integration',
            'Model persistence using joblib for production deployment'
          ],
          techStack: [
            'Python 3.8+',
            'scikit-learn',
            'feature-engine',
            'pandas',
            'NumPy',
            'joblib'
          ],
          projectStructure: `feature-pipeline/
├── data/
│   ├── dataset.csv         # Input dataset
│   └── generate.py         # (Optional) Script to generate mock data
├── model/
│   └── (empty or saved models here)
├── pipeline/
│   ├── __init__.py
│   ├── pipeline_feature.py # Saves the pipeline
│   └── transformer.py      # Contains transformation logic
├── main.py                 # Pipeline execution entry point
├── requirements.txt        # Dependencies
└── README.md               # Project documentation`,
          setupSteps: [
            'Clone the Repository: git clone https://github.com/ttanishh/feature-pipeline-basics.git',
            'Navigate to project: cd feature-pipeline-basics',
            'Create Virtual Environment: python -m venv venv',
            'Activate Environment: source venv/bin/activate (Windows: venv\\Scripts\\activate)',
            'Install Dependencies: pip install -r requirements.txt'
          ],
          usage: [
            'Execute pipeline: python main.py',
            'View transformed data preview in console output',
            'Pipeline automatically saved as pipeline.joblib for reuse',
            'Load saved pipeline: joblib.load("pipeline.joblib")'
          ],
          coreComponents: [
            'transformer.py: Core pipeline builder with CategoricalImputer, MeanMedianImputer, OneHotEncoder',
            'pipeline_feature.py: Pipeline persistence utilities with save_pipeline() function',
            'main.py: Entry point for data loading, pipeline building, fitting, and transformation'
          ],
          keyLearnings: [
            'Modular Pipelines: Enables cleaner code and reusable preprocessing logic across projects',
            'Missing Value Strategy: Critical preprocessing step before any transformation or modeling',
            'Feature Consistency: Transforms used in training must be identically applied in production',
            'Organized Structure: Facilitates easier debugging, testing, and scalability',
            'Custom Transformers: Provides flexibility for domain-specific feature engineering needs'
          ],
          enhancements: [
            'Add StandardScaler or RobustScaler for numerical feature normalization',
            'Implement automatic column type detection and validation',
            'Create CLI interface or Streamlit UI for interactive pipeline building',
            'Add comprehensive unit testing for all transformer components',
            'Include data validation and quality checks'
          ],
          implementationSteps: [
            'Data preprocessing: Handle missing values, encode categoricals, scale numerical features',
            'Feature engineering: Create domain-specific features (ratios, time-based, aggregations)',
            'Custom transformers: Develop TransformerMixin classes for specialized transformations',
            'Pipeline assembly: Bundle everything using Pipeline and ColumnTransformer',
            'Persistence: Save complete pipeline using joblib for production deployment'
          ],
          useCases: [
            'Customer behavior analysis and segmentation',
            'Financial data processing and risk assessment',
            'E-commerce recommendation systems',
            'Healthcare data preprocessing and analysis',
            'Real-time feature engineering for streaming data'
          ],
          githubRepo: 'https://github.com/ttanishh/feature-pipeline-basics/tree/main'
        },
        {
          name: 'PCA Implementation and Visualization',
          description: 'Dimensionality reduction system using Principal Component Analysis with comprehensive visualization and analysis capabilities.',
          features: [
            'Automated data normalization and preprocessing',
            'PCA implementation with sklearn.decomposition',
            'Explained variance ratio analysis and visualization',
            '2D/3D data projection and visualization',
            'Feature contribution analysis (loadings)',
            'Custom NumPy implementation for educational purposes'
          ],
          techStack: [
            'Python',
            'NumPy',
            'pandas',
            'scikit-learn',
            'matplotlib',
            'seaborn',
            'plotly'
          ],
          implementationSteps: [
            'Normalize the data',
            'Apply PCA from sklearn.decomposition',
            'Plot explained variance ratio to choose n_components',
            'Project data onto principal components and visualize (2D/3D)',
            'Analyze which features contribute most to each PC (loadings)',
            'Bonus: Try implementing PCA from scratch using NumPy for deeper understanding'
          ],
          applications: [
            'Image compression and processing',
            'Financial data analysis',
            'Bioinformatics and genomics',
            'Market research and customer analytics',
            'Noise reduction in signal processing'
          ]
        },
        {
          name: 'End-to-End ML Pipeline for Customer Behavior Prediction',
          description: 'Complete machine learning pipeline for predicting customer behavior including churn prediction, purchase likelihood, and conversion rates.',
          features: [
            'Comprehensive data preprocessing and feature engineering',
            'Multiple model training (Logistic Regression, RandomForest, XGBoost)',
            'Advanced evaluation metrics (AUC, precision, recall)',
            'Model interpretability using SHAP values',
            'Time-based train/test splitting',
            'Deployment-ready pipeline export'
          ],
          techStack: [
            'Python',
            'pandas',
            'scikit-learn',
            'XGBoost',
            'LightGBM',
            'SHAP',
            'mlflow'
          ],
          pipelineSteps: [
            'Data loading & preprocessing: Handle missing values, encode categoricals, normalize',
            'EDA: Understand distributions, correlations, target leakage',
            'Feature Engineering: Behavioral features, aggregations (e.g., avg spend/time since last purchase)',
            'Train/test split: Consider time-based split if temporal',
            'Model training: Try Logistic Regression, RandomForest, XGBoost',
            'Evaluation: Use metrics like AUC, precision, recall',
            'Interpretability: Feature importance, SHAP',
            'Deployment-ready: Export pipeline + model using joblib'
          ],
          businessApplications: [
            'Customer churn prediction',
            'Purchase likelihood modeling',
            'Customer lifetime value prediction',
            'Marketing campaign optimization',
            'Risk assessment and fraud detection'
          ]
        }
      ],
      concepts: [
        {
          name: 'Customer Segmentation Project using Clustering',
          goal: 'Group customers based on similar behaviors/purchases for targeted marketing.',
          tools: ['Python', 'pandas', 'scikit-learn', 'seaborn/matplotlib', 'Jupyter/Colab'],
          steps: [
            'Load customer data (e.g., RFM data: Recency, Frequency, Monetary)',
            'Preprocess data: scale features, handle nulls',
            'Choose clustering algorithm: KMeans, DBSCAN, or Agglomerative Clustering',
            'Use Elbow Method or Silhouette Score to determine number of clusters',
            'Visualize clusters (2D via PCA or t-SNE)',
            'Interpret clusters and label them (e.g., "Loyal", "At Risk", "Low Spender")'
          ]
        },
        {
          name: 'Advanced Feature Engineering Pipeline',
          goal: 'Create reusable, scalable feature transformation logic.',
          tools: ['scikit-learn pipelines', 'Feature-engine', 'custom transformers'],
          steps: [
            'Include preprocessing: missing value handling, encoding, scaling',
            'Engineer domain-specific features (e.g., ratios, time-based features)',
            'Create custom TransformerMixin classes if needed',
            'Bundle everything using Pipeline and ColumnTransformer',
            'Save pipeline using joblib or pickle'
          ]
        },
        {
          name: 'PCA Implementation and Visualization',
          goal: 'Reduce dimensionality while preserving variance.',
          tools: ['NumPy', 'pandas', 'scikit-learn', 'matplotlib/seaborn', 'plotly'],
          steps: [
            'Normalize the data',
            'Apply PCA from sklearn.decomposition',
            'Plot explained variance ratio to choose n_components',
            'Project data onto principal components and visualize (2D/3D)',
            'Analyze which features contribute most to each PC (loadings)',
            'Bonus: Try implementing PCA from scratch using NumPy for deeper understanding'
          ]
        },
        {
          name: 'End-to-End ML Pipeline for Customer Behavior Prediction',
          goal: 'Predict whether a customer will buy again/leave/convert based on behavior.',
          tools: ['pandas', 'scikit-learn', 'XGBoost/LightGBM', 'SHAP', 'mlflow (optional)'],
          steps: [
            'Data loading & preprocessing: Handle missing values, encode categoricals, normalize',
            'EDA: Understand distributions, correlations, target leakage',
            'Feature Engineering: Behavioral features, aggregations (e.g., avg spend/time since last purchase)',
            'Train/test split: Consider time-based split if temporal',
            'Model training: Try Logistic Regression, RandomForest, XGBoost',
            'Evaluation: Use metrics like AUC, precision, recall',
            'Interpretability: Feature importance, SHAP',
            'Deployment-ready: Export pipeline + model using joblib'
          ]
        }
      ]
    }
  },
  {
    title: 'Data Analysis Using AI',
    description: 'AI-powered data analysis, automated insights generation, and intelligent data processing workflows.',
    stack: ['Python', 'AI/ML', 'Data Analysis', 'Automation', 'Insights'],
    link: 'https://github.com/ttanishh/ai-data-analysis-demo',
    linkLabel: 'GitHub',
    thumbnail: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg',
  },
  {
    title: 'MLFlow & DagsHub',
    description: 'MLOps workflows with MLFlow for experiment tracking and DagsHub for collaborative ML development.',
    stack: ['Python', 'MLFlow', 'DagsHub', 'MLOps', 'Experiment Tracking'],
    link: 'https://github.com/ttanishh/mlops-workflow-demo',
    linkLabel: 'GitHub',
    thumbnail: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=400&q=80',
  },
];

const TechExploration: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<any>(null);

  const openModal = (content: any) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <>
      <section id="tech-exploration" className="py-20 px-4 bg-dark/90">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center md:text-left">
              <span className="text-gradient">Tech Exploration</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto md:mx-0 mb-6 text-center md:text-left">
              Here I showcase hands-on explorations of key technologies I've worked with — from web scraping and message brokers to data processing workflows. These aren't full projects but focused experiments that helped me master the tools.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {techExplorations.map((exploration, i) => (
              <div
                key={i}
                className="glass-card flex flex-col h-full rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl group cursor-pointer"
                onClick={() => exploration.hasModal ? openModal(exploration.modalContent) : null}
              >
                {exploration.thumbnail && (
                  <div className="h-40 w-full overflow-hidden">
                    <img
                      src={exploration.thumbnail}
                      alt={exploration.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="flex flex-col flex-1 p-5">
                  <h3 className="text-xl font-bold mb-2 text-electric">{exploration.title}</h3>
                  <p className="text-white/80 text-sm mb-4 flex-1">{exploration.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exploration.stack.map((tech, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 bg-dark-accent text-white/80 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {exploration.hasModal ? (
                    <button className="mt-auto px-4 py-2 bg-electric text-white font-medium rounded-lg shadow hover:bg-electric/80 transition-colors text-center">
                      View Details
                    </button>
                  ) : (
                    <a
                      href={exploration.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-block px-4 py-2 bg-electric text-white font-medium rounded-lg shadow hover:bg-electric/80 transition-colors text-center"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {exploration.linkLabel}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && modalContent && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={(e) => e.stopPropagation()}>
          <div className="bg-dark glass-card rounded-xl max-w-[95vw] w-full max-h-[95vh] overflow-y-auto">
            <div className="p-4">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-electric">{modalContent.title}</h3>
                <button
                  onClick={closeModal}
                  className="text-white/70 hover:text-white text-2xl font-bold"
                >
                  ×
                </button>
              </div>
              
              {modalContent.thumbnail && (
                <div className="h-48 w-full overflow-hidden rounded-lg mb-4">
                  <img
                    src={modalContent.thumbnail}
                    alt={modalContent.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              <p className="text-white/80 mb-3">{modalContent.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {modalContent.stack.map((tech: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-dark-accent text-white/80 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Project counter */}
              {modalContent.projects && modalContent.projects.length > 1 && (
                <div className="text-center mb-4 text-white/70 text-sm">
                  📊 {modalContent.projects.length} ML Projects & Concepts
                </div>
              )}

              {/* Projects Grid - 4 Parts */}
              {modalContent.projects && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  {modalContent.projects.map((project: any, index: number) => (
                    <div key={index} className="bg-dark-accent/30 rounded-lg p-6 border border-electric/30 hover:border-electric/50 transition-colors">
                      <div className="flex items-start justify-between mb-4">
                        <h5 className="text-xl font-semibold text-electric mb-2 flex-1">{project.name}</h5>
                        {index === 0 && (
                          <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30">
                            Featured
                          </span>
                        )}
                      </div>
                      
                      <p className="text-white/70 text-sm mb-4 leading-relaxed">{project.description}</p>
                      
                      {/* Tech Stack */}
                      {project.techStack && (
                        <div className="mb-4">
                          <h6 className="text-white/90 font-medium text-sm mb-2">🛠️ Tech Stack</h6>
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.slice(0, 4).map((tech: string, i: number) => (
                              <span key={i} className="px-3 py-1 bg-dark text-white/80 text-xs rounded-full border border-electric/30">
                                {tech}
                              </span>
                            ))}
                            {project.techStack.length > 4 && (
                              <span className="px-3 py-1 bg-dark text-white/60 text-xs rounded-full border border-electric/20">
                                +{project.techStack.length - 4}
                              </span>
                            )}
                          </div>
                        </div>
                      )}
                      
                      {/* Key Features */}
                      {project.features && (
                        <div className="mb-4">
                          <h6 className="text-white/90 font-medium text-sm mb-2">✨ Key Features</h6>
                          <ul className="text-white/70 text-xs space-y-1">
                            {project.features.slice(0, 4).map((feature: string, i: number) => (
                              <li key={i} className="flex items-start">
                                <span className="text-green-400 mr-2 mt-0.5">•</span>
                                <span className="line-clamp-2">{feature}</span>
                              </li>
                            ))}
                            {project.features.length > 4 && (
                              <li className="text-white/60 text-xs">
                                +{project.features.length - 4} more features
                              </li>
                            )}
                          </ul>
                        </div>
                      )}
                      
                      {/* Project-specific details with better organization */}
                      <div className="space-y-3">
                        {/* Customer Segmentation specific */}
                        {project.clusteringProcess && (
                          <div>
                            <h6 className="text-white/90 font-medium text-sm mb-1">🔄 Process</h6>
                            <ul className="text-white/70 text-xs space-y-1">
                              {project.clusteringProcess.slice(0, 2).map((step: string, i: number) => (
                                <li key={i} className="flex items-start">
                                  <span className="text-blue-400 mr-2 mt-0.5">{i + 1}.</span>
                                  <span className="line-clamp-2">{step}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        {/* Feature Engineering specific */}
                        {project.setupSteps && (
                          <div>
                            <h6 className="text-white/90 font-medium text-sm mb-1">🚀 Setup</h6>
                            <ul className="text-white/70 text-xs space-y-1">
                              {project.setupSteps.slice(0, 2).map((step: string, i: number) => (
                                <li key={i} className="flex items-start">
                                  <span className="text-green-400 mr-2 mt-0.5">{i + 1}.</span>
                                  <span className="line-clamp-2">{step}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        {project.usage && (
                          <div>
                            <h6 className="text-white/90 font-medium text-sm mb-1">💻 Usage</h6>
                            <ul className="text-white/70 text-xs space-y-1">
                              {project.usage.slice(0, 2).map((step: string, i: number) => (
                                <li key={i} className="flex items-start">
                                  <span className="text-cyan-400 mr-2 mt-0.5">•</span>
                                  <span className="line-clamp-2">{step}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        {project.coreComponents && (
                          <div>
                            <h6 className="text-white/90 font-medium text-sm mb-1">⚙️ Components</h6>
                            <ul className="text-white/70 text-xs space-y-1">
                              {project.coreComponents.slice(0, 2).map((component: string, i: number) => (
                                <li key={i} className="flex items-start">
                                  <span className="text-orange-400 mr-2 mt-0.5">⚙</span>
                                  <span className="line-clamp-2">{component}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        {project.keyLearnings && (
                          <div>
                            <h6 className="text-white/90 font-medium text-sm mb-1">📚 Key Learnings</h6>
                            <ul className="text-white/70 text-xs space-y-1">
                              {project.keyLearnings.slice(0, 2).map((learning: string, i: number) => (
                                <li key={i} className="flex items-start">
                                  <span className="text-purple-400 mr-2 mt-0.5">📚</span>
                                  <span className="line-clamp-2">{learning}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        {project.enhancements && (
                          <div>
                            <h6 className="text-white/90 font-medium text-sm mb-1">🔧 Enhancements</h6>
                            <ul className="text-white/70 text-xs space-y-1">
                              {project.enhancements.slice(0, 2).map((enhancement: string, i: number) => (
                                <li key={i} className="flex items-start">
                                  <span className="text-yellow-400 mr-2 mt-0.5">🔧</span>
                                  <span className="line-clamp-2">{enhancement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="mt-6 pt-4 border-t border-electric/20">
                        {/* GitHub link for Feature Engineering */}
                        {project.githubRepo && (
                          <a
                            href={project.githubRepo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-4 py-2 bg-electric text-white font-medium rounded-lg shadow hover:bg-electric/80 transition-colors text-center text-sm w-full"
                          >
                            📁 View Repository
                          </a>
                        )}
                        
                        {/* GitHub link for Customer Segmentation */}
                        {index === 0 && !project.githubRepo && (
                          <a
                            href={modalContent.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-4 py-2 bg-electric text-white font-medium rounded-lg shadow hover:bg-electric/80 transition-colors text-center text-sm w-full"
                          >
                            🚀 View Project
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Patterns Section for Event Driven Architecture */}
              {modalContent.patterns && (
                <div className="space-y-6 mb-6">
                  <h4 className="text-xl font-bold text-electric border-b border-electric/30 pb-2">
                    Event Driven Architecture Patterns
                  </h4>
                  
                  {modalContent.patterns.map((pattern: any, index: number) => (
                    <div key={index} className="bg-dark-accent/30 rounded-lg p-4 border-l-4 border-electric">
                      <h5 className="text-lg font-semibold text-electric mb-3">{pattern.name}</h5>
                      
                      <div className="space-y-3">
                        <div>
                          <span className="text-white/90 font-medium">Use case:</span>
                          <p className="text-white/70 text-sm mt-1">{pattern.useCase}</p>
                        </div>
                        
                        <div>
                          <span className="text-white/90 font-medium">How it works:</span>
                          <p className="text-white/70 text-sm mt-1">{pattern.howItWorks}</p>
                        </div>
                        
                        {pattern.benefits && (
                          <div>
                            <span className="text-white/90 font-medium">Benefits:</span>
                            <ul className="text-white/70 text-sm mt-1 space-y-1">
                              {pattern.benefits.map((benefit: string, i: number) => (
                                <li key={i} className="flex items-start">
                                  <span className="text-green-400 mr-2">✓</span>
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        {pattern.challenges && (
                          <div>
                            <span className="text-white/90 font-medium">Challenges:</span>
                            <ul className="text-white/70 text-sm mt-1 space-y-1">
                              {pattern.challenges.map((challenge: string, i: number) => (
                                <li key={i} className="flex items-start">
                                  <span className="text-yellow-400 mr-2">⚠</span>
                                  {challenge}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        {pattern.types && (
                          <div>
                            <span className="text-white/90 font-medium">Types:</span>
                            <ul className="text-white/70 text-sm mt-1 space-y-1">
                              {pattern.types.map((type: string, i: number) => (
                                <li key={i} className="flex items-start">
                                  <span className="text-blue-400 mr-2">•</span>
                                  {type}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        {pattern.example && (
                          <div>
                            <span className="text-white/90 font-medium">Example:</span>
                            <p className="text-white/70 text-sm mt-1 italic">{pattern.example}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Project Details Section for Kafka */}
              {modalContent.projectDetails && (
                <div className="space-y-6 mb-6">
                  {/* Project Structure */}
                  {modalContent.projectDetails.structure && (
                    <div className="bg-dark-accent/30 rounded-lg p-4">
                      <h4 className="text-lg font-semibold text-electric mb-3">{modalContent.projectDetails.structure.title}</h4>
                      <pre className="text-white/70 text-xs overflow-x-auto bg-dark p-3 rounded">
                        {modalContent.projectDetails.structure.content}
                      </pre>
                    </div>
                  )}

                  {/* Features */}
                  {modalContent.projectDetails.features && (
                    <div className="bg-dark-accent/30 rounded-lg p-4">
                      <h4 className="text-lg font-semibold text-electric mb-3">🚀 Features</h4>
                      <ul className="text-white/70 text-sm space-y-1">
                        {modalContent.projectDetails.features.map((feature: string, i: number) => (
                          <li key={i} className="flex items-start">
                            <span className="text-green-400 mr-2">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Prerequisites */}
                  {modalContent.projectDetails.prerequisites && (
                    <div className="bg-dark-accent/30 rounded-lg p-4">
                      <h4 className="text-lg font-semibold text-electric mb-3">📋 Prerequisites</h4>
                      <ul className="text-white/70 text-sm space-y-1">
                        {modalContent.projectDetails.prerequisites.map((prereq: string, i: number) => (
                          <li key={i} className="flex items-start">
                            <span className="text-blue-400 mr-2">•</span>
                            {prereq}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech Stack */}
                  {modalContent.projectDetails.techStack && (
                    <div className="bg-dark-accent/30 rounded-lg p-4">
                      <h4 className="text-lg font-semibold text-electric mb-3">🛠️ Technology Stack</h4>
                      <ul className="text-white/70 text-sm space-y-1">
                        {modalContent.projectDetails.techStack.map((tech: string, i: number) => (
                          <li key={i} className="flex items-start">
                            <span className="text-purple-400 mr-2">•</span>
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Configuration */}
                  {modalContent.projectDetails.configuration && (
                    <div className="bg-dark-accent/30 rounded-lg p-4">
                      <h4 className="text-lg font-semibold text-electric mb-3">⚙️ Configuration</h4>
                      <div className="space-y-4">
                        <div>
                          <h5 className="text-white/90 font-medium mb-2">Producer Configuration</h5>
                          <pre className="text-white/70 text-xs overflow-x-auto bg-dark p-3 rounded">
                            {modalContent.projectDetails.configuration.producer}
                          </pre>
                        </div>
                        <div>
                          <h5 className="text-white/90 font-medium mb-2">Consumer Configuration</h5>
                          <pre className="text-white/70 text-xs overflow-x-auto bg-dark p-3 rounded">
                            {modalContent.projectDetails.configuration.consumer}
                          </pre>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* API Usage */}
                  {modalContent.projectDetails.apiUsage && (
                    <div className="bg-dark-accent/30 rounded-lg p-4">
                      <h4 className="text-lg font-semibold text-electric mb-3">📡 API Usage</h4>
                      <div className="space-y-2">
                        <p className="text-white/70 text-sm">
                          <span className="text-white/90 font-medium">Endpoint:</span> {modalContent.projectDetails.apiUsage.endpoint}
                        </p>
                        <p className="text-white/70 text-sm">
                          <span className="text-white/90 font-medium">Parameter:</span> {modalContent.projectDetails.apiUsage.parameter}
                        </p>
                        <p className="text-white/70 text-sm">
                          <span className="text-white/90 font-medium">Response:</span> {modalContent.projectDetails.apiUsage.response}
                        </p>
                        <div>
                          <span className="text-white/90 font-medium">Example:</span>
                          <pre className="text-white/70 text-xs overflow-x-auto bg-dark p-3 rounded mt-1">
                            {modalContent.projectDetails.apiUsage.example}
                          </pre>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Topic Details */}
                  {modalContent.projectDetails.topicDetails && (
                    <div className="bg-dark-accent/30 rounded-lg p-4">
                      <h4 className="text-lg font-semibold text-electric mb-3">🎯 Kafka Topic Details</h4>
                      <div className="space-y-2">
                        <p className="text-white/70 text-sm">
                          <span className="text-white/90 font-medium">Topic Name:</span> {modalContent.projectDetails.topicDetails.name}
                        </p>
                        <div>
                          <span className="text-white/90 font-medium">Consumer Groups:</span>
                          <ul className="text-white/70 text-sm mt-1 space-y-1">
                            {modalContent.projectDetails.topicDetails.consumerGroups.map((group: string, i: number) => (
                              <li key={i} className="flex items-start">
                                <span className="text-blue-400 mr-2">•</span>
                                {group}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Code Examples */}
                  {modalContent.projectDetails.codeExamples && (
                    <div className="bg-dark-accent/30 rounded-lg p-4">
                      <h4 className="text-lg font-semibold text-electric mb-3">📝 Code Examples</h4>
                      <div className="space-y-4">
                        <div>
                          <h5 className="text-white/90 font-medium mb-2">Producer (KafkaProducer.java)</h5>
                          <pre className="text-white/70 text-xs overflow-x-auto bg-dark p-3 rounded">
                            {modalContent.projectDetails.codeExamples.producer}
                          </pre>
                        </div>
                        <div>
                          <h5 className="text-white/90 font-medium mb-2">Consumer (KafkaConsumer.java)</h5>
                          <pre className="text-white/70 text-xs overflow-x-auto bg-dark p-3 rounded">
                            {modalContent.projectDetails.codeExamples.consumer}
                          </pre>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Dependencies */}
                  {modalContent.projectDetails.dependencies && (
                    <div className="bg-dark-accent/30 rounded-lg p-4">
                      <h4 className="text-lg font-semibold text-electric mb-3">🔧 Dependencies</h4>
                      <ul className="text-white/70 text-sm space-y-1">
                        {modalContent.projectDetails.dependencies.map((dep: string, i: number) => (
                          <li key={i} className="flex items-start">
                            <span className="text-green-400 mr-2">•</span>
                            {dep}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Expected Behavior */}
                  {modalContent.projectDetails.expectedBehavior && (
                    <div className="bg-dark-accent/30 rounded-lg p-4">
                      <h4 className="text-lg font-semibold text-electric mb-3">📊 Expected Behavior</h4>
                      <ul className="text-white/70 text-sm space-y-1">
                        {modalContent.projectDetails.expectedBehavior.map((behavior: string, i: number) => (
                          <li key={i} className="flex items-start">
                            <span className="text-blue-400 mr-2">•</span>
                            {behavior}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Troubleshooting */}
                  {modalContent.projectDetails.troubleshooting && (
                    <div className="bg-dark-accent/30 rounded-lg p-4">
                      <h4 className="text-lg font-semibold text-electric mb-3">🚨 Troubleshooting</h4>
                      <ul className="text-white/70 text-sm space-y-1">
                        {modalContent.projectDetails.troubleshooting.map((issue: string, i: number) => (
                          <li key={i} className="flex items-start">
                            <span className="text-yellow-400 mr-2">⚠</span>
                            {issue}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Scaling Considerations */}
                  {modalContent.projectDetails.scalingConsiderations && (
                    <div className="bg-dark-accent/30 rounded-lg p-4">
                      <h4 className="text-lg font-semibold text-electric mb-3">📈 Scaling Considerations</h4>
                      <ul className="text-white/70 text-sm space-y-1">
                        {modalContent.projectDetails.scalingConsiderations.map((consideration: string, i: number) => (
                          <li key={i} className="flex items-start">
                            <span className="text-purple-400 mr-2">•</span>
                            {consideration}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Sources */}
                  {modalContent.projectDetails.sources && (
                    <div className="bg-dark-accent/30 rounded-lg p-4">
                      <h4 className="text-lg font-semibold text-electric mb-3">🔍 Data Sources</h4>
                      <ul className="text-white/70 text-sm space-y-1">
                        {modalContent.projectDetails.sources.map((source: string, i: number) => (
                          <li key={i} className="flex items-start">
                            <span className="text-blue-400 mr-2">•</span>
                            {source}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* API Endpoints */}
                  {modalContent.projectDetails.apiEndpoints && (
                    <div className="bg-dark-accent/30 rounded-lg p-4">
                      <h4 className="text-lg font-semibold text-electric mb-3">📡 API Endpoints</h4>
                      <div className="space-y-4">
                        {modalContent.projectDetails.apiEndpoints.map((endpoint: any, i: number) => (
                          <div key={i} className="border-l-2 border-electric pl-3">
                            <h5 className="text-white/90 font-medium mb-2">{endpoint.method}</h5>
                            <p className="text-white/70 text-sm mb-2">{endpoint.description}</p>
                            {endpoint.parameters && (
                              <p className="text-white/70 text-sm mb-2">
                                <span className="text-white/90 font-medium">Parameters:</span> {endpoint.parameters}
                              </p>
                            )}
                            {endpoint.example && (
                              <div className="mb-2">
                                <span className="text-white/90 font-medium">Example:</span>
                                <pre className="text-white/70 text-xs overflow-x-auto bg-dark p-2 rounded mt-1">
                                  {endpoint.example}
                                </pre>
                              </div>
                            )}
                            {endpoint.response && (
                              <div>
                                <span className="text-white/90 font-medium">Response:</span>
                                <pre className="text-white/70 text-xs overflow-x-auto bg-dark p-2 rounded mt-1">
                                  {endpoint.response}
                                </pre>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Development Setup */}
                  {modalContent.projectDetails.development && (
                    <div className="bg-dark-accent/30 rounded-lg p-4">
                      <h4 className="text-lg font-semibold text-electric mb-3">🛠️ Development Setup</h4>
                      <div className="space-y-4">
                        <div>
                          <h5 className="text-white/90 font-medium mb-2">Setup Steps:</h5>
                          <ul className="text-white/70 text-sm space-y-1">
                            {modalContent.projectDetails.development.setup.map((step: string, i: number) => (
                              <li key={i} className="flex items-start">
                                <span className="text-green-400 mr-2">{i + 1}.</span>
                                {step}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 className="text-white/90 font-medium mb-2">Commands:</h5>
                          <div className="space-y-1">
                            {modalContent.projectDetails.development.commands.map((command: string, i: number) => (
                              <pre key={i} className="text-white/70 text-xs overflow-x-auto bg-dark p-2 rounded">
                                {command}
                              </pre>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Deployment */}
                  {modalContent.projectDetails.deployment && (
                    <div className="bg-dark-accent/30 rounded-lg p-4">
                      <h4 className="text-lg font-semibold text-electric mb-3">📦 Deployment</h4>
                      <div className="space-y-2">
                        <p className="text-white/70 text-sm">
                          <span className="text-white/90 font-medium">Platform:</span> {modalContent.projectDetails.deployment.platform}
                        </p>
                        <p className="text-white/70 text-sm">
                          <span className="text-white/90 font-medium">Build Command:</span>
                          <pre className="text-white/70 text-xs overflow-x-auto bg-dark p-2 rounded mt-1">
                            {modalContent.projectDetails.deployment.buildCommand}
                          </pre>
                        </p>
                        <p className="text-white/70 text-sm">
                          <span className="text-white/90 font-medium">Start Command:</span>
                          <pre className="text-white/70 text-xs overflow-x-auto bg-dark p-2 rounded mt-1">
                            {modalContent.projectDetails.deployment.startCommand}
                          </pre>
                        </p>
                        <p className="text-white/70 text-sm">
                          <span className="text-white/90 font-medium">Python Version:</span> {modalContent.projectDetails.deployment.pythonVersion}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Documentation */}
                  {modalContent.projectDetails.documentation && (
                    <div className="bg-dark-accent/30 rounded-lg p-4">
                      <h4 className="text-lg font-semibold text-electric mb-3">📖 Documentation</h4>
                      <ul className="text-white/70 text-sm space-y-1">
                        {modalContent.projectDetails.documentation.map((doc: string, i: number) => (
                          <li key={i} className="flex items-start">
                            <span className="text-blue-400 mr-2">•</span>
                            {doc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Testing */}
                  {modalContent.projectDetails.testing && (
                    <div className="bg-dark-accent/30 rounded-lg p-4">
                      <h4 className="text-lg font-semibold text-electric mb-3">✅ Testing</h4>
                      <div className="space-y-3">
                        <div>
                          <h5 className="text-white/90 font-medium mb-2">Manual Testing:</h5>
                          <ul className="text-white/70 text-sm space-y-1">
                            {modalContent.projectDetails.testing.manual.map((test: string, i: number) => (
                              <li key={i} className="flex items-start">
                                <span className="text-green-400 mr-2">•</span>
                                {test}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 className="text-white/90 font-medium mb-2">Automated Testing:</h5>
                          <ul className="text-white/70 text-sm space-y-1">
                            {modalContent.projectDetails.testing.automated.map((test: string, i: number) => (
                              <li key={i} className="flex items-start">
                                <span className="text-purple-400 mr-2">•</span>
                                {test}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Challenges */}
                  {modalContent.projectDetails.challenges && (
                    <div className="bg-dark-accent/30 rounded-lg p-4">
                      <h4 className="text-lg font-semibold text-electric mb-3">🚨 Challenges</h4>
                      <ul className="text-white/70 text-sm space-y-1">
                        {modalContent.projectDetails.challenges.map((challenge: string, i: number) => (
                          <li key={i} className="flex items-start">
                            <span className="text-yellow-400 mr-2">⚠</span>
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Solutions */}
                  {modalContent.projectDetails.solutions && (
                    <div className="bg-dark-accent/30 rounded-lg p-4">
                      <h4 className="text-lg font-semibold text-electric mb-3">💡 Solutions</h4>
                      <ul className="text-white/70 text-sm space-y-1">
                        {modalContent.projectDetails.solutions.map((solution: string, i: number) => (
                          <li key={i} className="flex items-start">
                            <span className="text-green-400 mr-2">✓</span>
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}



                  {/* Concepts Section for FirstML */}
                  {modalContent.concepts && (
                    <div className="space-y-4 mb-4">
                      <h4 className="text-xl font-bold text-electric border-b border-electric/30 pb-2">
                        🧠 ML Concepts & Methodologies
                      </h4>
                      
                      {modalContent.concepts.map((concept: any, index: number) => (
                        <div key={index} className="bg-dark-accent/30 rounded-lg p-4 border-l-4 border-green-500">
                          <h5 className="text-lg font-semibold text-electric mb-3">{concept.name}</h5>
                          
                          <div className="space-y-3">
                            <div>
                              <span className="text-white/90 font-medium">🎯 Goal:</span>
                              <p className="text-white/70 text-sm mt-1">{concept.goal}</p>
                            </div>
                            
                            <div>
                              <span className="text-white/90 font-medium">🛠️ Tools:</span>
                              <div className="flex flex-wrap gap-2 mt-1">
                                {concept.tools.map((tool: string, i: number) => (
                                  <span key={i} className="px-2 py-1 bg-dark text-white/80 text-xs rounded-full">
                                    {tool}
                                  </span>
                                ))}
                              </div>
                            </div>
                            
                            <div>
                              <span className="text-white/90 font-medium">📋 Steps:</span>
                              <ul className="text-white/70 text-sm mt-1 space-y-1">
                                {concept.steps.map((step: string, i: number) => (
                                  <li key={i} className="flex items-start">
                                    <span className="text-green-400 mr-2">{i + 1}.</span>
                                    {step}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
              
              <div className="flex gap-3">
                <a
                  href={modalContent.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-3 bg-electric text-white font-medium rounded-lg shadow hover:bg-electric/80 transition-colors text-center"
                >
                  {modalContent.linkLabel}
                </a>
                {modalContent.demoLink && (
                  <a
                    href={modalContent.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-3 bg-green-600 text-white font-medium rounded-lg shadow hover:bg-green-700 transition-colors text-center"
                  >
                    {modalContent.demoLabel}
                  </a>
                )}
              </div>
              

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TechExploration; 