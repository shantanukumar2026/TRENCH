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

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#0085F4]/40">
          
          {/* Brand Info */}
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
              Trench Unlimited™ is America's trusted manufacturer and supplier of OSHA 1926 certified trench safety boxes, hydraulic shoring, slide rail systems, and heavy civil underground infrastructure equipment.
            </p>

            <div className="pt-2 font-mono text-xs text-[#00BBFF] font-bold space-y-1">
              <div>OSHA 1926 SUBPART P CERTIFIED</div>
              <div>AASHTO H-20 HIGHWAY TRAFFIC LOAD RATED</div>
            </div>
          </div>

          {/* Quick Links Column 1 */}
          <div className="lg:col-span-3 space-y-4 font-mono text-xs">
            <h4 className="text-sm font-bold text-white uppercase font-heading tracking-wider border-b border-[#0085F4] pb-2">
              EQUIPMENT CATEGORIES
            </h4>
            <ul className="space-y-2.5 text-blue-100 font-medium">
              <li><button onClick={() => onNavigateToSection('explorer')} className="hover:text-[#00BBFF] transition-colors">Steel Trench Shields</button></li>
              <li><button onClick={() => onNavigateToSection('explorer')} className="hover:text-[#00BBFF] transition-colors">Hydraulic Trench Shores</button></li>
              <li><button onClick={() => onNavigateToSection('explorer')} className="hover:text-[#00BBFF] transition-colors">Modular Slide Rail Systems</button></li>
              <li><button onClick={() => onNavigateToSection('explorer')} className="hover:text-[#00BBFF] transition-colors">Trench Access Ladders</button></li>
              <li><button onClick={() => onNavigateToSection('explorer')} className="hover:text-[#00BBFF] transition-colors">AASHTO H-20 Steel Road Plates</button></li>
            </ul>
          </div>

          {/* Quick Links Column 2 */}
          <div className="lg:col-span-2 space-y-4 font-mono text-xs">
            <h4 className="text-sm font-bold text-white uppercase font-heading tracking-wider border-b border-[#0085F4] pb-2">
              CIVIL SECTORS
            </h4>
            <ul className="space-y-2.5 text-blue-100 font-medium">
              <li><button onClick={() => onNavigateToSection('solutions')} className="hover:text-[#00BBFF] transition-colors">Municipal Waterworks</button></li>
              <li><button onClick={() => onNavigateToSection('solutions')} className="hover:text-[#00BBFF] transition-colors">Stormwater &amp; Drainage</button></li>
              <li><button onClick={() => onNavigateToSection('solutions')} className="hover:text-[#00BBFF] transition-colors">Wastewater Main Lines</button></li>
              <li><button onClick={() => onNavigateToSection('solutions')} className="hover:text-[#00BBFF] transition-colors">Highway Civil Excavation</button></li>
              <li><button onClick={() => onNavigateToSection('solutions')} className="hover:text-[#00BBFF] transition-colors">Underground Utilities</button></li>
            </ul>
          </div>

          {/* Call to Action Column */}
          <div className="lg:col-span-3 space-y-4 font-mono text-xs">
            <h4 className="text-sm font-bold text-white uppercase font-heading tracking-wider border-b border-[#0085F4] pb-2">
              COMMERCIAL INQUIRIES
            </h4>
            <p className="text-blue-100">
              Need immediate jobsite shoring equipment or PE-stamped tabulated data?
            </p>
            <button 
              onClick={onOpenQuoteModal} 
              className="btn-brand-primary w-full py-3 text-xs"
            >
              REQUEST COMMERCIAL QUOTE
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
