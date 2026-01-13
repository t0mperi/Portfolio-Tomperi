import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Button from './Button';
import Card from './Card';
import './Hero.css';

export default function Hero() {
  const lines = [
    "my name is Henri Tomperi",
    "im 28 years old software development student",
    "at Haaga-Helia University of Applied Sciences"
  ];
  const [displayedText, setDisplayedText] = useState('');
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isErasing, setIsErasing] = useState(false);

  useEffect(() => {
    if (currentLineIndex < lines.length) {
      const currentLine = lines[currentLineIndex];
      
      if (!isErasing) {
        if (currentCharIndex < currentLine.length) {
          const timeout = setTimeout(() => {
            setDisplayedText(currentLine.slice(0, currentCharIndex + 1));
            setCurrentCharIndex(prev => prev + 1);
          }, 50);
          return () => clearTimeout(timeout);
        } else {
          const timeout = setTimeout(() => {
            setIsErasing(true);
          }, 2000);
          return () => clearTimeout(timeout);
        }
      } else {
        if (currentCharIndex > 0) {
          const timeout = setTimeout(() => {
            setDisplayedText(currentLine.slice(0, currentCharIndex - 1));
            setCurrentCharIndex(prev => prev - 1);
          }, 30);
          return () => clearTimeout(timeout);
        } else {
          const timeout = setTimeout(() => {
            setIsErasing(false);
            setCurrentLineIndex(prev => (prev + 1) % lines.length);
            setCurrentCharIndex(0);
            setDisplayedText('');
          }, 300);
          return () => clearTimeout(timeout);
        }
      }
    }
  }, [currentCharIndex, currentLineIndex, isErasing, lines]);

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
          <h1>Hello</h1>
          <p className="typing">
            {displayedText}
            <span className="typing-cursor">|</span>
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

