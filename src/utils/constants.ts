/**
 * Application constants and configuration
 */

export const APP_CONFIG = {
  name: 'Henri Tomperi',
  title: 'Portfolio',
  description: 'Software Development student portfolio',
  email: 'henritomperi97@gmail.com',
  location: 'Järvenpää, Finland',
} as const;

export const NAVIGATION_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
] as const;

export const SOCIAL_LINKS = {
  github: 'https://github.com/t0mperi',
  linkedin: 'https://www.linkedin.com/in/henri-tomperi-8a2a0229b/',
  email: 'henritomperi97@gmail.com',
} as const;

export const SKILLS = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'TypeScript',
  'Java',
  'C#',
  'Spring Boot',
  'Node.js',
  'SQL',
  'Docker',
  'Git',
  'REST APIs',
  'Python',
  'Visual Studio',
  'VS Code',
  'GitHub',
  'Azure',
] as const;

export const PROJECTS = [
  {
    title: 'Portfolio',
    description: 'Personal site showcasing projects, experience, and skills.',
    tags: ['React', 'TypeScript', 'Vite'],
    github: 'https://github.com/t0mperi/Portfolio-Tomperi',
    image: '/portfolioproject.png',
  },
  {
    title: 'Full login and password reset',
    description: 'Full login and password reset functionality for a web application.',
    tags: ['Java', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'Thymeleaf', 'Maven'],
    github: 'https://github.com/t0mperi/full-login-register-and-password-reset',
    image: '/loginproject.png',
  },
  {
    title: 'Soon™',
    description: 'More projects coming soon. Stay tuned!',
    tags: ['Design', 'API', 'Cloud'],
  },
] as const;

