import React, { useState } from 'react';
import { CategoryRail } from './CategoryRail';
import { CategoryDetail } from './CategoryDetail';
import { Catalogue } from './Catalogue';
import { Product } from '../types';

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
      
      {/* Products Page Banner */}
      <div className="bg-gradient-to-r from-[#0754AE] to-[#2166D1] text-white py-16 px-4 border-b-4 border-[#C00000]">
        <div className="container-custom max-w-4xl space-y-4 text-center">
          <span className="px-3.5 py-1.5 bg-white/10 text-white border border-white/20 rounded-full font-mono text-xs font-bold uppercase tracking-widest inline-block">
            10 PRIMARY CATEGORIES • ARCHITECTURAL SYSTEM EXPLORER
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading uppercase tracking-tight text-white">
            EVERYTHING TRENCH.
          </h1>
          <p className="text-base sm:text-lg font-mono text-blue-100 max-w-2xl mx-auto">
            Products, equipment, and infrastructure solutions for every stage below the surface.
          </p>
        </div>
      </div>

      {/* 10-Category Navigation Rail */}
      <CategoryRail 
        selectedCategoryId={selectedCategoryFilter}
        onSelectCategory={handleCategorySelect}
      />

      {/* Deep Category Detail Landing View (when active) */}
      {activeCategoryDetailId && (
        <CategoryDetail 
          categoryId={activeCategoryDetailId}
          onBackToAll={() => { setActiveCategoryDetailId(null); onCategoryFilterChange('all'); }}
          onSelectSubcategory={() => {}}
          onSelectProduct={onSelectProduct}
          onRequestQuote={onRequestQuote}
        />
      )}

      {/* Full Catalogue Grid & Product Finder */}
      <Catalogue 
        onSelectProduct={onSelectProduct}
        onRequestQuote={onRequestQuote}
        onToggleCompare={onToggleCompare}
        comparedProductIds={comparedProductIds}
        onOpenComparisonModal={onOpenComparisonModal}
        selectedCategoryFilter={selectedCategoryFilter}
        onCategoryFilterChange={handleCategorySelect}
      />
    </div>
  );
};
