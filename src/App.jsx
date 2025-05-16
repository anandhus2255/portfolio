import { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

const AppContainer = styled.div`
  background: #0a192f;
  color: #8892b0;
  min-height: 100vh;
`

const MainContent = styled(motion.main)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`

function App() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <AppContainer>
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <MainContent
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <About />
        <Projects />
        <Contact />
      </MainContent>
    </AppContainer>
  )
}

export default App
