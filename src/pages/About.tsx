import ScrollAnimation from '../components/ScrollAnimation';
import './About.css';

export default function About() {
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
            <li className="skill-tag">HTML</li>
            <li className="skill-tag">CSS</li>
            <li className="skill-tag">JavaScript</li>
            <li className="skill-tag">React</li>
            <li className="skill-tag">TypeScript</li>
            <li className="skill-tag">Java</li>
            <li className="skill-tag">C#</li>
            <li className="skill-tag">Spring Boot</li>
            <li className="skill-tag">Node.js</li>
            <li className="skill-tag">SQL</li>
            <li className="skill-tag">Docker</li>
            <li className="skill-tag">Git</li>
            <li className="skill-tag">REST APIs</li>
            <li className="skill-tag">Python</li>
            <li className="skill-tag">Visual Studio</li>
            <li className="skill-tag">VS Code</li>
            <li className="skill-tag">GitHub</li>
            <li className="skill-tag">Azure</li>
          </ScrollAnimation>
        </ScrollAnimation>
      </div>
    </section>
  );
}