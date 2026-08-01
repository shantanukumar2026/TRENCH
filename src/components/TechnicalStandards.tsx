import React from 'react';
import { BookmarkCheck, FileText, Anchor, ShieldCheck, Award, CheckCircle2 } from 'lucide-react';

interface TechnicalStandardsProps {
  onOpenDocLibrary: () => void;
}

export const TechnicalStandards: React.FC<TechnicalStandardsProps> = ({ onOpenDocLibrary }) => {
  const standards = [
    {
      code: 'OSHA 1926 SUBPART P',
      title: 'EXCAVATION & SHORING SAFETY',
      authority: 'U.S. Department of Labor',
      desc: 'Mandatory structural shielding compliance for excavations exceeding 5 feet in Type A, B, and C soil conditions.',
      rating: 'Certified 1,450 PSF Lateral Earth Pressure'
    },
    {
      code: 'AASHTO M306 / H-20',
      title: 'HIGHWAY TRAFFIC LOADING RATING',
      authority: 'Amer. Association of State Highway Officials',
      desc: 'Proof-loaded to 50,000 lbs minimum wheel load to ensure non-rocking street casting performance.',
      rating: '50,000 LBS Proof Loaded'
    },
    {
      code: 'ASTM A572 GRADE 50',
      title: 'HIGH-TENSILE STRUCTURAL STEEL',
      authority: 'ASTM International Standards',
      desc: 'High-strength columbium-vanadium structural steel used in double-walled trench boxes for max yield strength.',
      rating: '50,000 PSI Minimum Yield'
    },
    {
      code: 'AWS D1.1 / D1.2 WELDING',
      title: 'STRUCTURAL WELDING CODE',
      authority: 'American Welding Society',
      desc: 'Robotic and certified manual welds performed under AWS structural steel welding guidelines.',
      rating: '100% Ultrasonic NDT Inspected'
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
              <span>VERIFIED COMPLIANCE FRAMEWORK</span>
            </div>

            <h2 className="text-section-title text-[#004AAD] uppercase">
              ENGINEERED QUALITY &amp; <br />
              <span className="text-[#0085F4]">OSHA STANDARDS COMPLIANCE</span>
            </h2>

            <p className="text-body-large text-[#475569] font-medium">
              Every Trench Unlimited product is manufactured and tested under rigid North American infrastructure specifications, ensuring PE-stamped tabulated data for municipal submittals.
            </p>

            <div className="flex flex-wrap gap-6 pt-2 font-mono text-xs text-[#004AAD] font-bold">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0085F4]" />
                <span>100% PE STAMPED TAB DATA</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0085F4]" />
                <span>RIGID LOAD TESTED</span>
              </div>
            </div>

            <div className="pt-2">
              <button 
                onClick={onOpenDocLibrary}
                className="btn-brand-primary py-3 px-6 text-xs"
              >
                <FileText className="w-4 h-4" />
                <span>VIEW TECHNICAL DOCUMENTS</span>
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
