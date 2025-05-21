import { useState } from 'react'
import styled, { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { motion } from 'framer-motion'
import { ThemeProvider } from './context/ThemeContext'
import { useTheme } from './context/ThemeContext'
import { lightTheme, darkTheme } from './styles/theme'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ThemeToggle from './components/ThemeToggle'

const AppContainer = styled.div`
  background: ${props => props.theme.background};
  color: ${props => props.theme.text};
  min-height: 100vh;
  transition: all 0.3s ease;
`

const MainContent = styled(motion.main)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`

function AppContent() {
  const [activeSection, setActiveSection] = useState('home')
  const { isDarkMode } = useTheme()

  return (
    <StyledThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <AppContainer>
        <ThemeToggle />
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
    </StyledThemeProvider>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App
