/**
 * Type definitions and interfaces
 */

import type { ReactElement } from 'react';

export interface NavigationLink {
  href: string;
  label: string;
}

export interface SocialLink {
  github?: string;
  linkedin?: string;
  email?: string;
}

export interface Skill {
  name: string;
  icon?: ReactElement;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: {
    start: string;
    end?: string;
  };
  description: string[];
  impact?: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface Theme {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export type CardVariant = 'default' | 'project' | 'hero';

export type ButtonVariant = 'ghost' | 'primary' | 'submit';

export type TagVariant = 'skill' | 'project';

export interface AnimationProps {
  initial?: { opacity: number; y: number };
  whileInView?: { opacity: number; y: number };
  viewport?: { once: boolean; margin: string };
  transition?: { duration: number; delay?: number };
  whileHover?: { y: number };
}

