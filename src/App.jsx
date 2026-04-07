import { useEffect } from 'react'
import './index.css'

import Background from './components/Background'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FocusStrip from './components/FocusStrip'
import WhatIBuild from './components/WhatIBuild'
import About from './components/About'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    // Load the existing vanilla JS (animations, tilt, navbar logic, etc.)
    const script = document.createElement('script')
    script.src = '/script.js'
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <>
      <Background />
      <Navbar />
      <main>
        <Hero />
        <FocusStrip />
        <WhatIBuild />
        <About />
        <Skills />
        <Achievements />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
