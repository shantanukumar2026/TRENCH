import React, { useState, useEffect, useRef } from 'react';
import { 
  Check, ArrowRight, ShieldCheck, CheckCircle2, RefreshCw
} from 'lucide-react';

interface HowItWorksProps {
  onExploreSolutions?: () => void;
  onTalkToExpert?: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ 
  onExploreSolutions, 
  onTalkToExpert 
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [reducedMotion, setReducedMotion] = useState<boolean>(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    const handleChange = () => setReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Scroll listener for sticky container
  useEffect(() => {
    let requestID: number;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const totalScrollable = rect.height - windowHeight;
      if (totalScrollable <= 0) return;

      const currentScroll = -rect.top;
      const rawProgress = Math.min(1, Math.max(0, currentScroll / totalScrollable));

      setScrollProgress(rawProgress);

      // Determine active stage (0..4)
      if (rawProgress < 0.20) {
        setActiveStepIndex(0);
      } else if (rawProgress < 0.40) {
        setActiveStepIndex(1);
      } else if (rawProgress < 0.60) {
        setActiveStepIndex(2);
      } else if (rawProgress < 0.80) {
        setActiveStepIndex(3);
      } else {
        setActiveStepIndex(4);
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(requestID);
      requestID = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(requestID);
    };
  }, []);

  // Click to jump cleanly to any stage (0..4)
  const scrollToStage = (stageIndex: number) => {
    setActiveStepIndex(stageIndex);
    
    // Explicit progress values for each stage button:
    // Stage 0: 0.15 (Excavate)
    // Stage 1: 0.35 (Protect)
    // Stage 2: 0.55 (Install)
    // Stage 3: 0.75 (Backfill)
    // Stage 4: 1.00 (Restore - 100% fully closed road)
    const stageTargetProgress = [0.15, 0.35, 0.55, 0.75, 1.00][stageIndex];
    setScrollProgress(stageTargetProgress);

    if (containerRef.current) {
      const containerTop = containerRef.current.offsetTop;
      const containerHeight = containerRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollableDistance = containerHeight - windowHeight;

      const targetScrollY = containerTop + (stageTargetProgress * scrollableDistance);

      window.scrollTo({
        top: targetScrollY,
        behavior: 'smooth'
      });
    }
  };

  // Workflow Stages Data
  const stages = [
    {
      id: '01',
      label: 'EXCAVATE',
      title: 'OPEN GROUND & SOIL PROFILING',
      copy: 'Open the ground to the required depth and dimensions for underground infrastructure installation while profiling soil stability.',
      points: [
        'Dashed blue excavation boundary alignment',
        'Continuous depth measurement ruler (-20.0 FT)',
        'Strata profiling: Surface, Base, Subgrade & Soil'
      ]
    },
    {
      id: '02',
      label: 'PROTECT',
      title: 'SHORING & TRENCH PROTECTION',
      copy: 'Stabilize and protect the excavation using high-tensile steel trench shields and OSHA 1926 Subpart P compliant shoring.',
      points: [
        'A572 Steel trench shields slide into place',
        'Telescopic crossbrace struts stabilize lateral pressure',
        'OSHA Subpart P certified zero-collapse work zone'
      ]
    },
    {
      id: '03',
      label: 'INSTALL',
      title: 'UTILITY & INFRASTRUCTURE POSITIONING',
      copy: 'Position the required pipe, utility, drainage, or infrastructure system at the specified depth, bedding, and laser alignment.',
      points: [
        'Cable suspended precision pipe descent',
        'ANSI/AWWA C900 16" water main pipe bedding',
        'Cyan hydro fluid flow continuity verification'
      ]
    },
    {
      id: '04',
      label: 'BACKFILL',
      title: 'COMPACTED BACKFILL & EMBEDMENT',
      copy: 'Place and compact approved material in engineered lifts around installed infrastructure to rebuild the trench safely.',
      points: [
        'Layer 01: Crushed pea gravel pipe envelope',
        'Layer 02: Initial compacted soil backfill',
        'Progressive shield extraction as fill rises'
      ]
    },
    {
      id: '05',
      label: 'RESTORE',
      title: 'SURFACE RESTORATION & DECKING',
      copy: 'Reconstruct the roadway base and pavement deck to return the site to a finished, AASHTO H-20 service-ready condition.',
      points: [
        'AASHTO H-20 heavy traffic asphalt deck restoration',
        'Sub-surface technical cutaway window active',
        'Continuous fluid flow continuity pulse'
      ]
    }
  ];

  // ────── DETERMINISTIC CUMULATIVE VISUAL PARAMETERS ──────
  // Use both activeStepIndex and scrollProgress to guarantee stage state completeness!

  // 1. Excavation (Depth goes from 220px at start to 600px fully dug for Stage 1+)
  const excavateProgress = activeStepIndex > 0 ? 1 : Math.min(1, scrollProgress / 0.20);
  const trenchDepthY = 220 + (excavateProgress * 380);

  // 2. Protection (Shields slide in: 180px offset down to 0px in place for Stage 1+)
  const protectProgress = activeStepIndex > 1 ? 1 : (activeStepIndex === 1 ? Math.min(1, (scrollProgress - 0.20) / 0.20) : 0);
  const shieldSlideX = (1 - protectProgress) * 180;

  // 3. Installation (Pipe lowers: 120px down to 540px resting on bedding for Stage 2+)
  const installProgress = activeStepIndex > 2 ? 1 : (activeStepIndex === 2 ? Math.min(1, (scrollProgress - 0.40) / 0.20) : 0);
  const pipeLowerY = 120 + (installProgress * 420);

  // 4. Backfill (Fill rises: 0 to 1 for Stage 3+)
  const backfillProgress = activeStepIndex > 3 ? 1 : (activeStepIndex === 3 ? Math.min(1, (scrollProgress - 0.60) / 0.20) : 0);
  const shieldLiftY = backfillProgress * 240;

  // 5. Restoration (Road deck closes: gap goes from 500px down to 0px FULLY CLOSED for Stage 4)
  const restoreProgress = activeStepIndex === 4 ? (scrollProgress >= 0.80 ? Math.min(1, (scrollProgress - 0.80) / 0.15) : 1) : 0;
  const roadRestoreX = (1 - restoreProgress) * 500;

  const activeStageData = stages[activeStepIndex];

  return (
    <section 
      id="howitworks" 
      ref={containerRef}
      className="relative bg-[#F0F7FF] border-b border-blue-200"
      style={{ height: '420vh' }}
    >
      {/* STICKY FULL-SCREEN VISUAL CONTAINER */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden bg-blueprint-grid py-4 px-4 sm:px-8 lg:px-12">
        
        {/* ────── TOP SECTION HEADLINE & PROGRESS NAVIGATION RAIL ────── */}
        <div className="w-full space-y-3 z-20 shrink-0">
          
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-blue-200/80 pb-3">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-white border border-blue-200">
                <span className="w-2 h-2 rounded-full bg-[#C00000]"></span>
                <span className="text-[10px] font-mono font-bold text-[#0754AE] uppercase tracking-widest">
                  HOW IT WORKS — ANIMATED CONSTRUCTION WORKFLOW
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0754AE] tracking-tight font-heading uppercase mt-1">
                FROM EXCAVATION <span className="text-[#2166D1]">TO RESTORATION.</span>
              </h2>
            </div>

            <div className="hidden md:flex items-center gap-4 text-xs font-mono text-blue-500">
              <span className="flex items-center gap-1.5 font-bold text-[#0754AE]">
                <ShieldCheck className="w-4 h-4 text-[#C00000]" />
                OSHA 1926 SUBPART P
              </span>
              <span>|</span>
              <span className="font-bold text-[#2166D1]">
                EVERYTHING TRENCH.
              </span>
            </div>
          </div>

          {/* Horizontal Stage Progress Navigation Rail */}
          <div className="w-full bg-white/90 backdrop-blur-md rounded-lg border border-blue-200 p-2 shadow-sm">
            <div className="relative flex items-center justify-between">
              
              {/* Underlying Active Blue Progress Track Bar */}
              <div className="absolute top-1/2 left-6 right-6 h-1 bg-blue-100 -translate-y-1/2 rounded z-0">
                <div 
                  className="h-full bg-gradient-to-r from-[#0754AE] via-[#2166D1] to-[#00BBFF] rounded transition-all duration-200"
                  style={{ width: `${Math.max(0.05, scrollProgress) * 100}%` }}
                ></div>
              </div>

              {/* 5 Stage Step Buttons */}
              {stages.map((stg, idx) => {
                const isActive = activeStepIndex === idx;
                const isCompleted = activeStepIndex > idx;

                return (
                  <button
                    key={stg.id}
                    onClick={() => scrollToStage(idx)}
                    className={`relative z-10 flex items-center gap-2 px-3 py-1.5 rounded-md font-mono text-xs font-bold uppercase transition-all duration-200 ${
                      isActive 
                        ? 'bg-[#0754AE] text-white shadow-md scale-105 ring-2 ring-[#00BBFF]' 
                        : isCompleted
                        ? 'bg-blue-100 text-[#0754AE] hover:bg-blue-200'
                        : 'bg-white text-blue-400 hover:text-[#0754AE] border border-blue-200'
                    }`}
                  >
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black ${
                      isActive 
                        ? 'bg-[#C00000] text-white' 
                        : isCompleted 
                        ? 'bg-[#2166D1] text-white' 
                        : 'bg-blue-100 text-blue-500'
                    }`}>
                      {isCompleted ? <Check className="w-3 h-3 stroke-[3]" /> : stg.id}
                    </span>
                    <span className="hidden sm:inline tracking-wider">{stg.label}</span>
                  </button>
                );
              })}

            </div>
          </div>

        </div>

        {/* ────── MAIN SPLIT STAGE CONTENT: LEFT SPECS & RIGHT SVG VISUALIZER ────── */}
        <div className="w-full flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center my-2 min-h-0">
          
          {/* LEFT 35%: ACTIVE STAGE TEXT & TECHNICAL SPECS */}
          <div className="lg:col-span-4 bg-white/95 backdrop-blur-md border-2 border-blue-200 rounded-xl p-6 shadow-xl space-y-4 flex flex-col justify-between max-h-full overflow-y-auto">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#C00000] uppercase tracking-wider">
                <span className="px-2 py-0.5 bg-red-100 border border-red-200 rounded">
                  STAGE {activeStageData.id} OF 05
                </span>
                <span>PROGRESS: {Math.round(scrollProgress * 100)}%</span>
              </div>

              <h3 className="text-2xl font-black text-[#0754AE] font-heading uppercase mt-2 leading-tight">
                {activeStageData.title}
              </h3>

              <p className="text-xs text-blue-600 font-sans leading-relaxed mt-2">
                {activeStageData.copy}
              </p>
            </div>

            {/* Technical Checklist */}
            <div className="space-y-2 font-mono text-xs border-t border-b border-blue-100 py-3">
              <div className="text-[11px] font-bold text-[#0754AE] uppercase tracking-wider">
                TECHNICAL VERIFICATION POINTS:
              </div>
              {activeStageData.points.map((pt, pIdx) => (
                <div key={pIdx} className="flex items-start gap-2 text-[#0754AE]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2166D1] shrink-0 mt-0.5" />
                  <span className="text-[11px] text-blue-600 font-medium">{pt}</span>
                </div>
              ))}
            </div>

            {/* Interactive Step Selector Controls */}
            <div className="flex items-center justify-between text-xs font-mono pt-1">
              <button 
                onClick={() => scrollToStage(Math.max(0, activeStepIndex - 1))}
                disabled={activeStepIndex === 0}
                className="px-3 py-1.5 bg-[#F0F7FF] border border-blue-200 rounded text-[#0754AE] font-bold disabled:opacity-40 hover:bg-blue-100 transition-colors"
              >
                ← PREV STEP
              </button>

              <div className="text-[11px] text-blue-400 font-bold">
                {activeStepIndex + 1} / 5 STAGES
              </div>

              <button 
                onClick={() => scrollToStage(Math.min(4, activeStepIndex + 1))}
                disabled={activeStepIndex === 4}
                className="px-3 py-1.5 bg-[#0754AE] text-white rounded font-bold disabled:opacity-40 hover:bg-[#2166D1] transition-colors"
              >
                NEXT STEP →
              </button>
            </div>
          </div>

          {/* RIGHT 65%: SVG ANIMATED TRENCH CROSS-SECTION VISUALIZER */}
          <div className="lg:col-span-8 h-full min-h-[380px] lg:min-h-[480px] bg-white rounded-xl border-2 border-blue-300 shadow-2xl relative overflow-hidden flex items-center justify-center p-2">
            
            {/* SVG Construction Scene ViewBox 1600 x 900 */}
            <svg 
              viewBox="0 0 1600 900" 
              className="w-full h-full object-contain select-none"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                {/* Background Grid Pattern */}
                <pattern id="blueprintGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2166D1" strokeWidth="0.8" strokeOpacity="0.08" />
                </pattern>

                {/* Soil Strata Gradients — NO BLACK, ALL BLUE & SLATE TONED */}
                <linearGradient id="roadSurfaceGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0754AE" />
                  <stop offset="100%" stopColor="#1E3A8A" />
                </linearGradient>

                <linearGradient id="baseLayerGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#64748B" />
                  <stop offset="100%" stopColor="#5B7FA5" />
                </linearGradient>

                <linearGradient id="subgradeGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#94A3B8" />
                  <stop offset="100%" stopColor="#64748B" />
                </linearGradient>

                <linearGradient id="soilLayerGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#CBD5E1" />
                  <stop offset="50%" stopColor="#94A3B8" />
                  <stop offset="100%" stopColor="#64748B" />
                </linearGradient>

                <linearGradient id="steelShieldGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#0754AE" />
                  <stop offset="50%" stopColor="#2166D1" />
                  <stop offset="100%" stopColor="#0754AE" />
                </linearGradient>

                <linearGradient id="c900PipeGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00BBFF" />
                  <stop offset="50%" stopColor="#2166D1" />
                  <stop offset="100%" stopColor="#0754AE" />
                </linearGradient>

                <linearGradient id="backfillPeaGravelGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#BFDBFE" />
                  <stop offset="100%" stopColor="#93C5FD" />
                </linearGradient>

                <linearGradient id="backfillCompactedGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#94A3B8" />
                  <stop offset="100%" stopColor="#64748B" />
                </linearGradient>

                {/* Glow Filter for Active Elements */}
                <filter id="cyanGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* 1. Background Canvas & Blueprint Mesh */}
              <rect width="1600" height="900" fill="#F0F7FF" />
              <rect width="1600" height="900" fill="url(#blueprintGrid)" />

              {/* 2. Undisturbed Soil Strata Layers */}
              {/* Surface Road Grade */}
              <rect x="0" y="80" width="1600" height="40" fill="url(#roadSurfaceGrad)" />
              <line x1="0" y1="100" x2="1600" y2="100" stroke="#FFD700" strokeWidth="4" strokeDasharray="30,20" />
              <text x="40" y="105" fill="#FFFFFF" fontFamily="JetBrains Mono, monospace" fontSize="16" fontWeight="bold">
                SURFACE GRADE [AASHTO H-20 ROADWAY DECK]
              </text>

              {/* Base & Subgrade Strata */}
              <rect x="0" y="120" width="1600" height="60" fill="url(#baseLayerGrad)" opacity="0.85" />
              <text x="40" y="155" fill="#FFFFFF" fontFamily="JetBrains Mono, monospace" fontSize="14" fontWeight="bold">
                AGGREGATE ROAD BASE LAYER
              </text>

              <rect x="0" y="180" width="1600" height="80" fill="url(#subgradeGrad)" opacity="0.8" />
              <text x="40" y="225" fill="#FFFFFF" fontFamily="JetBrains Mono, monospace" fontSize="14" fontWeight="bold">
                SUBGRADE SOIL STRATA (TYPE B/C)
              </text>

              {/* Deep Soil Strata */}
              <rect x="0" y="260" width="1600" height="640" fill="url(#soilLayerGrad)" opacity="0.75" />

              {/* 3. EXCAVATED TRENCH POCKET & DYNAMIC CUTAWAY */}
              {/* Trench Wall Outline Boundaries (Center 550px to 1050px) */}
              <g id="trenchPocket">
                {/* Excavated Air Cavity */}
                <rect x="520" y="120" width="560" height={trenchDepthY - 120} fill="#FFFFFF" />

                {/* Excavation Boundary Guide Lines */}
                <line x1="520" y1="80" x2="520" y2={trenchDepthY} stroke="#2166D1" strokeWidth="3" strokeDasharray="8,6" />
                <line x1="1080" y1="80" x2="1080" y2={trenchDepthY} stroke="#2166D1" strokeWidth="3" strokeDasharray="8,6" />
                
                {/* Excavation Bottom Floor */}
                <line x1="520" y1={trenchDepthY} x2="1080" y2={trenchDepthY} stroke="#2166D1" strokeWidth="4" />
              </g>

              {/* Side Depth Measurement Line */}
              <g id="depthRuler" transform="translate(1120, 120)">
                <line x1="0" y1="0" x2="0" y2={trenchDepthY - 120} stroke="#0754AE" strokeWidth="2.5" strokeDasharray="6,4" />
                <circle cx="0" cy={trenchDepthY - 120} r="6" fill="#C00000" />
                <text x="15" y={Math.max(30, (trenchDepthY - 120) / 2)} fill="#0754AE" fontFamily="JetBrains Mono, monospace" fontSize="16" fontWeight="bold">
                  DEPTH: -{((excavateProgress * 20.0)).toFixed(1)} FT
                </text>
              </g>

              {/* 4. STEP 04 BACKFILL MATERIAL LAYERS (Active for Stage 3+) */}
              {(activeStepIndex >= 3 || backfillProgress > 0) && (
                <g id="backfillLayers">
                  {/* Layer 01: Pea Gravel Bedding Envelope around Pipe */}
                  <rect 
                    x="530" 
                    y={activeStepIndex >= 4 ? 540 : Math.max(540, 620 - (backfillProgress * 120))} 
                    width="540" 
                    height="120" 
                    fill="url(#backfillPeaGravelGrad)" 
                    stroke="#2166D1"
                    strokeWidth="2"
                  />
                  <text x="550" y="640" fill="#0754AE" fontFamily="JetBrains Mono, monospace" fontSize="14" fontWeight="bold">
                    LAYER 01: PEA GRAVEL BEDDING
                  </text>

                  {/* Layer 02: Compacted Soil Backfill */}
                  {(activeStepIndex >= 4 || backfillProgress > 0.4) && (
                    <g>
                      <rect 
                        x="530" 
                        y={activeStepIndex >= 4 ? 380 : Math.max(380, 540 - ((backfillProgress - 0.4) * 260))} 
                        width="540" 
                        height="160" 
                        fill="url(#backfillCompactedGrad)" 
                        opacity="0.85"
                      />
                      <line x1="530" y1="460" x2="1070" y2="460" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="12,12" />
                      <text x="550" y="440" fill="#FFFFFF" fontFamily="JetBrains Mono, monospace" fontSize="14" fontWeight="bold">
                        LAYER 02: INITIAL COMPACTED BACKFILL
                      </text>
                    </g>
                  )}

                  {/* Layer 03: Final Subbase Fill */}
                  {(activeStepIndex >= 4 || backfillProgress > 0.75) && (
                    <g>
                      <rect 
                        x="530" 
                        y={activeStepIndex >= 4 ? 200 : Math.max(200, 380 - ((backfillProgress - 0.75) * 400))} 
                        width="540" 
                        height="180" 
                        fill="url(#subgradeGrad)" 
                        opacity="0.9"
                      />
                      <text x="550" y="280" fill="#FFFFFF" fontFamily="JetBrains Mono, monospace" fontSize="14" fontWeight="bold">
                        LAYER 03: COMPACTED SUBBASE FILL
                      </text>
                    </g>
                  )}
                </g>
              )}

              {/* 5. STEP 02 TRENCH SHIELD PROTECTION PANELS (Active for Stage 1+) */}
              {(activeStepIndex >= 1 || protectProgress > 0) && (
                <g id="trenchShields" transform={`translate(0, ${-shieldLiftY})`}>
                  {/* Left Steel Plate */}
                  <rect 
                    x={530 - shieldSlideX} 
                    y="220" 
                    width="36" 
                    height="380" 
                    fill="url(#steelShieldGrad)" 
                    stroke="#FFFFFF" 
                    strokeWidth="3" 
                    rx="4"
                  />
                  
                  {/* Right Steel Plate */}
                  <rect 
                    x={1034 + shieldSlideX} 
                    y="220" 
                    width="36" 
                    height="380" 
                    fill="url(#steelShieldGrad)" 
                    stroke="#FFFFFF" 
                    strokeWidth="3" 
                    rx="4"
                  />

                  {/* Top Telescopic Strut Spreader */}
                  <rect 
                    x={566 - shieldSlideX} 
                    y="260" 
                    width={468 + (shieldSlideX * 2)} 
                    height="24" 
                    fill="#0754AE" 
                    stroke="#00BBFF" 
                    strokeWidth="2" 
                  />
                  
                  {/* Bottom Telescopic Strut Spreader */}
                  <rect 
                    x={566 - shieldSlideX} 
                    y="520" 
                    width={468 + (shieldSlideX * 2)} 
                    height="24" 
                    fill="#0754AE" 
                    stroke="#00BBFF" 
                    strokeWidth="2" 
                  />

                  {/* Shield Leader Line Callouts */}
                  {activeStepIndex === 1 && (
                    <g id="shieldCallouts">
                      <line x1="530" y1="340" x2="380" y2="340" stroke="#0754AE" strokeWidth="2" />
                      <circle cx="530" cy="340" r="5" fill="#C00000" />
                      <rect x="220" y="320" width="150" height="40" fill="#0754AE" rx="4" />
                      <text x="235" y="345" fill="#FFFFFF" fontFamily="JetBrains Mono, monospace" fontSize="12" fontWeight="bold">
                        LEFT SHIELD →
                      </text>

                      <line x1="1070" y1="340" x2="1220" y2="340" stroke="#0754AE" strokeWidth="2" />
                      <circle cx="1070" cy="340" r="5" fill="#C00000" />
                      <rect x="1230" y="320" width="150" height="40" fill="#0754AE" rx="4" />
                      <text x="1245" y="345" fill="#FFFFFF" fontFamily="JetBrains Mono, monospace" fontSize="12" fontWeight="bold">
                        ← RIGHT SHIELD
                      </text>
                    </g>
                  )}
                </g>
              )}

              {/* 6. STEP 03 INSTALL: UTILITY PIPE & CABLE LOWERING ASSEMBLY (Active for Stage 2+) */}
              {(activeStepIndex >= 2 || installProgress > 0) && (
                <g id="utilityPipeAssembly">
                  {/* Cable Crane Lines (Only visible during installation phase) */}
                  {activeStepIndex === 2 && installProgress < 0.95 && (
                    <g id="craneCables">
                      <line x1="680" y1="0" x2="680" y2={pipeLowerY} stroke="#0754AE" strokeWidth="2" strokeDasharray="4,4" />
                      <line x1="920" y1="0" x2="920" y2={pipeLowerY} stroke="#0754AE" strokeWidth="2" strokeDasharray="4,4" />
                    </g>
                  )}

                  {/* AWWA C900 16" Water Main Pipe Cylinder */}
                  <g id="c900Pipe" transform={`translate(0, ${activeStepIndex >= 3 ? 540 : Math.min(540, pipeLowerY)})`}>
                    <rect x="580" y="-35" width="440" height="70" fill="url(#c900PipeGrad)" stroke="#FFFFFF" strokeWidth="3" rx="10" />
                    
                    {/* Pipe Bell Joints */}
                    <rect x="630" y="-40" width="16" height="80" fill="#0754AE" rx="3" />
                    <rect x="950" y="-40" width="16" height="80" fill="#0754AE" rx="3" />

                    {/* Animated Hydro Flow Pulse Line */}
                    <line x1="580" y1="0" x2="1020" y2="0" stroke="#00BBFF" strokeWidth="6" filter="url(#cyanGlow)" />
                    <circle cx={580 + (Math.sin(scrollProgress * 20) * 200 + 200)} cy="0" r="8" fill="#FFFFFF" filter="url(#cyanGlow)" />

                    <text x="660" y="5" fill="#FFFFFF" fontFamily="JetBrains Mono, monospace" fontSize="14" fontWeight="bold">
                      ANSI/AWWA C900 16" WATER MAIN
                    </text>
                  </g>

                  {/* Pipe Leader Line Callout */}
                  {activeStepIndex >= 2 && (
                    <g id="pipeCallout" transform={`translate(0, ${activeStepIndex >= 3 ? 540 : Math.min(540, pipeLowerY)})`}>
                      <line x1="1020" y1="0" x2="1200" y2="0" stroke="#2166D1" strokeWidth="2" />
                      <circle cx="1020" cy="0" r="5" fill="#00BBFF" />
                      <rect x="1210" y="-20" width="220" height="40" fill="#0754AE" rx="4" />
                      <text x="1225" y="5" fill="#FFFFFF" fontFamily="JetBrains Mono, monospace" fontSize="12" fontWeight="bold">
                        INSTALLED UTILITY (-17.0 FT)
                      </text>
                    </g>
                  )}
                </g>
              )}

              {/* 7. STEP 05 RESTORE: FINISHED PAVEMENT DECK CLOSURE (Fully closed for Stage 4) */}
              {activeStepIndex === 4 && (
                <g id="restoredRoadway">
                  {/* Restored Aggregate Base */}
                  <rect 
                    x={520 + (roadRestoreX / 2)} 
                    y="120" 
                    width={560 - roadRestoreX} 
                    height="60" 
                    fill="url(#baseLayerGrad)" 
                  />

                  {/* Restored Asphalt Deck Header */}
                  <rect 
                    x={520 + (roadRestoreX / 2)} 
                    y="80" 
                    width={560 - roadRestoreX} 
                    height="40" 
                    fill="url(#roadSurfaceGrad)" 
                    stroke="#00BBFF"
                    strokeWidth="2"
                  />

                  <line 
                    x1={520 + (roadRestoreX / 2)} 
                    y1="100" 
                    x2={1080 - (roadRestoreX / 2)} 
                    y2="100" 
                    stroke="#FFD700" 
                    strokeWidth="4" 
                    strokeDasharray="30,20" 
                  />

                  <g id="finalRestorationBadge" transform="translate(680, 40)">
                    <rect x="0" y="0" width="240" height="32" fill="#C00000" rx="4" />
                    <text x="15" y="21" fill="#FFFFFF" fontFamily="JetBrains Mono, monospace" fontSize="12" fontWeight="bold">
                      ✓ RESTORED SURFACE GRADE
                    </text>
                  </g>
                </g>
              )}

              {/* Technical Grid Overlay Branding */}
              <text x="1540" y="860" textAnchor="end" fill="#0754AE" fontFamily="JetBrains Mono, monospace" fontSize="12" fontWeight="bold" opacity="0.6">
                SYS CAD: TU-INFRA-2026 // EVERYTHING TRENCH
              </text>
            </svg>

          </div>

        </div>

        {/* ────── BOTTOM FINAL STATE SUMMARY & ACTION CTA BAR ────── */}
        <div className="w-full bg-white/95 backdrop-blur-md border border-blue-200 rounded-lg p-3 shadow-md flex flex-col sm:flex-row justify-between items-center gap-3 z-20 shrink-0 font-mono">
          <div className="flex items-center gap-3 text-xs">
            <span className="px-2 py-1 bg-[#0754AE] text-white font-bold rounded">
              EVERYTHING TRENCH.
            </span>
            <span className="hidden md:inline text-blue-600 font-medium text-[11px]">
              EXCAVATION → PROTECTION → INSTALLATION → BACKFILL → RESTORATION
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={onExploreSolutions}
              className="btn-secondary text-xs py-2 px-4 font-bold rounded-none"
            >
              EXPLORE SOLUTIONS
            </button>
            <button 
              onClick={onTalkToExpert}
              className="bg-[#C00000] hover:bg-[#A00000] text-white text-xs py-2 px-5 font-heading font-bold uppercase flex items-center gap-1.5 transition-colors rounded-none"
            >
              TALK TO OUR TEAM
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
