import React from 'react';
import { ArrowRight, Phone, CheckCircle, Compass, Layers } from 'lucide-react';
import { ProductStage3DCanvas } from './ProductStage3DCanvas';

interface HeroTwoProps {
  onExploreProducts: () => void;
  onTalkToExpert: () => void;
}

export const HeroTwo: React.FC<HeroTwoProps> = ({ onExploreProducts, onTalkToExpert }) => {
  return (
    <section id="hero-two" className="relative pt-32 pb-24 md:pt-36 md:pb-32 min-h-[92vh] flex items-center bg-[#0A1628] overflow-hidden text-white border-b border-slate-800">
      
      {/* High-Resolution Industrial Background Image */}
      <div className="absolute inset-0 z-0">
        <video
          src="/examples/13223381_3840_2160_30fps.mp4"
          poster="/examples/Somerville-03.jpg"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-25 mix-blend-luminosity filter brightness-90 scale-105"
        />
        {/* CAD Blueprint SVG Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, #F97316 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px, 40px 40px, 40px 40px'
          }}
        ></div>

        {/* Gradient Lighting Vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/90 to-[#0A1628]/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-[#0A1628]/80"></div>
      </div>

      <div className="container-industrial relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Industrial Typography & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-white/5 border border-slate-700/80 rounded-full text-xs font-mono font-bold text-[#F97316]">
              <span className="w-2 h-2 rounded-full bg-[#F97316] animate-ping"></span>
              <Compass className="w-3.5 h-3.5" />
              <span>HEAVY CIVIL &amp; FOUNDRY INFRASTRUCTURE</span>
            </div>

            {/* Headline & Subheading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-[1.06]">
                Engineered Cast Iron <br />
                <span className="gradient-text-orange">Drainage Systems</span>
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-slate-200 tracking-tight">
                Designed for Municipal • Commercial • Industrial Applications
              </p>
            </div>

            {/* Body Copy */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              Precision ductile &amp; gray iron trench covers, architectural tree grates, and heavy-duty storm inlets. Manufactured to ASTM A536 &amp; EN124 F900 standards for extreme load conditions.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onExploreProducts} 
                className="group bg-[#0F2C59] hover:bg-[#1F2937] text-white border border-slate-600/80 px-8 py-4 rounded-lg text-base font-bold transition-all shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2.5"
              >
                <span>View Engineering Details</span>
                <ArrowRight className="w-5 h-5 text-[#F97316] group-hover:translate-x-1 transition-transform" />
              </button>

              <button 
                onClick={onTalkToExpert} 
                className="bg-[#F97316] hover:bg-[#EA580C] text-white px-8 py-4 rounded-lg text-base font-bold transition-all shadow-lg hover:shadow-orange-500/25 hover:-translate-y-0.5 flex items-center justify-center gap-2.5"
              >
                <Phone className="w-4 h-4" />
                <span>Request Quote</span>
              </button>
            </div>

            {/* Trust Specifications Bar */}
            <div className="pt-6 border-t border-slate-800/90 grid grid-cols-3 gap-4 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#F97316] shrink-0" />
                <span>PE STAMPED DWG / STEP</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#F97316] shrink-0" />
                <span>LOAD CLASS A15–F900</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#F97316] shrink-0" />
                <span>ASTM A536 FOUNDRY SPEC</span>
              </div>
            </div>

          </div>

          {/* Right Column: Rotating 3D Grate Interactive Stage */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl border border-slate-800 bg-[#0F1E36] p-3 shadow-2xl overflow-hidden group">
              
              {/* CAD Overlay Header Bar */}
              <div className="bg-[#0A1628] px-4 py-2.5 rounded-t-xl border-b border-slate-800 flex justify-between items-center text-xs font-mono">
                <span className="text-[#F97316] font-bold flex items-center gap-2">
                  <Layers className="w-4 h-4" />
                  3D DRAINAGE ASSEMBLY CANVAS
                </span>
                <span className="text-slate-400">ROTATING STAGE</span>
              </div>

              {/* 3D Grate Model Canvas */}
              <ProductStage3DCanvas isExploded={false} viewMode="3d" />

              {/* Blueprint CAD Spec Overlay Card */}
              <div className="p-4 bg-slate-900/90 rounded-b-xl border-t border-slate-800 grid grid-cols-2 gap-4 text-xs font-mono">
                <div>
                  <span className="text-slate-400 block text-[10px]">MATERIAL GRADE</span>
                  <strong className="text-slate-100">ASTM A536 80-55-06</strong>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">PROOF LOAD CAPACITY</span>
                  <strong className="text-[#F97316]">900 kN (EN124 F900)</strong>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
