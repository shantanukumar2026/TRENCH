import React, { useState } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, MapPin, Phone, Building2 } from 'lucide-react';

interface RequestQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RequestQuoteModal: React.FC<RequestQuoteModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: 'Trench Shielding',
    depth: '10-15 ft',
    facilityRegion: 'Corporate HQ (District 01)',
    details: ''
  });

  if (!isOpen) return null;

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
              <ShieldCheck className="w-4 h-4 text-[#C00000]" />
              OFFICIAL PROJECT ESTIMATION &amp; PE SUBMITTAL REQUEST
            </div>
            <h3 className="text-2xl font-bold font-heading uppercase mt-1">
              REQUEST A QUOTE &amp; TECHNICAL SUBMITTAL
            </h3>
          </div>
          <button 
            onClick={onClose} 
            className="p-1 text-white/80 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Corporate Address & Contact Info Bar (Layout Placeholders) */}
        <div className="bg-[#F0F7FF] border-b border-blue-200 p-4 px-6 grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs text-[#0754AE] shrink-0">
          <div className="flex items-start gap-2">
            <Building2 className="w-4 h-4 text-[#C00000] shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-[11px] uppercase text-[#0754AE]">CORPORATE HEADQUARTERS</div>
              <div className="text-[10px] text-slate-600">100 Industrial Parkway, Suite 400, District 01</div>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 text-[#2166D1] shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-[11px] uppercase text-[#0754AE]">LOGISTICS FACILITY</div>
              <div className="text-[10px] text-slate-600">4850 Manufacturing Blvd, Sector B, Zone 02</div>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <Phone className="w-4 h-4 text-[#C00000] shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-[11px] uppercase text-[#0754AE]">HOTLINE &amp; PE DESK</div>
              <div className="text-[10px] text-slate-600">1-800-TRENCH-U | pe-desk@company.com</div>
            </div>
          </div>
        </div>

        {/* Form Body */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="py-12 text-center space-y-4 font-mono">
              <CheckCircle2 className="w-16 h-16 text-[#2166D1] mx-auto animate-bounce" />
              <h4 className="text-2xl font-bold text-[#0754AE] uppercase font-heading">
                QUOTE REQUEST TRANSMITTED
              </h4>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                Thank you. Our engineering &amp; estimating team will review your project specifications and issue submittal pricing within 2 hours.
              </p>
              <button 
                onClick={onClose}
                className="btn-primary text-xs py-3 px-6 mt-4"
              >
                RETURN TO WEBSITE
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono text-slate-500 uppercase font-bold block mb-1">
                    FULL NAME *
                  </label>
                  <input 
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full py-2 px-3 text-xs bg-[#F0F7FF] border border-blue-200 rounded text-[#0754AE]"
                    placeholder="e.g. Project Manager Name"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-500 uppercase font-bold block mb-1">
                    COMPANY / ORGANIZATION *
                  </label>
                  <input 
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full py-2 px-3 text-xs bg-[#F0F7FF] border border-blue-200 rounded text-[#0754AE]"
                    placeholder="e.g. Utility Contractor Name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono text-slate-500 uppercase font-bold block mb-1">
                    BUSINESS EMAIL *
                  </label>
                  <input 
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full py-2 px-3 text-xs bg-[#F0F7FF] border border-blue-200 rounded text-[#0754AE]"
                    placeholder="name@company.com"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-500 uppercase font-bold block mb-1">
                    PHONE NUMBER
                  </label>
                  <input 
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full py-2 px-3 text-xs bg-[#F0F7FF] border border-blue-200 rounded text-[#0754AE]"
                    placeholder="(800) 000-0000"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-mono text-slate-500 uppercase font-bold block mb-1">
                    PRODUCT CATEGORY
                  </label>
                  <select 
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full py-2 px-3 text-xs bg-[#F0F7FF] border border-blue-200 rounded text-[#0754AE]"
                  >
                    <option value="Trench Shielding">Trench Shielding &amp; Boxes</option>
                    <option value="Polymer Drainage">Polymer Drainage Systems</option>
                    <option value="Precast Vaults">Precast Concrete Vaults</option>
                    <option value="Utility Piping">C900 &amp; HDPE Pressure Pipe</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-500 uppercase font-bold block mb-1">
                    ESTIMATED DEPTH
                  </label>
                  <select 
                    value={formData.depth}
                    onChange={(e) => setFormData({ ...formData, depth: e.target.value })}
                    className="w-full py-2 px-3 text-xs bg-[#F0F7FF] border border-blue-200 rounded text-[#0754AE]"
                  >
                    <option value="0-5 ft">0 - 5 FT (Surface)</option>
                    <option value="5-10 ft">5 - 10 FT (Access)</option>
                    <option value="10-15 ft">10 - 15 FT (Trench)</option>
                    <option value="15-25 ft+">15 - 25+ FT (Deep Flow)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-500 uppercase font-bold block mb-1">
                    TARGET LOGISTICS REGION
                  </label>
                  <select 
                    value={formData.facilityRegion}
                    onChange={(e) => setFormData({ ...formData, facilityRegion: e.target.value })}
                    className="w-full py-2 px-3 text-xs bg-[#F0F7FF] border border-blue-200 rounded text-[#0754AE]"
                  >
                    <option value="Corporate HQ">Corporate HQ (District 01)</option>
                    <option value="Manufacturing Hub">Fabrication Plant (Region 02)</option>
                    <option value="Logistics Center">Dispatch Center (Region 03)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-mono text-slate-500 uppercase font-bold block mb-1">
                  PROJECT DETAILS / SPECIAL REQUIREMENTS
                </label>
                <textarea 
                  rows={3}
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="w-full py-2 px-3 text-xs bg-[#F0F7FF] border border-blue-200 rounded text-[#0754AE]"
                  placeholder="Specify linear feet, delivery timeline, or load rating requirements..."
                ></textarea>
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button 
                  type="button"
                  onClick={onClose}
                  className="btn-secondary text-xs py-3 px-5"
                >
                  CANCEL
                </button>
                <button 
                  type="submit"
                  className="bg-[#C00000] hover:bg-[#A00000] text-white text-xs py-3 px-6 font-heading font-bold uppercase flex items-center gap-2 transition-colors"
                >
                  <Send className="w-4 h-4" />
                  SUBMIT ESTIMATE REQUEST
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
