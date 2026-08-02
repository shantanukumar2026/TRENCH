import React from 'react';
import { Wrench, Shield, Compass, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface CustomFabricationStudioSectionProps {
  onRequestQuote: () => void;
}

export const CustomFabricationStudioSection: React.FC<CustomFabricationStudioSectionProps> = ({ onRequestQuote }) => {
  const customCapabilities = [
    {
      title: 'BESPOKE CITY CREST & LOGO TREE GRATES',
      spec: 'Custom Municipal Foundry Patterns',
      desc: 'In-house pattern shop carving custom municipal logos, city seals, historic motifs, and streetscape crests directly into ductile iron tree grates.'
    },
    {
      title: 'NON-STANDARD TRENCH GRATE WIDTHS (6" TO 48")',
      spec: 'Custom Trench Opening Fitments',
      desc: 'Precision 3D sand molding for non-standard trench drain widths, angular corner miters, and curved radius trench runs in architectural plazas.'
    },
    {
      title: 'ADA HEEL-PROOF NARROW SLOT PATTERNS',
      spec: 'Wheelchair & High-Heel Safe',
      desc: 'Custom engineered slot geometries with 1/4" maximum openings providing maximum water capture while maintaining 100% ADA pedestrian safety.'
    },
    {
      title: 'SPECIALTY KTL & POLYURETHANE COATING FINISHES',
      spec: '1,000+ Hr Salt Spray Resistance',
      desc: 'Custom electrophoretic cathodic dip coatings, architectural bronze patinas, and durable black polyurethane finishes for coastal marine environments.'
    }
  ];

  return (
    <section id="custom-fabrication" className="py-20 bg-white border-b border-[#E2E8F0] relative">
      <div className="container-industrial space-y-12">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-[#004AAD] pb-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F1F5F9] border border-[#004AAD] text-xs font-mono font-bold text-[#004AAD] uppercase">
              <Wrench className="w-4 h-4 text-[#0085F4]" />
              <span>CUSTOM ARCHITECTURAL PATTERN &amp; FOUNDRY CASTING STUDIO</span>
            </div>
            <h2 className="text-section-title text-[#004AAD] uppercase">
              CUSTOM IRON <span className="text-[#0085F4]">PATTERN &amp; CASTING STUDIO</span>
            </h2>
            <p className="text-body-large text-[#475569] font-medium">
              Need custom city crest tree grates, non-standard trench grate widths, or unique decorative geometric patterns? Our 3D pattern shop and ductile iron foundry build custom castings to exact architectural CAD drawings.
            </p>
          </div>

          <button
            onClick={onRequestQuote}
            className="inline-flex items-center justify-center gap-2 bg-[#004AAD] hover:bg-[#0085F4] text-white font-mono font-bold text-sm px-6 py-3 uppercase transition-all shadow-md shrink-0"
          >
            <span>SUBMIT ARCHITECTURAL CAD BLUEPRINTS</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4 Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {customCapabilities.map((cap, idx) => (
            <div key={idx} className="bg-[#F8FAFC] border-2 border-[#E2E8F0] hover:border-[#0085F4] p-8 shadow-sm transition-all flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="flex justify-between items-start gap-4">
                  <span className="text-xs font-mono font-bold text-[#0085F4] bg-white px-3 py-1 border border-[#0085F4] uppercase">
                    {cap.spec}
                  </span>
                  <span className="text-xs font-mono font-bold text-[#94A3B8]">SPEC 0{idx + 1}</span>
                </div>
                <h3 className="text-base font-extrabold text-[#004AAD] font-mono uppercase">{cap.title}</h3>
                <p className="text-sm text-[#475569] font-medium leading-relaxed">
                  {cap.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between font-mono text-xs text-[#004AAD]">
                <span className="flex items-center gap-1.5 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-[#0085F4]" />
                  PE Stamped CAD Submittals Included
                </span>
                <span className="text-[#0085F4] font-bold">3-5 Day Pattern Setup</span>
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Studio Callout */}
        <div className="bg-[#004AAD] text-white p-8 border-2 border-[#0085F4] flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-[#0085F4] flex items-center justify-center shrink-0">
              <Compass className="w-7 h-7 text-white" />
            </div>
            <div>
              <div className="text-xs font-mono font-bold text-[#00BBFF] uppercase">HAVE NON-STANDARD ARCHITECTURAL BLUEPRINTS?</div>
              <div className="text-lg md:text-xl font-bold text-white font-mono uppercase">
                Consult With Our Chief Foundry Metallurgical &amp; CAD Design Team
              </div>
            </div>
          </div>
          
          <button
            onClick={onRequestQuote}
            className="bg-[#0085F4] hover:bg-[#00BBFF] text-white font-mono font-bold text-xs px-6 py-3 uppercase transition-colors shrink-0"
          >
            REQUEST BESPOKE FOUNDRY QUOTE
          </button>
        </div>

      </div>
    </section>
  );
};
