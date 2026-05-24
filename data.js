const PORTFOLIO_DATA = {

  personal: {
    name: "Anurag Choubey",
    title: "Full-Stack Developer & AI Engineer",
    taglines: ["Full-Stack Developer", "AI Engineer", "GenAI Builder",
               "LLM Integration Expert", "Problem Solver"],
    bio: "B.Tech IT graduate from SGSITS Indore. Currently working at Yash Technologies, Pune. I build intelligent systems, enterprise backends, and AI-powered products that solve real problems — from RAG chatbots to Oracle ERP automation.",
    email: "anurag.choubey03@gmail.com",
    phone: "+91 9977867818",
    photo: "photo.jpg",
    resume: "resume.pdf",

    contact: {
      email:    "anurag.choubey03@gmail.com",
      phone:    "+91 9977867818",
      whatsapp: "https://wa.me/919977867818",
      location: "Pune, Maharashtra, India",
      maplink:  "https://maps.google.com/?q=Pune,Maharashtra,India",
      available: true,
    },

    links: {
      github:   "https://github.com/Anurag99778",
      linkedin: "https://www.linkedin.com/in/anurag-choubey-957b8a21b",
      leetcode: "https://leetcode.com/u/Anurag_Choubey/",
      email:    "mailto:anurag.choubey03@gmail.com",
      whatsapp: "https://wa.me/919977867818",
    }
  },

  experience: [
    {
      role: "Trainee Programmer — Full Time",
      company: "Yash Technologies",
      location: "Pune, India",
      period: "Jan 2025 – Present",
      current: true,
      color: "#06b6d4",
      points: [
        "Architected an AI-powered test automation framework for Oracle Fusion ERP using Playwright + LLM agents — autonomously generating and executing test cases, reducing QA costs dramatically",
        "Built production RESTful APIs and backend services using Flask and Python for enterprise-grade systems",
        "Integrated OpenAI and Gemini APIs to build GenAI-powered automation and decision-support solutions",
        "Developed a RAG-based policy document chatbot using LangChain + OpenAI API achieving 90% answer retrieval accuracy",
        "Developed and optimized Oracle PL/SQL procedures and triggers to automate complex backend business logic"
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Graymatics",
      location: "Singapore (Remote)",
      period: "May 2024 – Jan 2025",
      current: false,
      color: "#8b5cf6",
      points: [
        "Built backend applications and RESTful APIs using Express.js and Flask",
        "Deployed multitenant applications using Docker for containerization and scalability",
        "Designed and built complete product website UX from scratch using Figma and React.js",
        "Led Gen-AI crowd control app dashboard design — directly helped secure a $2000 grant",
        "Collaborated with international clients to gather requirements and deliver custom solutions"
      ]
    }
  ],

  projects: [
    {
      name: "Skill-Sense",
      subtitle: "Employee Skills Management Platform",
      description: "Enterprise Flask web app to track employee skills, training, and org structure. Features an AI chat assistant powered by LLM APIs, skills gap analysis reports, role-based access control, and full audit trail logging.",
      tech: ["Flask", "SQLAlchemy", "MySQL", "Bootstrap 5", "OpenAI API", "Python", "RBAC"],
      github: "https://github.com/Anurag99778",
      live: "",
      gradient: "linear-gradient(135deg, #06b6d4, #3b82f6)",
      featured: true
    },
    {
      name: "Study-Verse",
      subtitle: "Ed-Tech Learning Platform",
      description: "Full-featured MERN stack ed-tech platform with course management, user authentication, content delivery pipeline, and secure Razorpay payment gateway for buying and selling courses.",
      tech: ["React.js", "Node.js", "MongoDB", "Express.js", "Razorpay", "JWT"],
      github: "https://github.com/Anurag99778",
      live: "",
      gradient: "linear-gradient(135deg, #8b5cf6, #ec4899)",
      featured: true
    }
    // ✏️ TO ADD A NEW PROJECT: Copy one block above, paste here, and edit the fields
  ],

  skills: {
    "Languages":      { color: "#06b6d4", items: ["Python", "JavaScript", "SQL", "PL/SQL", "Java", "C++"] },
    "Frameworks":     { color: "#8b5cf6", items: ["Flask", "React.js", "Node.js", "Express.js", "LangChain"] },
    "AI & GenAI":     { color: "#f59e0b", items: ["OpenAI API", "Gemini API", "Claude API", "RAG", "LLM Agents", "Playwright AI"] },
    "Databases":      { color: "#10b981", items: ["MySQL", "MongoDB", "SQLite", "Oracle DB"] },
    "Cloud & DevOps": { color: "#ef4444", items: ["Docker", "AWS Lambda", "EC2", "S3", "API Gateway", "GitHub CI/CD"] },
    "Tools":          { color: "#64748b", items: ["Git", "Postman", "Figma", "Linux", "VS Code"] }
  },

  achievements: [
    { icon: "🎯", stat: "Top 5%",  label: "JEE Mains",       sub: "Among 10 lakh+ candidates nationwide" },
    { icon: "🏆", stat: "Top 20",  label: "Nomura KakushIN",  sub: "Finalist across all India — 8.0 edition" },
    { icon: "💻", stat: "500+",    label: "Problems Solved",  sub: "LeetCode & GeeksforGeeks combined" },
    { icon: "🎖️", stat: "SSB",    label: "Armed Forces",     sub: "Interview Recommended candidate" },
    { icon: "☁️", stat: "3x OCI", label: "Oracle Certified", sub: "AI Foundations · GenAI Pro · Data Science" },
    { icon: "📊", stat: "8.10",   label: "CGPA",             sub: "B.Tech IT — SGSITS Indore" }
    // ✏️ ADD MORE ACHIEVEMENTS HERE
  ],

  education: [
    {
      degree: "B.Tech — Information Technology",
      school: "SGSITS, Indore",
      board: "",
      score: "CGPA: 8.10 / 10",
      year: "2021 – 2025"
    },
    {
      degree: "Class 12th",
      school: "Kendriya Vidyalaya GCF 02",
      board: "CBSE Board",
      score: "84%",
      year: "2021"
    },
    {
      degree: "Class 10th",
      school: "Maharishi Vidya Mandir",
      board: "CBSE Board",
      score: "88%",
      year: "2019"
    }
  ]

};
