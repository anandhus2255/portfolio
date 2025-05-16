import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 6rem 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at top right, rgba(100, 255, 218, 0.1), transparent 50%);
    z-index: 0;
  }
`

const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`

const TextContent = styled.div`
  h1 {
    font-size: 5rem;
    color: #ccd6f6;
    margin-bottom: 1rem;
    line-height: 1.1;
    font-weight: 700;
    text-shadow: 0 0 10px rgba(100, 255, 218, 0.1);

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }

    @media (max-width: 480px) {
      font-size: 2rem;
    }
  }

  h2 {
    font-size: 2.5rem;
    color: #8892b0;
    margin-bottom: 2rem;
    font-weight: 500;

    @media (max-width: 768px) {
      font-size: 1.8rem;
    }

    @media (max-width: 480px) {
      font-size: 1.4rem;
    }
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    max-width: 600px;
    line-height: 1.8;

    @media (max-width: 768px) {
      font-size: 0.85rem;
      line-height: 1.6;
    }

    @media (max-width: 480px) {
      font-size: 0.75rem;
      line-height: 1.5;
    }
  }
`

const ImageContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    right: 20px;
    bottom: 20px;
    border: 2px solid #64ffda;
    z-index: -1;
    transition: all 0.3s ease;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(100, 255, 218, 0.1), transparent);
    z-index: 1;
    pointer-events: none;
  }

  &:hover::before {
    transform: translate(10px, 10px);
  }
`

const ProfileImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
  filter: grayscale(100%) contrast(1.2);
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

  &:hover {
    filter: none;
    transform: translateY(-5px);
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 3rem;
`

const SocialIcon = styled(motion.a)`
  color: #8892b0;
  font-size: 1.8rem;
  transition: all 0.3s ease;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: #64ffda;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #64ffda;
    transform: translateY(-3px);

    &::after {
      width: 100%;
    }
  }
`

const NameSpan = styled.span`
  color: #64ffda;
  @media (max-width: 768px) {
    font-size: 0.8em;
  }
  @media (max-width: 480px) {
    font-size: 60px;
  }

  
`

const GreetingText = styled.span`
  @media (max-width: 768px) {
    font-size: 0.8em;
  }
  @media (max-width: 480px) {
    font-size: 0.7em;
  }
`

const RoleText = styled.span`
  @media (max-width: 768px) {
    font-size: 0.8em;
  }
  @media (max-width: 480px) {
    font-size: 0.7em;
  }
`

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <TextContent>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <GreetingText>Hi, I'm</GreetingText> <br /> <NameSpan>Anandhu S</NameSpan>
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <RoleText>MERN Stack Developer</RoleText>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I build modern web applications using the MERN stack. Specializing in creating responsive, 
            scalable, and user-friendly solutions with React, Node.js, Express, and MongoDB.
          </motion.p>
          <SocialLinks>
            <SocialIcon
              href="https://github.com/anandhus2255"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub />
            </SocialIcon>
            <SocialIcon
              href="https://www.linkedin.com/in/anandhu-s-7b9929247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin />
            </SocialIcon>
            <SocialIcon
              href="https://wa.me/+918547095929"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWhatsapp />
            </SocialIcon>
          </SocialLinks>
        </TextContent>
        <ImageContainer
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.02 }}
        >
          <ProfileImage src="/passport size.jpg" alt="Anandhu S" />
        </ImageContainer>
      </HeroContent>
    </HeroSection>
  )
}

export default Hero 