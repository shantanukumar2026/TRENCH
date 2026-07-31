import React, { useState } from 'react';
import { Product } from '../types';
import { PRODUCTS_CATALOGUE } from '../data/trenchData';
import { ArrowLeft, Download, ShieldCheck, CheckCircle2, FileText, Share2, Printer, ChevronRight } from 'lucide-react';

interface ProductPageProps {
  product: Product;
  onBackToCatalogue: () => void;
  onRequestQuote: (product: Product) => void;
  onSelectRelatedProduct: (product: Product) => void;
}

export const ProductPage: React.FC<ProductPageProps> = ({
  product,
  onBackToCatalogue,
  onRequestQuote,
  onSelectRelatedProduct
}) => {
  const [activeTab, setActiveTab] = useState<'specs' | 'features' | 'applications'>('specs');

  const relatedProducts = PRODUCTS_CATALOGUE.filter(p => p.id !== product.id && p.category === product.category).slice(0, 4);

  return (
    <div className="py-12 bg-[#F8FAFC] min-h-screen">
      <div className="container-custom space-y-8">
        
        {/* Top Breadcrumb Rail */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-2 border-slate-200 pb-4 font-mono text-xs">
          <div className="flex items-center gap-2 text-[#0A2540]">
            <button
              onClick={onBackToCatalogue}
              className="font-bold hover:text-[#0066FF] flex items-center gap-1.5"
            >
              <ArrowLeft className="w-4 h-4 text-[#0A2540]" />
              <span>PRODUCTS</span>
            </button>
            <span>/</span>
            <span className="uppercase text-slate-500">{product.category}</span>
            <span>/</span>
            <span className="font-bold text-[#0066FF] uppercase">{product.name}</span>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => alert(`Share link for ${product.name} copied to clipboard!`)}
              className="p-2 bg-white border border-slate-200 text-[#0A2540] hover:bg-[#F4F8FF]"
              title="Share product link"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button 
              onClick={() => window.print()}
              className="p-2 bg-white border border-slate-200 text-[#0A2540] hover:bg-[#F4F8FF]"
              title="Print spec sheet"
            >
              <Printer className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Hero Section: Two-Column Dedicated Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: High-Resolution Product Image Presentation */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative h-[420px] sm:h-[480px] border-2 border-slate-200 bg-white shadow-xl flex items-center justify-center p-4">
              
              <div className="absolute top-4 left-4 z-10 flex gap-2">
                <span className="px-2.5 py-1 bg-[#0A2540] text-white text-[10px] font-mono font-bold uppercase">
                  PART #{product.partNumber}
                </span>
                <span className="px-2.5 py-1 bg-[#0066FF] text-white text-[10px] font-mono font-bold uppercase">
                  {product.standard}
                </span>
              </div>

              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover shadow-sm"
              />
            </div>
          </div>

          {/* Right Column: Key Details & Purchasing Actions */}
          <div className="lg:col-span-6 space-y-6 bg-white border-2 border-slate-200 p-8 shadow-sm">
            
            <div className="space-y-2 border-b-2 border-slate-200 pb-6">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-[#F4F8FF] border border-[#0066FF]/30 text-[#0066FF] font-mono text-[10px] font-bold uppercase">
                  {product.subcategory}
                </span>
                <span className="text-emerald-700 font-mono text-xs font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  IN STOCK • FIELD READY
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] font-heading uppercase leading-tight">
                {product.name}
              </h1>

              <p className="text-xs sm:text-sm text-[#475569] font-medium leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Core Technical Specifications Grid */}
            <div className="grid grid-cols-2 gap-4 font-mono text-xs">
              <div className="p-3 bg-[#F8FAFC] border border-slate-200 space-y-0.5">
                <span className="text-[10px] text-slate-500 font-bold block">MATERIAL GRADE</span>
                <span className="font-extrabold text-[#0A2540] truncate block">{product.material}</span>
              </div>

              <div className="p-3 bg-[#F8FAFC] border border-slate-200 space-y-0.5">
                <span className="text-[10px] text-slate-500 font-bold block">LOAD RATING</span>
                <span className="font-extrabold text-[#0066FF] truncate block">{product.loadRating}</span>
              </div>

              <div className="p-3 bg-[#F8FAFC] border border-slate-200 space-y-0.5">
                <span className="text-[10px] text-slate-500 font-bold block">STANDARD DIMENSIONS</span>
                <span className="font-extrabold text-[#0A2540] truncate block">{product.sizeRange}</span>
              </div>

              <div className="p-3 bg-[#F8FAFC] border border-slate-200 space-y-0.5">
                <span className="text-[10px] text-slate-500 font-bold block">TOTAL SYSTEM WEIGHT</span>
                <span className="font-extrabold text-[#0A2540] truncate block">{product.weight || 'VARIES'}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onRequestQuote(product)}
                className="btn-primary flex-1 py-4 text-sm font-bold justify-center"
              >
                REQUEST INSTANT QUOTE →
              </button>

              <button
                onClick={() => alert(`Downloading PE structural calculation packet for ${product.name}...`)}
                className="btn-secondary py-4 px-6 text-sm font-bold flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-[#0A2540]" />
                <span>DOWNLOAD DWG / PE PACKET</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
