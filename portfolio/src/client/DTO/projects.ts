// Em /DTO/projects.ts
export interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  images?: {
    src: string,
    alt: string
  }[];
  video?: string;
  repository: string;
  live?: string;
  features: string[];
  order: string;
  imgSlider: boolean;
}
