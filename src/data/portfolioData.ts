export interface Project {
  id: string;
  title: string;
  category: string;
  badge: string;
  description: string;
  fullOverview: string;
  features: string[];
  techStack: string[];
  githubUrl: string;
  featured: boolean;
  accentColor: string;
  stats: { label: string; value: string }[];
  diagramType: 'ecommerce' | 'rag' | 'cv';
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string[];
  technologies: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  category: 'AI & Cloud' | 'Development' | 'APIs & Methodologies';
  credentialBadge: string;
}

export interface SkillCategory {
  id: string;
  number: string;
  name: string;
  skills: { name: string; icon?: string; tag?: string }[];
}

export const PERSONAL_INFO = {
  name: "Muhammed Nihal Salam",
  shortName: "Nihal",
  title: "Full Stack Developer | Python Developer | AI & Cloud Enthusiast",
  headline: "FULL STACK DEVELOPER.",
  subHeadline: "Python & Django • React & Next.js • AI / RAG • Cloud Systems",
  location: "Bengaluru, India",
  email: "muhammadnihalsalam@gmail.com",
  phone: "+91-9745225339",
  linkedIn: "https://linkedin.com/in/nihalsalam/",
  github: "https://github.com/nihaalsalam",
  status: "Available for Full-time Roles",
  summary:
    "Hi, I’m Muhammed Nihal Salam. A Full Stack Developer passionate about building scalable web applications, intelligent AI-powered solutions, and modern digital experiences. Skilled in Python, Django, React, RESTful APIs, MySQL, and modern cloud deployment with hands-on expertise in Retrieval-Augmented Generation (RAG) and Computer Vision.",
  aboutDetailed: [
    "Full Stack Developer skilled in building end-to-end web applications with clean architecture, robust input validation, and high performance.",
    "Experienced in relational database design with Django ORM, MySQL, and PostgreSQL, implementing session & JWT authentication, shopping carts, wishlists, and secure checkout workflows.",
    "Built dynamic administrative dashboards for product management, order tracking, real-time analytics, and automated report generation with responsive, mobile-first design.",
    "Strong technical background in Artificial Intelligence, including transformer-based LLMs, RAG pipelines, NLP with FLAN-T5, and medical image classification using TensorFlow and OpenCV.",
  ],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "languages",
    number: "01",
    name: "Programming Languages",
    skills: [
      { name: "Python" },
      { name: "JavaScript (ES6+)" },
      { name: "SQL" },
      { name: "Java" },
      { name: "HTML5" },
      { name: "CSS3" },
    ],
  },
  {
    id: "frontend",
    number: "02",
    name: "Frontend Development",
    skills: [
      { name: "React.js" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "Bootstrap" },
      { name: "React Hooks" },
      { name: "Responsive Web Design" },
    ],
  },
  {
    id: "backend",
    number: "03",
    name: "Backend & APIs",
    skills: [
      { name: "Django" },
      { name: "Django REST Framework" },
      { name: "RESTful APIs" },
      { name: "FastAPI" },
      { name: "JWT Authentication" },
      { name: "API Development" },
    ],
  },
  {
    id: "databases",
    number: "04",
    name: "Databases & ORM",
    skills: [
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "Django ORM" },
    ],
  },
  {
    id: "cloud-devops",
    number: "05",
    name: "Cloud & DevOps",
    skills: [
      { name: "AWS EC2" },
      { name: "AWS S3" },
      { name: "AWS RDS" },
      { name: "AWS IAM" },
      { name: "AWS VPC" },
      { name: "Docker" },
      { name: "Linux" },
      { name: "CI/CD (GitHub Actions)" },
      { name: "Nginx" },
      { name: "Gunicorn" },
    ],
  },
  {
    id: "ai-ml",
    number: "06",
    name: "AI & Machine Learning",
    skills: [
      { name: "Machine Learning" },
      { name: "Deep Learning" },
      { name: "NLP" },
      { name: "Computer Vision" },
      { name: "TensorFlow" },
      { name: "OpenCV" },
      { name: "Generative AI" },
      { name: "RAG & LLMs" },
      { name: "FLAN-T5" },
      { name: "NumPy" },
      { name: "Pandas" },
      { name: "Matplotlib" },
    ],
  },
  {
    id: "tools-concepts",
    number: "07",
    name: "Tools & Core Concepts",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Postman" },
      { name: "VS Code" },
      { name: "Power BI" },
      { name: "Data Structures & Algorithms" },
      { name: "OOP" },
      { name: "Database Design" },
      { name: "Unit Testing" },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "handmade-ecommerce",
    title: "E-Commerce Website for Handmade Products",
    category: "Full Stack Web Application",
    badge: "Django • MySQL • Tailwind",
    description:
      "A full-stack e-commerce web platform engineered for artisan creators, featuring session-based authentication, product management, dynamic cart, wishlist, and an analytics-driven admin dashboard.",
    fullOverview:
      "Developed an end-to-end e-commerce solution tailored for handmade goods and artisans. Owns the full lifecycle from relational database schema modeling in MySQL using Django ORM to crafting responsive, accessible client interfaces with HTML5, Tailwind CSS, and JavaScript. Includes granular role-based access for store managers, order status pipelines, and printable analytics reports.",
    features: [
      "User authentication with session-based login and password encryption",
      "Product catalog with categorisation, search, and dynamic filtering",
      "Shopping cart and persistent wishlist with instant price calculations",
      "Multi-step checkout workflow with order confirmation and invoice generation",
      "Comprehensive admin dashboard for inventory management and order fulfillment",
      "Relational database design in MySQL with optimized Django ORM query sets",
      "Sales performance reports, exportable logs, and visitor analytics",
    ],
    techStack: [
      "Python",
      "Django",
      "MySQL",
      "Django ORM",
      "JavaScript",
      "HTML5",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/nihaalsalam",
    featured: true,
    accentColor: "#10b981",
    stats: [
      { label: "Architecture", value: "Django MVC" },
      { label: "Database", value: "MySQL" },
      { label: "Auth", value: "Session & RBAC" },
    ],
    diagramType: "ecommerce",
  },
  {
    id: "smart-doc-rag",
    title: "Smart Document Analyzer Using RAG",
    category: "Generative AI & Semantic Retrieval",
    badge: "FastAPI • React • RAG • FLAN-T5",
    description:
      "An intelligent question-answering system using Retrieval-Augmented Generation (RAG) to process complex PDFs and extract grounded answers with semantic vector search.",
    fullOverview:
      "Engineered an enterprise-grade document intelligence system that combines vector similarity retrieval with language model generation. Uploaded PDF documents are parsed, chunked, and embedded into high-dimensional vector representations. A FastAPI backend orchestrates semantic query retrieval via vector indices, formatting context for transformer models (such as FLAN-T5) to produce verifiable, grounded responses on a modern React frontend.",
    features: [
      "PDF parsing, recursive text splitting, and intelligent document chunking",
      "Vector embeddings and similarity-based retrieval with cosine distance scoring",
      "Grounded question answering preventing LLM hallucinations with citation context",
      "High-throughput asynchronous FastAPI backend endpoints",
      "Clean, modern React user interface with live document preview and chat",
      "Contextual caching and token-optimized prompt construction",
    ],
    techStack: [
      "Python",
      "RAG",
      "NLP",
      "FLAN-T5",
      "FastAPI",
      "React.js",
      "Vector Database",
      "Hugging Face",
    ],
    githubUrl: "https://github.com/nihaalsalam",
    featured: true,
    accentColor: "#3b82f6",
    stats: [
      { label: "Model", value: "FLAN-T5" },
      { label: "API Framework", value: "FastAPI" },
      { label: "Search", value: "Vector Embedding" },
    ],
    diagramType: "rag",
  },
  {
    id: "skin-lesion-detection",
    title: "AI-Based Skin Lesion Detection System",
    category: "Computer Vision & Deep Learning",
    badge: "TensorFlow • CNN • OpenCV",
    description:
      "A deep learning computer vision system utilizing Convolutional Neural Networks (CNNs) and OpenCV preprocessing for automated detection and classification of dermatological lesions.",
    fullOverview:
      "Built a healthcare-oriented computer vision classification system designed to assist in preliminary skin lesion assessment. The pipeline executes image preprocessing, adaptive histogram equalization, noise reduction, and lesion segmentation with OpenCV before feeding images into a deep Convolutional Neural Network trained with TensorFlow. Evaluated against clinical benchmark datasets using sensitivity, specificity, and ROC metrics.",
    features: [
      "Clinical image preprocessing, normalization, and noise filtering with OpenCV",
      "Contour detection and lesion border segmentation algorithms",
      "Multi-class classification using deep Convolutional Neural Network (CNN) architectures",
      "Automated confidence scoring and risk stratification report",
      "Data augmentation pipeline for handling class imbalances in medical imagery",
      "Evaluation against validation sets measuring Precision, Recall, and F1-Score",
    ],
    techStack: [
      "Python",
      "TensorFlow",
      "CNN",
      "OpenCV",
      "Deep Learning",
      "Image Processing",
      "NumPy",
    ],
    githubUrl: "https://github.com/nihaalsalam",
    featured: true,
    accentColor: "#8b5cf6",
    stats: [
      { label: "Model", value: "Deep CNN" },
      { label: "Vision Tool", value: "OpenCV" },
      { label: "Task", value: "Multi-class Classification" },
    ],
    diagramType: "cv",
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "emdata",
    role: "Full Stack Intern",
    company: "Emdata Networks Private Limited",
    period: "April 2026 – Present",
    location: "Bengaluru, India",
    type: "Internship",
    description: [
      "Built a full-stack e-commerce web application using Python, Django, MySQL, HTML5, Tailwind CSS, and JavaScript, owning features from database design to user interface.",
      "Implemented user authentication with session-based login, product management, shopping cart, wishlist, and secure checkout functionality.",
      "Designed relational database models in MySQL using Django ORM and built CRUD operations for products, orders, and users.",
      "Developed an admin dashboard for product management, order tracking, analytics, and report generation.",
      "Created responsive, mobile-friendly interfaces with Tailwind CSS and JavaScript for smooth product browsing and checkout.",
      "Used Git/GitHub for version control and practiced debugging and testing across the development lifecycle.",
    ],
    technologies: ["Python", "Django", "MySQL", "Django ORM", "Tailwind CSS", "JavaScript", "Git", "GitHub"],
  },
  {
    id: "suprmentr",
    role: "AI & Cloud Computing Intern",
    company: "SuprMentr",
    period: "February 2026 – April 2026",
    location: "Bengaluru, India",
    type: "Internship",
    description: [
      "Built and deployed AI/ML applications in Python using OpenCV and Scikit-learn, covering computer vision and predictive modeling use cases.",
      "Designed Generative AI solutions using LLMs, Retrieval-Augmented Generation (RAG), and prompt engineering to deliver context-aware, intelligent responses.",
      "Preprocessed and cleaned datasets, then trained and evaluated ML models with standard performance metrics to improve model reliability.",
      "Developed end-to-end Python applications for AI-driven projects, from data handling and model integration to a working solution.",
    ],
    technologies: ["Python", "OpenCV", "Scikit-Learn", "Generative AI", "RAG", "LLMs", "Prompt Engineering"],
  },
];

export const EDUCATION = {
  degree: "B.E. in Information Science & Engineering",
  institution: "Yenepoya Institute of Technology",
  period: "10/2022 – 08/2026",
  cgpa: "7.8 / 10.0",
  location: "Mangaluru / Karnataka, India",
  highlights: [
    "Core curriculum: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Computer Networks, Software Engineering.",
    "Specialized focus in Full Stack Web Development, Cloud Computing, and Artificial Intelligence.",
    "Active participant in technical symposiums, hackathons, and practical software engineering labs.",
  ],
};

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: "Microsoft Certified: Azure AI Fundamentals",
    issuer: "Microsoft",
    date: "Jan 2026",
    category: "AI & Cloud",
    credentialBadge: "AI-900 / Azure Cloud",
  },
  {
    title: "Building LLM Applications with Prompt Engineering",
    issuer: "NVIDIA",
    date: "Aug 2025",
    category: "AI & Cloud",
    credentialBadge: "Deep Learning Institute",
  },
  {
    title: "Python 3.4.3 Training",
    issuer: "Spoken Tutorial, IIT Bombay",
    date: "2024",
    category: "Development",
    credentialBadge: "IIT Bombay Spoken Tutorial",
  },
  {
    title: "Java Business Application Training",
    issuer: "Spoken Tutorial, IIT Bombay",
    date: "2024",
    category: "Development",
    credentialBadge: "IIT Bombay Spoken Tutorial",
  },
  {
    title: "OOPs in Java",
    issuer: "Simplilearn",
    date: "Dec 2024",
    category: "Development",
    credentialBadge: "Object-Oriented Programming",
  },
  {
    title: "Introduction to MERN Stack",
    issuer: "Simplilearn",
    date: "Dec 2024",
    category: "Development",
    credentialBadge: "Web Development",
  },
  {
    title: "Agile Scrum Foundation",
    issuer: "Simplilearn",
    date: "Dec 2024",
    category: "APIs & Methodologies",
    credentialBadge: "Agile & Scrum Practices",
  },
  {
    title: "Postman Classroom Program",
    issuer: "Postman",
    date: "Jun 2024",
    category: "APIs & Methodologies",
    credentialBadge: "API Testing & Orchestration",
  },
];

