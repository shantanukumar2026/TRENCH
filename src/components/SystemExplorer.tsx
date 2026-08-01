import React from 'react';
import { PRIMARY_CATEGORIES } from '../data/trenchData';
import { ShieldCheck, ChevronRight, ArrowRight } from 'lucide-react';

interface SystemExplorerProps {
  onSelectHotspot: (categoryId: string) => void;
}

export const SystemExplorer: React.FC<SystemExplorerProps> = ({ onSelectHotspot }) => {
  return (
    <section id="explorer" className="py-20 bg-white border-b border-[#E2E8F0]">
      <div className="container-industrial space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-[#004AAD] pb-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F0F7FF] border border-[#0085F4] text-xs font-mono font-bold text-[#004AAD]">
              <ShieldCheck className="w-4 h-4 text-[#0085F4]" />
              <span>PRIMARY EQUIPMENT FAMILIES</span>
            </div>
            <h2 className="text-section-title text-[#004AAD] uppercase">
              TRENCH SAFETY &amp; <span className="text-[#0085F4]">SHORING CATEGORIES</span>
            </h2>
            <p className="text-body-large text-[#475569] max-w-2xl">
              Manufacturer-grade trench protection systems certified under OSHA 1926 Subpart P and AASHTO standards for heavy civil excavations.
            </p>
          </div>
        </div>

        {/* Product Category Cards Grid (10 items = 2 full rows of 5 on XL screens) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {PRIMARY_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectHotspot(cat.id)}
              className="bg-[#F8F8F8] border-2 border-[#E2E8F0] p-6 hover:border-[#0085F4] hover:bg-white hover:shadow-2xl transition-all duration-300 group cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Category Image */}
                <div className="h-52 overflow-hidden border border-[#E2E8F0] relative bg-[#F0F7FF]">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-[#004AAD] text-white text-xs font-mono font-bold uppercase">
                    CATEGORY {cat.number}
                  </div>
                </div>

                {/* Info */}
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold text-[#0085F4] uppercase block">
                    {cat.tagline}
                  </span>
                  <h3 className="text-card-title text-[#004AAD] group-hover:text-[#0085F4] transition-colors uppercase">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              </div>

              {/* Bottom Trigger */}
              <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between mt-6 text-xs font-mono font-bold text-[#004AAD]">
                <span>VIEW SPECIFICATIONS &amp; PRODUCTS</span>
                <ArrowRight className="w-4 h-4 text-[#0085F4] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
