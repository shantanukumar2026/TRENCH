import React from 'react';
import { Trees, ShieldCheck, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface SubsurfaceUtilitySectionProps {
  onRequestQuote: () => void;
}

export const SubsurfaceUtilitySection: React.FC<SubsurfaceUtilitySectionProps> = ({ onRequestQuote }) => {
  const capabilities = [
    { title: 'ROOT ZONE AERATION & WATER INFILTRATION', desc: 'Over 65% open surface area allowing rainwater percolation and root oxygenation while preventing soil compaction in high-pedestrian streetscapes.' },
    { title: 'EXPANDABLE TREE OPENING KNOCKOUT RINGS', desc: 'Concentric cast iron removable inner rings accommodating tree trunk diameter growth over 10 to 30 years without root girdling.' },
    { title: 'ADA HEEL-PROOF PEDESTRIAN SAFETY', desc: 'Strict 1/4" maximum slot width geometry preventing high-heel entrapment, cane tips, and stroller wheels from binding.' },
    { title: 'HEAVY DUCTILE IRON TREE GUARD BOLTING', desc: 'Integrated underside bolt lugs allowing heavy vertical ductile iron tree guards to bolt directly to the tree grate frame.' }
  ];

  return (
    <section id="subsurface-utility" className="py-20 bg-[#F1F5F9] border-b border-[#E2E8F0] relative">
      <div className="container-industrial space-y-12">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-[#004AAD] pb-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#004AAD] text-xs font-mono font-bold text-[#004AAD] uppercase">
              <Trees className="w-4 h-4 text-[#0085F4]" />
              <span>URBAN FORESTRY &amp; STREETSCAPE LANDSCAPE SPECIFICATIONS</span>
            </div>
            <h2 className="text-section-title text-[#004AAD] uppercase">
              DESIGNER CAST IRON <span className="text-[#0085F4]">TREE GRATE ARCHITECTURE</span>
            </h2>
            <p className="text-body-large text-[#475569] font-medium">
              Protect urban tree canopies and enhance pedestrian plazas with expandable cast iron tree grates, ADA heel-proof slot geometries, and root aeration frames.
            </p>
          </div>

          <button
            onClick={onRequestQuote}
            className="inline-flex items-center justify-center gap-2 bg-[#004AAD] hover:bg-[#0085F4] text-white font-mono font-bold text-sm px-6 py-3 uppercase transition-all shadow-md shrink-0"
          >
            <span>TREE GRATE CAD CONSULTATION</span>
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
                <span>ADA Accessibility Guidelines &amp; Municipal Forestry Approved</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
