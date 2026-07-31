import React, { useState } from 'react';
import { Cpu, FileCode, Download, Send, CheckCircle2, ShieldAlert, FileText } from 'lucide-react';

interface EngineeringWorkspaceProps {
  onOpenDocLibrary: () => void;
  onOpenEngineeringForm: () => void;
}

export const EngineeringWorkspace: React.FC<EngineeringWorkspaceProps> = ({
  onOpenDocLibrary,
  onOpenEngineeringForm
}) => {
  const [selectedFileType, setSelectedFileType] = useState<string>('dwg');
  const [selectedDepth, setSelectedDepth] = useState<string>('14ft');
  const [soilType, setSoilType] = useState<string>('typeB');

  return (
    <section id="engineering" className="py-24 bg-blueprint-grid border-b border-blue-200 relative overflow-hidden">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white border border-blue-200 shadow-sm">
            <Cpu className="w-3.5 h-3.5 text-[#C00000]" />
            <span className="text-xs font-mono font-bold text-[#0754AE] uppercase tracking-widest">
              FIELD ENGINEERING WORKSPACE & SUBMITTAL TOOLS
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0754AE] tracking-tight font-heading uppercase">
            FROM FIELD QUESTION <span className="text-[#2166D1]">TO ENGINEERED SOLUTION.</span>
          </h2>
          <div className="flex justify-center items-center gap-2">
            <span className="red-accent-bar"></span>
            <p className="text-blue-600 font-medium text-base">
              Instant access to CAD models, submittal generators, and PE-stamped load calculation data.
            </p>
          </div>
        </div>

        {/* Technical Workspace Interactive Blueprint Console */}
        <div className="bg-white border-2 border-blue-300 rounded-xl shadow-2xl p-8 bg-blueprint-dense">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Interactive Submittal Builder Controls */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#0754AE] uppercase border-b border-blue-200 pb-3">
                <FileCode className="w-4 h-4 text-[#C00000]" />
                STEP 1: SELECT PROJECT PARAMETERS
              </div>

              {/* Depth Selector */}
              <div>
                <label className="text-xs font-mono text-blue-400 uppercase block mb-1.5 font-bold">
                  TARGET EXCAVATION DEPTH:
                </label>
                <div className="grid grid-cols-3 gap-2 font-mono text-xs">
                  {['8ft', '14ft', '22ft'].map((depth) => (
                    <button
                      key={depth}
                      onClick={() => setSelectedDepth(depth)}
                      className={`p-2.5 rounded border text-center transition-all ${
                        selectedDepth === depth
                          ? 'bg-[#0754AE] text-white border-[#0754AE] font-bold shadow'
                          : 'bg-[#F0F7FF] text-[#0754AE] border-blue-200 hover:border-[#2166D1]'
                      }`}
                    >
                      {depth} Depth
                    </button>
                  ))}
                </div>
              </div>

              {/* Soil Classification Selector */}
              <div>
                <label className="text-xs font-mono text-blue-400 uppercase block mb-1.5 font-bold">
                  OSHA SOIL CLASSIFICATION:
                </label>
                <div className="grid grid-cols-3 gap-2 font-mono text-xs">
                  {[
                    { id: 'typeA', label: 'Type A (Clay)' },
                    { id: 'typeB', label: 'Type B (Silt)' },
                    { id: 'typeC', label: 'Type C (Sand)' }
                  ].map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setSoilType(s.id)}
                      className={`p-2.5 rounded border text-center transition-all ${
                        soilType === s.id
                          ? 'bg-[#0754AE] text-white border-[#0754AE] font-bold shadow'
                          : 'bg-[#F0F7FF] text-[#0754AE] border-blue-200 hover:border-[#2166D1]'
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* File Format Format */}
              <div>
                <label className="text-xs font-mono text-blue-400 uppercase block mb-1.5 font-bold">
                  DESIRED CAD / BIM SPEC FILE FORMAT:
                </label>
                <div className="grid grid-cols-3 gap-2 font-mono text-xs">
                  {[
                    { id: 'dwg', label: 'AutoCAD (.DWG)' },
                    { id: 'rvt', label: 'Revit (.RVT)' },
                    { id: 'pdf', label: 'PDF Spec Sheet' }
                  ].map((fmt) => (
                    <button
                      key={fmt.id}
                      onClick={() => setSelectedFileType(fmt.id)}
                      className={`p-2.5 rounded border text-center transition-all ${
                        selectedFileType === fmt.id
                          ? 'bg-[#C00000] text-white border-[#C00000] font-bold shadow'
                          : 'bg-[#F0F7FF] text-[#0754AE] border-blue-200 hover:border-[#2166D1]'
                      }`}
                    >
                      {fmt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 space-y-3">
                <button 
                  onClick={onOpenEngineeringForm}
                  className="btn-red w-full text-xs py-3.5 justify-center"
                >
                  <Send className="w-4 h-4" />
                  REQUEST PE-STAMPED SUBMITTAL PACKAGE
                </button>

                <button 
                  onClick={onOpenDocLibrary}
                  className="btn-secondary w-full text-xs py-3 justify-center"
                >
                  <Download className="w-4 h-4 text-[#0754AE]" />
                  VISIT COMPLETE TECHNICAL LIBRARY
                </button>
              </div>
            </div>

            {/* Right Column: Dynamic Live Technical Drawing / Submittal Preview */}
            <div className="lg:col-span-7 bg-[#F0F7FF] border border-blue-200 rounded-lg p-6 font-mono relative">
              <div className="flex justify-between items-center pb-4 border-b border-blue-200 mb-4 text-xs">
                <span className="font-bold text-[#0754AE]">PREVIEW: TU-8000 ENGINEERING SUBMITTAL</span>
                <span className="text-[#C00000]">FORMAT: .{selectedFileType.toUpperCase()}</span>
              </div>

              {/* Blueprint Preview Render */}
              <div className="bg-white border border-blue-300 rounded p-6 shadow-inner space-y-4">
                <div className="flex justify-between border-b border-slate-200 pb-3 text-xs">
                  <div>
                    <div className="text-[10px] text-slate-400">PROJECT PARAMETERS</div>
                    <div className="font-bold text-[#0754AE]">
                      DEPTH: {selectedDepth.toUpperCase()} | SOIL: {soilType.toUpperCase()}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-slate-400">LATERAL PRESSURE</div>
                    <div className="font-bold text-[#C00000]">1,450 PSF RATED</div>
                  </div>
                </div>

                {/* Blueprint Drawing Vector Schematic */}
                <div className="h-44 border border-dashed border-blue-400 rounded bg-[#F0F7FF] flex items-center justify-center relative overflow-hidden">
                  <div className="text-center space-y-2">
                    <FileText className="w-10 h-10 text-[#2166D1] mx-auto animate-bounce" />
                    <div className="text-xs font-bold text-[#0754AE]">
                      AUTOCAD / REVIT MODEL GENERATED
                    </div>
                    <div className="text-[10px] text-blue-400">
                      TU-SB-824-HD • OSHA SUBPART P COMPLIANT
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px] text-blue-500">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2166D1]" />
                    Stamped PE Calculations
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2166D1]" />
                    Jobsite Installation Guidelines
                  </div>
                </div>
              </div>

              <div className="mt-4 text-center text-[10px] text-blue-400">
                100% Stamped Engineering Docs Issued within 24 Hours
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
