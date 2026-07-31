import React from 'react';
import { ArrowRight, Phone, ShieldCheck } from 'lucide-react';

interface FinalCTAProps {
  onRequestQuote: () => void;
  onTalkToTeam: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onRequestQuote, onTalkToTeam }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0066FF] to-[#0052CC] text-white relative overflow-hidden border-t-4 border-[#00BBFF]">
      
      {/* Soft Glowing Ambient Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container-custom relative z-10 text-center max-w-4xl mx-auto space-y-6">
        
        {/* High-Contrast Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/15 border border-white/30 shadow-sm">
          <ShieldCheck className="w-4 h-4 text-[#FFFFFF]" />
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#FFFFFF]">
            FIELD READY INFRASTRUCTURE SOLUTIONS
          </span>
        </div>

        {/* High-Contrast Bold Headline */}
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight font-heading uppercase leading-tight text-white">
          WHAT DOES YOUR <br />
          <span className="text-[#E0F2FE]">NEXT PROJECT NEED?</span>
        </h2>

        {/* Accent Bar */}
        <div className="flex justify-center">
          <span className="h-1.5 w-16 bg-white"></span>
        </div>

        {/* Subtext */}
        <p className="text-base sm:text-lg text-blue-100 font-medium leading-relaxed max-w-2xl mx-auto">
          Tell us what you're building. Our engineering team will help identify the right steel trench shields, aluminum hydraulic shores, or road plates for your jobsite.
        </p>

        {/* High-Visibility Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={onRequestQuote}
            className="px-8 py-4 bg-white hover:bg-blue-50 text-[#004AAD] font-heading font-extrabold text-sm uppercase tracking-wider shadow-lg flex items-center justify-center gap-2.5 transition-all"
          >
            <span>REQUEST A QUOTE</span>
            <ArrowRight className="w-4 h-4 text-[#004AAD]" />
          </button>

          <button 
            onClick={onTalkToTeam}
            className="px-8 py-4 bg-transparent hover:bg-white/15 text-white border-2 border-white font-heading font-extrabold text-sm uppercase tracking-wider shadow-lg flex items-center justify-center gap-2.5 transition-all"
          >
            <Phone className="w-4 h-4 text-white" />
            <span>TALK TO OUR TEAM</span>
          </button>
        </div>

        {/* Footer Subtext */}
        <div className="pt-6 text-xs font-mono font-bold text-blue-100 uppercase tracking-widest">
          TRENCH UNLIMITED™ — EVERYTHING TRENCH.....
        </div>

      </div>
    </section>
  );
};
