import React, { useState } from 'react';
import { Product } from '../types';
import { PRODUCTS_CATALOGUE } from '../data/trenchData';
import { ArrowLeft, Download, ShieldCheck, CheckCircle2, FileText, Share2, ChevronRight } from 'lucide-react';

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
  const relatedProducts = PRODUCTS_CATALOGUE.filter(p => p.id !== product.id && p.category === product.category).slice(0, 4);

  return (
    <div className="py-12 bg-[#F8F8F8] min-h-screen">
      <div className="container-industrial space-y-8">
        
        {/* Breadcrumbs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-2 border-[#004AAD] pb-4 font-mono text-xs">
          <div className="flex items-center gap-2 text-[#004AAD]">
            <button
              onClick={onBackToCatalogue}
              className="font-bold hover:text-[#0085F4] flex items-center gap-1.5"
            >
              <ArrowLeft className="w-4 h-4 text-[#004AAD]" />
              <span>PRODUCTS</span>
            </button>
            <span>/</span>
            <span className="uppercase text-[#0085F4]">{product.category}</span>
            <span>/</span>
            <span className="font-bold text-[#004AAD] uppercase">{product.name}</span>
          </div>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Product Image */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative h-[420px] sm:h-[480px] border-2 border-[#004AAD] bg-white shadow-xl flex items-center justify-center p-4">
              
              <div className="absolute top-4 left-4 z-10 flex gap-2">
                <span className="px-2.5 py-1 bg-[#004AAD] text-white text-[10px] font-mono font-bold uppercase">
                  PART #{product.partNumber}
                </span>
                <span className="px-2.5 py-1 bg-[#0085F4] text-white text-[10px] font-mono font-bold uppercase">
                  {product.standard}
                </span>
              </div>

              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Details & Actions */}
          <div className="lg:col-span-6 space-y-6 bg-white border-2 border-[#E2E8F0] p-8 shadow-md">
            
            <div className="space-y-2 border-b-2 border-[#004AAD] pb-6">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-[#F0F7FF] border border-[#0085F4] text-[#004AAD] font-mono text-[10px] font-bold uppercase">
                  {product.subcategory}
                </span>
                <span className="text-[#0085F4] font-mono text-xs font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0085F4]" />
                  PE STAMPED • OSHA CERTIFIED
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#004AAD] font-heading uppercase leading-tight">
                {product.name}
              </h1>

              <p className="text-body-large text-[#475569] font-medium">
                {product.description}
              </p>
            </div>

            {/* Core Tech Specs Grid */}
            <div className="grid grid-cols-2 gap-4 font-mono text-xs">
              <div className="p-3 bg-[#F8F8F8] border border-[#E2E8F0] space-y-0.5">
                <span className="text-[#475569] font-bold block uppercase">MATERIAL GRADE</span>
                <span className="font-extrabold text-[#004AAD] truncate block">{product.material}</span>
              </div>

              <div className="p-3 bg-[#F8F8F8] border border-[#E2E8F0] space-y-0.5">
                <span className="text-[#475569] font-bold block uppercase">LOAD RATING</span>
                <span className="font-extrabold text-[#0085F4] truncate block">{product.loadRating}</span>
              </div>

              <div className="p-3 bg-[#F8F8F8] border border-[#E2E8F0] space-y-0.5">
                <span className="text-[#475569] font-bold block uppercase">STANDARD DIMENSIONS</span>
                <span className="font-extrabold text-[#004AAD] truncate block">{product.sizeRange}</span>
              </div>

              <div className="p-3 bg-[#F8F8F8] border border-[#E2E8F0] space-y-0.5">
                <span className="text-[#475569] font-bold block uppercase">SYSTEM WEIGHT</span>
                <span className="font-extrabold text-[#004AAD] truncate block">{product.weight || '12,400 LBS'}</span>
              </div>
            </div>

            {/* Features */}
            {product.features && (
              <div className="space-y-2 pt-2">
                <span className="text-xs font-mono font-bold text-[#004AAD] uppercase block">KEY STRUCTURAL FEATURES:</span>
                <ul className="space-y-1.5 font-mono text-xs text-[#475569]">
                  {product.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0085F4]" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Actions */}
            <div className="pt-4 border-t border-[#E2E8F0] flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onRequestQuote(product)}
                className="btn-brand-primary flex-1 py-4 text-xs font-bold"
              >
                REQUEST INSTANT QUOTE
              </button>

              <button
                onClick={() => alert(`Downloading PE structural calculation packet for ${product.name}...`)}
                className="btn-brand-secondary py-4 px-6 text-xs font-bold flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-[#004AAD]" />
                <span>DOWNLOAD PE / CAD PACKET</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
