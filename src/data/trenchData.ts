import { Product, DepthLevel, Hotspot, SolutionApp, AnatomyPoint, CaseStudyData } from '../types';

export const DEPTH_LEVELS: DepthLevel[] = [
  {
    level: 1,
    id: 'surface',
    title: 'LEVEL 01 — SURFACE',
    depthMeters: '0.0m - 0.5m',
    depthFeet: '0 - 1.5 FT',
    tagline: 'Heavy-Duty Surface Grates & Street Castings',
    description: 'Impact-resistant surface drainage grates, utility trench covers, and municipal street frames engineered for AASHTO H-20 / HS-20 traffic loading.',
    products: ['Trench Grates', 'Municipal Castings', 'Vault Hatch Covers'],
    color: '#2166D1'
  },
  {
    level: 2,
    id: 'access',
    title: 'LEVEL 02 — ACCESS',
    depthMeters: '0.5m - 2.0m',
    depthFeet: '1.5 - 6.5 FT',
    tagline: 'Vault Structures & Structural Access Shafts',
    description: 'Modular precast concrete vaults, grade rings, and structural access shafts providing maintenance entry to underground networks.',
    products: ['Precast Vaults', 'Grade Rings', 'Access Risers'],
    color: '#0754AE'
  },
  {
    level: 3,
    id: 'trench',
    title: 'LEVEL 03 — TRENCH',
    depthMeters: '2.0m - 4.5m',
    depthFeet: '6.5 - 15 FT',
    tagline: 'OSHA-Compliant Steel & Aluminum Shoring',
    description: 'Heavy steel trench boxes, lightweight aluminum shields, and hydraulic shore systems engineered for maximum soil pressure resistance.',
    products: ['TU-8000 Trench Box', 'Aluminum Shield', 'Hydraulic Shores'],
    color: '#1E73E8'
  },
  {
    level: 4,
    id: 'utility',
    title: 'LEVEL 04 — UTILITY',
    depthMeters: '4.5m - 7.0m',
    depthFeet: '15 - 23 FT',
    tagline: 'Conduit Spacer Systems & Main Line Enclosures',
    description: 'Precision duct bank spacers, high-voltage utility conduits, and pressure pipe fittings engineered for high burial depth performance.',
    products: ['Duct Spacers', 'Utility Conduit', 'Pressure Sleeves'],
    color: '#3B82F6'
  },
  {
    level: 5,
    id: 'flow',
    title: 'LEVEL 05 — FLOW',
    depthMeters: '7.0m - 10.0m+',
    depthFeet: '23 - 33+ FT',
    tagline: 'High-Volume Storm Retention & Deep Culverts',
    description: 'Large-bore corrugated storm pipe, deep retention chambers, and high-velocity culvert assemblies for regional water management.',
    products: ['Storm Pipe', 'Retention Boxes', 'Culvert Assemblies'],
    color: '#4682B4'
  }
];

export const HOTSPOTS: Hotspot[] = [
  {
    id: 1,
    number: '01',
    title: 'Trench Protection',
    category: 'Shoring & Shielding',
    xPercent: 32,
    yPercent: 48,
    shortDesc: 'Double-walled steel trench boxes designed for extreme soil pressure conditions.',
    application: 'Utility Excavation & Main Line Trenching',
    partNumber: 'TU-SB-824-A',
    loadRating: 'OSHA Subpart P Certified'
  },
  {
    id: 2,
    number: '02',
    title: 'Drainage Systems',
    category: 'Stormwater Management',
    xPercent: 54,
    yPercent: 38,
    shortDesc: 'Pre-sloped polymer concrete channel drains with slotted ductile iron grates.',
    application: 'Highway & Commercial Runoff',
    partNumber: 'TU-CD-100-HD',
    loadRating: 'AASHTO H-20 / Extra Heavy Duty'
  },
  {
    id: 3,
    number: '03',
    title: 'Access Systems',
    category: 'Vaults & Manholes',
    xPercent: 72,
    yPercent: 42,
    shortDesc: 'Precast concrete utility vaults with spring-assisted aluminum access hatches.',
    application: 'Electrical & Fiber Optic Vaults',
    partNumber: 'TU-PV-686-S',
    loadRating: 'H-20 Traffic Rated'
  },
  {
    id: 4,
    number: '04',
    title: 'Pipe & Fittings',
    category: 'Water & Sewer Mains',
    xPercent: 44,
    yPercent: 68,
    shortDesc: 'Ductile iron & C900 PVC pressure pipe assemblies with restraint joints.',
    application: 'Potable Water & Force Mains',
    partNumber: 'TU-PF-12-C900',
    loadRating: 'DR18 / 235 PSI'
  },
  {
    id: 5,
    number: '05',
    title: 'Utility Infrastructure',
    category: 'Duct Banks & Sleeves',
    xPercent: 22,
    yPercent: 62,
    shortDesc: 'Snap-lock duct spacers for structured underground telecommunication and power.',
    application: 'Power Distribution & Telco Banks',
    partNumber: 'TU-DS-4-BASE',
    loadRating: '[VERIFIED COMPLIANCE]'
  },
  {
    id: 6,
    number: '06',
    title: 'Shoring Systems',
    category: 'Hydraulic Trench Shores',
    xPercent: 62,
    yPercent: 58,
    shortDesc: 'Lightweight aluminum hydraulic shoring cylinders with high-strength rails.',
    application: 'Spot Repairs & Cross Utility Work',
    partNumber: 'TU-HS-7FT-80',
    loadRating: '3,500 PSI Hydraulic Rating'
  },
  {
    id: 7,
    number: '07',
    title: 'Road & Municipal',
    category: 'Street Castings & Rings',
    xPercent: 50,
    yPercent: 26,
    shortDesc: 'Heavy ductile iron manhole frames, covers, and adjustment rings.',
    application: 'Municipal Paving & Utilities',
    partNumber: 'TU-MC-24-H20',
    loadRating: 'FAA AC 150 Heavy Aircraft'
  },
  {
    id: 8,
    number: '08',
    title: 'Accessories',
    category: 'Lifting & Safety',
    xPercent: 80,
    yPercent: 72,
    shortDesc: '4-leg grade-100 alloy steel sling assemblies and trench crossing ramps.',
    application: 'Rigging, Handling & Jobsite Safety',
    partNumber: 'TU-LA-G100-4L',
    loadRating: '22,400 LBS WLL'
  }
];

export const ANATOMY_POINTS: AnatomyPoint[] = [
  {
    id: 'road',
    title: 'ROAD SURFACE LAYER',
    depth: '0.0 FT',
    role: 'Distributes dynamic wheel loads across sub-base layers.',
    spec: 'AASHTO H-20 / HS-20 Traffic Compliant',
    x: 18,
    y: 18
  },
  {
    id: 'backfill',
    title: 'COMPACTED BACKFILL',
    depth: '-2.5 FT',
    role: 'Structural granular fill compacted to 95% Modified Proctor density.',
    spec: 'ASTM D1557 Standard',
    x: 35,
    y: 28
  },
  {
    id: 'trenchwall',
    title: 'UNEXCAVATED TRENCH WALL',
    depth: '-5.0 FT',
    role: 'Native soil matrix bearing lateral earth pressure against shoring.',
    spec: 'Type B / Type C Soil Classification',
    x: 15,
    y: 45
  },
  {
    id: 'shoring',
    title: 'TU-8000 STEEL SHORING SHIELD',
    depth: '-7.5 FT',
    role: 'Double-walled high-strength steel panel protecting excavation workers.',
    spec: 'OSHA 1926 Subpart P Certified',
    x: 48,
    y: 48
  },
  {
    id: 'utility',
    title: 'PRIMARY UTILITY CONDUIT',
    depth: '-10.0 FT',
    role: 'Enclosed main line carrying electrical, water, or communication infrastructure.',
    spec: 'ANSI/AWWA C900 Class 235',
    x: 65,
    y: 62
  },
  {
    id: 'drainage',
    title: 'PERFORATED DRAINAGE PIPE',
    depth: '-12.5 FT',
    role: 'Prevents hydrostatic uplift by diverting subsurface water away.',
    spec: 'AASHTO M252 Type S',
    x: 30,
    y: 75
  },
  {
    id: 'bedding',
    title: 'PIPE BEDDING GRAVEL',
    depth: '-14.0 FT',
    role: 'Washed crushed stone bedding supporting uniform pipe invert elevation.',
    spec: 'ASTM C33 No. 57 Coarse Aggregate',
    x: 52,
    y: 82
  },
  {
    id: 'access',
    title: 'PRECAST ACCESS RISER',
    depth: '-4.0 FT',
    role: 'Direct vertical entry portal for inspection equipment and maintenance.',
    spec: 'ASTM C478 Monolithic Joints',
    x: 80,
    y: 35
  },
  {
    id: 'groundwater',
    title: 'GROUNDWATER CONTROL ZONE',
    depth: '-16.0 FT',
    role: 'Geotextile fabric barrier filtering fine soil particles from drainage stone.',
    spec: 'AASHTO M288 Class 1 Geotextile',
    x: 75,
    y: 88
  }
];

export const PRODUCTS_CATALOGUE: Product[] = [
  {
    id: 'tu-8000-shield',
    name: 'TU-8000 Heavy-Duty Steel Trench Shield',
    category: 'Trench Protection',
    partNumber: 'TU-SB-824-HD',
    depthLevel: 3,
    material: 'High-Tensile A572 Grade 50 Steel',
    loadRating: 'OSHA 1926 Subpart P / 1,450 PSF Lateral Earth Rating',
    sizeRange: '8ft Height x 24ft Length (4in to 8in Wall)',
    standard: 'ASTM A572 / OSHA Certified',
    application: 'Deep Water Main Trenching & Major Sewer Excavations',
    description: 'Rigid double-wall steel trench box engineered with heavy-duty internal structural steel columns, reinforced corner sockets, and collar-locked spreader pipes.',
    features: [
      'Poured concrete-filled knife edge shoe for ground cutting',
      'Solid steel collars for 8-inch schedule 80 spreader pipes',
      'Heavy four-point lifting lugs rated for 24,000 lbs WLL',
      'Stackable design with heavy pin-lock sockets'
    ],
    image: '/images/trench_shield.png',
    cadFileAvailable: true,
    specSheetUrl: '#'
  },
  {
    id: 'tu-poly-cd',
    name: 'TU-HydroDrain 200 Polymer Channel System',
    category: 'Drainage',
    partNumber: 'TU-CD-200-DI',
    depthLevel: 1,
    material: 'Polymer Concrete with Ductile Iron Edge Rail',
    loadRating: 'AASHTO H-20 / Class E 600 kN Load Rating',
    sizeRange: '8-inch Internal Width x 39.4-inch Length (Pre-Sloped)',
    standard: 'EN 1433 / AASHTO M306',
    application: 'Industrial Facilities, Highways & Port Terminals',
    description: 'High-capacity pre-sloped channel drain system featuring interlocking tongue-and-groove joints and slotted ductile iron grates with boltless locking pins.',
    features: [
      'Impermeable polymer concrete resistant to harsh chemicals',
      'Integrated cast-iron edge rail protection',
      'High-velocity hydraulic inner channel surface',
      'Interlocking end caps and bottom outlet adapters'
    ],
    image: '/images/drainage_channel.png',
    cadFileAvailable: true,
    specSheetUrl: '#'
  },
  {
    id: 'tu-precast-vault',
    name: 'TU-Modular Concrete Access Vault 686',
    category: 'Access Systems',
    partNumber: 'TU-AV-686-HD',
    depthLevel: 2,
    material: 'Precast Concrete 5,000 PSI Fiber-Reinforced',
    loadRating: 'AASHTO HS-20-44 Traffic Rated',
    sizeRange: '6ft W x 8ft L x 6ft H (Custom Knockouts Available)',
    standard: 'ASTM C858 / ASTM C478',
    application: 'Electrical Substation Underground Nodes & Fiber Vaults',
    description: 'Heavy-duty precast concrete vault designed with spring-loaded dual aluminum access doors, pre-formed duct knockouts, and ground rod sleeves.',
    features: [
      '5,000 PSI compressive strength concrete mix',
      'Spring-assisted H-20 diamond plate hatch',
      'Hot-dip galvanized internal cable rack ladders',
      'Integrated butyl rubber gasketed joint seals'
    ],
    image: '/images/concrete_vault.png',
    cadFileAvailable: true,
    specSheetUrl: '#'
  },
  {
    id: 'tu-c900-pipe',
    name: 'TU-C900 PVC Pressure Utility Pipe System',
    category: 'Pipe & Fittings',
    partNumber: 'TU-P-C900-12',
    depthLevel: 4,
    material: 'Unplasticized Polyvinyl Chloride (uPVC)',
    loadRating: 'DR 18 / 235 PSI Working Pressure',
    sizeRange: '4-inch to 24-inch Nominal Diameter (20ft Lay Lengths)',
    standard: 'ANSI/AWWA C900 / NSF 61 Certified',
    application: 'Municipal Potable Water Distribution & Transmission Mains',
    description: 'Precision engineered gasketed-joint C900 PVC pipe for high-pressure underground water distribution with complete immune resistance to soil corrosion.',
    features: [
      'Integral bell design with locked-in elastomeric gasket',
      'Smooth interior surface (Hazen-Williams C=150)',
      'Immune to electrochemical soil corrosion',
      'Factory chamfered spigot ends for easy push-on jointing'
    ],
    image: '/images/pvc_pipe.png',
    cadFileAvailable: true,
    specSheetUrl: '#'
  },
  {
    id: 'tu-duct-spacer',
    name: 'TU-SnapLock Multi-Duct Conduit Spacer',
    category: 'Utility Infrastructure',
    partNumber: 'TU-DS-44-SL',
    depthLevel: 4,
    material: 'High-Impact Polystyrene (HIPS)',
    loadRating: '[VERIFIED STRUCTURAL COMPLIANCE]',
    sizeRange: '4-inch Duct Diameter / 3-inch & 4-inch Separation',
    standard: 'NEMA TC-2 / UL Listed',
    application: 'Underground Electrical Duct Banks & Telecommunication Enclosures',
    description: 'Interlocking vertical and horizontal spacer modules designed to maintain exact duct separation and prevent floating during concrete encasement.',
    features: [
      'Snap-together base and intermediate modules',
      'Rebar alignment slots for secure trench positioning',
      'High compressive resistance during concrete placement',
      'UV-stabilized weather-resistant formulation'
    ],
    image: '/images/concrete_vault.png',
    cadFileAvailable: true,
    specSheetUrl: '#'
  },
  {
    id: 'tu-hydraulic-shore',
    name: 'TU-HydroLite Aluminum Hydraulic Shoring Rail',
    category: 'Shoring',
    partNumber: 'TU-HS-8FT-AL',
    depthLevel: 3,
    material: '6061-T6 High-Strength Aluminum Alloy',
    loadRating: 'OSHA Type A & Type B Soil Rated (3,500 PSI Max Pressure)',
    sizeRange: '8ft Rail Length / 2in Hydraulic Cylinders',
    standard: 'OSHA 1926 Subpart P Compliant',
    application: 'Spot Repairs, Utility Taps & Tight Urban Excavations',
    description: 'Lightweight hydraulic shoring system installed completely from above the trench using a hand-operated hydraulic pump and biodegradable fluid.',
    features: [
      'Installed 100% from above ground for ultimate crew safety',
      'High-strength 6061-T6 structural aluminum rails',
      'Heavy-duty dual-action hydraulic cylinders',
      'Includes safety lock pins and release hook assembly'
    ],
    image: '/images/trench_shield.png',
    cadFileAvailable: true,
    specSheetUrl: '#'
  },
  {
    id: 'tu-manhole-casting',
    name: 'TU-IronClad 24 Municipal Heavy Cover Assembly',
    category: 'Road & Municipal',
    partNumber: 'TU-MC-24-DI',
    depthLevel: 1,
    material: 'Ductile Iron Class 65-45-12',
    loadRating: 'AASHTO M306 / H-25 Heavy Aircraft Rated',
    sizeRange: '24-inch Clear Opening / 7-inch Frame Depth',
    standard: 'AASHTO M306 / ASTM A536',
    application: 'City Street Paving, Sanitary Manholes & Airport Aprons',
    description: 'Heavy ductile iron frame and non-rocking machined lid equipped with continuous EPDM gasket seal and custom municipality logo lettering.',
    features: [
      'Machined bearing surfaces eliminate traffic clatter',
      'EPDM continuous seal prevents infiltration',
      'Pickhole design prevents debris accumulation',
      'Proof-loaded to 50,000 lbs minimum'
    ],
    image: '/images/drainage_channel.png',
    cadFileAvailable: true,
    specSheetUrl: '#'
  },
  {
    id: 'tu-storm-pipe',
    name: 'TU-MegaFlow Corrugated HDPE Storm Pipe',
    category: 'Drainage',
    partNumber: 'TU-SP-36-HDPE',
    depthLevel: 5,
    material: 'High-Density Polyethylene Dual Wall',
    loadRating: 'AASHTO H-20 Minimum Cover Rated',
    sizeRange: '36-inch Diameter (20ft Joint Lengths)',
    standard: 'AASHTO M294 Type S / ASTM F2306',
    application: 'Highway Culverts, Retention Basins & Storm Sewers',
    description: 'Dual-wall HDPE pipe with smooth inner waterway and corrugated outer wall for maximum structural beam strength and high flow efficiency.',
    features: [
      'Smooth interior Manning roughness coefficient n=0.012',
      'Integral bell-and-spigot rubber gasket joint',
      'Lightweight construction reduces crane rental costs',
      '100-year structural design life rating'
    ],
    image: '/images/pvc_pipe.png',
    cadFileAvailable: true,
    specSheetUrl: '#'
  }
];

export const SOLUTIONS_APPS: SolutionApp[] = [
  {
    id: 'municipal-water',
    title: 'MUNICIPAL WATER INFRASTRUCTURE',
    tagline: 'High-Pressure Potable Distribution & Main Replacements',
    description: 'Engineered water main pipe systems, valve vaults, and OSHA-compliant trench shields for major city utility modernizations.',
    image: '/images/pvc_pipe.png',
    cadOverlay: 'ANSI/AWWA C900 • OSHA SUBPART P • H-20 RATED',
    recommendedProducts: ['TU-8000 Trench Shield', 'TU-C900 PVC Pressure Pipe', 'TU-Modular Access Vault'],
    specs: [
      { label: 'PRESSURE RATING', value: '235 PSI Max' },
      { label: 'COMPLIANCE', value: 'AWWA C900 / NSF 61' },
      { label: 'DEPTH CAPABILITY', value: 'Up to 24 FT Excavations' }
    ]
  },
  {
    id: 'underground-utilities',
    title: 'UNDERGROUND POWER & TELECOM',
    tagline: 'High-Voltage Duct Banks & Structured Fiber Nodes',
    description: 'Precision duct spacers, concrete pull boxes, and non-conductive access risers designed to house critical electrical and fiber grids.',
    image: '/images/concrete_vault.png',
    cadOverlay: 'NEMA TC-2 • IEEE 1234 • H-20 TRAFFIC',
    recommendedProducts: ['TU-SnapLock Duct Spacer', 'TU-Modular Concrete Access Vault', 'TU-IronClad 24 Cover'],
    specs: [
      { label: 'DIELECTRIC', value: 'High Insulation Grade' },
      { label: 'SPACING ACCURACY', value: '±0.05 Inches' },
      { label: 'THERMAL RATING', value: '90°C Continuous' }
    ]
  },
  {
    id: 'road-highway',
    title: 'ROAD & HIGHWAY INFRASTRUCTURE',
    tagline: 'Heavy Load Street Castings & Sub-Pavement Drainage',
    description: 'AASHTO M306 traffic-rated manhole castings, pre-sloped highway channels, and heavy culvert pipe assemblies built for high axle loads.',
    image: '/images/drainage_channel.png',
    cadOverlay: 'AASHTO M306 • FAA AC 150 • EN 1433 CLASS F',
    recommendedProducts: ['TU-IronClad 24 Cover', 'TU-HydroDrain 200 System', 'TU-MegaFlow HDPE Pipe'],
    specs: [
      { label: 'PROOF LOAD', value: '50,000 LBS Minimum' },
      { label: 'TRAFFIC GRADE', value: 'AASHTO H-25 / HS-25' },
      { label: 'CORROSION LIFE', value: '50+ Years Guaranteed' }
    ]
  },
  {
    id: 'stormwater',
    title: 'STORMWATER & FLOOD CONTROL',
    tagline: 'High-Volume Retention Basins & Culvert Infrastructure',
    description: 'Large-bore corrugated HDPE pipe, storm retention boxes, and debris filtration grates engineered to mitigate urban flooding.',
    image: '/images/trench_shield.png',
    cadOverlay: 'AASHTO M294 • ASTM F2306 • EPA PHASE II',
    recommendedProducts: ['TU-MegaFlow HDPE Pipe', 'TU-HydroDrain 200 System', 'TU-8000 Steel Shield'],
    specs: [
      { label: 'MANNING COEFFICIENT', value: 'n = 0.012 Smooth Bores' },
      { label: 'MAX FLOW RATE', value: '145 CFS Peak Capacity' },
      { label: 'BURIAL DEPTH', value: 'Up to 30 FT Cover' }
    ]
  }
];

export const CASE_STUDY_DATA: CaseStudyData = {
  id: 'project-042',
  title: 'PROJECT 042 — MUNICIPAL UTILITY CORRIDOR EXPANSION',
  location: 'Midwest Regional Infrastructure District',
  application: 'Deep Water Main Installation & Sewer Line Bypass',
  productsUsed: [
    'TU-8000 Steel Trench Shield Box',
    'TU-HydroLite Aluminum Hydraulic Shores',
    'TU-C900 PVC 16-inch Pressure Pipe',
    'TU-IronClad 24 Heavy Manhole Castings'
  ],
  scale: '4,200 Linear Feet of Excavation',
  installationTime: '18 Days Ahead of Schedule',
  result: '100% OSHA Subpart P Compliance with Zero Crew Incidents',
  beforeImg: '/images/trench_shield.png',
  duringImg: '/images/drainage_channel.png',
  afterImg: '/images/concrete_vault.png',
  metrics: [
    { label: 'TOTAL PIPE INSTALLED', value: '4,200 LF' },
    { label: 'EXCAVATION DEPTH', value: '18.5 FT Avg' },
    { label: 'SAFETY INCIDENTS', value: '0 (Zero Logged)' },
    { label: 'SCHEDULE SAVINGS', value: '18 Calendar Days' }
  ]
};
