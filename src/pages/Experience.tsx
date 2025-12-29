import './Experience.css';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Building2, Calendar } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import Tag from '../components/Tag';

export default function Experience() {
  const [openEnsto, setOpenEnsto] = useState(true);
  const [openVirnex, setOpenVirnex] = useState(false);

  const enstoSkills = ['C#', 'SQL', 'Git', 'Visual Studio', 'Azure'];
  const virnexSkills = ['React', 'TypeScript', 'Git', 'VS Code', 'Devops'];

  return (
    <section id="experience" className="section">
      <ScrollAnimation className="xp-header" y={30}>
        <h2>Experience</h2>
      </ScrollAnimation>

      <div className="xp-stack">
        <ScrollAnimation as="article" className="xp-card" delay={0}>
          <button
            className="xp-card-head"
            type="button"
            onClick={() => setOpenEnsto((v) => !v)}
            aria-expanded={openEnsto}
          >
            <div className="xp-card-info">
              <div className="xp-company">
                <Building2 size={18} />
                <span>Ensto Legrand</span>
              </div>
              <div className="xp-role">Developer · LCA tooling</div>
              <div className="xp-meta">
                <Calendar size={16} />
                <span>2023 — 2025</span>
              </div>
            </div>
            <motion.div
              className="xp-chevron"
              animate={{ rotate: openEnsto ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown size={20} />
            </motion.div>
          </button>

          <AnimatePresence>
            {openEnsto && (
              <motion.div
                className="xp-body"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ul className="xp-list">
                  <li>Built an application to support life cycle assessment modelling.</li>
                  <li>Designed and implemented a SQL Server database for the app.</li>
                </ul>
                <div className="xp-skills">
                  <div className="xp-skills-label">Technologies Used</div>
                  <div className="tag-list">
                    {enstoSkills.map((skill) => (
                      <Tag key={skill} variant="skill">
                        {skill}
                      </Tag>
                    ))}
                  </div>
                </div>
                <div className="xp-impact">
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </ScrollAnimation>

        <ScrollAnimation as="article" className="xp-card" delay={0.15}>
          <button
            className="xp-card-head"
            type="button"
            onClick={() => setOpenVirnex((v) => !v)}
            aria-expanded={openVirnex}
          >
            <div className="xp-card-info">
              <div className="xp-company">
                <Building2 size={18} />
                <span>Virnex Group Oy</span>
              </div>
              <div className="xp-role">Trainee</div>
              <div className="xp-meta">
                <Calendar size={16} />
                <span>April 2025 — January 2026</span>
              </div>
            </div>
            <motion.div
              className="xp-chevron"
              animate={{ rotate: openVirnex ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown size={20} />
            </motion.div>
          </button>

          <AnimatePresence>
            {openVirnex && (
              <motion.div
                className="xp-body"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ul className="xp-list">
                  <li>Worked in a team to build a web application for a client.</li>
                </ul>
                <div className="xp-skills">
                  <div className="xp-skills-label">Technologies Used</div>
                  <div className="tag-list">
                    {virnexSkills.map((skill) => (
                      <Tag key={skill} variant="skill">
                        {skill}
                      </Tag>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </ScrollAnimation>
      </div>
    </section>
  );
}
