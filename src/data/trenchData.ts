import { Product, PrimaryCategory, Industry, DepthLevel, Hotspot, SolutionApp, AnatomyPoint, CaseStudyData } from '../types';

// Direct Verified Product Image Paths in /images/
const imgSteelBox = '/images/trench_shield.png';
const imgDrainageChannel = '/images/drainage_channel.png';
const imgConcreteVault = '/images/concrete_vault.png';
const imgPvcPipe = '/images/pvc_pipe.png';
const imgValveBox = '/images/trench_shield.png';

export const PRIMARY_CATEGORIES: PrimaryCategory[] = [
  {
    number: '01',
    id: 'safety-protection',
    title: 'TRENCH SAFETY & PROTECTION',
    shortName: 'Safety & Protection',
    tagline: 'OSHA 1926 Subpart P Certified Shielding & Shoring Systems',
    description: 'Heavy steel trench boxes, lightweight aluminum shields, hydraulic shores, and slide rail systems engineered for maximum soil pressure resistance.',
    image: imgSteelBox,
    hotspotIndex: 1,
    subcategories: [
      { id: 'trench-boxes', name: 'Trench Boxes', description: 'Double-walled steel trench boxes for high-depth trench protection.', image: imgSteelBox, productFamilies: ['Steel Trench Box', 'Heavy-Duty Trench Box'] },
      { id: 'trench-shields', name: 'Trench Shields', description: 'Lightweight aluminum and steel shielding panels for mobile crews.', image: imgSteelBox, productFamilies: ['Aluminum Trench Shield'] },
      { id: 'manhole-boxes', name: 'Manhole Boxes', description: '4-sided box enclosures engineered for vault & manhole excavation.', image: imgConcreteVault, productFamilies: ['Manhole Box'] }
    ]
  },
  {
    number: '02',
    id: 'excavation-equipment',
    title: 'EXCAVATION EQUIPMENT',
    shortName: 'Excavation',
    tagline: 'Heavy-Duty Trenching Buckets & Ground Breaking Attachments',
    description: 'Engineered excavator trenching buckets, compaction wheels, rock breakers, and material handling attachments for earthmoving.',
    image: imgSteelBox,
    hotspotIndex: 2,
    subcategories: [
      { id: 'excavator-buckets', name: 'Excavator Buckets', description: 'Heavy-capacity digging and trenching buckets for 10t to 50t excavators.', image: imgSteelBox, productFamilies: ['Standard Trenching Bucket'] }
    ]
  },
  {
    number: '03',
    id: 'pipe-installation',
    title: 'PIPE & UTILITY INSTALLATION',
    shortName: 'Pipe Installation',
    tagline: 'Precision Pipe Handling, Alignment Clamps & Rigging Systems',
    description: 'Precision pipe rollers, nylon slings, alignment clamps, and pipe pullers engineered for damage-free utility placement.',
    image: imgPvcPipe,
    hotspotIndex: 3,
    subcategories: [
      { id: 'pipe-handling', name: 'Pipe Handling', description: 'Heavy-duty pipe rollers, cradles, and non-marring nylon slings.', image: imgPvcPipe, productFamilies: ['Pipe Roller'] }
    ]
  },
  {
    number: '04',
    id: 'water-sewer',
    title: 'WATER & SEWER',
    shortName: 'Water & Sewer',
    tagline: 'AWWA C900 Pressure Pipe, Valve Boxes & Municipal Fittings',
    description: 'ANSI/AWWA C900 PVC pressure water mains, ductile iron fittings, valve access boxes, and emergency repair clamps.',
    image: imgPvcPipe,
    hotspotIndex: 4,
    subcategories: [
      { id: 'water-main', name: 'Water Main', description: 'ANSI/AWWA C900 uPVC and Ductile Iron pressure water pipes.', image: imgPvcPipe, productFamilies: ['Water Pipe'] },
      { id: 'valve-access', name: 'Valve Access', description: 'Cast iron valve boxes, curb boxes, and Bison Box enclosures.', image: imgValveBox, productFamilies: ['Valve Box'] }
    ]
  },
  {
    number: '05',
    id: 'drainage-stormwater',
    title: 'DRAINAGE & STORMWATER',
    shortName: 'Drainage',
    tagline: 'Pre-Sloped Polymer Channels, Catch Basins & HDPE Culverts',
    description: 'Pre-sloped polymer concrete channel drains, AASHTO H-20 catch basins, slotted grates, and corrugated storm culverts.',
    image: imgDrainageChannel,
    hotspotIndex: 5,
    subcategories: [
      { id: 'channel-drainage', name: 'Channel Drainage', description: 'Pre-sloped polymer concrete channel drainage systems.', image: imgDrainageChannel, productFamilies: ['Channel Drain'] }
    ]
  },
  {
    number: '06',
    id: 'manholes-underground-access',
    title: 'MANHOLES & UNDERGROUND ACCESS',
    shortName: 'Underground Access',
    tagline: 'AASHTO M306 Traffic Castings, Precast Risers & Access Hatches',
    description: 'AASHTO M306 heavy-duty ductile iron manhole frames, precast concrete riser rings, and spring-assisted aluminum hatches.',
    image: imgConcreteVault,
    hotspotIndex: 6,
    subcategories: [
      { id: 'access-vaults', name: 'Utility Vaults', description: 'Precast concrete utility access vaults.', image: imgConcreteVault, productFamilies: ['Utility Vault'] }
    ]
  },
  {
    number: '07',
    id: 'utility-conduit-electrical',
    title: 'UTILITY CONDUIT & ELECTRICAL',
    shortName: 'Utility & Electrical',
    tagline: 'Precision Duct Spacers, Electrical Vaults & Fiber Pull Boxes',
    description: 'NEMA TC-2 PVC conduit, SnapLock multi-duct spacers, precast electrical pull boxes, and non-conductive access vaults.',
    image: imgConcreteVault,
    hotspotIndex: 7,
    subcategories: [
      { id: 'utility-vaults', name: 'Utility Vaults', description: 'Precast electrical vaults.', image: imgConcreteVault, productFamilies: ['Utility Vault'] }
    ]
  },
  {
    number: '08',
    id: 'dewatering-groundwater-control',
    title: 'DEWATERING & GROUNDWATER CONTROL',
    shortName: 'Dewatering',
    tagline: 'Submersible Trash Pumps, Wellpoint Systems & Filtration',
    description: 'Heavy-duty electric submersible trash pumps, wellpoint header systems, discharge hoses, and sediment filtration tanks.',
    image: imgSteelBox,
    hotspotIndex: 8,
    subcategories: [
      { id: 'submersible-pumps', name: 'Submersible Pumps', description: 'Submersible dewatering pumps.', image: imgSteelBox, productFamilies: ['Submersible Pump'] }
    ]
  },
  {
    number: '09',
    id: 'trench-tools-jobsite-equipment',
    title: 'TRENCH TOOLS & JOBSITE EQUIPMENT',
    shortName: 'Tools',
    tagline: 'Specialized Valve Keys, Laser Levels & Trench Access Ramps',
    description: 'Heavy trench shovels, telescoping valve operating keys, pipe cutters, pipe lasers, and OSHA compliant jobsite safety barricades.',
    image: imgSteelBox,
    hotspotIndex: 9,
    subcategories: [
      { id: 'trench-tools', name: 'Trench Tools', description: 'Narrow steel trench shovels.', image: imgSteelBox, productFamilies: ['Trench Shovel'] }
    ]
  },
  {
    number: '10',
    id: 'backfill-surface-restoration',
    title: 'BACKFILL & SURFACE RESTORATION',
    shortName: 'Restoration',
    tagline: 'Heavy Road Plates, Vibratory Rammers & Bedding Equipment',
    description: 'AASHTO H-20 steel road plates, vibratory compaction rammers, asphalt cutters, and bedding placement attachments.',
    image: imgSteelBox,
    hotspotIndex: 10,
    subcategories: [
      { id: 'road-plates', name: 'Road Plates', description: 'AASHTO H-20 steel road plates.', image: imgSteelBox, productFamilies: ['Road Plate'] }
    ]
  }
];

export const HOTSPOTS: Hotspot[] = [
  { id: 1, number: '01', title: 'Trench Safety & Protection', category: 'Shoring & Shielding', categoryId: 'safety-protection', xPercent: 32, yPercent: 48, shortDesc: 'OSHA 1926 Subpart P double-walled steel trench boxes.', application: 'Deep Utility Excavation', partNumber: 'TU-SB-824-HD', loadRating: 'OSHA Subpart P Certified', sampleProducts: ['TU-8000 Steel Trench Box'] },
  { id: 2, number: '02', title: 'Excavation Equipment', category: 'Buckets & Compactors', categoryId: 'excavation-equipment', xPercent: 20, yPercent: 28, shortDesc: 'Heavy-duty trenching buckets and compaction wheels.', application: 'Earthmoving & Trench Digging', partNumber: 'TU-TB-36-HD', loadRating: '50t Excavator Rated', sampleProducts: ['Heavy-Duty Trenching Bucket'] },
  { id: 3, number: '03', title: 'Pipe & Utility Installation', category: 'Handling & Alignment', categoryId: 'pipe-installation', xPercent: 44, yPercent: 68, shortDesc: 'Precision pipe rollers and nylon slings.', application: 'Utility Main Placement', partNumber: 'TU-PR-24-HD', loadRating: '12,000 LBS WLL', sampleProducts: ['Pipe Roller'] },
  { id: 4, number: '04', title: 'Water & Sewer', category: 'Mains & Valve Access', categoryId: 'water-sewer', xPercent: 54, yPercent: 62, shortDesc: 'ANSI/AWWA C900 PVC pressure water pipe and Bison Box valve enclosures.', application: 'Municipal Water Distribution', partNumber: 'TU-P-C900-16', loadRating: 'DR 18 / 235 PSI Rating', sampleProducts: ['TU-C900 PVC Water Pipe', 'Bison Box Valve Access'] },
  { id: 5, number: '05', title: 'Drainage & Stormwater', category: 'Channels & Basins', categoryId: 'drainage-stormwater', xPercent: 65, yPercent: 42, shortDesc: 'Pre-sloped polymer concrete channel drains and catch basins.', application: 'Highway & Runoff Drainage', partNumber: 'TU-CD-200-DI', loadRating: 'AASHTO H-20 Traffic Rated', sampleProducts: ['TU-HydroDrain 200 System'] },
  { id: 6, number: '06', title: 'Manholes & Underground Access', category: 'Castings & Vaults', categoryId: 'manholes-underground-access', xPercent: 78, yPercent: 36, shortDesc: 'AASHTO M306 heavy ductile iron frames and concrete access vaults.', application: 'Municipal Access Nodes', partNumber: 'TU-AV-686-HD', loadRating: 'AASHTO M306 / H-25 Rated', sampleProducts: ['TU-Modular Concrete Vault'] },
  { id: 7, number: '07', title: 'Utility Conduit & Electrical', category: 'Vaults & Duct Banks', categoryId: 'utility-conduit-electrical', xPercent: 26, yPercent: 62, shortDesc: 'SnapLock multi-duct spacers and precast pull boxes.', application: 'Power & Telecom Enclosures', partNumber: 'TU-AV-686-HD', loadRating: '5,000 PSI Precast Concrete', sampleProducts: ['Utility Vault'] },
  { id: 8, number: '08', title: 'Dewatering & Groundwater Control', category: 'Pumps & Filtration', categoryId: 'dewatering-groundwater-control', xPercent: 12, yPercent: 74, shortDesc: 'Electric submersible trash pumps and discharge hoses.', application: 'Groundwater Management', partNumber: 'TU-DP-4IN-SUB', loadRating: '800 GPM Continuous Flow', sampleProducts: ['Submersible Trash Pump'] },
  { id: 9, number: '09', title: 'Trench Tools & Jobsite Equipment', category: 'Tools & Safety', categoryId: 'trench-tools-jobsite-equipment', xPercent: 86, yPercent: 70, shortDesc: 'Telescoping valve operating keys and green-beam pipe lasers.', application: 'Crew Support & Safety', partNumber: 'TU-VK-8FT-KEY', loadRating: 'OSHA 1926 Compliant', sampleProducts: ['Telescoping Valve Key'] },
  { id: 10, number: '10', title: 'Backfill & Surface Restoration', category: 'Plates & Compaction', categoryId: 'backfill-surface-restoration', xPercent: 48, yPercent: 22, shortDesc: 'AASHTO H-20 steel road plates and vibratory compaction rammers.', application: 'Roadway Restoration', partNumber: 'TU-RP-812-H20', loadRating: 'AASHTO H-20 Road Plate', sampleProducts: ['Steel Road Plate'] }
];

export const INDUSTRIES_DATA: Industry[] = [
  {
    id: 'municipal-water',
    title: 'MUNICIPAL WATER INFRASTRUCTURE',
    tagline: 'High-Pressure Potable Distribution & Main Replacements',
    description: 'Engineered water main pipe systems, valve access boxes, and OSHA-compliant trench shields for major city utility modernizations.',
    image: imgPvcPipe,
    relevantCategories: ['water-sewer', 'pipe-installation', 'safety-protection'],
    specs: [
      { label: 'PRESSURE RATING', value: '235 PSI Max' },
      { label: 'COMPLIANCE', value: 'AWWA C900 / NSF 61' },
      { label: 'DEPTH CAPABILITY', value: 'Up to 24 FT Excavations' }
    ]
  },
  {
    id: 'sewer-wastewater',
    title: 'SEWER & WASTEWATER SYSTEMS',
    tagline: 'Gravity Mains, Force Mains & Sanitary Structures',
    description: 'Heavy ductile iron fittings, precast concrete manhole structures, and deep excavation shoring for sanitary sewer installations.',
    image: imgConcreteVault,
    relevantCategories: ['water-sewer', 'manholes-underground-access', 'safety-protection'],
    specs: [
      { label: 'SEEDING STANDARD', value: 'ASTM C478 / ASTM C858' },
      { label: 'CORROSION RATING', value: 'H2S Immune uPVC/Precast' },
      { label: 'FLOW CAPACITY', value: 'Gravity & Force Main Grades' }
    ]
  },
  {
    id: 'stormwater',
    title: 'STORMWATER & FLOOD CONTROL',
    tagline: 'High-Volume Retention Basins & Culvert Infrastructure',
    description: 'Large-bore corrugated HDPE pipe, pre-sloped polymer channel drains, and retention chambers engineered to mitigate urban flooding.',
    image: imgDrainageChannel,
    relevantCategories: ['drainage-stormwater', 'pipe-installation'],
    specs: [
      { label: 'MANNING COEFFICIENT', value: 'n = 0.012 Smooth Bores' },
      { label: 'MAX FLOW RATE', value: '145 CFS Peak Capacity' },
      { label: 'BURIAL DEPTH', value: 'Up to 30 FT Cover' }
    ]
  }
];

export const DEPTH_LEVELS: DepthLevel[] = [
  { level: 1, id: 'surface', title: 'LEVEL 01 — SURFACE', depthMeters: '0.0m - 0.5m', depthFeet: '0 - 1.5 FT', tagline: 'Heavy-Duty Surface Grates & Street Castings', description: 'Impact-resistant surface drainage grates, utility trench covers, and municipal street frames engineered for AASHTO H-20 / HS-20 traffic loading.', products: ['Trench Grates', 'Municipal Castings'], color: '#0066FF' },
  { level: 2, id: 'access', title: 'LEVEL 02 — ACCESS', depthMeters: '0.5m - 2.0m', depthFeet: '1.5 - 6.5 FT', tagline: 'Vault Structures & Structural Access Shafts', description: 'Modular precast concrete vaults, grade rings, and structural access shafts providing maintenance entry to underground networks.', products: ['Precast Vaults', 'Grade Rings'], color: '#0A2540' },
  { level: 3, id: 'trench', title: 'LEVEL 03 — TRENCH', depthMeters: '2.0m - 4.5m', depthFeet: '6.5 - 15 FT', tagline: 'OSHA-Compliant Steel & Aluminum Shoring', description: 'Heavy steel trench boxes, lightweight aluminum shields, and hydraulic shore systems engineered for maximum soil pressure resistance.', products: ['TU-8000 Trench Box'], color: '#0066FF' },
  { level: 4, id: 'utility', title: 'LEVEL 04 — UTILITY', depthMeters: '4.5m - 7.0m', depthFeet: '15 - 23 FT', tagline: 'Conduit Spacer Systems & Main Line Enclosures', description: 'Precision duct bank spacers, high-voltage utility conduits, and pressure pipe fittings engineered for high burial depth performance.', products: ['TU-C900 PVC Pipe'], color: '#0A2540' },
  { level: 5, id: 'flow', title: 'LEVEL 05 — FLOW', depthMeters: '7.0m - 10.0m+', depthFeet: '23 - 33+ FT', tagline: 'High-Volume Storm Retention & Deep Culverts', description: 'Large-bore corrugated storm pipe, deep retention chambers, and high-velocity culvert assemblies for regional water management.', products: ['Storm Pipe'], color: '#0066FF' }
];

export const ANATOMY_POINTS: AnatomyPoint[] = [
  { id: 'road', title: 'ROAD SURFACE LAYER', depth: '0.0 FT', role: 'Distributes dynamic wheel loads across sub-base layers.', spec: 'AASHTO H-20 / HS-20 Traffic Compliant', x: 18, y: 18 },
  { id: 'backfill', title: 'COMPACTED BACKFILL', depth: '-2.5 FT', role: 'Structural granular fill compacted to 95% Modified Proctor density.', spec: 'ASTM D1557 Standard', x: 35, y: 28 },
  { id: 'trenchwall', title: 'UNEXCAVATED TRENCH WALL', depth: '-5.0 FT', role: 'Native soil matrix bearing lateral earth pressure against shoring.', spec: 'Type B / Type C Soil Classification', x: 15, y: 45 },
  { id: 'shoring', title: 'TU-8000 STEEL SHORING SHIELD', depth: '-7.5 FT', role: 'Double-walled high-strength steel panel protecting excavation workers.', spec: 'OSHA 1926 Subpart P Certified', x: 48, y: 48 },
  { id: 'utility', title: 'PRIMARY UTILITY CONDUIT', depth: '-10.0 FT', role: 'Enclosed main line carrying electrical, water, or communication infrastructure.', spec: 'ANSI/AWWA C900 Class 235', x: 65, y: 62 }
];

// EXACTLY 5 CORE PRODUCTS AS REQUESTED BY USER
export const PRODUCTS_CATALOGUE: Product[] = [
  {
    id: 'tu-8000-shield',
    name: 'TU-8000 Heavy-Duty Steel Trench Shield',
    category: 'Trench Safety & Protection',
    subcategory: 'Trench Boxes',
    productFamily: 'Steel Trench Box',
    partNumber: 'TU-SB-824-HD',
    depthLevel: 3,
    material: 'High-Tensile A572 Grade 50 Steel',
    loadRating: 'OSHA 1926 Subpart P / 1,450 PSF Lateral Rating',
    sizeRange: '8ft H x 24ft L (4in Wall Thickness)',
    sizes: ['8ft x 20ft', '8ft x 24ft', '10ft x 24ft'],
    standard: 'ASTM A572 / OSHA Certified',
    application: 'Deep Water Main Trenching & Major Sewer Excavations',
    description: 'Rigid double-wall steel trench box engineered with heavy-duty internal structural steel columns, reinforced corner sockets, and collar-locked spreader pipes.',
    features: [
      'Poured concrete-filled knife edge shoe for ground cutting',
      'Solid steel collars for 8-inch schedule 80 spreader pipes',
      'Heavy four-point lifting lugs rated for 24,000 lbs WLL',
      'Stackable design with heavy pin-lock sockets'
    ],
    image: imgSteelBox,
    cadFileAvailable: true,
    specSheetUrl: '#',
    finish: 'Industrial Safety Blue Powder Coat',
    weight: '12,400 LBS',
    industry: 'Municipal Water & Sewer',
    workflowStep: 'PROTECT'
  },
  {
    id: 'tu-poly-cd',
    name: 'TU-HydroDrain 200 Polymer Channel System',
    category: 'Drainage & Stormwater',
    subcategory: 'Channel Drainage',
    productFamily: 'Channel Drain',
    partNumber: 'TU-CD-200-DI',
    depthLevel: 1,
    material: 'Polymer Concrete with Ductile Iron Edge Rail',
    loadRating: 'AASHTO H-20 / Class E 600 kN Load Rating',
    sizeRange: '8-inch Internal Width x 39.4-inch Lay Length',
    sizes: ['8" W x 39.4" L', '12" W x 39.4" L'],
    standard: 'EN 1433 / AASHTO M306',
    application: 'Industrial Facilities, Highways & Port Terminals',
    description: 'High-capacity pre-sloped channel drain system featuring interlocking tongue-and-groove joints and slotted ductile iron grates with boltless locking pins.',
    features: [
      'Impermeable polymer concrete resistant to harsh chemicals',
      'Integrated cast-iron edge rail protection',
      'High-velocity hydraulic inner channel surface',
      'Interlocking end caps and bottom outlet adapters'
    ],
    image: imgDrainageChannel,
    cadFileAvailable: true,
    specSheetUrl: '#',
    finish: 'Ductile Iron Black Asphaltic Coating',
    weight: '145 LBS / Section',
    industry: 'Road & Highway Infrastructure',
    workflowStep: 'INSTALL'
  },
  {
    id: 'tu-precast-vault',
    name: 'TU-Modular Concrete Access Vault 686',
    category: 'Manholes & Underground Access',
    subcategory: 'Utility Access',
    productFamily: 'Utility Vault',
    partNumber: 'TU-AV-686-HD',
    depthLevel: 2,
    material: 'Precast Concrete 5,000 PSI Fiber-Reinforced',
    loadRating: 'AASHTO HS-20-44 Traffic Rated',
    sizeRange: '6ft W x 8ft L x 6ft H (Custom Knockouts Available)',
    sizes: ['6ft x 8ft x 6ft', '8ft x 10ft x 8ft'],
    standard: 'ASTM C858 / ASTM C478',
    application: 'Electrical Substation Underground Nodes & Fiber Vaults',
    description: 'Heavy-duty precast concrete vault designed with spring-loaded dual aluminum access doors, pre-formed duct knockouts, and ground rod sleeves.',
    features: [
      '5,000 PSI compressive strength concrete mix',
      'Spring-assisted H-20 diamond plate hatch',
      'Hot-dip galvanized internal cable rack ladders',
      'Integrated butyl rubber gasketed joint seals'
    ],
    image: imgConcreteVault,
    cadFileAvailable: true,
    specSheetUrl: '#',
    finish: 'Natural Precast / Bituminous Exterior Coating',
    weight: '18,500 LBS',
    industry: 'Underground Power & Telecom',
    workflowStep: 'ACCESS'
  },
  {
    id: 'tu-c900-pipe',
    name: 'TU-C900 PVC Pressure Utility Pipe System',
    category: 'Water & Sewer',
    subcategory: 'Water Main',
    productFamily: 'Water Pipe',
    partNumber: 'TU-P-C900-12',
    depthLevel: 4,
    material: 'Unplasticized Polyvinyl Chloride (uPVC)',
    loadRating: 'DR 18 / 235 PSI Working Pressure',
    sizeRange: '4-inch to 24-inch Nominal Diameter (20ft Lay Lengths)',
    sizes: ['6"', '8"', '12"', '16"'],
    standard: 'ANSI/AWWA C900 / NSF 61 Certified',
    application: 'Municipal Potable Water Distribution & Transmission Mains',
    description: 'Precision engineered gasketed-joint C900 PVC pipe for high-pressure underground water distribution with complete immune resistance to soil corrosion.',
    features: [
      'Integral bell design with locked-in elastomeric gasket',
      'Smooth interior surface (Hazen-Williams C=150)',
      'Immune to electrochemical soil corrosion',
      'Factory chamfered spigot ends for easy push-on jointing'
    ],
    image: imgPvcPipe,
    cadFileAvailable: true,
    specSheetUrl: '#',
    finish: 'Blue AWWA Potable Water Color Code',
    weight: '42 LBS / FT (12" DR18)',
    industry: 'Municipal Water Infrastructure',
    workflowStep: 'INSTALL'
  },
  {
    id: 'tu-bison-box',
    name: 'Bison Box Valve Access Enclosure',
    category: 'Water & Sewer',
    subcategory: 'Valve Access',
    productFamily: 'Bison Box',
    partNumber: 'TU-BB-24-HD',
    depthLevel: 1,
    material: 'Heavy-Duty Cast Iron Frame & Polymer Riser Base',
    loadRating: 'AASHTO H-20 Traffic Rated',
    sizeRange: '24-inch Frame Diameter / Adjustable Extension',
    sizes: ['18"-24"', '24"-36"', '36"-48"'],
    standard: 'AWWA C500 / ASTM A48 Class 35B',
    application: 'Underground Gate Valve Protection & Surface Access',
    description: 'Structural valve box enclosure protecting underground water main gate valves with non-rocking drop-in lid and telescoping riser stem.',
    features: [
      'Drop-in cast iron lid labeled WATER or SEWER',
      'Telescoping extension prevents frost heave load transfer',
      'Base bell fits up to 12-inch gate valve bonnets'
    ],
    image: imgValveBox,
    cadFileAvailable: true,
    specSheetUrl: '#',
    finish: 'Black Asphaltic Dip',
    weight: '92 LBS',
    industry: 'Municipal Water & Sewer',
    workflowStep: 'ACCESS'
  }
];

export const SOLUTION_APPS: SolutionApp[] = [
  {
    id: 'municipal-water',
    title: 'MUNICIPAL WATER INFRASTRUCTURE',
    tagline: 'High-Pressure Potable Distribution & Main Replacements',
    description: 'Engineered water main pipe systems, valve access boxes, and OSHA-compliant trench shields for major city utility modernizations.',
    image: imgPvcPipe,
    cadOverlay: 'ANSI/AWWA C900 • OSHA SUBPART P • H-20 RATED',
    recommendedProducts: ['TU-8000 Steel Trench Shield', 'TU-C900 PVC Pressure Pipe', 'Bison Box Valve Access'],
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
    image: imgConcreteVault,
    cadOverlay: 'NEMA TC-2 • IEEE 1234 • H-20 TRAFFIC',
    recommendedProducts: ['TU-Modular Concrete Access Vault'],
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
    description: 'AASHTO M306 traffic-rated manhole castings, pre-sloped highway channels, and steel road plates built for high axle loads.',
    image: imgDrainageChannel,
    cadOverlay: 'AASHTO M306 • FAA AC 150 • EN 1433 CLASS F',
    recommendedProducts: ['TU-HydroDrain 200 System'],
    specs: [
      { label: 'PROOF LOAD', value: '50,000 LBS Minimum' },
      { label: 'TRAFFIC GRADE', value: 'AASHTO H-25 / HS-25' },
      { label: 'CORROSION LIFE', value: '50+ Years Guaranteed' }
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
    'TU-C900 PVC 16-inch Pressure Pipe',
    'TU-Modular Concrete Access Vault'
  ],
  scale: '4,200 Linear Feet of Excavation',
  installationTime: '18 Days Ahead of Schedule',
  result: '100% OSHA Subpart P Compliance with Zero Crew Incidents',
  beforeImg: imgSteelBox,
  duringImg: imgPvcPipe,
  afterImg: imgDrainageChannel,
  metrics: [
    { label: 'TOTAL PIPE INSTALLED', value: '4,200 LF' },
    { label: 'EXCAVATION DEPTH', value: '18.5 FT Avg' },
    { label: 'SAFETY INCIDENTS', value: '0 (Zero Logged)' },
    { label: 'SCHEDULE SAVINGS', value: '18 Calendar Days' }
  ]
};
