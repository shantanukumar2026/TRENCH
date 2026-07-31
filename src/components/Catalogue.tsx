import React, { useState } from 'react';
import { PRODUCTS_CATALOGUE, PRIMARY_CATEGORIES } from '../data/trenchData';
import { Product } from '../types';
import { Search, Filter, ShieldCheck, Download, ChevronRight, Layers, FileText, ShoppingBag, Eye, SlidersHorizontal, CheckSquare, Square, Crosshair } from 'lucide-react';

interface CatalogueProps {
  onSelectProduct: (product: Product) => void;
  onRequestQuote: (product: Product) => void;
  onToggleCompare: (product: Product) => void;
  comparedProductIds: string[];
  onOpenComparisonModal: () => void;
  selectedCategoryFilter: string;
  onCategoryFilterChange: (catId: string) => void;
}

export const Catalogue: React.FC<CatalogueProps> = ({
  onSelectProduct,
  onRequestQuote,
  onToggleCompare,
  comparedProductIds,
  onOpenComparisonModal,
  selectedCategoryFilter,
  onCategoryFilterChange
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubcat, setSelectedSubcat] = useState('all');
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [selectedWorkflowStep, setSelectedWorkflowStep] = useState('all');

  const filteredProducts = PRODUCTS_CATALOGUE.filter(prod => {
    const matchesCategory = selectedCategoryFilter === 'all' || 
      prod.category.toLowerCase().includes(selectedCategoryFilter.toLowerCase()) ||
      (PRIMARY_CATEGORIES.find(c => c.id === selectedCategoryFilter)?.shortName.toLowerCase() && 
       prod.category.toLowerCase().includes(PRIMARY_CATEGORIES.find(c => c.id === selectedCategoryFilter)!.shortName.toLowerCase()));

    const matchesSearch = !searchTerm || 
      prod.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prod.partNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prod.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prod.application.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prod.standard.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesMaterial = selectedMaterial === 'all' || prod.material.toLowerCase().includes(selectedMaterial.toLowerCase());

    const matchesWorkflow = selectedWorkflowStep === 'all' || prod.workflowStep === selectedWorkflowStep;

    return matchesCategory && matchesSearch && matchesMaterial && matchesWorkflow;
  });

  return (
    <section id="catalogue" className="py-20 bg-[#F8FAFC] border-b-2 border-blue-200">
      <div className="container-custom space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-blue-200 pb-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-none bg-[#F0F7FF] border-2 border-blue-300">
              <ShieldCheck className="w-4 h-4 text-[#C00000]" />
              <span className="text-xs font-mono font-bold text-[#0754AE] uppercase tracking-widest">
                VERIFIED PRODUCTS CATALOGUE • SQUARE CAD ARCHITECTURE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0754AE] tracking-tight font-heading uppercase">
              FIND WHAT YOUR <span className="text-[#2166D1]">PROJECT NEEDS.</span>
            </h2>
            <p className="text-sm text-[#163B66] font-medium max-w-xl">
              Engineered products, shoring systems, access structures, and utility piping. Filter by category, material, or standard.
            </p>
          </div>

          {/* Comparison Drawer Trigger Bar */}
          {comparedProductIds.length > 0 && (
            <button
              onClick={onOpenComparisonModal}
              className="px-6 py-3.5 bg-[#0754AE] text-white hover:bg-[#2166D1] font-mono text-xs font-bold rounded-none shadow-lg flex items-center gap-2 animate-bounce border-2 border-white"
            >
              <CheckSquare className="w-4 h-4 text-white" />
              <span>COMPARE {comparedProductIds.length} SELECTED PRODUCTS →</span>
            </button>
          )}
        </div>

        {/* Filter Bar & Search Box */}
        <div className="bg-white p-6 border-2 border-blue-300 shadow-md space-y-4 font-mono text-xs rounded-none">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-[#0754AE] absolute left-3.5 top-3.5" />
              <input
                type="text"
                placeholder="Search product, part number, size, application, material or standard..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-none bg-[#F0F7FF] border-2 border-blue-200 text-[#0754AE] font-bold focus:outline-none focus:border-[#2166D1]"
              />
            </div>

            {/* Category Dropdown */}
            <div className="md:col-span-3">
              <select
                value={selectedCategoryFilter}
                onChange={(e) => onCategoryFilterChange(e.target.value)}
                className="w-full p-3 rounded-none bg-[#F0F7FF] border-2 border-blue-200 text-[#0754AE] font-bold outline-none cursor-pointer"
              >
                <option value="all">ALL 10 CATEGORIES</option>
                {PRIMARY_CATEGORIES.map(c => (
                  <option key={c.id} value={c.id}>{c.number} {c.shortName.toUpperCase()}</option>
                ))}
              </select>
            </div>

            {/* Workflow Step Dropdown */}
            <div className="md:col-span-3">
              <select
                value={selectedWorkflowStep}
                onChange={(e) => setSelectedWorkflowStep(e.target.value)}
                className="w-full p-3 rounded-none bg-[#F0F7FF] border-2 border-blue-200 text-[#0754AE] font-bold outline-none cursor-pointer"
              >
                <option value="all">ALL WORKFLOW STEPS</option>
                <option value="EXCAVATE">01 EXCAVATE</option>
                <option value="PROTECT">02 PROTECT</option>
                <option value="INSTALL">03 INSTALL</option>
                <option value="CONTROL">04 CONTROL</option>
                <option value="ACCESS">05 ACCESS</option>
                <option value="RESTORE">06 RESTORE</option>
              </select>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-blue-100 text-[#163B66]">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#0754AE]" />
              <span className="font-bold text-[#0754AE]">ACTIVE FILTERS:</span>
              <span className="bg-[#F0F7FF] px-2 py-1 text-[#0754AE] border border-blue-200 font-bold">
                Showing {filteredProducts.length} system products
              </span>
            </div>

            {(searchTerm || selectedCategoryFilter !== 'all' || selectedWorkflowStep !== 'all') && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  onCategoryFilterChange('all');
                  setSelectedWorkflowStep('all');
                }}
                className="text-[#C00000] hover:underline font-bold"
              >
                RESET ALL FILTERS
              </button>
            )}
          </div>
        </div>

        {/* Product Cards Grid — STRICT SQUARE CARDS */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white border-2 border-blue-300 p-16 text-center space-y-4 font-mono rounded-none">
            <p className="text-lg font-heading text-[#0754AE]">NO PRODUCTS FOUND MATCHING YOUR FILTERS</p>
            <p className="text-xs text-[#163B66]">Try searching for AWWA, OSHA, Steel, PVC, or clear search filters.</p>
            <button
              onClick={() => { setSearchTerm(''); onCategoryFilterChange('all'); setSelectedWorkflowStep('all'); }}
              className="btn-primary py-2.5 px-6 text-xs"
            >
              SHOW ALL PRODUCTS
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => {
              const isCompared = comparedProductIds.includes(product.id);
              return (
                <div
                  key={product.id}
                  className="product-card-square overflow-hidden flex flex-col justify-between group"
                >
                  <div className="p-5 space-y-4">
                    
                    {/* Card Image Header — Sharp Square Border */}
                    <div 
                      className="h-52 overflow-hidden border-2 border-blue-200 bg-[#F0F7FF] relative cursor-pointer group"
                      onClick={() => onSelectProduct(product)}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/images/trench_shield.png'; }}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2 left-2 px-2.5 py-1 bg-[#0754AE] text-white text-[10px] font-mono font-bold uppercase rounded-none shadow">
                        {product.category}
                      </div>
                      <div className="absolute top-2 right-2 px-2.5 py-1 bg-[#C00000] text-white text-[10px] font-mono font-bold rounded-none shadow">
                        {product.partNumber || '[VERIFIED PART #]'}
                      </div>

                      {/* CAD Grid Overlay Indicator */}
                      <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-white/90 backdrop-blur-sm text-[#0754AE] text-[9px] font-mono font-bold uppercase border border-blue-200">
                        CAD SPEC READY
                      </div>
                    </div>

                    {/* Product Names & Description */}
                    <div className="space-y-1.5">
                      <div className="text-[10px] font-mono font-bold text-[#1E4E8C] uppercase flex items-center justify-between">
                        <span>SUBCATEGORY: {product.subcategory || '[VERIFIED SUBCATEGORY]'}</span>
                        <span className="text-[#C00000] font-extrabold">{product.workflowStep || 'INSTALL'} STEP</span>
                      </div>
                      <h3
                        onClick={() => onSelectProduct(product)}
                        className="text-lg font-bold text-[#0754AE] font-heading hover:text-[#2166D1] cursor-pointer line-clamp-1"
                      >
                        {product.name}
                      </h3>
                      <p className="text-xs text-[#163B66] font-medium line-clamp-2">
                        {product.description}
                      </p>
                    </div>

                    {/* Quick Specs Table — Sharp Industrial Grid */}
                    <div className="space-y-1.5 font-mono text-xs bg-[#F0F7FF] p-3 border-2 border-blue-200 rounded-none">
                      <div className="flex justify-between text-[#163B66]">
                        <span className="text-blue-400">MATERIAL:</span>
                        <span className="font-bold text-[#0754AE] truncate max-w-[170px]">{product.material || '[VERIFIED MATERIAL]'}</span>
                      </div>
                      <div className="flex justify-between text-[#163B66]">
                        <span className="text-blue-400">LOAD RATING:</span>
                        <span className="font-bold text-[#C00000] truncate max-w-[170px]">{product.loadRating || '[VERIFIED RATING]'}</span>
                      </div>
                      <div className="flex justify-between text-[#163B66]">
                        <span className="text-blue-400">STANDARD:</span>
                        <span className="font-bold text-[#0754AE] truncate max-w-[170px]">{product.standard || '[APPLICABLE STANDARD]'}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Actions Footer */}
                  <div className="p-4 bg-[#F0F7FF] border-t-2 border-blue-200 space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <button
                        onClick={() => onToggleCompare(product)}
                        className={`flex items-center gap-1.5 px-3 py-1 rounded-none border-2 transition-colors ${
                          isCompared 
                            ? 'bg-[#0754AE] text-white border-[#0754AE] font-bold'
                            : 'bg-white text-[#0754AE] border-blue-300 hover:border-[#2166D1]'
                        }`}
                      >
                        {isCompared ? <CheckSquare className="w-3.5 h-3.5 text-white" /> : <Square className="w-3.5 h-3.5 text-[#0754AE]" />}
                        <span>{isCompared ? 'COMPARING' : 'COMPARE'}</span>
                      </button>

                      <span className="text-[10px] text-emerald-600 font-bold flex items-center gap-1">
                        ✓ PE STAMPED SPEC
                      </span>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => onSelectProduct(product)}
                        className="flex-1 py-2.5 bg-white border-2 border-blue-300 hover:border-[#2166D1] text-[#0754AE] text-xs font-mono font-bold rounded-none flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5 text-[#0754AE]" />
                        <span>VIEW SPEC</span>
                      </button>
                      <button
                        onClick={() => onRequestQuote(product)}
                        className="flex-1 py-2.5 bg-[#0754AE] hover:bg-[#2166D1] text-white text-xs font-mono font-bold rounded-none flex items-center justify-center gap-1.5 transition-colors border-2 border-[#0754AE]"
                      >
                        <ShoppingBag className="w-3.5 h-3.5 text-white" />
                        <span>ADD TO QUOTE</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
