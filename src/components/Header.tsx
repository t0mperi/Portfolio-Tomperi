import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { useEffect, useState } from 'react';
import './Header.css';

export default function Header() {
  const [activeSection, setActiveSection] = useState('');

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

  const handleLinkClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, '', href);
    }
  };

  return (
    <header className="site-header">
      <div className="brand">
        <a href="#hero" className="brand-link" aria-label="Home">
          <span className="brand-name">HENRI TOMPERI</span>
        </a>
      </div>
      <NavigationMenu.Root className="nav-root">
        <NavigationMenu.List className="nav">
          <NavigationMenu.Item>
            <NavigationMenu.Link
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              href="#about"
              onSelect={(e) => {
                e.preventDefault();
                handleLinkClick('#about');
              }}
            >
              About
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Link
              className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
              href="#experience"
              onSelect={(e) => {
                e.preventDefault();
                handleLinkClick('#experience');
              }}
            >
              Experience
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Link
              className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
              href="#projects"
              onSelect={(e) => {
                e.preventDefault();
                handleLinkClick('#projects');
              }}
            >
              Projects
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Link
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              href="#contact"
              onSelect={(e) => {
                e.preventDefault();
                handleLinkClick('#contact');
              }}
            >
              Contact
            </NavigationMenu.Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </header>
  )
}
