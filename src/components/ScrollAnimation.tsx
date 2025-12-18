import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: 'div' | 'h2' | 'h3' | 'article' | 'section' | 'ul';
  x?: number;
  y?: number;
}

export default function ScrollAnimation({ 
  children, 
  delay = 0, 
  className = '',
  as: Component = 'div',
  x = 0,
  y = 50
}: ScrollAnimationProps) {
  const motionComponents = {
    div: motion.div,
    h2: motion.h2,
    h3: motion.h3,
    article: motion.article,
    section: motion.section,
    ul: motion.ul,
  };

  const MotionComponent = motionComponents[Component];

  return (
    <MotionComponent
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </MotionComponent>
  );
}

