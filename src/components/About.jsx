import { personalData } from '../portfolioData'

const About = () => {
  const services = [
    {
      title: 'Enterprise Java Backend',
      desc: 'Building high-throughput concurrent batch ingestion engines, multithreaded systems, and RESTful microservices with Spring Boot, JPA, Kafka, and RabbitMQ.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
          <line x1="6" y1="6" x2="6.01" y2="6"></line>
          <line x1="6" y1="18" x2="6.01" y2="18"></line>
        </svg>
      )
    },
    {
      title: 'Modern Frontend Delivery',
      desc: 'Architecting fast, responsive client-facing dashboards and web panels using Angular (v12–v18) and React.js, optimized with RxJS, debouncing, and lazy loading.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      )
    },
    {
      title: 'DevOps & CI/CD Pipelines',
      desc: 'Configuring automated integration and delivery pipelines with Jenkins, Docker, and Kubernetes resource right-sizing to enable seamless production deployment cycles.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
          <polyline points="12 11 12 17 18 17"></polyline>
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
    </div>
  )
}

export default About
