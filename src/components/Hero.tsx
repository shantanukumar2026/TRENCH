import React from 'react';
import { ArrowRight, Phone, ShieldCheck, FileText, CheckCircle2, Award, ArrowUpRight } from 'lucide-react';
import { Hero3DCanvas } from './Hero3DCanvas';

interface HeroProps {
  onExploreProducts: () => void;
  onTalkToExpert: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProducts, onTalkToExpert }) => {
  return (
    <section id="hero" className="relative pt-36 pb-24 bg-[#0B192C] bg-industrial-grid-dark border-b border-[#0085F4]/30 overflow-hidden text-white">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0085F4]/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/3 w-80 h-80 bg-[#00BBFF]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container-industrial relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bold Copy & CTAs */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* American Infrastructure Eyebrow */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 border border-[#00BBFF]/40 backdrop-blur-md rounded-none">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00BBFF] animate-pulse"></span>
                <span className="text-xs font-mono font-extrabold text-[#00BBFF] tracking-widest uppercase">
                  AMERICAN TRENCH SAFETY MANUFACTURER
                </span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/15 text-xs font-mono font-bold text-blue-200 backdrop-blur-md">
                <ShieldCheck className="w-4 h-4 text-[#00BBFF]" />
                <span>OSHA 1926 SUBPART P CERTIFIED</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-hero-headline text-white uppercase tracking-tight">
                TRENCH SAFETY &amp; <br />
                <span className="gradient-text-cyan">UNDERGROUND</span> INFRASTRUCTURE
              </h1>
              <div className="flex items-center gap-3 pt-2">
                <span className="w-16 h-1.5 bg-gradient-to-r from-[#0085F4] to-[#00BBFF]"></span>
                <span className="font-mono text-xs tracking-widest font-bold text-[#00BBFF] uppercase">
                  CIVIL EXCAVATION • WATERWORKS • DRAINAGE • UTILITIES
                </span>
              </div>
            </div>

            {/* Body Copy */}
            <p className="text-body-large text-slate-300 max-w-2xl font-medium leading-relaxed">
              Engineered steel trench boxes, aluminum hydraulic shoring, modular slide rail systems, and AASHTO H-20 road plates built for heavy civil contractors, municipalities, and utility infrastructure teams.
            </p>

            {/* CTAs & Quick Info */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onExploreProducts} 
                className="btn-brand-primary"
              >
                <span>EXPLORE TRENCH SYSTEMS</span>
                <ArrowRight className="w-5 h-5 text-white" />
              </button>

              <button 
                onClick={onTalkToExpert} 
                className="btn-brand-secondary bg-white/10 text-white border-[#0085F4] hover:bg-white/20"
              >
                <Phone className="w-5 h-5 text-[#00BBFF]" />
                <span>REQUEST COMMERCIAL QUOTE</span>
              </button>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-6 border-t border-white/15 grid grid-cols-3 gap-4 font-mono text-xs font-bold text-blue-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00BBFF]" />
                <span>PE STAMPED TAB DATA</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00BBFF]" />
                <span>RAPID JOBSITE DELIVERY</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00BBFF]" />
                <span>100% HEAVY STEEL GRADE</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Impact Site Media & Floating Telemetry Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative border-2 border-[#0085F4]/40 bg-[#0B192C] shadow-[0_25px_60px_rgba(0,74,173,0.4)] overflow-hidden group">
              
              {/* Original Real Heavy Civil Site Photo (No Faces) */}
              <img 
                src="/images/assets/gettyimages-1479422287-1024x1024.jpg" 
                alt="Heavy Civil Trench Excavation & Steel Shoring Box Installation" 
                onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/logo.png'; }}
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Photo Overlay Badge */}
              <div className="absolute top-4 left-4 bg-[#0B192C]/90 backdrop-blur-md text-white px-3.5 py-1.5 text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 border border-[#00BBFF]/30">
                <Award className="w-4 h-4 text-[#00BBFF]" />
                <span>HEAVY CIVIL EXCAVATION SITE</span>
              </div>

              {/* Floating Engineering Telemetry Card */}
              <div className="absolute bottom-4 left-4 right-4 glass-card-dark p-4 text-white">
                <div className="flex justify-between items-center pb-2.5 border-b border-white/15">
                  <span className="font-mono text-xs font-bold text-[#00BBFF] uppercase">SYSTEM SPECIFICATION // TU-8000</span>
                  <span className="text-[11px] font-mono font-extrabold bg-[#0085F4]/30 text-white px-2 py-0.5 border border-[#00BBFF]/40">
                    OSHA CERTIFIED
                  </span>
                </div>
                <div className="mt-2.5 grid grid-cols-2 gap-3 text-xs font-mono">
                  <div>
                    <span className="text-slate-400 block text-[10px]">LATERAL RATING:</span>
                    <strong className="text-white text-xs">1,450 PSF TYPE C SOIL</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">MAX TRENCH DEPTH:</span>
                    <strong className="text-white text-xs">30 FT CERTIFIED</strong>
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
