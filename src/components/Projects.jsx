import { projectsData } from '../portfolioData'

const Projects = () => {
  return (
    <div className="projects-tab-container">
      <header>
        <h2 className="article-title">Projects</h2>
      </header>

      <div className="projects-grid animate-fade-in-up" style={{ marginTop: '30px' }}>
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="project-card"
          >
            <div className="project-body">
              <h3 className="project-title">{project.name}</h3>
              <p className="project-desc">{project.description}</p>

              <div className="project-features">
                <div className="project-features-title">Key Features</div>
                <ul className="project-features-list">
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="project-tech">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="project-tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-actions">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn project-btn-primary"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    Source Code
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn project-btn-accent"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
