import React from 'react';
import { Globe, MapPin, CheckCircle2, ShieldCheck } from 'lucide-react';

export const GlobalProjectsSection: React.FC = () => {
  const metrics = [
    { label: 'LINEAR FEET OF TRENCH SHORED', value: '4,850,000+ LF' },
    { label: 'OSHA SUBPART P SAFETY RECORD', value: '100% COMPLIANT' },
    { label: 'MUNICIPAL & UTILITY DISTRICTS', value: '850+ CITIES' },
    { label: 'STRUCTURAL STEEL PROCESSED', value: '120,000+ TONS' }
  ];

  const locations = [
    { district: 'MIDWEST CIVIL INFRASTRUCTURE DISTRICT', project: '4,200 LF Deep Utility Trench Shoring', status: 'COMPLETED' },
    { district: 'GULF COAST WATERWORKS AUTHORITY', project: 'Stormwater Vault & Polymer Drain Network', status: 'ACTIVE' },
    { district: 'PACIFIC REGIONAL HIGHWAY DEPT.', project: 'AASHTO H-20 Street Excavation Decking', status: 'COMPLETED' }
  ];

  return (
    <section className="py-20 bg-[#004AAD] text-white relative overflow-hidden">
      <div className="container-industrial space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-[#0085F4] pb-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0085F4] text-xs font-mono font-bold text-white">
              <Globe className="w-4 h-4 text-[#00BBFF]" />
              <span>NATIONAL INFRASTRUCTURE FOOTPRINT</span>
            </div>
            <h2 className="text-section-title text-white uppercase">
              PROVEN PERFORMANCE IN <span className="text-[#00BBFF]">CIVIL PROJECTS</span>
            </h2>
            <p className="text-body-large text-blue-100 max-w-2xl font-medium">
              Deployed across major municipal utility expansions, airport runway drainages, highway bridges, and deep sewer trench excavations nationwide.
            </p>
          </div>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-center">
          {metrics.map((m, idx) => (
            <div key={idx} className="bg-[#003380] border border-[#0085F4] p-6 space-y-2">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#00BBFF] font-heading">{m.value}</div>
              <div className="text-xs text-blue-100 font-bold uppercase">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Project Hotspots */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
          {locations.map((loc, idx) => (
            <div key={idx} className="bg-[#003380]/80 border border-[#0085F4] p-6 space-y-3">
              <div className="flex justify-between items-center text-[#00BBFF] font-bold">
                <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-[#00BBFF]" /> {loc.district}</span>
                <span className="bg-[#0085F4] text-white px-2 py-0.5 text-[10px]">{loc.status}</span>
              </div>
              <div className="text-sm font-bold text-white">{loc.project}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
