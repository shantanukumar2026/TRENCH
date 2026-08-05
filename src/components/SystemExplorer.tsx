import React, { useState } from 'react';
import { PRIMARY_CATEGORIES } from '../data/trenchData';
import { ShieldCheck, ArrowRight, Layers, Sliders, CheckCircle2, Award } from 'lucide-react';

interface SystemExplorerProps {
  onSelectHotspot: (categoryId: string) => void;
}

export const SystemExplorer: React.FC<SystemExplorerProps> = ({ onSelectHotspot }) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'designer-trench-gratings' | 'tree-grates-guards' | 'heavy-civil-drainage'>('all');

  const filteredCategories = selectedFilter === 'all'
    ? PRIMARY_CATEGORIES
    : PRIMARY_CATEGORIES.filter(cat => cat.id === selectedFilter);

  return (
    <section id="explorer" className="py-20 bg-[#F8FAFC] border-b border-[#E2E8F0] relative">
      <div className="container-industrial space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-[#004AAD] pb-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#004AAD] text-white text-xs font-mono font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#00BBFF]" />
              <span>INTERACTIVE TRENCH INFRASTRUCTURE EXPLORER</span>
            </div>
            <h2 className="text-section-title text-[#004AAD] uppercase">
              TRENCH CASTINGS &amp; <span className="text-[#0085F4]">CIVIL DRAINAGE EXPLORER</span>
            </h2>
            <p className="text-body-large text-[#475569] font-medium leading-relaxed">
              Explore heavy civil trench covers, ADA heel-proof architectural gratings, and designer tree aeration grates engineered for municipal, transportation, and industrial hardscapes.
            </p>
          </div>

          {/* Application Filter Tabs */}
          <div className="flex flex-wrap gap-2 font-mono text-xs font-bold">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-4 py-2.5 uppercase transition-all ${
                selectedFilter === 'all'
                  ? 'bg-[#004AAD] text-white shadow-md'
                  : 'bg-white text-[#475569] border border-[#CBD5E1] hover:border-[#0085F4] hover:text-[#004AAD]'
              }`}
            >
              ALL SYSTEMS ({PRIMARY_CATEGORIES.length})
            </button>
            <button
              onClick={() => setSelectedFilter('designer-trench-gratings')}
              className={`px-4 py-2.5 uppercase transition-all ${
                selectedFilter === 'designer-trench-gratings'
                  ? 'bg-[#004AAD] text-white shadow-md'
                  : 'bg-white text-[#475569] border border-[#CBD5E1] hover:border-[#0085F4] hover:text-[#004AAD]'
              }`}
            >
              ADA TRENCH GRATINGS
            </button>
            <button
              onClick={() => setSelectedFilter('tree-grates-guards')}
              className={`px-4 py-2.5 uppercase transition-all ${
                selectedFilter === 'tree-grates-guards'
                  ? 'bg-[#004AAD] text-white shadow-md'
                  : 'bg-white text-[#475569] border border-[#CBD5E1] hover:border-[#0085F4] hover:text-[#004AAD]'
              }`}
            >
              TREE GRATES &amp; GUARDS
            </button>
            <button
              onClick={() => setSelectedFilter('heavy-civil-drainage')}
              className={`px-4 py-2.5 uppercase transition-all ${
                selectedFilter === 'heavy-civil-drainage'
                  ? 'bg-[#004AAD] text-white shadow-md'
                  : 'bg-white text-[#475569] border border-[#CBD5E1] hover:border-[#0085F4] hover:text-[#004AAD]'
              }`}
            >
              HEAVY CIVIL CHANNELS
            </button>
          </div>
        </div>

        {/* System Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectHotspot(cat.id)}
              className="bg-white border-2 border-[#E2E8F0] hover:border-[#0085F4] transition-all duration-300 group cursor-pointer flex flex-col justify-between shadow-sm hover:shadow-lg overflow-hidden"
            >
              <div>
                {/* Category Image with Stage Header */}
                <div className="h-56 overflow-hidden relative bg-[#F1F5F9]">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/logo.png'; }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-[#004AAD] text-white text-xs font-mono font-extrabold uppercase shadow-md flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-[#00BBFF]" />
                    <span>SYSTEM CATEGORY {cat.number}</span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-3 font-mono">
                  <span className="text-xs font-bold text-[#0085F4] uppercase block tracking-wide">
                    {cat.tagline}
                  </span>
                  <h3 className="text-base font-extrabold text-[#004AAD] group-hover:text-[#0085F4] transition-colors uppercase">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-[#475569] font-sans leading-relaxed font-medium line-clamp-3">
                    {cat.description}
                  </p>

                  {/* Subcategories Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#E2E8F0] text-[11px]">
                    {cat.subcategories.map(s => (
                      <span key={s.id} className="px-2.5 py-1 bg-[#F1F5F9] border border-[#CBD5E1] text-[#004AAD] font-bold">
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Trigger */}
              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between font-mono text-xs font-bold text-[#004AAD] group-hover:text-[#0085F4] transition-colors">
                  <span>INSPECT SYSTEM SPECIFICATIONS</span>
                  <div className="p-2 bg-[#F1F5F9] group-hover:bg-[#004AAD] text-[#004AAD] group-hover:text-white transition-colors">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
