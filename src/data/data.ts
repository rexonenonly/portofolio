// ─── Personal Info ───────────────────────────────────────────
export const personalInfo = {
  name: "Rexa Alvinando",
  role: "Full-Stack Developer",
  location: "Semarang, Central Java, Indonesia",
  email: "rexalvinando@gmail.com",
  phone: "+6287843926332",
  summary:
    "Bridging business requirements and clean technical execution. System Analyst & Fullstack Developer with end-to-end SDLC experience — from requirements gathering and technical specs (BRD/FSD) to backend architecture and AI integration. Core stack: Laravel, JavaScript/Next.js, PostgreSQL, and REST APIs.",
  tagline: "Clean code. Modern tech. Reliable systems.",
  profileImage: "/assets/profile.jpg",
};

// ─── Navigation ──────────────────────────────────────────────
export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

// ─── Experience ──────────────────────────────────────────────
export interface Experience {
  title: string;
  company: string;
  type: string;
  period: string;
  duration: string;
  bullets: string[];
  skillTags: string[];
  gallery: { src: string; alt: string }[];
}

export const experiences: Experience[] = [
  {
    title: "System Analyst & Fullstack Developer Intern",
    company: "PT. Apparel One Indonesia",
    type: "Internship",
    period: "Jul 2025 — Dec 2025",
    duration: "6 months",
    bullets: [
      "Built Guest Book & Appointment modules for X-Guard Visitor Management System, digitizing enterprise visitor tracking.",
    ],
    skillTags: ["JavaScript", "PostgreSQL", "Laravel", "PHP", "MySQL", "REST API"],
    gallery: [
      { src: "/assets/experience/apparel-1.jpg", alt: "Team Collaboration & System Discussion" },
      { src: "/assets/experience/apparel-2.jpg", alt: "System Demo & Technical Walkthrough" },
      { src: "/assets/experience/apparel-3.jpg", alt: "Company Gathering & Field Outing" },
      { src: "/assets/experience/apparel-4.jpg", alt: "Annual Team Celebration" },
    ],
  },
  {
    title: "Graphic Designer",
    company: "Tomcat Digital Printing",
    type: "Internship",
    period: "Aug 2022 — Jan 2023",
    duration: "6 months",
    bullets: [
      "Handled high-volume custom design requests under tight deadlines in a fast-paced print production environment.",
    ],
    skillTags: ["Graphic Design", "CorelDRAW", "Adobe Photoshop"],
    gallery: [],
  },
];

// ─── Projects ────────────────────────────────────────────────
export interface Project {
  title: string;
  subtitle: string;
  period: string;
  association?: string;
  description: string;
  tags: string[];
  gallery: { src: string; alt: string }[];
}

export const projects: Project[] = [
  {
    title: "VISITA",
    subtitle: "AI-Powered Guest Management System",
    period: "Feb 2026 — Jul 2026",
    association: "Politeknik Negeri Semarang",
    description:
      "Face Recognition + AI Virtual Assistant for automated visitor registration, replacing paper logbooks.",
    tags: ["Laravel", "Python", "TensorFlow", "OpenCV", "PostgreSQL", "NLP"],
    gallery: [
      { src: "/assets/projects/visita-1.jpg", alt: "AI Virtual Assistant Welcome Interface" },
      { src: "/assets/projects/visita-2.jpg", alt: "Interactive NLP Consultation & Check-In" },
      { src: "/assets/projects/visita-3.jpg", alt: "Biometric Face Recognition Check-Out" },
    ],
  },
  {
    title: "X-Guard",
    subtitle: "Guestbook & Appointment Module",
    period: "Jul 2025 — Dec 2025",
    association: "PT. Apparel One Indonesia",
    description:
      "Digitized visitor operations across manufacturing facilities, eliminating paper-based bottlenecks.",
    tags: ["Laravel", "JavaScript", "PostgreSQL", "MySQL", "REST API"],
    gallery: [
      { src: "/assets/projects/xguard-1.jpg", alt: "X-Guard Operations Dashboard" },
      { src: "/assets/projects/xguard-2.jpg", alt: "On-Site Hardware Device Integration" },
    ],
  },
  {
    title: "Monitera",
    subtitle: "School Attendance Platform",
    period: "Mar 2025 — Jun 2025",
    description:
      "Face Recognition-based school attendance with streamlined check-ins and student point tracking.",
    tags: ["Laravel", "Face Recognition", "MySQL", "JavaScript"],
    gallery: [
      { src: "/assets/projects/monitera-1.jpg", alt: "Monitera Team Photo" },
    ],
  },
  {
    title: "The Last Knight",
    subtitle: "Action RPG Prototype",
    period: "Apr 2025 — Jun 2025",
    description:
      "Real-time combat RPG with enemy AI, responsive melee system, and character leveling progression.",
    tags: ["Unity", "C#", "NavMesh", "Game AI"],
    gallery: [
      { src: "/assets/projects/lastknight-1.png", alt: "The Last Knight Main Menu" },
      { src: "/assets/projects/lastknight-2.png", alt: "In-game Platforming Area" },
      { src: "/assets/projects/lastknight-3.png", alt: "Forest Level Design" },
    ],
  },
  {
    title: "Hand Sign AI",
    subtitle: "Gesture Recognition System",
    period: "Apr 2025 — Jun 2025",
    description:
      "Real-time hand gesture recognition via camera for sign language identification and assistive communication.",
    tags: ["Python", "OpenCV", "TensorFlow", "Computer Vision"],
    gallery: [
      { src: "/assets/projects/handsign-1.png", alt: "Sign Language Detector Interface" },
      { src: "/assets/projects/handsign-2.png", alt: "Hand Tracking and Detection Model" },
    ],
  },
  {
    title: "MyHiking",
    subtitle: "Mountain Ticket Booking App",
    period: "Oct 2024 — Jan 2025",
    description:
      "Mountain trekking booking app with real-time quota, payment gateway, and QR ticket validation.",
    tags: ["PHP", "MySQL", "JavaScript", "QR Code", "Payment Gateway"],
    gallery: [
      { src: "/assets/projects/myhiking-1.jpg", alt: "MyHiking Team Collaboration" },
      { src: "/assets/projects/myhiking-2.png", alt: "MyHiking Promo Materials" },
      { src: "/assets/projects/myhiking-3.png", alt: "MyHiking Mobile Registration" },
    ],
  },
];

// ─── Skills ──────────────────────────────────────────────────
export interface SkillGroup {
  category: string;
  icon: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Programming",
    icon: "Code2",
    items: ["PHP", "JavaScript (ES6+)", "Python", "HTML5/CSS3"],
  },
  {
    category: "Database & Backend",
    icon: "Database",
    items: ["MySQL", "PostgreSQL", "Laravel", "Node.js", "RESTful APIs"],
  },
  {
    category: "IT & Networking",
    icon: "Network",
    items: ["Windows", "Linux (Ubuntu)", "Basic Networking", "LAN/WAN"],
  },
  {
    category: "AI & Computer Vision",
    icon: "Brain",
    items: ["TensorFlow/Keras", "OpenCV", "CNN", "Face Recognition", "NLP"],
  },
  {
    category: "Tools",
    icon: "Wrench",
    items: ["Git", "GitHub", "GitLab"],
  },
];

// ─── Education ───────────────────────────────────────────────
export const education = {
  institution: "Politeknik Negeri Semarang",
  degree: "Associate Degree (D3) in Informatics Engineering",
  gpa: "3.77 / 4.00",
  period: "Sep 2023 — Sep 2026",
};

// ─── Languages ───────────────────────────────────────────────
export const languages = [
  { lang: "Indonesian", level: "Native" },
  { lang: "English", level: "TOEIC 750 (Working Proficiency)" },
];

// ─── Certifications ─────────────────────────────────────────
export interface Certification {
  name: string;
  issuer: string;
  date: string;
  score?: string;
  logo: string;
  thumbnail: string;
  pdfUrl?: string;
}

export const certifications: Certification[] = [
  {
    name: "TOEIC Listening & Reading",
    issuer: "ETS",
    date: "Nov 2025",
    score: "Score: 750",
    logo: "/assets/certs/logo-ets.png",
    thumbnail: "/assets/certs/toeic.jpg",
    pdfUrl: "/assets/certs/toeic.pdf",
  },
  {
    name: "Database Programming with SQL",
    issuer: "Oracle Academy",
    date: "Dec 2024",
    logo: "/assets/certs/logo-oracle.png",
    thumbnail: "/assets/certs/db-programming.jpg",
    pdfUrl: "/assets/certs/db-programming.pdf",
  },
  {
    name: "Database Design",
    issuer: "Oracle Academy",
    date: "Oct 2024",
    logo: "/assets/certs/logo-oracle.png",
    thumbnail: "/assets/certs/db-design.jpg",
    pdfUrl: "/assets/certs/db-design.pdf",
  },
  {
    name: "MikroTik Certified Network Associate (MTCNA)",
    issuer: "MikroTik",
    date: "Feb 2026",
    logo: "/assets/certs/logo-mikrotik.png",
    thumbnail: "/assets/certs/mtcna.jpg",
    pdfUrl: "/assets/certs/mtcna.pdf",
  },
];

// ─── About highlights ────────────────────────────────────────
export const highlights = [
  { label: "SQL & Databases", icon: "Database" },
  { label: "Troubleshooting", icon: "Bug" },
  { label: "Networking", icon: "Network" },
  { label: "IT Systems", icon: "Monitor" },
  { label: "Tech Adaptability", icon: "Lightbulb" },
];
