import { Product, PrimaryCategory, Industry, DepthLevel, Hotspot, SolutionApp, AnatomyPoint, CaseStudyData } from '../types';

// Image assets for iron castings, designer tree grates, and trench drainage
const img01 = '/images/assets/gettyimages-1158438565-1024x1024.jpg'; // Architectural Slot/Tree Grate
const img02 = '/images/assets/gettyimages-1349322660-1024x1024.jpg'; // Cast Iron Grating
const img03 = '/images/assets/gettyimages-1479422287-1024x1024.jpg'; // Foundry Iron Processing
const img04 = '/images/assets/gettyimages-2158727734-1024x1024.jpg'; // Heavy Ductile Iron Cover
const img05 = '/images/assets/gettyimages-2223963188-1024x1024.jpg'; // Industrial Metal Casting

export const PRIMARY_CATEGORIES: PrimaryCategory[] = [
  {
    number: '01',
    id: 'designer-trench-gratings',
    title: 'DESIGNER & ARCHITECTURAL TRENCH GRATINGS',
    shortName: 'Architectural Trench Gratings',
    tagline: 'Decorative Cast Iron & Ductile Iron ADA Heel-Proof Trench Covers',
    description: 'Custom decorative cast iron trench gratings featuring ADA-compliant heel-proof slot geometry, wave patterns, and anti-slip textures for urban streetscapes, plazas, and commercial hardscapes.',
    image: img01,
    hotspotIndex: 1,
    subcategories: [
      { id: 'ada-heel-proof', name: 'ADA Heel-Proof Iron Gratings', description: 'ADA 1/4" slot width heel-proof cast iron grates for pedestrian plazas.', image: img01, productFamilies: ['ADA Trench Grate'] },
      { id: 'decorative-patterns', name: 'Designer Geometric Patterns', description: 'Interlocking wave, radial, and decorative motif trench covers.', image: img02, productFamilies: ['Decorative Grate'] },
      { id: 'longitudinal-slots', name: 'Longitudinal Slotted Iron Grates', description: 'High-flow longitudinal slot ductile iron gratings for urban avenues.', image: img04, productFamilies: ['Slot Grate'] }
    ]
  },
  {
    number: '02',
    id: 'tree-grates-guards',
    title: 'DESIGNER CAST IRON TREE GRATES & GUARDS',
    shortName: 'Tree Grates & Guards',
    tagline: 'Urban Landscape Architecture Tree Grates & Root Aeration Systems',
    description: 'EJ-inspired designer cast iron tree grates (square, round, expandable tree openings) and heavy iron tree guards providing root zone aeration and urban streetscape protection.',
    image: img02,
    hotspotIndex: 2,
    subcategories: [
      { id: 'square-tree-grates', name: 'Square & Rectangular Tree Grates', description: '4x4 ft, 5x5 ft, and 6x6 ft expandable cast iron tree grates.', image: img02, productFamilies: ['Square Tree Grate'] },
      { id: 'round-tree-grates', name: 'Circular & Radial Tree Grates', description: 'Radial slot circular cast iron tree grates with inner knockout rings.', image: img01, productFamilies: ['Round Tree Grate'] },
      { id: 'tree-guards', name: 'Heavy Ductile Iron Tree Guards', description: 'Vertical iron tree guards protecting trunk bark in high-traffic plazas.', image: img03, productFamilies: ['Iron Tree Guard'] }
    ]
  },
  {
    number: '03',
    id: 'heavy-civil-drainage',
    title: 'DUCTILE IRON HEAVY CIVIL DRAINAGE CHANNELS',
    shortName: 'Heavy Civil Iron Channels',
    tagline: 'AASHTO H-20 & EN 1433 Class D400 to F900 900kN Airport Iron Castings',
    description: 'Heavy duty ductile iron trench frames, continuous linear drainage channels, and 900 kN proof load covers engineered for airport taxiways, sea ports, and highway freight corridors.',
    image: img04,
    hotspotIndex: 3,
    subcategories: [
      { id: 'h20-highway-gratings', name: 'AASHTO H-20 Highway Trench Covers', description: 'Heavy vehicular ductile iron grates for highway crossings.', image: img04, productFamilies: ['H20 Iron Cover'] },
      { id: 'f900-airport-drains', name: 'Class F900 Airport Runways', description: '900 kN heavy airport runway ductile iron trench channel frames.', image: img05, productFamilies: ['Airport Channel'] },
      { id: 'bolted-locking-covers', name: '4-Point Mechanical Lock Grates', description: 'Vibrationless bolted locking ductile iron trench grates.', image: img03, productFamilies: ['Locking Grate'] }
    ]
  }
];

export const PRODUCTS_CATALOGUE: Product[] = [
  {
    id: 'prod-tree-grate-sq-44',
    name: 'Metropolitan Square Cast Iron Tree Grate (4x4 Ft)',
    category: 'Tree Grates & Guards',
    subcategory: 'Square & Rectangular Tree Grates',
    productFamily: 'Square Tree Grate',
    partNumber: 'TU-TG-SQ44-ADA',
    depthLevel: 1,
    material: 'ASTM A48 Class 35B Grey Iron / ASTM A536 Ductile Iron',
    loadRating: 'Pedestrian & AASHTO H-20 Light Vehicle Rated',
    sizeRange: '48" x 48" (12" to 18" Expandable Tree Opening)',
    sizes: ['48" x 48"', '60" x 60"', '72" x 72"'],
    standard: 'ADA Compliant 1/4" Max Slot Opening',
    application: 'Urban Streetscapes, Commercial Sidewalks, City Centers',
    description: 'Designer square cast iron tree grate with expandable inner knockout rings for tree growth. Features ADA-compliant narrow slot geometry, anti-slip surface texturing, and optional root watering access ports.',
    features: ['Expandable Tree Opening', 'ADA Heel-Proof Slot Spacing', 'Anti-Slip Cast Texture', 'KTL Cathodic E-Coat Finish'],
    image: img02,
    cadFileAvailable: true,
    specSheetUrl: '#',
    finish: 'Black Asphaltic Coating / Natural Uncoated Rust Patina / KTL E-Coat',
    weight: '240 lbs / set (2 halves)',
    industry: 'Landscape Architecture',
    workflowStep: 'PROTECT'
  },
  {
    id: 'prod-tree-grate-rd-5',
    name: 'Radial Sunburst Circular Cast Iron Tree Grate (5 Ft Dia)',
    category: 'Tree Grates & Guards',
    subcategory: 'Circular & Radial Tree Grates',
    productFamily: 'Round Tree Grate',
    partNumber: 'TU-TG-RD60-SUN',
    depthLevel: 1,
    material: 'ASTM A536 Grade 80-55-06 Ductile Iron',
    loadRating: 'AASHTO H-20 Vehicular Overrun Certified',
    sizeRange: '60" Diameter (16" Center Tree Opening)',
    sizes: ['48" Dia', '60" Dia', '72" Dia'],
    standard: 'ADA Compliant & Wheelchair Safe',
    application: 'Corporate Plazas, Municipal Parks, Historic Districts',
    description: 'Decorative circular sunburst pattern cast iron tree grate. Engineered with high-strength ductile iron to withstand heavy maintenance vehicle overruns while providing maximum soil aeration and water infiltration.',
    features: ['Radial Sunburst Aesthetic', 'High Ductile Strength', 'Sub-Frame Support Angle Included', 'Wheelchair Safe Slots'],
    image: img01,
    cadFileAvailable: true,
    specSheetUrl: '#',
    finish: 'Raw Cast Iron Patina / Polyurethane Black Coating',
    weight: '310 lbs / set',
    industry: 'Landscape Architecture',
    workflowStep: 'PROTECT'
  },
  {
    id: 'prod-trench-grate-ada-wave',
    name: 'Architectural Wave Pattern ADA Ductile Iron Trench Grate',
    category: 'Designer & Architectural Trench Gratings',
    subcategory: 'Designer Geometric Patterns',
    productFamily: 'Decorative Grate',
    partNumber: 'TU-TG-WAVE-12',
    depthLevel: 2,
    material: 'ASTM A536 Grade 65-45-12 Ductile Iron',
    loadRating: 'EN 1433 Class C250 to D400 (400 kN)',
    sizeRange: '12" Width x 24" Length x 1.5" Thickness',
    sizes: ['8" Width', '12" Width', '18" Width', '24" Width'],
    standard: 'ADA Compliant 1/4" Slot Geometry',
    application: 'Pedestrian Promenades, Resort Hardscapes, Municipal Plazas',
    description: 'Architectural wave-motif trench cover cast in high-tensile ductile iron. Combines elegant visual geometry with heavy C250-D400 load ratings for vehicular traffic crossing.',
    features: ['Interlocking Wave Geometry', 'ADA Heel-Proof Certified', '4-Point Bolted Locking Option', 'High Flow Water Capture'],
    image: img01,
    cadFileAvailable: true,
    specSheetUrl: '#',
    finish: 'KTL Black Cathodic Dip / Raw Weathering Iron',
    weight: '42 lbs / linear section',
    industry: 'Urban Architecture',
    workflowStep: 'CONTROL'
  },
  {
    id: 'prod-trench-grate-h20-heavy',
    name: 'AASHTO H-20 Heavy Duty Ductile Iron Trench Grate & Frame',
    category: 'Ductile Iron Heavy Civil Drainage Channels',
    subcategory: 'AASHTO H-20 Highway Trench Covers',
    productFamily: 'H20 Iron Cover',
    partNumber: 'TU-TG-H20-18',
    depthLevel: 3,
    material: 'ASTM A536 Grade 80-55-06 Nodular Ductile Iron',
    loadRating: 'AASHTO H-20 / HS-20 (40,000 lbs Axle Load) / EN 1433 Class D400',
    sizeRange: '18" Clear Width x 36" Length x 2" Heavy Flange Frame',
    sizes: ['12" Clear', '18" Clear', '24" Clear', '30" Clear'],
    standard: 'AASHTO M306 & M105 Highway Specifications',
    application: 'State Highway Corridors, Freight Terminals, Gas Stations',
    description: 'Heavy duty highway trench grate and frame assembly cast in nodular ductile iron. Proof tested to 40,000 lbs axle loading with zero permanent deformation.',
    features: ['AASHTO M306 Proof Load Tested', 'Ductile Iron Non-Brittle Matrix', 'Submerged Anchor Flange Frame', 'Anti-Rattle Gasketed Seating'],
    image: img04,
    cadFileAvailable: true,
    specSheetUrl: '#',
    finish: 'Heavy Duty Asphaltic Dip',
    weight: '115 lbs / assembly',
    industry: 'Heavy Highway & Transportation',
    workflowStep: 'INSTALL'
  },
  {
    id: 'prod-trench-f900-airport',
    name: 'Class F900 Airport Runway Extreme Load Iron Channel System',
    category: 'Ductile Iron Heavy Civil Drainage Channels',
    subcategory: 'Class F900 Airport Runways',
    productFamily: 'Airport Channel',
    partNumber: 'TU-AIRPORT-F900',
    depthLevel: 4,
    material: 'ASTM A536 Ductile Iron & Galvanized Steel Edge Rail',
    loadRating: 'EN 1433 Class F900 (900 kN / 202,300 lbs Test Load)',
    sizeRange: '20" Clear Width x 39.4" (1 Meter) Section',
    sizes: ['12" Width', '20" Width', '30" Width'],
    standard: 'FAA AC 150 Airport Drainage Standards',
    application: 'Commercial Airport Runways, Container Ports, Military Airfields',
    description: 'Extreme-load airport trench channel with integrated ductile iron grates and 8-point heavy locking bolts designed to absorb 90-ton Boeing 777 landing gear impact forces.',
    features: ['900 kN Proof Load Certified', '8-Point Stainless Steel Locking Bar', 'Monolithic Iron Edge Protection', 'FAA Airport Approved'],
    image: img05,
    cadFileAvailable: true,
    specSheetUrl: '#',
    finish: 'Ductile Iron Epoxy E-Coat',
    weight: '285 lbs / meter unit',
    industry: 'Aviation & Marine Ports',
    workflowStep: 'INSTALL'
  },
  {
    id: 'prod-tree-guard-iron-6',
    name: 'Architectural Vertical Iron Tree Guard (6 Ft Height)',
    category: 'Tree Grates & Guards',
    subcategory: 'Heavy Ductile Iron Tree Guards',
    productFamily: 'Iron Tree Guard',
    partNumber: 'TU-TG-GUARD-72',
    depthLevel: 1,
    material: 'Ductile Iron & Wrought Iron Structural Steel Rods',
    loadRating: 'Impact Resistant Heavy Urban Grade',
    sizeRange: '18" Base Diameter x 72" Height',
    sizes: ['60" Height', '72" Height', '84" Height'],
    standard: 'Municipal Urban Forestry Certified',
    application: 'City Main Streets, Historic Avenues, Shopping Malls',
    description: 'Vertical architectural iron tree guard that bolts directly onto Trench Unlimited cast iron tree grates. Protects young urban tree trunks from vandalism, bicycles, and street traffic.',
    features: ['Direct Grate Bolt Attachment', 'Architectural Scroll Geometry', 'Weather-Resistant Powder Coat', 'Hinged Access Door'],
    image: img03,
    cadFileAvailable: true,
    specSheetUrl: '#',
    finish: 'Architectural Black Gloss Powder Coat',
    weight: '145 lbs',
    industry: 'Landscape Architecture',
    workflowStep: 'PROTECT'
  }
];

export const INDUSTRIES: Industry[] = [
  {
    id: 'landscape-architecture',
    title: 'LANDSCAPE ARCHITECTURE & URBAN STREETSCAPES',
    tagline: 'Decorative Tree Grates & ADA Heel-Proof Architectural Iron Gratings',
    description: 'Enhancing city streetscapes, pedestrian avenues, public parks, and corporate plazas with decorative cast iron tree grates, root guards, and designer trench covers.',
    image: img01,
    relevantCategories: ['designer-trench-gratings', 'tree-grates-guards'],
    specs: [
      { label: 'ADA SLOT COMPLIANCE', value: '1/4" Max Heel-Proof' },
      { label: 'TREE AERATION AREA', value: 'Over 65% Open Area' },
      { label: 'FINISH OPTIONS', value: 'KTL E-Coat / Natural Patina' }
    ]
  },
  {
    id: 'heavy-highway-dot',
    title: 'HEAVY HIGHWAY & MUNICIPAL TRANSPORTATION',
    tagline: 'AASHTO H-20 / M306 Heavy Vehicular Ductile Iron Drainage',
    description: 'Providing DOT-certified heavy vehicular ductile iron trench covers, catch basin inlets, and frames engineered for continuous highway freight traffic.',
    image: img04,
    relevantCategories: ['heavy-civil-drainage'],
    specs: [
      { label: 'PROOF LOAD RATING', value: 'AASHTO H-20 (40,000 lbs)' },
      { label: 'ASTM SPECIFICATION', value: 'ASTM A536 80-55-06' },
      { label: 'FRAME LOCKING', value: '4-Point Gasketed Locking' }
    ]
  },
  {
    id: 'airport-maritime',
    title: 'AIRPORT RUNWAYS & MARITIME CONTAINER PORTS',
    tagline: 'EN 1433 Class F900 900kN Extreme Load Ductile Iron Systems',
    description: 'High-tonnage ductile iron trench channels designed to absorb extreme wheel loads from commercial airliners and heavy container gantry cranes.',
    image: img05,
    relevantCategories: ['heavy-civil-drainage'],
    specs: [
      { label: 'MAX TEST LOAD', value: '900 kN (202,300 lbs)' },
      { label: 'AIRPORT STANDARD', value: 'FAA AC 150 / EN 1433' },
      { label: 'LOCKING SYSTEM', value: '8-Point Stainless Steel' }
    ]
  }
];

export const DEPTH_LEVELS: DepthLevel[] = [
  {
    level: 1,
    id: 'class-a-b',
    title: 'CLASS A15 - B125 (LIGHT PEDESTRIAN & PARKING)',
    depthMeters: '15 - 125 kN',
    depthFeet: 'ADA Heel-Proof',
    tagline: 'Decorative Architectural Iron & Tree Grates for Pedestrian Areas',
    description: 'Designed for public plazas, parks, pedestrian walkways, and light vehicle parking lots requiring decorative aesthetics and ADA compliance.',
    products: ['prod-tree-grate-sq-44', 'prod-tree-grate-rd-5', 'prod-tree-guard-iron-6'],
    color: '#004AAD'
  },
  {
    level: 2,
    id: 'class-c-d',
    title: 'CLASS C250 - D400 (VEHICULAR & AASHTO H-20)',
    depthMeters: '250 - 400 kN',
    depthFeet: 'H-20 Highway',
    tagline: 'Heavy Vehicular Ductile Iron Trench Gratings & Street Decking',
    description: 'Engineered for municipal avenues, gas stations, fire truck access lanes, and commercial delivery docks subject to heavy pneumatic wheel loads.',
    products: ['prod-trench-grate-ada-wave', 'prod-trench-grate-h20-heavy'],
    color: '#0085F4'
  },
  {
    level: 3,
    id: 'class-e-f',
    title: 'CLASS E600 - F900 (AIRPORT RUNWAYS & INDUSTRIAL)',
    depthMeters: '600 - 900 kN',
    depthFeet: 'F900 Airport',
    tagline: 'Extreme 900 kN Proof Load Ductile Iron Channels for Aviation & Ports',
    description: 'Heavy duty nodular ductile iron castings engineered for commercial airport taxiways, container ports, military bases, and heavy industrial foundries.',
    products: ['prod-trench-f900-airport'],
    color: '#003380'
  }
];

export const HOTSPOTS: Hotspot[] = [
  {
    id: 1,
    number: '01',
    title: 'DESIGNER CAST IRON TREE GRATES',
    category: 'Tree Grates & Guards',
    categoryId: 'tree-grates-guards',
    xPercent: 25,
    yPercent: 35,
    shortDesc: 'Square & round cast iron tree grates with expandable tree openings.',
    application: 'Landscape Architecture & Urban Streetscapes',
    partNumber: 'TU-TG-SQ44-ADA',
    loadRating: 'Pedestrian / H-20 Light Vehicle',
    sampleProducts: ['prod-tree-grate-sq-44', 'prod-tree-grate-rd-5']
  },
  {
    id: 2,
    number: '02',
    title: 'ARCHITECTURAL ADA TRENCH GRATINGS',
    category: 'Designer & Architectural Trench Gratings',
    categoryId: 'designer-trench-gratings',
    xPercent: 55,
    yPercent: 50,
    shortDesc: 'ADA heel-proof wave and geometric decorative iron trench covers.',
    application: 'Municipal Plazas & Promenade Hardscapes',
    partNumber: 'TU-TG-WAVE-12',
    loadRating: 'EN 1433 Class C250 to D400',
    sampleProducts: ['prod-trench-grate-ada-wave']
  },
  {
    id: 3,
    number: '03',
    title: 'DUCTILE IRON HEAVY CIVIL CHANNELS',
    category: 'Ductile Iron Heavy Civil Drainage Channels',
    categoryId: 'heavy-civil-drainage',
    xPercent: 80,
    yPercent: 65,
    shortDesc: 'AASHTO H-20 & Class F900 900kN extreme load airport ductile iron covers.',
    application: 'Highway Corridors & Airport Runways',
    partNumber: 'TU-AIRPORT-F900',
    loadRating: 'Class F900 (900 kN / 202,300 lbs)',
    sampleProducts: ['prod-trench-grate-h20-heavy', 'prod-trench-f900-airport']
  }
];

export const SOLUTIONS_APPS: SolutionApp[] = [
  {
    id: 'sol-urban-streetscape',
    title: 'URBAN STREETSCAPE & LANDSCAPE ARCHITECTURE',
    tagline: 'Decorative Cast Iron Tree Grates & ADA Heel-Proof Trench Gratings',
    description: 'Custom designer cast iron tree grates and ADA trench covers providing tree root protection, stormwater intake, and architectural beauty for city downtown renewals.',
    image: img01,
    cadOverlay: '/images/assets/gettyimages-1158438565-1024x1024.jpg',
    recommendedProducts: ['prod-tree-grate-sq-44', 'prod-tree-grate-rd-5', 'prod-trench-grate-ada-wave'],
    specs: [
      { label: 'FOUNDRY MATERIAL', value: 'ASTM A48 Class 35 & ASTM A536 Ductile Iron' },
      { label: 'ADA COMPLIANCE', value: '1/4" Max Slot Opening (Heel-Proof)' },
      { label: 'SURFACE FINISH', value: 'Black KTL E-Coat / Natural Raw Weathering' }
    ]
  },
  {
    id: 'sol-highway-transportation',
    title: 'HIGHWAYS, BRIDGES & MUNICIPAL INFRASTRUCTURE',
    tagline: 'AASHTO H-20 / M306 Heavy Vehicular Ductile Iron Drainage',
    description: 'Heavy duty ductile iron trench grate and frame assemblies engineered to withstand 40,000 lb axle loads across active highway lanes and arterial intersections.',
    image: img04,
    cadOverlay: '/images/assets/gettyimages-2158727734-1024x1024.jpg',
    recommendedProducts: ['prod-trench-grate-h20-heavy'],
    specs: [
      { label: 'HIGHWAY STANDARD', value: 'AASHTO M306 & M105 Certified' },
      { label: 'PROVING PRESSURE', value: '40,000 LBS Heavy Axle Load' },
      { label: 'FRAME SEATING', value: 'Precision CNC Machined Gasketed Frame' }
    ]
  },
  {
    id: 'sol-airport-maritime',
    title: 'AIRPORTS, CONTAINER PORTS & HEAVY INDUSTRIAL',
    tagline: 'EN 1433 Class F900 900kN Extreme Duty Ductile Iron Channels',
    description: 'Monolithic ductile iron trench drainage channels with 8-point stainless steel locking bars engineered for commercial airport taxiways and gantry crane ports.',
    image: img05,
    cadOverlay: '/images/assets/gettyimages-2223963188-1024x1024.jpg',
    recommendedProducts: ['prod-trench-f900-airport'],
    specs: [
      { label: 'MAX PROOF LOAD', value: '900 kN (202,300 LBS)' },
      { label: 'AVIATION COMPLIANCE', value: 'FAA AC 150 / 5320-6E' },
      { label: 'LOCKING MECHANISM', value: '8-Point Stainless Mechanical Lock' }
    ]
  }
];

export const ANATOMY_POINTS: AnatomyPoint[] = [
  { id: '1', title: 'Expandable Tree Opening', depth: 'Center Ring', role: 'Aeration', spec: '12" to 18" Knockout Rings', x: 30, y: 35 },
  { id: '2', title: 'ADA Heel-Proof Slot', depth: 'Surface Slot', role: 'Pedestrian Safety', spec: '1/4" Max Slot Width', x: 50, y: 45 },
  { id: '3', title: 'Ductile Iron Matrix', depth: 'Structural', role: 'Load Resistance', spec: '80,000 PSI Tensile Strength', x: 70, y: 60 }
];

export const CASE_STUDIES: CaseStudyData[] = [
  {
    id: 'cs-metropolitan-downtown',
    title: 'DOWNTOWN METROPOLITAN STREETSCAPE RENEWAL',
    location: 'Chicago, IL — Urban Transit Corridor',
    application: 'Cast Iron Tree Grates & Architectural Trench Covers',
    productsUsed: ['prod-tree-grate-sq-44', 'prod-trench-grate-ada-wave'],
    scale: '1,200 Tree Grates & 4,500 LF Trench Covers Installed',
    installationTime: 'Completed 3 Weeks Ahead of Schedule',
    result: '100% ADA Compliant, Zero Root Disturbance, 15+ Year Warranty Maintenance Free',
    beforeImg: img01,
    duringImg: img02,
    afterImg: img03,
    metrics: [
      { label: 'TREE GRATES INSTALLED', value: '1,200 UNITS' },
      { label: 'ADA ACCESSIBILITY', value: '100% VERIFIED' },
      { label: 'WATER INFILTRATION', value: '+45% IMPROVED' }
    ]
  }
];
