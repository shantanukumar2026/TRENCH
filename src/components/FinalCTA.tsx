import React from 'react';
import { ArrowRight, Phone, ShieldCheck } from 'lucide-react';

interface FinalCTAProps {
  onRequestQuote: () => void;
  onTalkToTeam: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onRequestQuote, onTalkToTeam }) => {
  return (
    <section className="py-24 bg-trench-gradient text-white relative overflow-hidden">
      {/* Background Animated Blueprint Lines */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

      <div className="container-custom relative z-10 text-center max-w-4xl mx-auto space-y-8">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/10 backdrop-blur-md border border-white/20">
          <ShieldCheck className="w-4 h-4 text-[#C00000]" />
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-blue-100">
            FIELD READY INFRASTRUCTURE SOLUTIONS
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-heading uppercase leading-none">
          WHAT DOES YOUR <br />
          <span className="text-blue-200">NEXT PROJECT NEED?</span>
        </h2>

        {/* Precision Red Line */}
        <div className="flex justify-center">
          <span className="h-1 w-16 bg-[#C00000] rounded"></span>
        </div>

        {/* Subtext */}
        <p className="text-lg text-blue-100 font-medium leading-relaxed max-w-2xl mx-auto">
          Tell us what you're building. Our engineering team will help identify the right trench shoring, access vaults, drainage, and utility piping system for your jobsite.
        </p>

        {/* Actions */}
        <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={onRequestQuote}
            className="btn-red text-sm py-4 px-8 shadow-2xl"
          >
            REQUEST A QUOTE
            <ArrowRight className="w-4 h-4" />
          </button>

          <button 
            onClick={onTalkToTeam}
            className="btn-ghost-white text-sm py-4 px-8"
          >
            <Phone className="w-4 h-4 text-white" />
            TALK TO OUR TEAM
          </button>
        </div>

        {/* Footer Subtext */}
        <div className="pt-8 text-xs font-mono text-blue-200">
          TRENCH UNLIMITED™ — EVERYTHING TRENCH.....
        </div>

      </div>
    </section>
  );
};
