import React, { useState } from 'react';
import { PRODUCTS_CATALOGUE, PRIMARY_CATEGORIES } from '../data/trenchData';
import { Product } from '../types';
import { Search, Filter, ShieldCheck, Download, ChevronRight, Layers, FileText, ShoppingBag, Eye, SlidersHorizontal, CheckSquare, Square } from 'lucide-react';

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

    const matchesWorkflow = selectedWorkflowStep === 'all' || prod.workflowStep === selectedWorkflowStep;

    return matchesCategory && matchesSearch && matchesWorkflow;
  });

  return (
    <section id="catalogue" className="py-20 bg-[#F8F8F8] border-b border-[#E2E8F0]">
      <div className="container-industrial space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-[#004AAD] pb-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F0F7FF] border border-[#0085F4] text-xs font-mono font-bold text-[#004AAD]">
              <ShieldCheck className="w-4 h-4 text-[#0085F4]" />
              <span>AASHTO M306 &amp; ASTM A536 FOUNDRY CATALOGUE</span>
            </div>
            <h2 className="text-section-title text-[#004AAD] uppercase">
              TRENCH PRODUCTS <span className="text-[#0085F4]">CATALOGUE</span>
            </h2>
            <p className="text-body-large text-[#475569] max-w-xl font-medium">
              Explore engineered trench covers, ADA heel-proof gratings, urban cast iron tree grates, and heavy duty airport drainage channels.
            </p>
          </div>

          {/* Comparison Drawer Trigger Bar */}
          {comparedProductIds.length > 0 && (
            <button
              onClick={onOpenComparisonModal}
              className="btn-brand-primary text-xs py-3 px-6"
            >
              <CheckSquare className="w-4 h-4" />
              <span>COMPARE {comparedProductIds.length} SELECTED PRODUCTS</span>
            </button>
          )}
        </div>

        {/* Filter Bar & Search Box */}
        <div className="bg-white p-6 border-2 border-[#E2E8F0] shadow-md space-y-4 font-mono text-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-[#0085F4] absolute left-3.5 top-3.5" />
              <input
                type="text"
                placeholder="Search product, part number, size, material or standard..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-[#F0F7FF] border-2 border-[#E2E8F0] text-[#004AAD] font-bold focus:outline-none focus:border-[#0085F4]"
              />
            </div>

            {/* Category Dropdown */}
            <div className="md:col-span-3">
              <select
                value={selectedCategoryFilter}
                onChange={(e) => onCategoryFilterChange(e.target.value)}
                className="w-full p-3 bg-[#F0F7FF] border-2 border-[#E2E8F0] text-[#004AAD] font-bold outline-none cursor-pointer"
              >
                <option value="all">ALL CATEGORIES</option>
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
                className="w-full p-3 bg-[#F0F7FF] border-2 border-[#E2E8F0] text-[#004AAD] font-bold outline-none cursor-pointer"
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

          <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-[#E2E8F0] text-[#004AAD]">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#0085F4]" />
              <span className="font-bold">ACTIVE FILTERS:</span>
              <span className="bg-[#F0F7FF] px-2 py-1 text-[#004AAD] border border-[#0085F4] font-bold">
                Showing {filteredProducts.length} featured items of 1,000+ certified products
              </span>
            </div>

            {(searchTerm || selectedCategoryFilter !== 'all' || selectedWorkflowStep !== 'all') && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  onCategoryFilterChange('all');
                  setSelectedWorkflowStep('all');
                }}
                className="text-[#0085F4] hover:underline font-bold"
              >
                RESET ALL FILTERS
              </button>
            )}
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white border-2 border-[#E2E8F0] p-16 text-center space-y-4 font-mono">
            <p className="text-lg font-heading text-[#004AAD] uppercase">NO PRODUCTS MATCH YOUR CRITERIA</p>
            <p className="text-xs text-[#475569]">Try clearing your search query or selecting ALL CATEGORIES.</p>
            <button
              onClick={() => { setSearchTerm(''); onCategoryFilterChange('all'); setSelectedWorkflowStep('all'); }}
              className="btn-brand-primary py-2.5 px-6 text-xs"
            >
              SHOW ALL PRODUCTS
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const isCompared = comparedProductIds.includes(product.id);
              return (
                <div
                  key={product.id}
                  className="bg-white border-2 border-[#E2E8F0] hover:border-[#0085F4] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="p-6 space-y-4">
                    
                    {/* Card Image */}
                    <div 
                      className="h-52 overflow-hidden border border-[#E2E8F0] bg-[#F0F7FF] relative cursor-pointer"
                      onClick={() => onSelectProduct(product)}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/logo.png'; }}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#004AAD] text-white text-[10px] font-mono font-bold uppercase">
                        {product.category}
                      </div>
                      <div className="absolute top-3 right-3 px-2.5 py-1 bg-[#0085F4] text-white text-[10px] font-mono font-bold uppercase">
                        {product.partNumber}
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="space-y-1.5">
                      <div className="text-xs font-mono font-bold text-[#0085F4] uppercase flex items-center justify-between">
                        <span>{product.subcategory}</span>
                        <span className="bg-[#F0F7FF] px-2 py-0.5 border border-[#0085F4] text-[#004AAD]">{product.workflowStep || 'INSTALL'}</span>
                      </div>
                      <h3
                        onClick={() => onSelectProduct(product)}
                        className="text-card-title text-[#004AAD] group-hover:text-[#0085F4] cursor-pointer line-clamp-1 uppercase"
                      >
                        {product.name}
                      </h3>
                      <p className="text-xs text-[#475569] font-medium line-clamp-2">
                        {product.description}
                      </p>
                    </div>

                    {/* Specs Table */}
                    <div className="space-y-1.5 font-mono text-xs bg-[#F0F7FF] p-3 border border-[#E2E8F0]">
                      <div className="flex justify-between text-[#004AAD]">
                        <span className="text-[#475569]">MATERIAL:</span>
                        <span className="font-bold truncate max-w-[170px]">{product.material}</span>
                      </div>
                      <div className="flex justify-between text-[#004AAD]">
                        <span className="text-[#475569]">LOAD RATING:</span>
                        <span className="font-bold text-[#0085F4] truncate max-w-[170px]">{product.loadRating}</span>
                      </div>
                      <div className="flex justify-between text-[#004AAD]">
                        <span className="text-[#475569]">STANDARD:</span>
                        <span className="font-bold truncate max-w-[170px]">{product.standard}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions Footer */}
                  <div className="p-4 bg-[#F8F8F8] border-t border-[#E2E8F0] space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <button
                        onClick={() => onToggleCompare(product)}
                        className={`flex items-center gap-1.5 px-3 py-1 border transition-colors ${
                          isCompared 
                            ? 'bg-[#004AAD] text-white border-[#004AAD] font-bold'
                            : 'bg-white text-[#004AAD] border-[#0085F4] hover:bg-[#F0F7FF]'
                        }`}
                      >
                        {isCompared ? <CheckSquare className="w-3.5 h-3.5 text-white" /> : <Square className="w-3.5 h-3.5 text-[#0085F4]" />}
                        <span>{isCompared ? 'COMPARING' : 'COMPARE'}</span>
                      </button>

                      <span className="text-[10px] text-[#0085F4] font-bold">
                        ✓ PE STAMPED TAB DATA
                      </span>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => onSelectProduct(product)}
                        className="flex-1 py-2.5 bg-white border border-[#0085F4] hover:bg-[#F0F7FF] text-[#004AAD] text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5 text-[#0085F4]" />
                        <span>VIEW SPEC</span>
                      </button>
                      <button
                        onClick={() => onRequestQuote(product)}
                        className="flex-1 py-2.5 bg-[#004AAD] hover:bg-[#0085F4] text-white text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-colors"
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
