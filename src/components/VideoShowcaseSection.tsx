import React, { useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Video, Sparkles, Layers, Trees, ShieldCheck, Film, Maximize2 } from 'lucide-react';

interface VideoItem {
  id: string;
  category: 'tree-grate' | 'trench-grate' | 'catch-basin-grate';
  categoryLabel: string;
  title: string;
  subtitle: string;
  videoUrl: string;
  posterUrl: string;
  description: string;
  specs: { label: string; value: string }[];
}

export const VideoShowcaseSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'tree-grate' | 'trench-grate' | 'catch-basin-grate'>('all');
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  const videos: VideoItem[] = [
    {
      id: 'video-heavy-excavation',
      category: 'trench-grate',
      categoryLabel: 'HEAVY CIVIL',
      title: 'Heavy Underground Utility Excavation & Trenching',
      subtitle: 'OSHA Subpart P Compliant Shoring & Drainage Trench Prep',
      videoUrl: '/examples/13223381_3840_2160_30fps.mp4',
      posterUrl: '/examples/Somerville-03.jpg',
      description: 'Heavy civil underground excavation for municipal stormwater channels and high-capacity trench drainage systems.',
      specs: [
        { label: 'OSHA CLASSIFICATION', value: 'Type A & B Soil Prep' },
        { label: 'APPLICATION', value: 'Heavy Civil & Municipal Drainage' },
        { label: 'LOAD CAPACITY', value: 'AASHTO H-20 Highway Rated' }
      ]
    },
    {
      id: 'video-hydraulic-shoring',
      category: 'trench-grate',
      categoryLabel: 'TRENCH SHORING',
      title: 'Aluminum Hydraulic Trench Shoring & Shielding System',
      subtitle: 'Rapid Deployment Shielding for Heavy Utility Operations',
      videoUrl: '/examples/4198767-uhd_3840_2160_24fps.mp4',
      posterUrl: '/examples/trench_shield.png',
      description: 'Modular trench shoring shield installation protecting utility workers during deep underground pipeline placement.',
      specs: [
        { label: 'SHIELD RATING', value: 'PE Stamped Depth Certified' },
        { label: 'SAFETY COMPLIANCE', value: 'OSHA 1926 Subpart P Approved' },
        { label: 'DEPLOYMENT SPEED', value: 'Rapid Hydraulic Pump-Up' }
      ]
    },
    {
      id: 'video-precast-channel',
      category: 'trench-grate',
      categoryLabel: 'PRECAST DRAINAGE',
      title: 'Precast Concrete Trench Channel & Cast Iron Grates',
      subtitle: 'AASHTO H-20 / HS-20 Heavy Traffic Installation',
      videoUrl: '/examples/13762622_3840_2160_24fps.mp4',
      posterUrl: '/greates/pre-trench-01.JPG',
      description: 'Precast concrete trench drain system with heavy duty bolted ductile iron gratings for airports, highways, and industrial ports.',
      specs: [
        { label: 'DRAINAGE TYPE', value: 'Precast Modular Channel System' },
        { label: 'LOAD CLASS', value: 'EN 1433 F900 / AASHTO HS-20' },
        { label: 'METALLURGY', value: 'ASTM A536 80-55-06 Ductile Iron' }
      ]
    },
    {
      id: 'video-tree-lumion',
      category: 'tree-grate',
      categoryLabel: 'TREE GRATES',
      title: 'Architectural Tree Grate City Streetscape 3D Simulation',
      subtitle: 'Lumion 3D Urban Hardscape Model & Soil Aeration Showcase',
      videoUrl: '/videos/TREE GRATE FULL CITY LUMION SETUP with music.mp4',
      posterUrl: '/greates/TI-002.JPG',
      description: '3D Lumion simulation demonstrating cast iron tree grates integrated into high-density urban streetscapes, providing 65%+ open area soil aeration and root protection.',
      specs: [
        { label: 'SIMULATION ENGINE', value: 'Lumion 3D Architectural Render' },
        { label: 'GRATE TYPE', value: 'Square & Circular Cast Iron' },
        { label: 'AERATION OPEN AREA', value: '65%+ Water & Air Inflow' }
      ]
    },
    {
      id: 'video-trench-3d',
      category: 'trench-grate',
      categoryLabel: 'TRENCH GRATES',
      title: 'Ductile Iron Trench Cover 3D Mechanical Assembly',
      subtitle: 'ADA Heel-Proof Slot Geometry & Bolted Frame Lock',
      videoUrl: '/videos/10-36 NEW GRATE ANIAMTION normal.5110.mp4',
      posterUrl: '/greates/trench-grate-horizontal-view (19).jpeg',
      description: 'High precision 3D CAD explosion video showing nodular ductile iron trench grates seating into heavy flange frames with vibrationless gasket seals.',
      specs: [
        { label: 'CAD SPECIFICATION', value: '3D Mechanical Explosion Model' },
        { label: 'METALLURGY', value: 'ASTM A536 80-55-06 Ductile Iron' },
        { label: 'LOAD RATING', value: 'EN 1433 Class D400 / F900' }
      ]
    },
    {
      id: 'video-[#tree-flex]',
      category: 'tree-grate',
      categoryLabel: 'TREE GRATES',
      title: 'Flexible Modular Cast Iron Tree Grate Demonstration',
      subtitle: 'Expandable Inner Knockout Rings for Trunk Growth',
      videoUrl: '/videos/Flexible Tree Grate.mp4',
      posterUrl: '/greates/TI-001.jpg',
      description: 'Demonstration video showcasing expandable inner rings allowing tree trunk growth over 25+ years without grate removal or root pinching.',
      specs: [
        { label: 'FEATURE', value: 'Expandable Tree Ring Knockouts' },
        { label: 'SIZES', value: '48"x48" & 60"x60" Modular Sections' },
        { label: 'FINISH', value: 'KTL Dip & Weathering Patina' }
      ]
    },
    {
      id: 'video-catch-basin-dxf',
      category: 'catch-basin-grate',
      categoryLabel: 'CATCH BASIN GRATES',
      title: 'Municipal Curb Inlet & Catch Basin DXF 3D Flow Intake',
      subtitle: 'Bicycle-Safe Slotted Storm Inlet & Frame Seating',
      videoUrl: '/videos/catch basin dxf 1.2443.mp4',
      posterUrl: '/greates/catch-basin-curb.png',
      description: '3D DXF CAD animation detailing high-velocity stormwater collection through directional intake vanes in municipal curb inlets.',
      specs: [
        { label: 'HYDRAULIC MODEL', value: 'Directional Vane Storm Inflow' },
        { label: 'SAFETY RATING', value: 'Bicycle-Safe Diagonal Slots' },
        { label: 'COMPLIANCE', value: 'AASHTO M306 Highway Standard' }
      ]
    },
    {
      id: 'video-grate-whiskey',
      category: 'trench-grate',
      categoryLabel: 'TRENCH GRATES',
      title: 'Architectural Wave Pattern Trench Grate Aesthetic Showcase',
      subtitle: 'Decorative Cast Iron Trench Covers for Plazas & Resorts',
      videoUrl: '/videos/GRATE WHISKEY.mp4',
      posterUrl: '/greates/TI-004.jpg',
      description: 'Cinematic 3D animation displaying interlocking wave pattern trench covers designed for pedestrian promenades, municipal plazas, and commercial hardscapes.',
      specs: [
        { label: 'PATTERN', value: 'Interlocking Architectural Wave' },
        { label: 'SLOT WIDTH', value: '1/4" ADA Heel-Proof Certified' },
        { label: 'APPLICATION', value: 'Pedestrian Plazas & Hardscapes' }
      ]
    },
    {
      id: 'video-all-grates',
      category: 'trench-grate',
      categoryLabel: 'TRENCH GRATES',
      title: 'Full Foundry Casting & Grate Range Overview',
      subtitle: 'Complete Linear Grating, Tree Cover & Catch Basin Fleet',
      videoUrl: '/videos/all grates.430.mp4',
      posterUrl: '/greates/trench-grates-img-diagonal-view (8).jpeg',
      description: 'Overview showcase of Trench Unlimited foundry capabilities spanning ADA heel-proof trench covers, tree grates, and municipal catch basin inlets.',
      specs: [
        { label: 'FOUNDRY CAPACITY', value: '50,000+ Tons Annual Production' },
        { label: 'CERTIFICATIONS', value: 'ISO 9001 & AASHTO M306' },
        { label: 'DISPATCH', value: 'Same-Day Stock Inventory' }
      ]
    }
  ];

  const filteredVideos = activeTab === 'all'
    ? videos
    : videos.filter(v => v.category === activeTab);

  return (
    <section id="video-showcase" className="py-20 bg-[#0B192C] bg-industrial-grid-dark text-white border-b border-[#0085F4]/30 relative overflow-hidden">
      
      {/* Radial Background Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#0085F4]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-industrial relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/15 pb-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-white border border-[#00BBFF]/40 text-xs font-mono font-bold uppercase backdrop-blur-md">
              <Film className="w-4 h-4 text-[#00BBFF]" />
              <span>3D CAD &amp; LUMION ANIMATION MEDIA GALLERY</span>
            </div>
            <h2 className="text-section-title text-white uppercase">
              3D VISUAL SHOWCASE: <span className="gradient-text-cyan">CASTINGS IN ACTION</span>
            </h2>
            <p className="text-body-large text-slate-300 font-medium">
              Explore 3D CAD animations, urban streetscape simulations, and load testing demonstrations across our 3 core categories.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 font-mono text-xs font-bold">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2.5 uppercase transition-all border ${
                activeTab === 'all'
                  ? 'bg-[#0085F4] text-white border-[#00BBFF] shadow-lg'
                  : 'bg-white/5 text-slate-300 border-white/15 hover:bg-white/10 hover:text-white'
              }`}
            >
              ALL 3D VIDEOS
            </button>
            <button
              onClick={() => setActiveTab('trench-grate')}
              className={`px-4 py-2.5 uppercase transition-all border flex items-center gap-1.5 ${
                activeTab === 'trench-grate'
                  ? 'bg-[#0085F4] text-white border-[#00BBFF] shadow-lg'
                  : 'bg-white/5 text-slate-300 border-white/15 hover:bg-white/10 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-[#00BBFF]" />
              <span>TRENCH GRATES</span>
            </button>
            <button
              onClick={() => setActiveTab('tree-grate')}
              className={`px-4 py-2.5 uppercase transition-all border flex items-center gap-1.5 ${
                activeTab === 'tree-grate'
                  ? 'bg-[#0085F4] text-white border-[#00BBFF] shadow-lg'
                  : 'bg-white/5 text-slate-300 border-white/15 hover:bg-white/10 hover:text-white'
              }`}
            >
              <Trees className="w-3.5 h-3.5 text-[#00BBFF]" />
              <span>TREE GRATES</span>
            </button>
            <button
              onClick={() => setActiveTab('catch-basin-grate')}
              className={`px-4 py-2.5 uppercase transition-all border flex items-center gap-1.5 ${
                activeTab === 'catch-basin-grate'
                  ? 'bg-[#0085F4] text-white border-[#00BBFF] shadow-lg'
                  : 'bg-white/5 text-slate-300 border-white/15 hover:bg-white/10 hover:text-white'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#00BBFF]" />
              <span>CATCH BASINS</span>
            </button>
          </div>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className="bg-[#001D4A]/90 border-2 border-[#0085F4]/40 hover:border-[#0085F4] transition-all duration-300 shadow-xl overflow-hidden group flex flex-col"
            >
              {/* Video Player Box */}
              <div className="relative aspect-video bg-black overflow-hidden group/player">
                <video
                  src={video.videoUrl}
                  poster={video.posterUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-500 group-hover/player:scale-105 pointer-events-none"
                />
                
                {/* Category Badge Tag */}
                <div className="absolute top-3 left-3 bg-[#004AAD]/90 backdrop-blur-md border border-[#00BBFF]/50 px-2.5 py-1 text-[10px] font-mono font-bold text-[#00BBFF] uppercase tracking-wider shadow-md pointer-events-none z-10 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00BBFF] animate-pulse" />
                  <span>{video.categoryLabel} // 3D LOOP</span>
                </div>
              </div>

              {/* Video Details Content */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between font-mono">
                <div className="space-y-2">
                  <span className="text-[11px] text-[#00BBFF] font-bold uppercase tracking-wider block">
                    {video.subtitle}
                  </span>
                  <h3 className="text-base font-bold text-white font-heading uppercase leading-snug group-hover:text-[#00BBFF] transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-xs text-slate-300 font-body leading-relaxed line-clamp-3">
                    {video.description}
                  </p>
                </div>

                {/* Specs List */}
                <div className="pt-3 border-t border-white/15 space-y-1.5 text-[11px]">
                  {video.specs.map((spec, i) => (
                    <div key={i} className="flex justify-between items-center text-slate-300">
                      <span className="text-slate-400">{spec.label}:</span>
                      <span className="font-bold text-[#00BBFF]">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
