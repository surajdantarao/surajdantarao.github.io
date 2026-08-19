import { personalData } from '../portfolioData'

const Resume = () => {
  return (
    <div className="resume-section">
      <div className="resume-cta-card">
        <h2 className="resume-cta-title">Want to know more about my experience?</h2>
        <p className="resume-cta-desc">
          Feel free to download my complete resume for a detailed view of my skills, coursework, and projects.
        </p>
        <a
          href={`${personalData.resumePath}?v=2`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Download Resume
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
        </a>
      </div>
    </div>
  )
}

export default Resume
