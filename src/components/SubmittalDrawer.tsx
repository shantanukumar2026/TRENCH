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
    <div className="fixed inset-0 z-50 flex justify-end bg-[#004AAD]/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-xl bg-white h-full shadow-2xl flex flex-col justify-between p-6 border-l-4 border-[#004AAD] animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div>
          <div className="flex justify-between items-center pb-4 border-b border-[#E2E8F0]">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#0085F4]" />
              <h3 className="text-xl font-bold text-[#004AAD] font-heading uppercase">
                SUBMITTAL PACKAGE BUILDER
              </h3>
            </div>
            <button 
              onClick={onClose} 
              className="p-1 text-[#475569] hover:text-[#004AAD]"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="mt-4 space-y-4">
            <div>
              <label className="text-xs font-mono text-[#004AAD] uppercase font-bold block mb-1">
                PROJECT IDENTIFICATION NAME:
              </label>
              <input 
                type="text"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                className="w-full py-2 px-3 text-xs font-mono bg-[#F0F7FF] border border-[#0085F4] text-[#004AAD] font-bold"
              />
            </div>

            <div>
              <label className="text-xs font-mono text-[#004AAD] uppercase font-bold block mb-1">
                ENGINEER / CONTRACTOR OF RECORD:
              </label>
              <input 
                type="text"
                value={engineerName}
                onChange={(e) => setEngineerName(e.target.value)}
                className="w-full py-2 px-3 text-xs font-mono bg-[#F0F7FF] border border-[#0085F4] text-[#004AAD]"
              />
            </div>

            {/* Selected Items List */}
            <div>
              <div className="flex justify-between items-center text-xs font-mono text-[#004AAD] font-bold uppercase mb-2">
                <span>SUBMITTAL ITEMS ({selectedItems.length})</span>
                <span className="text-[#0085F4]">OSHA 1926 COMPLIANT</span>
              </div>

              <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                {selectedItems.map((item) => (
                  <div 
                    key={item.id}
                    className="p-3 bg-[#F0F7FF] border border-[#E2E8F0] flex justify-between items-center font-mono text-xs"
                  >
                    <div>
                      <div className="font-bold text-[#004AAD]">{item.name}</div>
                      <div className="text-[10px] text-[#475569]">{item.partNumber} • {item.loadRating}</div>
                    </div>
                    <button 
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-[#475569] hover:text-[#0085F4] p-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Add More Items Dropdown */}
            <div>
              <label className="text-xs font-mono text-[#004AAD] uppercase font-bold block mb-1">
                ADD PRODUCT TO SUBMITTAL:
              </label>
              <select
                onChange={(e) => {
                  const p = PRODUCTS_CATALOGUE.find(prod => prod.id === e.target.value);
                  if (p) handleAddItem(p);
                }}
                className="w-full p-2.5 bg-[#F8F8F8] border border-[#0085F4] text-xs font-mono text-[#004AAD] font-bold"
              >
                <option value="">+ SELECT PRODUCT TO ADD TO PACKAGE</option>
                {PRODUCTS_CATALOGUE.map(p => (
                  <option key={p.id} value={p.id}>{p.name} ({p.partNumber})</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-[#E2E8F0] space-y-3 font-mono">
          {generated ? (
            <div className="p-4 bg-[#F0F7FF] border border-[#0085F4] text-center space-y-2">
              <CheckCircle2 className="w-6 h-6 text-[#0085F4] mx-auto" />
              <div className="text-xs font-bold text-[#004AAD]">SUBMITTAL PDF GENERATED SUCCESSFULLY</div>
              <button
                onClick={() => alert(`Downloading PE-stamped submittal packet for ${projectName}`)}
                className="btn-brand-primary w-full py-3 text-xs"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD COMPREHENSIVE SUBMITTAL PACKET</span>
              </button>
            </div>
          ) : (
            <button
              onClick={() => setGenerated(true)}
              className="btn-brand-primary w-full py-3.5 text-xs"
            >
              <span>GENERATE SUBMITTAL PDF PACKET</span>
            </button>
          )}

          <button
            onClick={onClose}
            className="w-full py-2 text-xs font-bold text-[#475569] hover:text-[#004AAD]"
          >
            CANCEL &amp; CLOSE DRAWER
          </button>
        </div>

      </div>
    </div>
  );
};
