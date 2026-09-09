import { personalData } from '../portfolioData'

const About = () => {
  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        {personalData.bioParagraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </section>

      {/* Services / What I'm Doing */}
      <section className="service">
        <h3 className="h3 service-title">What i'm doing</h3>

        <ul className="service-list">
          <li className="service-item">
            <div className="service-icon-box">
              <img src="./assets/images/icon-app.svg" alt="AI & ML icon" width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">AI & Machine Learning</h4>
              <p className="service-item-text">
                Developing predictive models, NLP classification pipelines, and intelligent local agent workflows.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img src="./assets/images/icon-dev.svg" alt="Web development icon" width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Web development</h4>
              <p className="service-item-text">
                High-quality development of responsive, full-stack web applications with React, Node.js, and Flask.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img src="./assets/images/icon-design.svg" alt="Automation icon" width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Workflow Automation</h4>
              <p className="service-item-text">
                Automating repetitive processes using FastAPI, Google Workspace APIs, and webhook pipelines.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img src="./assets/images/icon-photo.svg" alt="System design icon" width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Database & System Design</h4>
              <p className="service-item-text">
                Designing scalable schemas and optimizing database performance across MongoDB, SQLite, and MySQL.
              </p>
            </div>
          </li>
        </ul>
      </section>

      {/* Hobbies Section */}
      <section className="clients">
        <h3 className="h3 clients-title">Hobbies</h3>

        <ul className="clients-list has-scrollbar">
          <li className="clients-item">
            <a href="#about" onClick={(e) => e.preventDefault()}>
              <img src="./assets/images/hobby-cricket.png" alt="Cricket" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#about" onClick={(e) => e.preventDefault()}>
              <img src="./assets/images/hobby-travel.png" alt="Travel" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#about" onClick={(e) => e.preventDefault()}>
              <img src="./assets/images/hobby-music.png" alt="Music" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#about" onClick={(e) => e.preventDefault()}>
              <img src="./assets/images/hobby-science.png" alt="Science & Tech" />
            </a>
          </li>
        </ul>
      </section>
    </article>
  )
}

export default About
