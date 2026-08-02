import React from 'react';
import { Truck, Clock, Shield, MapPin, PhoneCall, ArrowRight } from 'lucide-react';

interface RentalFleetSectionProps {
  onRequestQuote: () => void;
}

export const RentalFleetSection: React.FC<RentalFleetSectionProps> = ({ onRequestQuote }) => {
  const yards = [
    { region: 'EAST COAST LOGISTICS HUB', city: 'Philadelphia, PA', status: 'In Stock', fleet: '180+ Steel Boxes & Slide Rails' },
    { region: 'MIDWEST CENTRAL YARD', city: 'Chicago, IL', status: 'In Stock', fleet: '240+ Hydraulic Shores & Trench Shields' },
    { region: 'SOUTHERN ENERGY CORRIDOR', city: 'Houston, TX', status: 'In Stock', fleet: '150+ Modular Aluminum Shields' },
    { region: 'WEST COAST METRO FLEET', city: 'Sacramento, CA', status: 'In Stock', fleet: '210+ Heavy Road Plates & Gratings' }
  ];

  return (
    <section id="rental-fleet" className="py-20 bg-[#002B66] text-white relative overflow-hidden border-b border-[#0085F4]">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#003380_1px,transparent_1px),linear-gradient(to_bottom,#003380_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none" />

      <div className="container-industrial relative z-10 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-[#0085F4] pb-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0085F4] text-xs font-mono font-bold text-white uppercase tracking-wider">
              <Truck className="w-4 h-4 text-[#00BBFF]" />
              <span>NATIONWIDE RENTAL FLEET &amp; SAME-DAY DISPATCH</span>
            </div>
            <h2 className="text-section-title text-white uppercase">
              24/7 EMERGENCY <span className="text-[#00BBFF]">JOB-SITE DELIVERIES</span>
            </h2>
            <p className="text-body-large text-blue-100 font-medium">
              Over 48 regional equipment yards stocked with OSHA-compliant Trench Safety Boxes, Hydraulic Shores, Slide Rail Systems, and AASHTO Road Plates ready for immediate transport.
            </p>
          </div>

          <button
            onClick={onRequestQuote}
            className="inline-flex items-center justify-center gap-2 bg-[#0085F4] hover:bg-[#00BBFF] text-white font-mono font-bold text-sm px-6 py-3 uppercase transition-all shadow-md hover:scale-[1.02] shrink-0"
          >
            <span>RESERVE RENTAL FLEET</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4 Regional Hubs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {yards.map((yard, idx) => (
            <div key={idx} className="bg-[#001F4D] border-2 border-[#0085F4]/60 hover:border-[#00BBFF] p-6 space-y-4 transition-all">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#00BBFF]">
                  <MapPin className="w-4 h-4" />
                  {yard.city}
                </span>
                <span className="bg-[#0085F4] text-white text-[10px] font-mono font-bold px-2 py-0.5 uppercase">
                  {yard.status}
                </span>
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-white uppercase font-mono">{yard.region}</h3>
                <p className="text-xs text-blue-200 font-medium">{yard.fleet}</p>
              </div>
              <div className="pt-3 border-t border-[#0085F4]/40 flex items-center gap-2 text-xs font-mono text-blue-100">
                <Clock className="w-3.5 h-3.5 text-[#00BBFF]" />
                <span>Same-Day Site Delivery</span>
              </div>
            </div>
          ))}
        </div>

        {/* 24/7 Hotline Banner */}
        <div className="bg-[#004AAD] border-2 border-[#0085F4] p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-[#0085F4] flex items-center justify-center shrink-0">
              <PhoneCall className="w-7 h-7 text-white" />
            </div>
            <div>
              <div className="text-xs font-mono font-bold text-[#00BBFF] uppercase">IMMEDIATE CAVE-IN EMERGENCY DISPATCH</div>
              <div className="text-xl md:text-2xl font-black text-white font-mono uppercase tracking-wide">
                1-800-TRENCH-U <span className="text-xs text-blue-200 font-normal font-sans">(1-800-873-6248)</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 text-xs font-mono font-bold text-blue-100 bg-[#002B66] px-4 py-2 border border-[#0085F4]">
            <Shield className="w-4 h-4 text-[#00BBFF]" />
            <span>24/7/365 On-Call Professional Engineers</span>
          </div>
        </div>

      </div>
    </section>
  );
};
