import React from 'react';
import { ArrowRight, Phone, ShieldCheck } from 'lucide-react';

interface FinalCTAProps {
  onRequestQuote: () => void;
  onTalkToTeam: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onRequestQuote, onTalkToTeam }) => {
  return (
    <section className="py-20 bg-[#004AAD] text-white relative overflow-hidden border-t-4 border-[#0085F4]">
      <div className="container-industrial relative z-10 text-center max-w-4xl mx-auto space-y-6">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0085F4] border border-[#00BBFF] text-xs font-mono font-bold uppercase tracking-widest text-white">
          <ShieldCheck className="w-4 h-4 text-[#00BBFF]" />
          <span>FIELD READY INFRASTRUCTURE SOLUTIONS</span>
        </div>

        {/* Headline */}
        <h2 className="text-section-title text-white uppercase leading-tight">
          WHAT DOES YOUR <br />
          <span className="text-[#00BBFF]">NEXT EXCAVATION NEED?</span>
        </h2>

        {/* Accent Bar */}
        <div className="flex justify-center">
          <span className="h-1.5 w-16 bg-[#00BBFF]"></span>
        </div>

        {/* Subtext */}
        <p className="text-body-large text-blue-100 font-medium max-w-2xl mx-auto">
          Tell us what you're building. Our civil estimation team will specify the certified steel trench shields, hydraulic shores, slide rail panels, or road plates for your jobsite.
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={onRequestQuote}
            className="btn-brand-primary bg-white text-[#004AAD] border-white hover:bg-[#F0F7FF] hover:text-[#004AAD]"
          >
            <span>REQUEST COMMERCIAL QUOTE</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <button 
            onClick={onTalkToTeam}
            className="btn-brand-secondary bg-transparent text-white border-white hover:bg-[#0085F4] hover:text-white"
          >
            <Phone className="w-5 h-5" />
            <span>TALK TO OUR TEAM</span>
          </button>
        </div>

      </div>
    </section>
  );
};
