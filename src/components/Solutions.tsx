import React from 'react';
import { SOLUTIONS_APPS } from '../data/trenchData';
import { Layers, ArrowRight, ShieldCheck, FileText } from 'lucide-react';

interface SolutionsProps {
  onSelectSolution: (solutionId: string) => void;
  onOpenDocLink: () => void;
}

export const Solutions: React.FC<SolutionsProps> = ({ onSelectSolution, onOpenDocLink }) => {
  return (
    <section id="solutions" className="py-24 bg-white border-b border-blue-200 relative">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#F0F7FF] border border-blue-200">
            <Layers className="w-3.5 h-3.5 text-[#C00000]" />
            <span className="text-xs font-mono font-bold text-[#0754AE] uppercase tracking-widest">
              INFRASTRUCTURE SOLUTIONS MATRIX
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0754AE] tracking-tight font-heading uppercase">
            SOLUTIONS BY <span className="text-[#2166D1]">APPLICATION</span>
          </h2>
          <div className="flex justify-center items-center gap-2">
            <span className="red-accent-bar"></span>
            <p className="text-slate-700 font-medium text-base">
              End-to-end engineered infrastructure packages optimized for contractors, municipalities, and utility authorities.
            </p>
          </div>
        </div>

        {/* Cinematic Horizontal Modules */}
        <div className="space-y-12">
          {SOLUTIONS_APPS.map((sol, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={sol.id}
                className="bg-[#F0F7FF] border border-blue-200 rounded-xl overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-12 items-stretch group hover:border-[#2166D1] transition-all duration-300"
              >
                {/* Image & Technical CAD Overlay Panel */}
                <div className={`lg:col-span-6 relative min-h-[340px] overflow-hidden ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <img 
                    src={sol.image} 
                    alt={sol.title} 
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1000&q=80';
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle Blue Tonal Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0754AE]/80 via-[#0754AE]/30 to-transparent"></div>

                  {/* CAD Overlay Metadata Strip */}
                  <div className="absolute top-4 left-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded border border-blue-200 text-[11px] font-mono text-[#0754AE] font-bold flex items-center justify-between">
                    <span>CAD SPECIFICATION OVERLAY</span>
                    <span className="text-[#C00000]">{sol.cadOverlay}</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="px-2 py-0.5 bg-[#C00000] text-[10px] font-mono font-bold uppercase rounded">
                      SECTOR SOLUTION
                    </span>
                    <h3 className="text-2xl font-bold font-heading uppercase mt-1">
                      {sol.title}
                    </h3>
                  </div>
                </div>

                {/* Content Breakdown Panel */}
                <div className={`lg:col-span-6 p-8 flex flex-col justify-between space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div>
                    <span className="text-xs font-mono text-[#2166D1] font-bold uppercase tracking-wider">
                      {sol.tagline}
                    </span>
                    <p className="text-slate-700 font-medium text-base mt-2 leading-relaxed">
                      {sol.description}
                    </p>

                    {/* Recommended Products Chips */}
                    <div className="mt-6">
                      <span className="text-xs font-mono text-slate-500 uppercase block mb-2 font-bold">
                        RECOMMENDED SYSTEM COMPONENTS:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {sol.recommendedProducts.map((prod, pIdx) => (
                          <span 
                            key={pIdx}
                            className="px-3 py-1 bg-white border border-blue-200 rounded text-xs font-mono font-bold text-[#0754AE] shadow-sm"
                          >
                            + {prod}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Technical Parameters Matrix */}
                    <div className="mt-6 grid grid-cols-3 gap-3 bg-white p-4 rounded border border-blue-200">
                      {sol.specs.map((sp, sIdx) => (
                        <div key={sIdx} className="text-left font-mono">
                          <div className="text-[10px] text-slate-400 uppercase">{sp.label}</div>
                          <div className="text-xs font-bold text-[#0754AE] mt-0.5">{sp.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-blue-200 flex flex-wrap gap-3">
                    <button 
                      onClick={() => onSelectSolution(sol.id)}
                      className="btn-primary text-xs py-3 px-6"
                    >
                      EXPLORE SOLUTION PRODUCTS
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={onOpenDocLink}
                      className="btn-secondary text-xs py-3 px-5"
                    >
                      <FileText className="w-4 h-4 text-[#0754AE]" />
                      DOWNLOAD CAD SPECIFICATION (.DWG)
                    </button>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
