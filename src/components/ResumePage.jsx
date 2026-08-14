import { experienceData, educationData } from '../portfolioData'
import Resume from './Resume'

const ResumePage = () => {
  return (
    <div className="resume-page-container">
      <header>
        <h2 className="article-title">Resume</h2>
      </header>

      {/* Experience Timeline */}
      <section className="timeline-section" style={{ marginTop: '30px' }}>
        <div className="timeline-title-wrapper">
          <div className="timeline-icon-box">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
          </div>
          <h3 className="timeline-section-title">Experience</h3>
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
              <ul className="timeline-item-bullets">
                {exp.focusPoints.map((point, pIdx) => (
                  <li key={pIdx}>{point}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      {/* Education Timeline */}
      <section className="timeline-section" style={{ marginTop: '40px' }}>
        <div className="timeline-title-wrapper">
          <div className="timeline-icon-box">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
              <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
            </svg>
          </div>
          <h3 className="timeline-section-title">Education</h3>
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
              <p className="timeline-item-desc">{edu.location}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Resume Download CTA */}
      <Resume />
    </div>
  )
}

export default ResumePage
