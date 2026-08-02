import React, { useState } from 'react';
import { CheckSquare, ShieldCheck, AlertTriangle, CheckCircle2 } from 'lucide-react';

export const JobsiteSafetyChecklistSection: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<number[]>([0, 1, 2]);

  const checklist = [
    { title: 'COMPETENT PERSON ON-SITE', desc: 'Certified Competent Person physically present before crew entry.' },
    { title: 'ATMOSPHERIC GAS TESTING', desc: 'Oxygen & hazardous gas tested for trenches > 4 ft deep near utility lines.' },
    { title: 'EGRESS LADDER WITHIN 25 FT', desc: 'Ladders, ramps, or stairways positioned within 25 lateral feet of all workers.' },
    { title: 'SPOIL PILE 2-FT CLEARANCE', desc: 'Excavated spoils and equipment set back at least 2 feet from trench edge.' },
    { title: 'PE STAMPED SHORING VERIFIED', desc: 'Trench box or hydraulic shoring installed per PE tabulated data.' },
    { title: 'SURFACE CRACK INSPECTION', desc: 'No tension cracks or sloughing observed along excavation crest.' }
  ];

  const toggleItem = (idx: number) => {
    if (checkedItems.includes(idx)) {
      setCheckedItems(checkedItems.filter(i => i !== idx));
    } else {
      setCheckedItems([...checkedItems, idx]);
    }
  };

  return (
    <section id="safety-checklist" className="py-20 bg-[#F1F5F9] border-b border-[#E2E8F0] relative">
      <div className="container-industrial space-y-12">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-[#004AAD] pb-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#004AAD] text-xs font-mono font-bold text-[#004AAD] uppercase">
              <CheckSquare className="w-4 h-4 text-[#0085F4]" />
              <span>OSHA COMPETENT PERSON DAILY INSPECTION</span>
            </div>
            <h2 className="text-section-title text-[#004AAD] uppercase">
              DAILY TRENCH <span className="text-[#0085F4]">SAFETY CHECKLIST</span>
            </h2>
            <p className="text-body-large text-[#475569] font-medium">
              Interactive 6-point daily jobsite excavation inspection protocol required under OSHA 1926 Subpart P prior to worker entry.
            </p>
          </div>

          <div className="bg-white border-2 border-[#004AAD] p-4 font-mono text-center shrink-0">
            <div className="text-xs text-[#64748B] uppercase">CHECKLIST SCORE</div>
            <div className="text-2xl font-extrabold text-[#0085F4]">{checkedItems.length} / 6 VERIFIED</div>
          </div>
        </div>

        {/* Checklist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-mono">
          {checklist.map((item, idx) => {
            const isChecked = checkedItems.includes(idx);
            return (
              <div
                key={idx}
                onClick={() => toggleItem(idx)}
                className={`p-6 border-2 transition-all cursor-pointer flex items-start gap-4 select-none ${
                  isChecked
                    ? 'bg-white border-[#0085F4] shadow-sm'
                    : 'bg-[#F8FAFC] border-[#CBD5E1] opacity-75 hover:opacity-100'
                }`}
              >
                <div className={`w-6 h-6 flex items-center justify-center border-2 shrink-0 mt-0.5 ${
                  isChecked ? 'bg-[#0085F4] border-[#0085F4] text-white' : 'border-[#94A3B8] bg-white'
                }`}>
                  {isChecked && <CheckCircle2 className="w-4 h-4" />}
                </div>

                <div className="space-y-1">
                  <h3 className={`text-sm font-extrabold uppercase ${isChecked ? 'text-[#004AAD]' : 'text-[#64748B]'}`}>
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#475569] font-sans font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
