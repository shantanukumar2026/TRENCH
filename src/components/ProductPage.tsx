import React, { useState } from 'react';
import { Product } from '../types';
import { PRODUCTS_CATALOGUE } from '../data/trenchData';
import { ArrowLeft, Download, ShieldCheck, CheckCircle2, FileText, Factory, ChevronRight, Award } from 'lucide-react';

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
  const relatedProducts = PRODUCTS_CATALOGUE.filter(p => p.id !== product.id && p.category === product.category).slice(0, 3);

  return (
    <div className="py-12 bg-[#F8FAFC] min-h-screen">
      <div className="container-industrial space-y-8">
        
        {/* Breadcrumb Navigation Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-2 border-[#004AAD] pb-4 font-mono text-xs">
          <div className="flex items-center gap-2 text-[#004AAD]">
            <button
              onClick={onBackToCatalogue}
              className="font-bold hover:text-[#0085F4] flex items-center gap-1.5 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-[#004AAD]" />
              <span>CATALOGUE</span>
            </button>
            <span>/</span>
            <span className="uppercase text-[#0085F4] font-semibold">{product.category}</span>
            <span>/</span>
            <span className="font-bold text-[#004AAD] uppercase">{product.partNumber}</span>
          </div>

          <div className="flex items-center gap-3 text-[11px] text-[#475569]">
            <span className="flex items-center gap-1 font-bold text-[#004AAD]">
              <Factory className="w-3.5 h-3.5 text-[#0085F4]" />
              DIRECT FOUNDRY DISPATCH
            </span>
            <span>•</span>
            <span className="font-bold text-[#0085F4]">ISO 9001:2015 CERTIFIED</span>
          </div>
        </div>

        {/* Product Specification & Engineering Sheet */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Product Technical Image & CAD Drawings */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative h-[420px] sm:h-[480px] border-2 border-[#004AAD] bg-white shadow-lg flex items-center justify-center p-6 group">
              
              {/* Product Badges */}
              <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#004AAD] text-white text-[11px] font-mono font-extrabold uppercase tracking-wider shadow-sm">
                  PART #{product.partNumber}
                </span>
                <span className="px-3 py-1 bg-[#0085F4] text-white text-[11px] font-mono font-extrabold uppercase tracking-wider shadow-sm">
                  {product.standard}
                </span>
              </div>

              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/logo.png'; }}
              />
            </div>

            {/* Submittal & CAD Download Bar */}
            <div className="bg-white border-2 border-[#E2E8F0] p-6 shadow-sm space-y-4 font-mono">
              <div className="flex justify-between items-center pb-3 border-b border-[#E2E8F0]">
                <span className="text-xs font-bold text-[#004AAD] uppercase flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#0085F4]" />
                  ENGINEERING SUBMITTAL PACKET
                </span>
                <span className="text-[10px] bg-[#F1F5F9] text-[#004AAD] px-2 py-0.5 font-bold uppercase border border-[#CBD5E1]">
                  PE STAMPED DWG / STEP
                </span>
              </div>
              <p className="text-xs text-[#475569] font-sans font-medium leading-relaxed">
                Download complete AutoCAD DWG dimensional drawings, 3D STEP solid models, and PE stamped structural calculation sheets for municipal submittal review.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-1 text-xs">
                <button
                  onClick={() => alert(`Downloading PE Structural Calculation Submittal for ${product.partNumber}...`)}
                  className="bg-[#004AAD] hover:bg-[#0085F4] text-white font-bold py-3 px-4 uppercase transition-colors text-center flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>DWG / STEP DRAWING</span>
                </button>
                <button
                  onClick={() => alert(`Downloading Metallurgical Test Certification Sheet for ${product.partNumber}...`)}
                  className="bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#004AAD] border border-[#CBD5E1] font-bold py-3 px-4 uppercase transition-colors text-center flex items-center justify-center gap-2"
                >
                  <ShieldCheck className="w-4 h-4 text-[#0085F4]" />
                  <span>ASTM TEST DATA</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Engineering Details & B2B Submittal Form */}
          <div className="lg:col-span-6 space-y-6 bg-white border-2 border-[#E2E8F0] p-8 shadow-md">
            
            {/* Header Block */}
            <div className="space-y-3 border-b-2 border-[#004AAD] pb-6">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 bg-[#F1F5F9] border border-[#0085F4] text-[#004AAD] font-mono text-[11px] font-bold uppercase">
                  {product.subcategory}
                </span>
                <span className="text-[#0085F4] font-mono text-xs font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0085F4]" />
                  AASHTO M306 / ASTM CERTIFIED
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#004AAD] font-mono uppercase leading-tight">
                {product.name}
              </h1>

              <p className="text-sm sm:text-base text-[#475569] font-sans font-medium leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Comprehensive Metallurgical & Technical Spec Matrix */}
            <div className="space-y-3 font-mono text-xs">
              <span className="text-xs font-bold text-[#004AAD] uppercase block border-b border-[#E2E8F0] pb-1">
                ENGINEERING SPECIFICATIONS TABLE:
              </span>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                  <span className="text-[#64748B] font-bold block text-[10px] uppercase">METALLURGY GRADE</span>
                  <strong className="text-[#004AAD] block text-xs">{product.material}</strong>
                </div>

                <div className="p-3 bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                  <span className="text-[#64748B] font-bold block text-[10px] uppercase">PROOF LOAD CERTIFICATION</span>
                  <strong className="text-[#0085F4] block text-xs">{product.loadRating}</strong>
                </div>

                <div className="p-3 bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                  <span className="text-[#64748B] font-bold block text-[10px] uppercase">DIMENSIONAL SIZING</span>
                  <strong className="text-[#004AAD] block text-xs">{product.sizeRange}</strong>
                </div>

                <div className="p-3 bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                  <span className="text-[#64748B] font-bold block text-[10px] uppercase">SURFACE COATING SPEC</span>
                  <strong className="text-[#004AAD] block text-xs">{product.finish || 'KTL Dip / Natural Patina'}</strong>
                </div>
              </div>
            </div>

            {/* Key Features */}
            {product.features && (
              <div className="space-y-2 pt-2 font-mono text-xs">
                <span className="font-bold text-[#004AAD] uppercase block">MANUFACTURER COMPLIANCE FEATURES:</span>
                <ul className="space-y-2 font-sans text-xs text-[#334155] font-medium">
                  {product.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0085F4] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Actions: Request Quote for Project Submittal */}
            <div className="pt-6 border-t border-[#E2E8F0] space-y-3 font-mono text-xs">
              <button
                onClick={() => onRequestQuote(product)}
                className="w-full bg-[#004AAD] hover:bg-[#0085F4] text-white font-extrabold py-4 px-6 uppercase transition-all shadow-md text-center text-sm flex items-center justify-center gap-2"
              >
                <span>REQUEST VOLUME CONTRACTOR QUOTE</span>
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </button>

              <div className="text-[11px] text-[#64748B] text-center font-sans font-medium">
                PE Stamped Calculation Packets and Metallurgical Mill Test Reports provided with all formal project bids.
              </div>
            </div>

          </div>

        </div>

        {/* Related Products within Category */}
        {relatedProducts.length > 0 && (
          <div className="pt-12 border-t-2 border-[#004AAD] space-y-6">
            <div className="flex justify-between items-end font-mono">
              <div>
                <span className="text-xs font-bold text-[#0085F4] uppercase block">INFRASTRUCTURE CATEGORY MATCHES</span>
                <h3 className="text-xl font-extrabold text-[#004AAD] uppercase">RELATED {product.category} PRODUCTS</h3>
              </div>
              <button
                onClick={onBackToCatalogue}
                className="text-xs font-bold text-[#0085F4] hover:underline uppercase flex items-center gap-1"
              >
                <span>VIEW FULL CATEGORY</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
              {relatedProducts.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => onSelectRelatedProduct(rel)}
                  className="bg-white border-2 border-[#E2E8F0] hover:border-[#0085F4] p-5 shadow-sm hover:shadow-md transition-all cursor-pointer space-y-3 flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="h-40 bg-[#F8FAFC] border border-[#E2E8F0] p-4 flex items-center justify-center overflow-hidden">
                      <img
                        src={rel.image}
                        alt={rel.name}
                        className="max-h-32 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/logo.png'; }}
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-[#0085F4] uppercase block">{rel.partNumber}</span>
                      <h4 className="text-sm font-extrabold text-[#004AAD] uppercase group-hover:text-[#0085F4] transition-colors">{rel.name}</h4>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[#E2E8F0] flex justify-between items-center text-[11px] font-bold text-[#004AAD]">
                    <span>INSPECT SPECS</span>
                    <ChevronRight className="w-4 h-4 text-[#0085F4] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
