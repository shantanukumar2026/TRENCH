import React from 'react';
import { BookmarkCheck, FileText, Anchor, ShieldCheck, Award, CheckCircle2 } from 'lucide-react';

interface TechnicalStandardsProps {
  onOpenDocLibrary: () => void;
}

export const TechnicalStandards: React.FC<TechnicalStandardsProps> = ({ onOpenDocLibrary }) => {
  const standards = [
    {
      code: 'ADA COMPLIANCE SECTION 302',
      title: 'HEEL-PROOF ACCESSIBILITY STANDARDS',
      authority: 'U.S. Access Board',
      desc: 'Mandatory 1/4" maximum slot width openings perpendicular to dominant pedestrian travel paths for wheelchairs and high-heeled footwear.',
      rating: '100% ADA Heel-Proof Certified'
    },
    {
      code: 'AASHTO M306 / M105',
      title: 'HIGHWAY TRAFFIC CASTING SPECIFICATIONS',
      authority: 'Amer. Association of State Highway Officials',
      desc: 'Proof-loaded to 40,000 lbs minimum wheel load to ensure non-rocking, heavy vehicular street casting performance.',
      rating: '40,000 LBS Proof Loaded'
    },
    {
      code: 'ASTM A536 80-55-06',
      title: 'NODULAR DUCTILE IRON METALLURGY',
      authority: 'ASTM International Standards',
      desc: 'High-strength nodular graphite ductile iron providing 80,000 PSI tensile strength and extreme impact resistance.',
      rating: '80,000 PSI Tensile Strength'
    },
    {
      code: 'EN 1433 CLASS F900',
      title: 'DRAINAGE CHANNEL LOAD STANDARDS',
      authority: 'European & Global Standards Committee',
      desc: '900 kN proof load testing for severe heavy transport applications including commercial airports and marine container ports.',
      rating: '900 kN (202,300 LBS) Certified'
    }
  ];

  return (
    <section id="standards" className="py-20 bg-white border-b border-[#E2E8F0] relative overflow-hidden">
      <div className="container-industrial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F0F7FF] border border-[#0085F4] text-xs font-mono font-bold text-[#004AAD]">
              <Award className="w-4 h-4 text-[#0085F4]" />
              <span>VERIFIED METALLURGICAL FRAMEWORK</span>
            </div>

            <h2 className="text-section-title text-[#004AAD] uppercase">
              ENGINEERED METALLURGY &amp; <br />
              <span className="text-[#0085F4]">FOUNDRY STANDARDS COMPLIANCE</span>
            </h2>

            <p className="text-body-large text-[#475569] font-medium">
              Every Trench Unlimited cast iron tree grate and ductile iron trench cover is poured, tested, and certified under rigid North American municipal and highway standards.
            </p>

            <div className="flex flex-wrap gap-6 pt-2 font-mono text-xs text-[#004AAD] font-bold">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0085F4]" />
                <span>ASTM A536 DUCTILE CERTIFIED</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0085F4]" />
                <span>ADA HEEL-PROOF APPROVED</span>
              </div>
            </div>

            <div className="pt-2">
              <button 
                onClick={onOpenDocLibrary}
                className="btn-brand-primary py-3 px-6 text-xs"
              >
                <FileText className="w-4 h-4" />
                <span>VIEW TECHNICAL CASTING SPECS</span>
              </button>
            </div>
          </div>

          {/* Right Column Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {standards.map((std, idx) => (
              <div 
                key={idx}
                className="bg-[#F8F8F8] border-2 border-[#E2E8F0] p-6 hover:border-[#0085F4] hover:bg-white transition-all flex flex-col justify-between space-y-4 font-mono group"
              >
                <div className="space-y-1">
                  <div className="flex justify-between items-center text-xs text-[#0085F4] font-bold uppercase">
                    <span>{std.authority}</span>
                    <span className="bg-[#F0F7FF] px-2 py-0.5 border border-[#0085F4] text-[#004AAD]">{std.code}</span>
                  </div>
                  <h3 className="text-card-title text-[#004AAD] group-hover:text-[#0085F4] transition-colors uppercase pt-2">
                    {std.title}
                  </h3>
                </div>

                <p className="text-xs text-[#475569] font-sans font-medium leading-relaxed">
                  {std.desc}
                </p>

                <div className="pt-3 border-t border-[#E2E8F0] text-xs font-bold text-[#004AAD]">
                  RATING: <span className="text-[#0085F4]">{std.rating}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
