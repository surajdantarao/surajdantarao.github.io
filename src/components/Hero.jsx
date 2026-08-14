import { useState, useEffect } from 'react'
import { personalData } from '../portfolioData'

const roles = [
  'Full Stack Developer',
  'AI/ML Enthusiast',
  'Automation Builder',
  'Software Engineer',
]

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(100)

  useEffect(() => {
    let timer
    const handleType = () => {
      const fullText = roles[roleIndex]
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1))
        setTypingSpeed(100)

        if (currentText === fullText) {
          timer = setTimeout(() => setIsDeleting(true), 2000)
          return
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1))
        setTypingSpeed(50)

        if (currentText === '') {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }

    timer = setTimeout(handleType, typingSpeed)
    return () => clearTimeout(timer)
  }, [currentText, isDeleting, roleIndex, typingSpeed])

  const handleScrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero-section container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="hero-content animate-fade-in-up" style={{ textAlign: 'center', margin: '0 auto', maxWidth: '800px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <span className="hero-tagline">DEVELOPER PORTFOLIO</span>
        <h1 className="hero-title">
          Hi, I'm <span className="gradient-text">{personalData.name}</span>
        </h1>
        <h2 className="hero-subtitle">
          <span>I'm a </span>
          <span className="gradient-text" style={{ minWidth: '220px', display: 'inline-block' }}>
            {currentText}
          </span>
          <span className="blink-cursor">|</span>
        </h2>
        <p className="hero-desc" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          {personalData.description}
        </p>

        <div className="hero-actions" style={{ justifyContent: 'center' }}>
          <button
            onClick={() => handleScrollTo('projects')}
            className="btn btn-primary"
          >
            View Projects
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
          <a
            href={personalData.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            Download Resume
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </a>
          <button
            onClick={() => handleScrollTo('contact')}
            className="btn btn-outline"
          >
            Contact Me
          </button>
        </div>

        <div className="hero-socials" style={{ justifyContent: 'center' }}>
          <span className="hero-social-label">Connect:</span>
          <a
            href={personalData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-link"
            aria-label="GitHub Profile"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a
            href={personalData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-link"
            aria-label="LinkedIn Profile"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
