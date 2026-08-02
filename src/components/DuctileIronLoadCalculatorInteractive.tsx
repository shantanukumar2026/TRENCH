import React, { useState } from 'react';
import { Sliders, Cpu, CheckCircle2, ArrowRight, Gauge } from 'lucide-react';

interface DuctileIronLoadCalculatorInteractiveProps {
  onRequestQuote: () => void;
}

export const DuctileIronLoadCalculatorInteractive: React.FC<DuctileIronLoadCalculatorInteractiveProps> = ({ onRequestQuote }) => {
  const [wheelLoadTons, setWheelLoadTons] = useState<number>(25); // 5 tons to 90 tons
  const [channelWidth, setChannelWidth] = useState<'100mm' | '200mm' | '300mm' | '500mm'>('300mm');
  const [trafficFrequency, setTrafficFrequency] = useState<'pedestrian' | 'commercial' | 'airport'>('commercial');

  // Load calculation simulation
  const multiplier = trafficFrequency === 'pedestrian' ? 1.0 : trafficFrequency === 'commercial' ? 1.4 : 2.1;
  const calculatedLoadKn = Math.round(wheelLoadTons * 10 * multiplier);

  // Recommended Iron Grate Rating
  const recommendedGrate =
    calculatedLoadKn >= 600
      ? 'CLASS F900 (900 kN / 202,300 LBS) AIRPORT & CONTAINER TERMINAL HEAVY DUCTILE IRON'
      : calculatedLoadKn >= 400
      ? 'CLASS E600 (600 kN / 134,800 LBS) INDUSTRIAL FREIGHT & HIGHWAY DUCTILE IRON'
      : calculatedLoadKn >= 250
      ? 'CLASS D400 (400 kN / 89,900 LBS) AASHTO H-20 HIGHWAY VEHICULAR DUCTILE IRON'
      : 'CLASS C250 (250 kN / 56,200 LBS) COMMERCIAL PARKING & CURB DRAINAGE CAST IRON';

  return (
    <section id="iron-load-calculator" className="py-20 bg-[#001D40] text-white relative overflow-hidden border-b border-[#0085F4]">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#003380_1px,transparent_1px),linear-gradient(to_bottom,#003380_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-15 pointer-events-none" />

      <div className="container-industrial relative z-10 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-[#0085F4] pb-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0085F4] text-xs font-mono font-bold text-white uppercase tracking-wider">
              <Gauge className="w-4 h-4 text-[#00BBFF]" />
              <span>INTERACTIVE DUCTILE IRON LOAD &amp; FLOW ENGINE</span>
            </div>
            <h2 className="text-section-title text-white uppercase">
              TRENCH COVER <span className="text-[#00BBFF]">LOAD CLASS ENGINE</span>
            </h2>
            <p className="text-body-large text-blue-100 font-medium">
              Simulate dynamic wheel loads (Tons/kN) and traffic impact frequencies to determine exact EN 1433 &amp; AASHTO H-20/HS-20 ductile iron grate specifications.
            </p>
          </div>

          <button
            onClick={onRequestQuote}
            className="inline-flex items-center justify-center gap-2 bg-[#0085F4] hover:bg-[#00BBFF] text-white font-mono font-bold text-sm px-6 py-3 uppercase transition-all shadow-md hover:scale-[1.02] shrink-0"
          >
            <span>ENGINEERED CASTING SUBMITTAL</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Interactive Simulator Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#002B66]/90 border-2 border-[#0085F4] p-8 shadow-2xl backdrop-blur-sm">
          {/* Controls Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Slider 1: Wheel Load */}
            <div className="space-y-3">
              <div className="flex justify-between items-center font-mono">
                <label className="text-xs font-bold text-blue-200 uppercase flex items-center gap-2">
                  <Gauge className="w-4 h-4 text-[#00BBFF]" />
                  <span>MAXIMUM AXLE WHEEL LOAD:</span>
                </label>
                <span className="text-xl font-extrabold text-[#00BBFF]">{wheelLoadTons} METRIC TONS</span>
              </div>
              <input
                type="range"
                min="5"
                max="90"
                step="5"
                value={wheelLoadTons}
                onChange={(e) => setWheelLoadTons(Number(e.target.value))}
                className="w-full h-2 bg-[#001D40] rounded-lg appearance-none cursor-pointer accent-[#00BBFF]"
              />
              <div className="flex justify-between text-[10px] font-mono text-blue-300">
                <span>5 TONS (Light Vehicle)</span>
                <span>40 TONS (Highway Freight Truck)</span>
                <span>90 TONS (Boeing 777 Aircraft)</span>
              </div>
            </div>

            {/* Selector 2: Traffic Frequency */}
            <div className="space-y-3">
              <label className="text-xs font-mono font-bold text-blue-200 uppercase flex items-center gap-2">
                <Sliders className="w-4 h-4 text-[#00BBFF]" />
                <span>APPLICATION &amp; DYNAMIC IMPACT LEVEL:</span>
              </label>
              <div className="grid grid-cols-3 gap-3 font-mono">
                {[
                  { id: 'pedestrian', name: 'PEDESTRIAN / LIGHT', detail: 'Plazas & Park Walkways' },
                  { id: 'commercial', name: 'HIGHWAY FREIGHT', detail: 'AASHTO H-20 Heavy Traffic' },
                  { id: 'airport', name: 'AIRPORT / DOCK', detail: 'EN 1433 Class F900 Heavy' }
                ].map((tf) => (
                  <button
                    key={tf.id}
                    onClick={() => setTrafficFrequency(tf.id as any)}
                    className={`p-3 text-left border-2 transition-all ${
                      trafficFrequency === tf.id
                        ? 'border-[#00BBFF] bg-[#004AAD] text-white'
                        : 'border-[#004AAD] bg-[#001F4D] text-blue-200 hover:border-[#0085F4]'
                    }`}
                  >
                    <div className="text-xs font-extrabold">{tf.name}</div>
                    <div className="text-[9px] text-blue-300 mt-1">{tf.detail}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Selector 3: Channel Clear Width */}
            <div className="space-y-3">
              <label className="text-xs font-mono font-bold text-blue-200 uppercase flex items-center gap-2">
                <Sliders className="w-4 h-4 text-[#00BBFF]" />
                <span>CHANNEL CLEAR INTERNAL WIDTH:</span>
              </label>
              <div className="grid grid-cols-4 gap-3 font-mono">
                {[
                  { id: '100mm', label: '100 MM (4 IN)' },
                  { id: '200mm', label: '200 MM (8 IN)' },
                  { id: '300mm', label: '300 MM (12 IN)' },
                  { id: '500mm', label: '500 MM (20 IN)' }
                ].map((cw) => (
                  <button
                    key={cw.id}
                    onClick={() => setChannelWidth(cw.id as any)}
                    className={`p-3 text-left border-2 transition-all ${
                      channelWidth === cw.id
                        ? 'border-[#00BBFF] bg-[#004AAD] text-white'
                        : 'border-[#004AAD] bg-[#001F4D] text-blue-200 hover:border-[#0085F4]'
                    }`}
                  >
                    <div className="text-xs font-bold">{cw.label}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Dynamic Live Output Display (5 Cols) */}
          <div className="lg:col-span-5 bg-[#001733] border-2 border-[#00BBFF] p-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center text-xs font-mono font-bold text-[#00BBFF] uppercase">
                <span>PROOF LOAD TEST SIMULATION</span>
                <span className="bg-[#0085F4] text-white px-2 py-0.5 text-[10px]">LIVE OUTPUT</span>
              </div>

              {/* Stat Box */}
              <div className="grid grid-cols-2 gap-3 text-center font-mono">
                <div className="bg-[#002652] border border-[#0085F4] p-4">
                  <div className="text-xs text-blue-200">REQUIRED PROOF LOAD</div>
                  <div className="text-2xl font-extrabold text-[#00BBFF] mt-1">{calculatedLoadKn} kN</div>
                </div>
                <div className="bg-[#002652] border border-[#0085F4] p-4">
                  <div className="text-xs text-blue-200">LBS EQUIVALENT</div>
                  <div className="text-2xl font-extrabold text-[#00BBFF] mt-1">{Math.round(calculatedLoadKn * 224.8).toLocaleString()} LBS</div>
                </div>
              </div>

              {/* Recommended System Card */}
              <div className="bg-[#003380] border border-[#00BBFF] p-4 space-y-2">
                <div className="text-[10px] font-mono font-bold text-[#00BBFF] uppercase flex items-center gap-1">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>RECOMMENDED DUCTILE IRON SPECIFICATION:</span>
                </div>
                <div className="text-xs font-extrabold text-white font-mono uppercase leading-snug">
                  {recommendedGrate}
                </div>
              </div>

              <ul className="space-y-2 text-xs font-mono text-blue-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00BBFF] shrink-0" />
                  <span>ASTM A536 Grade 80-55-06 Certified</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00BBFF] shrink-0" />
                  <span>KTL Cathodic Anti-Corrosion Finish</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onRequestQuote}
              className="w-full bg-[#0085F4] hover:bg-[#00BBFF] text-white font-mono font-bold text-xs py-3 uppercase transition-colors text-center"
            >
              REQUEST DUCTILE IRON CAD SUBMITTAL
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
