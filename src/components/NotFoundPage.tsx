import React, { useState } from 'react';
import { Search, ArrowLeft, ShieldCheck, Home, Package, PhoneCall, AlertTriangle } from 'lucide-react';

interface NotFoundPageProps {
  onNavigateHome: () => void;
  onNavigateProducts: () => void;
  onRequestQuote: () => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({
  onNavigateHome,
  onNavigateProducts,
  onRequestQuote
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      window.location.hash = `#/products?search=${encodeURIComponent(searchTerm.trim())}`;
    } else {
      onNavigateProducts();
    }
  };

  return (
    <div className="py-20 bg-[#F8FAFC] min-h-[85vh] flex items-center border-b border-[#E2E8F0]">
      <div className="container-industrial max-w-4xl space-y-8 my-auto">
        
        {/* 404 Main Card */}
        <div className="bg-white border-2 border-[#004AAD] p-8 sm:p-12 shadow-2xl space-y-8 relative overflow-hidden">
          
          {/* Top Industrial Banner */}
          <div className="flex justify-between items-center pb-6 border-b-2 border-[#004AAD]">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#F1F5F9] border border-[#004AAD] text-xs font-mono font-bold text-[#004AAD] uppercase">
              <AlertTriangle className="w-4 h-4 text-[#0085F4]" />
              <span>404 // UNMAPPED BLUEPRINT ROUTE</span>
            </div>
            <span className="text-xs font-mono font-extrabold text-[#0085F4] uppercase">ERROR CODE: 404_PAGE_NOT_FOUND</span>
          </div>

          {/* Core Content */}
          <div className="space-y-4 font-mono">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#004AAD] uppercase tracking-tight leading-none">
              SPECIFICATION PAGE <span className="text-[#0085F4]">NOT FOUND</span>
            </h1>
            <p className="text-sm sm:text-base text-[#475569] font-sans font-medium leading-relaxed max-w-2xl">
              The engineering submittal page, product part number, or route you requested does not exist or has been relocated within our central foundry database.
            </p>
          </div>

          {/* Retention Psychology Search Control: Keep User Engaged */}
          <div className="bg-[#F8FAFC] border-2 border-[#E2E8F0] p-6 space-y-3 font-mono">
            <span className="text-xs font-bold text-[#004AAD] uppercase block">
              SEARCH OVER 1,000+ TRENCH PRODUCTS &amp; CAD SUBMITTALS:
            </span>
            <form onSubmit={handleSearchSubmit} className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-[#0085F4] absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  placeholder="Enter part number, trench width, or load class (e.g. H-20, ADA, F900)..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white border-2 border-[#CBD5E1] text-[#004AAD] font-bold focus:outline-none focus:border-[#0085F4] text-xs"
                />
              </div>
              <button
                type="submit"
                className="bg-[#004AAD] hover:bg-[#0085F4] text-white font-extrabold text-xs px-6 py-3 uppercase transition-colors shrink-0 flex items-center justify-center gap-1.5"
              >
                <span>SEARCH CATALOGUE</span>
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </button>
            </form>
          </div>

          {/* Direct Recovery Actions: Zero Dead-Ends */}
          <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
            <button
              onClick={onNavigateHome}
              className="bg-white hover:bg-[#F1F5F9] text-[#004AAD] border-2 border-[#004AAD] font-bold py-3.5 px-4 uppercase transition-colors text-center flex items-center justify-center gap-2"
            >
              <Home className="w-4 h-4 text-[#0085F4]" />
              <span>RETURN HOME</span>
            </button>

            <button
              onClick={onNavigateProducts}
              className="bg-[#004AAD] hover:bg-[#0085F4] text-white font-bold py-3.5 px-4 uppercase transition-colors text-center flex items-center justify-center gap-2"
            >
              <Package className="w-4 h-4 text-[#00BBFF]" />
              <span>FULL CATALOGUE</span>
            </button>

            <button
              onClick={onRequestQuote}
              className="bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#004AAD] border-2 border-[#CBD5E1] font-bold py-3.5 px-4 uppercase transition-colors text-center flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-[#0085F4]" />
              <span>DIRECT DISPATCH</span>
            </button>
          </div>

          {/* Sub-Footer Assurance */}
          <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-[11px] font-mono text-[#64748B]">
            <span className="flex items-center gap-1.5 font-bold text-[#004AAD]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0085F4]" />
              FOUNDRY CUSTOMER ASSISTANCE ACTIVE
            </span>
            <span>DIRECT OEM SUPPLY • ISO 9001:2015</span>
          </div>

        </div>

      </div>
    </div>
  );
};
