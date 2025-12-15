import './Experience.css';

import { useState } from 'react';

export default function Experience() {
  const [openEnsto, setOpenEnsto] = useState(true);
  const [openFreelance, setOpenFreelance] = useState(false);

  return (
    <section id="experience" className="section">
      <div className="xp-header">
        <h2>Experience</h2>
      </div>

      <div className="xp-stack">
        <article className="xp-card">
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
            <div className={`xp-chevron ${openEnsto ? 'open' : ''}`}>▼</div>
          </button>

          {openEnsto && (
            <div className="xp-body">
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
            </div>
          )}
        </article>

        <article className="xp-card">
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
            <div className={`xp-chevron ${openFreelance ? 'open' : ''}`}>▼</div>
          </button>

          {openFreelance && (
            <div className="xp-body">
              <ul className="xp-list">
              </ul>
            </div>
          )}
        </article>
      </div>
    </section>
  );
}
