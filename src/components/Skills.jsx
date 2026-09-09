import { useState } from 'react'

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [isSelectOpen, setIsSelectOpen] = useState(false)

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'technical skills', label: 'Technical Skills' },
    { id: 'certificates', label: 'Certificates' },
  ]

  const technicalSkills = [
    {
      group: 'Programming Languages',
      skills: [
        { name: 'Python', percent: 90 },
        { name: 'JavaScript', percent: 85 },
        { name: 'SQL', percent: 85 },
        { name: 'Java', percent: 75 },
        { name: 'C / C++', percent: 70 },
      ],
    },
    {
      group: 'AI & Machine Learning',
      skills: [
        { name: 'NLP & Text Classification', percent: 85 },
        { name: 'Scikit-learn & TF-IDF', percent: 85 },
        { name: 'Local LLMs (Ollama)', percent: 80 },
        { name: 'Model Optimization', percent: 75 },
      ],
    },
    {
      group: 'Web Technologies & Frameworks',
      skills: [
        { name: 'React.js', percent: 85 },
        { name: 'FastAPI / Flask', percent: 80 },
        { name: 'Node.js & Express', percent: 75 },
        { name: 'HTML5 / CSS3', percent: 90 },
      ],
    },
    {
      group: 'Databases & Cloud',
      skills: [
        { name: 'MongoDB', percent: 75 },
        { name: 'SQLite', percent: 85 },
        { name: 'MySQL', percent: 80 },
        { name: 'REST APIs & Webhooks', percent: 85 },
      ],
    },
  ]

  const certificatesList = [
    {
      title: 'Artificial Intelligence Specialist',
      issuer: 'Certiport (Feb 2025)',
      desc: 'Information Technology Specialist – AI Foundations & Application',
    },
    {
      title: 'Code Without Barriers: Ethical AI Practice',
      issuer: 'Microsoft (Mar 2025)',
      desc: 'Responsible AI Design, Compliance & Machine Learning Ethics',
    },
    {
      title: 'Deep Learning with Certification',
      issuer: 'Advanced Neural Networks & Models',
      desc: 'Deep Learning Model Architectures and Practice (Nov 2025)',
    },
    {
      title: 'Whitecode AI Engineering Recognition',
      issuer: 'Whitecode AI',
      desc: 'Selected for developing production-ready local AI agent prototypes',
    },
  ]

  const handleFilterClick = (catId) => {
    setActiveFilter(catId.toLowerCase())
    setIsSelectOpen(false)
  }

  const showTech = activeFilter === 'all' || activeFilter === 'technical skills'
  const showCert = activeFilter === 'all' || activeFilter === 'certificates'

  return (
    <article className="Skills active" data-page="Skills">
      <header>
        <h2 className="h2 article-title">Skills</h2>
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

        {/* Technical Skills with Progress Bars */}
        {showTech && (
          <section className="skill" style={{ marginBottom: '35px' }}>
            <h3 className="h3 skills-title" style={{ marginBottom: '20px' }}>
              Technical Skills
            </h3>

            {technicalSkills.map((group, gIdx) => (
              <div key={gIdx} style={{ marginBottom: '25px' }}>
                <h4 className="h4 timeline-item-title" style={{ marginBottom: '12px' }}>
                  {group.group}
                </h4>

                <ul className="skills-list content-card" style={{ marginBottom: '15px' }}>
                  {group.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="skills-item">
                      <div className="title-wrapper">
                        <h5 className="h5">{skill.name}</h5>
                        <data value={skill.percent}>{skill.percent}%</data>
                      </div>

                      <div className="skill-progress-bg">
                        <div
                          className="skill-progress-fill"
                          style={{ width: `${skill.percent}%` }}
                        ></div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        )}

        {/* Certificates Section */}
        {showCert && (
          <section className="skill">
            <h3 className="h3 skills-title" style={{ marginBottom: '20px' }}>
              Certifications &amp; Accolades
            </h3>

            <ul className="service-list">
              {certificatesList.map((cert, cIdx) => (
                <li key={cIdx} className="service-item">
                  <div className="service-icon-box">
                    <img src="./assets/images/icon-design.svg" alt="certificate icon" width="40" />
                  </div>

                  <div className="service-content-box">
                    <h4 className="h4 service-item-title">{cert.title}</h4>
                    <span style={{ fontSize: '12px', color: 'var(--orange-yellow-crayola)', display: 'block', marginBottom: '4px' }}>
                      {cert.issuer}
                    </span>
                    <p className="service-item-text">{cert.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        )}
      </section>
    </article>
  )
}

export default Skills
