import React, { useState } from 'react';
import { INDUSTRIES_DATA, PRIMARY_CATEGORIES } from '../data/trenchData';
import { Industry } from '../types';
import { Building2, Compass, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

interface IndustriesViewProps {
  onSelectCategory: (categoryId: string) => void;
}

export const IndustriesView: React.FC<IndustriesViewProps> = ({ onSelectCategory }) => {
  const [selectedIndustry, setSelectedIndustry] = useState<Industry>(INDUSTRIES_DATA[0]);

  return (
    <section id="industries" className="py-20 bg-white border-b border-blue-200">
      <div className="container-custom space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0F7FF] border border-blue-200">
            <Building2 className="w-4 h-4 text-[#C00000]" />
            <span className="text-xs font-mono font-bold text-[#0754AE] uppercase tracking-widest">
              AMERICAN INDUSTRY SECTOR SOLUTIONS
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0754AE] tracking-tight font-heading uppercase">
            SOLUTIONS BY <span className="text-[#2166D1]">INDUSTRY SECTOR</span>
          </h2>
          <div className="flex justify-center items-center gap-2">
            <span className="blue-accent-bar"></span>
            <p className="text-[#163B66] font-medium text-base">
              Engineered trench, shoring, utility, and municipal infrastructure systems tailored for U.S. contractors and engineering firms.
            </p>
          </div>
        </div>

        {/* Industry Selector Tabs */}
        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none justify-start lg:justify-center">
          {INDUSTRIES_DATA.map((ind) => {
            const isSelected = selectedIndustry.id === ind.id;
            return (
              <button
                key={ind.id}
                onClick={() => setSelectedIndustry(ind)}
                className={`shrink-0 px-4 py-3 rounded-xl font-mono text-xs font-bold transition-all duration-200 border ${
                  isSelected
                    ? 'bg-[#0754AE] text-white border-[#0754AE] shadow-lg scale-[1.02]'
                    : 'bg-[#F0F7FF] text-[#0754AE] border-blue-200 hover:border-[#2166D1] hover:bg-white'
                }`}
              >
                {ind.title}
              </button>
            );
          })}
        </div>

        {/* Industry Showcase Feature Box */}
        <div className="bg-[#F0F7FF] border-2 border-blue-300 rounded-2xl p-8 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-blueprint-dense">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="px-3 py-1 bg-[#0754AE] text-white font-mono text-xs font-bold uppercase rounded">
                SELECTED INDUSTRY SECTOR
              </span>
              <h3 className="text-3xl font-extrabold text-[#0754AE] font-heading uppercase">
                {selectedIndustry.title}
              </h3>
              <p className="text-sm font-mono font-bold text-[#C00000]">
                {selectedIndustry.tagline}
              </p>
            </div>

            <p className="text-sm text-[#163B66] font-medium leading-relaxed">
              {selectedIndustry.description}
            </p>

            {/* Spec Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
              {selectedIndustry.specs.map((spec, i) => (
                <div key={i} className="p-3 bg-white border border-blue-200 rounded-lg shadow-sm">
                  <div className="text-[10px] text-blue-400 font-bold uppercase">{spec.label}</div>
                  <div className="font-bold text-[#0754AE] mt-0.5">{spec.value}</div>
                </div>
              ))}
            </div>

            {/* Relevant Categories Buttons */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-mono font-bold text-[#0754AE] uppercase block">
                RELEVANT SYSTEM CATEGORIES FOR THIS INDUSTRY:
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedIndustry.relevantCategories.map((catId) => {
                  const cat = PRIMARY_CATEGORIES.find(c => c.id === catId);
                  return (
                    <button
                      key={catId}
                      onClick={() => onSelectCategory(catId)}
                      className="px-3 py-2 bg-white border border-blue-300 text-[#0754AE] hover:bg-[#0754AE] hover:text-white font-mono text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
                    >
                      <span>{cat ? `${cat.number} ${cat.shortName}` : catId}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative h-80 lg:h-[400px] rounded-xl overflow-hidden border-2 border-blue-300 shadow-xl">
            <img
              src={selectedIndustry.image}
              alt={selectedIndustry.title}
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/images/trench_shield.png'; }}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0754AE]/80 via-transparent to-transparent p-6 flex flex-col justify-end text-white">
              <span className="text-xs font-mono font-bold text-blue-200 uppercase tracking-widest">
                VERIFIED FIELD APPLICATION
              </span>
              <span className="text-lg font-heading font-bold text-white">
                {selectedIndustry.title}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
