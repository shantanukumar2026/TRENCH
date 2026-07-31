import React, { useState, useMemo } from 'react';
import { PRODUCTS_CATALOGUE } from '../data/trenchData';
import { Product } from '../types';
import { Search, Filter, ArrowRight, Download, Box, ShieldCheck, Check } from 'lucide-react';

interface CatalogueProps {
  onSelectProductModal: (product: Product) => void;
  onOpenSpecDownload: (product: Product) => void;
}

export const Catalogue: React.FC<CatalogueProps> = ({ onSelectProductModal, onOpenSpecDownload }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories = ['ALL', 'Trench Protection', 'Drainage', 'Access Systems', 'Pipe & Fittings', 'Utility Infrastructure', 'Shoring', 'Road & Municipal'];

  const filteredProducts = useMemo(() => {
    return PRODUCTS_CATALOGUE.filter((p) => {
      const matchesCategory = selectedCategory === 'ALL' || p.category === selectedCategory;
      const matchesQuery = 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.partNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.material.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.application.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <section id="catalogue" className="py-24 bg-white border-b border-blue-200 relative">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#F0F7FF] border border-blue-200">
            <Box className="w-3.5 h-3.5 text-[#C00000]" />
            <span className="text-xs font-mono font-bold text-[#0754AE] uppercase tracking-widest">
              PRODUCT DISCOVERY ENGINE
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0754AE] tracking-tight font-heading uppercase">
            PRODUCT <span className="text-[#2166D1]">CATALOGUE</span>
          </h2>
          <div className="flex justify-center items-center gap-2">
            <span className="red-accent-bar"></span>
            <p className="text-slate-700 font-medium text-base">
              Explore Trench Unlimited's engineered products, shoring systems, access vaults, and utility pipe fittings.
            </p>
          </div>
        </div>

        {/* Search & Category Filter Toolbar */}
        <div className="mb-10 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-[#F0F7FF] p-4 rounded-xl border border-blue-200">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <input 
                type="text"
                placeholder="Search products, applications, sizes, part numbers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-2.5 pl-10 pr-4 text-xs font-mono bg-white text-[#0754AE] border border-blue-200 rounded-lg focus:outline-none focus:border-[#2166D1] shadow-sm"
              />
              <Search className="w-4 h-4 text-[#0754AE] absolute left-3 top-3 pointer-events-none" />
            </div>

            {/* Results Counter */}
            <div className="text-xs font-mono text-slate-500 font-bold">
              SHOWING <strong className="text-[#C00000]">{filteredProducts.length}</strong> ENGINEERED PRODUCTS
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 pt-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-mono font-bold rounded-lg transition-all uppercase ${
                  selectedCategory === cat
                    ? 'bg-[#0754AE] text-white shadow'
                    : 'bg-[#F0F7FF] text-[#0754AE] border border-blue-200 hover:border-[#2166D1]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((prod) => (
            <div 
              key={prod.id}
              className="bg-white border border-blue-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:border-[#2166D1] transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Product Image & Badges */}
              <div className="relative h-48 bg-[#F0F7FF] overflow-hidden">
                <img 
                  src={prod.image} 
                  alt={prod.name} 
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/images/trench_shield.png';
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-[#0754AE] text-white px-2 py-0.5 text-[10px] font-mono font-bold uppercase rounded">
                  {prod.category}
                </div>
                <div className="absolute top-3 right-3 bg-[#C00000] text-white px-2 py-0.5 text-[10px] font-mono font-bold uppercase rounded shadow">
                  {prod.partNumber}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-[#0754AE] font-heading uppercase line-clamp-2">
                    {prod.name}
                  </h3>
                  <p className="text-xs text-[#163B66] font-medium leading-relaxed line-clamp-2 mt-1">
                    {prod.description}
                  </p>
                </div>

                {/* Technical Attributes Box */}
                <div className="bg-[#F0F7FF] p-3 rounded border border-blue-100 font-mono text-[11px] space-y-1">
                  <div className="flex justify-between text-[#0754AE]">
                    <span>MATERIAL:</span>
                    <span className="text-[#0754AE] font-bold truncate max-w-[140px]">{prod.material}</span>
                  </div>
                  <div className="flex justify-between text-[#0754AE]">
                    <span>RATING:</span>
                    <span className="text-[#C00000] font-bold truncate max-w-[140px]">{prod.loadRating}</span>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-2 grid grid-cols-2 gap-2">
                  <button 
                    onClick={() => onSelectProductModal(prod)}
                    className="btn-secondary text-[11px] py-2 px-2 justify-center"
                  >
                    VIEW SPEC
                  </button>
                  <button 
                    onClick={() => onOpenSpecDownload(prod)}
                    className="btn-primary text-[11px] py-2 px-2 justify-center"
                  >
                    <Download className="w-3 h-3" />
                    CAD DOC
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
