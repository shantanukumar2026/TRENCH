import React from 'react';
import { FileText, Download, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

interface TabulatedDataLibrarySectionProps {
  onOpenDrawer: () => void;
}

export const TabulatedDataLibrarySection: React.FC<TabulatedDataLibrarySectionProps> = ({ onOpenDrawer }) => {
  const documents = [
    { title: 'Steel Trench Shield PE Tabulated Data', code: 'PE-TAB-2026-ST', size: '2.4 MB', type: 'PDF Spec Sheet' },
    { title: 'Aluminum Hydraulic Shoring Load Rating', code: 'PE-TAB-2026-HS', size: '1.8 MB', type: 'PDF Spec Sheet' },
    { title: 'Modular Slide Rail System PE Calculation', code: 'PE-TAB-2026-SR', size: '3.1 MB', type: 'PDF Calculation Sheet' },
    { title: 'ACO & Richard Brink Grating AASHTO H-20', code: 'PE-TAB-2026-GR', size: '1.5 MB', type: 'PDF Submittal' }
  ];

  return (
    <section id="tab-data-library" className="py-20 bg-[#004AAD] text-white border-b border-[#0085F4] relative">
      <div className="container-industrial space-y-12">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-[#0085F4] pb-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0085F4] text-xs font-mono font-bold text-white uppercase">
              <FileText className="w-4 h-4 text-[#00BBFF]" />
              <span>OFFICIAL MUNICIPAL SUBMITTAL LIBRARY</span>
            </div>
            <h2 className="text-section-title text-white uppercase">
              PE-STAMPED <span className="text-[#00BBFF]">TABULATED DATA SHEETS</span>
            </h2>
            <p className="text-body-large text-blue-100 font-medium">
              Instant access to registered Professional Engineer (PE) stamped tabulated data certificates, OSHA 1926 Subpart P calculation sheets, and DOT submittals.
            </p>
          </div>

          <button
            onClick={onOpenDrawer}
            className="inline-flex items-center justify-center gap-2 bg-[#0085F4] hover:bg-[#00BBFF] text-white font-mono font-bold text-sm px-6 py-3 uppercase transition-all shadow-md shrink-0"
          >
            <span>OPEN SUBMITTAL DRAWER</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Document Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-mono">
          {documents.map((doc, idx) => (
            <div
              key={idx}
              onClick={onOpenDrawer}
              className="bg-[#003380] border-2 border-[#0085F4] hover:border-[#00BBFF] p-6 space-y-4 cursor-pointer transition-all hover:scale-[1.02] flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs text-[#00BBFF] font-bold">
                  <span>{doc.code}</span>
                  <span className="bg-[#0085F4] text-white text-[10px] px-2 py-0.5 uppercase">{doc.type}</span>
                </div>
                <h3 className="text-sm font-extrabold text-white uppercase leading-snug">{doc.title}</h3>
              </div>

              <div className="pt-3 border-t border-[#0085F4] flex items-center justify-between text-xs text-blue-200">
                <span>{doc.size}</span>
                <span className="flex items-center gap-1 text-[#00BBFF] font-bold">
                  <Download className="w-4 h-4" />
                  Download
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
