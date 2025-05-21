import styled from 'styled-components'
import { motion } from 'framer-motion'

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: ${props => props.theme.navBg};
  backdrop-filter: blur(10px);
  padding: 1rem 2rem;
  transition: all 0.3s ease;
`

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled(motion.div)`
  color: ${props => props.theme.primary};
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
`

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`

const NavLink = styled(motion.a)`
  color: ${props => props.active ? props.theme.primary : props.theme.text};
  text-decoration: none;
  font-size: 0.9rem;
  cursor: pointer;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.primary};
  }
`

const Navbar = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'home', label: 'Home', href: '#' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'contact', label: 'Contact', href: '#contact' }
  ]

  return (
    <Nav>
      <NavContainer>
        <Logo
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Portfolio
        </Logo>
        <NavLinks>
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              href={item.href}
              active={activeSection === item.id}
              onClick={(e) => {
                e.preventDefault();
                setActiveSection(item.id);
                document.querySelector(item.href).scrollIntoView({ behavior: 'smooth' });
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * navItems.indexOf(item) }}
            >
              {item.label}
            </NavLink>
          ))}
        </NavLinks>
      </NavContainer>
    </Nav>
  )
}

export default Navbar 