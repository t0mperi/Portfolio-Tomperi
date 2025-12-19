import React from 'react';
import ScrollAnimation from '../components/ScrollAnimation';
import Tag from '../components/Tag';
import './About.css';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiSpring,
  SiNodedotjs,
  SiMysql,
  SiDocker,
  SiGit,
  SiPython,
  SiGithub,
} from 'react-icons/si';
import { FaJava, FaMicrosoft, FaCode, FaCloud } from 'react-icons/fa';
import { SiSharp } from 'react-icons/si';

export default function About() {
  const skillIcons: Record<string, React.ReactElement> = {
    'HTML': <SiHtml5 />,
    'CSS': <SiCss3 />,
    'JavaScript': <SiJavascript />,
    'React': <SiReact />,
    'TypeScript': <SiTypescript />,
    'Java': <FaJava />,
    'C#': <SiSharp />,
    'Spring Boot': <SiSpring />,
    'Node.js': <SiNodedotjs />,
    'SQL': <SiMysql />,
    'Docker': <SiDocker />,
    'Git': <SiGit />,
    'Python': <SiPython />,
    'Visual Studio': <FaMicrosoft />,
    'VS Code': <FaCode />,
    'GitHub': <SiGithub />,
    'Azure': <FaCloud />,
  };

  const skills = [
    'HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Java', 'C#', 'Spring Boot',
    'Node.js', 'SQL', 'Docker', 'Git', 'REST APIs', 'Python', 'Visual Studio',
    'VS Code', 'GitHub', 'Azure'
  ];

  return (
    <section id="about" className="section">
      <ScrollAnimation as="h3" y={30}>
        About Me
      </ScrollAnimation>
      <div className="columns">
        <ScrollAnimation x={-30} delay={0}>
          <p className="name">Hello, my name is Henri Tomperi</p>
          <p>
            I'm a Software Development student at Haaga-Helia University of Applied Sciences, fueled by a lifelong love
            for technology and a solid foundation in working with computers. Currently I'm diving into the world of
            full-stack development. Besides coding, you can find me seeking balance on the golf course and the padel
            court. I'm a quick learner, always eager to expand my skillset.
          </p>
        </ScrollAnimation>
        <ScrollAnimation x={30} delay={0.2}>
          <h3>My Skills</h3>
          <ScrollAnimation as="div" className="tag-list" y={0} delay={0.3}>
            {skills.map((skill) => (
              <Tag key={skill} variant="skill">
                {skillIcons[skill] && <span className="skill-icon">{skillIcons[skill]}</span>}
                {skill}
              </Tag>
            ))}
          </ScrollAnimation>
        </ScrollAnimation>
      </div>
    </section>
  );
}