import React from 'react';
import { Layers, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface IndustrialGratingsSectionProps {
  onRequestQuote: () => void;
}

export const IndustrialGratingsSection: React.FC<IndustrialGratingsSectionProps> = ({ onRequestQuote }) => {
  const gratings = [
    {
      name: 'HEAVY-DUTY WELDED STEEL GRATINGS',
      rating: 'Class F 900 kN / AASHTO H-20 Heavy Traffic',
      material: 'ASTM A1011 / A36 Structural Steel',
      desc: 'Serrated forge-welded steel gratings designed for maximum wheel load resistance over trench openings, gutters, and industrial sump channels.'
    },
    {
      name: 'PERFORATED STEEL TRENCH PLANK COVERS',
      rating: 'Class D 400 kN / Non-Slip Walkway',
      material: 'Hot-Dip Galvanized Sheet Steel',
      desc: 'High-traction perforated metal planks engineered for safe pedestrian trench bridging, wash bays, and industrial drainage channels.'
    },
    {
      name: 'AASHTO H-20 STEEL ROAD CROSSING PLATES',
      rating: '50,000 LBS Proof Loaded / Axle Rated',
      material: 'ASTM A36 Heavy 1.0" & 1.25" Steel',
      desc: 'Heavy structural steel crossing plates equipped with center flush-mount lifting pins and aggregate epoxy anti-skid surface coating.'
    }
  ];

  return (
    <section className="py-20 bg-[#F8F8F8] border-b border-[#E2E8F0] relative">
      <div className="container-industrial space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-[#004AAD] pb-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F0F7FF] border border-[#0085F4] text-xs font-mono font-bold text-[#004AAD]">
              <Layers className="w-4 h-4 text-[#0085F4]" />
              <span>HEAVY-DUTY GRATINGS &amp; STEEL DECKING</span>
            </div>
            <h2 className="text-section-title text-[#004AAD] uppercase">
              INDUSTRIAL TRENCH GRATINGS &amp; <span className="text-[#0085F4]">ROAD COVERS</span>
            </h2>
            <p className="text-body-large text-[#475569] max-w-2xl">
              High-tensile forge-welded steel gratings, perforated channel planks, and AASHTO H-20 road plates engineered for extreme axle loads.
            </p>
          </div>
        </div>

        {/* Gratings Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {gratings.map((g, idx) => (
            <div key={idx} className="bg-white border-2 border-[#E2E8F0] p-6 hover:border-[#0085F4] transition-all flex flex-col justify-between space-y-6 group">
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold text-[#0085F4] block uppercase">PRODUCT SPECIFICATION // 0{idx + 1}</span>
                <h3 className="text-card-title text-[#004AAD] group-hover:text-[#0085F4] transition-colors uppercase">{g.name}</h3>
                <p className="text-xs text-[#475569] font-medium leading-relaxed font-sans">{g.desc}</p>
                <div className="space-y-1 font-mono text-xs pt-2">
                  <div className="text-[#475569]">MATERIAL: <strong className="text-[#004AAD]">{g.material}</strong></div>
                  <div className="text-[#475569]">LOAD CLASS: <strong className="text-[#0085F4]">{g.rating}</strong></div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E2E8F0]">
                <button onClick={onRequestQuote} className="w-full btn-brand-primary py-2.5 text-xs">
                  REQUEST SPEC &amp; QUOTE
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
