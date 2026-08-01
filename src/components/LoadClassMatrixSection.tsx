import React from 'react';
import { Table, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const LoadClassMatrixSection: React.FC = () => {
  const loadClasses = [
    { class: 'CLASS A 15 (15 kN / 3,372 LBS)', application: 'Pedestrian zones, footpaths, green spaces', material: 'Galvanized Sheet Steel / Light Polymer' },
    { class: 'CLASS B 125 (125 kN / 28,100 LBS)', application: 'Sidewalks, car parks, light vehicle driveways', material: 'Polymer Concrete / Composite Grates' },
    { class: 'CLASS C 250 (250 kN / 56,200 LBS)', application: 'Curbside channels, parking lots, light commercial', material: 'Ductile Iron / Reinforced Polymer' },
    { class: 'CLASS D 400 (400 kN / 89,920 LBS)', application: 'Highways, main roads, gas stations, AASHTO H-20', material: 'A572 Structural Steel / Cast Iron' },
    { class: 'CLASS E 600 (600 kN / 134,880 LBS)', application: 'Industrial docks, warehouse loading bays, logistics', material: 'Monolithic Polymer Concrete / Heavy Steel' },
    { class: 'CLASS F 900 (900 kN / 202,320 LBS)', application: 'Airports, container terminals, extreme wheel loads', material: 'Welded High-Tensile Structural Steel' }
  ];

  return (
    <section className="py-20 bg-white border-b border-[#E2E8F0] relative">
      <div className="container-industrial space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-[#004AAD] pb-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F0F7FF] border border-[#0085F4] text-xs font-mono font-bold text-[#004AAD]">
              <Table className="w-4 h-4 text-[#0085F4]" />
              <span>INTERNATIONAL LOAD RATING STANDARDS (EN 1433 &amp; AASHTO)</span>
            </div>
            <h2 className="text-section-title text-[#004AAD] uppercase">
              LOAD CLASS &amp; <span className="text-[#0085F4]">MATERIAL MATRIX</span>
            </h2>
            <p className="text-body-large text-[#475569] max-w-2xl font-medium">
              Understand exact structural capacity and wheel load classifications for trench covers, drainage channels, and shoring boxes.
            </p>
          </div>
        </div>

        {/* Load Table */}
        <div className="overflow-x-auto border-2 border-[#004AAD] shadow-xl">
          <table className="w-full text-left font-mono text-xs border-collapse">
            <thead>
              <tr className="bg-[#004AAD] text-white uppercase">
                <th className="p-4 border-b border-[#0085F4] font-bold">LOAD RATING CLASS</th>
                <th className="p-4 border-b border-[#0085F4] font-bold">CIVIL APPLICATION ENFORCEMENT</th>
                <th className="p-4 border-b border-[#0085F4] font-bold">PRIMARY MATERIAL GRADE</th>
              </tr>
            </thead>
            <tbody>
              {loadClasses.map((lc, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-[#F8F8F8]' : 'bg-white'}>
                  <td className="p-4 border-b border-[#E2E8F0] font-bold text-[#0085F4]">{lc.class}</td>
                  <td className="p-4 border-b border-[#E2E8F0] text-[#004AAD] font-semibold">{lc.application}</td>
                  <td className="p-4 border-b border-[#E2E8F0] text-[#475569]">{lc.material}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};
