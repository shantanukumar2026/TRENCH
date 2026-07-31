import React from 'react';
import { ShieldCheck, HardHat, Truck, Award, CheckCircle2 } from 'lucide-react';

export const CompanyProfile: React.FC = () => {
  return (
    <section id="company" className="py-24 bg-white border-b border-blue-200 relative">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#F0F7FF] border border-blue-200">
            <HardHat className="w-3.5 h-3.5 text-[#C00000]" />
            <span className="text-xs font-mono font-bold text-[#0754AE] uppercase tracking-widest">
              ABOUT TRENCH UNLIMITED™
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0754AE] tracking-tight font-heading uppercase">
            BUILT AROUND <span className="text-[#2166D1]">THE JOBSITE.</span>
          </h2>
          <div className="flex justify-center items-center gap-2">
            <span className="red-accent-bar"></span>
            <p className="text-slate-700 font-medium text-base">
              Dependable American engineering & supply for underground infrastructure professionals.
            </p>
          </div>
        </div>

        {/* Narrative & Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Authentic Jobsite Image */}
          <div className="lg:col-span-6 relative rounded-xl overflow-hidden shadow-2xl border-2 border-blue-200">
            <img 
              src="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1000&q=80" 
              alt="Trench Unlimited Infrastructure Jobsite" 
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80';
              }}
              className="w-full h-[440px] object-cover"
            />
            {/* Tonal Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0754AE]/80 via-transparent to-transparent"></div>
            
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1 font-mono">
              <span className="px-2 py-0.5 bg-[#C00000] text-[10px] font-bold uppercase rounded">
                FIELD CAPABILITY
              </span>
              <div className="text-xl font-bold font-heading uppercase">
                ENGINEERED PROTECTION FOR AMERICAN CONTRACTORS
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Content */}
          <div className="lg:col-span-6 space-y-6 text-slate-700">
            <h3 className="text-2xl font-extrabold text-[#0754AE] font-heading uppercase">
              WHO WE ARE & WHAT WE SUPPLY
            </h3>
            
            <p className="font-medium text-base leading-relaxed">
              Trench Unlimited™ is built specifically for utility contractors, municipal water authorities, civil engineering firms, and underground infrastructure crews. We manufacture and supply heavy-duty shoring shields, precast access vaults, polymer channel drainage, and utility main piping.
            </p>

            <p className="font-medium text-base leading-relaxed">
              Our core promise is simple: <strong>Everything Trench.</strong> From surface castings to deep flow detention chambers, we provide certified, OSHA-compliant systems backed by PE-stamped engineering calculations.
            </p>

            {/* Qualitative Capability Indicators */}
            <div className="pt-4 grid grid-cols-2 gap-4 font-mono text-xs">
              <div className="p-3 bg-[#F0F7FF] rounded border border-blue-200 space-y-1">
                <div className="flex items-center gap-1.5 text-[#0754AE] font-bold">
                  <ShieldCheck className="w-4 h-4 text-[#C00000]" />
                  OSHA SUBPART P
                </div>
                <div className="text-slate-500 text-[11px]">100% Certified Trench Shielding</div>
              </div>

              <div className="p-3 bg-[#F0F7FF] rounded border border-blue-200 space-y-1">
                <div className="flex items-center gap-1.5 text-[#0754AE] font-bold">
                  <Award className="w-4 h-4 text-[#2166D1]" />
                  PE CALCULATIONS
                </div>
                <div className="text-slate-500 text-[11px]">Stamped Submittal Packages</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
