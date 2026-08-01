import React, { useState } from 'react';
import { CASE_STUDY_DATA } from '../data/trenchData';
import { FileCheck, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';

export const CaseStudy: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'before' | 'during' | 'after'>('during');

  const getImageForTab = () => {
    switch (activeTab) {
      case 'before':
        return CASE_STUDY_DATA.duringImg;
      case 'during':
        return CASE_STUDY_DATA.duringImg;
      case 'after':
        return CASE_STUDY_DATA.afterImg;
    }
  };

  return (
    <section id="casestudy" className="py-20 bg-[#F8F8F8] border-b border-[#E2E8F0] relative overflow-hidden">
      <div className="container-industrial space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-[#004AAD] pb-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F0F7FF] border border-[#0085F4] text-xs font-mono font-bold text-[#004AAD]">
              <FileCheck className="w-4 h-4 text-[#0085F4]" />
              <span>FIELD ENGINEERING CASE STUDY</span>
            </div>
            <h2 className="text-section-title text-[#004AAD] uppercase">
              PROJECT PERFORMANCE <span className="text-[#0085F4]">METRICS</span>
            </h2>
            <p className="text-body-large text-[#475569] max-w-2xl">
              Real civil infrastructure project results demonstrating 100% OSHA 1926 Subpart P safety compliance and zero trench wall failures.
            </p>
          </div>
        </div>

        {/* Case Study Card */}
        <div className="bg-white border-2 border-[#E2E8F0] shadow-xl grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          {/* Left Column: Interactive Image Viewer */}
          <div className="lg:col-span-7 relative min-h-[400px] bg-[#F0F7FF] flex flex-col justify-between p-6">
            <img 
              src={getImageForTab()} 
              alt="Project 042 State" 
              className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
            />
            
            {/* Top Phase Selector Strip */}
            <div className="relative z-10 flex items-center justify-between bg-white/95 backdrop-blur-md p-2.5 border border-[#0085F4] font-mono text-xs">
              <span className="font-bold text-[#004AAD]">PHASE:</span>
              <div className="flex gap-1.5">
                {(['before', 'during', 'after'] as const).map((tab, i) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-1 font-bold text-xs uppercase transition-all ${
                      activeTab === tab 
                        ? 'bg-[#004AAD] text-white shadow-sm' 
                        : 'bg-white text-[#004AAD] border border-[#E2E8F0] hover:bg-[#F0F7FF]'
                    }`}
                  >
                    0{i + 1} {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Bottom Floating Title */}
            <div className="relative z-10 bg-white/95 backdrop-blur-md p-4 border border-[#0085F4] font-mono space-y-1">
              <div className="flex items-center gap-1.5 text-xs text-[#0085F4] font-bold">
                <MapPin className="w-4 h-4" />
                <span>{CASE_STUDY_DATA.location}</span>
              </div>
              <h3 className="text-card-title text-[#004AAD] uppercase">
                {CASE_STUDY_DATA.title}
              </h3>
            </div>
          </div>

          {/* Right Column: Key Metrics & Data */}
          <div className="lg:col-span-5 p-8 space-y-6 flex flex-col justify-between font-mono bg-white">
            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold text-[#0085F4] uppercase tracking-wider block mb-1">
                  APPLICATION &amp; SCOPE
                </span>
                <h4 className="text-card-title text-[#004AAD] uppercase">{CASE_STUDY_DATA.application}</h4>
              </div>

              {/* Performance Metrics */}
              <div className="grid grid-cols-2 gap-4">
                {CASE_STUDY_DATA.metrics.map((metric, i) => (
                  <div key={i} className="p-3.5 bg-[#F8F8F8] border border-[#E2E8F0]">
                    <div className="text-xs text-[#475569] font-bold uppercase">{metric.label}</div>
                    <div className="text-lg font-extrabold text-[#004AAD] mt-1">{metric.value}</div>
                  </div>
                ))}
              </div>

              {/* Products Used List */}
              <div className="pt-2">
                <span className="text-xs font-bold text-[#004AAD] uppercase block mb-2">EQUIPMENT DEPLOYED:</span>
                <ul className="space-y-1 text-xs text-[#475569]">
                  {CASE_STUDY_DATA.productsUsed.map((p, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0085F4]" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E2E8F0]">
              <div className="p-3.5 bg-[#F0F7FF] border border-[#0085F4] text-xs font-bold text-[#004AAD]">
                RESULT: <span className="text-[#0085F4]">{CASE_STUDY_DATA.result}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
