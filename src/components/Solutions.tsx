import React from 'react';
import { SOLUTION_APPS } from '../data/trenchData';
import { SolutionApp } from '../types';
import { Layers, ArrowRight, ShieldCheck, FileText } from 'lucide-react';

interface SolutionsProps {
  onSelectSolution: (solutionId: string) => void;
  onOpenDocLink: () => void;
}

export const Solutions: React.FC<SolutionsProps> = ({ onSelectSolution, onOpenDocLink }) => {
  const industrialSolutions = [
    {
      id: 'excavation-safety',
      title: 'EXCAVATION & SHORING SAFETY',
      tagline: 'OSHA 1926 Subpart P Certified Double-Wall Steel Boxes',
      description: 'Heavy steel trench shields, hydraulic shores, and modular slide rail systems engineered for crew safety in high-depth soil excavations.',
      image: '/images/assets/gettyimages-1479422287-1024x1024.jpg',
      recommendedProducts: ['TU-8000 Heavy-Duty Steel Trench Shield Box', 'TU-HydroLite Aluminum Hydraulic Shoring Rail', 'TU-Modular Slide Rail Trench Shoring System'],
      specs: [
        { label: 'SOIL RATING', value: 'OSHA Type A, B, C Soil' },
        { label: 'COMPLIANCE', value: 'OSHA 1926 Subpart P' },
        { label: 'DEPTH RATING', value: 'Up to 30 FT Excavations' }
      ]
    },
    {
      id: 'pipe-installation',
      title: 'PIPE & UTILITY INSTALLATION',
      tagline: 'High-Clearance Spreader Pipe Systems',
      description: 'Engineered spreader pipe configurations providing up to 9ft of vertical pipe clearance for large-diameter municipal water main & sewer installations.',
      image: '/images/assets/gettyimages-2167164749-1024x1024.jpg',
      recommendedProducts: ['High-Clearance Spreader Pipe Assembly', 'TU-8000 Heavy-Duty Steel Trench Shield Box', 'Trench Safety Ladders'],
      specs: [
        { label: 'PIPE CLEARANCE', value: 'Up to 108 Inches' },
        { label: 'STEEL RATING', value: 'ASTM A572 Grade 50' },
        { label: 'LOAD RATING', value: '1,450 PSF Lateral Earth' }
      ]
    },
    {
      id: 'road-crossing',
      title: 'ROAD CROSSING & STREET DECKING',
      tagline: 'AASHTO H-20 Heavy Traffic Steel Road Plates',
      description: 'Heavy structural steel road plates with center flush-mount lifting nuts and skid-resistant coatings for active traffic bridging over utility trenches.',
      image: '/images/assets/gettyimages-2158727734-1024x1024.jpg',
      recommendedProducts: ['AASHTO H-20 Heavy Structural Steel Trench Road Plate', 'Center Flush Lifting Nut Pin', 'Anti-Skid Epoxy Decking'],
      specs: [
        { label: 'TRAFFIC RATING', value: 'AASHTO H-20 Axle Rated' },
        { label: 'STEEL SPEC', value: 'ASTM A36 1.0" & 1.25" Plate' },
        { label: 'SURFACE COATING', value: 'Anti-Skid Aggregate Epoxy' }
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
              <span>JOBSITE INFRASTRUCTURE PACKAGES</span>
            </div>
            <h2 className="text-section-title text-[#004AAD] uppercase">
              SOLUTIONS BY <span className="text-[#0085F4]">CIVIL APPLICATION</span>
            </h2>
            <p className="text-body-large text-[#475569] max-w-2xl">
              Engineered trench shoring packages tailored for deep excavation, pipe laying, utility trenching, and urban street crossings.
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
                      RECOMMENDED EQUIPMENT COMPONENTS:
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
                    <span>EXPLORE EQUIPMENT SOLUTION</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button 
                    onClick={onOpenDocLink} 
                    className="text-xs font-mono font-bold text-[#0085F4] hover:underline flex items-center gap-1.5"
                  >
                    <FileText className="w-4 h-4" />
                    DOWNLOAD TAB DATA PDF
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
