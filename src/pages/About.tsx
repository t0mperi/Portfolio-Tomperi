import ScrollAnimation from '../components/ScrollAnimation';
import Tag from '../components/Tag';
import './About.css';

export default function About() {
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
          <ScrollAnimation as="ul" className="tag-list" y={0} delay={0.3}>
            {skills.map((skill) => (
              <li key={skill}>
                <Tag variant="skill">{skill}</Tag>
              </li>
            ))}
          </ScrollAnimation>
        </ScrollAnimation>
      </div>
    </section>
  );
}