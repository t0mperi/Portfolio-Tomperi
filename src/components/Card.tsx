import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import './Card.css';

interface CardProps {
  children: ReactNode;
  variant?: 'default' | 'project' | 'experience' | 'hero';
  className?: string;
  hover?: boolean;
  initial?: { opacity: number; y: number };
  whileInView?: { opacity: number; y: number };
  viewport?: { once: boolean; margin: string };
  transition?: { duration: number; delay?: number };
  whileHover?: { y: number };
}

export default function Card({ 
  children, 
  variant = 'default',
  className = '',
  hover = true,
  initial,
  whileInView,
  viewport,
  transition,
  whileHover
}: CardProps) {
  const baseClasses = `card card-${variant} ${className}`.trim();

  if (initial || whileInView) {
    return (
      <motion.div
        className={baseClasses}
        initial={initial}
        whileInView={whileInView}
        viewport={viewport}
        transition={transition}
        whileHover={hover && whileHover ? whileHover : undefined}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={baseClasses}>
      {children}
    </div>
  );
}

