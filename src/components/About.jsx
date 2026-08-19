import { personalData, experienceData, educationData, certificationsData, recognitionsData } from '../portfolioData'
import Resume from './Resume'

const About = () => {
  const services = [
    {
      title: 'Full Stack Development',
      desc: 'Building clean, interactive, and responsive web applications using React.js, Flask, Node.js, and databases like SQLite and MongoDB.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      )
    },
    {
      title: 'AI/ML & NLP Systems',
      desc: 'Developing classification models (like text classifiers with ~97% accuracy), predictive analysis pipelines, and local LLM workflows with Scikit-learn and Ollama.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      )
    },
    {
      title: 'Workflow Automation',
      desc: 'Integrating Google APIs (Gmail, Sheets, Drive) and building background agent scripts with FastAPI and webhooks to automate repetitive processes.',
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

      <section className="about-text animate-fade-in-up" style={{ marginTop: '30px' }}>
        {personalData.bioParagraphs.map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}
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

      {/* Unified Resume Timeline Section */}
      <div id="resume-timeline-anchor" style={{ scrollMarginTop: '80px', marginTop: '60px' }}>
        <h3 className="sub-title">Resume &amp; Work Timelines</h3>

        {/* Experience Section */}
        <section className="timeline-section" style={{ marginTop: '30px' }}>
          <div className="timeline-title-wrapper">
            <div className="timeline-icon-box">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
            </div>
            <h4 className="timeline-section-title">Experience</h4>
          </div>

          <ol className="timeline-list">
            {experienceData.map((exp, idx) => (
              <li key={idx} className="timeline-item">
                <h4 className="timeline-item-title">{exp.title}</h4>
                <div className="timeline-item-meta">
                  <span className="timeline-item-subtitle">{exp.company}</span>
                  <span className="timeline-item-divider">•</span>
                  <span className="timeline-item-duration">{exp.duration}</span>
                </div>
                <p className="timeline-item-desc" style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '8px' }}>{exp.location}</p>
                <ul className="timeline-item-bullets" style={{ listStyle: 'none' }}>
                  {exp.focusPoints.map((point, pIdx) => (
                    <li key={pIdx}>{point}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        {/* Education Section */}
        <section className="timeline-section" style={{ marginTop: '40px' }}>
          <div className="timeline-title-wrapper">
            <div className="timeline-icon-box">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
              </svg>
            </div>
            <h4 className="timeline-section-title">Education</h4>
          </div>

          <ol className="timeline-list">
            {educationData.map((edu, idx) => (
              <li key={idx} className="timeline-item">
                <h4 className="timeline-item-title">{edu.degree}</h4>
                <div className="timeline-item-meta">
                  <span className="timeline-item-subtitle">{edu.institution}</span>
                  <span className="timeline-item-divider">•</span>
                  <span className="timeline-item-duration">{edu.duration}</span>
                </div>
                <p className="timeline-item-desc" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{edu.location}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Certifications and Accolades Section */}
        <section className="timeline-section" style={{ marginTop: '40px' }}>
          <div className="timeline-title-wrapper">
            <div className="timeline-icon-box">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
            </div>
            <h4 className="timeline-section-title">Certifications &amp; Accolades</h4>
          </div>

          <div style={{ paddingLeft: '32px', marginTop: '20px' }}>
            <h5 style={{ color: 'var(--text-white)', fontSize: '1.02rem', fontWeight: 700, marginBottom: '12px' }}>Certifications</h5>
            <ul className="timeline-item-bullets" style={{ marginBottom: '28px', listStyle: 'none' }}>
              {certificationsData.map((cert, idx) => (
                <li key={idx}>
                  {cert}
                </li>
              ))}
            </ul>

            <h5 style={{ color: 'var(--text-white)', fontSize: '1.02rem', fontWeight: 700, marginBottom: '12px' }}>Recognition &amp; Accolades</h5>
            <ul className="timeline-item-bullets" style={{ listStyle: 'none' }}>
              {recognitionsData.map((rec, idx) => (
                <li key={idx}>
                  {rec}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Resume Download Action */}
        <div style={{ marginTop: '40px' }}>
          <Resume />
        </div>
      </div>
    </div>
  )
}

export default About
