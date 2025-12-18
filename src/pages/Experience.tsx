import './Experience.css';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Building2, Calendar, Target } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';

export default function Experience() {
  const [openEnsto, setOpenEnsto] = useState(true);
  const [openFreelance, setOpenFreelance] = useState(false);

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
                <span>2023 — Present</span>
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
                <div className="xp-impact">
                  <div className="xp-impact-label">
                    <Target size={16} />
                    <span>Impact</span>
                  </div>
                  <ul className="xp-list">
                    <li>Improved modelling turnaround time by reducing manual steps.</li>
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </ScrollAnimation>

        <ScrollAnimation as="article" className="xp-card" delay={0.15}>
          <button
            className="xp-card-head"
            type="button"
            onClick={() => setOpenFreelance((v) => !v)}
            aria-expanded={openFreelance}
          >
            <div className="xp-card-info">
              <div className="xp-company">
                <Building2 size={18} />
                <span>Freelance</span>
              </div>
              <div className="xp-role">Full-stack Developer</div>
              <div className="xp-meta">
                <Calendar size={16} />
                <span>2022 — 2023</span>
              </div>
            </div>
            <motion.div
              className="xp-chevron"
              animate={{ rotate: openFreelance ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown size={20} />
            </motion.div>
          </button>

          <AnimatePresence>
            {openFreelance && (
              <motion.div
                className="xp-body"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ul className="xp-list">
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </ScrollAnimation>
      </div>
    </section>
  );
}
