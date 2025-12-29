import { useRef, type ReactNode } from 'react';
import './Tag.css';

interface TagProps {
  children: ReactNode;
  variant?: 'skill' | 'project';
  className?: string;
  title?: string;
}

export default function Tag({ children, variant = 'skill', className = '' }: TagProps) {
  const tagRef = useRef<HTMLSpanElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (!tagRef.current) return;
    
    const rect = tagRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    tagRef.current.style.setProperty('--mouse-x', `${x}px`);
    tagRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <span 
      ref={tagRef}
      className={`tag tag-${variant} ${className}`.trim()}
      onMouseMove={onMouseMove}
    >
      <span className="tag-content">
        {children}
      </span>
    </span>
  );
}





