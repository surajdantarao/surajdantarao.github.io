const Navbar = () => {
  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#resume', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="site-header">
      <div className="header-container">
        <a href="#home" className="header-logo">
          Suraj<span className="text-gradient">.D</span>
        </a>
        <nav className="navbar">
          <ul className="navbar-list">
            {navItems.map((item) => (
              <li key={item.href} className="navbar-item">
                <a href={item.href} className="navbar-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
