import React, { useState } from 'react';
import { Product } from '../types';
import { PRODUCTS_CATALOGUE } from '../data/trenchData';
import { ArrowLeft, Download, ShieldCheck, CheckCircle2, FileText, Compass, RefreshCw, ShoppingBag, Eye, Layers, ChevronRight, Share2, Printer } from 'lucide-react';

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
  const [viewMode, setViewMode] = useState<'3d' | 'exploded' | 'install' | 'dimensions'>('3d');
  const [rotationDegree, setRotationDegree] = useState<number>(0);

  const relatedProducts = PRODUCTS_CATALOGUE.filter(p => p.id !== product.id && p.category === product.category).slice(0, 4);

  return (
    <div className="py-12 bg-[#F8FAFC] min-h-screen">
      <div className="container-custom space-y-12">
        
        {/* Top Breadcrumb Rail */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-2 border-blue-200 pb-4 font-mono text-xs">
          <div className="flex items-center gap-2 text-[#0754AE]">
            <button
              onClick={onBackToCatalogue}
              className="font-bold hover:text-[#2166D1] flex items-center gap-1.5"
            >
              <ArrowLeft className="w-4 h-4 text-[#0754AE]" />
              <span>PRODUCTS</span>
            </button>
            <span>/</span>
            <span className="uppercase text-slate-500">{product.category}</span>
            <span>/</span>
            <span className="font-bold text-[#0754AE] uppercase">{product.name}</span>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => alert(`Share link for ${product.name} copied to clipboard!`)}
              className="p-2 bg-white border border-blue-200 text-[#0754AE] hover:bg-[#F0F7FF] rounded-none"
              title="Share product link"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button 
              onClick={() => window.print()}
              className="p-2 bg-white border border-blue-200 text-[#0754AE] hover:bg-[#F0F7FF] rounded-none"
              title="Print spec sheet"
            >
              <Printer className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Hero Section: Two-Column Dedicated Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Interactive 3D Product Presentation */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative h-[420px] sm:h-[480px] border-2 border-blue-300 bg-white shadow-2xl bg-blueprint-grid flex items-center justify-center p-8 rounded-none">
              
              <div className="absolute top-4 left-4 z-10 flex gap-2">
                <span className="px-2.5 py-1 bg-[#0754AE] text-white text-[10px] font-mono font-bold uppercase rounded-none">
                  {product.category}
                </span>
                <span className="px-2.5 py-1 bg-[#C00000] text-white text-[10px] font-mono font-bold rounded-none">
                  {product.partNumber || '[VERIFIED PART #]'}
                </span>
              </div>

              <img
                src={product.image}
                alt={product.name}
                onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/images/trench_shield.png'; }}
                style={{ transform: `rotate(${rotationDegree}deg)` }}
                className="w-full h-full object-contain transition-transform duration-300"
              />

              {/* View Control Tabs Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3 border-2 border-blue-200 shadow-md font-mono text-xs font-bold flex items-center justify-between rounded-none">
                <div className="flex gap-1.5">
                  <button
                    onClick={() => setViewMode('3d')}
                    className={`px-3 py-1.5 rounded-none ${viewMode === '3d' ? 'bg-[#0754AE] text-white shadow-sm' : 'bg-[#F0F7FF] text-[#0754AE]'}`}
                  >
                    360° VIEW
                  </button>
                  <button
                    onClick={() => setViewMode('exploded')}
                    className={`px-3 py-1.5 rounded-none ${viewMode === 'exploded' ? 'bg-[#0754AE] text-white shadow-sm' : 'bg-[#F0F7FF] text-[#0754AE]'}`}
                  >
                    EXPLODED
                  </button>
                  <button
                    onClick={() => setViewMode('install')}
                    className={`px-3 py-1.5 rounded-none ${viewMode === 'install' ? 'bg-[#0754AE] text-white shadow-sm' : 'bg-[#F0F7FF] text-[#0754AE]'}`}
                  >
                    INSTALLATION
                  </button>
                  <button
                    onClick={() => setViewMode('dimensions')}
                    className={`px-3 py-1.5 rounded-none ${viewMode === 'dimensions' ? 'bg-[#0754AE] text-white shadow-sm' : 'bg-[#F0F7FF] text-[#0754AE]'}`}
                  >
                    CAD DIMENSIONS
                  </button>
                </div>
                <button
                  onClick={() => setRotationDegree((prev) => (prev + 90) % 360)}
                  className="p-2 bg-[#0754AE] text-white hover:bg-[#2166D1] rounded-none"
                  title="Rotate 90°"
                >
                  <RefreshCw className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

            {/* Technical Downloads Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
              <button
                onClick={() => onRequestQuote(product)}
                className="btn-primary py-4 text-sm flex items-center justify-center gap-2 shadow-lg"
              >
                <ShoppingBag className="w-5 h-5 text-white" />
                <span>REQUEST INSTANT QUOTE →</span>
              </button>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); alert(`Downloading verified PE stamped CAD (.DWG) drawing for ${product.name}`); }}
                className="btn-secondary py-4 text-sm flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5 text-[#0754AE]" />
                <span>DOWNLOAD CAD (.DWG)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Product Overview & Verified Specifications */}
          <div className="lg:col-span-6 space-y-8">
            
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F0F7FF] border border-blue-200 font-mono text-xs font-bold text-[#0754AE] rounded-none">
                <ShieldCheck className="w-4 h-4 text-[#C00000]" />
                <span>GOVERNING STANDARD: {product.standard || '[APPLICABLE STANDARD]'}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0754AE] font-heading uppercase leading-tight">
                {product.name}
              </h1>

              <p className="text-base text-[#163B66] font-medium leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-xs">
              <div className="p-3.5 bg-white border-2 border-blue-200 shadow-sm space-y-1 rounded-none">
                <span className="text-[10px] text-slate-500 font-bold uppercase block">MATERIAL</span>
                <span className="font-bold text-[#0754AE] text-xs block truncate">{product.material || '[VERIFIED MATERIAL]'}</span>
              </div>
              <div className="p-3.5 bg-white border-2 border-blue-200 shadow-sm space-y-1 rounded-none">
                <span className="text-[10px] text-slate-500 font-bold uppercase block">LOAD RATING</span>
                <span className="font-bold text-[#C00000] text-xs block truncate">{product.loadRating || '[VERIFIED RATING]'}</span>
              </div>
              <div className="p-3.5 bg-white border-2 border-blue-200 shadow-sm space-y-1 rounded-none">
                <span className="text-[10px] text-slate-500 font-bold uppercase block">SIZE RANGE</span>
                <span className="font-bold text-[#0754AE] text-xs block truncate">{product.sizeRange || '[AVAILABLE SIZES]'}</span>
              </div>
            </div>

            {/* Engineering Highlights */}
            <div className="space-y-3 bg-white p-6 border-2 border-blue-200 shadow-sm rounded-none">
              <h3 className="text-sm font-mono font-bold text-[#0754AE] uppercase tracking-wider">
                ENGINEERING &amp; STRUCTURAL HIGHLIGHTS:
              </h3>
              <ul className="space-y-2 font-mono text-xs text-[#163B66]">
                {product.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* HOW IT WORKS: Roadway & Ground Installation Sequence */}
        <div className="bg-white p-8 border-2 border-blue-300 shadow-xl space-y-6 rounded-none">
          <div className="flex items-center justify-between border-b-2 border-blue-200 pb-4">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-[#C00000] uppercase tracking-widest block">INSTALLATION SEQUENCE</span>
              <h2 className="text-2xl font-bold text-[#0754AE] font-heading uppercase">
                HOW IT WORKS — UNDERGROUND INSTALLATION RELATIONSHIP
              </h2>
            </div>
            <span className="text-xs font-mono font-bold text-[#0754AE] bg-[#F0F7FF] px-3 py-1.5 border border-blue-200 rounded-none">
              ROAD SURFACE → SUBGRADE → PRODUCT INVERT
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 font-mono text-xs text-center">
            <div className="p-4 bg-[#F0F7FF] border border-blue-200 space-y-2 rounded-none">
              <span className="w-6 h-6 bg-[#0754AE] text-white flex items-center justify-center mx-auto text-xs font-bold rounded-none">1</span>
              <div className="font-bold text-[#0754AE]">ROAD SURFACE DECK</div>
              <p className="text-[11px] text-[#163B66]">AASHTO H-20 / HS-20 traffic rated finished pavement.</p>
            </div>
            <div className="p-4 bg-[#F0F7FF] border border-blue-200 space-y-2 rounded-none">
              <span className="w-6 h-6 bg-[#0754AE] text-white flex items-center justify-center mx-auto text-xs font-bold rounded-none">2</span>
              <div className="font-bold text-[#0754AE]">ACCESS SHAFT COVER</div>
              <p className="text-[11px] text-[#163B66]">Adjustable grade ring and ductile iron street casting.</p>
            </div>
            <div className="p-4 bg-[#F0F7FF] border border-blue-200 space-y-2 rounded-none">
              <span className="w-6 h-6 bg-[#0754AE] text-white flex items-center justify-center mx-auto text-xs font-bold rounded-none">3</span>
              <div className="font-bold text-[#0754AE]">{product.name.toUpperCase()}</div>
              <p className="text-[11px] text-[#163B66]">Engineered main product body positioned at invert depth.</p>
            </div>
            <div className="p-4 bg-[#F0F7FF] border border-blue-200 space-y-2 rounded-none">
              <span className="w-6 h-6 bg-[#0754AE] text-white flex items-center justify-center mx-auto text-xs font-bold rounded-none">4</span>
              <div className="font-bold text-[#0754AE]">BEDDING ENVELOPE</div>
              <p className="text-[11px] text-[#163B66]">ASTM C33 washed stone embedment supporting load.</p>
            </div>
            <div className="p-4 bg-[#F0F7FF] border border-blue-200 space-y-2 rounded-none">
              <span className="w-6 h-6 bg-[#0754AE] text-white flex items-center justify-center mx-auto text-xs font-bold rounded-none">5</span>
              <div className="font-bold text-[#0754AE]">UTILITY MAIN NODE</div>
              <p className="text-[11px] text-[#163B66]">Connected water, sewer, or electrical main corridor.</p>
            </div>
          </div>
        </div>

        {/* Technical Data Specification Table */}
        <div className="bg-white p-8 border-2 border-blue-300 shadow-xl space-y-6 rounded-none">
          <div className="border-b-2 border-blue-200 pb-4">
            <h2 className="text-2xl font-bold text-[#0754AE] font-heading uppercase">
              TECHNICAL DATA &amp; ENGINEERING SPECIFICATIONS
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse font-mono text-xs">
              <thead>
                <tr className="bg-[#0754AE] text-white">
                  <th className="p-3.5 font-bold">MODEL / ID</th>
                  <th className="p-3.5 font-bold">PART NUMBER</th>
                  <th className="p-3.5 font-bold">MATERIAL</th>
                  <th className="p-3.5 font-bold">LOAD RATING</th>
                  <th className="p-3.5 font-bold">SIZE RANGE</th>
                  <th className="p-3.5 font-bold">STANDARD</th>
                  <th className="p-3.5 font-bold">WEIGHT</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-blue-200 text-[#163B66]">
                <tr className="hover:bg-[#F0F7FF]">
                  <td className="p-3.5 font-bold text-[#0754AE]">{product.id}</td>
                  <td className="p-3.5 font-bold text-[#C00000]">{product.partNumber || '[VERIFIED PART NUMBER]'}</td>
                  <td className="p-3.5">{product.material || '[VERIFIED MATERIAL]'}</td>
                  <td className="p-3.5 font-bold text-[#C00000]">{product.loadRating || '[VERIFIED RATING]'}</td>
                  <td className="p-3.5">{product.sizeRange || '[AVAILABLE SIZES]'}</td>
                  <td className="p-3.5 font-bold text-[#0754AE]">{product.standard || '[APPLICABLE STANDARD]'}</td>
                  <td className="p-3.5">{product.weight || '[VERIFIED WEIGHT]'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* COMPLETE THE SYSTEM: Related Products */}
        {relatedProducts.length > 0 && (
          <div className="space-y-6 pt-4">
            <div className="border-b-2 border-blue-200 pb-3 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-[#0754AE] font-heading uppercase">
                COMPLETE THE SYSTEM — COMPATIBLE PRODUCTS
              </h2>
              <span className="text-xs font-mono text-slate-500">Products engineered to work together on the jobsite</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => onSelectRelatedProduct(rel)}
                  className="bg-white border-2 border-blue-200 p-5 hover:border-[#2166D1] hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col justify-between rounded-none"
                >
                  <div className="space-y-3">
                    <div className="h-36 border-2 border-blue-200 bg-[#F0F7FF] overflow-hidden rounded-none">
                      <img
                        src={rel.image}
                        alt={rel.name}
                        onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/images/trench_shield.png'; }}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold text-[#C00000] uppercase block">{rel.partNumber}</span>
                      <h4 className="text-sm font-bold text-[#0754AE] font-heading group-hover:text-[#2166D1] transition-colors line-clamp-1">
                        {rel.name}
                      </h4>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-blue-100 flex items-center justify-between text-xs font-mono font-bold text-[#0754AE] mt-3">
                    <span>VIEW PRODUCT</span>
                    <ChevronRight className="w-4 h-4 text-[#0754AE] group-hover:translate-x-1 transition-transform" />
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
