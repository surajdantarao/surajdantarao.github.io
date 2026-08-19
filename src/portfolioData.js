// Personal and Contact details for Suraj Dantarao
export const personalData = {
  name: 'Suraj Dantarao',
  role: 'Aspiring AI & Full Stack Developer',
  subtitle: 'B.Tech Computer Technology | Aspiring AI & Full Stack Developer',
  location: 'Pune, Maharashtra, India',
  phone: '+91 8767753086',
  email: 'surajdantrao0777@gmail.com',
  github: 'https://github.com/surajdantarao',
  linkedin: 'https://linkedin.com/in/suraj-dantarao-b1b28b374',
  portfolio: 'https://surajdantarao.github.io',
  resumePath: '/resume.pdf',
  bioParagraphs: [
    'I am an Aspiring AI and Full Stack Developer dedicated to building intelligent, high-impact web applications. Drawing on my B.Tech studies in Computer Technology, I combine robust backend systems (Flask, FastAPI, Node.js) with machine learning pipelines to solve real-world automation challenges.',
    'I have engineered end-to-end solutions including an AI Mail Agent that automates email processing using local LLMs (Ollama) and Google APIs, a Spam Detection System that achieves a ~97% accuracy rate using NLP preprocessing and Naive Bayes, and a full-stack MERN Gym Management System that cuts billing query times by 40%.',
    'I am passionate about local agent automation, NLP, and model optimization. I thrive in developer environments where I can leverage machine learning and full-stack software development to build production-grade prototypes that drive operational efficiency.'
  ]
}

// Categorized Technical Skills
export const skillsData = [
  {
    category: 'Programming',
    classId: 'languages',
    skills: ['Python', 'JavaScript', 'Java', 'C / C++', 'SQL', 'HTML5', 'CSS3']
  },
  {
    category: 'Machine Learning & AI',
    classId: 'ai-ml',
    skills: ['Scikit-learn', 'NLP', 'TF-IDF', 'Naive Bayes', 'Deep Learning', 'TensorFlow', 'Ollama', 'LLM Integration']
  },
  {
    category: 'Web & Frameworks',
    classId: 'frontend',
    skills: ['Flask', 'React.js', 'FastAPI', 'Node.js', 'Express.js', 'RESTful APIs', 'Bootstrap']
  },
  {
    category: 'Databases',
    classId: 'databases',
    skills: ['MongoDB', 'MySQL', 'SQLite', 'SQLAlchemy']
  },
  {
    category: 'Tools & Practices',
    classId: 'tools',
    skills: ['Git', 'GitHub', 'Postman', 'Vite', 'npm', 'Google APIs (Gmail, Sheets, Drive)']
  }
]

// Professional Experience Timeline
export const experienceData = [
  {
    company: 'Whitecode Technologies / Whitecode AI',
    title: 'OJT / AI Software Engineering Intern',
    duration: 'July 2026 – Present',
    location: 'Pune, MH',
    focusPoints: [
      'Configured AI/ML applications and local LLM model interactions utilizing Ollama offline tools.',
      'Built agent automation workflows with OpenClaw wrappers and FastAPI servers for task routing.',
      'Developed AI Mail Agent pipelines including email parsing, summarization, and Google API integrations.'
    ]
  },
  {
    company: 'Esbee Company',
    title: 'Quality Line Operator',
    duration: 'Jul 2023 – Apr 2024',
    location: 'Pune, MH',
    focusPoints: [
      'Conducted quality inspections and recorded defect data across assembly lines to maintain product compliance.',
      'Identified recurring issues and reported process improvements to optimize delivery.'
    ]
  },
  {
    company: 'Delta Fire Company',
    title: 'Maintenance Technician',
    duration: 'Jan 2022 – Jun 2022',
    location: 'Pune, MH',
    focusPoints: [
      'Maintained service logs and inspection data for fire safety systems using preventive maintenance checklists.',
      'Identified faults using diagnostic procedures and collaborated on-site.'
    ]
  }
]

// Projects Showcase
export const projectsData = [
  {
    id: 'mailAgent',
    name: 'AI Mail Agent',
    description: 'An AI-powered mail assistant that parses email streams, performs automatic summarization, and generates draft responses using Ollama local LLMs.',
    technologies: ['Python', 'FastAPI', 'React.js', 'Ollama', 'Local LLMs', 'Google APIs'],
    image: '/mail_agent.jpg',
    features: [
      'Engineered an offline-capable AI mail assistant using FastAPI and Ollama local LLMs.',
      'Integrated Google APIs (Gmail, Sheets, Drive) for zero-data-leakage triage.'
    ],
    github: 'https://github.com/surajdantarao/AI-Mail-agent',
    demo: ''
  },
  {
    id: 'gymSystem',
    name: 'MK27 Gym Management System',
    description: 'A full-stack MERN web application for managing gym member lifecycle, plan subscriptions, billing ledgers, joining dates, and membership status tracking.',
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'bcrypt'],
    image: '/gym_system.jpg',
    features: [
      'Built a full-stack MERN web application for managing gym member lifecycle, plan subscriptions, billing ledgers, joining dates, and membership status tracking.',
      'Implemented secure user authentication and authorization using JWT and bcrypt, enforcing strict role-based access control across admin and member portals.',
      'Designed RESTful API endpoints and optimized MongoDB aggregation pipelines, cutting financial record query response time by 40%.'
    ],
    github: 'https://github.com/surajdantarao/MK27-GYM',
    demo: 'https://mk-27-gym.vercel.app/'
  },
  {
    id: 'spamDetection',
    name: 'Spam Detection System',
    description: 'An ML-based web app to classify SMS messages as spam/ham using Naive Bayes with TF-IDF vectorization and NLP preprocessing, achieving ~97% accuracy.',
    technologies: ['Python', 'Flask', 'Scikit-learn', 'NLP', 'TF-IDF', 'Naive Bayes'],
    image: '/spam_detection.jpg',
    features: [
      'Built an ML-based web app to classify SMS as spam/ham using Naive Bayes classification.',
      'Applied TF-IDF vectorization and NLP preprocessing.',
      'Achieved ~97% classification accuracy.'
    ],
    github: 'https://github.com/surajdantarao/spamdetection',
    demo: ''
  },
  {
    id: 'qrStore',
    name: 'QR-Based Hyperlocal Store Platform',
    description: 'A QR-based digital store platform built with Python, Flask, SQLite, SQLAlchemy, and JavaScript for local shopkeepers with seller dashboards.',
    technologies: ['Python', 'Flask', 'SQLite', 'SQLAlchemy', 'JavaScript', 'React'],
    image: '/qr_store.jpg',
    features: [
      'Developed a QR-based digital store platform for local shopkeepers.',
      'Implemented seller dashboard with real-time order management.'
    ],
    github: 'https://github.com/surajdantarao/qr-store',
    demo: ''
  },
  {
    id: 'guestLecture',
    name: 'Guest Lecture & Visitor Management System',
    description: 'A digital system to manage guest speaker events, visitor entries, lecturer profiles, and feedback logs.',
    technologies: ['Node.js', 'React.js', 'MySQL', 'Express.js'],
    image: '/guest_lecture.jpg',
    features: [
      'Built a system to manage guest lectures and visitor entries digitally.',
      'Implemented entry tracking, scheduling, and record management.'
    ],
    github: 'https://github.com/surajdantarao/guest-leacture',
    demo: ''
  }
]

// Educational Timeline
export const educationData = [
  {
    degree: 'B.Tech in Computer Technology (CGPA: 5.9)',
    institution: 'Ratan Tata Maharashtra State Skills University (RTMSSU)',
    location: 'Pune, Maharashtra, India',
    duration: '2024 – Present (Pursuing)'
  },
  {
    degree: 'MSBTE (Computer Engineering) — 72.97%',
    institution: 'Zeal Polytechnic College',
    location: 'Pune, Maharashtra, India',
    duration: '2020 – 2023'
  },
  {
    degree: 'SSC — 75.00%',
    institution: 'Gagangiri School',
    location: 'Pune, Maharashtra, India',
    duration: '2019 – 2020'
  }
]

// Certifications List
export const certificationsData = [
  'Artificial Intelligence (Feb 28, 2025) | Information Technology Specialist – Certiport',
  'Code Without Barriers: Ethical AI Practice (Feb/Mar 2025) | Microsoft',
  'Deep Learning with Certification (Nov 12, 2025)'
]

// Recognitions / Accolades List
export const recognitionsData = [
  'Whitecode AI Recognition | Developed production-grade AI agent prototypes selected for live deployment at Whitecode AI',
  'Open-Source Contributor | Maintained and published multiple open-source repositories covering AI agents and web apps'
]

// Languages List
export const languagesData = ['English', 'Hindi', 'Marathi']
