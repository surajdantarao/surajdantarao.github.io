import { useState } from 'react'
import { personalData } from '../portfolioData'

const Sidebar = () => {
  const [contactsOpen, setContactsOpen] = useState(false)

  return (
    <aside className={`sidebar ${contactsOpen ? 'active' : ''}`}>
      <div className="sidebar-info">
        {/* Vector SVG Monochrome Avatar */}
        <div className="avatar-box">
          <svg className="avatar-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="48" fill="#121212" stroke="#222225" strokeWidth="2"/>
            {/* Minimalist developer body outline */}
            <path d="M25 82C25 72 33 62 45 60H55C67 62 75 72 75 82" stroke="#ffffff" strokeWidth="3" strokeLinecap="round"/>
            {/* Minimalist face outline */}
            <circle cx="50" cy="40" r="15" fill="#0a0a0a" stroke="#ffffff" strokeWidth="3"/>
            {/* Tech glasses */}
            <rect x="40" y="36" width="8" height="6" rx="1.5" stroke="#ffffff" strokeWidth="2" fill="none"/>
            <rect x="52" y="36" width="8" height="6" rx="1.5" stroke="#ffffff" strokeWidth="2" fill="none"/>
            <line x1="48" y1="39" x2="52" y2="39" stroke="#ffffff" strokeWidth="2"/>
            <line x1="37" y1="39" x2="40" y2="39" stroke="#ffffff" strokeWidth="1.5"/>
            <line x1="60" y1="39" x2="63" y2="39" stroke="#ffffff" strokeWidth="1.5"/>
          </svg>
        </div>

        <div className="info-content">
          <h1 className="name" title={personalData.name}>
            {personalData.name}
          </h1>
          <p className="title">{personalData.role}</p>
        </div>

        <button 
          className="info_more-btn" 
          onClick={() => setContactsOpen(!contactsOpen)}
        >
          <span>{contactsOpen ? 'Hide Contacts' : 'Show Contacts'}</span>
          <svg 
            className={`chevron-icon ${contactsOpen ? 'rotate' : ''}`}
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href={`mailto:${personalData.email}`} className="contact-link">
                {personalData.email}
              </a>
            </div>
          </li>

          {personalData.phone && (
            <li className="contact-item">
              <div className="icon-box">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div className="contact-info">
                <p className="contact-title">Phone</p>
                <a href={`tel:${personalData.phone}`} className="contact-link">
                  {personalData.phone}
                </a>
              </div>
            </li>
          )}

          <li className="contact-item">
            <div className="icon-box">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address className="contact-link">{personalData.location}</address>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </div>
            <div className="contact-info">
              <p className="contact-title">GitHub</p>
              <a href={personalData.github} target="_blank" rel="noopener noreferrer" className="contact-link">
                {personalData.github.replace('https://', '')}
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </div>
            <div className="contact-info">
              <p className="contact-title">LinkedIn</p>
              <a href={personalData.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
                {personalData.linkedin.replace('https://', '')}
              </a>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a href={personalData.github} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </li>
          <li className="social-item">
            <a href={personalData.linkedin} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
