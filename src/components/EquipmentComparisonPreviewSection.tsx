import React from 'react';
import { Sliders, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

interface EquipmentComparisonPreviewSectionProps {
  onRequestQuote: () => void;
}

export const EquipmentComparisonPreviewSection: React.FC<EquipmentComparisonPreviewSectionProps> = ({ onRequestQuote }) => {
  const comparison = [
    {
      system: 'STEEL TRENCH BOXES',
      depth: 'Up to 32 FT',
      speed: 'Rapid Drop-in',
      footprint: 'Open Trench',
      ideal: 'Mainline Pipe Lying & Utility Installation'
    },
    {
      system: 'ALUMINUM HYDRAULIC SHORES',
      depth: 'Up to 15 FT',
      speed: 'Ultra-Fast Above Ground',
      footprint: 'Minimal Spot Tap',
      ideal: 'Spot Repairs, Gas/Water Taps, Live Utility Corridors'
    },
    {
      system: 'MODULAR SLIDE RAIL SYSTEMS',
      depth: 'Up to 36 FT+',
      speed: 'Vibrationless Dig & Push',
      footprint: 'Zero Ground Subsidence',
      ideal: 'Deep Utility Vaults, Tight Urban Corridors, Pumping Stations'
    }
  ];

  return (
    <section id="system-comparison-matrix" className="py-20 bg-white border-b border-[#E2E8F0] relative">
      <div className="container-industrial space-y-12">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-[#004AAD] pb-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F1F5F9] border border-[#004AAD] text-xs font-mono font-bold text-[#004AAD] uppercase">
              <Sliders className="w-4 h-4 text-[#0085F4]" />
              <span>SHORING SYSTEM SELECTION MATRIX</span>
            </div>
            <h2 className="text-section-title text-[#004AAD] uppercase">
              EQUIPMENT COMPARISON <span className="text-[#0085F4]">DECISION MATRIX</span>
            </h2>
            <p className="text-body-large text-[#475569] font-medium">
              Compare Steel Trench Boxes, Aluminum Hydraulic Shores, and Slide Rail Modular Systems by maximum depth, site footprint, and installation speed.
            </p>
          </div>

          <button
            onClick={onRequestQuote}
            className="inline-flex items-center justify-center gap-2 bg-[#004AAD] hover:bg-[#0085F4] text-white font-mono font-bold text-sm px-6 py-3 uppercase transition-all shadow-md shrink-0"
          >
            <span>GET SHORING RECOMMENDATION</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3 Columns Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-mono">
          {comparison.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#F8FAFC] border-2 border-[#E2E8F0] hover:border-[#0085F4] p-8 space-y-6 flex flex-col justify-between shadow-sm transition-all"
            >
              <div className="space-y-4">
                <div className="text-xs font-bold text-[#0085F4] bg-white px-3 py-1 border border-[#0085F4] inline-block uppercase">
                  SYSTEM 0{idx + 1}
                </div>
                <h3 className="text-base font-extrabold text-[#004AAD] uppercase">{item.system}</h3>

                <div className="space-y-2 text-xs border-t border-b border-[#E2E8F0] py-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-[#64748B]">MAX DEPTH:</span>
                    <span className="font-bold text-[#004AAD]">{item.depth}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#64748B]">INSTALL SPEED:</span>
                    <span className="font-bold text-[#0085F4]">{item.speed}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#64748B]">SITE FOOTPRINT:</span>
                    <span className="font-bold text-[#334155]">{item.footprint}</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-[11px] font-bold text-[#64748B] uppercase">IDEAL JOBSITE APPLICATION:</div>
                  <p className="text-xs text-[#475569] font-sans font-medium leading-relaxed">
                    {item.ideal}
                  </p>
                </div>
              </div>

              <button
                onClick={onRequestQuote}
                className="w-full bg-white hover:bg-[#004AAD] hover:text-white text-[#004AAD] border-2 border-[#004AAD] font-bold text-xs py-2.5 uppercase transition-colors text-center"
              >
                REQUEST QUOTE FOR THIS SYSTEM
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
