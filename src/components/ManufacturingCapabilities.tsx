import React from 'react';
import { Cpu, ShieldCheck, Wrench, Factory, CheckCircle2 } from 'lucide-react';

export const ManufacturingCapabilities: React.FC = () => {
  const capabilities = [
    {
      title: 'ROBOTIC STRUCTURAL STEEL FABRICATION',
      desc: 'High-precision automated welding and plasma cutting for A572 Grade 50 steel trench box side panels and spreader collars.',
      spec: 'Submerged Arc Welding / ISO Certified'
    },
    {
      title: 'MONOLITHIC PRECAST CONCRETE POURING',
      desc: 'High-density 5,000 PSI fiber-reinforced concrete casting with pre-formed knockouts and butyl rubber gasket joints.',
      spec: 'ASTM C478 & C858 Batch Testing'
    },
    {
      title: 'POLYMER CONCRETE & INJECTION MOLDING',
      desc: 'Chemical-resistant polymer concrete channel drain casting with integrated ductile iron edge rails.',
      spec: 'Class E 600 kN Impact Rating'
    },
    {
      title: 'HYDROSTATIC PRESSURE TESTING LAB',
      desc: 'Full-scale hydrostatic testing of AWWA C900 PVC pressure pipe and precast access vault seals prior to shipping.',
      spec: '100% Factory Pressure Inspected'
    }
  ];

  return (
    <section id="manufacturing" className="py-24 bg-blueprint-dense border-b border-blue-200 relative overflow-hidden">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white border border-blue-200 shadow-sm">
            <Factory className="w-3.5 h-3.5 text-[#C00000]" />
            <span className="text-xs font-mono font-bold text-[#0754AE] uppercase tracking-widest">
              INDUSTRIAL MANUFACTURING EXCELLENCE
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0754AE] tracking-tight font-heading uppercase">
            MANUFACTURING &amp; <span className="text-[#2166D1]">FABRICATION</span>
          </h2>
          <div className="flex justify-center items-center gap-2">
            <span className="red-accent-bar"></span>
            <p className="text-slate-700 font-medium text-base">
              State-of-the-art North American manufacturing facilities engineered for high-volume infrastructure production.
            </p>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, idx) => (
            <div 
              key={idx}
              className="bg-white border-2 border-blue-200 rounded-xl p-6 shadow-md hover:border-[#2166D1] transition-all flex flex-col justify-between space-y-4 font-mono group"
            >
              <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-[#C00000]">FACILITY 0{idx + 1}</span>
                <Wrench className="w-4 h-4 text-[#0754AE]" />
              </div>

              <div>
                <h3 className="text-base font-bold text-[#0754AE] font-heading uppercase group-hover:text-[#2166D1] transition-colors">
                  {cap.title}
                </h3>
                <p className="text-xs text-slate-700 font-sans font-medium leading-relaxed mt-2">
                  {cap.desc}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 text-[11px] text-[#0754AE] font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2166D1]" />
                {cap.spec}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
