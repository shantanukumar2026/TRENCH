import React, { useState } from 'react';
import { ArrowRight, Mail, ShieldCheck, MapPin, Phone, FileText, Building2, Globe } from 'lucide-react';

interface FooterProps {
  onNavigateToSection: (sectionId: string) => void;
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateToSection, onOpenQuoteModal }) => {
  const [newsletterEmail, setNewsletterEmail] = useState<string>('');
  const [subscribed, setSubscribed] = useState<boolean>(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer id="footer" className="bg-[#004AAD] text-white pt-20 pb-12 border-t-4 border-[#0085F4] relative">
      <div className="container-industrial">
        
        {/* Top Corporate Locations Strip */}
        <div className="mb-16 pb-12 border-b border-[#0085F4]/40 grid grid-cols-1 md:grid-cols-3 gap-6 font-mono">
          
          {/* Location 1: HQ */}
          <div className="bg-[#003380] border border-[#0085F4]/40 p-5 space-y-2">
            <div className="flex items-center gap-2 text-[#00BBFF] text-xs font-bold uppercase">
              <Building2 className="w-4 h-4 text-[#00BBFF]" />
              <span>CORPORATE HEADQUARTERS</span>
            </div>
            <div className="text-sm font-bold text-white font-heading uppercase">TRENCH UNLIMITED MFG.</div>
            <div className="text-xs text-blue-100 leading-relaxed">
              100 Industrial Parkway, Suite 400<br />
              Corporate Infrastructure District
            </div>
            <div className="text-[11px] text-[#00BBFF] pt-1">
              Ph: 1-800-TRENCH-U | Direct Line
            </div>
          </div>

          {/* Location 2: Plant */}
          <div className="bg-[#003380] border border-[#0085F4]/40 p-5 space-y-2">
            <div className="flex items-center gap-2 text-[#00BBFF] text-xs font-bold uppercase">
              <MapPin className="w-4 h-4 text-[#00BBFF]" />
              <span>FABRICATION PLANT</span>
            </div>
            <div className="text-sm font-bold text-white font-heading uppercase">HEAVY STEEL FABRICATION A</div>
            <div className="text-xs text-blue-100 leading-relaxed">
              4850 Manufacturing Boulevard<br />
              Industrial Steel Park
            </div>
            <div className="text-[11px] text-[#00BBFF] pt-1">
              Ph: (800) 873-6248 | Warehouse Direct
            </div>
          </div>

          {/* Location 3: Logistics */}
          <div className="bg-[#003380] border border-[#0085F4]/40 p-5 space-y-2">
            <div className="flex items-center gap-2 text-[#00BBFF] text-xs font-bold uppercase">
              <Globe className="w-4 h-4 text-[#00BBFF]" />
              <span>NATIONAL LOGISTICS</span>
            </div>
            <div className="text-sm font-bold text-white font-heading uppercase">RAPID DISPATCH CENTER</div>
            <div className="text-xs text-blue-100 leading-relaxed">
              2200 Underground Drive, Sector 7<br />
              Heavy Civil Freight Terminal
            </div>
            <div className="text-[11px] text-[#00BBFF] pt-1">
              24/7 Field Equipment Emergency Hotline
            </div>
          </div>

        </div>

        {/* Main Organized Footer Links (4 Structured Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-16 border-b border-[#0085F4]/40">
          
          {/* Brand Info & Core Certifications */}
          <div className="lg:col-span-4 space-y-6">
            <div 
              onClick={() => onNavigateToSection('hero')}
              className="cursor-pointer flex items-center gap-3 bg-white p-3 w-fit shadow-md"
            >
              <img 
                src="/logo.png" 
                alt="Trench Unlimited Logo" 
                className="h-10 w-auto object-contain"
              />
            </div>

            <p className="text-sm text-blue-100 font-medium leading-relaxed">
              Trench Unlimited™ is America's leading manufacturer of OSHA 1926 Subpart P certified trench safety boxes, aluminum hydraulic shoring, slide rail systems, Richard Brink slot drains, and ACO polymer concrete drainage infrastructure.
            </p>

            <div className="pt-2 font-mono text-xs text-[#00BBFF] font-bold space-y-1.5 border-t border-[#0085F4]/40 pt-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#00BBFF]" />
                <span>OSHA 1926 SUBPART P CERTIFIED</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#00BBFF]" />
                <span>AASHTO H-20 HIGHWAY TRAFFIC LOAD RATED</span>
              </div>
            </div>
          </div>

          {/* Menu Column 1: Shoring & Safety Systems */}
          <div className="lg:col-span-2 space-y-3 font-mono text-xs">
            <h4 className="text-xs font-extrabold text-white uppercase font-heading tracking-wider border-b border-[#0085F4] pb-2 flex items-center gap-1.5">
              <span className="w-2 h-2 bg-[#00BBFF]"></span>
              <span>SHORING &amp; SAFETY</span>
            </h4>
            <ul className="space-y-2 text-blue-100 font-medium">
              <li><button onClick={() => onNavigateToSection('explorer')} className="hover:text-[#00BBFF] transition-colors text-left">Steel Trench Shield Boxes</button></li>
              <li><button onClick={() => onNavigateToSection('explorer')} className="hover:text-[#00BBFF] transition-colors text-left">Aluminum Hydraulic Shores</button></li>
              <li><button onClick={() => onNavigateToSection('explorer')} className="hover:text-[#00BBFF] transition-colors text-left">Modular Slide Rail Panels</button></li>
              <li><button onClick={() => onNavigateToSection('explorer')} className="hover:text-[#00BBFF] transition-colors text-left">Trench Walk-Through Ladders</button></li>
              <li><button onClick={() => onNavigateToSection('explorer')} className="hover:text-[#00BBFF] transition-colors text-left">AASHTO H-20 Steel Road Plates</button></li>
              <li><button onClick={() => onNavigateToSection('explorer')} className="hover:text-[#00BBFF] transition-colors text-left">Manhole Protection Shields</button></li>
            </ul>
          </div>

          {/* Menu Column 2: Heavy Drainage & Trench Covers */}
          <div className="lg:col-span-2 space-y-3 font-mono text-xs">
            <h4 className="text-xs font-extrabold text-white uppercase font-heading tracking-wider border-b border-[#0085F4] pb-2 flex items-center gap-1.5">
              <span className="w-2 h-2 bg-[#00BBFF]"></span>
              <span>DRAINAGE &amp; COVERS</span>
            </h4>
            <ul className="space-y-2 text-blue-100 font-medium">
              <li><button onClick={() => onNavigateToSection('explorer')} className="hover:text-[#00BBFF] transition-colors text-left">Richard Brink Slot Drains</button></li>
              <li><button onClick={() => onNavigateToSection('explorer')} className="hover:text-[#00BBFF] transition-colors text-left">ACO Polymer Concrete Channels</button></li>
              <li><button onClick={() => onNavigateToSection('explorer')} className="hover:text-[#00BBFF] transition-colors text-left">Lichtgitter Steel Mesh Gratings</button></li>
              <li><button onClick={() => onNavigateToSection('explorer')} className="hover:text-[#00BBFF] transition-colors text-left">Class D400-F900 Cast Iron Gratings</button></li>
              <li><button onClick={() => onNavigateToSection('explorer')} className="hover:text-[#00BBFF] transition-colors text-left">HDPE Modular Drainage Channels</button></li>
              <li><button onClick={() => onNavigateToSection('explorer')} className="hover:text-[#00BBFF] transition-colors text-left">Cleanout Pit Catch Basins</button></li>
            </ul>
          </div>

          {/* Menu Column 3: Engineering & Tab Data */}
          <div className="lg:col-span-2 space-y-3 font-mono text-xs">
            <h4 className="text-xs font-extrabold text-white uppercase font-heading tracking-wider border-b border-[#0085F4] pb-2 flex items-center gap-1.5">
              <span className="w-2 h-2 bg-[#00BBFF]"></span>
              <span>ENGINEERING DATA</span>
            </h4>
            <ul className="space-y-2 text-blue-100 font-medium">
              <li><button onClick={() => onNavigateToSection('tech-standards')} className="hover:text-[#00BBFF] transition-colors text-left">PE Tabulated Data Sheets</button></li>
              <li><button onClick={() => onNavigateToSection('tech-standards')} className="hover:text-[#00BBFF] transition-colors text-left">OSHA 1926 Soil Class Matrix</button></li>
              <li><button onClick={() => onNavigateToSection('tech-standards')} className="hover:text-[#00BBFF] transition-colors text-left">Load Class EN 1433 Standard</button></li>
              <li><button onClick={() => onNavigateToSection('tech-standards')} className="hover:text-[#00BBFF] transition-colors text-left">Submittal Drawing Packages</button></li>
              <li><button onClick={() => onNavigateToSection('tech-standards')} className="hover:text-[#00BBFF] transition-colors text-left">CAD &amp; BIM Specification Files</button></li>
            </ul>
          </div>

          {/* Menu Column 4: Civil Sectors & RFQ */}
          <div className="lg:col-span-2 space-y-3 font-mono text-xs">
            <h4 className="text-xs font-extrabold text-white uppercase font-heading tracking-wider border-b border-[#0085F4] pb-2 flex items-center gap-1.5">
              <span className="w-2 h-2 bg-[#00BBFF]"></span>
              <span>CIVIL SECTORS &amp; RFQ</span>
            </h4>
            <ul className="space-y-2 text-blue-100 font-medium mb-4">
              <li><button onClick={() => onNavigateToSection('solutions')} className="hover:text-[#00BBFF] transition-colors text-left">Municipal Waterworks</button></li>
              <li><button onClick={() => onNavigateToSection('solutions')} className="hover:text-[#00BBFF] transition-colors text-left">Highway Infrastructure</button></li>
              <li><button onClick={() => onNavigateToSection('solutions')} className="hover:text-[#00BBFF] transition-colors text-left">Stormwater Management</button></li>
              <li><button onClick={() => onNavigateToSection('story')} className="hover:text-[#00BBFF] transition-colors text-left">Company Story &amp; Tech</button></li>
            </ul>
            
            <button 
              onClick={onOpenQuoteModal} 
              className="btn-brand-primary w-full py-2.5 text-[11px] font-bold"
            >
              REQUEST RFQ &amp; QUOTE
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-blue-200">
          <div>
            © {new Date().getFullYear()} Trench Unlimited™ Inc. All Rights Reserved. U.S. Infrastructure Certified.
          </div>
          <div className="flex gap-6">
            <span>OSHA 1926 SUBPART P COMPLIANT</span>
            <span>AASHTO H-20 RATED</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
