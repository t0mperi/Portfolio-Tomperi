

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
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
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
          </article>
        ))}
      </div>
    </section>
  )
}


