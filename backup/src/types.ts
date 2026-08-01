export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  productFamily?: string;
  partNumber: string;
  depthLevel: number;
  material: string;
  loadRating: string;
  sizeRange: string;
  sizes?: string[];
  standard: string;
  application: string;
  description: string;
  features: string[];
  image: string;
  cadFileAvailable: boolean;
  specSheetUrl: string;
  finish?: string;
  weight?: string;
  industry?: string;
  workflowStep?: 'EXCAVATE' | 'PROTECT' | 'INSTALL' | 'CONTROL' | 'ACCESS' | 'BACKFILL' | 'RESTORE';
}

export interface PrimaryCategory {
  number: string;
  id: string;
  title: string;
  shortName: string;
  tagline: string;
  description: string;
  subcategories: Subcategory[];
  image: string;
  hotspotIndex: number;
}

export interface Subcategory {
  id: string;
  name: string;
  description: string;
  image: string;
  productFamilies: string[];
}

export interface Industry {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  relevantCategories: string[];
  specs: { label: string; value: string }[];
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
  categoryId: string;
  xPercent: number;
  yPercent: number;
  shortDesc: string;
  application: string;
  partNumber: string;
  loadRating: string;
  sampleProducts: string[];
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

export interface QuoteItem {
  id: string;
  productName: string;
  partNumber: string;
  quantity: number;
  sizeConfig: string;
}
