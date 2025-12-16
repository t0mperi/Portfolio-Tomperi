import { motion } from 'framer-motion';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero section" id="hero">
      <motion.img
        src="/portfoliokuva.jpg"
        alt="Portrait of Henri Tomperi"
        className="profile-photo"
        loading="lazy"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />
      <div className="hero-text">
        <motion.div
          className="pill"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Full-stack student
        </motion.div>
        <motion.div
          className="hero-box"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h1>Hi, I'm Henri Tomperi</h1>
          <p className="typing">I'm a Software Development student at Haaga-Helia University of Applied Sciences</p>
        </motion.div>

        <motion.div
          className="hero-box"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.a
            className="btn-ghost"
            href="#projects"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.a>
          <motion.a
            className="btn-ghost"
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

