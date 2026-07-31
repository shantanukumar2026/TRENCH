import React, { useState } from 'react';
import { ProductStage3DCanvas } from './ProductStage3DCanvas';
import { Box, RotateCw, Maximize2, FileSpreadsheet, Download, ShieldCheck, Check } from 'lucide-react';

interface ProductStageProps {
  onRequestSpecSheet: () => void;
}

export const ProductStage: React.FC<ProductStageProps> = ({ onRequestSpecSheet }) => {
  const [isExploded, setIsExploded] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'3d' | 'section' | 'specs'>('3d');

  return (
    <section id="stage" className="py-24 bg-white border-b border-blue-200 relative overflow-hidden">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 pb-6 border-b border-blue-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#F0F7FF] border border-blue-200 mb-3">
              <Box className="w-3.5 h-3.5 text-[#C00000]" />
              <span className="text-xs font-mono font-bold text-[#0754AE] uppercase tracking-widest">
                PREMIUM 3D PRODUCT STAGE
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0754AE] tracking-tight font-heading uppercase">
              TU-8000 <span className="text-[#2166D1]">STEEL TRENCH SHIELD</span>
            </h2>
            <p className="text-blue-500 font-medium text-base mt-2">
              Double-walled high-tensile steel shoring box for heavy utility excavations.
            </p>
          </div>

          {/* 3D Interactive Controls Toolbar */}
          <div className="flex flex-wrap items-center gap-2 bg-[#F0F7FF] p-1.5 rounded-lg border border-blue-200">
            <button
              onClick={() => { setIsExploded(false); setViewMode('3d'); }}
              className={`px-4 py-2 text-xs font-mono font-bold rounded transition-all flex items-center gap-1.5 uppercase ${
                viewMode === '3d' && !isExploded
                  ? 'bg-[#0754AE] text-white shadow'
                  : 'text-[#0754AE] hover:bg-white'
              }`}
            >
              <RotateCw className="w-3.5 h-3.5" />
              ROTATE 3D
            </button>

            <button
              onClick={() => { setIsExploded(!isExploded); setViewMode('3d'); }}
              className={`px-4 py-2 text-xs font-mono font-bold rounded transition-all flex items-center gap-1.5 uppercase ${
                isExploded
                  ? 'bg-[#C00000] text-white shadow'
                  : 'text-[#0754AE] hover:bg-white'
              }`}
            >
              <Maximize2 className="w-3.5 h-3.5" />
              {isExploded ? 'COLLAPSE ASSEMBLY' : 'EXPLODE ASSEMBLY'}
            </button>

            <button
              onClick={() => { setViewMode('specs'); }}
              className={`px-4 py-2 text-xs font-mono font-bold rounded transition-all flex items-center gap-1.5 uppercase ${
                viewMode === 'specs'
                  ? 'bg-[#0754AE] text-white shadow'
                  : 'text-[#0754AE] hover:bg-white'
              }`}
            >
              <FileSpreadsheet className="w-3.5 h-3.5" />
              FULL SPECIFICATIONS
            </button>
          </div>
        </div>

        {/* Product Stage Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: 3D Interactive Stage Canvas */}
          <div className="lg:col-span-7">
            <ProductStage3DCanvas isExploded={isExploded} viewMode={viewMode} />
          </div>

          {/* Right Column: Live Technical Specifications Grid */}
          <div className="lg:col-span-5 bg-[#F0F7FF] border border-blue-200 rounded-xl p-8 shadow-md space-y-6">
            <div className="flex justify-between items-center pb-4 border-b border-blue-200">
              <div>
                <span className="text-[10px] font-mono text-[#0754AE] font-bold uppercase">PART NUMBER</span>
                <div className="text-xl font-bold font-mono text-[#0754AE]">TU-SB-824-HD</div>
              </div>
              <span className="px-2.5 py-1 bg-[#C00000] text-white text-xs font-mono font-bold rounded uppercase">
                OSHA SUBPART P
              </span>
            </div>

            {/* Technical Attribute Rail */}
            <div className="space-y-3 font-mono text-xs">
              <div className="p-3 bg-white rounded border border-blue-100 flex justify-between">
                <span className="text-[#0754AE] font-bold">MATERIAL:</span>
                <span className="text-[#0754AE] font-bold">High-Tensile A572 Grade 50 Steel</span>
              </div>
              <div className="p-3 bg-white rounded border border-blue-100 flex justify-between">
                <span className="text-[#0754AE] font-bold">SIZE RANGE:</span>
                <span className="text-[#0754AE] font-bold">8ft H x 24ft L (4.0in Wall Thickness)</span>
              </div>
              <div className="p-3 bg-white rounded border border-blue-100 flex justify-between">
                <span className="text-[#0754AE] font-bold">LOAD RATING:</span>
                <span className="text-[#C00000] font-bold">1,450 PSF Lateral Soil Pressure</span>
              </div>
              <div className="p-3 bg-white rounded border border-blue-100 flex justify-between">
                <span className="text-[#0754AE] font-bold">APPLICATION:</span>
                <span className="text-[#0754AE] font-bold">Deep Utility &amp; Water Main Excavation</span>
              </div>
              <div className="p-3 bg-white rounded border border-blue-100 flex justify-between">
                <span className="text-blue-400">STANDARD:</span>
                <span className="text-[#0754AE] font-bold">ASTM A572 / OSHA Certified</span>
              </div>
            </div>

            {/* Feature Checklist */}
            <div className="space-y-2 text-xs font-medium text-blue-600">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#2166D1]" />
                Concrete-filled cutting edge knife shoe for ground penetration
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#2166D1]" />
                Four-point heavy alloy lifting lugs rated for 24,000 lbs WLL
              </div>
            </div>

            {/* Action CTAs */}
            <div className="pt-4 flex gap-3">
              <button 
                onClick={onRequestSpecSheet}
                className="btn-primary w-full text-xs py-3 justify-center"
              >
                <Download className="w-4 h-4" />
                DOWNLOAD SPECIFICATION SHEET (.PDF)
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
