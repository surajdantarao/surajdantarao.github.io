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
    <main>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="main-content">
        {/* Navigation Bar */}
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Dynamic Tab Pages */}
        {activeTab === 'about' && <About />}
        {activeTab === 'resume' && <ResumePage />}
        {activeTab === 'projects' && <Projects />}
        {activeTab === 'skills' && <Skills />}
        {activeTab === 'contact' && <Contact />}
      </div>
    </main>
  )
}

export default App
