import './Experience.css';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Experience() {
  const [openEnsto, setOpenEnsto] = useState(true);
  const [openFreelance, setOpenFreelance] = useState(false);

  return (
    <section id="experience" className="section">
      <motion.div
        className="xp-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>Experience</h2>
      </motion.div>

      <div className="xp-stack">
        <motion.article
          className="xp-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <button
            className="xp-card-head"
            type="button"
            onClick={() => setOpenEnsto((v) => !v)}
            aria-expanded={openEnsto}
          >
            <div>
              <div className="xp-company">Ensto Legrand</div>
              <div className="xp-role">Developer · LCA tooling</div>
              <div className="xp-meta">
                <span>2023 — Present</span>
              </div>
            </div>
            <motion.div
              className={`xp-chevron ${openEnsto ? 'open' : ''}`}
              animate={{ rotate: openEnsto ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              ▼
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
                  <div className="xp-impact-label">Impact</div>
                  <ul className="xp-list">
                    <li>Improved modelling turnaround time by reducing manual steps.</li>
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.article>

        <motion.article
          className="xp-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <button
            className="xp-card-head"
            type="button"
            onClick={() => setOpenFreelance((v) => !v)}
            aria-expanded={openFreelance}
          >
            <div>
              <div className="xp-company">Freelance</div>
              <div className="xp-role">Full-stack Developer</div>
              <div className="xp-meta">
                <span>2022 — 2023</span>
              </div>
            </div>
            <motion.div
              className={`xp-chevron ${openFreelance ? 'open' : ''}`}
              animate={{ rotate: openFreelance ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              ▼
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
        </motion.article>
      </div>
    </section>
  );
}
