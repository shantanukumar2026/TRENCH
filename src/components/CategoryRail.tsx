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
    <section className="bg-white border-y-2 border-[#0085F4]/30 py-5 sticky top-20 z-30 shadow-md">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-[#0085F4] uppercase tracking-widest">PRODUCT ARCHITECTURE</span>
            <span className="text-xs text-[#004AAD] font-bold">• 10 PRIMARY CATEGORIES (FULL SPECTRUM)</span>
          </div>
          <span className="text-xs font-mono text-[#0085F4] font-medium hidden sm:inline-block">Select category to filter equipment catalogue</span>
        </div>

        {/* Full Container Width Category Rail */}
        <div className="flex flex-wrap items-center gap-2 w-full">
          <button
            onClick={() => onSelectCategory('all')}
            className={`flex-1 min-w-[130px] flex items-center justify-center gap-2 px-3.5 py-2.5 font-mono text-xs font-bold transition-all duration-200 border-2 ${
              selectedCategoryId === 'all'
                ? 'bg-[#004AAD] text-white border-[#004AAD] shadow-md scale-[1.02]'
                : 'bg-[#F0F7FF] text-[#004AAD] border-[#0085F4]/30 hover:border-[#0085F4] hover:bg-white'
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
                className={`flex-1 min-w-[150px] flex items-center justify-between gap-2 px-3 py-2.5 font-mono text-xs font-bold transition-all duration-200 border-2 ${
                  isSelected
                    ? 'bg-[#004AAD] text-white border-[#004AAD] shadow-md scale-[1.02]'
                    : 'bg-[#F0F7FF] text-[#004AAD] border-[#0085F4]/30 hover:border-[#0085F4] hover:bg-white'
                }`}
              >
                <div className="flex items-center gap-2 min-w-0">
                  <span className={`p-1 shrink-0 ${isSelected ? 'bg-white/20 text-white' : 'bg-blue-100 text-[#0085F4]'}`}>
                    {getCategoryIcon(cat.id)}
                  </span>
                  <span className="text-xs truncate">{cat.number} {cat.shortName}</span>
                </div>
                <ChevronRight className={`w-3.5 h-3.5 shrink-0 opacity-70 ${isSelected ? 'text-white' : 'text-[#0085F4]'}`} />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
