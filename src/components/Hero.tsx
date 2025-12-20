import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Button from './Button';
import Card from './Card';
import './Hero.css';

export default function Hero() {
  const fullText = "I'm a Software Development student at Haaga-Helia University of Applied Sciences";
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (displayedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false);
    }
  }, [displayedText, fullText]);

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
          initial={{ opacity: 1, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Full-stack student
        </motion.div>
        <Card
          variant="hero"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          hover={false}
        >
          <h1>Hi, I'm Henri Tomperi</h1>
          <p className="typing">
            {displayedText}
            {isTyping && <span className="typing-cursor">|</span>}
          </p>
        </Card>

        <Card
          variant="hero"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
          hover={false}
          className="hero-ctas"
        >
          <Button variant="ghost" href="#projects">
            View Projects
          </Button>
          <Button variant="ghost" href="#contact">
            Contact
          </Button>
        </Card>
      </div>
    </section>
  );
}

