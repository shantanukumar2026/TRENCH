import React, { useState } from 'react';
import { Search, Filter, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ProductFinderSectionProps {
  onSelectCategory: (catId: string) => void;
  onRequestQuote: () => void;
}

export const ProductFinderSection: React.FC<ProductFinderSectionProps> = ({ onSelectCategory, onRequestQuote }) => {
  const [appType, setAppType] = useState<string>('landscape');
  const [ironMaterial, setIronMaterial] = useState<string>('ductile');
  const [loadRating, setLoadRating] = useState<string>('h20');

  const recommendations = [
    {
      title: 'Metropolitan Square Cast Iron Tree Grate (4x4 Ft)',
      code: 'TU-TG-SQ44-ADA',
      app: 'Urban Tree Zone',
      material: 'ASTM A48 / Ductile Iron',
      load: 'ADA Heel-Proof / H-20 Rated',
      catId: 'tree-grates-guards'
    },
    {
      title: 'Architectural Wave Pattern ADA Ductile Iron Grate',
      code: 'TU-TG-WAVE-12',
      app: 'Pedestrian Promenade',
      material: 'ASTM A536 65-45-12 Ductile',
      load: 'EN 1433 Class D400 (400 kN)',
      catId: 'designer-trench-gratings'
    },
    {
      title: 'Class F900 Airport Runway Heavy Iron Channel',
      code: 'TU-AIRPORT-F900',
      app: 'Airport & Port Terminal',
      material: 'Nodular Ductile Iron 80-55-06',
      load: 'Class F900 (900 kN / 202,300 LBS)',
      catId: 'heavy-civil-drainage'
    }
  ];

  return (
    <section className="py-20 bg-[#F0F7FF] border-b border-[#E2E8F0] relative">
      <div className="container-industrial space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#0085F4] text-xs font-mono font-bold text-[#004AAD]">
            <Filter className="w-4 h-4 text-[#0085F4]" />
            <span>INTERACTIVE CAST IRON &amp; TREE GRATE CONFIGURATOR</span>
          </div>
          <h2 className="text-section-title text-[#004AAD] uppercase">
            FIND THE RIGHT <span className="text-[#0085F4]">CAST IRON &amp; TREE GRATE SYSTEM</span>
          </h2>
          <p className="text-body-large text-[#475569] font-medium">
            Select your architectural application, metallurgical iron grade, and load class requirement to filter CAD submittals.
          </p>
        </div>

        {/* 3-Step Selection Controls */}
        <div className="bg-white border-2 border-[#004AAD] p-8 shadow-xl grid grid-cols-1 md:grid-cols-3 gap-8 font-mono text-xs">
          
          {/* Step 1 */}
          <div className="space-y-3">
            <label className="text-[#004AAD] font-extrabold uppercase flex items-center gap-2">
              <span className="w-5 h-5 bg-[#004AAD] text-white flex items-center justify-center text-[10px]">1</span>
              <span>APPLICATION TYPE</span>
            </label>
            <select
              value={appType}
              onChange={(e) => setAppType(e.target.value)}
              className="w-full p-3 border-2 border-[#CBD5E1] bg-[#F8FAFC] text-[#004AAD] font-bold focus:border-[#0085F4] outline-none"
            >
              <option value="landscape">Landscape Architecture &amp; Tree Zone</option>
              <option value="promenade">Pedestrian Promenade &amp; Plaza (ADA)</option>
              <option value="highway">Heavy Highway &amp; Arterial Intersection</option>
              <option value="airport">Airport Runway &amp; Container Terminal</option>
            </select>
          </div>

          {/* Step 2 */}
          <div className="space-y-3">
            <label className="text-[#004AAD] font-extrabold uppercase flex items-center gap-2">
              <span className="w-5 h-5 bg-[#004AAD] text-white flex items-center justify-center text-[10px]">2</span>
              <span>IRON METALLURGY GRADE</span>
            </label>
            <select
              value={ironMaterial}
              onChange={(e) => setIronMaterial(e.target.value)}
              className="w-full p-3 border-2 border-[#CBD5E1] bg-[#F8FAFC] text-[#004AAD] font-bold focus:border-[#0085F4] outline-none"
            >
              <option value="ductile">ASTM A536 Ductile Iron (High Impact)</option>
              <option value="grey">ASTM A48 Class 35 Grey Cast Iron</option>
              <option value="galvanized">Hot-Dip Galvanized Structural Steel</option>
            </select>
          </div>

          {/* Step 3 */}
          <div className="space-y-3">
            <label className="text-[#004AAD] font-extrabold uppercase flex items-center gap-2">
              <span className="w-5 h-5 bg-[#004AAD] text-white flex items-center justify-center text-[10px]">3</span>
              <span>LOAD CLASS RATING</span>
            </label>
            <select
              value={loadRating}
              onChange={(e) => setLoadRating(e.target.value)}
              className="w-full p-3 border-2 border-[#CBD5E1] bg-[#F8FAFC] text-[#004AAD] font-bold focus:border-[#0085F4] outline-none"
            >
              <option value="ada">Class A15-B125 (ADA Pedestrian &amp; Park)</option>
              <option value="h20">Class D400 (AASHTO H-20 Highway Rated)</option>
              <option value="f900">Class F900 (900 kN Airport &amp; Port Freight)</option>
            </select>
          </div>

        </div>

        {/* Results Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recommendations.map((rec, idx) => (
            <div key={idx} className="bg-white border-2 border-[#E2E8F0] hover:border-[#0085F4] p-6 shadow-md transition-all flex flex-col justify-between space-y-4 font-mono">
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs text-[#0085F4] font-bold">
                  <span>{rec.code}</span>
                  <span className="bg-[#004AAD] text-white text-[10px] px-2 py-0.5 uppercase">CONFIGURED MATCH</span>
                </div>
                <h3 className="text-sm font-extrabold text-[#004AAD] uppercase leading-snug">{rec.title}</h3>
                
                <div className="space-y-1 text-[11px] text-[#475569] pt-2 border-t border-[#E2E8F0]">
                  <div><strong className="text-[#004AAD]">APP:</strong> {rec.app}</div>
                  <div><strong className="text-[#004AAD]">MATERIAL:</strong> {rec.material}</div>
                  <div><strong className="text-[#0085F4]">RATING:</strong> {rec.load}</div>
                </div>
              </div>

              <button
                onClick={() => onSelectCategory(rec.catId)}
                className="w-full bg-[#004AAD] hover:bg-[#0085F4] text-white font-bold text-xs py-2.5 uppercase transition-colors text-center flex items-center justify-center gap-1"
              >
                <span>VIEW FOUNDRY SPECS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
