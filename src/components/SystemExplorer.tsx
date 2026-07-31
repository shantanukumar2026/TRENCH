import React, { useState } from 'react';
import { HOTSPOTS } from '../data/trenchData';
import { Hotspot } from '../types';
import { Crosshair, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface SystemExplorerProps {
  onSelectHotspot: (categoryId: string) => void;
}

export const SystemExplorer: React.FC<SystemExplorerProps> = ({ onSelectHotspot }) => {
  const [activeHotspot, setActiveHotspot] = useState<Hotspot>(HOTSPOTS[0]);

  return (
    <section id="explorer" className="py-20 bg-blueprint-dense border-b border-blue-200 relative overflow-hidden">
      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-200 shadow-sm">
            <Crosshair className="w-4 h-4 text-[#2166D1]" />
            <span className="text-xs font-mono font-bold text-[#0754AE] uppercase tracking-widest">
              3D INTERACTIVE TRENCH & UTILITY ENVIRONMENT
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0754AE] tracking-tight font-heading uppercase">
            EVERYTHING TRENCH. <span className="text-[#2166D1]">10 SYSTEMS BELOW GROUND.</span>
          </h2>
          <div className="flex justify-center items-center gap-2">
            <span className="blue-accent-bar"></span>
            <p className="text-[#163B66] font-medium text-base">
              Hover over or tap any numbered node (01 to 10) to inspect engineered infrastructure specs and explore product categories.
            </p>
          </div>
        </div>

        {/* Technical Interactive Blueprint Canvas Box */}
        <div className="relative w-full h-[580px] sm:h-[650px] bg-white rounded-2xl border-2 border-blue-300 shadow-2xl overflow-hidden bg-blueprint-grid">
          
          <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#2166D1_1px,transparent_1px)] [background-size:24px_24px]"></div>

          <div className="absolute inset-6 border border-blue-200 rounded pointer-events-none p-4 flex flex-col justify-between z-10">
            <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 uppercase">
              <span>SYSTEM ARCHITECTURE: 10 PRIMARY CATEGORIES</span>
              <span>SCALE: 1:50 ARCHITECTURAL</span>
              <span>GRID REF: 34.091 / -118.243</span>
            </div>
            <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 uppercase">
              <span>AASHTO / OSHA CERTIFIED SUBSTRATE</span>
              <span>REINFORCED STEEL &amp; POLYMER COMPOSITES</span>
            </div>
          </div>

          {/* 10 Numbered Hotspots */}
          {HOTSPOTS.map((hotspot) => {
            const isActive = activeHotspot.id === hotspot.id;
            return (
              <div
                key={hotspot.id}
                style={{ left: `${hotspot.xPercent}%`, top: `${hotspot.yPercent}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-20"
                onClick={() => setActiveHotspot(hotspot)}
                onMouseEnter={() => setActiveHotspot(hotspot)}
              >
                <div className={`relative flex items-center justify-center w-11 h-11 rounded-full transition-all duration-300 ${
                  isActive 
                    ? 'bg-[#0754AE] text-white scale-125 shadow-xl shadow-blue-500/40 ring-4 ring-blue-200' 
                    : 'bg-[#2166D1] text-white hover:bg-[#0754AE] hover:scale-110'
                }`}>
                  <span className="font-mono text-xs font-bold text-white">{hotspot.number}</span>

                  <span className={`absolute inset-0 rounded-full animate-ping opacity-30 ${
                    isActive ? 'bg-[#0754AE]' : 'bg-[#2166D1]'
                  }`}></span>
                </div>

                <div className="mt-1.5 px-2.5 py-1 bg-white/95 border border-blue-200 rounded shadow text-[10px] font-mono font-bold text-[#0754AE] whitespace-nowrap opacity-90 group-hover:opacity-100">
                  {hotspot.number} {hotspot.title}
                </div>
              </div>
            );
          })}

          {/* Active Hotspot Info Card */}
          <div className="absolute bottom-6 left-6 right-6 sm:left-auto sm:right-6 sm:w-96 bg-white/95 backdrop-blur-md rounded-xl border-2 border-blue-300 shadow-2xl p-6 z-30 animate-in fade-in slide-in-from-bottom-3 duration-300">
            <div className="flex justify-between items-start mb-3 border-b border-blue-200 pb-3">
              <div>
                <span className="px-2.5 py-1 bg-[#0754AE] text-white text-[10px] font-mono font-bold uppercase rounded">
                  SYSTEM NODE {activeHotspot.number}
                </span>
                <h3 className="text-xl font-bold text-[#0754AE] font-heading uppercase mt-1">
                  {activeHotspot.title}
                </h3>
                <span className="text-xs font-mono text-[#1E4E8C] font-semibold">{activeHotspot.category}</span>
              </div>
              <div className="text-right font-mono text-xs text-[#C00000] font-bold">
                {activeHotspot.partNumber}
              </div>
            </div>

            <p className="text-xs text-[#163B66] font-medium leading-relaxed mb-4">
              {activeHotspot.shortDesc}
            </p>

            <div className="space-y-2 mb-5 font-mono text-xs border-t border-blue-100 pt-3">
              <div className="flex justify-between text-[#163B66]">
                <span className="text-slate-500">APPLICATION:</span>
                <span className="font-semibold text-[#0754AE]">{activeHotspot.application}</span>
              </div>
              <div className="flex justify-between text-[#163B66]">
                <span className="text-slate-500">LOAD RATING:</span>
                <span className="font-bold text-[#C00000]">{activeHotspot.loadRating}</span>
              </div>
              {activeHotspot.sampleProducts && activeHotspot.sampleProducts.length > 0 && (
                <div className="pt-1">
                  <span className="text-[10px] font-bold text-[#0754AE] uppercase block mb-1">SAMPLE SYSTEM PRODUCTS:</span>
                  <div className="flex flex-wrap gap-1">
                    {activeHotspot.sampleProducts.map((p, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-[#F0F7FF] border border-blue-200 text-[10px] text-[#0754AE] font-semibold">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => onSelectHotspot(activeHotspot.categoryId)}
              className="w-full btn-primary py-3 text-xs font-mono font-bold flex items-center justify-center gap-2"
            >
              <span>EXPLORE CATEGORY {activeHotspot.number} →</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
