import React from 'react';
import { Product } from '../types';
import { X, Check, FileText, Download, ShoppingBag, ShieldCheck } from 'lucide-react';

interface ProductComparisonModalProps {
  isOpen: boolean;
  onClose: () => void;
  comparedProducts: Product[];
  onRemoveProduct: (productId: string) => void;
  onRequestQuoteForProduct: (product: Product) => void;
}

export const ProductComparisonModal: React.FC<ProductComparisonModalProps> = ({
  isOpen,
  onClose,
  comparedProducts,
  onRemoveProduct,
  onRequestQuoteForProduct
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#004AAD]/50 backdrop-blur-md overflow-y-auto">
      <div className="bg-white border-2 border-[#004AAD] w-full max-w-6xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="bg-[#004AAD] p-6 text-white flex items-center justify-between shrink-0 border-b-4 border-[#0085F4]">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/10 border border-white/20">
              <ShieldCheck className="w-6 h-6 text-[#00BBFF]" />
            </div>
            <div>
              <h2 className="text-xl font-heading font-bold text-white tracking-wide uppercase">EQUIPMENT SPECIFICATION COMPARISON MATRIX</h2>
              <p className="text-xs font-mono text-blue-100">Comparing {comparedProducts.length} of 4 verified trench safety systems</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-x-auto flex-1">
          {comparedProducts.length === 0 ? (
            <div className="text-center py-16 space-y-4 font-mono">
              <p className="text-lg font-heading text-[#004AAD] uppercase">NO PRODUCTS SELECTED FOR COMPARISON</p>
              <p className="text-xs text-[#475569]">Select up to 4 products from the catalogue using the "Compare" button to view side-by-side technical specs.</p>
              <button
                onClick={onClose}
                className="btn-brand-primary py-2.5 px-6 text-xs"
              >
                RETURN TO CATALOGUE
              </button>
            </div>
          ) : (
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr>
                  <th className="p-4 bg-[#F0F7FF] border-2 border-[#E2E8F0] text-xs font-mono font-bold text-[#004AAD] w-1/5 uppercase">
                    TECHNICAL ATTRIBUTE
                  </th>
                  {comparedProducts.map((prod) => (
                    <th key={prod.id} className="p-4 bg-white border-2 border-[#E2E8F0] w-1/5 relative group">
                      <button
                        onClick={() => onRemoveProduct(prod.id)}
                        className="absolute top-2 right-2 p-1 bg-[#F0F7FF] text-[#004AAD] hover:bg-[#0085F4] hover:text-white transition-colors"
                        title="Remove product"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                      <div className="space-y-3 pr-6 font-mono">
                        <div className="h-32 overflow-hidden border border-[#E2E8F0] bg-[#F0F7FF]">
                          <img
                            src={prod.image}
                            alt={prod.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <span className="text-[10px] font-bold text-[#0085F4] uppercase block">{prod.partNumber}</span>
                          <h4 className="text-sm font-heading font-bold text-[#004AAD] line-clamp-2 uppercase">{prod.name}</h4>
                        </div>
                        <button
                          onClick={() => onRequestQuoteForProduct(prod)}
                          className="btn-brand-primary w-full py-2 text-xs"
                        >
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>ADD TO QUOTE</span>
                        </button>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-xs font-mono">
                <tr>
                  <td className="p-3 bg-[#F0F7FF] border-2 border-[#E2E8F0] font-bold text-[#004AAD]">CATEGORY</td>
                  {comparedProducts.map((prod) => (
                    <td key={prod.id} className="p-3 border-2 border-[#E2E8F0] text-[#004AAD] font-bold">{prod.category}</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 bg-[#F0F7FF] border-2 border-[#E2E8F0] font-bold text-[#004AAD]">LOAD RATING</td>
                  {comparedProducts.map((prod) => (
                    <td key={prod.id} className="p-3 border-2 border-[#E2E8F0] text-[#0085F4] font-bold">{prod.loadRating}</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 bg-[#F0F7FF] border-2 border-[#E2E8F0] font-bold text-[#004AAD]">MATERIAL</td>
                  {comparedProducts.map((prod) => (
                    <td key={prod.id} className="p-3 border-2 border-[#E2E8F0] text-[#475569]">{prod.material}</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 bg-[#F0F7FF] border-2 border-[#E2E8F0] font-bold text-[#004AAD]">STANDARD</td>
                  {comparedProducts.map((prod) => (
                    <td key={prod.id} className="p-3 border-2 border-[#E2E8F0] text-[#004AAD]">{prod.standard}</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 bg-[#F0F7FF] border-2 border-[#E2E8F0] font-bold text-[#004AAD]">WORKFLOW STEP</td>
                  {comparedProducts.map((prod) => (
                    <td key={prod.id} className="p-3 border-2 border-[#E2E8F0] text-[#0085F4] font-bold">{prod.workflowStep || 'PROTECT'}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#F8F8F8] border-t border-[#E2E8F0] flex justify-between items-center shrink-0">
          <div className="text-xs font-mono font-bold text-[#004AAD]">
            PE STAMPED TABULATED DATA INCLUDED ON ALL QUOTES
          </div>
          <button
            onClick={onClose}
            className="btn-brand-secondary py-2 px-6 text-xs"
          >
            CLOSE MATRIX
          </button>
        </div>

      </div>
    </div>
  );
};
