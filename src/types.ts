export interface Product {
  id: string;
  name: string;
  category: string;
  partNumber: string;
  depthLevel: number;
  material: string;
  loadRating: string;
  sizeRange: string;
  standard: string;
  application: string;
  description: string;
  features: string[];
  image: string;
  cadFileAvailable: boolean;
  specSheetUrl: string;
}

export interface DepthLevel {
  level: number;
  id: string;
  title: string;
  depthMeters: string;
  depthFeet: string;
  tagline: string;
  description: string;
  products: string[];
  color: string;
}

export interface Hotspot {
  id: number;
  number: string;
  title: string;
  category: string;
  xPercent: number;
  yPercent: number;
  shortDesc: string;
  application: string;
  partNumber: string;
  loadRating: string;
}

export interface SolutionApp {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  cadOverlay: string;
  recommendedProducts: string[];
  specs: { label: string; value: string }[];
}

export interface AnatomyPoint {
  id: string;
  title: string;
  depth: string;
  role: string;
  spec: string;
  x: number;
  y: number;
}

export interface CaseStudyData {
  id: string;
  title: string;
  location: string;
  application: string;
  productsUsed: string[];
  scale: string;
  installationTime: string;
  result: string;
  beforeImg: string;
  duringImg: string;
  afterImg: string;
  metrics: { label: string; value: string }[];
}
