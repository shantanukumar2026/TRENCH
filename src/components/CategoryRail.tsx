import React from 'react';
import { PRIMARY_CATEGORIES } from '../data/trenchData';
import { ShieldCheck, HardHat, Compass, Droplet, Waves, Layers, Zap, Gauge, Wrench, Layers3, ChevronRight } from 'lucide-react';

interface CategoryRailProps {
  selectedCategoryId: string;
  onSelectCategory: (categoryId: string) => void;
}

export const CategoryRail: React.FC<CategoryRailProps> = ({ selectedCategoryId, onSelectCategory }) => {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'safety-protection': return <ShieldCheck className="w-4 h-4" />;
      case 'excavation-equipment': return <HardHat className="w-4 h-4" />;
      case 'pipe-installation': return <Compass className="w-4 h-4" />;
      case 'water-sewer': return <Droplet className="w-4 h-4" />;
      case 'drainage-stormwater': return <Waves className="w-4 h-4" />;
      case 'manholes-underground-access': return <Layers className="w-4 h-4" />;
      case 'utility-conduit-electrical': return <Zap className="w-4 h-4" />;
      case 'dewatering-groundwater-control': return <Gauge className="w-4 h-4" />;
      case 'trench-tools-jobsite-equipment': return <Wrench className="w-4 h-4" />;
      case 'backfill-surface-restoration': return <Layers3 className="w-4 h-4" />;
      default: return <ShieldCheck className="w-4 h-4" />;
    }
  };

  return (
    <section className="bg-white border-y-2 border-blue-300 py-6 sticky top-20 z-30 shadow-md">
      <div className="container-custom">
        <div className="flex items-center justify-between gap-4 mb-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-[#2166D1] uppercase tracking-widest">PRODUCT ARCHITECTURE</span>
            <span className="text-xs text-[#163B66] font-bold">• 10 PRIMARY CATEGORIES (SQUARE CAD RAIL)</span>
          </div>
          <span className="text-xs font-mono text-[#1E4E8C] hidden md:inline-block">Click any category to filter catalogue</span>
        </div>

        {/* Scrollable Compact Square Category Rail */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => onSelectCategory('all')}
            className={`shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-none font-mono text-xs font-bold transition-all duration-200 border-2 ${
              selectedCategoryId === 'all'
                ? 'bg-[#0754AE] text-white border-[#0754AE] shadow-md'
                : 'bg-[#F0F7FF] text-[#0754AE] border-blue-200 hover:border-[#2166D1] hover:bg-white'
            }`}
          >
            <span>ALL PRODUCTS</span>
          </button>

          {PRIMARY_CATEGORIES.map((cat) => {
            const isSelected = selectedCategoryId === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`shrink-0 flex items-center gap-2.5 px-4 py-2.5 rounded-none font-mono text-xs font-bold transition-all duration-200 border-2 whitespace-nowrap ${
                  isSelected
                    ? 'bg-[#0754AE] text-white border-[#0754AE] shadow-md scale-[1.02]'
                    : 'bg-[#F0F7FF] text-[#0754AE] border-blue-200 hover:border-[#2166D1] hover:bg-white'
                }`}
              >
                <span className={`p-1 rounded-none ${isSelected ? 'bg-white/20 text-white' : 'bg-blue-100 text-[#0754AE]'}`}>
                  {getCategoryIcon(cat.id)}
                </span>
                <span className="text-xs">{cat.number} {cat.shortName}</span>
                <ChevronRight className={`w-3.5 h-3.5 opacity-60 ${isSelected ? 'text-white' : 'text-[#0754AE]'}`} />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
