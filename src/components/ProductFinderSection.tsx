import React, { useState } from 'react';
import { Search, Filter, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ProductFinderSectionProps {
  onSelectCategory: (catId: string) => void;
  onRequestQuote: () => void;
}

export const ProductFinderSection: React.FC<ProductFinderSectionProps> = ({ onSelectCategory, onRequestQuote }) => {
  const [soilType, setSoilType] = useState<string>('B');
  const [depthRange, setDepthRange] = useState<string>('medium');
  const [loadRating, setLoadRating] = useState<string>('h20');

  const recommendations = [
    {
      title: 'TU-8000 Heavy Steel Trench Shield Box',
      code: 'TU-SB-824-HD',
      depth: '5 - 30 FT',
      soil: 'Type A, B, C Soil',
      load: '1,450 PSF Lateral Rating',
      catId: 'safety-protection'
    },
    {
      title: 'TU-HydroLite Aluminum Hydraulic Shore',
      code: 'TU-HS-8FT-AL',
      depth: '0 - 15 FT',
      soil: 'Type A & B Soil',
      load: '3,500 PSI Hydraulic',
      catId: 'hydraulic-shoring'
    },
    {
      title: 'TU-PolyDrain E-600 Polymer Concrete Channel',
      code: 'TU-PD-600-PC',
      depth: 'Surface Drainage',
      soil: 'All Subgrades',
      load: 'Class E 600 kN / AASHTO H-20',
      catId: 'safety-protection'
    }
  ];

  return (
    <section className="py-20 bg-[#F0F7FF] border-b border-[#E2E8F0] relative">
      <div className="container-industrial space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#0085F4] text-xs font-mono font-bold text-[#004AAD]">
            <Filter className="w-4 h-4 text-[#0085F4]" />
            <span>INTERACTIVE TRENCH FINDER CONFIGURATOR</span>
          </div>
          <h2 className="text-section-title text-[#004AAD] uppercase">
            FIND THE RIGHT <span className="text-[#0085F4]">SHORING &amp; DRAINAGE SYSTEM</span>
          </h2>
          <p className="text-body-large text-[#475569] font-medium">
            Select your jobsite soil parameters, trench depth, and load class requirement to instantly filter PE-stamped equipment.
          </p>
        </div>

        {/* 3-Step Selection Controls */}
        <div className="bg-white border-2 border-[#004AAD] p-8 shadow-xl grid grid-cols-1 md:grid-cols-3 gap-8 font-mono text-xs">
          
          {/* Step 1: Soil Classification */}
          <div className="space-y-3">
            <span className="font-bold text-[#004AAD] uppercase block text-sm">
              STEP 1: SELECT OSHA SOIL TYPE
            </span>
            <div className="space-y-2">
              {[
                { id: 'A', name: 'Type A Soil (Solid Clay & Cohesive)' },
                { id: 'B', name: 'Type B Soil (Silt, Sandy Loam & Fissured)' },
                { id: 'C', name: 'Type C Soil (Granular Gravel, Sand & Water)' }
              ].map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSoilType(s.id)}
                  className={`w-full p-3 text-left font-bold border transition-colors ${
                    soilType === s.id
                      ? 'bg-[#004AAD] text-white border-[#004AAD]'
                      : 'bg-[#F8F8F8] text-[#004AAD] border-[#E2E8F0] hover:bg-[#F0F7FF]'
                  }`}
                >
                  {s.name}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Trench Depth */}
          <div className="space-y-3">
            <span className="font-bold text-[#004AAD] uppercase block text-sm">
              STEP 2: SELECT EXCAVATION DEPTH
            </span>
            <div className="space-y-2">
              {[
                { id: 'shallow', name: 'Shallow (0 to 8 Feet / Surface)' },
                { id: 'medium', name: 'Medium Depth (8 to 18 Feet)' },
                { id: 'deep', name: 'Deep Excavation (18 to 32+ Feet)' }
              ].map((d) => (
                <button
                  key={d.id}
                  onClick={() => setDepthRange(d.id)}
                  className={`w-full p-3 text-left font-bold border transition-colors ${
                    depthRange === d.id
                      ? 'bg-[#004AAD] text-white border-[#004AAD]'
                      : 'bg-[#F8F8F8] text-[#004AAD] border-[#E2E8F0] hover:bg-[#F0F7FF]'
                  }`}
                >
                  {d.name}
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Traffic & Load Class */}
          <div className="space-y-3">
            <span className="font-bold text-[#004AAD] uppercase block text-sm">
              STEP 3: SELECT TRAFFIC / LOAD RATING
            </span>
            <div className="space-y-2">
              {[
                { id: 'h20', name: 'AASHTO H-20 / Class D 400 kN (Traffic)' },
                { id: 'e600', name: 'Class E 600 kN / Heavy Duty Industrial' },
                { id: 'f900', name: 'Class F 900 kN / Airport & Heavy Port' }
              ].map((l) => (
                <button
                  key={l.id}
                  onClick={() => setLoadRating(l.id)}
                  className={`w-full p-3 text-left font-bold border transition-colors ${
                    loadRating === l.id
                      ? 'bg-[#004AAD] text-white border-[#004AAD]'
                      : 'bg-[#F8F8F8] text-[#004AAD] border-[#E2E8F0] hover:bg-[#F0F7FF]'
                  }`}
                >
                  {l.name}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Filtered Recommendations Output Grid */}
        <div className="space-y-4">
          <div className="flex justify-between items-center text-xs font-mono font-bold text-[#004AAD]">
            <span>RECOMMENDED EQUIPMENT FOR YOUR CONFIGURATION:</span>
            <span className="text-[#0085F4]">✓ OSHA &amp; PE TAB DATA COMPLIANT</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recommendations.map((rec, i) => (
              <div key={i} className="bg-white border-2 border-[#E2E8F0] p-6 hover:border-[#0085F4] transition-all flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold text-[#0085F4] block uppercase">{rec.code}</span>
                  <h3 className="text-card-title text-[#004AAD] uppercase">{rec.title}</h3>
                  <div className="space-y-1 font-mono text-xs text-[#475569] pt-2">
                    <div>DEPTH: <strong className="text-[#004AAD]">{rec.depth}</strong></div>
                    <div>SOIL RATING: <strong className="text-[#004AAD]">{rec.soil}</strong></div>
                    <div>LOAD CLASS: <strong className="text-[#0085F4]">{rec.load}</strong></div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E2E8F0] flex gap-2">
                  <button 
                    onClick={() => onSelectCategory(rec.catId)}
                    className="btn-brand-primary flex-1 py-2.5 text-xs"
                  >
                    <span>VIEW SPEC</span>
                  </button>
                  <button 
                    onClick={onRequestQuote}
                    className="btn-brand-secondary py-2.5 px-4 text-xs"
                  >
                    <span>QUOTE</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
