import styled from 'styled-components'
import { motion } from 'framer-motion'

const AboutSection = styled.section`
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

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const AboutText = styled.div`
  p {
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
`

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`

const SkillItem = styled(motion.div)`
  background: ${props => props.theme.cardBg};
  padding: 1rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 1rem;

  span {
    color: ${props => props.theme.primary};
  }
`

const About = () => {
  const skills = [
    'React.js',
    'Node.js',
    'Express.js',
    'MySQL',
    'JavaScript',
    'HTML5',
    'CSS3',
    'PHP',
    'AWS',
    'AWS EC2'
  ]

  return (
    <AboutSection id="about">
      <SectionTitle>About Me</SectionTitle>
      <AboutContent>
        <AboutText>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Hello! I'm a MERN stack developer with expertise in building modern web applications.
            I specialize in creating responsive and scalable solutions using React, Node.js, Express,
            and MongoDB. I also deploy and manage production apps hosted on AWS, primarily using EC2.
            My journey in web development has equipped me with a strong foundation in
            both front-end and back-end technologies.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            With experience in PHP and modern JavaScript frameworks, I bring a versatile skill set
            to every project. I'm passionate about creating efficient, maintainable code and
            delivering exceptional user experiences. My focus is on building applications that are
            not only visually appealing but also performant and user-friendly.
          </motion.p>
        </AboutText>
        <SkillsContainer>
          {skills.map((skill, index) => (
            <SkillItem
              key={skill}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <span>▹</span> {skill}
            </SkillItem>
          ))}
        </SkillsContainer>
      </AboutContent>
    </AboutSection>
  )
}

export default About