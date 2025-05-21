import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaInstagram } from 'react-icons/fa'

const ContactSection = styled.section`
  padding: 6rem 0;
`

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: ${props => props.theme.heading};
  margin-bottom: 3rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 60px;
    height: 4px;
    background: ${props => props.theme.primary};
  }
`

const ContactContent = styled.div`
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
`

const ContactText = styled.p`
  color: ${props => props.theme.text};
  font-size: 1.2rem;
  margin-bottom: 3rem;
  line-height: 1.6;
`

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`

const SocialLink = styled(motion.a)`
  color: ${props => props.theme.text};
  font-size: 2rem;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  span {
    font-size: 1rem;
    color: ${props => props.theme.primary};
  }

  &:hover {
    color: ${props => props.theme.primary};
    transform: translateY(-5px);
  }
`

const Contact = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub />,
      url: 'https://github.com/anandhus2255'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/anandhu-s-7b9929247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
    {
      name: 'WhatsApp',
      icon: <FaWhatsapp />,
      url: 'https://wa.me/+918547095929'
    },
    {
      name: 'Email',
      icon: <FaEnvelope />,
      url: 'mailto:anandhuwarriem@gmail.com'
    },
    {
      name: 'Instagram',
      icon: <FaInstagram />,
      url: 'https://www.instagram.com/anxndhu.s?igsh=MTI1Zm1menoyZ2tyMA=='
    }
  ]

  return (
    <ContactSection id="contact">
      <SectionTitle>Get In Touch</SectionTitle>
      <ContactContent>
        <ContactText>
     Feel free to reach out to me through any of these platforms.
        </ContactText>
        <SocialLinks>
          {socialLinks.map((link, index) => (
            <SocialLink
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.icon}
              <span>{link.name}</span>
            </SocialLink>
          ))}
        </SocialLinks>
      </ContactContent>
    </ContactSection>
  )
}

export default Contact 