// Fix: Import `ReactNode` type from 'react' to resolve `Cannot find namespace 'JSX'` error.
import type { ReactNode } from 'react';

export interface Project {
  title: string;
  image: string;
  category: string;
  description: string;
  githubUrl: string;
  liveUrl: string;
}

// Fix: Add and export the Skill interface.
export interface Skill {
  name: string;
  icon: ReactNode;
}