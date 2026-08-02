import React from 'react';
import { Layers, ShieldCheck, CheckCircle2, AlertOctagon } from 'lucide-react';

export const SoilTypeReferenceGuide: React.FC = () => {
  const soilTypes = [
    {
      type: 'TYPE A SOIL',
      compressive: '1.5+ Tons/Sq. Ft.',
      maxSlope: '3/4 : 1 (53° Angle)',
      desc: 'Cohesive clay, silty clay, sandy clay, and hardpan clay. Most stable soil condition, un-shored slope allowable up to 20 feet max depth.',
      badgeBg: 'bg-[#004AAD]',
      borderColor: 'border-[#004AAD]'
    },
    {
      type: 'TYPE B SOIL',
      compressive: '0.5 to 1.5 Tons/Sq. Ft.',
      maxSlope: '1 : 1 (45° Angle)',
      desc: 'Angular gravel, silt, sandy loam, previously disturbed soils. Medium stability requiring 1:1 benching or certified steel trench box protection.',
      badgeBg: 'bg-[#0085F4]',
      borderColor: 'border-[#0085F4]'
    },
    {
      type: 'TYPE C-60 / C-80 SOIL',
      compressive: 'Less than 0.5 Tons/Sq. Ft.',
      maxSlope: '1-1/2 : 1 (34° Angle)',
      desc: 'Gravel, sand, loamy sand, submerged soil, or water-seeping soil. Extreme cave-in hazard. Mandatory active hydraulic or heavy double-wall trench shoring.',
      badgeBg: 'bg-[#003380]',
      borderColor: 'border-[#003380]'
    }
  ];

  return (
    <section id="soil-guide" className="py-20 bg-white border-b border-[#E2E8F0] relative">
      <div className="container-industrial space-y-12">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-[#004AAD] pb-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F1F5F9] border border-[#004AAD] text-xs font-mono font-bold text-[#004AAD] uppercase">
              <Layers className="w-4 h-4 text-[#0085F4]" />
              <span>OSHA 1926 SUBPART P APPENDIX A SOIL MECHANICS</span>
            </div>
            <h2 className="text-section-title text-[#004AAD] uppercase">
              OSHA SOIL <span className="text-[#0085F4]">CLASSIFICATION REFERENCE</span>
            </h2>
            <p className="text-body-large text-[#475569] font-medium">
              Understand soil compressive strengths, allowable un-shored slope benching angles, and when protective shoring systems are mandatory for jobsite compliance.
            </p>
          </div>
        </div>

        {/* 3 Soil Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-mono">
          {soilTypes.map((st, idx) => (
            <div
              key={idx}
              className={`bg-[#F8FAFC] border-2 ${st.borderColor} p-8 space-y-6 flex flex-col justify-between shadow-sm`}
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className={`${st.badgeBg} text-white text-xs font-bold px-3 py-1 uppercase`}>
                    {st.type}
                  </span>
                  <span className="text-xs text-[#64748B] font-bold">OSHA SPEC</span>
                </div>

                <div className="space-y-1 border-b border-[#E2E8F0] pb-3">
                  <div className="text-xs text-[#64748B]">COMPRESSIVE STRENGTH:</div>
                  <div className="text-base font-extrabold text-[#004AAD]">{st.compressive}</div>
                </div>

                <div className="space-y-1 border-b border-[#E2E8F0] pb-3">
                  <div className="text-xs text-[#64748B]">MAX ALLOWABLE SLOPE:</div>
                  <div className="text-base font-extrabold text-[#0085F4]">{st.maxSlope}</div>
                </div>

                <p className="text-xs text-[#475569] font-sans font-medium leading-relaxed">
                  {st.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-[#E2E8F0] flex items-center gap-2 text-[11px] font-bold text-[#004AAD]">
                <ShieldCheck className="w-4 h-4 text-[#0085F4]" />
                <span>Competent Person Soil Test Required</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
