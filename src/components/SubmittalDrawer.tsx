import React, { useState } from 'react';
import { PRODUCTS_CATALOGUE } from '../data/trenchData';
import { Product } from '../types';
import { X, FileText, CheckCircle2, Download, Plus, Trash2 } from 'lucide-react';

interface SubmittalDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SubmittalDrawer: React.FC<SubmittalDrawerProps> = ({ isOpen, onClose }) => {
  const [selectedItems, setSelectedItems] = useState<Product[]>([PRODUCTS_CATALOGUE[0], PRODUCTS_CATALOGUE[3]]);
  const [projectName, setProjectName] = useState<string>('City Main Line Expansion');
  const [engineerName, setEngineerName] = useState<string>('PE Stamped Request');
  const [generated, setGenerated] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleAddItem = (p: Product) => {
    if (!selectedItems.find(item => item.id === p.id)) {
      setSelectedItems([...selectedItems, p]);
    }
  };

  const handleRemoveItem = (id: string) => {
    setSelectedItems(selectedItems.filter(item => item.id !== id));
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-[#0754AE]/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-xl bg-white h-full shadow-2xl flex flex-col justify-between p-6 border-l-4 border-[#2166D1] animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div>
          <div className="flex justify-between items-center pb-4 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#C00000]" />
              <h3 className="text-xl font-bold text-[#0754AE] font-heading uppercase">
                ENGINEERING SUBMITTAL PACKAGE BUILDER
              </h3>
            </div>
            <button 
              onClick={onClose} 
              className="p-1 text-slate-400 hover:text-[#0754AE]"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="mt-4 space-y-4">
            <div>
              <label className="text-xs font-mono text-slate-500 uppercase font-bold block mb-1">
                PROJECT IDENTIFICATION NAME:
              </label>
              <input 
                type="text"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                className="w-full py-2 px-3 text-xs font-mono bg-[#F0F7FF] border border-blue-200 rounded text-[#0754AE] font-bold"
              />
            </div>

            <div>
              <label className="text-xs font-mono text-slate-500 uppercase font-bold block mb-1">
                ENGINEER / CONTRACTOR OF RECORD:
              </label>
              <input 
                type="text"
                value={engineerName}
                onChange={(e) => setEngineerName(e.target.value)}
                className="w-full py-2 px-3 text-xs font-mono bg-[#F0F7FF] border border-blue-200 rounded text-[#0754AE]"
              />
            </div>

            {/* Selected Items List */}
            <div>
              <div className="flex justify-between items-center text-xs font-mono text-[#0754AE] font-bold uppercase mb-2">
                <span>SUBMITTAL ITEMS ({selectedItems.length})</span>
                <span className="text-[#C00000]">OSHA & AWWA COMPLIANT</span>
              </div>

              <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                {selectedItems.map((item) => (
                  <div 
                    key={item.id}
                    className="p-3 bg-[#F0F7FF] border border-blue-200 rounded flex justify-between items-center font-mono text-xs"
                  >
                    <div>
                      <div className="font-bold text-[#0754AE]">{item.name}</div>
                      <div className="text-[10px] text-slate-500">{item.partNumber} • {item.loadRating}</div>
                    </div>
                    <button 
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-slate-400 hover:text-[#C00000] p-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Add More Items Dropdown */}
            <div>
              <label className="text-xs font-mono text-slate-500 uppercase font-bold block mb-1">
                ADD CATALOGUE ITEM TO SUBMITTAL:
              </label>
              <select 
                onChange={(e) => {
                  const found = PRODUCTS_CATALOGUE.find(p => p.id === e.target.value);
                  if (found) handleAddItem(found);
                }}
                className="w-full py-2 px-3 text-xs font-mono bg-white border border-blue-200 rounded text-[#0754AE]"
              >
                <option value="">-- Select Product to Add --</option>
                {PRODUCTS_CATALOGUE.map(p => (
                  <option key={p.id} value={p.id}>{p.partNumber} — {p.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Action Footer */}
        <div className="pt-6 border-t border-slate-200 space-y-3">
          {generated && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded font-mono text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              PE-Stamped Submittal Document Generated Successfully!
            </div>
          )}

          <button 
            onClick={() => setGenerated(true)}
            className="btn-red w-full text-xs py-3.5 justify-center"
          >
            <Download className="w-4 h-4" />
            GENERATE PE-STAMPED SUBMITTAL BUNDLE (.PDF)
          </button>

          <button 
            onClick={onClose}
            className="btn-secondary w-full text-xs py-2.5 justify-center"
          >
            CLOSE SUBMITTAL BUILDER
          </button>
        </div>

      </div>
    </div>
  );
};
