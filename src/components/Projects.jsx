import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const ProjectsSection = styled.section`
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`

const ProjectCard = styled(motion.div)`
  background: ${props => props.theme.cardBg};
  border-radius: 4px;
  padding: 2rem;
  position: relative;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`

const ProjectImage = styled.img`
  width: 70%;
  height: 100px;
  object-fit: contain;
  border-radius: 4px;
  margin-bottom: 1.5rem;
  background-color: #ffffff;
  padding: 1rem;
`

const ProjectTitle = styled.h3`
  color: ${props => props.theme.heading};
  font-size: 1.5rem;
  margin-bottom: 1rem;
`

const ProjectDescription = styled.p`
  color: ${props => props.theme.text};
  margin-bottom: 1.5rem;
  line-height: 1.6;
`

const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`

const TechTag = styled.span`
  background: ${props => props.theme.cardBg};
  color: ${props => props.theme.primary};
  padding: 0.25rem 0.75rem;
  border-radius: 3px;
  font-size: 0.9rem;
`

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`

const ProjectLink = styled.a`
  color: ${props => props.theme.text};
  font-size: 1.2rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.theme.primary};
  }
`

const Projects = () => {
  const projects = [
    {
      title: 'Modern Health',
      description: 'A clone of a modern healthcare platform built with React. Features include responsive design and user interface components.',
      image: '/modernhealth.jpg',
      tech: ['React'],
      github: 'https://github.com/anandhus2255/modern-health',
      live: 'https://anandhu-modernhealth.netlify.app'
    },
    {
      title: 'Swathanthra',
      description: 'A fintech application with NFC-integrated ID cards for seamless campus payments. Features include contactless payments at campus facilities, fee management, and automated receipt generation for educational institutions.',
      image: '/swathanthra.jpg',
      tech: ['React', 'Node.js'],
    },
    {
      title: 'Kuvil',
      description: 'A client project for an instant Avil milk products delivery website. Features include product listings and responsive design. Built with React.',
      image: '/kuvil.jpg',
      tech: ['React'],
      github: 'https://github.com/anandhus2255/kuvil',
      live: 'https://kuvil.in'
    },
    {
      title: 'Portfolio',
      description: 'A personal portfolio website showcasing my projects and skills. Built with React and styled-components.',
      image: '/portfolio.jpg',
      tech: ['React'],
      github: 'https://github.com/anandhus2255/portfolio',
      live: 'https://anandhu-s.netlify.app'
    },
    {
      title: 'Petra',
      description: 'An e-commerce platform for pet products. Features include product catalog, shopping cart, and user-friendly interface for pet owners to shop for their pets.',
      image: '/petra.jpg',
      tech: ['React', 'Node.js'],
    },
    {
      title: 'Flyverse',
      description: 'A comprehensive platform for study abroad consulting. Features include university listings, application guidance, and student testimonials to help students navigate their international education journey.',
      image: '/flyverse.jpg',
      tech: ['React'],
    }
  ]

  return (
    <ProjectsSection id="projects">
      <SectionTitle>Featured Projects</SectionTitle>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectTech>
              {project.tech.map(tech => (
                <TechTag key={tech}>{tech}</TechTag>
              ))}
            </ProjectTech>
            <ProjectLinks>
              {project.github && (
                <ProjectLink
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </ProjectLink>
              )}
              {project.live && (
                <ProjectLink
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt />
                </ProjectLink>
              )}
            </ProjectLinks>
          </ProjectCard>
        ))}
      </ProjectsGrid>
      <SectionTitle style={{ marginTop: '70px' }}>Hosted Projects</SectionTitle>
      <ProjectsGrid>
        {[
          {
            title: 'Cellar Innovative Developers - Official Website',
            description: 'Corporate site for a software development company with service pages and contact flow.',
            tech: ['Production', 'Corporate'],
            live: 'https://thecid.in'
          },
          {
            title: 'Flyverse',
            description: 'A client project for an instant Avil milk products delivery website. Features include product listings and responsive design. Built with React.',
            tech: ['Study Abroad', 'Travels'],
            live: 'https://www.flyverseoverseas.com/'
          },
          {
            title: 'MES Mampad Autonomous College - QP Printing Software',
            description: 'Question paper printing workflow app hosted using AWS EC2 for college Question Paper Printing.',
            tech: ['AWS EC2', 'Internal Tool']
                    },
          {
            title: 'Aadhi Naturals - E-commerce Website',
            description: 'E-commerce storefront for natural products with clean product-first design. Hosted using AWS EC2.',
            tech: ['E-commerce', 'Production', 'AWS EC2'],
            live: 'https://aadhinaturals.in'
          },
          {
            title: 'Aeromate Travels - Website',
            description: 'Travel services website with offerings overview and contact actions.',
            tech: ['Business', 'Production'],
            live: 'http://aeromatetravels.com/'
          },
          {
            title: 'Personal Portfolio',
            description: 'My portfolio showcasing projects, skills, and contact information.',
            tech: ['Portfolio', 'Production'],
            live: 'https://anandhu-s.vercel.app/'
          }
        ].map((item, index) => (
          <ProjectCard
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <ProjectTitle>{item.title}</ProjectTitle>
            {item.description && (
              <ProjectDescription>{item.description}</ProjectDescription>
            )}
            {item.tech && (
              <ProjectTech>
                {item.tech.map(tag => (
                  <TechTag key={tag}>{tag}</TechTag>
                ))}
              </ProjectTech>
            )}
            <ProjectLinks>
              <ProjectLink
                href={item.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${item.title}`}
              >
                <FaExternalLinkAlt />
              </ProjectLink>
            </ProjectLinks>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  )
}

export default Projects