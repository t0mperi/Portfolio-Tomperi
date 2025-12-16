
import { motion } from 'framer-motion';
import './Projects.css';

export default function Projects() {
  const projects = [
    {
      title: 'Portfolio',
      description: 'Personal site showcasing projects, experience, and skills.',
      tags: ['React', 'TypeScript', 'Vite'],
    },
    {
      title: 'LCA Helper',
      description: 'Internal tool to streamline life cycle assessment modeling workflows.',
      tags: ['Node.js', 'SQL Server', 'Express'],
    },
    {
      title: 'Soon™',
      description: 'More projects coming soon. Stay tuned!',
      tags: ['Design', 'API', 'Cloud'],
    },
  ];

  return (
    <section id="projects" className="section">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            className="project-card"
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
              <ul className="tag-list">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}


