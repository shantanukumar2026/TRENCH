import React, { useState } from 'react';
import { ArrowRight, Phone, ShieldCheck } from 'lucide-react';
import { Hero3DCanvas } from './Hero3DCanvas';

interface HeroProps {
  onExploreProducts: () => void;
  onTalkToExpert: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProducts, onTalkToExpert }) => {
  const [selectedMobileCallout, setSelectedMobileCallout] = useState<number>(1);

  const mobileCallouts = [
    { id: 1, number: '01', title: 'TRENCH SHIELD', desc: 'Worker protection system' },
    { id: 2, number: '02', title: 'PIPE SYSTEM', desc: 'Underground water / sewer infrastructure' },
    { id: 3, number: '03', title: 'UTILITY BEDDING', desc: 'Engineered pipe support' },
    { id: 4, number: '04', title: 'EXCAVATION ZONE', desc: 'Controlled underground workspace' },
    { id: 5, number: '05', title: 'ROAD SURFACE', desc: 'Surface infrastructure' }
  ];

  return (
    <section id="hero" className="relative pt-32 pb-16 bg-[#F7FAFE] overflow-hidden border-b-2 border-[#0085F4]/20 selection:bg-[#0085F4] selection:text-white">
      
      {/* Background Subtle Blueprint Grid (5-8% Opacity) & Soft Blue Radial Glow */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-8 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#0085F4]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Technical Industrial Introduction */}
          <div className="lg:col-span-5 space-y-6 text-left order-1">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-[#0085F4]/30 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#0085F4] animate-ping"></span>
              <span className="text-xs font-mono font-bold text-[#004AAD] tracking-widest uppercase">
                TRENCH &amp; UNDERGROUND INFRASTRUCTURE
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight leading-none uppercase font-heading">
              <span className="text-[#004AAD] block">EVERYTHING</span>
              <span className="text-[#0085F4] block">TRENCH.</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#475569] font-medium leading-relaxed">
              Engineered products, equipment and infrastructure solutions for the systems that keep America moving. Standardized &amp; custom underground trench protection, access, drainage, and utility networks.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onExploreProducts} 
                className="btn-primary text-sm py-4 px-7 shadow-lg flex items-center justify-center gap-2"
              >
                <span>EXPLORE PRODUCTS</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>

              <button 
                onClick={onTalkToExpert} 
                className="btn-secondary text-sm py-4 px-7 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#004AAD]" />
                <span>TALK TO AN EXPERT</span>
              </button>
            </div>
          </div>

          {/* Right Column: 3D Underground Infrastructure Cutaway */}
          <div className="lg:col-span-7 order-2 w-full overflow-hidden">
            <Hero3DCanvas />

            {/* Mobile Callouts Horizontal 01–05 Selector (<=768px) */}
            <div className="block sm:hidden mt-4 space-y-3 font-mono">
              <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
                {mobileCallouts.map((mc) => (
                  <button
                    key={mc.id}
                    onClick={() => setSelectedMobileCallout(mc.id)}
                    className={`px-3 py-2 text-xs font-bold shrink-0 border transition-all ${
                      selectedMobileCallout === mc.id
                        ? 'bg-[#004AAD] text-white border-[#004AAD]'
                        : 'bg-white text-[#004AAD] border-[#0085F4]/30'
                    }`}
                  >
                    {mc.number} {mc.title}
                  </button>
                ))}
              </div>

              <div className="p-3 bg-white border border-[#0085F4]/30">
                <span className="font-bold text-[#004AAD] text-xs uppercase block">
                  {mobileCallouts[selectedMobileCallout - 1].number} {mobileCallouts[selectedMobileCallout - 1].title}
                </span>
                <span className="text-xs text-[#475569] block mt-0.5">
                  {mobileCallouts[selectedMobileCallout - 1].desc}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
