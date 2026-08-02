import React from 'react';
import { Award, ShieldCheck, CheckCircle2, FileCheck2 } from 'lucide-react';

export const CertificationsAndComplianceSection: React.FC = () => {
  const certs = [
    { title: 'OSHA 1926 SUBPART P COMPLIANT', desc: 'Certified PE tabulated data for all trench boxes, hydraulic shores, and slide rail shoring.' },
    { title: 'AWS D1.1 STRUCTURAL WELDING CODE', desc: 'All steel seams welded by certified AWS D1.1 structural welding inspectors.' },
    { title: 'AASHTO H-20 & HS-20 LOAD RATED', desc: 'Heavy traffic load capacity for street decking plates and trench drain gratings.' },
    { title: 'ISO 9001:2015 QUALITY MANAGEMENT', desc: 'Certified manufacturing quality control across all structural steel & aluminum production.' }
  ];

  return (
    <section id="certifications-compliance" className="py-16 bg-[#004AAD] text-white border-b border-[#0085F4] relative">
      <div className="container-industrial space-y-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0085F4] text-xs font-mono font-bold text-white uppercase">
            <Award className="w-4 h-4 text-[#00BBFF]" />
            <span>CERTIFIED ENGINEERING &amp; MANUFACTURING QUALITY</span>
          </div>
          <h2 className="text-section-title text-white uppercase">
            INDUSTRY CERTIFICATIONS &amp; <span className="text-[#00BBFF]">QUALITY STANDARDS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono">
          {certs.map((c, idx) => (
            <div key={idx} className="bg-[#003380] border border-[#0085F4] p-6 space-y-3">
              <div className="flex items-center gap-2 text-[#00BBFF]">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-xs font-extrabold uppercase">SPEC CERT 0{idx + 1}</span>
              </div>
              <h3 className="text-sm font-extrabold text-white uppercase leading-snug">{c.title}</h3>
              <p className="text-xs text-blue-200 font-sans font-medium leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
