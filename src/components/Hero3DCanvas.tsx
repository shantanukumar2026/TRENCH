import React, { useState, useEffect } from 'react';
import { Layers, RotateCcw, Play, CheckCircle2, ChevronRight } from 'lucide-react';

interface Hero3DCanvasProps {
  onHoverHotspot?: (id: number | null) => void;
}

export const Hero3DCanvas: React.FC<Hero3DCanvasProps> = () => {
  const [viewMode, setViewMode] = useState<'system' | 'exploded' | 'installation'>('system');
  const [hoveredHotspot, setHoveredHotspot] = useState<number | null>(null);
  const [installStep, setInstallStep] = useState<number>(1);
  const [isPlayingInstall, setIsPlayingInstall] = useState<boolean>(false);

  // Auto-play construction sequence in INSTALLATION mode
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (viewMode === 'installation' && isPlayingInstall) {
      timer = setInterval(() => {
        setInstallStep((prev) => (prev >= 7 ? 1 : prev + 1));
      }, 1600);
    }
    return () => clearInterval(timer);
  }, [viewMode, isPlayingInstall]);

  const hotspots = [
    {
      id: 1,
      number: '01',
      title: 'TRENCH SHIELD',
      subtitle: 'Worker protection system',
      x: 34,
      y: 46,
      modeY: viewMode === 'exploded' ? 38 : 46
    },
    {
      id: 2,
      number: '02',
      title: 'PIPE SYSTEM',
      subtitle: 'Underground water / sewer infrastructure',
      x: 52,
      y: 68,
      modeY: viewMode === 'exploded' ? 76 : 68
    },
    {
      id: 3,
      number: '03',
      title: 'UTILITY BEDDING',
      subtitle: 'Engineered pipe support',
      x: 52,
      y: 84,
      modeY: viewMode === 'exploded' ? 90 : 84
    },
    {
      id: 4,
      number: '04',
      title: 'EXCAVATION ZONE',
      subtitle: 'Controlled underground workspace',
      x: 20,
      y: 62,
      modeY: 62
    },
    {
      id: 5,
      number: '05',
      title: 'ROAD SURFACE',
      subtitle: 'Surface infrastructure',
      x: 75,
      y: 16,
      modeY: viewMode === 'exploded' ? 10 : 16
    }
  ];

  const installSteps = [
    { step: 1, title: 'EXCAVATION', desc: 'Controlled earth trench digging to invert grade.' },
    { step: 2, title: 'TRENCH PROTECTION', desc: 'Lowering steel trench shield box for crew protection.' },
    { step: 3, title: 'PIPE BEDDING', desc: 'Placing engineered washed gravel bedding envelope.' },
    { step: 4, title: 'PIPE INSTALLATION', desc: 'Positioning AWWA water/sewer main at invert depth.' },
    { step: 5, title: 'UTILITY CONNECTIONS', desc: 'Routing conduit lines and installing access ladder.' },
    { step: 6, title: 'BACKFILL', desc: 'Compacting granular backfill material in controlled lifts.' },
    { step: 7, title: 'ROAD RESTORATION', desc: 'Paving finished AASHTO H-20 asphalt roadway deck.' }
  ];

  return (
    <div className="relative bg-[#F7FAFE] border-2 border-[#0085F4]/20 shadow-2xl overflow-hidden font-mono text-xs select-none">
      
      {/* Background Soft Blue Radial Glow & Subtle 5-8% Blueprint Grid */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-8 pointer-events-none"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#0085F4]/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#00BBFF]/15 rounded-full blur-3xl pointer-events-none"></div>

      {/* Top Header Control Strip */}
      <div className="relative z-20 bg-white/90 backdrop-blur-md px-4 py-3 border-b-2 border-[#0085F4]/20 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#0085F4] animate-pulse"></span>
          <span className="font-bold text-[#004AAD] text-xs uppercase tracking-wider">
            3D UNDERGROUND CUTAWAY VISUALIZATION
          </span>
        </div>

        {/* Mode Selector Buttons */}
        <div className="flex items-center gap-1 bg-[#F7FAFE] p-1 border border-[#0085F4]/30">
          <button
            onClick={() => { setViewMode('system'); setIsPlayingInstall(false); }}
            className={`px-3 py-1.5 font-bold transition-all text-[11px] ${
              viewMode === 'system'
                ? 'bg-[#004AAD] text-white shadow-sm'
                : 'text-[#004AAD] hover:bg-[#0085F4]/10'
            }`}
          >
            SYSTEM VIEW
          </button>

          <button
            onClick={() => { setViewMode('exploded'); setIsPlayingInstall(false); }}
            className={`px-3 py-1.5 font-bold transition-all text-[11px] ${
              viewMode === 'exploded'
                ? 'bg-[#004AAD] text-white shadow-sm'
                : 'text-[#004AAD] hover:bg-[#0085F4]/10'
            }`}
          >
            EXPLODED
          </button>

          <button
            onClick={() => { setViewMode('installation'); setIsPlayingInstall(true); }}
            className={`px-3 py-1.5 font-bold transition-all text-[11px] ${
              viewMode === 'installation'
                ? 'bg-[#004AAD] text-white shadow-sm'
                : 'text-[#004AAD] hover:bg-[#0085F4]/10'
            }`}
          >
            INSTALLATION
          </button>
        </div>
      </div>

      {/* Main 3D Cutaway Interactive Graphic Container */}
      <div className="relative h-[440px] sm:h-[480px] w-full flex items-center justify-center p-4">
        
        {/* Vector SVG Cutaway Graphics */}
        <svg className="w-full h-full overflow-visible" viewBox="0 0 800 480" preserveAspectRatio="xMidYMid meet">
          <defs>
            {/* Soft Radial Gradient behind 3D Cutaway */}
            <radialGradient id="cutawayGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00BBFF" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#004AAD" stopOpacity="0" />
            </radialGradient>

            {/* Road Surface Asphalt Texture */}
            <linearGradient id="roadGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>

            {/* Earth Soil Layer Strata */}
            <linearGradient id="soilLeft" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E2E8F0" />
              <stop offset="100%" stopColor="#CBD5E1" />
            </linearGradient>

            {/* Steel Shield Metallic Blue Coating */}
            <linearGradient id="shieldSteel" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0066FF" />
              <stop offset="50%" stopColor="#004AAD" />
              <stop offset="100%" stopColor="#003380" />
            </linearGradient>

            {/* Water Main Pipe Blue PVC */}
            <linearGradient id="pvcPipe" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#00BBFF" />
              <stop offset="50%" stopColor="#0085F4" />
              <stop offset="100%" stopColor="#004AAD" />
            </linearGradient>

            {/* Pipe Bedding Gravel Pattern */}
            <pattern id="gravelBedding" width="12" height="12" patternUnits="userSpaceOnUse">
              <rect width="12" height="12" fill="#E2E8F0" />
              <circle cx="3" cy="3" r="1.5" fill="#94A3B8" />
              <circle cx="9" cy="7" r="2" fill="#64748B" />
              <circle cx="4" cy="10" r="1.2" fill="#5B7FA5" />
            </pattern>
          </defs>

          {/* Background Soft Glow */}
          <circle cx="400" cy="240" r="280" fill="url(#cutawayGlow)" />

          {/* ────── 1. EXCAVATED SOIL WALLS & BASE ────── */}
          {/* Left Soil Mass */}
          <path
            d="M 0,80 L 260,80 L 260,420 L 0,420 Z"
            fill="url(#soilLeft)"
            stroke="#94A3B8"
            strokeWidth="1.5"
            className="transition-transform duration-500"
            style={{ transform: viewMode === 'exploded' ? 'translateX(-30px)' : 'none' }}
          />

          {/* Right Soil Mass */}
          <path
            d="M 540,80 L 800,80 L 800,420 L 540,420 Z"
            fill="url(#soilLeft)"
            stroke="#94A3B8"
            strokeWidth="1.5"
            className="transition-transform duration-500"
            style={{ transform: viewMode === 'exploded' ? 'translateX(30px)' : 'none' }}
          />

          {/* ────── 5. ROAD / PAVEMENT SURFACE DECK ────── */}
          <g
            className="transition-transform duration-500"
            style={{ transform: viewMode === 'exploded' ? 'translateY(-24px)' : 'none' }}
            onMouseEnter={() => setHoveredHotspot(5)}
            onMouseLeave={() => setHoveredHotspot(null)}
          >
            <rect x="0" y="40" width="800" height="40" fill="url(#roadGradient)" />
            {/* Sub-base crushed stone */}
            <rect x="0" y="72" width="800" height="8" fill="#94A3B8" />
            {/* White Road Centerline */}
            <line x1="0" y1="60" x2="800" y2="60" stroke="#FFFFFF" strokeWidth="3" strokeDasharray="24 16" />
          </g>

          {/* ────── 4. EXCAVATION ZONE WORKSPACE ────── */}
          <rect
            x="262"
            y="82"
            width="276"
            height="336"
            fill={hoveredHotspot === 4 ? '#E6F0FF' : '#F8FAFC'}
            stroke="#0085F4"
            strokeWidth="1.5"
            strokeDasharray="6 4"
            className="transition-colors duration-300"
            onMouseEnter={() => setHoveredHotspot(4)}
            onMouseLeave={() => setHoveredHotspot(null)}
          />

          {/* ────── 3. ENGINEERED GRAVEL PIPE BEDDING ────── */}
          {(viewMode !== 'installation' || installStep >= 3) && (
            <rect
              x="264"
              y="340"
              width="272"
              height="76"
              fill="url(#gravelBedding)"
              stroke={hoveredHotspot === 3 ? '#0066FF' : '#94A3B8'}
              strokeWidth={hoveredHotspot === 3 ? 3 : 1.5}
              className="transition-transform duration-500 cursor-pointer"
              style={{ transform: viewMode === 'exploded' ? 'translateY(24px)' : 'none' }}
              onMouseEnter={() => setHoveredHotspot(3)}
              onMouseLeave={() => setHoveredHotspot(null)}
            />
          )}

          {/* ────── 1. STEEL TRENCH SHIELD POSITIONED INSIDE EXCAVATION ────── */}
          {(viewMode !== 'installation' || installStep >= 2) && (
            <g
              className="transition-transform duration-500 cursor-pointer"
              style={{ transform: viewMode === 'exploded' ? 'translateY(-36px)' : 'none' }}
              onMouseEnter={() => setHoveredHotspot(1)}
              onMouseLeave={() => setHoveredHotspot(null)}
            >
              {/* Left Double-Wall Shield Panel */}
              <rect
                x="270"
                y="100"
                width="24"
                height="280"
                fill="url(#shieldSteel)"
                stroke={hoveredHotspot === 1 ? '#00BBFF' : '#004AAD'}
                strokeWidth={hoveredHotspot === 1 ? 3 : 2}
              />
              <rect x="274" y="110" width="16" height="260" fill="#0085F4" opacity="0.4" />

              {/* Right Double-Wall Shield Panel */}
              <rect
                x="506"
                y="100"
                width="24"
                height="280"
                fill="url(#shieldSteel)"
                stroke={hoveredHotspot === 1 ? '#00BBFF' : '#004AAD'}
                strokeWidth={hoveredHotspot === 1 ? 3 : 2}
              />
              <rect x="510" y="110" width="16" height="260" fill="#0085F4" opacity="0.4" />

              {/* Structural Spreader Pipes */}
              <rect x="294" y="140" width="212" height="14" fill="#004AAD" stroke="#0085F4" strokeWidth="1.5" />
              <rect x="294" y="320" width="212" height="14" fill="#004AAD" stroke="#0085F4" strokeWidth="1.5" />

              {/* Spreader Collar Pins */}
              <circle cx="294" cy="147" r="7" fill="#00BBFF" />
              <circle cx="506" cy="147" r="7" fill="#00BBFF" />
              <circle cx="294" cy="327" r="7" fill="#00BBFF" />
              <circle cx="506" cy="327" r="7" fill="#00BBFF" />
            </g>
          )}

          {/* ────── 7. OSHA ACCESS LADDER ────── */}
          {(viewMode !== 'installation' || installStep >= 5) && (
            <g className="transition-transform duration-500" style={{ transform: viewMode === 'exploded' ? 'translateY(-20px)' : 'none' }}>
              <line x1="310" y1="80" x2="310" y2="360" stroke="#D90429" strokeWidth="3" />
              <line x1="324" y1="80" x2="324" y2="360" stroke="#D90429" strokeWidth="3" />
              {[100, 130, 160, 190, 220, 250, 280, 310, 340].map((ly, i) => (
                <line key={i} x1="310" y1={ly} x2="324" y2={ly} stroke="#D90429" strokeWidth="2" />
              ))}
            </g>
          )}

          {/* ────── 2. LARGE UNDERGROUND WATER/SEWER PIPE ────── */}
          {(viewMode !== 'installation' || installStep >= 4) && (
            <g
              className="transition-transform duration-500 cursor-pointer"
              style={{ transform: viewMode === 'exploded' ? 'translateY(36px)' : 'none' }}
              onMouseEnter={() => setHoveredHotspot(2)}
              onMouseLeave={() => setHoveredHotspot(null)}
            >
              {/* Main Pipe Outer Shell */}
              <circle
                cx="400"
                cy="320"
                r="48"
                fill="url(#pvcPipe)"
                stroke={hoveredHotspot === 2 ? '#00BBFF' : '#004AAD'}
                strokeWidth={hoveredHotspot === 2 ? 4 : 2.5}
              />
              {/* Internal Water Bore */}
              <circle cx="400" cy="320" r="36" fill="#F4F8FF" stroke="#0085F4" strokeWidth="2" />
              <circle cx="400" cy="320" r="26" fill="#0085F4" opacity="0.25" />
              <text x="400" y="324" textAnchor="middle" fill="#004AAD" fontSize="11" fontWeight="bold" fontFamily="monospace">
                WATER MAIN
              </text>
            </g>
          )}

          {/* ────── 8. SUPPORTING UNDERGROUND UTILITY LINES ────── */}
          {(viewMode !== 'installation' || installStep >= 5) && (
            <g className="transition-transform duration-500" style={{ transform: viewMode === 'exploded' ? 'translateY(-10px)' : 'none' }}>
              {/* Electrical Conduit Bank */}
              <rect x="200" y="240" width="30" height="30" fill="#004AAD" stroke="#0085F4" strokeWidth="1.5" />
              <circle cx="208" cy="248" r="4" fill="#00BBFF" />
              <circle cx="222" cy="248" r="4" fill="#00BBFF" />
              <circle cx="208" cy="262" r="4" fill="#00BBFF" />
              <circle cx="222" cy="262" r="4" fill="#00BBFF" />

              {/* Gas / Fiber Cable Conduit */}
              <circle cx="580" cy="220" r="16" fill="#D90429" opacity="0.85" stroke="#FFFFFF" strokeWidth="1.5" />
              <text x="580" y="224" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold" fontFamily="monospace">
                GAS
              </text>
            </g>
          )}

          {/* ────── LEADER LINES & HOTSPOT CALLOUT OVERLAYS ────── */}
          {hotspots.map((hs) => {
            const isHovered = hoveredHotspot === hs.id;
            const cx = (hs.x / 100) * 800;
            const cy = (hs.modeY / 100) * 480;

            return (
              <g key={hs.id} className="transition-all duration-300">
                {/* Thin #0085F4 / #00BBFF Leader Line */}
                <circle
                  cx={cx}
                  cy={cy}
                  r={isHovered ? 10 : 6}
                  fill={isHovered ? '#00BBFF' : '#0085F4'}
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  className="transition-all duration-200 cursor-pointer"
                  onMouseEnter={() => setHoveredHotspot(hs.id)}
                  onMouseLeave={() => setHoveredHotspot(null)}
                />
                
                {/* Hotspot Ring Pulse */}
                <circle
                  cx={cx}
                  cy={cy}
                  r={isHovered ? 18 : 12}
                  fill="none"
                  stroke="#00BBFF"
                  strokeWidth="1.5"
                  opacity={isHovered ? 0.9 : 0.4}
                  className="animate-ping"
                />
              </g>
            );
          })}
        </svg>

        {/* Floating Numbered Engineering Callout Cards */}
        <div className="absolute inset-0 pointer-events-none hidden sm:block">
          {hotspots.map((hs) => {
            const isHovered = hoveredHotspot === hs.id;
            return (
              <div
                key={hs.id}
                style={{ left: `${hs.x}%`, top: `${hs.modeY}%` }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto transition-all duration-300 ${
                  isHovered ? 'scale-110 z-30' : 'z-20'
                }`}
                onMouseEnter={() => setHoveredHotspot(hs.id)}
                onMouseLeave={() => setHoveredHotspot(null)}
              >
                <div
                  className={`p-2.5 bg-white/95 backdrop-blur-md border-2 shadow-lg max-w-[170px] transition-all ${
                    isHovered
                      ? 'border-[#00BBFF] shadow-2xl ring-2 ring-[#00BBFF]/30'
                      : 'border-[#0085F4]/30 hover:border-[#0085F4]'
                  }`}
                >
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="px-1.5 py-0.5 bg-[#004AAD] text-white text-[10px] font-bold">
                      {hs.number}
                    </span>
                    <span className="font-bold text-[#004AAD] text-[11px] truncate uppercase">
                      {hs.title}
                    </span>
                  </div>
                  <p className="text-[10px] text-[#5B7FA5] font-medium leading-tight">
                    {hs.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* INSTALLATION STEP ANIMATION CONTROLLER OVERLAY */}
        {viewMode === 'installation' && (
          <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3 border-2 border-[#0085F4]/30 shadow-xl flex items-center justify-between gap-4 font-mono z-30">
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 bg-[#004AAD] text-white text-xs font-bold">
                STEP 0{installStep}
              </span>
              <div>
                <span className="font-bold text-[#004AAD] text-xs uppercase block">
                  {installSteps[installStep - 1].title}
                </span>
                <span className="text-[10px] text-[#5B7FA5] block truncate max-w-sm">
                  {installSteps[installStep - 1].desc}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsPlayingInstall(!isPlayingInstall)}
                className="px-3 py-1.5 bg-[#0085F4] text-white font-bold text-xs hover:bg-[#004AAD] transition-colors flex items-center gap-1"
              >
                {isPlayingInstall ? 'PAUSE' : 'PLAY SEQUENCE'}
              </button>
              <button
                onClick={() => setInstallStep(1)}
                className="p-1.5 bg-[#F7FAFE] border border-[#0085F4]/30 text-[#004AAD] hover:bg-[#0085F4]/10"
                title="Restart Sequence"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Information Bar */}
      <div className="bg-white px-4 py-3 border-t-2 border-[#0085F4]/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono font-bold text-[#004AAD] z-20 relative">
        <div className="flex items-center gap-2">
          <span className="text-[#0085F4]">TRENCH PROTECTION SYSTEM</span>
          <span className="text-slate-300">•</span>
          <span className="text-[#5B7FA5]">Shield • Pipe • Bedding • Access</span>
        </div>

        <div className="flex items-center gap-2 text-[#0085F4]">
          <span>DRAG TO EXPLORE ↔</span>
        </div>
      </div>
    </div>
  );
};
