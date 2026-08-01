import React, { useState } from 'react';
import { INDUSTRIES_DATA, PRIMARY_CATEGORIES } from '../data/trenchData';
import { Industry } from '../types';
import { Building2, ArrowRight } from 'lucide-react';

interface IndustriesViewProps {
  onSelectCategory: (categoryId: string) => void;
}

export const IndustriesView: React.FC<IndustriesViewProps> = ({ onSelectCategory }) => {
  const [selectedIndustry, setSelectedIndustry] = useState<Industry>(INDUSTRIES_DATA[0]);

  return (
    <section id="industries" className="py-20 bg-white border-b border-[#E2E8F0]">
      <div className="container-industrial space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F0F7FF] border border-[#0085F4] text-xs font-mono font-bold text-[#004AAD]">
            <Building2 className="w-4 h-4 text-[#0085F4]" />
            <span>AMERICAN INDUSTRY SECTORS</span>
          </div>
          <h2 className="text-section-title text-[#004AAD] uppercase">
            SOLUTIONS BY <span className="text-[#0085F4]">INFRASTRUCTURE SECTOR</span>
          </h2>
          <p className="text-body-large text-[#475569] font-medium">
            Engineered trench safety, shoring, utility, and municipal systems tailored for U.S. contractors and civil engineers.
          </p>
        </div>

        {/* Industry Tabs */}
        <div className="flex items-center gap-3 overflow-x-auto pb-2 justify-start lg:justify-center">
          {INDUSTRIES_DATA.map((ind) => {
            const isSelected = selectedIndustry.id === ind.id;
            return (
              <button
                key={ind.id}
                onClick={() => setSelectedIndustry(ind)}
                className={`shrink-0 px-4 py-3 font-mono text-xs font-bold transition-all border ${
                  isSelected
                    ? 'bg-[#004AAD] text-white border-[#004AAD] shadow-md'
                    : 'bg-[#F8F8F8] text-[#004AAD] border-[#E2E8F0] hover:border-[#0085F4] hover:bg-[#F0F7FF]'
                }`}
              >
                {ind.title}
              </button>
            );
          })}
        </div>

        {/* Industry Showcase Card */}
        <div className="bg-[#F8F8F8] border-2 border-[#E2E8F0] p-8 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="px-3 py-1 bg-[#0085F4] text-white font-mono text-xs font-bold uppercase">
                ACTIVE SECTOR PROFILE
              </span>
              <h3 className="text-card-title text-[#004AAD] uppercase">
                {selectedIndustry.title}
              </h3>
              <p className="text-xs font-mono font-bold text-[#0085F4]">
                {selectedIndustry.tagline}
              </p>
            </div>

            <p className="text-body-large text-[#475569] font-medium">
              {selectedIndustry.description}
            </p>

            {/* Spec Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
              {selectedIndustry.specs.map((spec, i) => (
                <div key={i} className="p-3 bg-white border border-[#E2E8F0]">
                  <div className="text-[#475569] font-bold uppercase">{spec.label}</div>
                  <div className="font-bold text-[#004AAD] mt-1">{spec.value}</div>
                </div>
              ))}
            </div>

            {/* Relevant Categories */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-mono font-bold text-[#004AAD] uppercase block">
                RELEVANT TRENCH CATEGORIES:
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedIndustry.relevantCategories.map((catId) => {
                  const cat = PRIMARY_CATEGORIES.find(c => c.id === catId);
                  return (
                    <button
                      key={catId}
                      onClick={() => onSelectCategory(catId)}
                      className="px-3 py-2 bg-white border border-[#0085F4] text-[#004AAD] hover:bg-[#004AAD] hover:text-white font-mono text-xs font-bold transition-colors flex items-center gap-1.5"
                    >
                      <span>{cat ? `${cat.number} ${cat.shortName}` : catId}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative h-[380px] border border-[#E2E8F0] overflow-hidden bg-[#F0F7FF]">
            <img 
              src={selectedIndustry.image} 
              alt={selectedIndustry.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 border border-[#0085F4] text-xs font-mono font-bold text-[#004AAD]">
              CIVIL SECTOR FIELD OPERATION
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
