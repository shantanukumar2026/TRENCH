import React from 'react';
import { ShieldCheck, ArrowRight, Droplets, CheckCircle2 } from 'lucide-react';

interface WaterManagementSectionProps {
  onExploreDrainage: () => void;
  onRequestQuote: () => void;
}

export const WaterManagementSection: React.FC<WaterManagementSectionProps> = ({ onExploreDrainage, onRequestQuote }) => {
  const drainageSystems = [
    {
      title: 'POLYMER CONCRETE LINEAR CHANNELS',
      code: 'TU-PD-SERIES',
      capacity: 'High-Velocity Monolithic Hydraulic Flow',
      desc: 'High-density mineral polymer concrete channels resistant to salt, oil, and aggressive chemicals. Cast iron edge rails for extreme wheel loading.',
      load: 'Class E 600 kN to Class F 900 kN'
    },
    {
      title: 'HYDRODYNAMIC SEDIMENT SEPARATORS',
      code: 'TU-HC-SEPARATOR',
      capacity: '1,200 GPM Continuous Treatment',
      desc: 'Underground stormwater separators removing over 80% total suspended solids (TSS) and oil hydrocarbons prior to municipal discharge.',
      load: 'EPA Stormwater Compliant'
    },
    {
      title: 'DUCTILE IRON SLOTTED CHANNEL COVERS',
      code: 'TU-GR-CAST-IRON',
      capacity: 'Heavy Traffic Axle Rated',
      desc: 'Precision bolted ductile iron trench grates designed for maximum stormwater intake without compromising vehicle tires or pedestrian safety.',
      load: 'AASHTO H-20 / Class D 400 kN'
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-[#E2E8F0] relative">
      <div className="container-industrial space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-[#004AAD] pb-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F0F7FF] border border-[#0085F4] text-xs font-mono font-bold text-[#004AAD]">
              <Droplets className="w-4 h-4 text-[#0085F4]" />
              <span>UNDERGROUND WATER &amp; DRAINAGE MANAGEMENT</span>
            </div>
            <h2 className="text-section-title text-[#004AAD] uppercase">
              LINEAR TRENCH DRAINAGE &amp; <span className="text-[#0085F4]">WATER QUALITY SYSTEMS</span>
            </h2>
            <p className="text-body-large text-[#475569] max-w-2xl">
              Engineered polymer concrete channels, oil/sediment separators, and slotted ductile iron grates for highways, airports, wash bays, and municipal infrastructure.
            </p>
          </div>

          <button onClick={onExploreDrainage} className="btn-brand-primary py-3 px-6 text-xs shrink-0">
            <span>EXPLORE DRAINAGE CATALOGUE</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Drainage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {drainageSystems.map((sys, idx) => (
            <div key={idx} className="bg-[#F8F8F8] border-2 border-[#E2E8F0] p-6 hover:border-[#0085F4] hover:bg-white transition-all flex flex-col justify-between space-y-6 group">
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs font-mono font-bold text-[#0085F4]">
                  <span>{sys.code}</span>
                  <span className="bg-[#F0F7FF] px-2 py-0.5 border border-[#0085F4] text-[#004AAD]">SYS 0{idx + 1}</span>
                </div>
                <h3 className="text-card-title text-[#004AAD] group-hover:text-[#0085F4] transition-colors uppercase">
                  {sys.title}
                </h3>
                <p className="text-xs text-[#475569] font-medium leading-relaxed font-sans">
                  {sys.desc}
                </p>
                <div className="pt-2 font-mono text-xs text-[#004AAD]">
                  <span className="text-[#475569] block">LOAD CAPACITY:</span>
                  <strong className="text-[#0085F4]">{sys.load}</strong>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E2E8F0]">
                <button 
                  onClick={onRequestQuote}
                  className="w-full btn-brand-secondary py-2.5 text-xs"
                >
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
