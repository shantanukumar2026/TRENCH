import React, { useState } from 'react';
import { CASE_STUDY_DATA } from '../data/trenchData';
import { FileCheck, MapPin, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

export const CaseStudy: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'before' | 'during' | 'after'>('during');

  const getImageForTab = () => {
    switch (activeTab) {
      case 'before':
        return CASE_STUDY_DATA.beforeImg;
      case 'during':
        return CASE_STUDY_DATA.duringImg;
      case 'after':
        return CASE_STUDY_DATA.afterImg;
    }
  };

  return (
    <section id="casestudy" className="py-24 bg-blueprint-dense border-b border-blue-200 relative overflow-hidden">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white border border-blue-200 shadow-sm">
            <FileCheck className="w-3.5 h-3.5 text-[#C00000]" />
            <span className="text-xs font-mono font-bold text-[#0754AE] uppercase tracking-widest">
              FIELD ENGINEERING CASE STUDY
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0754AE] tracking-tight font-heading uppercase">
            PROJECT <span className="text-[#2166D1]">042</span>
          </h2>
          <div className="flex justify-center items-center gap-2">
            <span className="red-accent-bar"></span>
            <p className="text-slate-700 font-medium text-base">
              Municipal Utility Infrastructure Corridor Expansion — Real project performance metrics.
            </p>
          </div>
        </div>

        {/* Case Study Card */}
        <div className="bg-white border-2 border-blue-300 rounded-xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          {/* Left Column: Interactive Image Viewer with State Toggle */}
          <div className="lg:col-span-7 relative min-h-[420px] bg-[#F0F7FF] flex flex-col justify-between p-6">
            <img 
              src={getImageForTab()} 
              alt="Project 042 State" 
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = '/images/trench_shield.png';
              }}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Tonal Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0754AE]/85 via-transparent to-transparent"></div>

            {/* Top State Selector Bar */}
            <div className="relative z-10 flex justify-between items-center bg-white/90 backdrop-blur-md p-1.5 rounded-lg border border-blue-200">
              <div className="text-xs font-mono font-bold text-[#0754AE] px-2 hidden sm:block">
                EXCAVATION PHASE:
              </div>
              <div className="flex gap-1">
                {[
                  { id: 'before', label: '01 BEFORE SITE' },
                  { id: 'during', label: '02 CONSTRUCTION' },
                  { id: 'after', label: '03 COMPLETED' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`px-3 py-1.5 text-xs font-mono font-bold rounded transition-all uppercase ${
                      activeTab === tab.id
                        ? 'bg-[#C00000] text-white shadow'
                        : 'text-[#0754AE] hover:bg-[#DBEAFE]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Bottom Floating Metadata */}
            <div className="relative z-10 text-white space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-blue-200">
                <MapPin className="w-3.5 h-3.5 text-[#C00000]" />
                {CASE_STUDY_DATA.location}
              </div>
              <h3 className="text-2xl font-bold font-heading uppercase">
                {CASE_STUDY_DATA.title}
              </h3>
            </div>
          </div>

          {/* Right Column: Measurable Data Strip */}
          <div className="lg:col-span-5 p-8 bg-[#F0F7FF] flex flex-col justify-between space-y-6">
            <div>
              <span className="text-xs font-mono text-[#C00000] font-bold uppercase tracking-wider block mb-1">
                APPLICATION & SCOPE
              </span>
              <p className="text-slate-800 font-bold text-base">
                {CASE_STUDY_DATA.application}
              </p>

              {/* Verified Metrics Grid */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                {CASE_STUDY_DATA.metrics.map((m, mIdx) => (
                  <div key={mIdx} className="bg-white p-3.5 rounded border border-blue-200 font-mono">
                    <div className="text-[10px] text-slate-500 uppercase">{m.label}</div>
                    <div className="text-lg font-extrabold text-[#0754AE] mt-0.5">{m.value}</div>
                  </div>
                ))}
              </div>

              {/* Products Used */}
              <div className="mt-6">
                <span className="text-xs font-mono text-slate-500 font-bold uppercase block mb-2">
                  PRODUCTS SUPPLIED FOR PROJECT:
                </span>
                <div className="space-y-1.5 font-mono text-xs text-slate-700">
                  {CASE_STUDY_DATA.productsUsed.map((p, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#2166D1]" />
                      {p}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Result Highlight */}
            <div className="p-4 bg-white rounded border-l-4 border-[#C00000] font-mono text-xs space-y-1 shadow-sm">
              <div className="text-[#C00000] font-bold">PROJECT RESULT:</div>
              <div className="text-[#0754AE] font-bold">{CASE_STUDY_DATA.result}</div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
