import { motion } from 'framer-motion';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section">
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h3>
      <div className="columns">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="name">Hello, my name is Henri Tomperi</p>
          <p>
            I'm a Software Development student at Haaga-Helia University of Applied Sciences, fueled by a lifelong love
            for technology and a solid foundation in working with computers. Currently I'm diving into the world of
            full-stack development. Besides coding, you can find me seeking balance on the golf course and the padel
            court. I'm a quick learner, always eager to expand my skillset.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3>My Skills</h3>
          <motion.ul
            className="tag-list"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
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
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}