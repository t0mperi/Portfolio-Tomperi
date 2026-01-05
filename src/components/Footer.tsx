import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';
import { SOCIAL_LINKS } from '../utils/constants';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <ScrollAnimation className="footer-links" y={20}>
          <motion.a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noreferrer"
            className="btn"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={18} />
            GitHub
          </motion.a>
          <motion.a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noreferrer"
            className="btn"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin size={18} />
            LinkedIn
          </motion.a>
          <motion.a
            href={`mailto:${SOCIAL_LINKS.email}`}
            className="btn"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={18} />
            Email
          </motion.a>
        </ScrollAnimation>
        <ScrollAnimation className="footer-text" y={0} delay={0.2}>
          <p>Built with React, TypeScript and Vite</p>
        </ScrollAnimation>
      </div>
    </footer>
  )
}

