export const PORTFOLIO_DATA = {
  personal: {
    name: "Anurag Choubey",
    title: "Software Engineer — Python, AI & LLM Automation",
    taglines: [
      "AI & LLM Automation Engineer",
      "Python / FastAPI Backend Developer",
      "Agentic AI Systems Builder",
      "GenAI Problem Solver",
    ],
    bio: "AI-focused software engineer specializing in Python, FastAPI development, and Oracle Fusion (ERP/HCM/SCM) automation. I build LLM-integrated automation platforms, RAG pipelines, and multi-agent orchestration systems — work that has cut QA effort and testing costs by up to 45%. Oracle Cloud certified in AI, Generative AI, and Data Science.",
    email: "anurag.choubey03@gmail.com",
    phone: "+91 9977867818",
    photo: "photo.jpg",
    resume: "resume.pdf",

    contact: {
      email: "anurag.choubey03@gmail.com",
      phone: "+91 9977867818",
      whatsapp: "https://wa.me/919977867818",
      location: "Pune, Maharashtra, India",
      maplink: "https://maps.google.com/?q=Pune,Maharashtra,India",
      available: true,
    },

    links: {
      github: "https://github.com/Anurag99778",
      linkedin: "https://www.linkedin.com/in/anurag-choubey-957b8a21b",
      leetcode: "https://leetcode.com/u/Anurag_Choubey/",
      email: "mailto:anurag.choubey03@gmail.com",
      whatsapp: "https://wa.me/919977867818",
    },
  },

  experience: [
    {
      role: "Trainee Programmer",
      company: "Yash Technologies",
      location: "Pune, India",
      period: "Jan 2025 – Present",
      current: true,
      color: "#06b6d4",
      points: [
        "Architected and led an AI-powered Oracle Fusion (ERP/HCM/SCM) test automation platform (Playwright + LLM agents), driving end-to-end regression testing across quarterly Fusion updates (26A/26B) and cutting manual QA effort & testing costs by ~45%.",
        "Designed and deployed autonomous AI agents in Oracle AI Agent Studio, including an Order-to-Cash (O2C) multi-agent orchestration architecture (supervisor + worker agents for order orchestration, inventory, compliance, shipping), extending into SCM and HCM use cases.",
        "Built a RAG-based policy document chatbot (LangChain + OpenAI API) achieving 90% retrieval accuracy across large Oracle documentation repositories.",
        "Redesigned core automation services from Flask to FastAPI — modular service layers, async request handling, queue-based task processing — integrating LangChain/LangGraph with OpenAI and Gemini APIs into scalable REST backends.",
        "Delivered Oracle Fusion technical support across two client engagements in the Middle East; built OTBI and BI Publisher (BIP) reports and Oracle SQL/PL-SQL procedures to automate business logic.",
      ],
    },
    {
      role: "Software Engineer Intern",
      company: "Graymatics",
      location: "Singapore (Remote)",
      period: "May 2024 – Jan 2025",
      current: false,
      color: "#8b5cf6",
      points: [
        "Developed a Python-based video monitoring and analytics product, integrating YOLOv8 object-detection models with DeepStream and Triton Inference Server for real-time crowd and video analytics pipelines.",
        "Built backend applications and REST APIs (Express.js, Flask); containerized and deployed multitenant services with Docker and Nginx reverse proxying for scalable, production-grade delivery.",
        "Deployed and managed workloads on AWS (S3, EC2, Load Balancers) and designed asynchronous processing with Amazon SQS for decoupled, fault-tolerant task queues.",
        "Designed a dashboard for the Gen-AI crowd-control application that helped secure a $2,000 company grant; built the product website UX from scratch in Figma and React.js.",
      ],
    },
  ],

  projects: [
    {
      name: "Skill-Sense",
      subtitle: "Employee Skills Management Platform",
      description:
        "Rebuilt the platform's core service on FastAPI with a clean, modular system design — separated API, service, and data-access layers for maintainability and testability. Implemented an async, Redis-backed queue to offload report generation and notifications, and shipped an LLM-powered support assistant with RBAC, auth, and audit-trail logging.",
      tech: ["FastAPI", "SQLAlchemy", "MySQL", "Bootstrap 5", "Redis Queue", "LLM Assistant", "RBAC"],
      github: "https://github.com/Anurag99778",
      live: "",
      gradient: "linear-gradient(135deg, #06b6d4, #3b82f6)",
      featured: true,
    },
    {
      name: "Study-Verse",
      subtitle: "Ed-Tech Learning Platform",
      description:
        "Full MERN-stack ed-tech platform with REST APIs for course management, authentication, and content delivery, plus secure Razorpay payment integration for buying and selling courses.",
      tech: ["React.js", "Node.js", "MongoDB", "Express.js", "Razorpay", "JWT"],
      github: "https://github.com/Anurag99778",
      live: "",
      gradient: "linear-gradient(135deg, #8b5cf6, #ec4899)",
      featured: true,
    },
  ],

  skills: {
    "AI / LLM": {
      color: "#f59e0b",
      items: ["OpenAI API", "Gemini API", "Claude API", "LangChain", "LangGraph", "RAG Pipelines", "Multi-Agent Systems"],
    },
    "Oracle Fusion": {
      color: "#ef4444",
      items: ["Oracle Fusion ERP/HCM/SCM", "Oracle AI Agent Studio", "OTBI", "BI Publisher (BIP)", "Oracle SQL", "PL/SQL"],
    },
    "Python / Web": {
      color: "#06b6d4",
      items: ["FastAPI", "NumPy", "Pandas", "SQLAlchemy", "REST APIs", "React.js", "Node.js", "Express.js", "Tailwind CSS", "Bootstrap"],
    },
    "Languages": {
      color: "#22c55e",
      items: ["Python", "SQL", "PL/SQL", "JavaScript", "Java", "C++"],
    },
    "Databases": {
      color: "#10b981",
      items: ["Oracle", "MySQL", "SQLite", "MongoDB"],
    },
    "Cloud & DevOps": {
      color: "#3b82f6",
      items: ["Docker", "Nginx", "AWS EC2", "AWS S3", "Load Balancers", "Amazon SQS", "CI/CD"],
    },
    "Tools": {
      color: "#64748b",
      items: ["Playwright", "Git", "GitHub", "Postman", "Figma", "Linux", "Windows"],
    },
  },

  education: [
    {
      degree: "B.Tech — Information Technology",
      school: "SGSITS, Indore",
      board: "",
      score: "CGPA: 8.10 / 10",
      year: "2021 – 2025",
    },
    {
      degree: "Class XII",
      school: "Kendriya Vidyalaya GCF 02",
      board: "CBSE Board",
      score: "84%",
      year: "2021",
    },
    {
      degree: "Class X",
      school: "Madhav Vidyalaya Mandir",
      board: "CBSE Board",
      score: "88%",
      year: "2019",
    },
  ],
};
