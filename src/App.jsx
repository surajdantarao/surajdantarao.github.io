import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import About from './components/About'
import ResumePage from './components/ResumePage'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('about')

  return (
    <main className="dashboard-container">
      {/* Sidebar profile sheet */}
      <Sidebar />

      {/* Main content display */}
      <div className="main-content">
        {/* Navigation header tabs */}
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Dynamic page content */}
        <article className="content-page animate-fade-in">
          {activeTab === 'about' && <About />}
          {activeTab === 'resume' && <ResumePage />}
          {activeTab === 'projects' && <Projects />}
          {activeTab === 'skills' && <Skills />}
          {activeTab === 'contact' && <Contact />}
        </article>
      </div>
    </main>
  )
}

export default App
