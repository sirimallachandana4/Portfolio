/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Skill {
  name: string;
  category: 'proficient' | 'familiar';
  iconName: string; // Used to dynamically map Lucide icons or devicon classes
  level: number; // 0-100 percentage for custom progress/strength bars
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  features: string[];
  demoUrl?: string;
  demoNote?: string;
  githubUrl?: string;
  status: 'Completed' | 'In Progress';
  progress?: number; // percentage progress, e.g. 80 for e-commerce
  year: string;
}

export interface SocialLink {
  platform: 'GitHub' | 'LinkedIn' | 'Email';
  url: string;
  label: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readingTime: string;
  tags: string[];
}

