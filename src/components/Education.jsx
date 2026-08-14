import { educationData } from '../portfolioData'

const Education = () => {
  return (
    <section id="education" className="container">
      <div className="section-header">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">Academic qualifications and institutions attended.</p>
      </div>

      <div className="education-grid animate-fade-in-up">
        {educationData.map((edu, idx) => (
          <div key={idx} className="education-card">
            <div className="edu-header">
              <h3 className="edu-title">{edu.degree}</h3>
              <span className="edu-period">{edu.duration}</span>
            </div>
            <p className="edu-inst">{edu.institution}</p>
            <div className="edu-loc">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>{edu.location}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
