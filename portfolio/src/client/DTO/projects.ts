// Em /DTO/projects.ts
export interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  image?: string;
  video?: string
  repository: string;
  live: string;
  features: string[];
}

