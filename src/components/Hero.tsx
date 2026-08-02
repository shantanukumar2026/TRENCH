import React from 'react';
import { ArrowRight, Phone, ShieldCheck, FileText, CheckCircle2, Award, ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onExploreProducts: () => void;
  onTalkToExpert: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProducts, onTalkToExpert }) => {
  return (
    <section id="hero" className="relative pt-28 pb-12 min-h-[calc(100vh-80px)] flex items-center bg-[#0B192C] bg-industrial-grid-dark border-b border-[#0085F4]/30 overflow-hidden text-white">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0085F4]/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/3 w-80 h-80 bg-[#00BBFF]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container-industrial relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Bold Copy & CTAs */}
          <div className="lg:col-span-6 space-y-5">
            
            {/* American Foundry Eyebrow */}
            <div className="flex items-center gap-2.5 whitespace-nowrap overflow-x-auto scrollbar-none">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-[#00BBFF]/40 backdrop-blur-md shrink-0">
                <span className="w-2 h-2 rounded-full bg-[#00BBFF] animate-pulse"></span>
                <span className="text-[11px] sm:text-xs font-mono font-extrabold text-[#00BBFF] tracking-wider uppercase">
                  AMERICAN CAST IRON &amp; FOUNDRY
                </span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/15 text-[11px] sm:text-xs font-mono font-bold text-blue-200 backdrop-blur-md shrink-0">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00BBFF]" />
                <span>ASTM A536 &amp; ADA CERTIFIED</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-hero-headline text-white uppercase tracking-tight">
                DESIGNER CAST IRON <br />
                <span className="gradient-text-cyan">TREE GRATES</span> &amp; TRENCH COVERS
              </h1>
              <div className="flex items-center gap-3 pt-1">
                <span className="w-12 h-1 bg-gradient-to-r from-[#0085F4] to-[#00BBFF]"></span>
                <span className="font-mono text-xs tracking-wider font-bold text-[#00BBFF] uppercase">
                  ARCHITECTURAL CASTINGS • URBAN STREETSCAPES • AASHTO H-20 IRON DRAINAGE
                </span>
              </div>
            </div>

            {/* Body Copy */}
            <p className="text-body-large text-slate-300 max-w-xl font-medium leading-relaxed">
              Architectural cast iron tree grates, ADA heel-proof trench covers, ductile iron heavy civil drainage channels, and custom foundry castings for municipal streetscapes.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onExploreProducts} 
                className="btn-brand-primary py-3 px-6 text-sm"
              >
                <span>EXPLORE CAST IRON PRODUCTS</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>

              <button 
                onClick={onTalkToExpert} 
                className="btn-brand-secondary bg-white/10 text-white border-[#0085F4] hover:bg-white/20 py-3 px-6 text-sm"
              >
                <Phone className="w-4 h-4 text-[#00BBFF]" />
                <span>REQUEST FOUNDRY QUOTE</span>
              </button>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-4 border-t border-white/15 grid grid-cols-3 gap-3 font-mono text-xs font-bold text-blue-200">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00BBFF] shrink-0" />
                <span>PE STAMPED CAD SPECS</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00BBFF] shrink-0" />
                <span>RAPID FOUNDRY DISPATCH</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00BBFF] shrink-0" />
                <span>ASTM A536 DUCTILE IRON</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Impact Site Media & Floating Telemetry Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative border-2 border-[#0085F4]/40 bg-[#0B192C] shadow-[0_25px_60px_rgba(0,74,173,0.4)] overflow-hidden group">
              
              <img 
                src="/images/assets/hero_iron_grate.png" 
                alt="Architectural Cast Iron Tree Grates & Trench Covers" 
                onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/c1b3988b-7b1c-49dd-a5cb-48c9ee3d3a02.png'; }}
                className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Photo Overlay Badge */}
              <div className="absolute top-4 left-4 bg-[#0B192C]/90 backdrop-blur-md text-white px-3.5 py-1.5 text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 border border-[#00BBFF]/30">
                <Award className="w-4 h-4 text-[#00BBFF]" />
                <span>DESIGNER ARCHITECTURAL CASTINGS</span>
              </div>

              {/* Floating Engineering Telemetry Card */}
              <div className="absolute bottom-4 left-4 right-4 glass-card-dark p-4 text-white">
                <div className="flex justify-between items-center pb-2 border-b border-white/15">
                  <span className="font-mono text-xs font-bold text-[#00BBFF] uppercase">SYSTEM SPEC // TU-TG-SQ44-ADA</span>
                  <span className="text-[10px] font-mono font-extrabold bg-[#0085F4]/30 text-white px-2 py-0.5 border border-[#00BBFF]/40">
                    ADA COMPLIANT
                  </span>
                </div>
                <div className="mt-2 grid grid-cols-2 gap-3 text-xs font-mono">
                  <div>
                    <span className="text-slate-400 block text-[10px]">SLOT GEOMETRY:</span>
                    <strong className="text-white text-xs">1/4" MAX HEEL-PROOF</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">FOUNDRY SPEC:</span>
                    <strong className="text-white text-xs">ASTM A536 DUCTILE IRON</strong>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
