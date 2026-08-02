import React from 'react';
import { Factory, CheckCircle2, Wrench } from 'lucide-react';

export const ManufacturingCapabilities: React.FC = () => {
  const capabilities = [
    {
      title: 'INDUCTION FURNACE MELTING & SPECTROMETRY',
      desc: 'Medium-frequency electric induction melting furnaces with real-time optical emission spectrometry for precise metallurgical chemical composition.',
      spec: 'ASTM A536 Nodular Ductile Control'
    },
    {
      title: 'DISAMATIC AUTOMATED GREEN SAND MOLDING',
      desc: 'High-speed Disamatic vertical green sand molding lines delivering high dimensional precision and uniform surface finishes for tree grates.',
      spec: 'High Precision Pattern Molding'
    },
    {
      title: 'CNC MACHINED SEATING & 3D PATTERN SHOP',
      desc: 'Multi-axis CNC milling centers machining non-rocking frame seats and custom architectural city logo patterns.',
      spec: 'Non-Rocking Gasketed Frame Fit'
    },
    {
      title: 'KTL CATHODIC E-COATING & FINISHING LINE',
      desc: 'Full immersion electrophoretic dip coating and black asphaltic dipping providing 1,000+ hour salt spray anti-corrosion protection.',
      spec: '1,000+ Hr Salt Spray E-Coat'
    }
  ];

  return (
    <section id="manufacturing" className="py-20 bg-[#F8F8F8] border-b border-[#E2E8F0]">
      <div className="container-industrial space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#0085F4] text-xs font-mono font-bold text-[#004AAD]">
            <Factory className="w-4 h-4 text-[#0085F4]" />
            <span>FOUNDRY CASTING MANUFACTURING EXCELLENCE</span>
          </div>
          <h2 className="text-section-title text-[#004AAD] uppercase">
            FOUNDRY MELTING &amp; <span className="text-[#0085F4]">IRON CASTING PLANT</span>
          </h2>
          <p className="text-body-large text-[#475569] font-medium">
            State-of-the-art ductile iron foundry facilities engineered for architectural tree grates and heavy civil trench covers.
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
                <span className="text-xs font-bold text-[#0085F4]">FOUNDRY 0{idx + 1}</span>
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
