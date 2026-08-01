import React from 'react';
import { ArrowRight, Phone, ShieldCheck, FileText, CheckCircle2, Award, ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onExploreProducts: () => void;
  onTalkToExpert: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProducts, onTalkToExpert }) => {
  return (
    <section id="hero" className="relative pt-32 pb-20 bg-industrial-grid border-b-2 border-[#0085F4]/20 overflow-hidden">
      <div className="container-industrial relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bold Industrial Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* American Infrastructure Eyebrow */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#F0F7FF] border-2 border-[#0085F4]">
                <span className="w-2.5 h-2.5 bg-[#0085F4] animate-pulse"></span>
                <span className="text-xs font-mono font-extrabold text-[#004AAD] tracking-widest uppercase">
                  AMERICAN TRENCH SAFETY MANUFACTURER
                </span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[#E2E8F0] text-xs font-mono font-bold text-[#004AAD]">
                <ShieldCheck className="w-4 h-4 text-[#0085F4]" />
                <span>OSHA 1926 SUBPART P CERTIFIED</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-hero-headline text-[#004AAD] uppercase">
                TRENCH SAFETY &amp; <br />
                <span className="text-[#0085F4]">UNDERGROUND</span> INFRASTRUCTURE
              </h1>
              <div className="flex items-center gap-3 pt-2">
                <span className="w-16 h-1.5 bg-[#00BBFF]"></span>
                <span className="text-label-caps text-[#004AAD]">
                  CIVIL EXCAVATION • WATERWORKS • DRAINAGE • UTILITIES
                </span>
              </div>
            </div>

            {/* Body Copy */}
            <p className="text-body-large text-[#475569] max-w-2xl font-medium">
              Engineered steel trench boxes, aluminum hydraulic shoring, slide rail panels, and AASHTO H-20 road plates built for heavy civil contractors, municipalities, and utility infrastructure teams.
            </p>

            {/* CTAs & Quick Info */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onExploreProducts} 
                className="btn-brand-primary"
              >
                <span>EXPLORE TRENCH SYSTEMS</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button 
                onClick={onTalkToExpert} 
                className="btn-brand-secondary"
              >
                <Phone className="w-5 h-5" />
                <span>REQUEST COMMERCIAL QUOTE</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-[#E2E8F0] grid grid-cols-3 gap-4 text-xs font-mono font-bold text-[#004AAD]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0085F4]" />
                <span>PE STAMPED TAB DATA</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0085F4]" />
                <span>RAPID JOBSITE DELIVERY</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0085F4]" />
                <span>100% HEAVY STEEL GRADE</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Impact Real Excavation Photography & Floating Engineering Specs Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative border-4 border-[#004AAD] bg-white shadow-2xl overflow-hidden group">
              
              {/* Real Photography Asset */}
              <img 
                src="/images/assets/gettyimages-1479422287-1024x1024.jpg" 
                alt="Heavy Civil Trench Excavation & Steel Shoring Box Installation" 
                className="w-full h-[480px] object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Photo Overlay Badge */}
              <div className="absolute top-4 left-4 bg-[#004AAD] text-white px-3.5 py-1.5 text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2">
                <Award className="w-4 h-4 text-[#00BBFF]" />
                <span>HEAVY CIVIL EXCAVATION SITE</span>
              </div>

              {/* Floating Engineering Specs Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md border-2 border-[#0085F4] p-4 text-[#004AAD]">
                <div className="flex justify-between items-center pb-2 border-b border-[#E2E8F0]">
                  <span className="font-mono text-xs font-bold text-[#0085F4] uppercase">SYSTEM SPECIFICATION // TU-8000</span>
                  <span className="text-xs font-mono font-bold bg-[#F0F7FF] text-[#004AAD] px-2 py-0.5 border border-[#0085F4]">
                    OSHA CERTIFIED
                  </span>
                </div>
                <div className="mt-2 grid grid-cols-2 gap-2 text-xs font-mono">
                  <div>
                    <span className="text-[#475569] block">LATERAL RATING:</span>
                    <strong className="text-[#004AAD]">1,450 PSF TYPE C SOIL</strong>
                  </div>
                  <div>
                    <span className="text-[#475569] block">MAX TRENCH DEPTH:</span>
                    <strong className="text-[#004AAD]">30 FT CERTIFIED</strong>
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
