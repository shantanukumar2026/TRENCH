import React, { useState } from 'react';
import { ArrowRight, Phone, ChevronRight, Plus } from 'lucide-react';

interface HeroProps {
  onExploreProducts: () => void;
  onTalkToExpert: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProducts, onTalkToExpert }) => {
  const [isPhotoHovered, setIsPhotoHovered] = useState(false);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number | null>(null);

  const heroCategories = [
    { number: '01', name: 'TRENCH PROTECTION', catId: 'safety-protection' },
    { number: '02', name: 'EXCAVATION', catId: 'excavation-equipment' },
    { number: '03', name: 'WATER & SEWER', catId: 'water-sewer' },
    { number: '04', name: 'DRAINAGE', catId: 'drainage-stormwater' },
    { number: '05', name: 'UTILITY', catId: 'utility-conduit-electrical' },
    { number: '06', name: 'TOOLS & EQUIPMENT', catId: 'trench-tools-jobsite-equipment' }
  ];

  return (
    <section id="hero" className="relative pt-20 pb-6 bg-[#F7FAFE] overflow-hidden min-h-[640px] flex flex-col justify-between border-b-2 border-[#0085F4]/20 selection:bg-[#0085F4] selection:text-white">
      
      {/* Background Subtle 4-6% Blue Blueprint Grid & Soft Blue Radial Glow */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-5 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#0085F4]/8 rounded-full blur-3xl pointer-events-none"></div>

      {/* Decorative Technical Crosshairs & Coordinate Marks */}
      <div className="absolute top-28 left-8 text-[#0085F4]/20 font-mono text-xs flex items-center gap-1 pointer-events-none hidden sm:flex">
        <Plus className="w-3.5 h-3.5 text-[#0085F4]/30" />
        <span>SYS.REF // 41.8781° N, 87.6298° W</span>
      </div>

      <div className="container-custom relative z-10 my-auto">
        {/* Desktop 44% Left / 56% Right Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT CONTENT (44% on Desktop - 5 columns) */}
          <div className="lg:col-span-5 space-y-6 text-left order-1">
            
            {/* Small Outlined Eyebrow with American Infrastructure Badge */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-[#0085F4]/30 shadow-sm rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#0085F4] animate-ping"></span>
                <span className="text-xs font-mono font-bold text-[#004AAD] tracking-widest uppercase">
                  TRENCH &amp; UNDERGROUND INFRASTRUCTURE
                </span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#0085F4]/20 shadow-sm text-xs font-mono font-bold text-[#004AAD]">
                <span>🇺🇸</span>
                <span>U.S. INFRASTRUCTURE CERTIFIED</span>
              </div>
            </div>

            {/* Large Typography Headline */}
            <div className="space-y-1">
              <h1 className="text-5xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight leading-none uppercase font-heading">
                <span className="text-[#004AAD] block">EVERYTHING</span>
                <span className="text-[#0085F4] block">TRENCH.</span>
              </h1>
              <div className="flex items-center gap-2 pt-1">
                <span className="w-12 h-1 bg-[#00BBFF]"></span>
                <span className="text-xs font-mono font-bold text-[#004AAD] tracking-wider uppercase">
                  ENGINEERED INFRASTRUCTURE SOLUTIONS
                </span>
              </div>
            </div>

            {/* Description (2-3 Lines on Desktop) */}
            <p className="text-base sm:text-lg text-[#5B7FA5] font-medium leading-relaxed max-w-xl">
              Trench protection, underground utility, waterworks and excavation solutions engineered for demanding infrastructure projects.
            </p>

            {/* CTAs */}
            <div className="pt-3 flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onExploreProducts} 
                className="btn-primary text-sm py-4 px-8 shadow-lg shadow-[#0085F4]/20 flex items-center justify-center gap-2.5 rounded-none"
              >
                <span>EXPLORE PRODUCTS</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>

              <button 
                onClick={onTalkToExpert} 
                className="btn-secondary text-sm py-4 px-8 flex items-center justify-center gap-2.5 rounded-none"
              >
                <Phone className="w-4 h-4 text-[#004AAD]" />
                <span>TALK TO AN EXPERT</span>
              </button>
            </div>
          </div>

          {/* RIGHT PHOTOGRAPHY (56% on Desktop - 7 columns) */}
          <div className="lg:col-span-7 order-2 relative group">
            
            {/* Main Photo Container with 24px Rounded Corners & Object Fit Cover */}
            <div 
              onMouseEnter={() => setIsPhotoHovered(true)}
              onMouseLeave={() => setIsPhotoHovered(false)}
              className="relative h-[380px] sm:h-[480px] lg:h-[540px] w-full rounded-3xl overflow-hidden shadow-2xl shadow-[#0085F4]/15 border-2 border-[#0085F4]/20 transition-all duration-700"
            >
              {/* High-Quality Real Local U.S. Underground Trench Construction Photograph */}
              <img
                src="/images/assets/gettyimages-1479422287-1024x1024.jpg"
                alt="Modern infrastructure water treatment facility aerial view"
                className={`w-full h-full object-cover transition-transform duration-1000 ease-out ${
                  isPhotoHovered ? 'scale-[1.03]' : 'scale-100'
                }`}
              />

              {/* Subtle Light-Blue Gradient Transition Between Content & Photo (White -> Transparent) */}
              <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#F7FAFE] to-transparent pointer-events-none"></div>

              {/* FLOATING PHOTO CALLOUT (Lower-Left Over Image) */}
              <div className="absolute bottom-6 left-6 max-w-xs sm:max-w-sm bg-white/95 backdrop-blur-md p-5 rounded-2xl border-2 border-[#0085F4]/20 shadow-xl shadow-[#0085F4]/10 space-y-2 z-20 text-left">
                <div className="flex items-center gap-2 font-mono text-[11px] font-bold text-[#0085F4]">
                  <span>01 / FIELD SOLUTIONS</span>
                </div>
                <h4 className="text-sm font-bold text-[#004AAD] font-heading uppercase leading-snug">
                  BUILT FOR THE REAL WORLD.
                </h4>
                <p className="text-xs text-[#5B7FA5] font-mono">
                  Trench protection • Utility • Waterworks
                </p>
                <button
                  onClick={onExploreProducts}
                  className="pt-1 flex items-center gap-1.5 text-xs font-mono font-bold text-[#0085F4] hover:text-[#004AAD] transition-colors"
                >
                  <span>EXPLORE SOLUTIONS</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#0085F4]" />
                </button>
              </div>

            </div>

            {/* Decorative Corner Coordinate Mark */}
            <div className="absolute -top-3 -right-3 text-[#0085F4]/30 font-mono text-[10px] hidden sm:block">
              + REF 04-B
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM CATEGORY RAIL */}
      <div className="container-custom pt-8 relative z-20">
        <div className="border-t-2 border-[#0085F4]/20 pt-6">
          <div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-none justify-between">
            {heroCategories.map((cat, idx) => {
              const isHovered = activeCategoryIndex === idx;
              return (
                <div
                  key={cat.catId}
                  onClick={onExploreProducts}
                  onMouseEnter={() => setActiveCategoryIndex(idx)}
                  onMouseLeave={() => setActiveCategoryIndex(null)}
                  className="shrink-0 cursor-pointer group space-y-1.5 py-1 px-2 transition-colors min-w-[140px] text-left"
                >
                  <div className="flex items-center gap-2 font-mono text-xs font-bold">
                    <span className={`transition-colors ${isHovered ? 'text-[#00BBFF]' : 'text-[#004AAD]'}`}>
                      {cat.number}
                    </span>
                    <span className={`transition-colors uppercase font-heading text-xs font-extrabold ${
                      isHovered ? 'text-[#0085F4]' : 'text-[#004AAD]'
                    }`}>
                      {cat.name}
                    </span>
                  </div>

                  {/* Thin Cyan Line Expands On Hover */}
                  <div className="h-[2px] w-full bg-[#0085F4]/20 relative overflow-hidden">
                    <div className={`absolute inset-0 bg-[#00BBFF] transition-transform duration-300 ${
                      isHovered ? 'translate-x-0' : '-translate-x-full'
                    }`}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </section>
  );
};
