import { useState } from 'react'
import { projectsData } from '../portfolioData'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [isSelectOpen, setIsSelectOpen] = useState(false)

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'ai & machine learning', label: 'AI & Machine Learning' },
    { id: 'web development', label: 'Web development' },
    { id: 'automation & tools', label: 'Automation & Tools' },
  ]

  // Categorize projects with AI projects in their own dedicated category
  const getProjectCategory = (id) => {
    if (id === 'mahaSevaAi' || id === 'mailAgent' || id === 'spamDetection') {
      return 'ai & machine learning'
    }
    if (id === 'garbaSaathi' || id === 'gymSystem' || id === 'guestLecture' || id === 'qrStore') {
      return 'web development'
    }
    if (id === 'taskSheetAutomation') {
      return 'automation & tools'
    }
    return 'web development'
  }

  const getDisplayCategory = (id) => {
    if (id === 'mahaSevaAi') return 'AI Citizen Assistance Platform'
    if (id === 'mailAgent') return 'AI & Local LLM Automation'
    if (id === 'spamDetection') return 'NLP & Naive Bayes Classifier'
    if (id === 'garbaSaathi') return 'Community Web Application'
    if (id === 'gymSystem') return 'Full Stack MERN System'
    if (id === 'guestLecture') return 'Academic Event & Entry Portal'
    if (id === 'taskSheetAutomation') return 'Workflow & Pipeline Automation'
    if (id === 'qrStore') return 'Hyperlocal Merchant Platform'
    return 'Web Development'
  }

  const handleFilterClick = (catId) => {
    setActiveFilter(catId.toLowerCase())
    setIsSelectOpen(false)
  }

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === 'all') return true
    return getProjectCategory(project.id) === activeFilter
  })

  return (
    <article className="portfolio active" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Projects</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          {categories.map((cat) => (
            <li key={cat.id} className="filter-item">
              <button
                className={activeFilter === cat.id ? 'active' : ''}
                data-filter-btn
                onClick={() => handleFilterClick(cat.id)}
              >
                {cat.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="filter-select-box">
          <button
            className={`filter-select ${isSelectOpen ? 'active' : ''}`}
            data-select
            onClick={() => setIsSelectOpen(!isSelectOpen)}
          >
            <div className="select-value" data-selecct-value>
              {categories.find((c) => c.id === activeFilter)?.label || 'Select category'}
            </div>

            <div className="select-icon">
              <ion-icon name="chevron-down"></ion-icon>
            </div>
          </button>

          <ul className="select-list">
            {categories.map((cat) => (
              <li key={cat.id} className="select-item">
                <button
                  data-select-item
                  onClick={() => handleFilterClick(cat.id)}
                >
                  {cat.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <ul className="project-list">
          {filteredProjects.map((project) => {
            const primaryLink = project.demo || project.github || 'https://github.com/surajdantarao'
            const displayCat = getDisplayCategory(project.id)

            return (
              <li
                key={project.id}
                className="project-item active"
                data-filter-item
                data-category={getProjectCategory(project.id)}
              >
                <div>
                  <a
                    href={primaryLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Open ${project.name}`}
                  >
                    <figure className="project-img">
                      <div className="project-item-icon-box">
                        <ion-icon name="eye-outline"></ion-icon>
                      </div>

                      <img src={project.image} alt={project.name} loading="lazy" />
                    </figure>

                    <h3 className="project-title">{project.name}</h3>

                    <p className="project-category">{displayCat}</p>
                  </a>

                  {/* Dual Action Options: Shows both Live Demo and GitHub if available, or GitHub if no live link */}
                  <div className="project-links-bar" style={{ display: 'flex', gap: '8px', marginTop: '10px', marginLeft: '10px', flexWrap: 'wrap' }}>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-action-btn live-btn"
                        title="Open Live Website"
                      >
                        <ion-icon name="globe-outline"></ion-icon>
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-action-btn repo-btn"
                        title="Open GitHub Repository"
                      >
                        <ion-icon name="logo-github"></ion-icon>
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </section>
    </article>
  )
}

export default Projects
