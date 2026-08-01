import React, { useState } from 'react';
import { DEPTH_LEVELS } from '../data/trenchData';
import { DepthLevel } from '../types';
import { ArrowRight, Layers, ShieldCheck, ChevronRight } from 'lucide-react';

interface DepthNavProps {
  onSelectProduct: (productId: string) => void;
}

export const DepthNav: React.FC<DepthNavProps> = ({ onSelectProduct }) => {
  const [activeLevel, setActiveLevel] = useState<DepthLevel>(DEPTH_LEVELS[2]);

  return (
    <section id="depth" className="py-24 bg-white border-b border-blue-200 relative overflow-hidden">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#F0F7FF] border border-blue-200">
            <Layers className="w-3.5 h-3.5 text-[#2166D1]" />
            <span className="text-xs font-mono font-bold text-[#0754AE] uppercase tracking-widest">
              INTERACTIVE PRODUCT NAVIGATION SYSTEM
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0754AE] tracking-tight font-heading uppercase">
            FROM SURFACE <span className="text-[#2166D1]">TO SYSTEM</span>
          </h2>
          <div className="flex justify-center items-center gap-2">
            <span className="blue-accent-bar"></span>
            <p className="text-blue-500 font-medium text-base">
              Select a depth strata level to inspect engineered infrastructure products across every underground layer.
            </p>
          </div>
        </div>

        {/* Vertical Ground Strata Explorer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: 5 Strata Level Selector Buttons */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-3">
            {DEPTH_LEVELS.map((level) => {
              const isSelected = activeLevel.level === level.level;
              return (
                <div
                  key={level.id}
                  onClick={() => setActiveLevel(level)}
                  className={`p-5 rounded-lg border-2 cursor-pointer transition-all duration-300 relative overflow-hidden ${
                    isSelected
                      ? 'bg-[#0754AE] text-white border-[#0754AE] shadow-xl scale-[1.02]'
                      : 'bg-[#F0F7FF] text-[#0754AE] border-blue-200 hover:border-[#2166D1] hover:bg-white'
                  }`}
                >
                  {/* Selected Indicator Pill */}
                  {isSelected && (
                    <div className="absolute top-0 right-0 bg-[#2166D1] text-white px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-widest rounded-bl">
                      ACTIVE STRATA
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <span className={`font-mono text-xs font-extrabold px-2 py-0.5 rounded ${
                          isSelected ? 'bg-white text-[#0754AE]' : 'bg-[#DBEAFE] text-[#0754AE]'
                        }`}>
                          {level.depthMeters} ({level.depthFeet})
                        </span>
                        <h3 className={`text-lg font-bold font-heading uppercase ${isSelected ? 'text-white' : 'text-[#0754AE]'}`}>
                          {level.title}
                        </h3>
                      </div>
                      <p className={`text-xs font-medium ${isSelected ? 'text-blue-100' : 'text-blue-500'}`}>
                        {level.tagline}
                      </p>
                    </div>
                    <ChevronRight className={`w-5 h-5 transition-transform ${isSelected ? 'rotate-90 text-[#DBEAFE]' : 'text-blue-400'}`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Cutaway Visualizer & Products Panel */}
          <div className="lg:col-span-7 bg-[#F0F7FF] border border-blue-200 rounded-xl p-8 flex flex-col justify-between shadow-lg relative bg-blueprint-grid">
            
            <div>
              <div className="flex flex-wrap justify-between items-center gap-4 pb-6 border-b border-blue-200">
                <div>
                  <div className="text-xs font-mono text-[#2166D1] font-bold uppercase tracking-wider">
                    TARGET DEPTH STRATA
                  </div>
                  <h3 className="text-3xl font-extrabold text-[#0754AE] font-heading uppercase">
                    {activeLevel.title}
                  </h3>
                </div>
                <div className="text-right">
                  <div className="text-xs font-mono text-blue-400 uppercase">BURIAL ZONE</div>
                  <div className="text-xl font-bold font-mono text-[#2166D1]">
                    {activeLevel.depthMeters}
                  </div>
                </div>
              </div>

              <p className="mt-6 text-blue-600 font-medium text-base leading-relaxed">
                {activeLevel.description}
              </p>

              {/* Visual Soil & Ground Cross-Section Render Bar */}
              <div className="mt-8 relative h-32 rounded-lg overflow-hidden border border-blue-300 shadow-inner bg-gradient-to-b from-[#E2E8F0] via-[#DBEAFE] to-[#BFDBFE] p-4 flex flex-col justify-between">
                <div className="flex justify-between items-center text-xs font-mono font-bold text-[#0754AE]">
                  <span>SURFACE GRADE (0.0M)</span>
                  <span className="text-[#2166D1]">ACTIVE SELECTION DEPTH: {activeLevel.depthMeters}</span>
                  <span>BEDROCK SUB-BASE</span>
                </div>

                <div className="relative w-full h-4 bg-white/70 rounded-full overflow-hidden border border-blue-400">
                  <div 
                    className="h-full bg-gradient-to-r from-[#2166D1] to-[#0754AE] transition-all duration-500 relative"
                    style={{ width: `${activeLevel.level * 20}%` }}
                  >
                    <span className="absolute right-1 top-0 bottom-0 w-2 bg-[#2166D1] rounded-full animate-pulse"></span>
                  </div>
                </div>

                <div className="flex justify-between text-[11px] font-mono text-blue-500">
                  <span>LEVEL 01</span>
                  <span>LEVEL 02</span>
                  <span>LEVEL 03</span>
                  <span>LEVEL 04</span>
                  <span>LEVEL 05</span>
                </div>
              </div>

              {/* Featured Level Products List */}
              <div className="mt-8 space-y-3">
                <div className="text-xs font-mono font-bold text-[#0754AE] uppercase tracking-wider flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#2166D1]" />
                  ENGINEERED PRODUCTS FOR THIS DEPTH:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {activeLevel.products.map((prodName, idx) => (
                    <div 
                      key={idx}
                      className="p-3 bg-white rounded border border-blue-200 text-center shadow-sm hover:border-[#2166D1] transition-colors"
                    >
                      <div className="text-xs font-bold text-[#0754AE]">{prodName}</div>
                      <div className="text-[10px] font-mono text-[#2166D1]">SPECIFIED &amp; READY</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Action Footer */}
            <div className="mt-10 pt-6 border-t border-blue-200 flex flex-col sm:flex-row justify-between items-center gap-4">
              <span className="text-xs font-mono text-blue-400">
                100% Structural Load Ratings &amp; Submittal Ready
              </span>
              <button 
                onClick={() => onSelectProduct(activeLevel.id)}
                className="btn-primary text-xs py-3 px-6 w-full sm:w-auto justify-center"
              >
                EXPLORE {activeLevel.title.split('—')[1]} PRODUCTS
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
