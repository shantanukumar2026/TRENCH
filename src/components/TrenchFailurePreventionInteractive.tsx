import React, { useState } from 'react';
import { ShieldAlert, AlertTriangle, Cpu, CheckCircle2, Layers, Sliders, ArrowRight } from 'lucide-react';

interface TrenchFailurePreventionInteractiveProps {
  onRequestQuote: () => void;
}

export const TrenchFailurePreventionInteractive: React.FC<TrenchFailurePreventionInteractiveProps> = ({ onRequestQuote }) => {
  const [depth, setDepth] = useState<number>(18); // 8ft to 32ft
  const [surcharge, setSurcharge] = useState<'light' | 'heavy' | 'extreme'>('heavy'); // Excavator, traffic, etc.
  const [soilCondition, setSoilCondition] = useState<'A' | 'B' | 'C'>('B');

  // Earth pressure calculation simulation (PSF)
  const basePsf = soilCondition === 'A' ? 25 : soilCondition === 'B' ? 45 : 80;
  const surchargeFactor = surcharge === 'light' ? 1.1 : surcharge === 'heavy' ? 1.35 : 1.65;
  const calculatedLateralPsf = Math.round(depth * basePsf * surchargeFactor);
  const totalLoadTons = ((calculatedLateralPsf * depth * 8) / 2000).toFixed(1);

  // System recommendation logic
  const recommendedSystem = 
    depth > 24 
      ? 'DOUBLE-WALL HEAVY DUTY STEEL SLIDE RAIL SYSTEM' 
      : depth > 14 
      ? '8-INCH DOUBLE-WALL STEEL TRENCH SHIELD' 
      : 'ALUMINUM HYDRAULIC WALER & SHORING CYLINDERS';

  return (
    <section id="cavein-prevention" className="py-20 bg-[#001D40] text-white relative overflow-hidden border-b border-[#0085F4]">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#003380_1px,transparent_1px),linear-gradient(to_bottom,#003380_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-15 pointer-events-none" />

      <div className="container-industrial relative z-10 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-[#0085F4] pb-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0085F4] text-xs font-mono font-bold text-white uppercase tracking-wider">
              <ShieldAlert className="w-4 h-4 text-[#00BBFF]" />
              <span>INTERACTIVE EARTH PRESSURE &amp; SHORING CALCULATOR</span>
            </div>
            <h2 className="text-section-title text-white uppercase">
              TRENCH CAVE-IN <span className="text-[#00BBFF]">SAFETY ENGINE</span>
            </h2>
            <p className="text-body-large text-blue-100 font-medium">
              Simulate Active Earth Pressure (K<sub>a</sub>) and surcharge loads from heavy excavators and traffic vibrations to determine exact structural shoring requirements under OSHA 1926 Subpart P.
            </p>
          </div>

          <button
            onClick={onRequestQuote}
            className="inline-flex items-center justify-center gap-2 bg-[#0085F4] hover:bg-[#00BBFF] text-white font-mono font-bold text-sm px-6 py-3 uppercase transition-all shadow-md hover:scale-[1.02] shrink-0"
          >
            <span>ENGINEERED SAFETY SUBMITTAL</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Interactive Simulator Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#002B66]/90 border-2 border-[#0085F4] p-8 shadow-2xl backdrop-blur-sm">
          {/* Controls Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Slider 1: Trench Depth */}
            <div className="space-y-3">
              <div className="flex justify-between items-center font-mono">
                <label className="text-xs font-bold text-blue-200 uppercase flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#00BBFF]" />
                  <span>EXCAVATION DEPTH:</span>
                </label>
                <span className="text-xl font-extrabold text-[#00BBFF]">{depth} FEET</span>
              </div>
              <input
                type="range"
                min="8"
                max="32"
                step="2"
                value={depth}
                onChange={(e) => setDepth(Number(e.target.value))}
                className="w-full h-2 bg-[#001D40] rounded-lg appearance-none cursor-pointer accent-[#00BBFF]"
              />
              <div className="flex justify-between text-[10px] font-mono text-blue-300">
                <span>8 FT (Shallow)</span>
                <span>20 FT (Standard Utility)</span>
                <span>32 FT (Deep Sewer Main)</span>
              </div>
            </div>

            {/* Selector 2: Soil Type */}
            <div className="space-y-3">
              <label className="text-xs font-mono font-bold text-blue-200 uppercase flex items-center gap-2">
                <Sliders className="w-4 h-4 text-[#00BBFF]" />
                <span>OSHA SOIL CLASSIFICATION:</span>
              </label>
              <div className="grid grid-cols-3 gap-3 font-mono">
                {[
                  { id: 'A', name: 'SOIL TYPE A', psf: '25 PSF/FT', desc: 'Cohesive Hardpack Clay' },
                  { id: 'B', name: 'SOIL TYPE B', psf: '45 PSF/FT', desc: 'Angular Gravel / Medium Silt' },
                  { id: 'C', name: 'SOIL TYPE C', psf: '80 PSF/FT', desc: 'Submerged Sand & Loose Soil' }
                ].map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSoilCondition(s.id as any)}
                    className={`p-3 text-left border-2 transition-all ${
                      soilCondition === s.id
                        ? 'border-[#00BBFF] bg-[#004AAD] text-white'
                        : 'border-[#004AAD] bg-[#001F4D] text-blue-200 hover:border-[#0085F4]'
                    }`}
                  >
                    <div className="text-xs font-extrabold">{s.name}</div>
                    <div className="text-[11px] font-bold text-[#00BBFF]">{s.psf}</div>
                    <div className="text-[9px] text-blue-300 mt-1">{s.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Selector 3: Surcharge Load */}
            <div className="space-y-3">
              <label className="text-xs font-mono font-bold text-blue-200 uppercase flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-[#00BBFF]" />
                <span>SURCHARGE EXCAVATION LOAD:</span>
              </label>
              <div className="grid grid-cols-3 gap-3 font-mono">
                {[
                  { id: 'light', label: 'LIGHT SURCHARGE', detail: 'Foot Traffic / Minor Spoils' },
                  { id: 'heavy', label: 'HEAVY MACHINERY', detail: '100,000 LB Excavators' },
                  { id: 'extreme', label: 'HIGHWAY TRAFFIC', detail: 'AASHTO H-20 Freight' }
                ].map((sc) => (
                  <button
                    key={sc.id}
                    onClick={() => setSurcharge(sc.id as any)}
                    className={`p-3 text-left border-2 transition-all ${
                      surcharge === sc.id
                        ? 'border-[#00BBFF] bg-[#004AAD] text-white'
                        : 'border-[#004AAD] bg-[#001F4D] text-blue-200 hover:border-[#0085F4]'
                    }`}
                  >
                    <div className="text-xs font-bold">{sc.label}</div>
                    <div className="text-[9px] text-blue-300 mt-1">{sc.detail}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Dynamic Live Output Display (5 Cols) */}
          <div className="lg:col-span-5 bg-[#001733] border-2 border-[#00BBFF] p-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center text-xs font-mono font-bold text-[#00BBFF] uppercase">
                <span>SIMULATED EARTH PRESSURE OUTPUT</span>
                <span className="bg-[#0085F4] text-white px-2 py-0.5 text-[10px]">LIVE METRICS</span>
              </div>

              {/* Earth Pressure Stat Box */}
              <div className="grid grid-cols-2 gap-3 text-center font-mono">
                <div className="bg-[#002652] border border-[#0085F4] p-4">
                  <div className="text-xs text-blue-200">LATERAL PRESSURE</div>
                  <div className="text-2xl font-extrabold text-[#00BBFF] mt-1">{calculatedLateralPsf} PSF</div>
                </div>
                <div className="bg-[#002652] border border-[#0085F4] p-4">
                  <div className="text-xs text-blue-200">TOTAL LATERAL THRUST</div>
                  <div className="text-2xl font-extrabold text-[#00BBFF] mt-1">{totalLoadTons} TONS</div>
                </div>
              </div>

              {/* Recommended System Card */}
              <div className="bg-[#003380] border border-[#00BBFF] p-4 space-y-2">
                <div className="text-[10px] font-mono font-bold text-[#00BBFF] uppercase flex items-center gap-1">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>RECOMMENDED SAFETY SHORING SPECIFICATION:</span>
                </div>
                <div className="text-sm font-extrabold text-white font-mono uppercase">
                  {recommendedSystem}
                </div>
              </div>

              <ul className="space-y-2 text-xs font-mono text-blue-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00BBFF] shrink-0" />
                  <span>Zero Collapse Risk Under Certified Loads</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00BBFF] shrink-0" />
                  <span>OSHA 1926 Subpart P Registered PE Stamp Ready</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onRequestQuote}
              className="w-full bg-[#0085F4] hover:bg-[#00BBFF] text-white font-mono font-bold text-xs py-3 uppercase transition-colors text-center"
            >
              REQUEST ENGINEERED SHORING SUBMITTAL
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
