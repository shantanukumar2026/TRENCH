import React from 'react';
import { ArrowRight, Phone, Shield } from 'lucide-react';
import { Hero3DCanvas } from './Hero3DCanvas';

interface HeroProps {
  onExploreProducts: () => void;
  onTalkToExpert: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProducts, onTalkToExpert }) => {
  return (
    <section id="hero" className="relative pt-36 pb-20 bg-blueprint-grid overflow-hidden border-b border-blue-200">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#2166D1]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#0754AE]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Narrative */}
          <div className="lg:col-span-5 space-y-6 text-left">
            {/* Small Technical Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-white border border-blue-200 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#2166D1] animate-ping"></span>
              <span className="text-xs font-mono font-bold text-[#0754AE] tracking-widest uppercase">
                TRENCH &amp; UNDERGROUND INFRASTRUCTURE
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-extrabold text-[#0754AE] tracking-tight leading-none uppercase font-heading">
              EVERYTHING <br />
              <span className="text-[#2166D1]">TRENCH.</span>
            </h1>

            {/* Precision Blue Accent Line */}
            <div className="flex items-center gap-3">
              <span className="blue-accent-bar"></span>
              <span className="text-xs font-mono text-[#0754AE] font-bold uppercase tracking-wider">
                ENGINEERED INFRASTRUCTURE SYSTEMS
              </span>
            </div>

            {/* Supporting Statement */}
            <p className="text-lg text-[#163B66] font-medium leading-relaxed">
              Engineered products, equipment and infrastructure solutions for the systems that keep America moving. Standardized &amp; custom underground trench protection, access, drainage, and utility networks.
            </p>

            {/* Call To Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onExploreProducts} 
                className="btn-primary text-sm py-4 px-7 shadow-lg"
              >
                EXPLORE PRODUCTS
                <ArrowRight className="w-4 h-4" />
              </button>

              <button 
                onClick={onTalkToExpert} 
                className="btn-secondary text-sm py-4 px-7"
              >
                <Phone className="w-4 h-4 text-[#0754AE]" />
                TALK TO AN EXPERT
              </button>
            </div>

            {/* Technical Trust Strip */}
            <div className="pt-6 border-t border-blue-200/80 grid grid-cols-3 gap-4 text-left">
              <div>
                <div className="text-xs font-mono text-slate-500 uppercase">OSHA COMPLIANT</div>
                <div className="text-sm font-bold text-[#0754AE] font-mono">SUBPART P</div>
              </div>
              <div>
                <div className="text-xs font-mono text-slate-500 uppercase">TRAFFIC RATING</div>
                <div className="text-sm font-bold text-[#0754AE] font-mono">AASHTO H-20</div>
              </div>
              <div>
                <div className="text-xs font-mono text-slate-500 uppercase">CAD &amp; BIM</div>
                <div className="text-sm font-bold text-[#2166D1] font-mono">READY (.DWG)</div>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Interactive Underground Cutaway Engine */}
          <div className="lg:col-span-7">
            <Hero3DCanvas />
          </div>

        </div>
      </div>
    </section>
  );
};
