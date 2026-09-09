const Navbar = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'about', label: 'About' },
    { id: 'resume', label: 'Resume' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {tabs.map((tab) => (
          <li key={tab.id} className="navbar-item">
            <button
              className={`navbar-link ${activeTab === tab.id ? 'active' : ''}`}
              data-nav-link
              onClick={() => {
                setActiveTab(tab.id)
                window.scrollTo(0, 0)
              }}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
