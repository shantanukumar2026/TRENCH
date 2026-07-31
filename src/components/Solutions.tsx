import React from 'react';
import { SOLUTION_APPS } from '../data/trenchData';
import { SolutionApp } from '../types';
import { Layers, ArrowRight, ShieldCheck, FileText } from 'lucide-react';

interface SolutionsProps {
  onSelectSolution: (solutionId: string) => void;
  onOpenDocLink: () => void;
}

export const Solutions: React.FC<SolutionsProps> = ({ onSelectSolution, onOpenDocLink }) => {
  return (
    <section id="solutions" className="py-10 bg-white border-b-2 border-slate-200 relative">
      <div className="container-custom space-y-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-slate-200 pb-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#F4F8FF] border border-[#0085F4]/30">
              <Layers className="w-4 h-4 text-[#0085F4]" />
              <span className="text-xs font-mono font-bold text-[#004AAD] uppercase tracking-widest">
                INFRASTRUCTURE SOLUTIONS MATRIX
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#004AAD] tracking-tight font-heading uppercase">
              SOLUTIONS BY <span className="text-[#0085F4]">APPLICATION</span>
            </h2>
            <p className="text-sm text-[#5B7FA5] font-medium max-w-2xl">
              End-to-end engineered infrastructure packages optimized for contractors, municipalities, and utility authorities.
            </p>
          </div>
        </div>

        {/* Cinematic Horizontal Modules */}
        <div className="space-y-6">
          {SOLUTION_APPS.map((sol: SolutionApp, index: number) => {
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
                      e.currentTarget.src = '/images/trench_shield.png';
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
                    <p className="text-blue-600 font-medium text-base mt-2 leading-relaxed">
                      {sol.description}
                    </p>

                    {/* Recommended Products Chips */}
                    <div className="mt-6">
                      <span className="text-xs font-mono text-blue-400 uppercase block mb-2 font-bold">
                        RECOMMENDED SYSTEM COMPONENTS:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {sol.recommendedProducts.map((prod: string, pIdx: number) => (
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
                      {sol.specs.map((sp: { label: string; value: string }, sIdx: number) => (
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
