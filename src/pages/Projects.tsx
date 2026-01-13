import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import Card from '../components/Card';
import Tag from '../components/Tag';
import { PROJECTS } from '../utils/constants';
import './Projects.css';

export default function Projects() {

  return (
    <section id="projects" className="section">
      <ScrollAnimation as="h2" y={30}>
        Projects
      </ScrollAnimation>
      <div className="project-grid">
        {PROJECTS.map((project, index) => (
          <Card
            key={project.title}
            variant="project"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="project-image">
              {'image' in project && project.image ? (
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image-img"
                  loading="lazy"
                />
              ) : (
                <>
                  <span className="project-dot" />
                  <span className="project-dot" />
                  <span className="project-dot" />
                </>
              )}
            </div>
            <div className="project-body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-list">
                {project.tags.map((tag) => (
                  <Tag key={tag} variant="project">{tag}</Tag>
                ))}
              </div>
              {'github' in project && project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-github-link"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={18} />
                  View on GitHub
                </motion.a>
              )}
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}


