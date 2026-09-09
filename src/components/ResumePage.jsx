import { experienceData, educationData } from '../portfolioData'

const ResumePage = () => {
  return (
    <article className="resume active" data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      {/* Download My Resume */}
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">
            <a 
              href="/Suraj_Dantarao_Resume.pdf" 
              target="_blank" 
              download="Suraj_Dantarao_Resume.pdf" 
              style={{ color: '#f6f3f3', textDecoration: 'none', fontWeight: 'bold' }}
            >
              Download My Resume
            </a>
          </h3>
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
