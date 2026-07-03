export const personalInfo = {
  name: "Alex Chen",
  title: "Software Engineer",
  tagline: "Building digital experiences across platforms",
  bio: "I'm a full-stack software engineer with 6+ years of experience crafting elegant solutions across mobile, web, and backend domains. I love transforming complex problems into clean, intuitive applications.",
  location: "San Francisco, CA",
  email: "alex@example.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
};

export interface SkillItem {
  name: string;
  level: number; // 0-100
}

export interface SkillCategory {
  title: string;
  description: string;
  icon: string;
  emoji: string;
  accent: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Mobile Development",
    description: "Cross-platform mobile applications with native performance",
    icon: "smartphone",
    emoji: "📱",
    accent: "from-sky-500/15 to-cyan-500/5",
    skills: [
      { name: "Flutter", level: 95 },
      { name: "Dart", level: 92 },
      { name: "React Native", level: 75 },
      { name: "iOS (Swift)", level: 60 },
      { name: "Android (Kotlin)", level: 65 },
    ],
  },
  {
    title: "Frontend Development",
    description: "Modern web interfaces, SPAs, and design systems",
    icon: "layout",
    emoji: "🖥️",
    accent: "from-violet-500/15 to-purple-500/5",
    skills: [
      { name: "React", level: 93 },
      { name: "TypeScript", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Vue.js", level: 78 },
      { name: "Tailwind CSS", level: 95 },
    ],
  },
  {
    title: "Backend Development",
    description: "Scalable APIs, microservices, and data pipelines",
    icon: "server",
    emoji: "⚙️",
    accent: "from-amber-500/15 to-orange-500/5",
    skills: [
      { name: "Laravel", level: 94 },
      { name: "PHP", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "Python", level: 72 },
      { name: "REST / GraphQL", level: 88 },
    ],
  },
  {
    title: "DevOps & Tools",
    description: "Infrastructure, CI/CD, and cloud platforms",
    icon: "cloud",
    emoji: "☁️",
    accent: "from-emerald-500/15 to-teal-500/5",
    skills: [
      { name: "Docker", level: 88 },
      { name: "AWS", level: 80 },
      { name: "Git", level: 95 },
      { name: "CI/CD", level: 82 },
      { name: "PostgreSQL", level: 85 },
    ],
  },
];

export interface Project {
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  category: string[];
  link?: string;
  github?: string;
  featured: boolean;
  emoji: string;
  accent: string;
  year: string;
}

export const projects: Project[] = [
  {
    title: "Smart Agriculture",
    description: "AI Powered Smart Agriculture System for Pakistani Farmers",
    longDescription: "A comprehensive solution combining App Development, Full Stack architecture, and Machine Learning.",
    tech: ["Dart", "Flutter", "Machine Learning"],
    category: ["App Development", "Full Stack", "Machine Learning"],
    github: "https://github.com/hamibashir/Smart-Agriculture",
    featured: true,
    emoji: "🌾",
    accent: "from-green-500/15 to-emerald-500/5",
    year: "2024",
  },
  {
    title: "arrows puzzle",
    description: "A Javascript-based game wrapped with Capacitor into a native mobile app.",
    longDescription: "View the repository on GitHub for more details.",
    tech: ["JavaScript", "Capacitor"],
    category: ["App Development", "Frontend"],
    github: "https://github.com/hamibashir/arrows-puzzle",
    featured: false,
    emoji: "🧩",
    accent: "from-orange-500/15 to-amber-500/5",
    year: "2024",
  },
  {
    title: "Qalb",
    description: "Full Stack web application.",
    longDescription: "View the repository on GitHub for more details.",
    tech: ["PHP"],
    category: ["Full Stack"],
    github: "https://github.com/hamibashir/Qalb",
    featured: false,
    emoji: "❤️",
    accent: "from-rose-500/15 to-pink-500/5",
    year: "2024",
  },
  {
    title: "apexbyte labs",
    description: "Frontend web development project.",
    longDescription: "View the repository on GitHub for more details.",
    tech: ["TypeScript"],
    category: ["Frontend"],
    github: "https://github.com/hamibashir/apexbyte-labs",
    featured: false,
    emoji: "🧪",
    accent: "from-blue-500/15 to-cyan-500/5",
    year: "2024",
  },
  {
    title: "Email Spam Classifier",
    description: "Machine learning model to classify email spam.",
    longDescription: "View the repository on GitHub for more details.",
    tech: ["Jupyter Notebook", "Python"],
    category: ["Machine Learning"],
    github: "https://github.com/hamibashir/Email_Spam_Classifier",
    featured: false,
    emoji: "📧",
    accent: "from-red-500/15 to-rose-500/5",
    year: "2023",
  },
  {
    title: "loan manager",
    description: "Mobile application for managing loans.",
    longDescription: "View the repository on GitHub for more details.",
    tech: ["Dart", "Flutter"],
    category: ["App Development"],
    github: "https://github.com/hamibashir/loan_manager",
    featured: false,
    emoji: "💸",
    accent: "from-emerald-500/15 to-teal-500/5",
    year: "2023",
  },
  {
    title: "POS Software",
    description: "Point of Sale software system.",
    longDescription: "View the repository on GitHub for more details.",
    tech: ["Blade", "Laravel"],
    category: ["Full Stack"],
    github: "https://github.com/hamibashir/POS-Software",
    featured: false,
    emoji: "🏪",
    accent: "from-indigo-500/15 to-blue-500/5",
    year: "2023",
  },
  {
    title: "budgetsplit",
    description: "App for splitting budgets and expenses.",
    longDescription: "View the repository on GitHub for more details.",
    tech: ["Dart", "Flutter"],
    category: ["App Development"],
    github: "https://github.com/hamibashir/budgetsplit",
    featured: false,
    emoji: "📊",
    accent: "from-sky-500/15 to-cyan-500/5",
    year: "2023",
  },
  {
    title: "Driver Monitoring System",
    description: "System to monitor driver behavior using machine learning and frontend interface.",
    longDescription: "View the repository on GitHub for more details.",
    tech: ["TypeScript", "Machine Learning"],
    category: ["Machine Learning", "Frontend"],
    github: "https://github.com/hamibashir/Driver-Monitoring-System",
    featured: false,
    emoji: "🚗",
    accent: "from-slate-500/15 to-gray-500/5",
    year: "2023",
  },
  {
    title: "Smart Attendance System",
    description: "Automated attendance tracking system.",
    longDescription: "View the repository on GitHub for more details.",
    tech: ["JavaScript"],
    category: ["Full Stack", "Machine Learning"],
    github: "https://github.com/hamibashir/Smart-Attendance-System",
    featured: false,
    emoji: "📅",
    accent: "from-violet-500/15 to-purple-500/5",
    year: "2023",
  },
  {
    title: "Iris Flower Classification",
    description: "Classic machine learning project for classifying Iris flowers.",
    longDescription: "View the repository on GitHub for more details.",
    tech: ["Jupyter Notebook", "Python"],
    category: ["Machine Learning"],
    github: "https://github.com/hamibashir/Iris-Flower-Classification",
    featured: false,
    emoji: "🌸",
    accent: "from-pink-500/15 to-rose-500/5",
    year: "2023",
  },
  {
    title: "House Price Prediction System",
    description: "Predicts house prices based on various features.",
    longDescription: "View the repository on GitHub for more details.",
    tech: ["Jupyter Notebook", "Python"],
    category: ["Machine Learning"],
    github: "https://github.com/hamibashir/House-Price-Prediction-System",
    featured: false,
    emoji: "🏠",
    accent: "from-amber-500/15 to-orange-500/5",
    year: "2023",
  },
  {
    title: "Digit Recognition System",
    description: "Handwritten digit recognition using ML.",
    longDescription: "View the repository on GitHub for more details.",
    tech: ["Jupyter Notebook", "Python"],
    category: ["Machine Learning"],
    github: "https://github.com/hamibashir/Digit_Recognition_System",
    featured: false,
    emoji: "🔢",
    accent: "from-blue-500/15 to-indigo-500/5",
    year: "2023",
  },
  {
    title: "Music Genre Classifier",
    description: "Classifies music tracks into different genres.",
    longDescription: "View the repository on GitHub for more details.",
    tech: ["Python"],
    category: ["Machine Learning"],
    github: "https://github.com/hamibashir/Music-Genre-Classifier",
    featured: false,
    emoji: "🎵",
    accent: "from-purple-500/15 to-fuchsia-500/5",
    year: "2023",
  },
  {
    title: "Mall Customer Segmentation",
    description: "Segments mall customers based on purchasing behavior.",
    longDescription: "View the repository on GitHub for more details.",
    tech: ["Jupyter Notebook", "Python"],
    category: ["Machine Learning"],
    github: "https://github.com/hamibashir/Mall-Customer-Segmentation",
    featured: false,
    emoji: "🛍️",
    accent: "from-teal-500/15 to-emerald-500/5",
    year: "2023",
  },
  {
    title: "Loan Approval Prediction",
    description: "Predicts whether a loan will be approved or rejected.",
    longDescription: "View the repository on GitHub for more details.",
    tech: ["Python"],
    category: ["Machine Learning"],
    github: "https://github.com/hamibashir/Loan-Approval-Prediction",
    featured: false,
    emoji: "🏦",
    accent: "from-emerald-500/15 to-green-500/5",
    year: "2023",
  },
  {
    title: "Student Score Prediction",
    description: "Predicts student scores based on study hours.",
    longDescription: "View the repository on GitHub for more details.",
    tech: ["Python"],
    category: ["Machine Learning"],
    github: "https://github.com/hamibashir/Student-Score-Prediction",
    featured: false,
    emoji: "🎓",
    accent: "from-blue-500/15 to-cyan-500/5",
    year: "2023",
  },
  {
    title: "Emotion Detection System",
    description: "Detects human emotions from text or images using python.",
    longDescription: "View the repository on GitHub for more details.",
    tech: ["Python"],
    category: ["Machine Learning"],
    github: "https://github.com/hamibashir/Emotion-Detection-System-using-python",
    featured: false,
    emoji: "😊",
    accent: "from-rose-500/15 to-red-500/5",
    year: "2023",
  }
];

// ── Shared timeline item shape ──────────────────────────────────────────────
export interface TimelineItem {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  details: string[];
  tags: string[];
}

export type TimelineCategory = "experience" | "education" | "certifications";

// ── Experience ──────────────────────────────────────────────────────────────
export const experiences: TimelineItem[] = [
  {
    title: "Senior Software Engineer",
    subtitle: "TechNova Inc.",
    period: "2022 — Present",
    description: "Leading cross-platform development initiatives and mentoring junior engineers.",
    details: [
      "Architected a Flutter-based mobile platform serving 500K+ users",
      "Reduced API response times by 40% through Laravel optimization",
      "Established CI/CD pipelines cutting deployment time by 60%",
    ],
    tags: ["Flutter", "Laravel", "React", "AWS"],
  },
  {
    title: "Full Stack Developer",
    subtitle: "Digital Craft Studio",
    period: "2020 — 2022",
    description: "Delivered end-to-end web and mobile solutions for diverse clients.",
    details: [
      "Built 12+ production applications across web and mobile platforms",
      "Implemented real-time features using WebSocket and Firebase",
      "Led migration from monolith to microservices architecture",
    ],
    tags: ["React", "Vue.js", "Node.js", "Flutter"],
  },
  {
    title: "Backend Developer",
    subtitle: "DataPulse",
    period: "2018 — 2020",
    description: "Developed scalable backend systems and RESTful APIs.",
    details: [
      "Designed REST APIs handling 10M+ daily requests",
      "Built automated data processing pipelines with Python",
      "Maintained 99.9% uptime for critical services",
    ],
    tags: ["Laravel", "Python", "PostgreSQL", "Docker"],
  },
];

// ── Education ───────────────────────────────────────────────────────────────
export const education: TimelineItem[] = [
  {
    title: "M.S. Computer Science",
    subtitle: "Stanford University",
    period: "2016 — 2018",
    description: "Focused on distributed systems and human-computer interaction.",
    details: [
      "Thesis on cross-platform rendering performance in Flutter vs React Native",
      "Teaching assistant for Advanced Web Technologies (CS 142)",
      "Published research on optimizing REST API latency at scale",
    ],
    tags: ["Distributed Systems", "HCI", "Research"],
  },
  {
    title: "B.S. Software Engineering",
    subtitle: "University of California, Berkeley",
    period: "2012 — 2016",
    description: "Graduated with honors — strong foundation in algorithms, systems, and software design.",
    details: [
      "Dean's List all semesters with 3.9 GPA",
      "Led the university's open-source club and organized two hackathons",
      "Capstone project: real-time collaborative code editor (Node.js + WebSocket)",
    ],
    tags: ["Algorithms", "Software Design", "Open Source"],
  },
];

// ── Certifications ──────────────────────────────────────────────────────────
export const certifications: TimelineItem[] = [
  {
    title: "AWS Solutions Architect — Professional",
    subtitle: "Amazon Web Services",
    period: "2024",
    description: "Advanced certification for designing distributed systems on AWS.",
    details: [
      "Covers high-availability architecture, cost optimization, and migration strategies",
      "Scored in the top 5% of candidates globally",
    ],
    tags: ["AWS", "Cloud Architecture", "DevOps"],
  },
  {
    title: "Google Associate Cloud Engineer",
    subtitle: "Google Cloud",
    period: "2023",
    description: "Validates ability to deploy and manage GCP applications and infrastructure.",
    details: [
      "Hands-on proficiency with Compute Engine, Kubernetes Engine, and Cloud Functions",
      "Infrastructure-as-code with Terraform on GCP",
    ],
    tags: ["GCP", "Kubernetes", "Terraform"],
  },
  {
    title: "Flutter & Dart — The Complete Guide",
    subtitle: "Udemy — Maximilian Schwarzmüller",
    period: "2022",
    description: "Comprehensive course covering Flutter, Dart, state management, and native device features.",
    details: [
      "Built 8 production-grade projects throughout the course",
      "Mastered advanced state management with Riverpod and Bloc",
    ],
    tags: ["Flutter", "Dart", "Mobile"],
  },
  {
    title: "Laravel Certified Developer",
    subtitle: "Laravel LLC",
    period: "2021",
    description: "Official certification demonstrating deep proficiency with the Laravel framework.",
    details: [
      "Expertise in Eloquent ORM, queues, events, and testing",
      "Advanced knowledge of Laravel ecosystem (Horizon, Vapor, Forge)",
    ],
    tags: ["Laravel", "PHP", "Backend"],
  },
];

// ── Aggregated map for easy lookup ──────────────────────────────────────────
export const timelineData: Record<TimelineCategory, TimelineItem[]> = {
  experience: experiences,
  education: education,
  certifications: certifications,
};
