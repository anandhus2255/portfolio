import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';

const ToggleButton = styled(motion.button)`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.primary};
  font-size: 1.5rem;
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 1000;
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    color: ${props => props.theme.accent};
  }
`;

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <ToggleButton
      onClick={toggleTheme}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {isDarkMode ? <FiSun /> : <FiMoon />}
    </ToggleButton>
  );
};

export default ThemeToggle; 