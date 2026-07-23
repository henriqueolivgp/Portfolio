// Em /DTO/projects.ts
export interface Project {
  id: number;
  name: string;
  badge: {
    web?: boolean
    mobile?: boolean
    front?: boolean,
    back?: boolean,
  }
  description: string;
  technologies: string[];
  images?: {
    src: string,
    alt: string
  }[];
  video?: string;
  repository: string;
  live?: string | null;
  features: string[];
  order: string;
  imgSlider: boolean;
}
