import React, { useState } from 'react';
import { Calculator, FileText, CheckCircle2, ShieldAlert, ArrowRight } from 'lucide-react';

interface PECalculatorSectionProps {
  onOpenSubmittals: () => void;
}

export const PECalculatorSection: React.FC<PECalculatorSectionProps> = ({ onOpenSubmittals }) => {
  const [soilType, setSoilType] = useState<'A' | 'B' | 'C60' | 'C80'>('B');
  const [boxWallType, setBoxWallType] = useState<'4inch' | '6inch' | '8inch'>('6inch');

  const depthMatrix = {
    '4inch': { A: '28 FT', B: '22 FT', C60: '16 FT', C80: '12 FT' },
    '6inch': { A: '36 FT', B: '30 FT', C60: '24 FT', C80: '18 FT' },
    '8inch': { A: '48 FT', B: '40 FT', C60: '32 FT', C80: '26 FT' }
  };

  const calculatedDepth = depthMatrix[boxWallType][soilType];

  return (
    <section id="pe-calculator" className="py-20 bg-white border-b border-[#E2E8F0] relative">
      <div className="container-industrial space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-[#004AAD] pb-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F1F5F9] border border-[#004AAD] text-xs font-mono font-bold text-[#004AAD] uppercase">
              <Calculator className="w-4 h-4 text-[#0085F4]" />
              <span>OSHA SUBPART P ENGINEERING COMPLIANCE</span>
            </div>
            <h2 className="text-section-title text-[#004AAD] uppercase">
              PE-STAMPED <span className="text-[#0085F4]">TABULATED DATA CALCULATOR</span>
            </h2>
            <p className="text-body-large text-[#475569] font-medium">
              Registered Professional Engineer (PE) stamped depth rating calculator for Steel Trench Shields &amp; Aluminum Hydraulic Shores under OSHA 1926 Subpart P standard.
            </p>
          </div>

          <button
            onClick={onOpenSubmittals}
            className="inline-flex items-center justify-center gap-2 bg-[#004AAD] hover:bg-[#0085F4] text-white font-mono font-bold text-sm px-6 py-3 uppercase transition-all shadow-md shrink-0"
          >
            <FileText className="w-4 h-4 text-[#00BBFF]" />
            <span>DOWNLOAD TABULATED DATA</span>
          </button>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#F8FAFC] border-2 border-[#E2E8F0] p-8 shadow-sm">
          {/* Controls (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step 1: Soil Classification */}
            <div className="space-y-3">
              <label className="text-xs font-mono font-bold text-[#004AAD] uppercase flex items-center gap-2">
                <span>1. SELECT OSHA SOIL TYPE</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { id: 'A', label: 'TYPE A', psf: '25 PSF', desc: 'Clay / Hardpack' },
                  { id: 'B', label: 'TYPE B', psf: '45 PSF', desc: 'Medium Clay/Silt' },
                  { id: 'C60', label: 'TYPE C-60', psf: '60 PSF', desc: 'Soft Clay/Sand' },
                  { id: 'C80', label: 'TYPE C-80', psf: '80 PSF', desc: 'Submerged Soil' }
                ].map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSoilType(s.id as any)}
                    className={`p-4 text-left border-2 transition-all font-mono ${
                      soilType === s.id
                        ? 'border-[#0085F4] bg-[#004AAD] text-white'
                        : 'border-[#CBD5E1] bg-white text-[#334155] hover:border-[#0085F4]'
                    }`}
                  >
                    <div className="font-extrabold text-sm uppercase">{s.label}</div>
                    <div className="text-[11px] font-bold text-[#00BBFF]">{s.psf}</div>
                    <div className="text-[10px] opacity-80 mt-1">{s.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Trench Box Wall Thickness */}
            <div className="space-y-3 pt-4 border-t border-[#E2E8F0]">
              <label className="text-xs font-mono font-bold text-[#004AAD] uppercase flex items-center gap-2">
                <span>2. SELECT STEEL BOX WALL THICKNESS</span>
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: '4inch', label: '4-INCH DOUBLE WALL', rating: 'Standard Duty' },
                  { id: '6inch', label: '6-INCH HEAVY DUTY', rating: 'Contractor Grade' },
                  { id: '8inch', label: '8-INCH EXTRA HEAVY', rating: 'Deep Utility Grade' }
                ].map((w) => (
                  <button
                    key={w.id}
                    onClick={() => setBoxWallType(w.id as any)}
                    className={`p-4 text-left border-2 transition-all font-mono ${
                      boxWallType === w.id
                        ? 'border-[#0085F4] bg-[#004AAD] text-white'
                        : 'border-[#CBD5E1] bg-white text-[#334155] hover:border-[#0085F4]'
                    }`}
                  >
                    <div className="font-bold text-xs uppercase">{w.label}</div>
                    <div className="text-[10px] opacity-80 mt-1">{w.rating}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Box (5 Cols) */}
          <div className="lg:col-span-5 bg-[#004AAD] text-white p-8 border-2 border-[#0085F4] flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center text-xs font-mono text-[#00BBFF] font-bold uppercase">
                <span>MAXIMUM PE DEPTH RATING</span>
                <span className="bg-[#0085F4] text-white px-2 py-0.5 text-[10px]">PE STAMPED</span>
              </div>
              
              <div className="py-4 text-center bg-[#003380] border border-[#0085F4] space-y-1">
                <div className="text-4xl md:text-5xl font-extrabold text-[#00BBFF] font-mono">{calculatedDepth}</div>
                <div className="text-xs text-blue-100 font-mono font-bold uppercase">MAX ALLOWABLE DEPTH</div>
              </div>

              <ul className="space-y-2 text-xs font-mono text-blue-100">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00BBFF] shrink-0" />
                  <span>OSHA 1926 Subpart P Certified Data</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00BBFF] shrink-0" />
                  <span>50 KSI Structural Steel Yield Rating</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00BBFF] shrink-0" />
                  <span>City &amp; DOT Municipal Submittal Ready</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenSubmittals}
              className="w-full bg-[#0085F4] hover:bg-[#00BBFF] text-white font-mono font-bold text-xs py-3 uppercase transition-colors text-center"
            >
              DOWNLOAD STAMPED SPEC SHEET (.PDF)
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
