import React, { useState } from 'react';
import { Package, Shield, FileText, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PRODUCTS_CATALOGUE } from '../data/trenchData';
import { Product } from '../types';

interface FeaturedProductsSectionProps {
  onSelectProduct: (product: Product) => void;
  onRequestQuote: (product: Product) => void;
  onExploreAll: () => void;
}

export const FeaturedProductsSection: React.FC<FeaturedProductsSectionProps> = ({
  onSelectProduct,
  onRequestQuote,
  onExploreAll
}) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'ALL PRODUCTS' },
    { id: 'trench-grates', label: 'TRENCH GRATINGS' },
    { id: 'tree-grates', label: 'TREE GRATES & GUARDS' },
    { id: 'catch-basin-drainage', label: 'CATCH BASIN & DRAINAGE' }
  ];

  const filteredProducts = activeTab === 'all'
    ? PRODUCTS_CATALOGUE.slice(0, 6)
    : PRODUCTS_CATALOGUE.filter(p => {
        const catLower = p.category.toLowerCase();
        const subLower = p.subcategory.toLowerCase();
        if (activeTab === 'trench-grates') return catLower.includes('trench') || subLower.includes('trench');
        if (activeTab === 'tree-grates') return catLower.includes('tree') || subLower.includes('tree');
        if (activeTab === 'catch-basin-drainage') return catLower.includes('drainage') || catLower.includes('basin') || subLower.includes('civil') || catLower.includes('civil');
        return catLower.includes(activeTab.toLowerCase());
      }).slice(0, 6);

  return (
    <section id="featured-products" className="py-20 bg-[#F8FAFC] border-b border-[#E2E8F0] relative">
      <div className="container-industrial space-y-12">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-[#004AAD] pb-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#004AAD] text-xs font-mono font-bold text-white uppercase">
              <Package className="w-4 h-4 text-[#00BBFF]" />
              <span>OSHA CERTIFIED EQUIPMENT &amp; DRAINAGE CATALOGUE</span>
            </div>
            <h2 className="text-section-title text-[#004AAD] uppercase">
              FEATURED TRENCH <span className="text-[#0085F4]">SAFETY &amp; DRAINAGE PRODUCTS</span>
            </h2>
            <p className="text-body-large text-[#475569] font-medium">
              Explore our core fleet of heavy steel trench shields, aluminum hydraulic shores, slide rail modular systems, and ACO polymer concrete linear drainage channels.
            </p>
          </div>

          <button
            onClick={onExploreAll}
            className="inline-flex items-center justify-center gap-2 bg-[#004AAD] hover:bg-[#0085F4] text-white font-mono font-bold text-sm px-6 py-3 uppercase transition-all shadow-md shrink-0"
          >
            <span>VIEW FULL 25+ PRODUCT CATALOGUE</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-[#CBD5E1] pb-4 font-mono text-xs font-bold">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 uppercase transition-all ${
                activeTab === cat.id
                  ? 'bg-[#004AAD] text-white border-b-2 border-[#0085F4]'
                  : 'bg-white text-[#475569] border border-[#CBD5E1] hover:border-[#0085F4] hover:text-[#004AAD]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white border-2 border-[#E2E8F0] hover:border-[#0085F4] transition-all flex flex-col justify-between group shadow-sm hover:shadow-md"
            >
              <div>
                {/* Product Image Stage */}
                <div
                  onClick={() => onSelectProduct(product)}
                  className="h-48 bg-[#F1F5F9] p-6 flex items-center justify-center relative overflow-hidden cursor-pointer"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-36 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = '/c1b3988b-7b1c-49dd-a5cb-48c9ee3d3a02.png';
                    }}
                  />
                  <div className="absolute top-3 left-3 bg-[#004AAD] text-white text-[10px] font-mono font-bold px-2 py-0.5 uppercase">
                    {product.category}
                  </div>
                </div>

                {/* Info Block */}
                <div className="p-6 space-y-3">
                  <h3
                    onClick={() => onSelectProduct(product)}
                    className="text-base font-extrabold text-[#004AAD] font-mono uppercase group-hover:text-[#0085F4] transition-colors cursor-pointer"
                  >
                    {product.name}
                  </h3>
                  <p className="text-xs text-[#64748B] font-medium line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Specs List */}
                  <div className="space-y-1.5 pt-2 border-t border-[#E2E8F0] font-mono text-[11px] text-[#334155]">
                    <div className="flex justify-between">
                      <span className="text-[#64748B]">LOAD RATING:</span>
                      <span className="font-bold text-[#004AAD]">{product.loadRating || 'PE Certified'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#64748B]">SIZE RANGE:</span>
                      <span className="font-bold text-[#0085F4]">{product.sizeRange || 'Standard'}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 grid grid-cols-2 gap-3 font-mono text-xs font-bold">
                <button
                  onClick={() => onSelectProduct(product)}
                  className="bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#004AAD] py-2.5 px-3 uppercase text-center transition-colors border border-[#CBD5E1]"
                >
                  VIEW SPECS
                </button>
                <button
                  onClick={() => onRequestQuote(product)}
                  className="bg-[#0085F4] hover:bg-[#004AAD] text-white py-2.5 px-3 uppercase text-center transition-colors shadow-sm"
                >
                  GET QUOTE
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
