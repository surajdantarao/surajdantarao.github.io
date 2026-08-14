import { experienceData } from '../portfolioData'

const Experience = () => {
  return (
    <section id="experience" className="container">
      <div className="section-header">
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">My internship and on-the-job training (OJT) history.</p>
      </div>

      <div className="experience-container animate-fade-in-up">
        {experienceData.map((exp, index) => (
          <div key={index} className="exp-item">
            <div className="exp-dot"></div>
            <div className="exp-card">
              <div className="exp-header">
                <div>
                  <h3 className="exp-title">{exp.title}</h3>
                  <div className="exp-company">{exp.company}</div>
                </div>
                <span className="exp-duration">{exp.duration}</span>
              </div>

              <ul className="exp-bullets">
                {exp.focusPoints.map((point, pIdx) => (
                  <li key={pIdx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
