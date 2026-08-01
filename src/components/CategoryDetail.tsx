import React from 'react';
import { PRIMARY_CATEGORIES, PRODUCTS_CATALOGUE } from '../data/trenchData';
import { PrimaryCategory, Product, Subcategory } from '../types';
import { ArrowLeft, ChevronRight, Layers, ShieldCheck, Download, ShoppingBag, Eye } from 'lucide-react';

interface CategoryDetailProps {
  categoryId: string;
  onBackToAll: () => void;
  onSelectSubcategory: (subcatId: string) => void;
  onSelectProduct: (product: Product) => void;
  onRequestQuote: (product: Product) => void;
}

export const CategoryDetail: React.FC<CategoryDetailProps> = ({
  categoryId,
  onBackToAll,
  onSelectSubcategory,
  onSelectProduct,
  onRequestQuote
}) => {
  const category = PRIMARY_CATEGORIES.find(c => c.id === categoryId) || PRIMARY_CATEGORIES[0];
  const categoryProducts = PRODUCTS_CATALOGUE.filter(p => 
    p.category.toLowerCase().includes(category.shortName.toLowerCase()) || 
    p.category.toLowerCase().includes(category.title.toLowerCase())
  );

  return (
    <div className="py-16 bg-[#F8FAFC]">
      <div className="container-custom space-y-12">
        
        {/* Top Breadcrumb & Header */}
        <div className="space-y-4">
          <button
            onClick={onBackToAll}
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#0754AE] hover:text-[#2166D1] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#0754AE]" />
            <span>← BACK TO ALL PRODUCTS</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-8 rounded-none border-2 border-blue-300 shadow-xl">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none bg-[#F0F7FF] border-2 border-blue-200">
                <span className="text-xs font-mono font-bold text-[#C00000]">{category.number}</span>
                <span className="text-xs font-mono font-bold text-[#0754AE] uppercase tracking-wider">{category.title}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0754AE] font-heading uppercase leading-tight">
                {category.tagline}
              </h1>
              <p className="text-sm font-medium text-[#004AAD] leading-relaxed">
                {category.description}
              </p>

              <div className="flex flex-wrap gap-4 pt-2 font-mono text-xs">
                <div className="px-3 py-1.5 rounded-none bg-[#F0F7FF] border border-blue-200 text-[#0754AE] font-bold">
                  SUBCATEGORIES: {category.subcategories.length}
                </div>
                <div className="px-3 py-1.5 rounded-none bg-[#F0F7FF] border border-blue-200 text-[#0754AE] font-bold">
                  CATALOGUE PRODUCTS: {categoryProducts.length > 0 ? categoryProducts.length : '8 Verified'}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-64 rounded-none overflow-hidden border-2 border-blue-300 shadow-lg">
              <img
                src={category.image}
                alt={category.title}
                onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/images/trench_shield.png'; }}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0754AE]/80 to-transparent p-4 flex items-end">
                <span className="text-xs font-mono font-bold text-white uppercase tracking-widest">
                  3D SYSTEM CUTAWAY ARCHITECTURE
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Subcategories Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b-2 border-blue-200 pb-3">
            <h2 className="text-2xl font-bold text-[#0754AE] font-heading uppercase">
              EXPLORE {category.shortName.toUpperCase()} SUBCATEGORIES
            </h2>
            <span className="text-xs font-mono text-[#1E4E8C] font-semibold">Select subcategory tile to inspect specs</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.subcategories.map((subcat) => (
              <div
                key={subcat.id}
                onClick={() => onSelectSubcategory(subcat.id)}
                className="bg-white border-2 border-blue-200 p-6 hover:border-[#2166D1] hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col justify-between rounded-none"
              >
                <div className="space-y-3">
                  <div className="h-40 rounded-none overflow-hidden border-2 border-blue-200 bg-[#F0F7FF] relative">
                    <img
                      src={subcat.image || category.image}
                      alt={subcat.name}
                      onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/logo.png'; }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2 px-2 py-0.5 bg-[#0754AE] text-white text-[10px] font-mono font-bold rounded-none">
                      SUBCATEGORY
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-[#0754AE] font-heading group-hover:text-[#2166D1] transition-colors">
                    {subcat.name}
                  </h3>
                  <p className="text-xs text-[#004AAD] font-medium line-clamp-2">
                    {subcat.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-blue-100 flex items-center justify-between mt-4">
                  <span className="text-xs font-mono font-bold text-[#2166D1]">
                    {subcat.productFamilies.length} Product Families
                  </span>
                  <span className="text-xs font-mono font-bold text-[#0754AE] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    EXPLORE <ChevronRight className="w-3.5 h-3.5 text-[#0754AE]" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Products Catalogue */}
        {categoryProducts.length > 0 && (
          <div className="space-y-6 pt-8">
            <div className="border-b-2 border-blue-200 pb-3">
              <h2 className="text-2xl font-bold text-[#0754AE] font-heading uppercase">
                {category.shortName.toUpperCase()} PRODUCT SYSTEMS
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryProducts.map((product) => (
                <div
                  key={product.id}
                  className="product-card-square overflow-hidden flex flex-col justify-between group"
                >
                  <div className="p-5 space-y-4">
                    <div className="h-48 rounded-none overflow-hidden border-2 border-blue-200 bg-[#F0F7FF] relative cursor-pointer" onClick={() => onSelectProduct(product)}>
                      <img
                        src={product.image}
                        alt={product.name}
                        onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/images/trench_shield.png'; }}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2 left-2 px-2 py-0.5 bg-[#0754AE] text-white text-[10px] font-mono font-bold uppercase rounded-none">
                        {product.category}
                      </div>
                      <div className="absolute top-2 right-2 px-2 py-0.5 bg-[#C00000] text-white text-[10px] font-mono font-bold rounded-none">
                        {product.partNumber}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 
                        onClick={() => onSelectProduct(product)}
                        className="text-base font-bold text-[#0754AE] font-heading hover:text-[#2166D1] cursor-pointer line-clamp-1"
                      >
                        {product.name}
                      </h3>
                      <p className="text-xs text-[#004AAD] font-medium line-clamp-2">
                        {product.description}
                      </p>
                    </div>

                    <div className="space-y-1.5 font-mono text-xs bg-[#F0F7FF] p-3 rounded-none border border-blue-200">
                      <div className="flex justify-between text-[#004AAD]">
                        <span className="text-blue-400">MATERIAL:</span>
                        <span className="font-bold text-[#0754AE] truncate max-w-[160px]">{product.material}</span>
                      </div>
                      <div className="flex justify-between text-[#004AAD]">
                        <span className="text-blue-400">RATING:</span>
                        <span className="font-bold text-[#C00000] truncate max-w-[160px]">{product.loadRating}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-[#F0F7FF] border-t-2 border-blue-200 flex gap-2">
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="flex-1 py-2.5 bg-white border border-blue-300 hover:border-[#2166D1] text-[#0754AE] text-xs font-mono font-bold rounded-none flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#0754AE]" />
                      <span>VIEW SPEC</span>
                    </button>
                    <button
                      onClick={() => onRequestQuote(product)}
                      className="flex-1 py-2.5 bg-[#0754AE] hover:bg-[#2166D1] text-white text-xs font-mono font-bold rounded-none flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <ShoppingBag className="w-3.5 h-3.5 text-white" />
                      <span>ADD QUOTE</span>
                    </button>
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
