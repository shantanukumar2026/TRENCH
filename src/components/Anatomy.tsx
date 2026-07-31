import React, { useState } from 'react';
import { ANATOMY_POINTS } from '../data/trenchData';
import { AnatomyPoint } from '../types';
import { BookOpen, Info, ShieldCheck, CheckCircle2, Layers } from 'lucide-react';

export const Anatomy: React.FC = () => {
  const [selectedPoint, setSelectedPoint] = useState<AnatomyPoint>(ANATOMY_POINTS[3]); // Default: Shoring

  return (
    <section id="anatomy" className="py-24 bg-blueprint-grid border-b border-blue-200 relative overflow-hidden">
      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white border border-blue-200 shadow-sm">
            <BookOpen className="w-3.5 h-3.5 text-[#C00000]" />
            <span className="text-xs font-mono font-bold text-[#0754AE] uppercase tracking-widest">
              EDUCATIONAL INFRASTRUCTURE CUTAWAY
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0754AE] tracking-tight font-heading uppercase">
            THE TRENCH <span className="text-[#2166D1]">ANATOMY</span>
          </h2>
          <div className="flex justify-center items-center gap-2">
            <span className="red-accent-bar"></span>
            <p className="text-slate-700 font-medium text-base">
              Explore the 9 engineered structural layers that make up a complete underground trench infrastructure assembly.
            </p>
          </div>
        </div>

        {/* Anatomy Interactive Cross-Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Visual Cutaway Interactive Model Container */}
          <div className="lg:col-span-7 relative bg-white border-2 border-blue-300 rounded-xl p-6 shadow-xl h-[500px] overflow-hidden bg-blueprint-dense">
            
            {/* Cutaway Stratigraphy Backdrop Graphic */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#FFFFFF] via-[#F0F7FF] to-[#DCE8F5] opacity-90 pointer-events-none"></div>

            {/* Simulated Road and Trench Strata Lines */}
            <div className="absolute top-0 left-0 right-0 h-16 bg-[#0754AE] text-white p-3 font-mono text-xs flex justify-between items-center shadow-md">
              <span className="font-bold">▲ PAVEMENT SUB-BASE (0.0 FT)</span>
              <span className="bg-[#C00000] text-white px-2.5 py-1 rounded font-bold shadow-sm">OSHA TYPE B/C SOIL PROFILE</span>
            </div>

            {/* 9 Interactive Technical Point Markers */}
            {ANATOMY_POINTS.map((pt) => {
              const isSelected = selectedPoint.id === pt.id;
              return (
                <button
                  key={pt.id}
                  onClick={() => setSelectedPoint(pt)}
                  style={{ left: `${pt.x}%`, top: `${pt.y}%` }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 group transition-all duration-300 ${
                    isSelected ? 'scale-125' : 'hover:scale-110'
                  }`}
                >
                  <div className={`flex items-center gap-2 px-2.5 py-1 rounded-full border shadow-md font-mono text-[10px] font-bold ${
                    isSelected 
                      ? 'bg-[#C00000] text-white border-red-400 ring-4 ring-red-200' 
                      : 'bg-[#0754AE] text-white border-blue-300 hover:bg-[#2166D1]'
                  }`}>
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                    {pt.title}
                  </div>
                </button>
              );
            })}

            {/* Bottom Depth Reference Bar */}
            <div className="absolute bottom-4 left-6 right-6 flex justify-between items-center text-[10px] font-mono text-[#0754AE] font-bold border-t border-blue-200 pt-2">
              <span>EXCAVATION DEPTH: 0 FT TO 18 FT</span>
              <span>COMPACTED BEDDING COMPLIANCE</span>
            </div>
          </div>

          {/* Right Column: Selected Layer Technical Breakdown Card */}
          <div className="lg:col-span-5 bg-[#F0F7FF] border border-blue-200 rounded-xl p-8 shadow-lg space-y-6">
            <div className="flex justify-between items-center border-b border-blue-200 pb-4">
              <div>
                <span className="text-[10px] font-mono text-[#C00000] font-bold uppercase tracking-wider">
                  LAYER SPECIFICATION
                </span>
                <h3 className="text-2xl font-extrabold text-[#0754AE] font-heading uppercase mt-1">
                  {selectedPoint.title}
                </h3>
              </div>
              <span className="px-3 py-1 bg-[#0754AE] text-white text-xs font-mono font-bold rounded">
                {selectedPoint.depth}
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-xs font-mono text-slate-500 uppercase">ENGINEERING ROLE:</span>
                <p className="text-slate-800 font-medium text-sm mt-1 leading-relaxed">
                  {selectedPoint.role}
                </p>
              </div>

              <div className="p-4 bg-white rounded border border-blue-200 font-mono text-xs space-y-1">
                <span className="text-[#C00000] font-bold">COMPLIANCE & TESTING STANDARD:</span>
                <div className="text-[#0754AE] font-bold text-sm">
                  {selectedPoint.spec}
                </div>
              </div>
            </div>

            {/* Quick List of All 9 Layers for Fast Switching */}
            <div>
              <span className="text-xs font-mono text-slate-500 uppercase mb-2 block">
                SELECT LAYER TO INSPECT:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {ANATOMY_POINTS.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setSelectedPoint(p)}
                    className={`px-2.5 py-1 text-[11px] font-mono rounded border transition-all ${
                      selectedPoint.id === p.id 
                        ? 'bg-[#0754AE] text-white border-[#0754AE] font-bold' 
                        : 'bg-white text-slate-700 border-blue-200 hover:border-[#2166D1]'
                    }`}
                  >
                    {p.title.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
