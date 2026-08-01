import React, { useState, useEffect } from 'react';
import { Product, QuoteItem } from '../types';
import { Shield as ShieldIcon, X as XIcon, CheckCircle2 as CheckIcon, Plus as PlusIcon, Trash2 as TrashIcon, Upload as UploadIcon, Building2 as BuildingIcon, MapPin as MapPinIcon, Phone as PhoneIcon, Send as SendIcon } from 'lucide-react';

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
        partNumber: initialProduct.partNumber || 'TU-SB-824-HD',
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
        productName: 'TU-HydroLite Aluminum Hydraulic Shoring Rail',
        partNumber: 'TU-HS-8FT-AL',
        quantity: 1,
        sizeConfig: '8ft Rail / 2" Cylinder'
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#004AAD]/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-3xl bg-white shadow-2xl border-2 border-[#004AAD] overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-[#004AAD] text-white p-6 flex justify-between items-center shrink-0">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#00BBFF]">
              <ShieldIcon className="w-4 h-4" />
              OFFICIAL COMMERCIAL QUOTE &amp; TECHNICAL ESTIMATE
            </div>
            <h3 className="text-2xl font-bold font-heading uppercase mt-1">
              REQUEST COMMERCIAL QUOTE
            </h3>
          </div>
          <button 
            onClick={onClose} 
            className="p-1 text-white hover:text-[#00BBFF]"
          >
            <XIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {submitted ? (
            <div className="py-12 text-center space-y-4 font-mono">
              <CheckIcon className="w-16 h-16 text-[#0085F4] mx-auto animate-bounce" />
              <h4 className="text-2xl font-bold text-[#004AAD] font-heading uppercase">
                QUOTE REQUEST SUBMITTED SUCCESSFULLY!
              </h4>
              <p className="text-sm text-[#475569] max-w-md mx-auto">
                Thank you for contacting Trench Unlimited. Our civil estimation team will process your specifications and email your PE-stamped quote packet within 2 business hours.
              </p>
              <button
                onClick={onClose}
                className="btn-brand-primary py-3 px-8 text-xs font-bold"
              >
                CLOSE WINDOW
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Product Cart Selection */}
              <div>
                <div className="flex justify-between items-center pb-2 border-b border-[#E2E8F0] mb-3">
                  <span className="text-xs font-mono font-bold text-[#004AAD] uppercase">
                    1. SELECTED TRENCH EQUIPMENT ({items.length})
                  </span>
                  <button
                    type="button"
                    onClick={handleAddItem}
                    className="text-xs font-mono font-bold text-[#0085F4] hover:underline flex items-center gap-1"
                  >
                    <PlusIcon className="w-3.5 h-3.5" />
                    ADD ANOTHER EQUIPMENT PIECE
                  </button>
                </div>

                <div className="space-y-3">
                  {items.map((item, idx) => (
                    <div key={item.id} className="p-3.5 bg-[#F0F7FF] border border-[#0085F4] grid grid-cols-1 sm:grid-cols-12 gap-3 items-center font-mono text-xs">
                      <div className="sm:col-span-6">
                        <div className="font-bold text-[#004AAD]">{item.productName}</div>
                        <div className="text-[10px] text-[#475569]">{item.partNumber} • {item.sizeConfig}</div>
                      </div>

                      <div className="sm:col-span-4 flex items-center gap-2">
                        <span className="text-[#475569]">QTY:</span>
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => handleQuantityChange(idx, parseInt(e.target.value) || 1)}
                          className="w-16 p-1.5 bg-white border border-[#0085F4] font-bold text-[#004AAD] text-center"
                        />
                      </div>

                      <div className="sm:col-span-2 text-right">
                        {items.length > 1 && (
                          <button
                            type="button"
                            onClick={() => handleRemoveItem(idx)}
                            className="text-[#475569] hover:text-[#0085F4] p-1"
                          >
                            <TrashIcon className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact & Project Information */}
              <div>
                <div className="pb-2 border-b border-[#E2E8F0] mb-3 text-xs font-mono font-bold text-[#004AAD] uppercase">
                  2. CONTRACTOR &amp; JOBSITE DETAILS
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
                  <div>
                    <label className="text-[#475569] block font-bold mb-1">FULL NAME *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-2.5 bg-[#F8F8F8] border border-[#E2E8F0] text-[#004AAD] font-bold"
                    />
                  </div>

                  <div>
                    <label className="text-[#475569] block font-bold mb-1">COMPANY / CONTRACTOR *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Midwest Civil Infrastructure Corp"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full p-2.5 bg-[#F8F8F8] border border-[#E2E8F0] text-[#004AAD] font-bold"
                    />
                  </div>

                  <div>
                    <label className="text-[#475569] block font-bold mb-1">BUSINESS EMAIL *</label>
                    <input
                      type="email"
                      required
                      placeholder="john@midwestcivil.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-2.5 bg-[#F8F8F8] border border-[#E2E8F0] text-[#004AAD] font-bold"
                    />
                  </div>

                  <div>
                    <label className="text-[#475569] block font-bold mb-1">PHONE NUMBER *</label>
                    <input
                      type="tel"
                      required
                      placeholder="(555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-2.5 bg-[#F8F8F8] border border-[#E2E8F0] text-[#004AAD] font-bold"
                    />
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4 border-t border-[#E2E8F0]">
                <button
                  type="submit"
                  className="btn-brand-primary w-full py-4 text-xs font-bold"
                >
                  <SendIcon className="w-4 h-4" />
                  <span>SUBMIT COMMERCIAL QUOTE REQUEST</span>
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
