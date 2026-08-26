import neodetectImg from "@/assets/project-neodetect.jpg";
import gbvImg from "@/assets/project-gbv.jpg";
import medilinkImg from "@/assets/project-medilink.jpg";
import helloworldImg from "@/assets/project-helloworld.jpg";
import mentherImg from "@/assets/project-menther.jpg";
import dashboardImg from "@/assets/project-dashboard.jpg";
import certImg from "@/assets/certificate-placeholder.jpg";

/** Replace this file path with the real resume PDF in /public/resume/ */
export const RESUME_URL = "/resume/Prachi_madane_resume.pdf";

export const profile = {
  name: "Prachi Madane",
  tagline: "Full Stack Developer | MERN Stack | AI/ML Engineer | Data Analytics",
  intro:
    "Computer Engineering graduate passionate about building scalable full-stack applications, AI/ML solutions, and data-driven products. I enjoy transforming real-world problems into practical technology solutions using modern development and machine learning tools.",
  location: "Vasai, Palghar, Maharashtra, India",
  email: "prachimadane2004@gmail.com",
  phone: "+91 8669166390",
  github: "https://github.com/prachi-madane14",
  linkedin: "https://www.linkedin.com/in/prachi-madane-37734225b/",
  badges: ["MERN Stack", "AI/ML", "Data Analytics", "Generative AI", "Full Stack Development"],
};

export const aboutPoints = [
  {
    title: "Full Stack Engineering",
    text: "Builds MERN applications end to end — REST API development, authentication, and database management.",
  },
  {
    title: "AI / Machine Learning",
    text: "AI-powered applications using BERT, XGBoost and Random Forest, with model development and data preprocessing.",
  },
  {
    title: "Data Analytics",
    text: "Data analytics dashboards in Power BI, with cleaning, modeling and visualization to drive decisions.",
  },
  {
    title: "Always Learning",
    text: "Exploring emerging technologies including Generative AI, RAG, and Agentic AI.",
  },
];

export const education = [
  {
    school: "VidyaVardhini's College of Engineering and Technology",
    degree: "Bachelor of Engineering – Computer Engineering",
    period: "2022 – 2026",
    score: "CGPA: 7.76",
  },
  {
    school: "Annasaheb Vartak College, Vasai",
    degree: "HSC – Science (Computer Science)",
    period: "2020 – 2022",
    score: "82.33%",
  },
  {
    school: "Holy Family Convent High School, Vasai",
    degree: "SSC",
    period: "2019 – 2020",
    score: "90.80%",
  },
];

const dev = (slug: string, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-${variant}.svg`;

export type Skill = { name: string; logo?: string; note?: string };

export const skillGroups: { category: string; skills: Skill[] }[] = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", logo: dev("python") },
      { name: "SQL", logo: dev("azuresqldatabase") },
      { name: "JavaScript", logo: dev("javascript") },
    ],
  },

  {
    category: "Frontend",
    skills: [
      { name: "React.js", logo: dev("react") },
      { name: "HTML5", logo: dev("html5") },
      { name: "CSS3", logo: dev("css3") },
      { name: "Tailwind CSS", logo: dev("tailwindcss") },
    ],
  },

  {
    category: "Backend",
    skills: [
      { name: "Node.js", logo: dev("nodejs") },
      { name: "Express.js", logo: dev("express") },
      { name: "REST APIs", logo: "https://cdn.simpleicons.org/fastapi/E8E9F0" },
      { name: "JWT Authentication", logo: "https://cdn.simpleicons.org/jsonwebtokens/E8E9F0" },
      { name: "API Integration", logo: "https://cdn.simpleicons.org/postman/FF6C37" },
      { name: "JSON", logo: dev("json") },
    ],
  },

  {
    category: "Databases",
    skills: [
      { name: "MongoDB", logo: dev("mongodb") },
      { name: "MongoDB Atlas", logo: dev("mongodb") },
      { name: "MySQL", logo: dev("mysql") },
    ],
  },

  {
    category: "AI & Machine Learning",
    skills: [
      { name: "Scikit-learn", logo: dev("scikitlearn") },
      { name: "XGBoost", logo: "https://cdn.simpleicons.org/python/3776AB" },
      { name: "Random Forest", logo: "https://cdn.simpleicons.org/python/3776AB" },
      { name: "BERT", logo: "https://cdn.simpleicons.org/huggingface/FFD21E" },
      { name: "PyTorch", logo: dev("pytorch") },
      { name: "NumPy", logo: dev("numpy") },
      { name: "SciPy", logo: "https://cdn.simpleicons.org/scipy/8CAAE6" },
    ],
  },

  {
    category: "AI-Assisted Development",
    skills: [
      { name: "ChatGPT", logo: "https://cdn.simpleicons.org/openai/FFFFFF" },
      { name: "Claude", logo: "https://cdn.simpleicons.org/anthropic/FFFFFF" },
      { name: "Gemini", logo: "https://cdn.simpleicons.org/googlegemini/8BF5FA" },
    ],
  },

  {
    category: "Generative AI",
    skills: [
      {
        name: "LangChain",
        logo: "https://cdn.simpleicons.org/langchain/8BF5FA",
        note: "Learning",
      },
      {
        name: "RAG",
        logo: "https://cdn.simpleicons.org/openai/FFFFFF",
        note: "Learning",
      },
      {
        name: "Agentic AI",
        logo: "https://cdn.simpleicons.org/openai/FFFFFF",
        note: "Learning",
      },
    ],
  },

  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git", logo: dev("git") },
      { name: "GitHub", logo: "https://cdn.simpleicons.org/github/E8E9F0" },
      { name: "Postman", logo: dev("postman") },
      { name: "VS Code", logo: dev("vscode") },
      {
        name: "AWS",
        logo: dev("amazonwebservices", "original-wordmark"),
        note: "Basics",
      },
      { name: "Power BI", logo: "https://cdn.simpleicons.org/powerbi/F2C811" },
      { name: "Excel", logo: "https://cdn.simpleicons.org/microsoftexcel/217346" },
      { name: "Canva", logo: "https://cdn.simpleicons.org/canva/00C4CC" },
    ],
  },
];

export const experience = [
  {
    role: "Web Development Intern",
    company: "Elevate Labs",
    mode: "Virtual Internship",
    period: "September 2025 – November 2025",
    points: [
      "Built responsive websites",
      "Developed REST APIs",
      "Handled deployments",
      "Created a full-stack budget planner called MoneyMap",
      "Used React, Express, and MongoDB",
    ],
  },
  {
    role: "Data Analyst Intern",
    company: "Elevate Labs",
    mode: "Virtual Internship",
    period: "November 2025 – December 2025",
    points: [
      "Performed data cleaning",
      "Created visualizations",
      "Generated insights using Excel, Python, and SQL",
      "Built dashboards",
      "Analyzed datasets to support decision-making",
    ],
  },
];

export type Category = "Full Stack" | "AI/ML" | "Data Analytics";

export type Project = {
  id: string;
  title: string;
  categories: Category[];
  badge: string;
  role?: string;
  tool?: string;
  image: string;
  description: string;
  problem: string;
  solution: string;
  contribution: string;
  tech: string[];
  features: string[];
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    id: "neodetect",
    title: "NeoDetect – AI-Based Neonatal Pain Detection System",
    categories: ["AI/ML", "Full Stack"],
    badge: "AI/ML + Full Stack",
    role: "AI/ML + Full Stack Developer",
    image: neodetectImg,
    description:
      "Developed an AI-based neonatal pain detection system using physiological signals including HR, SpO₂, and RR. Processed biomedical signals, performed feature engineering, and prepared datasets for machine learning. Trained and evaluated XGBoost and Random Forest models to classify neonatal pain levels. Developed a MERN-based web application with secure authentication, real-time prediction display, confidence score visualization, and centralized analysis-result management.",
    problem:
      "Neonates cannot verbalise pain, and manual observation-based scoring is subjective, intermittent and often delayed in busy neonatal care units.",
    solution:
      "A multimodal machine learning pipeline that reads physiological signals (HR, SpO₂, RR), engineers clinically meaningful features and classifies pain levels in real time, surfaced through a secure MERN dashboard for clinicians.",
    contribution:
      "Owned biomedical data preprocessing and feature engineering, trained and evaluated the XGBoost and Random Forest classifiers, and built the full MERN application including authentication, prediction APIs and confidence-score visualisation.",
    tech: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Python",
      "Scikit-learn",
      "XGBoost",
      "Random Forest",
      "NumPy",
      "SciPy",
    ],
    features: [
      "Biomedical data preprocessing",
      "Feature engineering",
      "ML model training",
      "XGBoost prediction",
      "Random Forest prediction",
      "Confidence score visualization",
      "Secure authentication",
      "Real-time prediction display",
      "Centralized analysis management",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/prachi-madane14/MAJOR-PROJECT-NeoDetect" },
      { label: "IEEE Publication", href: "https://ieeexplore.ieee.org/document/11559529" },
    ],
  },
  {
    id: "gbv-detection",
    title: "Gender-Based Violence Detection & Sentiment Analysis",
    categories: ["AI/ML"],
    badge: "AI/ML",
    role: "AI/ML Developer",
    image: gbvImg,
    description:
      "Developed an AI-powered web application using fine-tuned BERT models to classify text as GBV-specific, offensive, or non-violent. Implemented multilingual sentiment analysis and integrated voice input, Twitter data analysis, and automated PDF report generation. Implemented authentication and secure data storage using Supabase.",
    problem:
      "Online gender-based violence is hard to detect at scale, especially across multiple languages and informal, code-mixed text.",
    solution:
      "Fine-tuned BERT / mBERT classifiers wrapped in a Streamlit application with multilingual sentiment analysis, voice input, social data analysis and automated reporting.",
    contribution:
      "Prepared and labelled datasets, fine-tuned the transformer models, built the Streamlit interface, and integrated Supabase authentication plus secure storage of analysis history.",
    tech: [
      "Python",
      "Streamlit",
      "PyTorch",
      "Transformers",
      "BERT / mBERT",
      "Supabase",
      "Speech Recognition",
    ],
    features: [
      "BERT-based classification",
      "Multilingual sentiment analysis",
      "Voice input",
      "Twitter data analysis",
      "Automated PDF reports",
      "Secure authentication",
      "Supabase data storage",
    ],
    links: [{ label: "GitHub", href: "https://github.com/prachi-madane14/gbv-classifier" }],
  },
  {
    id: "medilink",
    title: "MediLink – Medical Appointment and Health Record System",
    categories: ["Full Stack", "AI/ML"],
    badge: "Full Stack + AI",
    role: "Full-Stack Developer",
    image: medilinkImg,
    description:
      "Developed a full-stack healthcare platform with role-based doctor and patient dashboards, appointment scheduling, digital prescriptions, and medical record management. Developed 10+ REST APIs and integrated OCR using Tesseract.js to digitize prescriptions and medical reports. Implemented an AI-powered chatbot using Gemini API and created health analytics dashboards.",
    problem:
      "Patient records and prescriptions are scattered across paper documents, making appointments, follow-ups and history tracking inefficient.",
    solution:
      "A unified healthcare platform with role-based dashboards, digital prescriptions, OCR-based document digitisation and an AI assistant for health queries.",
    contribution:
      "Designed the data model, built 10+ REST APIs with JWT auth, implemented Tesseract.js OCR digitisation, integrated the Gemini-powered chatbot and built the analytics dashboards.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "JWT",
      "Tesseract.js",
      "Postman",
      "Gemini API",
    ],
    features: [
      "Doctor dashboard",
      "Patient dashboard",
      "Appointment scheduling",
      "Digital prescriptions",
      "Medical records",
      "OCR",
      "AI chatbot",
      "Health analytics",
      "JWT authentication",
      "REST APIs",
    ],
    links: [
      { label: "Live Demo", href: " https://medi-link-sable.vercel.app" },
      { label: "GitHub", href: "https://github.com/prachi-madane14/MediLink" },
    ],
  },
  {
    id: "GlobaLearn",
    title: "GlobaLearn — World Culture & Language Learning Platform",
    categories: ["Full Stack"],
    badge: "Full Stack",
    role: "Full-Stack Developer",
    image: helloworldImg,
    description:
      "Developed an interactive language learning platform featuring student and teacher dashboards, quiz management, progress tracking, and role-based access control. Implemented gamification features including XP, badges, and leaderboards. Built secure REST APIs and JWT-based authentication for scalable content management and user interactions.",
    problem:
      "Language learners lose motivation without structured progress feedback, while teachers lack a simple way to manage content and track outcomes.",
    solution:
      "A gamified learning platform pairing teacher content management with student progress tracking, XP, badges and leaderboards.",
    contribution:
      "Built both dashboards, the quiz engine, the gamification logic and the secure REST API layer with role-based JWT authentication.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "REST APIs"],
    features: [
      "Student dashboard",
      "Teacher dashboard",
      "Quiz management",
      "Progress tracking",
      "XP system",
      "Badges",
      "Leaderboards",
      "Role-based access",
      "JWT authentication",
    ],
    links: [{ label: "GitHub", href: "https://github.com/prachi-madane14/GlobaLearn" }],
  },
  {
    id: "menther",
    title: "MentHER – Women Mentorship Platform",
    categories: ["Full Stack"],
    badge: "Full Stack",
    role: "Full-Stack Developer",
    image: mentherImg,
    description:
      "Developed a full-stack mentorship platform connecting women in technology with mentors through secure role-based authentication and personalized dashboards. Implemented real-time communication using Socket.io and AI-powered mentorship suggestions. Built responsive interfaces and REST APIs for mentor discovery, profile management, and community interactions.",
    problem:
      "Women entering technology often lack access to relevant mentors and structured, ongoing guidance.",
    solution:
      "A mentorship platform with mentor discovery, personalised dashboards, real-time chat and AI-assisted mentor matching.",
    contribution:
      "Implemented role-based authentication, mentor discovery and profile APIs, Socket.io real-time messaging and the responsive Tailwind interface.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Socket.io", "Tailwind CSS"],
    features: [
      "Mentor discovery",
      "Mentee dashboards",
      "Mentor dashboards",
      "Role-based authentication",
      "Real-time communication",
      "AI mentorship suggestions",
      "Profile management",
      "REST APIs",
    ],
    links: [{ label: "GitHub", href: "https://github.com/shrutipachpor810/MentHER" }],
  },
  {
    id: "ecommerce-dashboard",
    title: "E-Commerce Sales Dashboard",
    categories: ["Data Analytics"],
    badge: "Data Analytics",
    tool: "Power BI",
    image: dashboardImg,
    description:
      "Developed an interactive Power BI dashboard to analyze sales, profit, quantity, and customer trends. Created KPIs, DAX measures, slicers, and drill-down reports for dynamic business insights. Performed data cleaning, data modeling, and visualization to identify key sales patterns and top-performing categories.",
    problem:
      "Raw e-commerce transaction data offered no clear view of profitability, category performance or customer buying trends.",
    solution:
      "A cleaned and modelled Power BI dataset with KPI cards, DAX measures, slicers and drill-down reports for self-service business insight.",
    contribution:
      "Handled data cleaning and modelling, authored the DAX measures and designed the full interactive report layout.",
    tech: ["Power BI", "DAX", "Data Modeling", "Data Visualization"],
    features: [
      "Sales KPIs",
      "Profit analysis",
      "Quantity analysis",
      "Customer trends",
      "DAX measures",
      "Interactive slicers",
      "Drill-down reports",
      "Data modeling",
      "Business insights",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/prachi-madane14/POWERBI-ECOMMERCE-SALES-DASHBOARD",
      },
    ],
  },
];

export const research = {
  title: "NeoDetect: Real-Time Multimodal Machine Learning for Neonatal Pain Detection",
  venue:
    "Proceedings of the 4th International Conference on Self Sustainable Artificial Intelligence Systems (ICSSSAIS 2026), IEEE",
  points: [
    "Co-authored and published an IEEE conference paper on real-time neonatal pain detection using multimodal machine learning.",
    "Developed and evaluated XGBoost and Random Forest models for neonatal pain classification using physiological signals.",
    "Performed data preprocessing, feature engineering, model evaluation, and interpretation of biomedical datasets.",
  ],
  link: "https://ieeexplore.ieee.org/document/11559529",
};

/** Swap `image` with a real certificate scan to update a card. */
export const certifications = [
  {
    title: "SQL and Relational Databases 101",
    issuer: "IBM Developer Skills Network",
    description:
      "Relational database fundamentals, SQL querying, joins and data manipulation using hands-on labs.",
    certificateUrl:
      "https://github.com/prachi-madane14/MY-certificates/blob/main/IBM%20SQLCertificate%20_%20Cognitive%20Class.pdf",
  },
  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte",
    description:
      "Practical data analytics simulation covering data cleaning, forensic analysis and business insight reporting.",
    certificateUrl:
      "https://github.com/prachi-madane14/MY-certificates/blob/main/Deloitte%20certificate.pdf",
  },
  {
    title: "MERN Stack Development Certification Program",
    issuer: "EDBA Academy",
    description:
      "End-to-end MERN stack development: React interfaces, Express APIs, MongoDB modelling and authentication.",
    certificateUrl:
      "https://github.com/prachi-madane14/MY-certificates/blob/main/edba_academy_certificate.pdf",
  },
  {
    title: "Certificate Course on Data Analytics",
    issuer: "IBM SkillsBuild in Advanced IT Skills",
    description:
      "Data analytics fundamentals and practical skills completed through the IBM SkillsBuild Advanced IT Skills program, with a Grade A+.",
    certificateUrl:
      "https://github.com/prachi-madane14/MY-certificates/blob/main/IBM%20certificate.png",
  },
  {
    title: "Data Analyst",
    issuer: "OneRoadmap",
    description:
      "Successfully passed the OneRoadmap Skill Certification Test for Data Analyst.",
    certificateUrl:
      "https://oneroadmap.io/skills/data-analyst/certificate/CERT-E7C83A89",
  },
  {
    title: "Excel",
    issuer: "OneRoadmap",
    description:
      "Successfully passed the OneRoadmap Skill Certification Test for Excel.",
    certificateUrl:
      "https://oneroadmap.io/skills/excel/certificate/CERT-FBE8B56C",
  },
];

export const leadership = {
  org: "Abacus – Product Showcase Event Committee",
  about:
    "ABACUS is a technical product showcase event where products from various companies are presented and explained by students to other students, helping bridge theoretical learning with real-world technologies.",
  roles: [
    {
      role: "Organizing Head",
      period: "2025 – 2026",
      points: [
        "Led overall event coordination",
        "Managed teams",
        "Supervised planning",
        "Managed event execution",
        "Ensured smooth event operations",
      ],
    },
    {
      role: "Deputy Creative Head",
      period: "2024 – 2025",
      points: [
        "Contributed to creative direction",
        "Designed posters",
        "Created digital promotions",
        "Worked on event branding",
        "Increased student engagement",
      ],
    },
  ],
};

export const activities = [
    {
    title: "Volunteer at NSS Blood Camp",
    certificateUrl: "https://github.com/prachi-madane14/certificates/blob/main/nss-blood-camp.pdf",
  },
  {
    title: "Participated in VCET Product Showcase – ABACUS'24",
    certificateUrl: "https://github.com/prachi-madane14/MY-certificates/blob/main/Participation%20Certificate/ABACUS'24.pdf",
  },
  {
    title: "Presented Project at Vidyavardhini's National Level Project Showcase (VNPS'25)",
    certificateUrl: "https://github.com/prachi-madane14/MY-certificates/blob/main/Participation%20Certificate/VNPS'25.jpg",
  },
  {
    title: "Presented Project Research Paper at OSCILLATION'25",
    certificateUrl: "https://github.com/prachi-madane14/MY-certificates/blob/main/Participation%20Certificate/Oscillation'25.jpg",
  },
  {
    title: "Presented Project at Vidyavardhini's National Level Project Showcase (VNPS'26)",
    certificateUrl: "https://github.com/prachi-madane14/MY-certificates/blob/main/Participation%20Certificate/VNPS'26.jpeg",
  },
  {
    title: "Presented Project Research Paper at OSCILLATION'26",
    certificateUrl: "https://github.com/prachi-madane14/MY-certificates/blob/main/Participation%20Certificate/OSCILLATION'26.jpeg",
  },

];

export const seminars = [
  {
    title: "SDP for DSA in Java",
    host: "Vidyavardhini's College of Engineering and Technology",
    date: "1 July – 5 July 2024",
  },
  {
    title: "SDP Java",
    host: "Vidyavardhini's College of Engineering and Technology",
    date: "July 2023",
  },
  {
    title: "Flutter Workshop",
    host: "Vidyavardhini's College of Engineering and Technology",
    date: "21 March 2024",
  },
  { title: "Microprocessor Session", host: "By Ashok Dhale", date: "23 March 2024" },
];

export const languages = [
  { name: "English", level: "Professional" },
  { name: "Hindi", level: "Professional" },
  { name: "Marathi", level: "Native" },
];

export const softSkills = [
  "Strong Attention to Detail",
  "Quick Learner",
  "Positive Attitude",
  "Passionate & Dedicated",
  "Time Management",
  "Technical Documentation",
  "Effective Communication",
  "Team Collaboration",
  "Adaptability",
  "Agile Development",
  "Problem Solving",
  "Leadership",
  "Creative Thinking",
];

export const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Education", id: "education" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Research", id: "research" },
  { label: "Certifications", id: "certifications" },
  { label: "Leadership", id: "leadership" },
  { label: "Activities", id: "activities" },
  { label: "Contact", id: "contact" },
];
