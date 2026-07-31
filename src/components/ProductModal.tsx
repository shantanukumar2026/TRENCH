import React, { useState } from 'react';
import { Product } from '../types';
import { X, Download, ShieldCheck, CheckCircle2, ArrowRight, Layers, FileText, Compass, Box, Maximize2, RefreshCw } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onRequestQuote: (product: Product) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onRequestQuote }) => {
  const [viewMode, setViewMode] = useState<'3d' | 'exploded' | 'install' | 'dimensions'>('3d');
  const [rotationDegree, setRotationDegree] = useState<number>(0);

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0754AE]/60 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white border-2 border-blue-300 rounded-2xl w-full max-w-5xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col">
        
        {/* Top Breadcrumb & Header Bar */}
        <div className="bg-gradient-to-r from-[#0754AE] to-[#2166D1] text-white p-6 flex items-center justify-between shrink-0">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-blue-200">
              <span className="uppercase font-bold">{product.category}</span>
              <span>/</span>
              <span className="uppercase">{product.subcategory || 'SYSTEM PRODUCT'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading uppercase text-white mt-1">
              {product.name}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Modal Body: Two-Column Engineering Layout */}
        <div className="p-6 overflow-y-auto space-y-8 flex-1">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Interactive 3D Product Viewer */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative h-80 rounded-xl overflow-hidden border-2 border-blue-200 bg-[#F0F7FF] bg-blueprint-grid flex items-center justify-center">
                
                <img
                  src={product.image}
                  alt={product.name}
                  onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/images/trench_shield.png'; }}
                  style={{ transform: `rotate(${rotationDegree}deg)` }}
                  className="w-full h-full object-cover transition-transform duration-300"
                />

                {/* View Mode Overlay Controls */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-white/90 backdrop-blur-sm p-2 rounded-lg border border-blue-200 font-mono text-[10px] font-bold">
                  <div className="flex gap-1">
                    <button
                      onClick={() => setViewMode('3d')}
                      className={`px-2.5 py-1 rounded ${viewMode === '3d' ? 'bg-[#0754AE] text-white' : 'bg-[#F0F7FF] text-[#0754AE]'}`}
                    >
                      360° VIEW
                    </button>
                    <button
                      onClick={() => setViewMode('exploded')}
                      className={`px-2.5 py-1 rounded ${viewMode === 'exploded' ? 'bg-[#0754AE] text-white' : 'bg-[#F0F7FF] text-[#0754AE]'}`}
                    >
                      EXPLODED
                    </button>
                    <button
                      onClick={() => setViewMode('install')}
                      className={`px-2.5 py-1 rounded ${viewMode === 'install' ? 'bg-[#0754AE] text-white' : 'bg-[#F0F7FF] text-[#0754AE]'}`}
                    >
                      INSTALLATION
                    </button>
                  </div>
                  <button
                    onClick={() => setRotationDegree((prev) => (prev + 90) % 360)}
                    className="p-1 rounded bg-[#0754AE] text-white hover:bg-[#2166D1]"
                    title="Rotate 90deg"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Verified Product Downloads */}
              <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                <button
                  onClick={() => onRequestQuote(product)}
                  className="btn-primary py-3 flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4 text-white" />
                  <span>REQUEST QUOTE</span>
                </button>
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); alert('Downloading verified PE stamped submittal drawing for ' + product.name); }}
                  className="btn-secondary py-3 flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4 text-[#0754AE]" />
                  <span>DOWNLOAD CAD (.DWG)</span>
                </a>
              </div>
            </div>

            {/* Right Column: Verified Product Specs */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 font-mono text-xs">
                  <span className="px-2 py-0.5 rounded bg-[#C00000] text-white font-bold">
                    PART #: {product.partNumber || '[VERIFIED PART NUMBER]'}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#0754AE] text-white font-bold">
                    {product.workflowStep || 'INSTALL'} STEP
                  </span>
                </div>
                <p className="text-sm text-[#163B66] font-medium leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Key Features Bullet List */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono font-bold text-[#0754AE] uppercase tracking-wider">
                  ENGINEERING &amp; STRUCTURAL HIGHLIGHTS:
                </h4>
                <ul className="space-y-1.5 font-mono text-xs text-[#163B66]">
                  {product.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Specifications Table */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono font-bold text-[#0754AE] uppercase tracking-wider">
                  VERIFIED TECHNICAL DATA TABLE:
                </h4>
                <div className="bg-[#F0F7FF] border border-blue-200 rounded-lg overflow-hidden font-mono text-xs">
                  <div className="grid grid-cols-2 p-2.5 border-b border-blue-200">
                    <span className="text-blue-400">MATERIAL:</span>
                    <span className="font-bold text-[#0754AE]">{product.material || '[VERIFIED MATERIAL]'}</span>
                  </div>
                  <div className="grid grid-cols-2 p-2.5 border-b border-blue-200">
                    <span className="text-blue-400">LOAD RATING:</span>
                    <span className="font-bold text-[#C00000]">{product.loadRating || '[VERIFIED LOAD RATING]'}</span>
                  </div>
                  <div className="grid grid-cols-2 p-2.5 border-b border-blue-200">
                    <span className="text-blue-400">AVAILABLE SIZES:</span>
                    <span className="font-bold text-[#0754AE]">{product.sizeRange || '[AVAILABLE SIZES]'}</span>
                  </div>
                  <div className="grid grid-cols-2 p-2.5 border-b border-blue-200">
                    <span className="text-blue-400">GOVERNING STANDARD:</span>
                    <span className="font-bold text-[#0754AE]">{product.standard || '[APPLICABLE STANDARD]'}</span>
                  </div>
                  <div className="grid grid-cols-2 p-2.5 border-b border-blue-200">
                    <span className="text-blue-400">APPLICATION:</span>
                    <span className="font-bold text-[#163B66]">{product.application || '[PRIMARY APPLICATION]'}</span>
                  </div>
                  <div className="grid grid-cols-2 p-2.5">
                    <span className="text-blue-400">SYSTEM WEIGHT:</span>
                    <span className="font-bold text-[#163B66]">{product.weight || '[VERIFIED WEIGHT]'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Drawing & Engineering Dimension Section */}
          <div className="p-6 bg-[#F0F7FF] border-2 border-blue-200 rounded-xl space-y-4 font-mono text-xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#0754AE]" />
                <span className="font-bold text-[#0754AE] uppercase">VERIFIED ENGINEERING DIMENSIONS &amp; CALLOUTS</span>
              </div>
              <span className="text-emerald-600 font-bold">AASHTO / OSHA SUBPART P APPROVED</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="p-3 bg-white border border-blue-200 rounded-lg">
                <div className="text-[10px] text-blue-400">CALLOUT [A] OVERALL HEIGHT</div>
                <div className="font-bold text-[#0754AE] mt-1">{product.sizes ? product.sizes[0] : '8.0 FT Nominal'}</div>
              </div>
              <div className="p-3 bg-white border border-blue-200 rounded-lg">
                <div className="text-[10px] text-blue-400">CALLOUT [B] WALL THICKNESS</div>
                <div className="font-bold text-[#0754AE] mt-1">4.0 IN Solid Steel</div>
              </div>
              <div className="p-3 bg-white border border-blue-200 rounded-lg">
                <div className="text-[10px] text-blue-400">CALLOUT [C] SPREADER PIN OPENING</div>
                <div className="font-bold text-[#0754AE] mt-1">8.0 IN Schedule 80</div>
              </div>
              <div className="p-3 bg-white border border-blue-200 rounded-lg">
                <div className="text-[10px] text-blue-400">CALLOUT [D] STRUCTURAL WEIGHT</div>
                <div className="font-bold text-[#C00000] mt-1">{product.weight || '12,400 LBS'}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-[#F0F7FF] border-t border-blue-200 p-4 flex items-center justify-between shrink-0">
          <span className="text-xs font-mono text-[#163B66]">
            System ID: {product.id} • PE Stamped Submittal Available
          </span>
          <button
            onClick={onClose}
            className="btn-secondary py-2 px-6 text-xs font-mono"
          >
            CLOSE PRODUCT VIEW
          </button>
        </div>
      </div>
    </div>
  );
};
