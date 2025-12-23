import { useEffect, useRef } from 'react';
import './MouseGradient.css';

interface MouseGradientProps {
  children: React.ReactNode;
  className?: string;
}

export default function MouseGradient({ children, className = '' }: MouseGradientProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const gradient = gradientRef.current;
    if (!container || !gradient) return;

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      gradient.style.setProperty('--mouse-x', `${x}px`);
      gradient.style.setProperty('--mouse-y', `${y}px`);
    };

    const handleMouseLeave = () => {
      // Reset to center when mouse leaves
      if (gradient) {
        gradient.style.setProperty('--mouse-x', '50%');
        gradient.style.setProperty('--mouse-y', '50%');
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div ref={containerRef} className={`mouse-gradient-container ${className}`.trim()}>
      <div ref={gradientRef} className="mouse-gradient" aria-hidden="true"></div>
      {children}
    </div>
  );
}

