import React, { useState } from 'react';
import { Package, ArrowRight } from 'lucide-react';
import { PRODUCTS_CATALOGUE } from '../data/trenchData';
import { Product } from '../types';

interface FeaturedProductsSectionTwoProps {
  onSelectProduct: (product: Product) => void;
  onRequestQuote: (product: Product) => void;
  onExploreAll: () => void;
}

export const FeaturedProductsSectionTwo: React.FC<FeaturedProductsSectionTwoProps> = ({
  onSelectProduct,
  onRequestQuote,
  onExploreAll
}) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'trench-grate', label: 'Trench Grates' },
    { id: 'tree-grate', label: 'Tree Grates' },
    { id: 'catch-basin-grate', label: 'Catch Basin Inlets' }
  ];

  const filteredProducts = activeTab === 'all'
    ? PRODUCTS_CATALOGUE
    : PRODUCTS_CATALOGUE.filter(p => {
        const catLower = p.category.toLowerCase();
        if (activeTab === 'trench-grate') return catLower.includes('trench');
        if (activeTab === 'tree-grate') return catLower.includes('tree');
        if (activeTab === 'catch-basin-grate') return catLower.includes('basin') || catLower.includes('drainage') || catLower.includes('civil');
        return catLower.includes(activeTab.toLowerCase());
      });

  return (
    <section id="featured-products-two" className="py-24 bg-[#F8FAFC] border-b border-[#E2E8F0] relative">
      <div className="container-industrial space-y-12">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E2E8F0]">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F1F5F9] border border-[#E2E8F0] rounded-full text-xs font-mono font-bold text-[#0F2C59]">
              <Package className="w-4 h-4 text-[#F97316]" />
              <span>ASTM A536 &amp; AASHTO CERTIFIED PRODUCTS</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#0F2C59] tracking-tight">
              Featured Products
            </h2>
            <p className="text-base md:text-lg text-[#64748B] font-normal">
              High performance cast iron tree grates, ADA heel-proof trench covers, heavy vehicular channel grates, and municipal curb catch basin inlets.
            </p>
          </div>

          <button
            onClick={onExploreAll}
            className="group bg-[#0F2C59] hover:bg-[#1F2937] text-white px-6 py-3.5 rounded-lg text-sm font-bold transition-all shadow-md flex items-center justify-center gap-2 shrink-0"
          >
            <span>View Full Catalogue</span>
            <ArrowRight className="w-4 h-4 text-[#F97316] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 font-mono text-xs font-bold">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2.5 rounded-lg transition-all ${
                activeTab === cat.id
                  ? 'bg-[#0F2C59] text-white shadow-md'
                  : 'bg-white text-[#475569] border border-[#E2E8F0] hover:border-[#F97316]'
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
              className="bg-white rounded-2xl border border-[#E2E8F0] p-6 transition-all duration-300 hover:border-[#F97316] hover:shadow-xl flex flex-col justify-between group"
            >
              <div className="space-y-5">
                
                {/* Product Image Stage */}
                <div
                  onClick={() => onSelectProduct(product)}
                  className="h-56 bg-white rounded-xl p-4 flex items-center justify-center border border-[#F1F5F9] shadow-inner relative overflow-hidden cursor-pointer group-hover:bg-[#F8FAFC] transition-colors"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-44 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = '/c1b3988b-7b1c-49dd-a5cb-48c9ee3d3a02.png';
                    }}
                  />
                </div>

                {/* Product Name */}
                <h3
                  onClick={() => onSelectProduct(product)}
                  className="text-xl font-extrabold text-[#0F2C59] group-hover:text-[#F97316] transition-colors cursor-pointer leading-tight"
                >
                  {product.name}
                </h3>

                {/* Metadata Grid */}
                <div className="space-y-2 border-t border-[#E2E8F0] pt-4 font-mono text-xs text-[#1F2937]">
                  <div className="flex justify-between">
                    <span className="text-[#64748B]">APPLICATIONS:</span>
                    <span className="font-bold text-[#0F2C59] truncate max-w-[170px]">Municipal • Civil</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#64748B]">LOAD CLASS:</span>
                    <span className="font-bold text-[#F97316]">{product.loadRating || 'EN124 / AASHTO H-20'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#64748B]">MATERIAL:</span>
                    <span className="font-bold text-[#0F2C59]">ASTM A536 Iron</span>
                  </div>
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-6">
                <button
                  onClick={() => onSelectProduct(product)}
                  className="w-full bg-[#0F2C59] group-hover:bg-[#F97316] text-white py-3 rounded-lg text-xs font-bold font-mono tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span>View Engineering Details</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
