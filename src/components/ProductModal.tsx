import React from 'react';
import { Product } from '../types';
import { X, Download, ShieldCheck, Check, FileText } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onRequestQuote: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onRequestQuote }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0754AE]/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-2xl border-2 border-blue-300 overflow-hidden max-h-[90vh] flex flex-col justify-between animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-[#0754AE] text-white p-6 flex justify-between items-start border-b border-blue-600">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-blue-200">
              <ShieldCheck className="w-4 h-4 text-[#C00000]" />
              {product.category.toUpperCase()} • PART #{product.partNumber}
            </div>
            <h3 className="text-2xl font-bold font-heading uppercase mt-1">
              {product.name}
            </h3>
          </div>
          <button 
            onClick={onClose} 
            className="p-1 text-white/80 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="p-6 overflow-y-auto space-y-6 font-mono text-xs">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="h-56 bg-[#F0F7FF] rounded-lg overflow-hidden border border-blue-200">
              <img 
                src={product.image} 
                alt={product.name} 
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/images/trench_shield.png';
                }}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-3">
              <div className="p-3 bg-[#F0F7FF] rounded border border-blue-100 flex justify-between">
                <span className="text-slate-500">MATERIAL:</span>
                <span className="text-[#0754AE] font-bold">{product.material}</span>
              </div>
              <div className="p-3 bg-[#F0F7FF] rounded border border-blue-100 flex justify-between">
                <span className="text-slate-500">LOAD RATING:</span>
                <span className="text-[#C00000] font-bold">{product.loadRating}</span>
              </div>
              <div className="p-3 bg-[#F0F7FF] rounded border border-blue-100 flex justify-between">
                <span className="text-slate-500">SIZE RANGE:</span>
                <span className="text-[#0754AE] font-bold">{product.sizeRange}</span>
              </div>
              <div className="p-3 bg-[#F0F7FF] rounded border border-blue-100 flex justify-between">
                <span className="text-slate-500">STANDARD:</span>
                <span className="text-[#0754AE] font-bold">{product.standard}</span>
              </div>
            </div>
          </div>

          <div>
            <span className="text-slate-500 uppercase font-bold block mb-1">
              ENGINEERING DESCRIPTION:
            </span>
            <p className="text-slate-700 font-sans text-sm leading-relaxed">
              {product.description}
            </p>
          </div>

          <div>
            <span className="text-slate-500 uppercase font-bold block mb-2">
              KEY TECHNICAL FEATURES:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {product.features.map((feat, idx) => (
                <div key={idx} className="p-2.5 bg-[#F0F7FF] rounded border border-blue-100 flex items-center gap-2 text-[#0754AE]">
                  <Check className="w-4 h-4 text-[#2166D1] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="p-4 bg-[#F0F7FF] border-t border-blue-200 flex flex-col sm:flex-row justify-between items-center gap-3">
          <button 
            onClick={() => { onClose(); onRequestQuote(); }}
            className="btn-red w-full sm:w-auto text-xs py-3 px-6 justify-center"
          >
            REQUEST PRICING & AVAILABILITY
          </button>
          <button 
            onClick={onClose}
            className="btn-secondary w-full sm:w-auto text-xs py-3 px-6 justify-center"
          >
            CLOSE SPECIFICATION VIEW
          </button>
        </div>

      </div>
    </div>
  );
};
