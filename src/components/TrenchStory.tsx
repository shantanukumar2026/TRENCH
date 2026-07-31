import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Layers, BookOpen, Clock, Activity, HardHat, Compass, FileCheck, CheckCircle2 } from 'lucide-react';

interface TrenchStoryProps {
  onExploreProducts: () => void;
  onRequestQuote: () => void;
}

export const TrenchStory: React.FC<TrenchStoryProps> = ({ onExploreProducts, onRequestQuote }) => {
  const [activeTimelineIdx, setActiveTimelineIdx] = useState<number>(3); // Default modern era

  const timelineEras = [
    {
      year: '1800s',
      title: 'EARLY MANUAL EXCAVATIONS',
      subtitle: 'Unreinforced Dirt Cuts & High Hazards',
      description: 'Before modern heavy machinery, underground trenches were dug entirely by hand. Soil cave-ins were extremely common because unreinforced vertical earth walls could not withstand hydrostatic pressure.',
      riskLevel: 'CRITICAL RISK',
      tech: 'Pickaxes, Shovels, Timber Props',
      image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=800&q=80'
    },
    {
      year: '1930s',
      title: 'TIMBER SHORING & BRICK VAULTS',
      subtitle: 'Early Structural Lateral Support',
      description: 'The expansion of municipal water grids forced contractors to use heavy wood timber shores and hand-laid brick access shafts. While safer, timber rotted under groundwater exposure.',
      riskLevel: 'MODERATE RISK',
      tech: 'Heavy Timber Bracing & Brick Masonry',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
    },
    {
      year: '1970s',
      title: 'THE OSHA SUBPART P ERA',
      subtitle: 'Standardized Soil Classification & Steel Shields',
      description: 'In 1989, OSHA enacted strict Subpart P excavation standards requiring certified shoring for any trench deeper than 5 feet in unstable soil (Type A, B, C). Steel trench boxes became mandatory.',
      riskLevel: 'REGULATED SAFETY',
      tech: 'Double-Wall Steel Boxes & Hydraulic Shores',
      image: 'https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=800&q=80'
    },
    {
      year: 'PRESENT',
      title: 'TRENCH UNLIMITED™ SYSTEM',
      subtitle: 'Everything Trench — Engineered Infrastructure',
      description: 'Today, Trench Unlimited™ delivers comprehensive, PE-stamped underground systems: high-tensile steel shields, precast concrete access vaults, polymer channel drainage, and C900/HDPE main piping.',
      riskLevel: 'ZERO INCIDENT STANDARD',
      tech: 'High-Tensile A572 Steel, Precast Vaults, CAD/BIM',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="pt-36 pb-20 bg-blueprint-grid">
      {/* 1. Hero Banner: What Trench Means */}
      <section className="py-20 bg-trench-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

        <div className="container-custom relative z-10 text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/10 backdrop-blur-md border border-white/20">
            <BookOpen className="w-4 h-4 text-[#C00000]" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-blue-100">
              FIELD ENGINEERING DOCUMENTARY STORY
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight font-heading uppercase leading-none">
            THE STORY OF <br />
            <span className="text-blue-200">THE TRENCH</span>
          </h1>

          <div className="flex justify-center">
            <span className="h-1 w-20 bg-[#C00000] rounded"></span>
          </div>

          <p className="text-lg text-blue-100 font-medium leading-relaxed max-w-3xl mx-auto">
            A trench is not just an excavation in dirt—it is the vital cut through the earth that houses the unseen arteries of modern civilization. Water, electricity, gas, high-speed fiber, and storm drainage all rely on engineered trenches.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-6 font-mono text-xs text-blue-200">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C00000]" />
              <span>OSHA 1926 SUBPART P CERTIFIED</span>
            </div>
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-blue-300" />
              <span>LATERAL SOIL PRESSURE DYNAMICS</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Historical Evolution Timeline */}
      <section className="py-24 bg-white border-b border-blue-200">
        <div className="container-custom">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#F0F7FF] border border-blue-200">
              <Clock className="w-3.5 h-3.5 text-[#C00000]" />
              <span className="text-xs font-mono font-bold text-[#0754AE] uppercase tracking-widest">
                HISTORICAL CHRONOLOGY
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0754AE] tracking-tight font-heading uppercase">
              THE EVOLUTION OF <span className="text-[#2166D1]">TRENCH SAFETY</span>
            </h2>
            <p className="text-slate-700 font-medium text-base">
              From dangerous unreinforced earth cuts to modern high-tensile steel shoring box engineering.
            </p>
          </div>

          {/* Timeline Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {timelineEras.map((era, idx) => (
              <button
                key={era.year}
                onClick={() => setActiveTimelineIdx(idx)}
                className={`p-4 rounded-xl border-2 font-mono text-left transition-all ${
                  activeTimelineIdx === idx
                    ? 'bg-[#0754AE] text-white border-[#0754AE] shadow-xl scale-[1.02]'
                    : 'bg-[#F0F7FF] text-[#0754AE] border-blue-200 hover:border-[#2166D1]'
                }`}
              >
                <div className="text-2xl font-black font-heading">{era.year}</div>
                <div className="text-xs font-bold truncate mt-1">{era.title}</div>
              </button>
            ))}
          </div>

          {/* Active Era Showcase Card */}
          <div className="bg-[#F0F7FF] border-2 border-blue-300 rounded-2xl p-8 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-blueprint-dense">
            <div className="lg:col-span-6 relative h-[360px] rounded-xl overflow-hidden shadow-md border border-blue-200">
              <img 
                src={timelineEras[activeTimelineIdx].image} 
                alt={timelineEras[activeTimelineIdx].title} 
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=800&q=80';
                }}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#C00000] text-white px-3 py-1 font-mono text-xs font-bold uppercase rounded shadow">
                {timelineEras[activeTimelineIdx].riskLevel}
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4 text-slate-700">
              <div className="text-xs font-mono text-[#C00000] font-bold uppercase tracking-wider">
                ERA {timelineEras[activeTimelineIdx].year} • {timelineEras[activeTimelineIdx].subtitle}
              </div>
              <h3 className="text-3xl font-extrabold text-[#0754AE] font-heading uppercase">
                {timelineEras[activeTimelineIdx].title}
              </h3>
              <p className="font-medium text-base leading-relaxed">
                {timelineEras[activeTimelineIdx].description}
              </p>

              <div className="p-4 bg-white rounded-lg border border-blue-200 font-mono text-xs space-y-1">
                <span className="text-slate-500 uppercase font-bold">KEY TECHNOLOGY & EQUIPMENT:</span>
                <div className="text-[#0754AE] font-bold text-sm">
                  {timelineEras[activeTimelineIdx].tech}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. The Science of Soil Pressure: Why Trenches Need Shoring */}
      <section className="py-24 bg-blueprint-grid border-b border-blue-200">
        <div className="container-custom">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white border border-blue-200 shadow-sm">
                <Activity className="w-3.5 h-3.5 text-[#C00000]" />
                <span className="text-xs font-mono font-bold text-[#0754AE] uppercase tracking-widest">
                  SOIL MECHANICS & LOAD PHYSICS
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0754AE] tracking-tight font-heading uppercase">
                THE PHYSICS BEHIND <br />
                <span className="text-[#2166D1]">SOIL PRESSURE</span>
              </h2>

              <p className="text-slate-700 font-medium text-base leading-relaxed">
                One cubic yard of soil can weigh as much as an automobile (2,700 to 3,000 lbs). When an un-shored trench wall is cut, lateral earth pressure creates intense sheer stress. Without engineered shoring panels, a cave-in occurs in less than a second.
              </p>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-4 bg-white rounded-lg border border-blue-200 flex justify-between items-center">
                  <div>
                    <div className="font-bold text-[#0754AE]">TYPE A SOIL (Cohesive Clay)</div>
                    <div className="text-slate-500 text-[11px]">Unconfined compressive strength &gt; 1.5 tons/sq ft</div>
                  </div>
                  <span className="px-2 py-1 bg-blue-100 text-[#0754AE] font-bold rounded">25° Angle</span>
                </div>

                <div className="p-4 bg-white rounded-lg border border-blue-200 flex justify-between items-center">
                  <div>
                    <div className="font-bold text-[#0754AE]">TYPE B SOIL (Granular Silt / Loam)</div>
                    <div className="text-slate-500 text-[11px]">Unconfined compressive strength 0.5 to 1.5 tons/sq ft</div>
                  </div>
                  <span className="px-2 py-1 bg-amber-100 text-amber-800 font-bold rounded">45° Angle</span>
                </div>

                <div className="p-4 bg-white rounded-lg border border-blue-200 flex justify-between items-center border-l-4 border-l-[#C00000]">
                  <div>
                    <div className="font-bold text-[#C00000]">TYPE C SOIL (Submerged Sand / Gravel)</div>
                    <div className="text-slate-500 text-[11px]">Unconfined compressive strength &lt; 0.5 tons/sq ft</div>
                  </div>
                  <span className="px-2 py-1 bg-red-100 text-[#C00000] font-bold rounded">34° Angle</span>
                </div>
              </div>
            </div>

            {/* Visual Formula Box */}
            <div className="lg:col-span-6 bg-white border-2 border-blue-300 rounded-2xl p-8 shadow-2xl font-mono space-y-6">
              <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                <span className="text-xs font-bold text-[#0754AE]">RANKINE LATERAL EARTH PRESSURE FORMULA</span>
                <span className="text-xs text-[#C00000] font-bold">PE CALCULATED</span>
              </div>

              <div className="p-6 bg-[#F0F7FF] rounded-xl border border-blue-200 text-center space-y-3">
                <div className="text-2xl font-extrabold text-[#0754AE]">
                  P<sub>a</sub> = ½ · γ · H² · K<sub>a</sub>
                </div>
                <p className="text-xs text-slate-600 font-sans">
                  Where <strong>γ</strong> = soil density, <strong>H</strong> = excavation depth, and <strong>K<sub>a</sub></strong> = active earth pressure coefficient.
                </p>
              </div>

              <div className="space-y-3 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2166D1]" />
                  <span>TU-8000 Steel Shields are rated to withstand up to <strong>1,450 PSF</strong> lateral force.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2166D1]" />
                  <span>100% Stamped PE calculation packets provided for municipal inspector approval.</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. What "EVERYTHING TRENCH" Means to Trench Unlimited */}
      <section className="py-24 bg-white border-b border-blue-200">
        <div className="container-custom">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#F0F7FF] border border-blue-200">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C00000]" />
              <span className="text-xs font-mono font-bold text-[#0754AE] uppercase tracking-widest">
                OUR BRAND MISSION
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0754AE] tracking-tight font-heading uppercase">
              WHAT <span className="text-[#2166D1]">“EVERYTHING TRENCH”</span> MEANS
            </h2>
            <p className="text-slate-700 font-medium text-base">
              Supporting the complete lifecycle of underground infrastructure from surface castings to deep flow.
            </p>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: '01',
                title: 'PROTECTION & SAFETY',
                desc: 'OSHA-compliant steel trench shields, aluminum shores, and safety ramps that protect crew lives on the jobsite.',
                icon: ShieldCheck
              },
              {
                num: '02',
                title: 'CONVEYANCE & FLOW',
                desc: 'High-density corrugated storm pipe, C900 pressure water mains, and pre-sloped polymer channel drainage systems.',
                icon: Layers
              },
              {
                num: '03',
                title: 'ACCESS & CONTAINMENT',
                desc: 'Precast concrete utility vaults, access shafts, valve structures, and heavy-duty AASHTO H-20 street castings.',
                icon: HardHat
              },
              {
                num: '04',
                title: 'ENCLOSURE & PROTECTION',
                desc: 'Snap-lock duct spacers, electrical conduit enclosures, and custom PE-stamped underground fittings.',
                icon: Compass
              }
            ].map((pillar) => {
              const IconComponent = pillar.icon;
              return (
                <div 
                  key={pillar.num}
                  className="bg-[#F0F7FF] border-2 border-blue-200 rounded-xl p-6 shadow-md hover:border-[#2166D1] transition-all space-y-4 flex flex-col justify-between"
                >
                  <div className="flex justify-between items-center border-b border-blue-200 pb-3">
                    <span className="font-mono text-2xl font-black text-[#C00000]">
                      {pillar.num}
                    </span>
                    <IconComponent className="w-6 h-6 text-[#0754AE]" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#0754AE] font-heading uppercase">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-700 font-medium leading-relaxed mt-2">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="pt-2 text-[10px] font-mono text-[#2166D1] font-bold uppercase">
                    SYSTEM PILLAR {pillar.num}
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Banner */}
          <div className="mt-16 text-center">
            <button 
              onClick={onExploreProducts}
              className="btn-primary text-sm py-4 px-8 shadow-xl"
            >
              EXPLORE OUR COMPLETE SYSTEM CATALOGUE
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};
