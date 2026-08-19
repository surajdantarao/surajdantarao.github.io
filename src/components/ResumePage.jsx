import { experienceData, educationData, certificationsData, recognitionsData, personalData } from '../portfolioData'
import Resume from './Resume'

const ResumePage = () => {
  return (
    <div className="resume-page-container">
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
        <h2 className="article-title" style={{ margin: 0 }}>Resume</h2>
        <a
          href={`${personalData.resumePath}?v=2`}
          download="Suraj_Dantarao_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
          style={{ padding: '10px 20px', fontSize: '0.9rem' }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Download PDF
        </a>
      </header>

      {/* Embedded PDF Viewer Section */}
      <section className="pdf-viewer-section" style={{ marginTop: '25px', marginBottom: '35px' }}>
        <div style={{
          position: 'relative',
          width: '100%',
          borderRadius: '12px',
          overflow: 'hidden',
          border: '1px solid var(--border-color, #262626)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
          backgroundColor: '#1e1e1e'
        }}>
          <iframe
            src={`${personalData.resumePath}?v=2#toolbar=0&navpanes=0`}
            title="Suraj Dantarao Resume PDF"
            width="100%"
            height="850px"
            style={{
              border: 'none',
              display: 'block',
              backgroundColor: '#ffffff'
            }}
          />
        </div>
      </section>

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
              <p className="timeline-item-desc" style={{ marginTop: '5px' }}>{edu.location}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Certifications and Awards Section */}
      <section className="timeline-section" style={{ marginTop: '40px' }}>
        <div className="timeline-title-wrapper">
          <div className="timeline-icon-box">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
          </div>
          <h3 className="timeline-section-title">Certifications & Accolades</h3>
        </div>

        <div style={{ paddingLeft: '45px', marginTop: '20px' }}>
          <h4 style={{ color: 'var(--text-white)', fontSize: '1.05rem', fontWeight: 700, marginBottom: '12px' }}>Certifications</h4>
          <ul className="timeline-item-bullets" style={{ marginBottom: '28px', listStyle: 'none' }}>
            {certificationsData.map((cert, idx) => (
              <li key={idx} style={{ position: 'relative', paddingLeft: '15px', color: 'var(--text-gray)', fontSize: '0.9rem', marginBottom: '8px' }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--text-white)' }}>•</span>
                {cert}
              </li>
            ))}
          </ul>

          <h4 style={{ color: 'var(--text-white)', fontSize: '1.05rem', fontWeight: 700, marginBottom: '12px' }}>Recognition & Accolades</h4>
          <ul className="timeline-item-bullets" style={{ listStyle: 'none' }}>
            {recognitionsData.map((rec, idx) => (
              <li key={idx} style={{ position: 'relative', paddingLeft: '15px', color: 'var(--text-gray)', fontSize: '0.9rem', marginBottom: '8px' }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--text-white)' }}>•</span>
                {rec}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Resume Download CTA */}
      <Resume />
    </div>
  )
}

export default ResumePage
