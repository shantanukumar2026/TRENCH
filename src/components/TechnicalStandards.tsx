import React from 'react';
import { BookmarkCheck, FileText, Anchor, ShieldCheck, CheckCircle2, Award } from 'lucide-react';

interface TechnicalStandardsProps {
  onOpenDocLibrary: () => void;
}

export const TechnicalStandards: React.FC<TechnicalStandardsProps> = ({ onOpenDocLibrary }) => {
  const standards = [
    {
      code: 'OSHA 1926 SUBPART P',
      title: 'EXCAVATION & SHORING STANDARD',
      authority: 'U.S. Department of Labor',
      desc: 'Mandatory structural shielding compliance for excavations exceeding 5 feet in Type A, B, and C soil conditions.',
      rating: 'Certified 1,450 PSF Lateral Pressure'
    },
    {
      code: 'AASHTO M306 / H-20',
      title: 'HIGHWAY TRAFFIC LOADING RATING',
      authority: 'Amer. Association of State Highway Officials',
      desc: 'Proof-loaded to 50,000 lbs minimum wheel load to ensure non-rocking street casting performance.',
      rating: '50,000 LBS Proof Loaded'
    },
    {
      code: 'ANSI / AWWA C900',
      title: 'POTABLE WATER PRESSURE PIPE',
      authority: 'American Water Works Association',
      desc: 'Precision gasketed joint uPVC pressure pipe immune to electrochemical soil corrosion.',
      rating: 'DR 18 / 235 PSI Working Pressure'
    },
    {
      code: 'ASTM C478 / C858',
      title: 'PRECAST CONCRETE VAULTS',
      authority: 'ASTM International Standards',
      desc: '5,000 PSI compressive strength precast concrete monolithic vaults with butyl rubber gasket joints.',
      rating: '5,000 PSI Compressive Mix'
    }
  ];

  return (
    <section id="standards" className="py-24 bg-white border-b border-blue-200 relative overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Narrative & CTA */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#F0F7FF] border border-blue-200">
              <Award className="w-3.5 h-3.5 text-[#C00000]" />
              <span className="text-xs font-mono font-bold text-[#0754AE] uppercase tracking-widest">
                VERIFIED COMPLIANCE FRAMEWORK
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0754AE] tracking-tight font-heading uppercase leading-none">
              ENGINEERED QUALITY &amp; <br />
              <span className="text-[#2166D1]">STANDARDS COMPLIANCE</span>
            </h2>

            <p className="text-slate-700 font-medium text-base leading-relaxed">
              Every Trench Unlimited product is manufactured and tested under rigid North American infrastructure specifications, ensuring complete compliance for municipal submittals.
            </p>

            <div className="flex flex-wrap gap-6 pt-2 font-mono text-xs text-[#0754AE] font-bold">
              <div className="flex items-center gap-2">
                <BookmarkCheck className="w-4 h-4 text-[#C00000]" />
                <span>100% PE STAMPED</span>
              </div>
              <div className="flex items-center gap-2">
                <Anchor className="w-4 h-4 text-[#2166D1]" />
                <span>RIGID LOAD TESTED</span>
              </div>
            </div>

            <div className="pt-2">
              <button 
                onClick={onOpenDocLibrary}
                className="btn-primary text-xs py-3.5 px-6 flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                VIEW ALL COMPLIANCE CERTIFICATES
              </button>
            </div>
          </div>

          {/* Right Column: 4 Standards Grid Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {standards.map((std, idx) => (
              <div 
                key={idx}
                className="bg-[#F0F7FF] border-2 border-blue-200 rounded-xl p-6 shadow-md hover:border-[#2166D1] transition-all flex flex-col justify-between space-y-4 font-mono group"
              >
                <div className="space-y-1">
                  <div className="flex justify-between items-center text-[10px] text-slate-500 font-bold uppercase">
                    <span>{std.authority}</span>
                    <span className="text-[#C00000]">{std.code}</span>
                  </div>
                  <h3 className="text-base font-bold text-[#0754AE] font-heading uppercase group-hover:text-[#2166D1] transition-colors">
                    {std.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-700 font-sans font-medium leading-relaxed">
                  {std.desc}
                </p>

                <div className="pt-2 border-t border-blue-200 text-[11px] text-[#0754AE] font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2166D1]" />
                  {std.rating}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
