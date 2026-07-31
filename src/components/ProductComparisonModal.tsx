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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0754AE]/60 backdrop-blur-md overflow-y-auto">
      <div className="bg-white border-2 border-blue-300 rounded-none w-full max-w-6xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#0754AE] to-[#2166D1] p-6 text-white flex items-center justify-between shrink-0 border-b-4 border-[#C00000]">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/10 border border-white/20 rounded-none">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-heading font-bold text-white tracking-wide">SYSTEM SPECIFICATION COMPARISON MATRIX</h2>
              <p className="text-xs font-mono text-blue-100">Comparing {comparedProducts.length} of 4 verified infrastructure systems</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 bg-white/10 hover:bg-white/20 text-white transition-colors rounded-none"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Modal Body: Comparison Matrix Table */}
        <div className="p-6 overflow-x-auto flex-1">
          {comparedProducts.length === 0 ? (
            <div className="text-center py-16 space-y-4 font-mono">
              <p className="text-lg font-heading text-[#0754AE]">NO PRODUCTS SELECTED FOR COMPARISON</p>
              <p className="text-xs text-[#163B66]">Select up to 4 products from the catalogue using the "Compare" button to view side-by-side technical specs.</p>
              <button
                onClick={onClose}
                className="btn-primary py-2.5 px-6 text-xs"
              >
                RETURN TO CATALOGUE
              </button>
            </div>
          ) : (
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr>
                  <th className="p-4 bg-[#F0F7FF] border-2 border-blue-200 text-xs font-mono font-bold text-[#0754AE] w-1/5">
                    TECHNICAL ATTRIBUTE
                  </th>
                  {comparedProducts.map((prod) => (
                    <th key={prod.id} className="p-4 bg-white border-2 border-blue-200 w-1/5 relative group">
                      <button
                        onClick={() => onRemoveProduct(prod.id)}
                        className="absolute top-2 right-2 p-1 bg-blue-100 text-[#0754AE] hover:bg-red-500 hover:text-white transition-colors rounded-none"
                        title="Remove product"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                      <div className="space-y-3 pr-6 font-mono">
                        <div className="h-32 overflow-hidden border-2 border-blue-200 bg-[#F8FAFC] rounded-none">
                          <img
                            src={prod.image}
                            alt={prod.name}
                            onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/images/trench_shield.png'; }}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <span className="text-[10px] font-bold text-[#C00000] uppercase block">{prod.partNumber || '[VERIFIED PART NUMBER]'}</span>
                          <h4 className="text-sm font-heading font-bold text-[#0754AE] line-clamp-2">{prod.name}</h4>
                        </div>
                        <button
                          onClick={() => onRequestQuoteForProduct(prod)}
                          className="w-full py-2 bg-[#0754AE] text-white hover:bg-[#2166D1] text-xs font-bold flex items-center justify-center gap-1.5 transition-colors rounded-none"
                        >
                          <ShoppingBag className="w-3.5 h-3.5 text-white" />
                          <span>ADD TO QUOTE</span>
                        </button>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-xs font-mono">
                <tr>
                  <td className="p-3 bg-[#F0F7FF] border-2 border-blue-200 font-bold text-[#0754AE]">CATEGORY</td>
                  {comparedProducts.map((prod) => (
                    <td key={prod.id} className="p-3 border-2 border-blue-200 text-[#163B66] font-semibold">{prod.category}</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 bg-[#F0F7FF] border-2 border-blue-200 font-bold text-[#0754AE]">SUBCATEGORY</td>
                  {comparedProducts.map((prod) => (
                    <td key={prod.id} className="p-3 border-2 border-blue-200 text-[#163B66]">{prod.subcategory || '[VERIFIED SUBCATEGORY]'}</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 bg-[#F0F7FF] border-2 border-blue-200 font-bold text-[#0754AE]">MATERIAL</td>
                  {comparedProducts.map((prod) => (
                    <td key={prod.id} className="p-3 border-2 border-blue-200 text-[#163B66]">{prod.material || '[VERIFIED MATERIAL]'}</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 bg-[#F0F7FF] border-2 border-blue-200 font-bold text-[#0754AE]">LOAD RATING</td>
                  {comparedProducts.map((prod) => (
                    <td key={prod.id} className="p-3 border-2 border-blue-200 text-[#C00000] font-bold">{prod.loadRating || '[VERIFIED LOAD RATING]'}</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 bg-[#F0F7FF] border-2 border-blue-200 font-bold text-[#0754AE]">SIZE RANGE</td>
                  {comparedProducts.map((prod) => (
                    <td key={prod.id} className="p-3 border-2 border-blue-200 text-[#163B66]">{prod.sizeRange || '[AVAILABLE SIZES]'}</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 bg-[#F0F7FF] border-2 border-blue-200 font-bold text-[#0754AE]">GOVERNING STANDARD</td>
                  {comparedProducts.map((prod) => (
                    <td key={prod.id} className="p-3 border-2 border-blue-200 text-[#0754AE] font-semibold">{prod.standard || '[APPLICABLE STANDARD]'}</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 bg-[#F0F7FF] border-2 border-blue-200 font-bold text-[#0754AE]">SYSTEM WEIGHT</td>
                  {comparedProducts.map((prod) => (
                    <td key={prod.id} className="p-3 border-2 border-blue-200 text-[#163B66]">{prod.weight || '[VERIFIED WEIGHT]'}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-[#F0F7FF] border-t-2 border-blue-200 p-4 flex items-center justify-between shrink-0">
          <span className="text-xs font-mono text-[#163B66]">
            {comparedProducts.length} of 4 slots filled
          </span>
          <button
            onClick={onClose}
            className="btn-secondary py-2 px-6 text-xs font-mono"
          >
            CLOSE COMPARISON
          </button>
        </div>
      </div>
    </div>
  );
};
