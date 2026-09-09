import { useState } from 'react'
import { personalData } from '../portfolioData'

const Sidebar = () => {
  const [isActive, setIsActive] = useState(false)

  return (
    <aside className={`sidebar ${isActive ? 'active' : ''}`} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src="./assets/images/my-avatar.png" alt={personalData.name} width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name" title={personalData.name}>{personalData.name}</h1>
          <p className="title">{personalData.role}</p>
        </div>

        <button 
          className="info_more-btn" 
          data-sidebar-btn 
          onClick={() => setIsActive(!isActive)}
        >
          <span>{isActive ? 'Hide Contacts' : 'Show Contacts'}</span>
          <ion-icon name={isActive ? 'chevron-up' : 'chevron-down'}></ion-icon>
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href={`mailto:${personalData.email}`} className="contact-link">
                {personalData.email}
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href={`tel:${personalData.phone}`} className="contact-link">
                {personalData.phone}
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>{personalData.location}</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a href={personalData.github} target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a href={personalData.linkedin} target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a href={`mailto:${personalData.email}`} className="social-link" title="Email">
              <ion-icon name="mail-outline"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a href={`tel:${personalData.phone}`} className="social-link" title="Call">
              <ion-icon name="call-outline"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
