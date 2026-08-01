import React from 'react';
import { Factory, CheckCircle2, Wrench } from 'lucide-react';

export const ManufacturingCapabilities: React.FC = () => {
  const capabilities = [
    {
      title: 'ROBOTIC STRUCTURAL STEEL FABRICATION',
      desc: 'High-precision automated welding and plasma cutting for A572 Grade 50 steel trench box side panels and spreader collars.',
      spec: 'Submerged Arc Welding / ISO Certified'
    },
    {
      title: 'PRECISION ALUMINUM HYDRAULIC ASSEMBLY',
      desc: 'Aircraft-grade 6061-T6 structural aluminum hydraulic shoring rail extrusion with dual-action hydraulic cylinders.',
      spec: '3,500 PSI Max Pressure Rating'
    },
    {
      title: 'MODULAR SLIDE RAIL MANUFACTURING',
      desc: 'Heavy structural steel slide rail posts and dig-and-push panels designed to withstand Type C soil forces without soil vibration.',
      spec: 'ASTM A36 Heavy Steel Fabrication'
    },
    {
      title: 'HIGH-TRACTION ANTI-SKID COATING PLANT',
      desc: 'Full-surface aggregate epoxy anti-skid coating line for AASHTO H-20 traffic-rated steel road plates.',
      spec: 'AASHTO H-20 Full Axle Proof Loaded'
    }
  ];

  return (
    <section id="manufacturing" className="py-20 bg-[#F8F8F8] border-b border-[#E2E8F0]">
      <div className="container-industrial space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#0085F4] text-xs font-mono font-bold text-[#004AAD]">
            <Factory className="w-4 h-4 text-[#0085F4]" />
            <span>INDUSTRIAL MANUFACTURING EXCELLENCE</span>
          </div>
          <h2 className="text-section-title text-[#004AAD] uppercase">
            MANUFACTURING &amp; <span className="text-[#0085F4]">STEEL FABRICATION</span>
          </h2>
          <p className="text-body-large text-[#475569] font-medium">
            State-of-the-art North American manufacturing facilities engineered for heavy steel trench safety production.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, idx) => (
            <div 
              key={idx}
              className="bg-white border-2 border-[#E2E8F0] p-6 hover:border-[#0085F4] transition-all flex flex-col justify-between space-y-4 font-mono group"
            >
              <div className="flex justify-between items-center border-b border-[#E2E8F0] pb-3">
                <span className="text-xs font-bold text-[#0085F4]">PLANT 0{idx + 1}</span>
                <Wrench className="w-4 h-4 text-[#004AAD]" />
              </div>

              <div>
                <h3 className="text-card-title text-[#004AAD] group-hover:text-[#0085F4] transition-colors uppercase">
                  {cap.title}
                </h3>
                <p className="text-xs text-[#475569] font-sans font-medium leading-relaxed mt-2">
                  {cap.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-[#E2E8F0] text-xs text-[#004AAD] font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0085F4]" />
                <span>{cap.spec}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
