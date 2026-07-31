import React from 'react';
import { ShieldCheck, CheckCircle2, FileText, ArrowRight } from 'lucide-react';

export const Anatomy: React.FC = () => {
  const trenchLayers = [
    {
      step: '01',
      title: 'SURFACE & SUB-BASE DECK',
      spec: 'AASHTO H-20 / HS-20 Traffic Rated',
      desc: 'Finished pavement sub-base layer bridged by heavy structural steel road plates during excavation.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80'
    },
    {
      step: '02',
      title: 'TRENCH SHORING & SHIELDING',
      spec: 'OSHA 1926 Subpart P Certified',
      desc: 'Double-walled steel trench boxes and hydraulic shores bearing lateral earth soil pressure to protect crew members.',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80'
    },
    {
      step: '03',
      title: 'UTILITY MAIN INVERT',
      spec: 'AWWA C900 / ASTM Standards',
      desc: 'Enclosed main utility pipeline positioned at invert depth within the protected excavation envelope.',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80'
    },
    {
      step: '04',
      title: 'ENGINEERED BEDDING GRAVEL',
      spec: 'ASTM C33 Washed Aggregate',
      desc: 'Washed aggregate bedding envelope supporting uniform pipe invert elevation and load distribution.',
      image: 'https://images.unsplash.com/photo-1574689231351-850029b4e339?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section id="anatomy" className="py-10 bg-white border-b-2 border-slate-200">
      <div className="container-custom space-y-6">
        
        {/* Section Header — Neat & Clean Typography */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-slate-200 pb-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#F4F8FF] border border-[#0085F4]/30">
              <ShieldCheck className="w-4 h-4 text-[#0085F4]" />
              <span className="text-xs font-mono font-bold text-[#004AAD] uppercase tracking-widest">
                TRENCH STRUCTURAL ASSEMBLY
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#004AAD] tracking-tight font-heading uppercase">
              UNDERGROUND TRENCH <span className="text-[#0085F4]">INFRASTRUCTURE LAYERS</span>
            </h2>
            <p className="text-sm text-[#475569] font-medium max-w-2xl">
              Clean engineering breakdown of the structural components forming a safe subterranean trench excavation.
            </p>
          </div>
        </div>

        {/* Neat & Clean 4-Column Card Grid (Zero Gimmick) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trenchLayers.map((layer) => (
            <div
              key={layer.step}
              className="bg-[#F8FAFC] border-2 border-slate-200 p-6 space-y-4 hover:border-[#0085F4] transition-all duration-300 shadow-sm group"
            >
              <div className="h-44 overflow-hidden border border-slate-200 bg-white relative">
                <img
                  src={layer.image}
                  alt={layer.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-2 left-2 px-2.5 py-1 bg-[#004AAD] text-white text-xs font-mono font-bold">
                  {layer.step}
                </span>
              </div>

              <div className="space-y-2">
                <span className="text-[11px] font-mono font-bold text-[#0085F4] uppercase block">
                  {layer.spec}
                </span>
                <h3 className="text-base font-bold text-[#004AAD] font-heading line-clamp-1">
                  {layer.title}
                </h3>
                <p className="text-xs text-[#475569] font-medium leading-relaxed">
                  {layer.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200 flex items-center gap-1.5 text-xs font-mono font-bold text-[#004AAD]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>OSHA VERIFIED ASSEMBLY</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
