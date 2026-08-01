import React from 'react';
import { FileText, Download, ShieldCheck, Box, BookOpen, Layers } from 'lucide-react';

interface ResourcesHubProps {
  onDownloadResource: (title: string) => void;
}

export const ResourcesHub: React.FC<ResourcesHubProps> = ({ onDownloadResource }) => {
  const docs = [
    {
      title: 'TRENCH SHIELDING PE CALCULATION MANUAL',
      type: 'ENGINEERING DOC',
      code: 'TU-PE-DOC-2026',
      size: '4.2 MB',
      format: 'PDF / PE STAMPED'
    },
    {
      title: 'POLYMER DRAINAGE SYSTEM INSTALLATION GUIDE',
      type: 'INSTALLATION MANUAL',
      code: 'TU-[#2166D1]-INST',
      size: '2.8 MB',
      format: 'PDF SPEC'
    },
    {
      title: 'PRECAST CONCRETE ACCESS VAULT AUTOCAD LIBRARY',
      type: 'CAD / BIM PACKAGE',
      code: 'TU-CAD-RVT-PACK',
      size: '18.4 MB',
      format: '.DWG / .RVT'
    },
    {
      title: 'C900 WATER MAIN PRESSURE SPECIFICATION SHEET',
      type: 'SPEC SHEET',
      code: 'TU-SPEC-AWWA-C900',
      size: '1.5 MB',
      format: 'PDF SPEC'
    }
  ];

  return (
    <section id="resources" className="py-24 bg-blueprint-grid border-b border-blue-200 relative">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white border border-blue-200 shadow-sm">
            <FileText className="w-3.5 h-3.5 text-[#C00000]" />
            <span className="text-xs font-mono font-bold text-[#0754AE] uppercase tracking-widest">
              TECHNICAL RESOURCE & DOCUMENTATION HUB
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0754AE] tracking-tight font-heading uppercase">
            ENGINEERING <span className="text-[#2166D1]">DOCUMENTATION</span>
          </h2>
          <div className="flex justify-center items-center gap-2">
            <span className="red-accent-bar"></span>
            <p className="text-blue-600 font-medium text-base">
              PE stamped submittals, CAD models, installation manuals, and specification sheets.
            </p>
          </div>
        </div>

        {/* Engineering Document Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {docs.map((doc, idx) => (
            <div 
              key={idx}
              className="bg-white border-2 border-blue-200 rounded-xl p-6 shadow-md hover:border-[#2166D1] transition-all flex flex-col justify-between font-mono space-y-4"
            >
              <div className="flex justify-between items-start border-b border-blue-100 pb-3">
                <span className="px-2.5 py-0.5 bg-[#F0F7FF] text-[#0754AE] text-[10px] font-bold uppercase rounded border border-blue-200">
                  {doc.type}
                </span>
                <span className="text-xs text-blue-400">{doc.code}</span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#0754AE] font-heading uppercase">
                  {doc.title}
                </h3>
                <div className="mt-2 flex gap-4 text-xs text-blue-400">
                  <span>FORMAT: <strong className="text-[#C00000]">{doc.format}</strong></span>
                  <span>FILE SIZE: {doc.size}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-blue-100 flex justify-between items-center">
                <span className="text-[10px] text-blue-400">100% VERIFIED TECHNICAL SPEC</span>
                <button 
                  onClick={() => onDownloadResource(doc.title)}
                  className="btn-primary text-xs py-2 px-4 justify-center"
                >
                  <Download className="w-3.5 h-3.5" />
                  DOWNLOAD FILE
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
