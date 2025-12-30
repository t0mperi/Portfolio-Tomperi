import ScrollAnimation from '../components/ScrollAnimation';
import Tag from '../components/Tag';
import { SKILLS, APP_CONFIG } from '../utils/constants';
export default function About() {

  return (
    <section id="about" className="section">
      <ScrollAnimation as="h3" y={30}>
        About Me
      </ScrollAnimation>
      <div className="about-content">
        <ScrollAnimation x={-30} delay={0}>
          <p className="name">Hello, my name is {APP_CONFIG.name}</p>
          <p>
            I'm a Software Development student at Haaga-Helia University of Applied Sciences, fueled by a lifelong love
            for technology and a solid foundation in working with computers. Currently I'm diving into the world of
            full-stack development. Besides coding, you can find me seeking balance on the golf course and the padel
            court. I'm a quick learner, always eager to expand my skillset.
          </p>
        </ScrollAnimation>
        <ScrollAnimation x={30} delay={0.2}>
          <ScrollAnimation as="div" className="tag-list" y={0} delay={0.3}>
            {SKILLS.map((skill) => (
              <Tag key={skill} variant="skill" title={skill}>
                {skill}
              </Tag>
            ))}
          </ScrollAnimation>
        </ScrollAnimation>
      </div>
    </section>
  );
}