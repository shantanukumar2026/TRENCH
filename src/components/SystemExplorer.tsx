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

        {/* Product Category Cards Grid (Unified 3-Column Premium Section) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRIMARY_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectHotspot(cat.id)}
              className="glass-card-light glow-border-blue p-6 transition-all duration-300 group cursor-pointer flex flex-col justify-between border-2 border-[#0085F4]/20 hover:border-[#0085F4]"
            >
              <div className="space-y-4">
                {/* Category Image with Badge */}
                <div className="h-56 overflow-hidden border border-[#0085F4]/20 relative bg-[#F0F7FF]">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/logo.png'; }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-gradient-to-r from-[#004AAD] to-[#0085F4] text-white text-xs font-mono font-extrabold uppercase shadow-md">
                    CATEGORY {cat.number}
                  </div>
                </div>

                {/* Info */}
                <div className="space-y-2.5">
                  <span className="text-xs font-mono font-bold text-[#0085F4] uppercase block tracking-wide">
                    {cat.tagline}
                  </span>
                  <h3 className="text-card-title text-[#004AAD] group-hover:text-[#0085F4] transition-colors uppercase font-extrabold">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    {cat.description}
                  </p>

                  {/* Subcategories Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2 font-mono text-[11px]">
                    {cat.subcategories.map(s => (
                      <span key={s.id} className="px-2 py-0.5 bg-[#F0F7FF] border border-[#0085F4]/30 text-[#004AAD] font-semibold">
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action Trigger */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between mt-6 text-xs font-mono font-bold text-[#004AAD] group-hover:text-[#0085F4] transition-colors">
                <span>INSPECT EQUIPMENT &amp; SPECS</span>
                <div className="p-1.5 bg-[#F0F7FF] group-hover:bg-[#0085F4] group-hover:text-white transition-colors">
                  <ArrowRight className="w-4 h-4 text-[#0085F4] group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
