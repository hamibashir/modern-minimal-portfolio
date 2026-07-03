export const personalInfo = {
  name: "Hamza Bashir",
  title: "Software Engineer",
  tagline: "Building digital experiences across platforms",
  bio: "I'm a full-stack software engineer with 2+ years of experience crafting elegant solutions across mobile, web, and backend domains. I love transforming complex problems into clean, intuitive applications.",
  location: "Islamabad, Pakistan",
  email: "hamzabashir1289@gmail.com",
  github: "https://github.com/hamibashir",
  linkedin: "https://linkedin.com/in/hamza-bashir04",
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
  playStore?: string;
  featured: boolean;
  emoji: string;
  accent: string;
  year: string;
}

export const projects: Project[] = [
  {
    title: "Ahsan Rashid Portfolio",
    description: "Professional portfolio website for Ahsan Rashid.",
    longDescription: "A fully responsive frontend portfolio website.",
    tech: ["Web Development", "Frontend"],
    category: ["Frontend"],
    link: "https://ahsanrashid.vercel.app/",
    featured: true,
    emoji: "👨‍💻",
    accent: "from-indigo-500/15 to-blue-500/5",
    year: "2026",
  },
  {
    title: "The Sescon (Pvt) Ltd",
    description: "Professional web development for The Sescon (Pvt) Ltd.",
    longDescription: "A frontend website built for The Sescon.",
    tech: ["Web Development", "Frontend"],
    category: ["Frontend"],
    link: "https://thesescon.com/",
    featured: true,
    emoji: "🌐",
    accent: "from-blue-500/15 to-cyan-500/5",
    year: "2024",
  },
  {
    title: "SA Constructions",
    description: "Professional web development for SA Constructions.",
    longDescription: "A frontend website built for SA Constructions.",
    tech: ["Web Development", "Frontend"],
    category: ["Frontend"],
    link: "https://saconstructions.pro/",
    featured: true,
    emoji: "🏗️",
    accent: "from-yellow-500/15 to-orange-500/5",
    year: "2025",
  },
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
    year: "2026",
  },
  {
    title: "Arrows Puzzle",
    description: "A Javascript-based game wrapped with Capacitor into a native mobile app.",
    longDescription: "View the repository on GitHub for more details.",
    tech: ["JavaScript", "Capacitor"],
    category: ["App Development"],
    github: "https://github.com/hamibashir/arrows-puzzle",
    playStore: "https://play.google.com/store/apps/details?id=com.apexbytelabs.arrows",
    featured: false,
    emoji: "🧩",
    accent: "from-orange-500/15 to-amber-500/5",
    year: "2026",
  },
  {
    title: "Qalb: Islamic Advisor",
    description: "A comprehensive Islamic advising mobile application with a dedicated admin panel.",
    longDescription: "A full-stack mobile ecosystem featuring a native Android app built with Flutter, a robust PHP backend, and an intuitive Vue.js admin panel.",
    tech: ["Flutter", "PHP", "Vue.js", "Android"],
    category: ["App Development", "Full Stack"],
    github: "https://github.com/hamibashir/Qalb",
    playStore: "https://play.google.com/store/apps/details?id=com.apexbytelabs.qalb",
    featured: false,
    emoji: "❤️",
    accent: "from-rose-500/15 to-pink-500/5",
    year: "2026",
  },
  {
    title: "Apexbyte Labs",
    description: "Frontend web development project.",
    longDescription: "View the repository on GitHub for more details.",
    tech: ["TypeScript"],
    category: ["Frontend"],
    github: "https://github.com/hamibashir/apexbyte-labs",
    link: "https://apexbytelabs.online/",
    featured: false,
    emoji: "🧪",
    accent: "from-blue-500/15 to-cyan-500/5",
    year: "2026",
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
    year: "2025",
  },
  {
    title: "Loan Manager",
    description: "Mobile application for managing loans.",
    longDescription: "View the repository on GitHub for more details.",
    tech: ["Dart", "Flutter"],
    category: ["App Development"],
    github: "https://github.com/hamibashir/loan_manager",
    featured: false,
    emoji: "💸",
    accent: "from-emerald-500/15 to-teal-500/5",
    year: "2025",
  },
  {
    title: "POS Software & Online Store",
    description: "Point of Sale software system.",
    longDescription: "View the repository on GitHub for more details.",
    tech: ["Blade", "Laravel"],
    category: ["Full Stack"],
    github: "https://github.com/hamibashir/POS-Software",
    featured: false,
    emoji: "🏪",
    accent: "from-indigo-500/15 to-blue-500/5",
    year: "2026",
  },
  {
    title: "Budget Split",
    description: "App for splitting budgets and expenses.",
    longDescription: "View the repository on GitHub for more details.",
    tech: ["Dart", "Flutter"],
    category: ["App Development"],
    github: "https://github.com/hamibashir/budgetsplit",
    featured: false,
    emoji: "📊",
    accent: "from-sky-500/15 to-cyan-500/5",
    year: "2025",
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
    year: "2025",
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
    year: "2025",
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
    year: "2025",
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
    year: "2025",
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
    year: "2025",
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
    year: "2025",
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
    year: "2025",
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
    year: "2025",
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
    year: "2025",
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
    year: "2025",
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
    title: "MERN Stack Developer",
    subtitle: "Veclar Technologies · Rawalpindi, Pakistan",
    period: "Jul 2025 — Sep 2025",
    description: "",
    details: [
      "Developed real-world projects using React (TypeScript), TailwindCSS, Bootstrap, and Shadcn UI",
      "Built scalable backend services with Node.js, Express, PHP, and MySQL",
      "Gained hands-on experience in MERN stack, problem-solving, and cross-functional collaboration"
    ],
    tags: ["Node.js", "TypeScript", "React", "TailwindCSS"],
  },
  {
    title: "Machine Learning Intern",
    subtitle: "Arch Technologies · Remote",
    period: "Aug 2025 — Sep 2025",
    description: "",
    details: [
      "Researched and implemented Computer Vision algorithms for image processing tasks",
      "Developed machine learning models using Python and Scikit-Learn",
      "Optimized data pipelines and improved model prediction accuracy"
    ],
    tags: ["Scikit-Learn", "Python", "Machine Learning"],
  },
  {
    title: "Machine Learning Intern",
    subtitle: "Elevvo Pathways · Remote",
    period: "Aug 2025 — Aug 2025",
    description: "",
    details: [
      "Designed and trained Computer Vision models for automated object detection",
      "Utilized Python libraries for data extraction, cleaning, and preprocessing",
      "Collaborated with team members to integrate AI solutions into applications"
    ],
    tags: ["Computer Vision", "Python"],
  },
  {
    title: "Web Developer",
    subtitle: "SA Consulting and Structure Engineers · Islamabad, Pakistan",
    period: "Feb 2025 — Jun 2025",
    description: "",
    details: [
      "Designed and developed a dynamic, responsive WordPress website for SA Constructions",
      "Prioritized a user-friendly interface and visually engaging layout for seamless navigation",
      "Integrated advanced SEO techniques to boost online visibility and attract prospective clients"
    ],
    tags: ["Web Development", "WordPress"],
  },
  {
    title: "Web Developer",
    subtitle: "The Sescon (Pvt) Ltd · Islamabad, Pakistan",
    period: "Aug 2024 — Sep 2024",
    description: "",
    details: [
      "Developed a fully dynamic and responsive WordPress website for The Sescon (Pvt) Ltd",
      "Focused on creating a user-friendly interface and visually appealing design",
      "Implemented effective SEO strategies to enhance online visibility and attract potential clients"
    ],
    tags: ["WordPress", "SEO"],
  },
  {
    title: "Community Volunteer",
    subtitle: "Pakistan Red Crescent Society (PRCS) · Islamabad, Pakistan",
    period: "Jul 2024 — Aug 2024",
    description: "",
    details: [
      "Distributed fully equipped first aid kits to local schools and orphanages",
      "Conducted regular training sessions to disseminate information on emergency drills",
      "Equipped students and staff with tools to effectively respond to emergency situations"
    ],
    tags: ["Volunteering", "Community Service"],
  },
  {
    title: "Intern",
    subtitle: "Forage - JPMorgan Chase & Co · Remote",
    period: "Jun 2023 — Jul 2023",
    description: "",
    details: [
      "Interfaced with a stock price data feed",
      "Used JPMorgan Chase & Co. frameworks and tools",
      "Displayed data visually for traders"
    ],
    tags: ["Data Analysis", "Data Visualization"],
  },
];

// ── Education ───────────────────────────────────────────────────────────────
export const education: TimelineItem[] = [
  {
    title: "BS Software Engineering",
    subtitle: "Capital University of Science & Technology (CUST)",
    period: "Sep 2022 — Jul 2026",
    description: "",
    details: [],
    tags: ["Software Engineering"],
  },
  {
    title: "Intermediate - Pre-Engineering",
    subtitle: "Pak-Turk Maarif International Schools and Colleges",
    period: "Sep 2020 — Jul 2022",
    description: "",
    details: [],
    tags: ["Pre-Engineering"],
  },
  {
    title: "Secondary School Certificate - Science",
    subtitle: "Allied School",
    period: "Aug 2018 — May 2020",
    description: "",
    details: [],
    tags: ["Science"],
  },
];

// ── Certifications ──────────────────────────────────────────────────────────
export const certifications: TimelineItem[] = [
  {
    title: "Introduction to Cybersecurity Awareness",
    subtitle: "HP LIFE",
    period: "2025",
    description: "",
    details: [],
    tags: ["Cybersecurity"],
  },
  {
    title: "Foundations: Data, Data, Everywhere",
    subtitle: "Google (Coursera)",
    period: "2024",
    description: "",
    details: [],
    tags: ["Data Science"],
  },
  {
    title: "Prepare Data for Exploration",
    subtitle: "Google (Coursera)",
    period: "2024",
    description: "",
    details: [],
    tags: ["Data Science", "Data Exploration"],
  },
  {
    title: "C for Everyone: Programming Fundamentals",
    subtitle: "University of California, Santa Cruz (Coursera)",
    period: "2024",
    description: "",
    details: [],
    tags: ["C", "Programming Fundamentals"],
  },
  {
    title: "Coding for Everyone: C and C++ (Specialization)",
    subtitle: "University of California, Santa Cruz (Coursera)",
    period: "2024",
    description: "",
    details: [],
    tags: ["C", "C++", "Programming"],
  },
];

// ── Aggregated map for easy lookup ──────────────────────────────────────────
export const timelineData: Record<TimelineCategory, TimelineItem[]> = {
  experience: experiences,
  education: education,
  certifications: certifications,
};
