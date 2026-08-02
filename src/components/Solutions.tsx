import React from 'react';
import { Layers, ArrowRight, ShieldCheck, FileText } from 'lucide-react';

interface SolutionsProps {
  onSelectSolution: (solutionId: string) => void;
  onOpenDocLink: () => void;
}

export const Solutions: React.FC<SolutionsProps> = ({ onSelectSolution, onOpenDocLink }) => {
  const industrialSolutions = [
    {
      id: 'urban-streetscape',
      title: 'URBAN STREETSCAPES & LANDSCAPE ARCHITECTURE',
      tagline: 'Decorative Cast Iron Tree Grates & ADA Heel-Proof Covers',
      description: 'Expandable square & round cast iron tree grates providing root zone aeration, water infiltration, and ADA-compliant pedestrian safety for city centers and urban avenues.',
      image: '/greates/TI-001.jpg',
      recommendedProducts: ['Metropolitan Square Tree Grate (4x4 Ft)', 'Sunburst Circular Tree Grate (5 Ft Dia)', 'Vertical Iron Tree Guard (6 Ft)'],
      specs: [
        { label: 'SLOT COMPLIANCE', value: 'ADA 1/4" Max Heel-Proof' },
        { label: 'FOUNDRY MATERIAL', value: 'ASTM A48 / A536 Iron' },
        { label: 'OPEN AERATION AREA', value: 'Over 65% Surface Area' }
      ]
    },
    {
      id: 'pedestrian-promenade',
      title: 'PEDESTRIAN PROMENADES & COMMERCIAL HARDSCAPES',
      tagline: 'Architectural Geometric Pattern Trench Gratings',
      description: 'High-flow wave pattern and linear slot ductile iron trench covers cast with slip-resistant surface textures for shopping plazas, resorts, and transit hubs.',
      image: '/greates/trench-grates-img-diagonal-view (7).jpeg',
      recommendedProducts: ['Architectural Wave Pattern ADA Iron Grate', 'Stainless Steel Slot Channel System', 'KTL E-Coated Anti-Rust Frame'],
      specs: [
        { label: 'EN 1433 RATING', value: 'Class C250 to D400' },
        { label: 'SLIP RESISTANCE', value: 'R11 Anti-Skid Cast Pattern' },
        { label: 'LOCKING BAR', value: '4-Point Mechanical Lock' }
      ]
    },
    {
      id: 'highway-airport',
      title: 'HIGHWAYS, AIRPORTS & CONTAINER PORTS',
      tagline: 'Class D400 to F900 900kN Heavy Ductile Iron Channels',
      description: 'Heavy duty ductile iron trench covers and frames proof-tested to 900 kN (202,300 lbs) for Boeing 777 airport taxiways and heavy freight highway corridors.',
      image: '/greates/trench-grate-horizontal-view (19).jpeg',
      recommendedProducts: ['AASHTO H-20 Heavy Duty Ductile Iron Grate', 'Class F900 Airport Runway Channel', 'Heavy Monolithic Ductile Frame'],
      specs: [
        { label: 'PROOF LOAD RATING', value: '900 kN (202,300 LBS)' },
        { label: 'HIGHWAY SPEC', value: 'AASHTO M306 & M105' },
        { label: 'AVIATION SPEC', value: 'FAA AC 150 Approved' }
      ]
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-[#F8F8F8] border-b border-[#E2E8F0]">
      <div className="container-industrial space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-[#004AAD] pb-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F0F7FF] border border-[#0085F4] text-xs font-mono font-bold text-[#004AAD]">
              <Layers className="w-4 h-4 text-[#0085F4]" />
              <span>CAST IRON INFRASTRUCTURE PACKAGES</span>
            </div>
            <h2 className="text-section-title text-[#004AAD] uppercase">
              SOLUTIONS BY <span className="text-[#0085F4]">ARCHITECTURAL APPLICATION</span>
            </h2>
            <p className="text-body-large text-[#475569] max-w-2xl font-medium">
              Engineered cast iron tree grates, ADA heel-proof trench covers, and ductile iron heavy civil drainage channels for urban planners and civil engineers.
            </p>
          </div>
        </div>

        {/* Industrial Solution Modules */}
        <div className="space-y-8">
          {industrialSolutions.map((sol, index) => (
            <div 
              key={sol.id}
              className="bg-white border-2 border-[#E2E8F0] shadow-lg grid grid-cols-1 lg:grid-cols-12 items-stretch group hover:border-[#0085F4] transition-all duration-300"
            >
              {/* Image Container */}
              <div className="lg:col-span-5 relative min-h-[320px] overflow-hidden bg-[#F0F7FF]">
                <img 
                  src={sol.image} 
                  alt={sol.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#004AAD] text-white px-3 py-1 text-xs font-mono font-bold uppercase">
                  APPLICATION MATRIX
                </div>
              </div>

              {/* Content Panel */}
              <div className="lg:col-span-7 p-8 flex flex-col justify-between space-y-6">
                <div>
                  <span className="text-xs font-mono text-[#0085F4] font-extrabold uppercase tracking-wider block mb-1">
                    {sol.tagline}
                  </span>
                  <h3 className="text-card-title text-[#004AAD] uppercase">
                    {sol.title}
                  </h3>
                  <p className="text-body-large text-[#475569] mt-2 font-medium">
                    {sol.description}
                  </p>

                  {/* Recommended Components */}
                  <div className="mt-6">
                    <span className="text-xs font-mono text-[#004AAD] uppercase block mb-2 font-bold">
                      RECOMMENDED CASTING COMPONENTS:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {sol.recommendedProducts.map((prod, pIdx) => (
                        <span 
                          key={pIdx}
                          className="px-3 py-1 bg-[#F0F7FF] border border-[#0085F4] text-xs font-mono font-bold text-[#004AAD]"
                        >
                          + {prod}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tech Specs */}
                  <div className="mt-6 grid grid-cols-3 gap-4 pt-4 border-t border-[#E2E8F0] text-xs font-mono">
                    {sol.specs.map((sp, sIdx) => (
                      <div key={sIdx}>
                        <span className="text-[#475569] block uppercase">{sp.label}:</span>
                        <strong className="text-[#004AAD]">{sp.value}</strong>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
                  <button 
                    onClick={() => onSelectSolution(sol.id)}
                    className="btn-brand-primary py-2.5 px-5 text-xs"
                  >
                    <span>EXPLORE CASTING SOLUTION</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button 
                    onClick={onOpenDocLink} 
                    className="text-xs font-mono font-bold text-[#0085F4] hover:underline flex items-center gap-1.5"
                  >
                    <FileText className="w-4 h-4" />
                    DOWNLOAD CASTING CAD PDF
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
