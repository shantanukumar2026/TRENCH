import React, { useState } from 'react';
import { CategoryRail } from './CategoryRail';
import { CategoryDetail } from './CategoryDetail';
import { Catalogue } from './Catalogue';
import { Product } from '../types';
import { ShieldCheck } from 'lucide-react';

interface ProductsPageProps {
  selectedCategoryFilter: string;
  onCategoryFilterChange: (catId: string) => void;
  onSelectProduct: (product: Product) => void;
  onRequestQuote: (product: Product) => void;
  onToggleCompare: (product: Product) => void;
  comparedProductIds: string[];
  onOpenComparisonModal: () => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  selectedCategoryFilter,
  onCategoryFilterChange,
  onSelectProduct,
  onRequestQuote,
  onToggleCompare,
  comparedProductIds,
  onOpenComparisonModal
}) => {
  const [activeCategoryDetailId, setActiveCategoryDetailId] = useState<string | null>(
    selectedCategoryFilter !== 'all' ? selectedCategoryFilter : null
  );

  const handleCategorySelect = (catId: string) => {
    onCategoryFilterChange(catId);
    if (catId !== 'all') {
      setActiveCategoryDetailId(catId);
    } else {
      setActiveCategoryDetailId(null);
    }
  };

  return (
    <div className="pt-20 bg-[#F8FAFC] min-h-screen space-y-8">
      
      {/* Products Page Clean Banner */}
      <div className="bg-[#004AAD] text-white py-16 px-4 border-b-4 border-[#0066FF]">
        <div className="container-custom space-y-4 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 text-white border border-white/20 font-mono text-xs font-bold uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4 text-[#00BBFF]" />
            <span>OSHA 1926 SUBPART P CERTIFIED CATALOGUE</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading uppercase tracking-tight text-white">
            TRENCH SHORING &amp; <span className="text-[#0085F4]">SAFETY EQUIPMENT</span>
          </h1>
          <p className="text-base sm:text-lg font-mono text-blue-100 max-w-2xl mx-auto">
            Heavy steel trench shields, aluminum hydraulic shores, slide rail systems, access ladders, and structural road plates.
          </p>
        </div>
      </div>

      {/* Category Navigation Rail */}
      <CategoryRail 
        selectedCategoryId={selectedCategoryFilter}
        onSelectCategory={handleCategorySelect}
      />

      {/* Selected Category Cutaway & Detailed Specifications */}
      {activeCategoryDetailId && (
        <div className="container-custom">
          <CategoryDetail 
            categoryId={activeCategoryDetailId}
            onBackToAll={() => handleCategorySelect('all')}
            onSelectSubcategory={() => {}}
            onSelectProduct={onSelectProduct}
            onRequestQuote={onRequestQuote}
          />
        </div>
      )}

      {/* Standalone Product Grid Catalogue */}
      <div className="container-custom pb-16">
        <Catalogue 
          selectedCategoryFilter={selectedCategoryFilter}
          onCategoryFilterChange={handleCategorySelect}
          onSelectProduct={onSelectProduct}
          onRequestQuote={onRequestQuote}
          onToggleCompare={onToggleCompare}
          comparedProductIds={comparedProductIds}
          onOpenComparisonModal={onOpenComparisonModal}
        />
      </div>

    </div>
  );
};
