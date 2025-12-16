import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <motion.div
          className="footer-links"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.a
            href="https://github.com/t0mperi"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={18} />
            GitHub
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/henri-tomperi-8a2a0229b/"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin size={18} />
            LinkedIn
          </motion.a>
          <motion.a
            href="mailto:henritomperi97@gmail.com"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={18} />
            Email
          </motion.a>
        </motion.div>
        <motion.div
          className="footer-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>© 2024 Henri Tomperi. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

