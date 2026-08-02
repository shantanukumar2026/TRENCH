import React from 'react';
import { Zap, ShieldCheck, Cpu, AlertTriangle, ArrowRight } from 'lucide-react';

interface SubsurfaceUtilitySectionProps {
  onRequestQuote: () => void;
}

export const SubsurfaceUtilitySection: React.FC<SubsurfaceUtilitySectionProps> = ({ onRequestQuote }) => {
  const capabilities = [
    { title: '811 CALL-BEFORE-YOU-DIG INTEGRATION', desc: 'Pre-certified trench shields for high-risk utility corridors including gas mains, electrical conduits, and fiber optic trunks.' },
    { title: 'HYDRO-EXCAVATION VACUUM SHIELDS', desc: 'Ultra-lightweight aluminum utility shields engineered for non-destructive vacuum excavation around live underground infrastructure.' },
    { title: 'DIELECTRIC ELECTRICAL INSULATION', desc: 'Specialized non-conductive trench box spreader bars for active electrical substation and high-voltage transmission trenching.' },
    { title: 'ZERO-COLLAPSE GAS PIPELINE SHORING', desc: 'Pneumatic and hydraulic shoring systems designed for rapid deployment around high-pressure natural gas distribution lines.' }
  ];

  return (
    <section id="subsurface-utility" className="py-20 bg-[#F1F5F9] border-b border-[#E2E8F0] relative">
      <div className="container-industrial space-y-12">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-[#004AAD] pb-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#004AAD] text-xs font-mono font-bold text-[#004AAD] uppercase">
              <Zap className="w-4 h-4 text-[#0085F4]" />
              <span>SUE CLASS A &amp; B UTILITY PROTECTION</span>
            </div>
            <h2 className="text-section-title text-[#004AAD] uppercase">
              SUBSURFACE UTILITY <span className="text-[#0085F4]">ENGINEERING (SUE)</span>
            </h2>
            <p className="text-body-large text-[#475569] font-medium">
              Protect critical urban infrastructure during excavation with zero-contact hydro-vac trench shields, dielectric non-conductive shoring, and 811 utility corridor protection.
            </p>
          </div>

          <button
            onClick={onRequestQuote}
            className="inline-flex items-center justify-center gap-2 bg-[#004AAD] hover:bg-[#0085F4] text-white font-mono font-bold text-sm px-6 py-3 uppercase transition-all shadow-md shrink-0"
          >
            <span>SUE SHORING CONSULTATION</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {capabilities.map((c, idx) => (
            <div key={idx} className="bg-white border-2 border-[#E2E8F0] hover:border-[#0085F4] p-8 shadow-sm transition-all space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#F1F5F9] border border-[#0085F4] flex items-center justify-center font-mono font-black text-[#004AAD] text-sm shrink-0">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-extrabold text-[#004AAD] font-mono uppercase">{c.title}</h3>
                </div>
                <p className="text-sm text-[#475569] font-medium leading-relaxed">
                  {c.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E2E8F0] flex items-center gap-2 text-xs font-mono font-bold text-[#0085F4]">
                <ShieldCheck className="w-4 h-4 text-[#0085F4]" />
                <span>ASCE 38-02 Subsurface Utility Standard Compliant</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
