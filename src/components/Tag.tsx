import type { ReactNode } from 'react';
import './Tag.css';

interface TagProps {
  children: ReactNode;
  variant?: 'skill' | 'project';
  className?: string;
}

export default function Tag({ children, variant = 'skill', className = '' }: TagProps) {
  return (
    <span className={`tag tag-${variant} ${className}`.trim()}>
      {children}
    </span>
  );
}





