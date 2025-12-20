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
              <span className="project-dot" />
              <span className="project-dot" />
              <span className="project-dot" />
            </div>
            <div className="project-body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-list">
                {project.tags.map((tag) => (
                  <Tag key={tag} variant="project">{tag}</Tag>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}


