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
      
      {/* Products Page Rich Industrial Banner */}
      <div className="bg-industrial-grid-dark text-white py-14 px-4 border-b-4 border-[#0085F4]">
        <div className="container-custom space-y-6">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 text-white border border-white/20 font-mono text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
              <ShieldCheck className="w-4 h-4 text-[#00BBFF]" />
              <span>DIRECT FOUNDRY &amp; TRENCH INFRASTRUCTURE CATALOGUE</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-heading uppercase tracking-tight text-white">
              TRENCH COVERS, TREE GRATES &amp; <span className="text-[#00BBFF]">CIVIL DRAINAGE</span>
            </h1>
            <p className="text-base sm:text-lg font-body text-blue-100 font-medium">
              AASHTO M306 &amp; ASTM A536 certified trench products across <strong>3 core infrastructure categories</strong> — ADA heel-proof trench gratings, urban cast iron tree grates, and heavy duty airport drainage channels.
            </p>
          </div>

          {/* Banner Key Specs Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4 border-t border-white/15 max-w-4xl mx-auto font-mono text-xs text-center">
            <div className="bg-white/10 p-3 border border-white/15 backdrop-blur-sm">
              <span className="text-[#00BBFF] block font-extrabold text-sm">3 CORE CATEGORIES</span>
              <span className="text-blue-100">Structured Portfolio</span>
            </div>
            <div className="bg-white/10 p-3 border border-white/15 backdrop-blur-sm">
              <span className="text-[#00BBFF] block font-extrabold text-sm">ASTM A536</span>
              <span className="text-blue-100">Nodular Ductile Iron</span>
            </div>
            <div className="bg-white/10 p-3 border border-white/15 backdrop-blur-sm">
              <span className="text-[#00BBFF] block font-extrabold text-sm">AASHTO M306</span>
              <span className="text-blue-100">Proof Load Verified</span>
            </div>
            <div className="bg-white/10 p-3 border border-white/15 backdrop-blur-sm">
              <span className="text-[#00BBFF] block font-extrabold text-sm">PE SUBMITTALS</span>
              <span className="text-blue-100">DWG / STEP Models</span>
            </div>
          </div>
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
