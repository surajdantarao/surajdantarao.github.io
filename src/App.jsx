import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="portfolio-app">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Top-Down Sections */}
      <main className="portfolio-container">
        <Hero />
        
        <div className="section-divider"></div>
        <section id="about" className="scroll-section">
          <About />
        </section>

        <div className="section-divider"></div>
        <section id="skills" className="scroll-section">
          <Skills />
        </section>

        <div className="section-divider"></div>
        <section id="projects" className="scroll-section">
          <Projects />
        </section>

        <div className="section-divider"></div>
        <section id="contact" className="scroll-section">
          <Contact />
        </section>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  )
}

export default App
