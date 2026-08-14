import { skillsData } from '../portfolioData'

const Skills = () => {
  return (
    <div className="skills-tab-container">
      <header>
        <h2 className="article-title">Skills</h2>
      </header>

      <div className="skills-grid animate-fade-in-up" style={{ marginTop: '30px' }}>
        {skillsData.map((skillGroup, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon-wrapper">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>
            <h3 className="skill-card-title">{skillGroup.category}</h3>
            <div className="skill-tags">
              {skillGroup.skills.map((skill, tIdx) => (
                <span key={tIdx} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
