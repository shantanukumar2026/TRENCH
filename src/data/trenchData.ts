import { Product, PrimaryCategory, Industry, DepthLevel, Hotspot, SolutionApp, AnatomyPoint, CaseStudyData } from '../types';

// Distinct Local U.S. Photography Assets from G:\bens sir team\trench-everything\src\assets\images
const img01 = '/images/assets/gettyimages-1479422287-1024x1024.jpg';
const img02 = '/images/assets/gettyimages-2167164749-1024x1024.jpg';
const img03 = '/images/assets/gettyimages-2223963188-1024x1024.jpg';
const img04 = '/images/assets/gettyimages-2269261031-1024x1024.jpg';
const img05 = '/images/assets/gettyimages-2158727734-1024x1024.jpg';

const imgProd1 = '/images/assets/gettyimages-1479422287-1024x1024.jpg';
const imgProd2 = '/images/assets/gettyimages-2167164749-1024x1024.jpg';
const imgProd3 = '/images/assets/gettyimages-2223963188-1024x1024.jpg';
const imgProd4 = '/images/assets/gettyimages-2269261031-1024x1024.jpg';
const imgProd5 = '/images/assets/gettyimages-2158727734-1024x1024.jpg';

export const PRIMARY_CATEGORIES: PrimaryCategory[] = [
  {
    number: '01',
    id: 'safety-protection',
    title: 'STEEL TRENCH SHIELDS',
    shortName: 'Steel Shields',
    tagline: 'OSHA 1926 Subpart P Certified Double-Wall Steel Boxes',
    description: 'Heavy steel trench boxes engineered for high-depth soil pressure resistance and worker safety.',
    image: img01,
    hotspotIndex: 1,
    subcategories: [
      { id: 'trench-boxes', name: 'Steel Trench Boxes', description: 'Double-walled steel trench boxes for high-depth trench protection.', image: img01, productFamilies: ['Steel Trench Box'] }
    ]
  },
  {
    number: '02',
    id: 'hydraulic-shoring',
    title: 'HYDRAULIC TRENCH SHORING',
    shortName: 'Hydraulic Shores',
    tagline: 'Hand-Pumped 6061-T6 Aluminum Hydraulic Rails',
    description: 'Hand-pumped aluminum hydraulic shores installed 100% from above ground for crew protection.',
    image: img02,
    hotspotIndex: 2,
    subcategories: [
      { id: 'hydraulic-shores', name: 'Hydraulic Shores', description: 'Aluminum hydraulic shores.', image: img02, productFamilies: ['Hydraulic Shore'] }
    ]
  },
  {
    number: '03',
    id: 'slide-rail',
    title: 'MODULAR SLIDE RAIL SYSTEMS',
    shortName: 'Slide Rail',
    tagline: 'Dig-and-Push Modular Trench Shoring Panels',
    description: 'Modular dig-and-push trench shoring systems replacing traditional driven sheet piling.',
    image: img03,
    hotspotIndex: 3,
    subcategories: [
      { id: 'slide-rail-panels', name: 'Slide Rail Panels', description: 'Modular slide rail panels.', image: img03, productFamilies: ['Slide Rail System'] }
    ]
  },
  {
    number: '04',
    id: 'trench-access-safety',
    title: 'TRENCH ACCESS & SAFETY LADDERS',
    shortName: 'Access Ladders',
    tagline: 'OSHA Compliant Extendable Aluminum Trench Ladders',
    description: 'OSHA compliant extendable access ladders with 36" walk-through handrails.',
    image: img04,
    hotspotIndex: 4,
    subcategories: [
      { id: 'trench-ladders', name: 'Trench Access Ladders', description: 'Extendable aluminum trench ladders.', image: img04, productFamilies: ['Trench Ladder'] }
    ]
  },
  {
    number: '05',
    id: 'trench-road-plates',
    title: 'STEEL TRENCH ROAD PLATES',
    shortName: 'Road Plates',
    tagline: 'AASHTO H-20 Traffic-Rated Steel Crossing Plates',
    description: 'Heavy structural steel road plates with center flush-mount lifting nut holes and anti-skid coating.',
    image: img05,
    hotspotIndex: 5,
    subcategories: [
      { id: 'road-plates', name: 'Steel Road Plates', description: 'AASHTO H-20 steel road plates.', image: img05, productFamilies: ['Road Plate'] }
    ]
  }
];

export const HOTSPOTS: Hotspot[] = [
  { id: 1, number: '01', title: 'Steel Trench Shields', category: 'Shoring & Shielding', categoryId: 'safety-protection', xPercent: 32, yPercent: 48, shortDesc: 'OSHA 1926 Subpart P double-walled steel trench boxes.', application: 'Deep Trench Excavation', partNumber: 'TU-SB-824-HD', loadRating: 'OSHA Subpart P Certified', sampleProducts: ['TU-8000 Steel Trench Box'] },
  { id: 2, number: '02', title: 'Hydraulic Trench Shoring', category: 'Aluminum Shoring', categoryId: 'hydraulic-shoring', xPercent: 20, yPercent: 28, shortDesc: 'Hand-pumped aluminum hydraulic shores for trench walls.', application: 'Spot Repairs & Trench Taps', partNumber: 'TU-HS-8FT-AL', loadRating: '3,500 PSI Max Rating', sampleProducts: ['TU-HydroLite Hydraulic Shore'] },
  { id: 3, number: '03', title: 'Slide Rail Trench System', category: 'Modular Shoring', categoryId: 'slide-rail', xPercent: 44, yPercent: 68, shortDesc: 'Modular dig-and-push shoring panels for deep trench work.', application: 'Deep Trench Shoring', partNumber: 'TU-SR-1620-HD', loadRating: 'Type C Soil Certified', sampleProducts: ['Modular Slide Rail Panel'] },
  { id: 4, number: '04', title: 'Trench Access & Safety', category: 'OSHA Ladders', categoryId: 'trench-access-safety', xPercent: 54, yPercent: 62, shortDesc: 'OSHA compliant trench access ladders and walk-thru gates.', application: 'Trench Entry & Exit', partNumber: 'TU-TL-16FT-AL', loadRating: 'OSHA Subpart P Compliant', sampleProducts: ['OSHA Trench Ladder'] },
  { id: 5, number: '05', title: 'Trench Road Plates', category: 'Steel Decking', categoryId: 'trench-road-plates', xPercent: 65, yPercent: 42, shortDesc: 'AASHTO H-20 traffic-rated steel road plates for trench crossing.', application: 'Street Trench Bridging', partNumber: 'TU-RP-812-H20', loadRating: 'AASHTO H-20 Rated', sampleProducts: ['Steel Road Plate'] }
];

export const INDUSTRIES_DATA: Industry[] = [
  {
    id: 'trench-excavation',
    title: 'CIVIL TRENCH EXCAVATION & SHORING',
    tagline: 'Deep Trench Protection & Soil Pressure Shielding',
    description: 'Heavy steel trench boxes, hydraulic shoring systems, and slide rail equipment engineered for crew safety in high-depth excavations.',
    image: img01,
    relevantCategories: ['safety-protection', 'hydraulic-shoring', 'trench-road-plates'],
    specs: [
      { label: 'SOIL RATING', value: 'OSHA Type A, B, C Soil' },
      { label: 'COMPLIANCE', value: 'OSHA 1926 Subpart P' },
      { label: 'DEPTH CAPABILITY', value: 'Up to 30 FT Trench Excavation' }
    ]
  }
];

export const DEPTH_LEVELS: DepthLevel[] = [
  { level: 1, id: 'surface', title: 'LEVEL 01 — SURFACE', depthMeters: '0.0m - 0.5m', depthFeet: '0 - 1.5 FT', tagline: 'AASHTO H-20 Steel Road Plates & Trench Decking', description: 'Impact-resistant steel trench plates engineered for traffic bridging over active excavation trenches.', products: ['Steel Road Plates'], color: '#0066FF' },
  { level: 2, id: 'trench', title: 'LEVEL 02 — SHORING', depthMeters: '1.5m - 4.5m', depthFeet: '5 - 15 FT', tagline: 'OSHA-Compliant Steel & Aluminum Shoring', description: 'Heavy steel trench boxes, aluminum shields, and hydraulic shores engineered for maximum soil pressure resistance.', products: ['TU-8000 Steel Trench Box'], color: '#0A2540' },
  { level: 3, id: 'deep-trench', title: 'LEVEL 03 — DEEP SHORING', depthMeters: '4.5m - 9.0m+', depthFeet: '15 - 30+ FT', tagline: 'Modular Slide Rail & Sheet Piling Systems', description: 'Deep excavation dig-and-push modular slide rail systems replacing traditional driven sheet piling.', products: ['Slide Rail Shoring'], color: '#0066FF' }
];

export const ANATOMY_POINTS: AnatomyPoint[] = [
  { id: 'road', title: 'ROAD SURFACE LAYER', depth: '0.0 FT', role: 'Finished roadway pavement bridged by steel road plates.', spec: 'AASHTO H-20 Traffic Compliant', x: 18, y: 18 },
  { id: 'trenchwall', title: 'UNEXCAVATED TRENCH WALL', depth: '-5.0 FT', role: 'Native soil matrix bearing lateral earth pressure against shoring.', spec: 'Type B / Type C Soil Classification', x: 15, y: 45 },
  { id: 'shoring', title: 'TU-8000 STEEL SHORING SHIELD', depth: '-7.5 FT', role: 'Double-walled high-strength steel panel protecting excavation workers.', spec: 'OSHA 1926 Subpart P Certified', x: 48, y: 48 },
  { id: 'hydraulic', title: 'HYDRAULIC SHORING CYLINDER', depth: '-10.0 FT', role: 'Hand-pumped hydraulic cylinder expanding against trench walls.', spec: '3,500 PSI Hydraulic Rating', x: 65, y: 62 }
];

// 5 CORE TRENCH SHORING & SAFETY PRODUCTS USING LOCAL G:\bens sir team\trench-everything\src\assets\images
export const PRODUCTS_CATALOGUE: Product[] = [
  {
    id: 'tu-8000-shield',
    name: 'TU-8000 Heavy-Duty Steel Trench Shield Box',
    category: 'Steel Trench Shields',
    subcategory: 'Steel Trench Boxes',
    productFamily: 'Steel Trench Box',
    partNumber: 'TU-SB-824-HD',
    depthLevel: 3,
    material: 'High-Tensile A572 Grade 50 Steel',
    loadRating: 'OSHA 1926 Subpart P / 1,450 PSF Lateral Rating',
    sizeRange: '8ft H x 24ft L (4in Wall Thickness)',
    sizes: ['8ft x 20ft', '8ft x 24ft', '10ft x 24ft'],
    standard: 'ASTM A572 / OSHA 1926 Certified',
    application: 'Deep Civil Trenching & Excavation Worker Protection',
    description: 'Rigid double-wall steel trench box engineered with heavy-duty internal structural steel columns, reinforced corner sockets, and collar-locked spreader pipes.',
    features: [
      'Poured concrete-filled knife edge shoe for ground cutting',
      'Solid steel collars for 8-inch schedule 80 spreader pipes',
      'Heavy four-point lifting lugs rated for 24,000 lbs WLL',
      'Stackable design with heavy pin-lock sockets'
    ],
    image: imgProd1,
    cadFileAvailable: true,
    specSheetUrl: '#',
    finish: 'Industrial Safety Blue Powder Coat',
    weight: '12,400 LBS',
    industry: 'Civil Excavation & Trenching',
    workflowStep: 'PROTECT'
  },
  {
    id: 'tu-hydraulic-shore',
    name: 'TU-HydroLite Aluminum Hydraulic Shoring Rail',
    category: 'Hydraulic Trench Shoring',
    subcategory: 'Hydraulic Shores',
    productFamily: 'Hydraulic Shore',
    partNumber: 'TU-HS-8FT-AL',
    depthLevel: 2,
    material: '6061-T6 High-Strength Aluminum Alloy',
    loadRating: 'OSHA Type A & Type B Soil Rated (3,500 PSI Max Pressure)',
    sizeRange: '8ft Rail Length / 2in Hydraulic Cylinders',
    sizes: ['5ft Rail / 2" Cylinder', '8ft Rail / 2" Cylinder', '12ft Rail / 3" Cylinder'],
    standard: 'OSHA 1926 Subpart P Compliant',
    application: 'Spot Repairs, Trench Taps & Tight Urban Excavations',
    description: 'Lightweight hydraulic shoring system installed completely from above the trench using a hand-operated hydraulic pump and biodegradable fluid.',
    features: [
      'Installed 100% from above ground for ultimate crew safety',
      'High-strength 6061-T6 structural aluminum rails',
      'Heavy-duty dual-action hydraulic cylinders',
      'Includes safety lock pins and release hook assembly'
    ],
    image: imgProd2,
    cadFileAvailable: true,
    specSheetUrl: '#',
    finish: 'Anodized Aircraft Aluminum',
    weight: '78 LBS / Cylinder Assembly',
    industry: 'Civil Excavation & Trenching',
    workflowStep: 'PROTECT'
  },
  {
    id: 'tu-slide-rail',
    name: 'TU-Modular Slide Rail Trench Shoring System',
    category: 'Modular Slide Rail Systems',
    subcategory: 'Slide Rail Panels',
    productFamily: 'Slide Rail System',
    partNumber: 'TU-SR-1620-HD',
    depthLevel: 3,
    material: 'Heavy Structural Steel Slide Panels & Posts',
    loadRating: 'OSHA Subpart P / Type C Soil Deep Trench Rated',
    sizeRange: '16ft H x 20ft L Modular Sections',
    sizes: ['12ft x 16ft', '16ft x 20ft'],
    standard: 'ASTM A36 / OSHA Subpart P',
    application: 'Deep Trench Excavation Without Vibration / Ground Movement',
    description: 'Modular dig-and-push trench shoring system that slides into place as excavation progresses, replacing traditional driven steel sheet piling.',
    features: [
      'Dig-and-push installation eliminates soil vibration',
      'High clearance spreader beams for large pipe clearance',
      'Modular panel heights for variable trench depths',
      'Heavy-duty corner posts for multi-bay trench configurations'
    ],
    image: imgProd3,
    cadFileAvailable: true,
    specSheetUrl: '#',
    finish: 'Heavy Industrial Blue Epoxy',
    weight: '22,000 LBS Complete System',
    industry: 'Civil Excavation & Trenching',
    workflowStep: 'PROTECT'
  },
  {
    id: 'tu-trench-ladder',
    name: 'TU-OSHA Compliant Trench Access Ladder & Platform',
    category: 'Trench Access & Safety Ladders',
    subcategory: 'Trench Access Ladders',
    productFamily: 'Trench Ladder',
    partNumber: 'TU-TL-16FT-AL',
    depthLevel: 2,
    material: 'Heavy-Duty 6061-T6 Aluminum Alloy',
    loadRating: '375 LBS Type IAA Special Duty Rated',
    sizeRange: '12ft to 24ft Extendable Lengths',
    sizes: ['12ft-18ft', '16ft-24ft'],
    standard: 'OSHA 1926.1053 / ANSI A14.2',
    application: 'Safe Crew Trench Entry, Exit & Walk-Through Protection',
    description: 'Heavy-duty extendable aluminum trench ladder featuring non-slip rungs, top attachment hooks, and walk-through handrail extension.',
    features: [
      'Walk-through handrail extension rises 36" above trench grade',
      'Heavy non-slip serrated D-rungs',
      'Swivel safety feet with mud-cleat spikes',
      'Trench shield mounting bracket attachment'
    ],
    image: imgProd4,
    cadFileAvailable: true,
    specSheetUrl: '#',
    finish: 'Natural Structural Aluminum',
    weight: '46 LBS',
    industry: 'Civil Excavation & Trenching',
    workflowStep: 'ACCESS'
  },
  {
    id: 'tu-road-plate',
    name: 'AASHTO H-20 Heavy Structural Steel Trench Road Plate',
    category: 'Steel Trench Road Plates',
    subcategory: 'Steel Road Plates',
    productFamily: 'Road Plate',
    partNumber: 'TU-RP-812-H20',
    depthLevel: 1,
    material: 'ASTM A36 Heavy Structural Steel',
    loadRating: 'AASHTO H-20 Full Axle Load Rated',
    sizeRange: '8ft W x 12ft L (1.0in & 1.25in Thickness)',
    sizes: ['4ft x 8ft x 1"', '8ft x 12ft x 1"', '8ft x 20ft x 1.25"'],
    standard: 'ASTM A36 / AASHTO Standard',
    application: 'Temporary Street Excavation Decking & Trench Bridging',
    description: 'Heavy structural steel road plate engineered with flush-mount center lifting nut holes and anti-skid surface coating for safe traffic bridging over active trenches.',
    features: [
      'Beveled edges prevent tire impact damage',
      'Center flush-mount lifting pin for rapid crane handling',
      'High-traction aggregate epoxy skid-resistant coating'
    ],
    image: imgProd5,
    cadFileAvailable: true,
    specSheetUrl: '#',
    finish: 'High-Traction Anti-Skid Coating',
    weight: '3,920 LBS',
    industry: 'Civil Excavation & Trenching',
    workflowStep: 'RESTORE'
  }
];

export const SOLUTION_APPS: SolutionApp[] = [
  {
    id: 'trench-safety-shoring',
    title: 'TRENCH SAFETY & SHORING SOLUTIONS',
    tagline: 'OSHA 1926 Subpart P Certified Excavation Protection',
    description: 'Heavy steel trench boxes, hydraulic shoring rails, and modular slide rail systems engineered for complete trench crew protection.',
    image: '/images/assets/gettyimages-2164291973-1024x1024.jpg',
    cadOverlay: 'OSHA SUBPART P • ASTM A572 • TYPE C SOIL RATED',
    recommendedProducts: ['TU-8000 Heavy-Duty Steel Trench Shield Box', 'TU-HydroLite Aluminum Hydraulic Shoring Rail', 'TU-Modular Slide Rail Trench Shoring System'],
    specs: [
      { label: 'SOIL RATING', value: 'OSHA Type A, B, C Soil' },
      { label: 'COMPLIANCE', value: 'OSHA 1926 Subpart P' },
      { label: 'DEPTH RATING', value: 'Up to 30 FT Excavations' }
    ]
  }
];

export const CASE_STUDY_DATA: CaseStudyData = {
  id: 'project-042',
  title: 'PROJECT 042 — REGIONAL TRENCH EXCAVATION SAFETY',
  location: 'Midwest Regional Civil Infrastructure District',
  application: 'Deep Utility Trench Excavation & Shoring',
  productsUsed: [
    'TU-8000 Heavy-Duty Steel Trench Shield Box',
    'TU-HydroLite Aluminum Hydraulic Shoring Rail',
    'AASHTO H-20 Heavy Structural Steel Trench Road Plate'
  ],
  scale: '4,200 Linear Feet of Trench Excavation',
  installationTime: '18 Days Ahead of Schedule',
  result: '100% OSHA Subpart P Compliance with Zero Trench Wall Incidents',
  beforeImg: '/images/assets/gettyimages-2182302224-640_adpp.mp4',
  duringImg: '/images/assets/gettyimages-1870509248-1024x1024.jpg',
  afterImg: '/images/assets/gettyimages-1431428704-1024x1024.jpg',
  metrics: [
    { label: 'TOTAL TRENCH EXCAVATED', value: '4,200 LF' },
    { label: 'EXCAVATION DEPTH', value: '18.5 FT Avg' },
    { label: 'SAFETY INCIDENTS', value: '0 (Zero Logged)' },
    { label: 'SCHEDULE SAVINGS', value: '18 Calendar Days' }
  ]
};
