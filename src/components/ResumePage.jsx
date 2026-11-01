import { experienceData, educationData } from '../portfolioData'

const ResumePage = () => {
  return (
    <article className="resume active" data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      {/* Download Resumes */}
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">Download Resumes</h3>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '10px', marginBottom: '24px' }}>
          <a 
            href="/Suraj_Dantarao_Resume.pdf" 
            target="_blank" 
            download="Suraj_Dantarao_Resume.pdf" 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px', 
              padding: '10px 18px', 
              background: 'var(--border-gradient-onyx)', 
              color: 'var(--white-2)', 
              borderRadius: '12px', 
              textDecoration: 'none', 
              fontWeight: '600',
              fontSize: '14px',
              border: '1px solid var(--jet)'
            }}
          >
            <ion-icon name="document-text-outline"></ion-icon>
            Portfolio Resume (PDF)
          </a>
          <a 
            href="/Suraj_Dantarao_College_Resume.pdf" 
            target="_blank" 
            download="Suraj_Dantarao_College_Resume.pdf" 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px', 
              padding: '10px 18px', 
              background: 'linear-gradient(to right, #ffdb70, #e5a700)', 
              color: '#1a1a1a', 
              borderRadius: '12px', 
              textDecoration: 'none', 
              fontWeight: '700',
              fontSize: '14px'
            }}
          >
            <ion-icon name="school-outline"></ion-icon>
            College Format Resume (PDF)
          </a>
          <a 
            href="/Suraj_Dantarao_College_Resume.docx" 
            download="Suraj_Dantarao_College_Resume.docx" 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px', 
              padding: '10px 18px', 
              background: 'var(--border-gradient-onyx)', 
              color: 'var(--white-2)', 
              borderRadius: '12px', 
              textDecoration: 'none', 
              fontWeight: '600',
              fontSize: '14px',
              border: '1px solid var(--jet)'
            }}
          >
            <ion-icon name="download-outline"></ion-icon>
            College Format Resume (Word DOCX)
          </a>
        </div>
      </section>

      {/* Experience */}
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>

          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          {experienceData.map((item, index) => (
            <li key={index} className="timeline-item">
              <h4 className="h4 timeline-item-title">
                {item.title} — {item.company}
              </h4>

              <span>{item.duration} | {item.location}</span>

              {item.focusPoints.map((point, pIndex) => (
                <p key={pIndex} className="timeline-text">
                  {point}
                </p>
              ))}
            </li>
          ))}
        </ol>
      </section>

      {/* Education */}
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>

          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          {educationData.map((item, index) => (
            <li key={index} className="timeline-item">
              <h4 className="h4 timeline-item-title">{item.institution}</h4>

              <span>{item.degree}</span>

              <span>{item.duration}</span>

              <p className="timeline-text">
                {item.location}
              </p>
            </li>
          ))}
        </ol>
      </section>
    </article>
  )
}

export default ResumePage
