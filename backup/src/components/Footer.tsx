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
    <footer className="bg-gradient-to-b from-[#0754AE] to-[#1E3A8A] text-white pt-20 pb-12 border-t-4 border-[#2166D1] relative">
      <div className="container-custom">
        
        {/* Top Corporate Locations Strip (Layout Placeholders) */}
        <div className="mb-16 pb-12 border-b border-blue-600/50 grid grid-cols-1 md:grid-cols-3 gap-6 font-mono">
          
          {/* Location 1: HQ */}
          <div className="bg-blue-950/60 border border-blue-400/40 p-5 rounded-lg space-y-2">
            <div className="flex items-center gap-2 text-[#FFD700] text-xs font-bold uppercase">
              <Building2 className="w-4 h-4 text-[#C00000]" />
              <span>CORPORATE HEADQUARTERS</span>
            </div>
            <div className="text-sm font-bold text-white font-heading">PRIMARY INDUSTRIAL COMPLEX</div>
            <div className="text-xs text-blue-200 leading-relaxed">
              100 Industrial Parkway, Suite 400<br />
              Corporate District, Metro Region 01
            </div>
            <div className="text-[11px] text-blue-300 pt-1">
              Ph: (800) 000-0000 | Fax: (800) 000-0001
            </div>
          </div>

          {/* Location 2: Regional Manufacturing Hub */}
          <div className="bg-blue-950/60 border border-blue-400/40 p-5 rounded-lg space-y-2">
            <div className="flex items-center gap-2 text-[#FFD700] text-xs font-bold uppercase">
              <MapPin className="w-4 h-4 text-[#2166D1]" />
              <span>MANUFACTURING FACILITY</span>
            </div>
            <div className="text-sm font-bold text-white font-heading">FABRICATION PLANT A</div>
            <div className="text-xs text-blue-200 leading-relaxed">
              4850 Manufacturing Boulevard, Building B<br />
              Industrial Zone, Region 02
            </div>
            <div className="text-[11px] text-blue-300 pt-1">
              Ph: (800) 000-0002 | Warehouse Direct
            </div>
          </div>

          {/* Location 3: Regional Logistics Hub */}
          <div className="bg-blue-950/60 border border-blue-400/40 p-5 rounded-lg space-y-2">
            <div className="flex items-center gap-2 text-[#FFD700] text-xs font-bold uppercase">
              <Globe className="w-4 h-4 text-[#2166D1]" />
              <span>LOGISTICS DISTRIBUTION</span>
            </div>
            <div className="text-sm font-bold text-white font-heading">REGIONAL DISPATCH CENTER</div>
            <div className="text-xs text-blue-200 leading-relaxed">
              2200 Underground Drive, Sector 7<br />
              Logistics Park, Region 03
            </div>
            <div className="text-[11px] text-blue-300 pt-1">
              Ph: (800) 000-0003 | 24/7 Dispatch
            </div>
          </div>

        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-blue-600/40">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-6">
            <div 
              onClick={() => onNavigateToSection('hero')}
              className="cursor-pointer flex items-center gap-3 bg-white p-3 rounded-lg w-fit shadow-md"
            >
              <img 
                src="/logo.png" 
                alt="Trench Unlimited Logo" 
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
                className="h-10 w-auto object-contain"
              />
            </div>

            <p className="text-sm text-blue-100 font-medium leading-relaxed">
              Trench Unlimited™ is America's dedicated underground infrastructure &amp; trench shielding manufacturer. Engineered solutions for contractors, utilities, and civil engineering projects.
            </p>

            <div className="font-mono text-xs text-blue-200 space-y-2">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C00000]" />
                <span>OSHA 1926 SUBPART P COMPLIANT</span>
              </div>
              <div className="text-[#C00000] font-bold italic text-sm">
                Everything Trench.....
              </div>
              <div className="flex items-center gap-2 pt-1 text-white font-bold">
                <Phone className="w-4 h-4 text-[#C00000]" />
                <span>HOTLINE: 1-800-TRENCH-U</span>
              </div>
            </div>
          </div>

          {/* Column 2: Products */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading text-lg font-bold tracking-wider uppercase text-white border-b border-blue-500/40 pb-2">
              PRODUCTS
            </h4>
            <ul className="space-y-2 text-xs font-mono text-blue-100">
              <li>
                <button onClick={() => onNavigateToSection('catalogue')} className="hover:text-white transition-colors">
                  Trench Protection
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateToSection('catalogue')} className="hover:text-white transition-colors">
                  Polymer Drainage
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateToSection('catalogue')} className="hover:text-white transition-colors">
                  Access Structures
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateToSection('catalogue')} className="hover:text-white transition-colors">
                  Pipe &amp; Fittings
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateToSection('catalogue')} className="hover:text-white transition-colors">
                  Utility Spacers
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Engineering */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading text-lg font-bold tracking-wider uppercase text-white border-b border-blue-500/40 pb-2">
              ENGINEERING
            </h4>
            <ul className="space-y-2 text-xs font-mono text-blue-100">
              <li>
                <button onClick={() => onNavigateToSection('engineering')} className="hover:text-white transition-colors">
                  Submittal Builder
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateToSection('resources')} className="hover:text-white transition-colors">
                  CAD / BIM Models (.DWG)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateToSection('resources')} className="hover:text-white transition-colors">
                  PE Stamped Calculations
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateToSection('howitworks')} className="hover:text-white transition-colors">
                  Installation Guides
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateToSection('casestudy')} className="hover:text-white transition-colors">
                  Case Studies
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Contact CTA */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-heading text-lg font-bold tracking-wider uppercase text-white border-b border-blue-500/40 pb-2">
              TECHNICAL BULLETIN &amp; QUOTES
            </h4>
            <p className="text-xs text-blue-100 font-medium">
              Subscribe to receiving engineering updates, new CAD releases, and infrastructure specifications.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <div className="flex gap-2">
                <input 
                  type="email"
                  placeholder="Enter engineering email..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                  className="w-full py-2 px-3 text-xs font-mono bg-blue-900/60 border border-blue-400 text-white placeholder:text-blue-300 rounded focus:outline-none focus:border-white"
                />
                <button 
                  type="submit"
                  className="bg-[#C00000] hover:bg-[#A00000] text-white text-xs py-2 px-4 whitespace-nowrap font-heading font-bold uppercase transition-colors"
                >
                  SUBSCRIBE
                </button>
              </div>
              {subscribed && (
                <div className="text-[11px] font-mono text-blue-200">
                  ✓ Successfully subscribed to Trench Unlimited engineering updates.
                </div>
              )}
            </form>

            <div className="pt-2">
              <button 
                onClick={onOpenQuoteModal}
                className="w-full btn-secondary text-xs py-2.5 justify-center font-heading font-bold"
              >
                REQUEST CUSTOM PE SUBMITTAL
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-blue-200">
          <div>
            © {new Date().getFullYear()} Trench Unlimited™ Inc. Layout Specification System. Manufactured in North America.
          </div>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Specification</span>
            <span className="hover:text-white cursor-pointer">OSHA Subpart P Disclaimer</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
