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
    <section id="casestudy" className="py-10 bg-[#F8FAFC] border-b-2 border-slate-200 relative overflow-hidden">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-slate-200 pb-6 mb-8">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-[#0085F4]/30 shadow-sm">
              <FileCheck className="w-4 h-4 text-[#0085F4]" />
              <span className="text-xs font-mono font-bold text-[#004AAD] uppercase tracking-widest">
                FIELD ENGINEERING CASE STUDY
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#004AAD] tracking-tight font-heading uppercase">
              PROJECT <span className="text-[#0085F4]">042</span>
            </h2>
            <p className="text-sm text-[#5B7FA5] font-medium max-w-2xl">
              Municipal Utility Infrastructure Corridor Expansion — Real project performance metrics.
            </p>
          </div>
        </div>

        {/* Case Study Card */}
        <div className="bg-white border-2 border-slate-200 overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          {/* Left Column: Interactive Image Viewer */}
          <div className="lg:col-span-7 relative min-h-[380px] bg-[#F4F8FF] flex flex-col justify-between p-6">
            <img 
              src={getImageForTab()} 
              alt="Project 042 State" 
              className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
            />
            
            {/* Top Phase Selector Strip */}
            <div className="relative z-10 flex items-center justify-between bg-white/90 backdrop-blur-md p-2 border border-slate-200 font-mono text-xs">
              <span className="font-bold text-[#004AAD]">EXCAVATION PHASE:</span>
              <div className="flex gap-1">
                {(['before', 'during', 'after'] as const).map((tab, i) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-1 font-bold text-xs uppercase transition-all ${
                      activeTab === tab 
                        ? 'bg-[#004AAD] text-white shadow-sm' 
                        : 'bg-white text-[#004AAD] hover:bg-[#F4F8FF]'
                    }`}
                  >
                    0{i + 1} {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Bottom Floating Title */}
            <div className="relative z-10 bg-white/95 backdrop-blur-md p-4 border border-slate-200 font-mono space-y-1">
              <div className="flex items-center gap-1.5 text-xs text-[#0085F4] font-bold">
                <MapPin className="w-3.5 h-3.5" />
                <span>{CASE_STUDY_DATA.location}</span>
              </div>
              <h3 className="text-base font-bold text-[#004AAD] uppercase font-heading">
                {CASE_STUDY_DATA.title}
              </h3>
            </div>
          </div>

          {/* Right Column: Key Metrics & Data */}
          <div className="lg:col-span-5 p-6 space-y-6 flex flex-col justify-between font-mono bg-white">
            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold text-[#D90429] uppercase tracking-wider block mb-1">APPLICATION &amp; SCOPE</span>
                <h4 className="text-lg font-bold text-[#004AAD] font-heading">{CASE_STUDY_DATA.application}</h4>
              </div>

              {/* 4 Performance Metrics */}
              <div className="grid grid-cols-2 gap-3">
                {CASE_STUDY_DATA.metrics.map((metric, i) => (
                  <div key={i} className="p-3 bg-[#F8FAFC] border border-slate-200">
                    <div className="text-[10px] text-blue-400 font-bold uppercase">{metric.label}</div>
                    <div className="text-lg font-extrabold text-[#004AAD] mt-0.5">{metric.value}</div>
                  </div>
                ))}
              </div>

              {/* Supplied Products List */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold text-[#004AAD] uppercase block">PRODUCTS SUPPLIED FOR PROJECT:</span>
                <ul className="space-y-1.5 text-xs text-blue-600">
                  {CASE_STUDY_DATA.productsUsed.map((prod, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0085F4] shrink-0" />
                      <span>{prod}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Result Box */}
            <div className="p-4 bg-[#F4F8FF] border-l-4 border-l-[#0085F4] border border-slate-200 space-y-1">
              <span className="text-[10px] font-bold text-[#D90429] uppercase">PROJECT RESULT:</span>
              <p className="text-xs font-bold text-[#004AAD]">{CASE_STUDY_DATA.result}</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
