const About = () => {
  const services = [
    {
      title: 'Full Stack Development',
      desc: 'Building clean, interactive, responsive web applications using React, Node.js, Express, and modern databases.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      )
    },
    {
      title: 'AI/ML Enthusiast',
      desc: 'Developing intelligent systems and processing pipelines using local LLMs (Ollama), FastAPI, and AI API integrations.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      )
    },
    {
      title: 'Automation Building',
      desc: 'Creating automated scripts, Google API triggers (Gmail, Sheets), and backend task routing servers to streamline operations.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      )
    }
  ]

  return (
    <div className="about-tab-container">
      <header>
        <h2 className="article-title">About Me</h2>
      </header>

      <section className="about-text">
        <p>
          I am a B.Tech Computer Technology student currently pursuing my studies at <strong>Ratan Tata Maharashtra State Skills University (RTMSSU)</strong>. I am a passionate Full Stack Developer and AI/ML Enthusiast based in Pune, Maharashtra.
        </p>
        <p>
          My focus is on building practical web applications, AI-powered systems, and automation solutions with modern technologies. I completed a hands-on OJT / Internship at <strong>Whitecode Technologies / Whitecode AI</strong>, where I worked on automated mail agents, local LLM installations, FastAPI servers, and React dashboards.
        </p>
      </section>

      {/* Services "What I'm Doing" */}
      <section className="services-section" style={{ marginTop: '35px' }}>
        <h3 className="sub-title">What I'm Doing</h3>
        <div className="services-grid animate-fade-in-up">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon-box">
                {service.icon}
              </div>
              <div className="service-content">
                <h4 className="service-title">{service.title}</h4>
                <p className="service-desc">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default About
