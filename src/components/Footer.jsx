const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Suraj Dantarao. All rights reserved.
        </p>
        <p className="footer-subtext">
          Built with React, Vite &amp; CSS Gradients
        </p>
      </div>
    </footer>
  )
}

export default Footer
