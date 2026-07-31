import { Product, PrimaryCategory, Industry, DepthLevel, Hotspot, SolutionApp, AnatomyPoint, CaseStudyData } from '../types';

// High-Resolution Curated Unsplash U.S. Infrastructure Photography URLs
const imgSteelBox = 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=1200&q=80';
const imgDrainageChannel = 'https://images.unsplash.com/photo-1574689231351-850029b4e339?auto=format&fit=crop&w=1200&q=80';
const imgConcreteVault = 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80';
const imgPvcPipe = 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80';
const imgManholeCover = 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80';
const imgHydraulicShore = 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80';
const imgHdpePipe = 'https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?auto=format&fit=crop&w=1200&q=80';
const imgExcavatorBucket = 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=1200&q=80';
const imgPipeHandling = 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80';
const imgDuctBank = 'https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?auto=format&fit=crop&w=1200&q=80';
const imgDewateringPump = 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80';
const imgTrenchTools = 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80';
const imgRoadPlate = 'https://images.unsplash.com/photo-1574689231351-850029b4e339?auto=format&fit=crop&w=1200&q=80';
const imgValveBox = 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80';

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
      { id: 'manhole-boxes', name: 'Manhole Boxes', description: '4-sided box enclosures engineered for vault & manhole excavation.', image: imgConcreteVault, productFamilies: ['Manhole Box'] },
      { id: 'hydraulic-shoring', name: 'Hydraulic Shoring', description: 'Hand-pumped aluminum hydraulic shores installed 100% from above ground.', image: imgHydraulicShore, productFamilies: ['Hydraulic Shore', 'Vertical Hydraulic Shore'] },
      { id: 'aluminum-shoring', name: 'Aluminum Shoring', description: 'Modular aluminum shoring panels for tight urban utility work.', image: imgHydraulicShore, productFamilies: ['Aluminum Shoring Panel'] },
      { id: 'slide-rail', name: 'Slide Rail Systems', description: 'Modular dig-and-push shoring systems replacing traditional sheet piling.', image: imgSteelBox, productFamilies: ['Slide Rail Panel'] },
      { id: 'sheeting-bracing', name: 'Sheeting & Bracing', description: 'Interlocking steel trench sheet piling and structural Wales.', image: imgSteelBox, productFamilies: ['Spreaders'] },
      { id: 'trench-access', name: 'Trench Access', description: 'OSHA compliant access ladders, platforms, and walk-through entry gates.', image: imgTrenchTools, productFamilies: ['Trench Ladder', 'Access Platform'] },
      { id: 'safety-accessories', name: 'Safety Accessories', description: 'Edge guard rails, davit arm retrieval systems, and trench crossing bridges.', image: imgTrenchTools, productFamilies: ['Edge Protection'] }
    ]
  },
  {
    number: '02',
    id: 'excavation-equipment',
    title: 'EXCAVATION EQUIPMENT',
    shortName: 'Excavation',
    tagline: 'Heavy-Duty Trenching Buckets & Ground Breaking Attachments',
    description: 'Engineered excavator trenching buckets, compaction wheels, rock breakers, and material handling attachments for earthmoving.',
    image: imgExcavatorBucket,
    hotspotIndex: 2,
    subcategories: [
      { id: 'excavator-buckets', name: 'Excavator Buckets', description: 'Heavy-capacity digging and trenching buckets for 10t to 50t excavators.', image: imgExcavatorBucket, productFamilies: ['Standard Trenching Bucket'] },
      { id: 'trenching-buckets', name: 'Trenching Buckets', description: 'Narrow-profile high-taper buckets for clean trench wall digging.', image: imgExcavatorBucket, productFamilies: ['Heavy-Duty Trenching Bucket', 'Narrow Utility Bucket'] },
      { id: 'compaction-equipment', name: 'Compaction Equipment', description: 'Excavator-mounted compaction wheels and hydraulic plate compactors.', image: imgRoadPlate, productFamilies: ['Compaction Wheel', 'Plate Compactor'] },
      { id: 'ground-breaking', name: 'Ground Breaking', description: 'Hydraulic rock breakers and severe-duty ripper teeth.', image: imgExcavatorBucket, productFamilies: ['Hydraulic Breaker', 'Rock Bucket'] },
      { id: 'material-handling', name: 'Material Handling', description: 'Hydraulic demolition grapples and heavy lifting attachments.', image: imgExcavatorBucket, productFamilies: ['Excavator Grapple', 'Lifting Attachment'] },
      { id: 'excavation-attachments', name: 'Excavation Attachments', description: 'Quick couplers, tilt rotators, and specialized trench bedding buckets.', image: imgExcavatorBucket, productFamilies: ['Material Bucket'] }
    ]
  },
  {
    number: '03',
    id: 'pipe-installation',
    title: 'PIPE & UTILITY INSTALLATION',
    shortName: 'Pipe Installation',
    tagline: 'Precision Pipe Handling, Alignment Clamps & Rigging Systems',
    description: 'Precision pipe rollers, nylon slings, alignment clamps, and pipe pullers engineered for damage-free utility placement.',
    image: imgPipeHandling,
    hotspotIndex: 3,
    subcategories: [
      { id: 'pipe-handling', name: 'Pipe Handling', description: 'Heavy-duty pipe rollers, cradles, and non-marring nylon slings.', image: imgPipeHandling, productFamilies: ['Pipe Roller', 'Pipe Sling'] },
      { id: 'pipe-alignment', name: 'Pipe Alignment', description: 'Internal and external alignment clamps for exact joint centering.', image: imgPipeHandling, productFamilies: ['Pipe Clamp', 'Alignment Clamp'] },
      { id: 'pipe-supports', name: 'Pipe Supports', description: 'Adjustable pipe stands, cradles, and structural bedding supports.', image: imgPipeHandling, productFamilies: ['Pipe Support', 'Pipe Stand'] },
      { id: 'installation-tools', name: 'Pipe Installation Tools', description: 'Hydraulic pipe pullers, joint pushers, and assembly tools.', image: imgPipeHandling, productFamilies: ['Pipe Puller'] },
      { id: 'lifting-systems', name: 'Lifting Systems', description: 'Grade 100 pipe lifting hooks and multi-leg sling assemblies.', image: imgPipeHandling, productFamilies: ['Pipe Lifting Hook'] },
      { id: 'pipe-cutting', name: 'Pipe Cutting', description: 'Guillotine pipe cutters, bevelers, and field chamfering tools.', image: imgPipeHandling, productFamilies: ['Pipe Cutter', 'Chamfering Tool'] },
      { id: 'connection-equipment', name: 'Connection Equipment', description: 'Mechanical restraint harnesses and joint lubricant systems.', image: imgPipeHandling, productFamilies: ['Installation Guide'] }
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
      { id: 'sewer-systems', name: 'Sewer Systems', description: 'Gravity sewer pipe, force main pipe, and flexible rubber couplings.', image: imgPvcPipe, productFamilies: ['Sewer Pipe'] },
      { id: 'valve-access', name: 'Valve Access', description: 'Cast iron valve boxes, curb boxes, and Bison Box enclosures.', image: imgValveBox, productFamilies: ['Valve Box', 'Curb Box', 'Bison Box', 'Service Box'] },
      { id: 'service-connections', name: 'Service Connections', description: 'Ductile iron service saddles, corporation stops, and curb stops.', image: imgPvcPipe, productFamilies: ['Service Saddle'] },
      { id: 'fittings', name: 'Fittings', description: 'Ductile iron mechanical joint tees, elbows, and flange adapters.', image: imgPvcPipe, productFamilies: ['Pipe Fitting', 'Flange Adapter', 'Coupling'] },
      { id: 'repair-products', name: 'Repair Products', description: 'Stainless steel full-circle repair clamps and transition couplings.', image: imgPvcPipe, productFamilies: ['Repair Clamp'] },
      { id: 'valves', name: 'Valves', description: 'Resilient wedge gate valves, butterfly valves, and valve operating keys.', image: imgPvcPipe, productFamilies: ['Gate Valve', 'Valve Extension', 'Valve Wrench'] }
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
      { id: 'trench-drainage', name: 'Trench Drainage', description: 'Modular trench drain channels with ductile iron edge rails.', image: imgDrainageChannel, productFamilies: ['Trench Drain'] },
      { id: 'channel-drainage', name: 'Channel Drainage', description: 'Pre-sloped polymer concrete channel drainage systems.', image: imgDrainageChannel, productFamilies: ['Channel Drain', 'Slot Drain'] },
      { id: 'catch-basins', name: 'Catch Basins', description: 'Precast concrete and polymer catch basins with sediment buckets.', image: imgDrainageChannel, productFamilies: ['Catch Basin', 'Drainage Inlet'] },
      { id: 'stormwater-systems', name: 'Stormwater Systems', description: 'Underground retention/detention storm chambers.', image: imgHdpePipe, productFamilies: ['Stormwater Chamber'] },
      { id: 'culverts', name: 'Culverts', description: 'Corrugated HDPE dual-wall storm pipe and flared end sections.', image: imgHdpePipe, productFamilies: ['Culvert Pipe', 'End Section'] },
      { id: 'drainage-grates', name: 'Drainage Grates', description: 'Heavy-duty slotted, mesh, and ADA-compliant grates.', image: imgDrainageChannel, productFamilies: ['Drain Grate', 'Catch Basin Grate'] },
      { id: 'detention-retention', name: 'Detention / Retention', description: 'Modular stormwater retention boxes and control structures.', image: imgHdpePipe, productFamilies: ['Area Drain'] }
    ]
  },
  {
    number: '06',
    id: 'manholes-underground-access',
    title: 'MANHOLES & UNDERGROUND ACCESS',
    shortName: 'Underground Access',
    tagline: 'AASHTO M306 Traffic Castings, Precast Risers & Access Hatches',
    description: 'AASHTO M306 heavy-duty ductile iron manhole frames, precast concrete riser rings, and spring-assisted aluminum hatches.',
    image: imgManholeCover,
    hotspotIndex: 6,
    subcategories: [
      { id: 'manholes', name: 'Manholes', description: 'Precast concrete monolithic manhole bases and cone sections.', image: imgConcreteVault, productFamilies: ['Manhole Riser'] },
      { id: 'frames-covers', name: 'Frames & Covers', description: 'AASHTO M306 heavy ductile iron frames and covers.', image: imgManholeCover, productFamilies: ['Manhole Cover', 'Manhole Frame', 'Heavy-Duty Frame & Cover'] },
      { id: 'risers', name: 'Risers', description: 'Precast concrete manhole riser sections and grade rings.', image: imgConcreteVault, productFamilies: ['Grade Ring'] },
      { id: 'grade-adjustment', name: 'Grade Adjustment', description: 'Polymer rubber and composite grade adjustment rings.', image: imgConcreteVault, productFamilies: ['Adjustment Ring'] },
      { id: 'access-hatches', name: 'Access Hatches', description: 'Spring-assisted aluminum diamond plate double door hatches.', image: imgConcreteVault, productFamilies: ['Access Hatch'] },
      { id: 'steps-accessories', name: 'Steps & Accessories', description: 'Copolymer polypropylene manhole steps and locking covers.', image: imgManholeCover, productFamilies: ['Manhole Step', 'Locking Cover'] },
      { id: 'utility-access', name: 'Utility Access', description: 'Cast iron valve and inspection covers for utility nodes.', image: imgManholeCover, productFamilies: ['Utility Cover', 'Inspection Cover'] }
    ]
  },
  {
    number: '07',
    id: 'utility-conduit-electrical',
    title: 'UTILITY CONDUIT & ELECTRICAL',
    shortName: 'Utility & Electrical',
    tagline: 'Precision Duct Spacers, Electrical Vaults & Fiber Pull Boxes',
    description: 'NEMA TC-2 PVC conduit, SnapLock multi-duct spacers, precast electrical pull boxes, and non-conductive access vaults.',
    image: imgDuctBank,
    hotspotIndex: 7,
    subcategories: [
      { id: 'utility-conduit', name: 'Utility Conduit', description: 'NEMA TC-2 Schedule 40/80 PVC conduit and DB-120 duct.', image: imgDuctBank, productFamilies: ['PVC Conduit', 'HDPE Conduit'] },
      { id: 'duct-bank', name: 'Duct Bank', description: 'SnapLock vertical and horizontal duct bank spacers.', image: imgDuctBank, productFamilies: ['Duct Spacer'] },
      { id: 'utility-vaults', name: 'Utility Vaults', description: '5,000 PSI precast concrete electrical and fiber optic vaults.', image: imgConcreteVault, productFamilies: ['Utility Vault'] },
      { id: 'handholes', name: 'Handholes', description: 'Polymer concrete composite handholes and access enclosures.', image: imgConcreteVault, productFamilies: ['Electrical Handhole'] },
      { id: 'pull-boxes', name: 'Pull Boxes', description: 'Precast pull boxes with knockouts and cable racks.', image: imgConcreteVault, productFamilies: ['Pull Box'] },
      { id: 'cable-installation', name: 'Cable Installation', description: 'Cable pulling rollers, sheave wheels, and duct mandrels.', image: imgDuctBank, productFamilies: ['Cable Roller', 'Cable Pulling Guide'] },
      { id: 'conduit-accessories', name: 'Conduit Accessories', description: 'Conduit bends, bell ends, couplings, and expansion joints.', image: imgDuctBank, productFamilies: ['Conduit Coupling', 'Conduit Bend', 'Conduit Fitting'] }
    ]
  },
  {
    number: '08',
    id: 'dewatering-groundwater-control',
    title: 'DEWATERING & GROUNDWATER CONTROL',
    shortName: 'Dewatering',
    tagline: 'Submersible Trash Pumps, Wellpoint Systems & Filtration',
    description: 'Heavy-duty electric submersible trash pumps, wellpoint header systems, discharge hoses, and sediment filtration tanks.',
    image: imgDewateringPump,
    hotspotIndex: 8,
    subcategories: [
      { id: 'submersible-pumps', name: 'Submersible Pumps', description: 'High-head electric submersible dewatering pumps.', image: imgDewateringPump, productFamilies: ['Submersible Pump'] },
      { id: 'trash-pumps', name: 'Trash Pumps', description: 'Engine-driven self-priming trash pumps handling 3" solids.', image: imgDewateringPump, productFamilies: ['Trash Pump'] },
      { id: 'wellpoint-systems', name: 'Wellpoint Systems', description: 'Vacuum-assisted wellpoint pumps, headers, and wellpoint tips.', image: imgDewateringPump, productFamilies: ['Wellpoint Pump', 'Wellpoint Header', 'Wellpoint'] },
      { id: 'discharge-systems', name: 'Discharge Systems', description: 'Heavy-duty layflat discharge hose and quick-cam couplings.', image: imgPvcPipe, productFamilies: ['Discharge Hose', 'Suction Hose', 'Pump Coupling'] },
      { id: 'filtration', name: 'Filtration', description: 'Dewatering filter bags, suction strainers, and geotextile socks.', image: imgDewateringPump, productFamilies: ['Strainer', 'Filter Bag'] },
      { id: 'groundwater-control', name: 'Groundwater Control', description: 'Mobile settlement tanks and oil-water separators.', image: imgConcreteVault, productFamilies: ['Settlement Tank'] }
    ]
  },
  {
    number: '09',
    id: 'trench-tools-jobsite-equipment',
    title: 'TRENCH TOOLS & JOBSITE EQUIPMENT',
    shortName: 'Tools',
    tagline: 'Specialized Valve Keys, Laser Levels & Trench Access Ramps',
    description: 'Heavy trench shovels, telescoping valve operating keys, pipe cutters, pipe lasers, and OSHA compliant jobsite safety barricades.',
    image: imgTrenchTools,
    hotspotIndex: 9,
    subcategories: [
      { id: 'trench-tools', name: 'Trench Tools', description: 'Narrow steel trench shovels and clean-out scoops.', image: imgTrenchTools, productFamilies: ['Trench Shovel'] },
      { id: 'valve-tools', name: 'Valve Tools', description: 'Telescoping valve keys, curb box keys, and hydrant wrenches.', image: imgTrenchTools, productFamilies: ['Valve Wrench', 'Curb Box Key'] },
      { id: 'pipe-tools', name: 'Pipe Tools', description: 'Guillotine pipe cutters, bevelers, and squeeze-off tools.', image: imgTrenchTools, productFamilies: ['Pipe Cutter'] },
      { id: 'measuring-equipment', name: 'Measuring Equipment', description: 'Green-beam pipe lasers, optical levels, and grade rods.', image: imgTrenchTools, productFamilies: ['Grade Rod', 'Laser Level', 'Measuring Tool'] },
      { id: 'lifting-equipment', name: 'Lifting Equipment', description: 'Grade 100 4-leg chain slings, lifting hooks, and shackles.', image: imgPipeHandling, productFamilies: ['Lifting Hook', 'Chain Sling'] },
      { id: 'jobsite-safety', name: 'Jobsite Safety', description: 'OSHA trench access ladders, safety barricades, and utility markers.', image: imgTrenchTools, productFamilies: ['Barricade', 'Utility Marker', 'Trench Access Ladder'] }
    ]
  },
  {
    number: '10',
    id: 'backfill-surface-restoration',
    title: 'BACKFILL & SURFACE RESTORATION',
    shortName: 'Restoration',
    tagline: 'Heavy Road Plates, Vibratory Rammers & Bedding Equipment',
    description: 'AASHTO H-20 steel road plates, vibratory compaction rammers, asphalt cutters, and bedding placement attachments.',
    image: imgRoadPlate,
    hotspotIndex: 10,
    subcategories: [
      { id: 'road-plates', name: 'Road Plates', description: 'AASHTO H-20 traffic-rated steel road plates with lifting pin holes.', image: imgRoadPlate, productFamilies: ['Road Plate'] },
      { id: 'compaction', name: 'Compaction', description: 'Vibratory rammers, compaction plates, and excavator wheels.', image: imgRoadPlate, productFamilies: ['Compaction Plate', 'Vibratory Rammer', 'Compaction Wheel'] },
      { id: 'bedding-equipment', name: 'Bedding Equipment', description: 'Trench bedding stone placement boxes and aggregate chutes.', image: imgRoadPlate, productFamilies: ['Pipe Bedding Equipment'] },
      { id: 'backfill-equipment', name: 'Backfill Equipment', description: 'Excavator backfill blades and stone shooter attachments.', image: imgRoadPlate, productFamilies: ['Backfill Attachment'] },
      { id: 'asphalt-equipment', name: 'Asphalt Equipment', description: 'Excavator asphalt cutters and joint sealing equipment.', image: imgRoadPlate, productFamilies: ['Asphalt Cutter', 'Surface Compactor'] },
      { id: 'surface-restoration', name: 'Surface Restoration', description: 'Concrete repair tools and pavement restoration machinery.', image: imgRoadPlate, productFamilies: ['Concrete Repair Tool', 'Pavement Restoration Equipment'] }
    ]
  }
];

export const HOTSPOTS: Hotspot[] = [
  { id: 1, number: '01', title: 'Trench Safety & Protection', category: 'Shoring & Shielding', categoryId: 'safety-protection', xPercent: 32, yPercent: 48, shortDesc: 'OSHA 1926 Subpart P double-walled steel trench boxes and hydraulic shores.', application: 'Deep Utility Excavation', partNumber: 'TU-SB-824-HD', loadRating: 'OSHA Subpart P Certified', sampleProducts: ['TU-8000 Steel Trench Box', 'TU-HydroLite Hydraulic Shore'] },
  { id: 2, number: '02', title: 'Excavation Equipment', category: 'Buckets & Compactors', categoryId: 'excavation-equipment', xPercent: 20, yPercent: 28, shortDesc: 'Heavy-duty trenching buckets, compaction wheels, and hydraulic breakers.', application: 'Earthmoving & Trench Digging', partNumber: 'TU-TB-36-HD', loadRating: '50t Excavator Rated', sampleProducts: ['Heavy-Duty Trenching Bucket', 'Compaction Wheel'] },
  { id: 3, number: '03', title: 'Pipe & Utility Installation', category: 'Handling & Alignment', categoryId: 'pipe-installation', xPercent: 44, yPercent: 68, shortDesc: 'Precision pipe rollers, nylon slings, alignment clamps, and hydraulic pullers.', application: 'Utility Main Placement', partNumber: 'TU-PR-24-HD', loadRating: '12,000 LBS WLL', sampleProducts: ['Pipe Roller', 'Pipe Puller'] },
  { id: 4, number: '04', title: 'Water & Sewer', category: 'Mains & Valve Access', categoryId: 'water-sewer', xPercent: 54, yPercent: 62, shortDesc: 'ANSI/AWWA C900 PVC pressure water pipe, Bison Box valve enclosures, and fittings.', application: 'Municipal Water Distribution', partNumber: 'TU-P-C900-16', loadRating: 'DR 18 / 235 PSI Rating', sampleProducts: ['TU-C900 PVC Water Pipe', 'Bison Box Valve Access'] },
  { id: 5, number: '05', title: 'Drainage & Stormwater', category: 'Channels & Basins', categoryId: 'drainage-stormwater', xPercent: 65, yPercent: 42, shortDesc: 'Pre-sloped polymer concrete channel drains, catch basins, and HDPE culverts.', application: 'Highway & Runoff Drainage', partNumber: 'TU-CD-200-DI', loadRating: 'AASHTO H-20 Traffic Rated', sampleProducts: ['TU-HydroDrain 200 System', 'Catch Basin'] },
  { id: 6, number: '06', title: 'Manholes & Underground Access', category: 'Castings & Vaults', categoryId: 'manholes-underground-access', xPercent: 78, yPercent: 36, shortDesc: 'AASHTO M306 heavy ductile iron frames, covers, grade rings, and aluminum hatches.', application: 'Municipal Access Nodes', partNumber: 'TU-MC-24-DI', loadRating: 'AASHTO M306 / H-25 Rated', sampleProducts: ['TU-IronClad 24 Cover', 'Access Hatch'] },
  { id: 7, number: '07', title: 'Utility Conduit & Electrical', category: 'Vaults & Duct Banks', categoryId: 'utility-conduit-electrical', xPercent: 26, yPercent: 62, shortDesc: 'SnapLock multi-duct spacers, precast concrete pull boxes, and PVC conduit.', application: 'Power & Telecom Enclosures', partNumber: 'TU-AV-686-HD', loadRating: '5,000 PSI Precast Concrete', sampleProducts: ['TU-SnapLock Duct Spacer', 'Utility Vault'] },
  { id: 8, number: '08', title: 'Dewatering & Groundwater Control', category: 'Pumps & Filtration', categoryId: 'dewatering-groundwater-control', xPercent: 12, yPercent: 74, shortDesc: 'Electric submersible trash pumps, wellpoint header systems, and discharge hoses.', application: 'Groundwater Management', partNumber: 'TU-DP-4IN-SUB', loadRating: '800 GPM Continuous Flow', sampleProducts: ['Submersible Trash Pump', 'Wellpoint Header'] },
  { id: 9, number: '09', title: 'Trench Tools & Jobsite Equipment', category: 'Tools & Safety', categoryId: 'trench-tools-jobsite-equipment', xPercent: 86, yPercent: 70, shortDesc: 'Telescoping valve operating keys, green-beam pipe lasers, and trench ladders.', application: 'Crew Support & Safety', partNumber: 'TU-VK-8FT-KEY', loadRating: 'OSHA 1926 Compliant', sampleProducts: ['Telescoping Valve Key', 'Pipe Laser'] },
  { id: 10, number: '10', title: 'Backfill & Surface Restoration', category: 'Plates & Compaction', categoryId: 'backfill-surface-restoration', xPercent: 48, yPercent: 22, shortDesc: 'AASHTO H-20 steel road plates, vibratory compaction rammers, and asphalt cutters.', application: 'Roadway Restoration', partNumber: 'TU-RP-812-H20', loadRating: 'AASHTO H-20 Road Plate', sampleProducts: ['Steel Road Plate', 'Vibratory Rammer'] }
];

export const INDUSTRIES_DATA: Industry[] = [
  {
    id: 'municipal-water',
    title: 'MUNICIPAL WATER INFRASTRUCTURE',
    tagline: 'High-Pressure Potable Distribution & Main Replacements',
    description: 'Engineered water main pipe systems, valve access boxes, and OSHA-compliant trench shields for major city utility modernizations.',
    image: imgPvcPipe,
    relevantCategories: ['water-sewer', 'pipe-installation', 'safety-protection', 'manholes-underground-access'],
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
    relevantCategories: ['water-sewer', 'manholes-underground-access', 'safety-protection', 'dewatering-groundwater-control'],
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
    relevantCategories: ['drainage-stormwater', 'pipe-installation', 'backfill-surface-restoration'],
    specs: [
      { label: 'MANNING COEFFICIENT', value: 'n = 0.012 Smooth Bores' },
      { label: 'MAX FLOW RATE', value: '145 CFS Peak Capacity' },
      { label: 'BURIAL DEPTH', value: 'Up to 30 FT Cover' }
    ]
  },
  {
    id: 'underground-utilities',
    title: 'UNDERGROUND POWER & TELECOM',
    tagline: 'High-Voltage Duct Banks & Structured Fiber Nodes',
    description: 'Precision duct spacers, concrete pull boxes, and non-conductive access risers designed to house critical electrical and fiber grids.',
    image: imgDuctBank,
    relevantCategories: ['utility-conduit-electrical', 'manholes-underground-access', 'safety-protection'],
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
    image: imgRoadPlate,
    relevantCategories: ['backfill-surface-restoration', 'drainage-stormwater', 'manholes-underground-access'],
    specs: [
      { label: 'PROOF LOAD', value: '50,000 LBS Minimum' },
      { label: 'TRAFFIC GRADE', value: 'AASHTO H-25 / HS-25' },
      { label: 'CORROSION LIFE', value: '50+ Years Guaranteed' }
    ]
  }
];

export const DEPTH_LEVELS: DepthLevel[] = [
  { level: 1, id: 'surface', title: 'LEVEL 01 — SURFACE', depthMeters: '0.0m - 0.5m', depthFeet: '0 - 1.5 FT', tagline: 'Heavy-Duty Surface Grates & Street Castings', description: 'Impact-resistant surface drainage grates, utility trench covers, and municipal street frames engineered for AASHTO H-20 / HS-20 traffic loading.', products: ['Trench Grates', 'Municipal Castings', 'Vault Hatch Covers'], color: '#0066FF' },
  { level: 2, id: 'access', title: 'LEVEL 02 — ACCESS', depthMeters: '0.5m - 2.0m', depthFeet: '1.5 - 6.5 FT', tagline: 'Vault Structures & Structural Access Shafts', description: 'Modular precast concrete vaults, grade rings, and structural access shafts providing maintenance entry to underground networks.', products: ['Precast Vaults', 'Grade Rings', 'Access Risers'], color: '#0A2540' },
  { level: 3, id: 'trench', title: 'LEVEL 03 — TRENCH', depthMeters: '2.0m - 4.5m', depthFeet: '6.5 - 15 FT', tagline: 'OSHA-Compliant Steel & Aluminum Shoring', description: 'Heavy steel trench boxes, lightweight aluminum shields, and hydraulic shore systems engineered for maximum soil pressure resistance.', products: ['TU-8000 Trench Box', 'Aluminum Shield', 'Hydraulic Shores'], color: '#0066FF' },
  { level: 4, id: 'utility', title: 'LEVEL 04 — UTILITY', depthMeters: '4.5m - 7.0m', depthFeet: '15 - 23 FT', tagline: 'Conduit Spacer Systems & Main Line Enclosures', description: 'Precision duct bank spacers, high-voltage utility conduits, and pressure pipe fittings engineered for high burial depth performance.', products: ['Duct Spacers', 'Utility Conduit', 'Pressure Sleeves'], color: '#0A2540' },
  { level: 5, id: 'flow', title: 'LEVEL 05 — FLOW', depthMeters: '7.0m - 10.0m+', depthFeet: '23 - 33+ FT', tagline: 'High-Volume Storm Retention & Deep Culverts', description: 'Large-bore corrugated storm pipe, deep retention chambers, and high-velocity culvert assemblies for regional water management.', products: ['Storm Pipe', 'Retention Boxes', 'Culvert Assemblies'], color: '#0066FF' }
];

export const ANATOMY_POINTS: AnatomyPoint[] = [
  { id: 'road', title: 'ROAD SURFACE LAYER', depth: '0.0 FT', role: 'Distributes dynamic wheel loads across sub-base layers.', spec: 'AASHTO H-20 / HS-20 Traffic Compliant', x: 18, y: 18 },
  { id: 'backfill', title: 'COMPACTED BACKFILL', depth: '-2.5 FT', role: 'Structural granular fill compacted to 95% Modified Proctor density.', spec: 'ASTM D1557 Standard', x: 35, y: 28 },
  { id: 'trenchwall', title: 'UNEXCAVATED TRENCH WALL', depth: '-5.0 FT', role: 'Native soil matrix bearing lateral earth pressure against shoring.', spec: 'Type B / Type C Soil Classification', x: 15, y: 45 },
  { id: 'shoring', title: 'TU-8000 STEEL SHORING SHIELD', depth: '-7.5 FT', role: 'Double-walled high-strength steel panel protecting excavation workers.', spec: 'OSHA 1926 Subpart P Certified', x: 48, y: 48 },
  { id: 'utility', title: 'PRIMARY UTILITY CONDUIT', depth: '-10.0 FT', role: 'Enclosed main line carrying electrical, water, or communication infrastructure.', spec: 'ANSI/AWWA C900 Class 235', x: 65, y: 62 },
  { id: 'drainage', title: 'PERFORATED DRAINAGE PIPE', depth: '-12.5 FT', role: 'Prevents hydrostatic uplift by diverting subsurface water away.', spec: 'AASHTO M252 Type S', x: 30, y: 75 },
  { id: 'bedding', title: 'PIPE BEDDING GRAVEL', depth: '-14.0 FT', role: 'Washed crushed stone bedding supporting uniform pipe invert elevation.', spec: 'ASTM C33 No. 57 Coarse Aggregate', x: 52, y: 82 },
  { id: 'access', title: 'PRECAST ACCESS RISER', depth: '-4.0 FT', role: 'Direct vertical entry portal for inspection equipment and maintenance.', spec: 'ASTM C478 Monolithic Joints', x: 80, y: 35 },
  { id: 'groundwater', title: 'GROUNDWATER CONTROL ZONE', depth: '-16.0 FT', role: 'Geotextile fabric barrier filtering fine soil particles from drainage stone.', spec: 'AASHTO M288 Class 1 Geotextile', x: 75, y: 88 }
];

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
  },
  {
    id: 'tu-duct-spacer',
    name: 'TU-SnapLock Multi-Duct Conduit Spacer',
    category: 'Utility Conduit & Electrical',
    subcategory: 'Duct Bank',
    productFamily: 'Duct Spacer',
    partNumber: 'TU-DS-44-SL',
    depthLevel: 4,
    material: 'High-Impact Polystyrene (HIPS)',
    loadRating: '[VERIFIED STRUCTURAL COMPLIANCE]',
    sizeRange: '4-inch Duct Diameter / 3-inch & 4-inch Separation',
    sizes: ['2" Duct / 2" Space', '4" Duct / 3" Space', '4" Duct / 4" Space'],
    standard: 'NEMA TC-2 / UL Listed',
    application: 'Underground Electrical Duct Banks & Telecommunication Enclosures',
    description: 'Interlocking vertical and horizontal spacer modules designed to maintain exact duct separation and prevent floating during concrete encasement.',
    features: [
      'Snap-together base and intermediate modules',
      'Rebar alignment slots for secure trench positioning',
      'High compressive resistance during concrete placement',
      'UV-stabilized weather-resistant formulation'
    ],
    image: imgDuctBank,
    cadFileAvailable: true,
    specSheetUrl: '#',
    finish: 'Natural High-Impact Base Plastic',
    weight: '1.8 LBS / Module',
    industry: 'Underground Power & Telecom',
    workflowStep: 'INSTALL'
  },
  {
    id: 'tu-hydraulic-shore',
    name: 'TU-HydroLite Aluminum Hydraulic Shoring Rail',
    category: 'Trench Safety & Protection',
    subcategory: 'Hydraulic Shoring',
    productFamily: 'Hydraulic Shore',
    partNumber: 'TU-HS-8FT-AL',
    depthLevel: 3,
    material: '6061-T6 High-Strength Aluminum Alloy',
    loadRating: 'OSHA Type A & Type B Soil Rated (3,500 PSI Max Pressure)',
    sizeRange: '8ft Rail Length / 2in Hydraulic Cylinders',
    sizes: ['5ft Rail / 2" Cylinder', '8ft Rail / 2" Cylinder', '12ft Rail / 3" Cylinder'],
    standard: 'OSHA 1926 Subpart P Compliant',
    application: 'Spot Repairs, Utility Taps & Tight Urban Excavations',
    description: 'Lightweight hydraulic shoring system installed completely from above the trench using a hand-operated hydraulic pump and biodegradable fluid.',
    features: [
      'Installed 100% from above ground for ultimate crew safety',
      'High-strength 6061-T6 structural aluminum rails',
      'Heavy-duty dual-action hydraulic cylinders',
      'Includes safety lock pins and release hook assembly'
    ],
    image: imgHydraulicShore,
    cadFileAvailable: true,
    specSheetUrl: '#',
    finish: 'Anodized Aircraft Aluminum',
    weight: '78 LBS / Cylinder Assembly',
    industry: 'Civil Infrastructure & Utilities',
    workflowStep: 'PROTECT'
  },
  {
    id: 'tu-manhole-casting',
    name: 'TU-IronClad 24 Municipal Heavy Cover Assembly',
    category: 'Manholes & Underground Access',
    subcategory: 'Frames & Covers',
    productFamily: 'Manhole Cover',
    partNumber: 'TU-MC-24-DI',
    depthLevel: 1,
    material: 'Ductile Iron Class 65-45-12',
    loadRating: 'AASHTO M306 / H-25 Heavy Aircraft Rated',
    sizeRange: '24-inch Clear Opening / 7-inch Frame Depth',
    sizes: ['24" Opening', '30" Opening', '36" Opening'],
    standard: 'AASHTO M306 / ASTM A536',
    application: 'City Street Paving, Sanitary Manholes & Airport Aprons',
    description: 'Heavy ductile iron frame and non-rocking machined lid equipped with continuous EPDM gasket seal and custom municipality logo lettering.',
    features: [
      'Machined bearing surfaces eliminate traffic clatter',
      'EPDM continuous seal prevents infiltration',
      'Pickhole design prevents debris accumulation',
      'Proof-loaded to 50,000 lbs minimum'
    ],
    image: imgManholeCover,
    cadFileAvailable: true,
    specSheetUrl: '#',
    finish: 'Black Asphaltic Coating',
    weight: '340 LBS Complete Assembly',
    industry: 'Road & Highway Infrastructure',
    workflowStep: 'ACCESS'
  },
  {
    id: 'tu-storm-pipe',
    name: 'TU-MegaFlow Corrugated HDPE Storm Pipe',
    category: 'Drainage & Stormwater',
    subcategory: 'Culverts',
    productFamily: 'Culvert Pipe',
    partNumber: 'TU-SP-36-HDPE',
    depthLevel: 5,
    material: 'High-Density Polyethylene Dual Wall',
    loadRating: 'AASHTO H-20 Minimum Cover Rated',
    sizeRange: '36-inch Diameter (20ft Joint Lengths)',
    sizes: ['18"', '24"', '36"', '48"'],
    standard: 'AASHTO M294 Type S / ASTM F2306',
    application: 'Highway Culverts, Retention Basins & Storm Sewers',
    description: 'Dual-wall HDPE pipe with smooth inner waterway and corrugated outer wall for maximum structural beam strength and high flow efficiency.',
    features: [
      'Smooth interior Manning roughness coefficient n=0.012',
      'Integral bell-and-spigot rubber gasket joint',
      'Lightweight construction reduces crane rental costs',
      '100-year structural design life rating'
    ],
    image: imgHdpePipe,
    cadFileAvailable: true,
    specSheetUrl: '#',
    finish: 'High-Density Black Resin',
    weight: '38 LBS / FT',
    industry: 'Stormwater & Flood Control',
    workflowStep: 'INSTALL'
  },
  {
    id: 'tu-road-plate',
    name: 'AASHTO H-20 Structural Steel Road Plate',
    category: 'Backfill & Surface Restoration',
    subcategory: 'Road Plates',
    productFamily: 'Road Plate',
    partNumber: 'TU-RP-812-H20',
    depthLevel: 1,
    material: 'ASTM A36 Structural Steel',
    loadRating: 'AASHTO H-20 Full Axle Load Rated',
    sizeRange: '8ft W x 12ft L (1.0in & 1.25in Thickness)',
    sizes: ['4ft x 8ft x 1"', '8ft x 12ft x 1"', '8ft x 20ft x 1.25"'],
    standard: 'ASTM A36 / AASHTO Standard',
    application: 'Temporary Street Excavation Decking & Traffic Bypass',
    description: 'Heavy structural steel road plate engineered with flush-mount center lifting nut holes and anti-skid surface coating for safe traffic bridging.',
    features: [
      'Beveled edges prevent tire impact damage',
      'Center flush-mount lifting pin for rapid crane handling',
      'High-traction aggregate epoxy skid-resistant coating'
    ],
    image: imgRoadPlate,
    cadFileAvailable: true,
    specSheetUrl: '#',
    finish: 'High-Traction Anti-Skid Coating',
    weight: '3,920 LBS',
    industry: 'Road & Highway Infrastructure',
    workflowStep: 'RESTORE'
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
    image: imgDuctBank,
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
    description: 'AASHTO M306 traffic-rated manhole castings, pre-sloped highway channels, and steel road plates built for high axle loads.',
    image: imgDrainageChannel,
    cadOverlay: 'AASHTO M306 • FAA AC 150 • EN 1433 CLASS F',
    recommendedProducts: ['TU-IronClad 24 Cover', 'TU-HydroDrain 200 System', 'AASHTO H-20 Road Plate'],
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
    'TU-HydroLite Aluminum Hydraulic Shores',
    'TU-C900 PVC 16-inch Pressure Pipe',
    'TU-IronClad 24 Heavy Manhole Castings'
  ],
  scale: '4,200 Linear Feet of Excavation',
  installationTime: '18 Days Ahead of Schedule',
  result: '100% OSHA Subpart P Compliance with Zero Crew Incidents',
  beforeImg: imgSteelBox,
  duringImg: imgPipeHandling,
  afterImg: imgRoadPlate,
  metrics: [
    { label: 'TOTAL PIPE INSTALLED', value: '4,200 LF' },
    { label: 'EXCAVATION DEPTH', value: '18.5 FT Avg' },
    { label: 'SAFETY INCIDENTS', value: '0 (Zero Logged)' },
    { label: 'SCHEDULE SAVINGS', value: '18 Calendar Days' }
  ]
};
