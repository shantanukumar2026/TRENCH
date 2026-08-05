import React from 'react';
import { Wrench, ShieldCheck, Phone, Download, Clock, Factory, ArrowRight } from 'lucide-react';

interface MaintenancePageProps {
  onNavigateHome: () => void;
  onRequestQuote: () => void;
}

export const MaintenancePage: React.FC<MaintenancePageProps> = ({
  onNavigateHome,
  onRequestQuote
}) => {
  return (
    <div className="py-20 bg-[#F8FAFC] min-h-[85vh] flex items-center border-b border-[#E2E8F0]">
      <div className="container-industrial max-w-4xl space-y-8 my-auto">
        
        {/* Maintenance Main Card */}
        <div className="bg-white border-2 border-[#004AAD] p-8 sm:p-12 shadow-2xl space-y-8 relative overflow-hidden">
          
          {/* Top Industrial Banner */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b-2 border-[#004AAD]">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#F1F5F9] border border-[#004AAD] text-xs font-mono font-bold text-[#004AAD] uppercase">
              <Wrench className="w-4 h-4 text-[#0085F4]" />
              <span>SYSTEM NOTICE // SCHEDULED FOUNDRY SERVER UPGRADE</span>
            </div>
            <span className="text-xs font-mono font-bold text-[#0085F4] flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#0085F4]" />
              ESTIMATED UPGRADE TIME: ~20 MINUTES
            </span>
          </div>

          {/* Core Content */}
          <div className="space-y-4 font-mono">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#004AAD] text-white flex items-center justify-center font-bold text-xl shrink-0">
                <Factory className="w-6 h-6 text-[#00BBFF]" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#0085F4] uppercase block">SYSTEM MAINTENANCE IN PROGRESS</span>
                <h1 className="text-2xl sm:text-4xl font-extrabold text-[#004AAD] uppercase tracking-tight leading-tight">
                  CAD BLUEPRINT &amp; SUBMITTAL <span className="text-[#0085F4]">SERVER MAINTENANCE</span>
                </h1>
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#475569] font-sans font-medium leading-relaxed max-w-2xl pt-2">
              Our central foundry CAD server and automated submittal generator are undergoing scheduled maintenance and metallurgical database indexing. All foundry production, manufacturing lines, and emergency quote dispatching remain 100% operational.
            </p>
          </div>

          {/* Retention Psychology Banner: Contractors can still place orders/quotes */}
          <div className="bg-[#004AAD] text-white p-6 border-2 border-[#0085F4] space-y-4 font-mono shadow-md">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-[#00BBFF] uppercase block">NEED URGENT PROJECT SUBMITTALS OR BID QUOTES?</span>
                <h3 className="text-lg font-bold text-white uppercase">Our Direct Foundry Sales Team is Online</h3>
              </div>
              <button
                onClick={onRequestQuote}
                className="bg-[#0085F4] hover:bg-[#00BBFF] text-white font-extrabold text-xs px-6 py-3 uppercase transition-colors shrink-0 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>REQUEST URGENT QUOTE</span>
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="pt-2 flex flex-col sm:flex-row gap-4 font-mono text-xs">
            <button
              onClick={onNavigateHome}
              className="flex-1 bg-white hover:bg-[#F1F5F9] text-[#004AAD] border-2 border-[#004AAD] font-bold py-3.5 px-6 uppercase transition-colors text-center flex items-center justify-center gap-2"
            >
              <span>RETURN TO MAIN DASHBOARD</span>
              <ArrowRight className="w-4 h-4 text-[#0085F4]" />
            </button>

            <button
              onClick={() => alert('Downloading Offline Master Submittal Specs PDF...')}
              className="bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#004AAD] border-2 border-[#CBD5E1] font-bold py-3.5 px-6 uppercase transition-colors text-center flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4 text-[#0085F4]" />
              <span>DOWNLOAD OFFLINE CATALOG PDF</span>
            </button>
          </div>

          {/* Sub-Footer Assurance */}
          <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-[11px] font-mono text-[#64748B]">
            <span className="flex items-center gap-1.5 font-bold text-[#004AAD]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0085F4]" />
              FOUNDRY LOGISTICS &amp; SHIPPING OPERATIONAL
            </span>
            <span>AASHTO M306 &amp; ASTM A536 STANDARDS</span>
          </div>

        </div>

      </div>
    </div>
  );
};
