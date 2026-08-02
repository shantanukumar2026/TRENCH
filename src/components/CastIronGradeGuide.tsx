import React from 'react';
import { Layers, ShieldCheck, CheckCircle2, Cpu } from 'lucide-react';

export const CastIronGradeGuide: React.FC = () => {
  const ironGrades = [
    {
      grade: 'DUCTILE IRON (ASTM A536 80-55-06)',
      yield: '80,000 PSI Tensile / 55,000 PSI Yield',
      loadClass: 'Class E600 to F900 (Heavy Duty)',
      desc: 'Nodular graphite matrix providing extreme impact resistance and high load-bearing capacity. Designed for airport runways, container ports, and heavy freight truck terminals.',
      badgeBg: 'bg-[#004AAD]',
      borderColor: 'border-[#004AAD]'
    },
    {
      grade: 'GREY CAST IRON (ASTM A48 CLASS 35)',
      yield: '35,000 PSI Tensile Strength',
      loadClass: 'Class C250 to D400 (Standard Duty)',
      desc: 'High vibration damping and thermal stability. Ideal for municipal pedestrian walkways, commercial parking structures, and urban stormwater drain channels.',
      badgeBg: 'bg-[#0085F4]',
      borderColor: 'border-[#0085F4]'
    },
    {
      grade: 'HOT-DIP GALVANIZED STEEL ALLOY',
      yield: '65,000 PSI Structural Steel Yield',
      loadClass: 'Class A15 to D400 (Corrosion Resistant)',
      desc: 'Press-locked mesh steel grating hot-dip galvanized per ASTM A123. Superior chemical resistance for food processing plants and coastal seawater exposure.',
      badgeBg: 'bg-[#003380]',
      borderColor: 'border-[#003380]'
    }
  ];

  return (
    <section id="iron-grade-guide" className="py-20 bg-white border-b border-[#E2E8F0] relative">
      <div className="container-industrial space-y-12">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-[#004AAD] pb-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F1F5F9] border border-[#004AAD] text-xs font-mono font-bold text-[#004AAD] uppercase">
              <Cpu className="w-4 h-4 text-[#0085F4]" />
              <span>ASTM METALLURGICAL CAST IRON STANDARDS</span>
            </div>
            <h2 className="text-section-title text-[#004AAD] uppercase">
              DUCTILE IRON &amp; CASTING <span className="text-[#0085F4]">METALLURGY GUIDE</span>
            </h2>
            <p className="text-body-large text-[#475569] font-medium">
              Compare nodular ductile iron, grey cast iron, and galvanized structural steel alloys for heavy load trench drain gratings, covers, and channel frames.
            </p>
          </div>
        </div>

        {/* 3 Iron Grade Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-mono">
          {ironGrades.map((st, idx) => (
            <div
              key={idx}
              className={`bg-[#F8FAFC] border-2 ${st.borderColor} p-8 space-y-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all`}
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className={`${st.badgeBg} text-white text-xs font-bold px-3 py-1 uppercase`}>
                    SPEC 0{idx + 1}
                  </span>
                  <span className="text-xs text-[#64748B] font-bold">FOUNDRY CERT</span>
                </div>

                <div className="space-y-1 border-b border-[#E2E8F0] pb-3">
                  <div className="text-xs text-[#64748B]">METALLURGICAL GRADE:</div>
                  <div className="text-sm font-extrabold text-[#004AAD]">{st.grade}</div>
                </div>

                <div className="space-y-1 border-b border-[#E2E8F0] pb-3">
                  <div className="text-xs text-[#64748B]">TENSILE / YIELD STRENGTH:</div>
                  <div className="text-xs font-extrabold text-[#0085F4]">{st.yield}</div>
                </div>

                <div className="space-y-1 border-b border-[#E2E8F0] pb-3">
                  <div className="text-xs text-[#64748B]">EN 1433 LOAD RATING:</div>
                  <div className="text-xs font-bold text-[#334155]">{st.loadClass}</div>
                </div>

                <p className="text-xs text-[#475569] font-sans font-medium leading-relaxed">
                  {st.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-[#E2E8F0] flex items-center gap-2 text-[11px] font-bold text-[#004AAD]">
                <ShieldCheck className="w-4 h-4 text-[#0085F4]" />
                <span>KTL Cathodic E-Coat Anti-Rust Finish</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
