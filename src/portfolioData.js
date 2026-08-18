// Personal and Contact details
export const personalData = {
  name: 'Shubham Somwanshi',
  role: 'Full Stack Java Developer',
  subtitle: 'Full Stack Java Developer | 3+ Years Experience',
  location: 'Bengaluru, Karnataka, India',
  email: 'shubhams3102@gmail.com',
  phone: '+91 7741085675',
  github: 'https://github.com/shu3102',
  linkedin: 'https://linkedin.com/in/shubham-somwanshi',
  resumePath: '/resume.pdf',
  bioParagraphs: [
    'Full Stack Java Developer with 3+ years of experience building enterprise-scale financial systems at Societe Generale GSC — delivering robust microservices in Java, Spring Boot, Angular, and React.js that serve thousands of daily users across GDPR-regulated, high-write environments.',
    'Specialized in architectural ownership: from offline-first sync engines to AI-driven data quality platforms, concurrent thread pools, CI/CD automation, and measurable performance wins. Equally fluent in backend design, frontend delivery, and DevOps where system-level thinking drives business outcomes.'
  ]
}

// Categorized Technical Skills
export const skillsData = [
  {
    category: 'Languages',
    classId: 'languages',
    skills: ['Java 8/11/17/21', 'TypeScript', 'JavaScript', 'SQL', 'Python', 'Shell']
  },
  {
    category: 'Backend',
    classId: 'backend',
    skills: [
      'Spring Boot',
      'Spring Framework & Security',
      'Hibernate/JPA',
      'RESTful APIs',
      'Microservices',
      'Multithreading',
      'RabbitMQ',
      'Kafka',
      'OAuth2',
      'JWT',
      'OpenAPI/Swagger'
    ]
  },
  {
    category: 'Frontend',
    classId: 'frontend',
    skills: ['Angular (v12–v18)', 'React.js', 'RxJS', 'NgRx', 'HTML5', 'CSS3', 'Bootstrap']
  },
  {
    category: 'DevOps & Cloud',
    classId: 'devops',
    skills: ['Jenkins', 'Docker', 'Kubernetes', 'AWS (S3)', 'CI/CD Pipelines', 'GitHub Actions']
  },
  {
    category: 'Databases',
    classId: 'databases',
    skills: ['PostgreSQL', 'MySQL', 'Oracle DB', 'Redis', 'MongoDB', 'NoSQL']
  },
  {
    category: 'Architecture & Design',
    classId: 'architecture',
    skills: [
      'System Design',
      'Offline-First Architecture',
      'CQRS Data Sync',
      'Event-Driven Architecture',
      'High-Level Design (HLD)',
      'OOP',
      'Design Patterns'
    ]
  },
  {
    category: 'Testing & Tools',
    classId: 'testing',
    skills: ['JUnit', 'Mockito', 'Cucumber', 'Playwright', 'JMeter', 'Git', 'JIRA', 'Maven', 'Liquibase', 'Postman']
  }
]

// Professional Timeline (Internship / OJT)
export const experienceData = [
  {
    company: 'Societe Generale GSC',
    title: 'Software Engineer',
    duration: 'Jun 2023 – Present',
    location: 'Bengaluru, KA',
    focusPoints: [
      'Eliminated a critical nightly bottleneck by redesigning batch file ingestion with custom Java thread pools and concurrent queue management — cutting processing time 96% (12 hrs to 28 min) for 8,000+ daily PR files, directly unblocking downstream reporting for 3 dependent teams.',
      'Architected 3 GDPR-compliant DRM microservices (NRR, ORR, Purging) that fully automated sensitive data lifecycle enforcement, reducing regulatory audit preparation time by 40% and eliminating 100% of manual compliance interventions across financial datasets.',
      'Reduced Angular dashboard API call frequency by 70% by implementing RxJS-based debounced filtering, virtual scrolling, and route-level lazy loading — bringing average page load from 4s to under 1.2s and improving responsiveness across high-traffic internal portals.',
      'Cut release cycle time by 50% across 4 microservices by redesigning Jenkins pipelines with parallel build stages, Kubernetes resource right-sizing, and automated rollback triggers — enabling daily deployments.',
      'Designed and built an AI-driven data quality automation platform (POC) using Spring Boot, React.js, and PostgreSQL — featuring a metadata-driven architecture that dynamically generates validation controls and AI-based rule generation across 5 quality dimensions.',
      'Led the design of the PR microservice data model, choosing eventual consistency over strong consistency to handle peak write load of 8,000+ daily files — documented as reference architecture.',
      'Enforced application security through Role-Based Access Control (RBAC) and secure user provisioning, maintaining compliance with enterprise-grade security standards.',
      'Boosted team engineering quality by mentoring junior developers, leading technical ceremonies, enforcing SonarQube based code review gates, and achieving 90% unit test coverage with JUnit and Mockito.'
    ]
  },
  {
    company: 'Dosii',
    title: 'Associate Software Engineer | Intern',
    duration: 'May 2022 – Dec 2022',
    location: 'Pune, MH',
    focusPoints: [
      'Accelerated XML data processing speed by 12% for a SaaS platform serving 700+ educational institutions by building company profile pages, onboarding forms, and advanced dashboard filters with server-side pagination.',
      'Improved search performance by 60% and reduced average page load time by integrating server-side caching and pagination in IaaS/PaaS environments.',
      'Built multi-threaded backend services to handle high-volume data migration operations, ensuring 100% data integrity across records during platform transitions.',
      'Accelerated release cycles by deploying backend modules, resolving production incidents, and collaborating with cross functional teams using Cucumber, JUnit, and Mockito across REST API and MongoDB-backed services.'
    ]
  }
]

// Projects Showcase
export const projectsData = [
  {
    id: 'motoNexus',
    name: 'MotoNexus Ecosystem',
    description: 'An offline-first synchronization engine and community platform for motorcyclists, enabling seamless application functionality in zero-network environments.',
    technologies: ['Java', 'Spring Boot', 'React.js', 'SQLite', 'Offline-First', 'Cryptography'],
    features: [
      'Architected an offline-first synchronization engine with automatic background data reconciliation and conflict resolution.',
      'Designed a secure, locally-persistent document vault module to store critical credentials on-device with encrypted local caching.',
      'Built a scalable social posting feed and established production-scale development roadmaps for local caching and handshakes.',
      'Developed a responsive React.js frontend interface interacting with a custom Spring Boot backend orchestrating offline APIs.'
    ],
    github: 'https://github.com/shu3102',
    demo: ''
  },
  {
    id: 'httpServer',
    name: 'Custom HTTP Server',
    description: 'A fully functional HTTP/1.1 web server built from scratch in Python using raw sockets without any external web frameworks.',
    technologies: ['Python', 'Sockets', 'Multithreading', 'Systems Programming'],
    features: [
      'Implemented HTTP/1.1 spec methods (GET, HEAD, POST, PUT, DELETE) with header parsing, status code handling, and MIME-type inference.',
      'Engineered a multithreaded connection handler using Python\'s threading module, reducing connection error reports by 15%.',
      'Implemented persistent (keep-alive) and non-persistent connection modes with configurable timeouts.',
      'Added server-side cookie management, structured request/response logging, and a file-based configuration system.'
    ],
    github: 'https://github.com/shu3102',
    demo: ''
  }
]

// Educational Timeline
export const educationData = [
  {
    degree: 'B.Tech in Computer Engineering',
    institution: 'College of Engineering, Pune',
    location: 'Pune, Maharashtra, India',
    duration: 'Aug 2019 – May 2023'
  }
]

// Certifications List
export const certificationsData = [
  'AZ-900: Microsoft Certified Azure Fundamentals | Microsoft, 2024',
  'Spring Boot 3, Spring 6 and Hibernate | Udemy, 2024',
  'Angular: The Complete Guide | Udemy, 2023',
  'React: The Complete Guide (incl. Next.js, Redux) | Udemy, 2024'
]

// Awards & Honors
export const recognitionsData = [
  'Winner | SG Hackathon: Production Support Using SoGPT',
  'Finalist | Algowar National Level Coding Competition',
  '2× Spot Awards for Ownership and Delivery Excellence at Societe Generale',
  'Top Performer Award | Recognized for exceeding performance expectations'
]
