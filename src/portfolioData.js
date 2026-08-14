// Personal and Contact details
export const personalData = {
  name: 'Suraj Dantarao',
  role: 'Full Stack Developer | AI/ML Enthusiast',
  subtitle: 'B.Tech Computer Technology Student | Full Stack Developer | AI/ML Enthusiast',
  description: 'Building practical web applications, AI-powered systems, and automation solutions with modern technologies.',
  location: 'Pune, Maharashtra, India',
  email: 'surajdantrao0777@gmail.com',
  github: 'https://github.com/surajdantarao',
  linkedin: 'https://linkedin.com/in/suraj-dantarao',
  resumePath: '/resume.pdf'
}

// Categorized Technical Skills
export const skillsData = [
  {
    category: 'Frontend',
    classId: 'frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Angular']
  },
  {
    category: 'Backend',
    classId: 'backend',
    skills: ['Python', 'Flask', 'Java', 'Node.js', 'Express.js']
  },
  {
    category: 'Databases',
    classId: 'database',
    skills: ['MySQL', 'SQLite', 'MongoDB', 'SQLAlchemy']
  },
  {
    category: 'AI / ML',
    classId: 'ai-ml',
    skills: [
      'Python',
      'Machine Learning',
      'Deep Learning',
      'TensorFlow',
      'PyTorch',
      'OpenCV',
      'Ollama',
      'LLM integration'
    ]
  },
  {
    category: 'Cloud / DevOps',
    classId: 'tools',
    skills: ['Git', 'GitHub', 'AWS basics', 'REST APIs']
  }
]

// Professional Timeline (Internship / OJT)
export const experienceData = [
  {
    company: 'Whitecode Technologies / Whitecode AI',
    title: 'OJT / Internship',
    duration: 'July 07, 2026 – Present (Ongoing)',
    focusPoints: [
      'AI/ML applications configuration and model interactions',
      'Local LLM integrations utilizing Ollama offline tools',
      'Agent automation scripting using OpenClaw wrappers',
      'AI Mail Agent development including email summarization pipelines',
      'React interface building for agent management',
      'FastAPI server setup for routing automated tasks',
      'Google API integrations (Gmail, Sheets API, Drive API)',
      'Development workflow automations'
    ]
  }
]

export const projectsData = [
  {
    id: 'mailAgent',
    name: 'AI Mail Agent',
    description: 'An AI-powered mail assistant that can analyse and summarize emails, generate replies, detect spam, and automate email-related workflows.',
    technologies: ['Python', 'FastAPI', 'React', 'Ollama', 'LLMs', 'Google APIs'],
    features: [
      'Automatic email parsing and quick summarization',
      'AI-generated draft responses and reply outlines',
      'Classifications for spam and message filtering',
      'Integrations with Google Sheets/Drive and Ollama local LLMs'
    ],
    isFeatured: true,
    github: 'https://github.com/surajdantarao/AI-Mail-agent',
    demo: ''
  },
  {
    id: 'gymSystem',
    name: 'MK27 Gym Management System',
    description: 'A MERN-stack gym management system for managing gym members, registration/login, membership plans, fees, joining dates, expiry dates, and member status.',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT', 'bcrypt'],
    features: [
      'Member registration and authentication (JWT, bcrypt)',
      'Member plans management, active/inactive tracking',
      'Fee logs tracking and billing history ledger',
      'REST API design for integration options'
    ],
    isFeatured: false,
    github: 'https://github.com/surajdantarao/MK27-GYM',
    demo: ''
  },
  {
    id: 'guestLecture',
    name: 'Guest Lecture Management System',
    description: 'A scheduling and coordinator dashboard designed to manage guest speaker events, track lecture dates, store lecturer profiles, and archive feedback logs.',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    features: [
      'Lecturer directory & profile management',
      'Session planner & event scheduling calendar',
      'Feedback logs tracking and reports capture'
    ],
    isFeatured: false,
    github: 'https://github.com/surajdantarao/guest-leacture',
    demo: ''
  },
  {
    id: 'qrStore',
    name: 'QR Store',
    description: 'A lightweight and convenient storefront utility leveraging QR code patterns to represent product item listings and facilitate mobile purchase lookups.',
    technologies: ['React', 'HTML', 'CSS', 'QR Integration', 'LocalStorage'],
    features: [
      'Dynamic QR code scanner and barcode cards generator',
      'Product storage and checkout cart caching',
      'Clean interactive frontend layout'
    ],
    isFeatured: false,
    github: 'https://github.com/surajdantarao/qr-store',
    demo: ''
  }
]

// Educational Timeline
export const educationData = [
  {
    degree: 'B.Tech in Computer Technology',
    institution: 'Ratan Tata Maharashtra State Skills University (RTMSSU)',
    location: 'Mumbai / Pune, India',
    duration: 'Pursuing'
  },
  {
    degree: 'Diploma in Computer Engineering',
    institution: 'Zeal Polytechnic College',
    location: 'Pune, Maharashtra, India',
    duration: 'Completed'
  }
]
