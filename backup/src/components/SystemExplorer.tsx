import React from 'react';
import { PRIMARY_CATEGORIES } from '../data/trenchData';
import { PrimaryCategory } from '../types';
import { ShieldCheck, ChevronRight, Layers, ArrowRight } from 'lucide-react';

interface SystemExplorerProps {
  onSelectHotspot: (categoryId: string) => void;
}

export const SystemExplorer: React.FC<SystemExplorerProps> = ({ onSelectHotspot }) => {
  return (
    <section id="explorer" className="py-10 bg-[#F7FAFE] border-b-2 border-blue-200">
      <div className="container-custom space-y-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-blue-200 pb-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-[#0085F4]/30 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-[#0085F4]" />
              <span className="text-xs font-mono font-bold text-[#004AAD] uppercase tracking-widest">
                TRENCH EQUIPMENT CATEGORIES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#004AAD] tracking-tight font-heading uppercase">
              TRENCH SAFETY &amp; <span className="text-[#0085F4]">SHORING SYSTEMS</span>
            </h2>
            <p className="text-sm text-[#5B7FA5] font-medium max-w-2xl">
              Clean engineering overview of standardized trench protection, shoring shields, road plates, and access equipment.
            </p>
          </div>
        </div>

        {/* 5 Neat & Clean Product Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRIMARY_CATEGORIES.slice(0, 5).map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectHotspot(cat.id)}
              className="bg-white border-2 border-blue-200 p-6 hover:border-[#0085F4] hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="h-48 overflow-hidden border border-blue-200 bg-[#F4F8FF] relative">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#004AAD] text-white text-xs font-mono font-bold">
                    CATEGORY {cat.number}
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-[11px] font-mono font-bold text-[#0085F4] uppercase block">
                    {cat.tagline}
                  </span>
                  <h3 className="text-lg font-bold text-[#004AAD] font-heading group-hover:text-[#0085F4] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-[#5B7FA5] font-medium line-clamp-2">
                    {cat.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-blue-200 flex items-center justify-between mt-4 text-xs font-mono font-bold text-[#004AAD]">
                <span>VIEW CATEGORY PRODUCTS</span>
                <ChevronRight className="w-4 h-4 text-[#0085F4] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
