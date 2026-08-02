import React, { useState } from 'react';
import { Calculator, FileText, CheckCircle2, ShieldAlert, ArrowRight } from 'lucide-react';

interface PECalculatorSectionProps {
  onOpenSubmittals: () => void;
}

export const PECalculatorSection: React.FC<PECalculatorSectionProps> = ({ onOpenSubmittals }) => {
  const [loadClass, setLoadClass] = useState<'A15' | 'C250' | 'D400' | 'F900'>('D400');
  const [ironType, setIronType] = useState<'ductile' | 'grey'>('ductile');

  const proofLoadMatrix = {
    ductile: { A15: '15 kN (3,370 LBS)', C250: '250 kN (56,200 LBS)', D400: '400 kN (89,900 LBS)', F900: '900 kN (202,300 LBS)' },
    grey: { A15: '15 kN (3,370 LBS)', C250: '250 kN (56,200 LBS)', D400: '350 kN (78,600 LBS)', F900: 'Not Applicable' }
  };

  const calculatedLoad = proofLoadMatrix[ironType][loadClass];

  return (
    <section id="pe-calculator" className="py-20 bg-white border-b border-[#E2E8F0] relative">
      <div className="container-industrial space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-[#004AAD] pb-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F1F5F9] border border-[#004AAD] text-xs font-mono font-bold text-[#004AAD] uppercase">
              <Calculator className="w-4 h-4 text-[#0085F4]" />
              <span>ASTM &amp; EN 1433 METALLURGICAL CALCULATION</span>
            </div>
            <h2 className="text-section-title text-[#004AAD] uppercase">
              CAST IRON PROOF LOAD <span className="text-[#0085F4]">PROOF PRESS CALCULATOR</span>
            </h2>
            <p className="text-body-large text-[#475569] font-medium">
              Calculate certified EN 1433 / AASHTO M306 hydraulic press proof load capacities for Ductile Iron and Grey Cast Iron tree grates and trench covers.
            </p>
          </div>

          <button
            onClick={onOpenSubmittals}
            className="inline-flex items-center justify-center gap-2 bg-[#004AAD] hover:bg-[#0085F4] text-white font-mono font-bold text-sm px-6 py-3 uppercase transition-all shadow-md shrink-0"
          >
            <FileText className="w-4 h-4 text-[#00BBFF]" />
            <span>DOWNLOAD PE CASTING SUBMITTALS</span>
          </button>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#F8FAFC] border-2 border-[#E2E8F0] p-8 shadow-sm">
          {/* Controls (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step 1: Iron Metallurgy */}
            <div className="space-y-3">
              <label className="text-xs font-mono font-bold text-[#004AAD] uppercase flex items-center gap-2">
                <span>1. SELECT FOUNDRY METALLURGY GRADE</span>
              </label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { id: 'ductile', label: 'ASTM A536 DUCTILE IRON', desc: '80-55-06 Nodular Matrix (High Impact)' },
                  { id: 'grey', label: 'ASTM A48 GREY CAST IRON', desc: 'Class 35B Heavy Flake (High Vibration Damping)' }
                ].map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setIronType(s.id as any)}
                    className={`p-4 text-left border-2 transition-all font-mono ${
                      ironType === s.id
                        ? 'border-[#0085F4] bg-[#004AAD] text-white'
                        : 'border-[#CBD5E1] bg-white text-[#334155] hover:border-[#0085F4]'
                    }`}
                  >
                    <div className="font-extrabold text-xs uppercase">{s.label}</div>
                    <div className="text-[10px] opacity-80 mt-1">{s.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Load Class Rating */}
            <div className="space-y-3 pt-4 border-t border-[#E2E8F0]">
              <label className="text-xs font-mono font-bold text-[#004AAD] uppercase flex items-center gap-2">
                <span>2. SELECT TARGET EN 1433 / AASHTO LOAD CLASS</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { id: 'A15', label: 'CLASS A15', rating: 'Pedestrian Park' },
                  { id: 'C250', label: 'CLASS C250', rating: 'Curb Drainage' },
                  { id: 'D400', label: 'CLASS D400', rating: 'AASHTO H-20' },
                  { id: 'F900', label: 'CLASS F900', rating: '900kN Airport' }
                ].map((w) => (
                  <button
                    key={w.id}
                    onClick={() => setLoadClass(w.id as any)}
                    className={`p-4 text-left border-2 transition-all font-mono ${
                      loadClass === w.id
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
                <span>CERTIFIED PROOF TEST PRESS CAPACITY</span>
                <span className="bg-[#0085F4] text-white px-2 py-0.5 text-[10px]">FOUNDRY STAMPED</span>
              </div>
              
              <div className="py-4 text-center bg-[#003380] border border-[#0085F4] space-y-1">
                <div className="text-3xl md:text-4xl font-extrabold text-[#00BBFF] font-mono">{calculatedLoad}</div>
                <div className="text-xs text-blue-100 font-mono font-bold uppercase">PROVED LOAD PRESS RATING</div>
              </div>

              <ul className="space-y-2 text-xs font-mono text-blue-100">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00BBFF] shrink-0" />
                  <span>AASHTO M306 Proof Load Tested</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00BBFF] shrink-0" />
                  <span>ADA 1/4" Heel-Proof Slot Geometry</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00BBFF] shrink-0" />
                  <span>KTL Cathodic Anti-Rust E-Coated</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenSubmittals}
              className="w-full bg-[#0085F4] hover:bg-[#00BBFF] text-white font-mono font-bold text-xs py-3 uppercase transition-colors text-center"
            >
              DOWNLOAD CASTING CAD SPEC SHEET (.PDF)
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
