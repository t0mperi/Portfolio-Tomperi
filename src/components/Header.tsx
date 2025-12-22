import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { useEffect, useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { NAVIGATION_LINKS } from '../utils/constants';
import { scrollToElement } from '../utils/helpers';
import './Header.css';

export default function Header() {
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const navRef = useRef<HTMLUListElement>(null);
  const decorRef = useRef<HTMLSpanElement>(null);

  const setDecorPosition = useCallback((targetElement: HTMLElement | null) => {
    if (!targetElement || !decorRef.current || !navRef.current) return;

    const navRect = navRef.current.getBoundingClientRect();
    const targetRect = targetElement.getBoundingClientRect();

    const top = targetRect.top - navRect.top + 'px';
    const left = targetRect.left - navRect.left + 'px';
    const width = targetRect.width + 'px';
    const height = targetRect.height + 'px';

    decorRef.current.style.top = top;
    decorRef.current.style.left = left;
    decorRef.current.style.width = width;
    decorRef.current.style.height = height;
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!navRef.current) return;

    if (activeSection) {
      const activeLink = navRef.current.querySelector(`a[href="#${activeSection}"], [href="#${activeSection}"]`) as HTMLElement;
      if (activeLink) {
        setTimeout(() => setDecorPosition(activeLink), 0);
      }
    } else {
      const firstLink = navRef.current.querySelector('a, [role="link"]') as HTMLElement;
      if (firstLink) {
        setTimeout(() => setDecorPosition(firstLink), 0);
      }
    }
  }, [activeSection, setDecorPosition]);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (!navRef.current) return;
        const targetLink = activeSection 
          ? navRef.current.querySelector(`a[href="#${activeSection}"], [href="#${activeSection}"]`) as HTMLElement
          : navRef.current.querySelector('a, [role="link"]') as HTMLElement;
        if (targetLink) {
          setDecorPosition(targetLink);
        }
      }, 250);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, [activeSection, setDecorPosition]);

  const handleLinkClick = (href: string, event?: React.MouseEvent<HTMLElement>) => {
    scrollToElement(href);
    setIsMobileMenuOpen(false);
    
    // Position decorator on the clicked link
    if (event?.currentTarget) {
      setTimeout(() => {
        setDecorPosition(event.currentTarget);
      }, 0);
    }
  };

  return (
    <header className="site-header">
      <div className="brand">
        <a href="#hero" className="brand-link" aria-label="Home">
          <span className="brand-name">HENRI TOMPERI</span>
        </a>
      </div>
      <NavigationMenu.Root className="nav-root desktop-nav">
        <NavigationMenu.List className="nav" ref={navRef}>
          <span ref={decorRef} className="nav-decor" aria-hidden="true"></span>
          {NAVIGATION_LINKS.map((link) => (
            <NavigationMenu.Item key={link.href}>
              <NavigationMenu.Link
                className={`btn nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                href={link.href}
                onSelect={(e) => {
                  e.preventDefault();
                  const target = e.currentTarget as HTMLElement;
                  handleLinkClick(link.href, { currentTarget: target } as React.MouseEvent<HTMLElement>);
                }}
              >
                {link.label}
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          ))}
        </NavigationMenu.List>
      </NavigationMenu.Root>

      <button
        className="btn theme-toggle"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        {theme === 'light' ? '🌙' : '☀️'}
      </button>

      <button
        className="btn mobile-menu-button"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
        aria-expanded={isMobileMenuOpen}
      >
        <motion.div
          className="hamburger-container"
          animate={isMobileMenuOpen ? 'open' : 'closed'}
        >
          <motion.span
            className="hamburger-line top"
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: -45, y: 8 }
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="hamburger-line middle"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 }
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="hamburger-line bottom"
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: 45, y: -8 }
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </button>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="mobile-menu-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.nav
              className="mobile-menu"
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ duration: 0.5, ease: [0.55, 0, 0.1, 1] }}
            >
              <ul className="mobile-menu-list">
                {NAVIGATION_LINKS.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ 
                      delay: 0.2 + (index * 0.1),
                      duration: 0.4,
                      ease: [0.55, 0, 0.1, 1]
                    }}
                  >
                    <a
                      href={link.href}
                      className={`mobile-nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(link.href);
                      }}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
