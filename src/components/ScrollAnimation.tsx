import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function ScrollAnimation({ children, delay = 0, className }: ScrollAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

