import React, { useState, useEffect } from 'react';
import { Product, QuoteItem } from '../types';
import { ShieldCheck as ShieldIcon, X as XIcon, CheckCircle2 as CheckIcon, Plus as PlusIcon, Trash2 as TrashIcon, Upload as UploadIcon, Building2 as BuildingIcon, MapPin as MapPinIcon, Phone as PhoneIcon, Send as SendIcon } from 'lucide-react';

interface RequestQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: Product | null;
}

export const RequestQuoteModal: React.FC<RequestQuoteModalProps> = ({ isOpen, onClose, initialProduct }) => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [items, setItems] = useState<QuoteItem[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectName: '',
    projectLocation: '',
    requiredDate: '',
    notes: '',
    attachment: null as File | null
  });

  useEffect(() => {
    if (initialProduct) {
      setItems([{
        id: initialProduct.id,
        productName: initialProduct.name,
        partNumber: initialProduct.partNumber || '[VERIFIED PART NUMBER]',
        quantity: 1,
        sizeConfig: initialProduct.sizeRange || 'Standard Configuration'
      }]);
    } else if (items.length === 0) {
      setItems([{
        id: 'default-item-1',
        productName: 'TU-8000 Heavy-Duty Steel Trench Shield',
        partNumber: 'TU-SB-824-HD',
        quantity: 1,
        sizeConfig: '8ft H x 24ft L'
      }]);
    }
  }, [initialProduct, isOpen]);

  if (!isOpen) return null;

  const handleAddItem = () => {
    setItems([
      ...items,
      {
        id: `item-${Date.now()}`,
        productName: 'TU-C900 PVC Pressure Utility Pipe System',
        partNumber: 'TU-P-C900-12',
        quantity: 1,
        sizeConfig: '12-inch Nominal Diameter'
      }
    ]);
  };

  const handleRemoveItem = (index: number) => {
    if (items.length > 1) {
      setItems(items.filter((_, i) => i !== index));
    }
  };

  const handleQuantityChange = (index: number, qty: number) => {
    const updated = [...items];
    updated[index].quantity = Math.max(1, qty);
    setItems(updated);
  };

  const handleItemChange = (index: number, field: keyof QuoteItem, value: any) => {
    const updated = [...items];
    (updated[index] as any)[field] = value;
    setItems(updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0754AE]/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-2xl border-2 border-blue-300 overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0754AE] to-[#2166D1] text-white p-6 flex justify-between items-center shrink-0">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-blue-200">
              <ShieldIcon className="w-4 h-4 text-[#C00000]" />
              OFFICIAL PROJECT ESTIMATION & PE SUBMITTAL REQUEST
            </div>
            <h3 className="text-2xl font-bold font-heading uppercase mt-1">
              REQUEST A QUOTE & TECHNICAL SUBMITTAL
            </h3>
          </div>
          <button 
            onClick={onClose} 
            className="p-1 text-white/80 hover:text-white"
          >
            <XIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Corporate Address & Contact Info Bar */}
        <div className="bg-[#F0F7FF] border-b border-blue-200 p-4 px-6 grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs text-[#0754AE] shrink-0">
          <div className="flex items-start gap-2">
            <BuildingIcon className="w-4 h-4 text-[#C00000] shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-[11px] uppercase text-[#0754AE]">CORPORATE HEADQUARTERS</div>
              <div className="text-[10px] text-[#163B66]">100 Industrial Parkway, Suite 400</div>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <MapPinIcon className="w-4 h-4 text-[#2166D1] shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-[11px] uppercase text-[#0754AE]">LOGISTICS & WAREHOUSE</div>
              <div className="text-[10px] text-[#163B66]">4850 Infrastructure Blvd, Sector B</div>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <PhoneIcon className="w-4 h-4 text-[#C00000] shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-[11px] uppercase text-[#0754AE]">HOTLINE & PE DESK</div>
              <div className="text-[10px] text-[#163B66]">1-800-TRENCH-U | pe-desk@company.com</div>
            </div>
          </div>
        </div>

        {/* Form Body */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="py-12 text-center space-y-4 font-mono">
              <CheckIcon className="w-16 h-16 text-[#2166D1] mx-auto animate-bounce" />
              <h4 className="text-2xl font-bold text-[#0754AE] uppercase font-heading">
                QUOTE REQUEST TRANSMITTED
              </h4>
              <p className="text-xs text-[#163B66] max-w-md mx-auto">
                Thank you. Our engineering & estimating team will review your project specifications for the requested {items.length} item(s) and issue submittal pricing within 2 hours.
              </p>
              <button 
                onClick={() => { setSubmitted(false); onClose(); }}
                className="btn-primary text-xs py-3 px-6 mt-4"
              >
                RETURN TO WEBSITE
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 font-mono text-xs">
              
              {/* Product Items List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-blue-200 pb-2">
                  <span className="font-bold text-[#0754AE] uppercase">SELECTED PRODUCT SYSTEMS ({items.length})</span>
                  <button
                    type="button"
                    onClick={handleAddItem}
                    className="flex items-center gap-1 text-[#0754AE] hover:text-[#2166D1] font-bold text-[11px]"
                  >
                    <PlusIcon className="w-3.5 h-3.5" />
                    <span>ADD ANOTHER PRODUCT +</span>
                  </button>
                </div>

                {items.map((item, idx) => (
                  <div key={item.id || idx} className="p-3 bg-[#F0F7FF] border border-blue-200 rounded-lg grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                    <div className="sm:col-span-5 space-y-1">
                      <label className="text-[10px] text-[#0754AE] font-bold">SYSTEM NAME / MODEL</label>
                      <input
                        type="text"
                        value={item.productName}
                        onChange={(e) => handleItemChange(idx, 'productName', e.target.value)}
                        className="w-full p-2 rounded bg-white border border-blue-200 text-[#0754AE] font-bold"
                        required
                      />
                    </div>

                    <div className="sm:col-span-3 space-y-1">
                      <label className="text-[10px] text-[#0754AE] font-bold">SIZE / CONFIGURATION</label>
                      <input
                        type="text"
                        value={item.sizeConfig}
                        onChange={(e) => handleItemChange(idx, 'sizeConfig', e.target.value)}
                        className="w-full p-2 rounded bg-white border border-blue-200 text-[#163B66]"
                      />
                    </div>

                    <div className="sm:col-span-2 space-y-1">
                      <label className="text-[10px] text-[#0754AE] font-bold">QTY</label>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(idx, parseInt(e.target.value) || 1)}
                        className="w-full p-2 rounded bg-white border border-blue-200 text-[#0754AE] font-bold text-center"
                        required
                      />
                    </div>

                    <div className="sm:col-span-2 flex items-center justify-end pt-4 sm:pt-0">
                      {items.length > 1 && (
                        <button
                          type="button"
                          onClick={() => handleRemoveItem(idx)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded"
                          title="Remove item"
                        >
                          <TrashIcon className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Project & Contractor Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-[#0754AE]">FULL NAME *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full p-2.5 rounded bg-white border border-blue-200 text-[#0754AE] focus:border-[#2166D1] outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-[#0754AE]">COMPANY / CONTRACTOR *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Midwest Utility Contractors"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full p-2.5 rounded bg-white border border-blue-200 text-[#0754AE] focus:border-[#2166D1] outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-[#0754AE]">WORK EMAIL *</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="jdoe@contractor.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full p-2.5 rounded bg-white border border-blue-200 text-[#0754AE] focus:border-[#2166D1] outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-[#0754AE]">PHONE NUMBER *</label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="(555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full p-2.5 rounded bg-white border border-blue-200 text-[#0754AE] focus:border-[#2166D1] outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-[#0754AE]">PROJECT NAME</label>
                  <input 
                    type="text" 
                    placeholder="e.g. City Main Expansion #042"
                    value={formData.projectName}
                    onChange={(e) => setFormData({...formData, projectName: e.target.value})}
                    className="w-full p-2.5 rounded bg-white border border-blue-200 text-[#0754AE] focus:border-[#2166D1] outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-[#0754AE]">PROJECT LOCATION / CITY</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Chicago, IL"
                    value={formData.projectLocation}
                    onChange={(e) => setFormData({...formData, projectLocation: e.target.value})}
                    className="w-full p-2.5 rounded bg-white border border-blue-200 text-[#0754AE] focus:border-[#2166D1] outline-none"
                  />
                </div>
              </div>

              {/* Additional Notes & Drawing Upload */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-[#0754AE]">PROJECT NOTES & SPECIFICATIONS</label>
                <textarea 
                  rows={3}
                  placeholder="Specify excavation depth, soil type, required delivery date, or PE stamped plan requirements..."
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  className="w-full p-2.5 rounded bg-white border border-blue-200 text-[#0754AE] focus:border-[#2166D1] outline-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-[#0754AE]">
                  <UploadIcon className="w-4 h-4 text-[#C00000]" />
                  <span className="text-[10px]">CAD Drawings &amp; Plan Specs Can Be Emailed To pe-desk@company.com</span>
                </div>
                <button 
                  type="submit"
                  className="btn-primary w-full sm:w-auto py-3.5 px-8 flex items-center justify-center gap-2 text-xs"
                >
                  <SendIcon className="w-4 h-4 text-white" />
                  <span>TRANSMIT QUOTE REQUEST</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
