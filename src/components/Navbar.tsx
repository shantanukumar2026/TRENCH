import React, { useState, useEffect } from 'react';
import { 
  Search, FileText, ChevronDown, Menu, X, ArrowRight, ShieldCheck, 
  BookOpen, Layers, Cpu, Box, MapPin, Download, HardHat, PhoneCall,
  CheckCircle2, Globe, ArrowUpRight, Home, ChevronRight
} from 'lucide-react';

interface NavbarProps {
  activePage: 'home' | 'story';
  onSelectPage: (page: 'home' | 'story') => void;
  onOpenQuoteModal: () => void;
  onOpenSubmittalDrawer: () => void;
  onNavigateToSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  onSelectPage,
  onOpenQuoteModal,
  onOpenSubmittalDrawer,
  onNavigateToSection
}) => {
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    onSelectPage('home');
    setActiveMegaMenu(null);
    setMobileMenuOpen(false);
    setTimeout(() => {
      onNavigateToSection(sectionId);
    }, 50);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'shadow-2xl' : ''
    }`}>
      
      {/* ────── TIER 1: 100% FULL-WIDTH CORPORATE BRAND & HOTLINE HEADER ────── */}
      <div className={`bg-white border-b border-blue-200 transition-all duration-300 ${
        scrolled ? 'h-0 overflow-hidden opacity-0 py-0' : 'py-3.5'
      }`}>
        <div className="w-full px-4 sm:px-8 lg:px-12 flex justify-between items-center">
          
          {/* Corporate Brand Logo */}
          <div 
            onClick={() => { onSelectPage('home'); handleNavClick('hero'); }} 
            className="cursor-pointer flex items-center gap-4 group"
          >
            <div className="h-12 flex items-center">
              <img 
                src="/logo.png" 
                alt="Trench Unlimited Corporate Logo" 
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
                className="h-11 w-auto max-w-[300px] object-contain transition-transform duration-300 group-hover:scale-[1.01]"
              />
            </div>
            <div className="hidden xl:block pl-4 border-l-2 border-[#0754AE]">
              <div className="text-[12px] font-mono text-[#0754AE] font-black tracking-widest uppercase leading-tight">
                AMERICAN UNDERGROUND INFRASTRUCTURE
              </div>
              <div className="text-[13px] italic font-extrabold text-[#C00000] leading-tight tracking-wider">
                Everything Trench.....
              </div>
            </div>
          </div>

          {/* Corporate Top Right Action Hub */}
          <div className="hidden lg:flex items-center gap-6 font-mono text-xs">
            <div className="flex items-center gap-2 text-[#0754AE] font-black">
              <ShieldCheck className="w-4 h-4 text-[#C00000]" />
              <span>OSHA SUBPART P COMPLIANT</span>
            </div>

            <div className="text-slate-300">|</div>

            <div className="text-[#0754AE] font-bold">
              HOTLINE: <strong className="text-[#C00000] text-sm font-black">1-800-TRENCH-U</strong>
            </div>

            <div className="text-slate-300">|</div>

            <button 
              onClick={onOpenSubmittalDrawer} 
              className="text-[#0754AE] hover:text-[#2166D1] flex items-center gap-1.5 font-bold transition-colors"
            >
              <FileText className="w-4 h-4 text-[#C00000]" />
              SUBMITTAL BUILDER
            </button>

            {/* Corporate Quote CTA Button */}
            <button 
              onClick={onOpenQuoteModal} 
              className="bg-[#C00000] hover:bg-[#A00000] text-white text-xs py-3 px-6 flex items-center gap-2 font-heading tracking-widest shadow-md rounded-none uppercase font-extrabold transition-colors"
            >
              REQUEST A QUOTE
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#0754AE] border border-blue-200 bg-[#F0F7FF]"
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* ────── TIER 2: 100% FULL-WIDTH INDUSTRIAL NAVIGATION BAR ────── */}
      <div 
        className="bg-[#0754AE] text-white border-b-2 border-[#2166D1] relative shadow-md"
        onMouseLeave={() => setActiveMegaMenu(null)}
      >
        <div className="w-full px-4 sm:px-8 lg:px-12 flex justify-between items-center h-16">
          
          {/* Main Desktop Links: 100% Full-Width Spacing, 15px font-black */}
          <nav className="hidden lg:flex items-center gap-8 h-full font-heading text-[15px] font-black tracking-widest uppercase">
            
            {/* HOME */}
            <button 
              onClick={() => onSelectPage('home')}
              className="h-full px-1 relative transition-colors flex items-center text-white hover:text-blue-100 group"
            >
              <span>HOME</span>
              <span className={`absolute bottom-0 left-0 right-0 h-[4px] bg-[#C00000] transition-all duration-200 ${
                activePage === 'home' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              }`}></span>
            </button>

            {/* PRODUCTS MEGA */}
            <div 
              className="h-full flex items-center"
              onMouseEnter={() => setActiveMegaMenu('products')}
            >
              <button 
                onClick={() => handleNavClick('catalogue')}
                className="h-full px-1 relative transition-colors flex items-center gap-1.5 text-white hover:text-blue-100 group"
              >
                <span>PRODUCTS</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeMegaMenu === 'products' ? 'rotate-180 text-white' : 'text-blue-200'}`} />
                <span className={`absolute bottom-0 left-0 right-0 h-[4px] bg-[#C00000] transition-all duration-200 ${
                  activeMegaMenu === 'products' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}></span>
              </button>
            </div>

            {/* SOLUTIONS MEGA */}
            <div 
              className="h-full flex items-center"
              onMouseEnter={() => setActiveMegaMenu('solutions')}
            >
              <button 
                onClick={() => handleNavClick('solutions')}
                className="h-full px-1 relative transition-colors flex items-center gap-1.5 text-white hover:text-blue-100 group"
              >
                <span>SOLUTIONS</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeMegaMenu === 'solutions' ? 'rotate-180 text-white' : 'text-blue-200'}`} />
                <span className={`absolute bottom-0 left-0 right-0 h-[4px] bg-[#C00000] transition-all duration-200 ${
                  activeMegaMenu === 'solutions' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}></span>
              </button>
            </div>

            {/* ENGINEERING MEGA */}
            <div 
              className="h-full flex items-center"
              onMouseEnter={() => setActiveMegaMenu('engineering')}
            >
              <button 
                onClick={() => handleNavClick('engineering')}
                className="h-full px-1 relative transition-colors flex items-center gap-1.5 text-white hover:text-blue-100 group"
              >
                <span>ENGINEERING</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeMegaMenu === 'engineering' ? 'rotate-180 text-white' : 'text-blue-200'}`} />
                <span className={`absolute bottom-0 left-0 right-0 h-[4px] bg-[#C00000] transition-all duration-200 ${
                  activeMegaMenu === 'engineering' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}></span>
              </button>
            </div>

            {/* WHAT IS TRENCH? STORY */}
            <button 
              onClick={() => onSelectPage('story')}
              className="h-full px-1 relative transition-colors flex items-center gap-2 text-white hover:text-blue-100 group"
            >
              <BookOpen className="w-4 h-4 text-blue-200" />
              <span>WHAT IS TRENCH?</span>
              <span className={`absolute bottom-0 left-0 right-0 h-[4px] bg-[#C00000] transition-all duration-200 ${
                activePage === 'story' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              }`}></span>
            </button>

            {/* STANDARDS */}
            <button 
              onClick={() => handleNavClick('standards')}
              className="h-full px-1 relative transition-colors flex items-center text-white hover:text-blue-100 group"
            >
              <span>STANDARDS</span>
              <span className="absolute bottom-0 left-0 right-0 h-[4px] bg-[#C00000] opacity-0 group-hover:opacity-100 transition-all duration-200"></span>
            </button>

            {/* COMPANY */}
            <button 
              onClick={() => handleNavClick('company')}
              className="h-full px-1 relative transition-colors flex items-center text-white hover:text-blue-100 group"
            >
              <span>COMPANY</span>
              <span className="absolute bottom-0 left-0 right-0 h-[4px] bg-[#C00000] opacity-0 group-hover:opacity-100 transition-all duration-200"></span>
            </button>

          </nav>

          {/* Right Corporate Search Field */}
          <div className="hidden md:flex items-center relative py-2">
            <input 
              type="text"
              placeholder="Search part #, specs & catalog..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleNavClick('catalogue');
              }}
              className="w-64 lg:w-72 py-2 pl-9 pr-8 text-xs font-mono bg-blue-900/80 text-white placeholder:text-blue-200 border border-blue-400 focus:outline-none focus:border-white focus:bg-blue-900 rounded-none transition-all"
            />
            <Search className="w-4 h-4 text-blue-300 absolute left-2.5 pointer-events-none" />
          </div>

        </div>

        {/* FULL-WIDTH CORPORATE MEGAMENU DROPDOWN */}
        {activeMegaMenu && (
          <div className="absolute top-full left-0 right-0 bg-white border-b-4 border-[#0754AE] shadow-2xl p-8 text-slate-800 animate-in fade-in slide-in-from-top-2 duration-200 z-50 bg-blueprint-dense">
            <div className="w-full px-4 sm:px-8 lg:px-12">
              
              {/* PRODUCTS MEGAMENU */}
              {activeMegaMenu === 'products' && (
                <div className="grid grid-cols-12 gap-8 items-start">
                  
                  {/* Left Technical Card */}
                  <div className="col-span-4 bg-[#F0F7FF] border-2 border-blue-200 p-6 rounded-lg space-y-4">
                    <span className="px-2 py-0.5 bg-[#C00000] text-white font-mono text-[10px] font-bold uppercase rounded-none">
                      FLAGSHIP SYSTEM
                    </span>
                    <h4 className="text-xl font-extrabold text-[#0754AE] font-heading uppercase">
                      TU-8000 STEEL TRENCH SHIELD
                    </h4>
                    <p className="text-xs text-slate-600 font-sans leading-relaxed">
                      Double-walled A572 steel trench box engineered for extreme soil lateral earth pressure.
                    </p>
                    <button 
                      onClick={() => handleNavClick('stage')}
                      className="btn-primary text-xs py-2 px-4 w-full justify-center font-mono rounded-none"
                    >
                      INSPECT 3D EXPLODED STAGE
                    </button>
                  </div>

                  {/* Center Column 1 */}
                  <div className="col-span-4 space-y-3 font-mono">
                    <div className="text-xs font-bold text-[#0754AE] uppercase pb-2 border-b-2 border-blue-200 flex items-center gap-2">
                      <Box className="w-4 h-4 text-[#C00000]" />
                      CORE SHORING &amp; DRAINAGE
                    </div>
                    <ul className="space-y-2 text-xs font-semibold text-slate-700">
                      <li>
                        <button onClick={() => handleNavClick('catalogue')} className="hover:text-[#2166D1] text-left flex items-center justify-between w-full py-1.5 border-b border-slate-100">
                          <span>TU-8000 Heavy Steel Shields</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-[#2166D1]" />
                        </button>
                      </li>
                      <li>
                        <button onClick={() => handleNavClick('catalogue')} className="hover:text-[#2166D1] text-left flex items-center justify-between w-full py-1.5 border-b border-slate-100">
                          <span>TU-HydroLite Aluminum Shores</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-[#2166D1]" />
                        </button>
                      </li>
                      <li>
                        <button onClick={() => handleNavClick('catalogue')} className="hover:text-[#2166D1] text-left flex items-center justify-between w-full py-1.5 border-b border-slate-100">
                          <span>TU-HydroDrain 200 Channels</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-[#2166D1]" />
                        </button>
                      </li>
                    </ul>
                  </div>

                  {/* Center Column 2 */}
                  <div className="col-span-4 space-y-3 font-mono">
                    <div className="text-xs font-bold text-[#0754AE] uppercase pb-2 border-b-2 border-blue-200 flex items-center gap-2">
                      <Layers className="w-4 h-4 text-[#2166D1]" />
                      VAULTS &amp; UTILITY PIPING
                    </div>
                    <ul className="space-y-2 text-xs font-semibold text-slate-700">
                      <li>
                        <button onClick={() => handleNavClick('catalogue')} className="hover:text-[#2166D1] text-left flex items-center justify-between w-full py-1.5 border-b border-slate-100">
                          <span>Modular Precast Access Vaults</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-[#2166D1]" />
                        </button>
                      </li>
                      <li>
                        <button onClick={() => handleNavClick('catalogue')} className="hover:text-[#2166D1] text-left flex items-center justify-between w-full py-1.5 border-b border-slate-100">
                          <span>ANSI/AWWA C900 PVC Pressure Pipe</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-[#2166D1]" />
                        </button>
                      </li>
                      <li>
                        <button onClick={() => handleNavClick('catalogue')} className="hover:text-[#2166D1] text-left flex items-center justify-between w-full py-1.5 border-b border-slate-100">
                          <span>High-Density HDPE Storm Culverts</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-[#2166D1]" />
                        </button>
                      </li>
                    </ul>
                  </div>

                </div>
              )}

              {/* SOLUTIONS MEGAMENU */}
              {activeMegaMenu === 'solutions' && (
                <div className="grid grid-cols-3 gap-8 font-mono">
                  <div className="p-5 bg-[#F0F7FF] rounded-lg border border-blue-200 space-y-2 cursor-pointer hover:border-[#2166D1]" onClick={() => handleNavClick('solutions')}>
                    <div className="text-xs font-bold text-[#C00000] uppercase">MUNICIPAL WATER</div>
                    <div className="text-sm font-bold text-[#0754AE]">AWWA C900 Water Main Modernization</div>
                    <p className="text-xs text-slate-600 font-sans">High-pressure distribution mains, valve vaults, and OSHA shielding.</p>
                  </div>

                  <div className="p-5 bg-[#F0F7FF] rounded-lg border border-blue-200 space-y-2 cursor-pointer hover:border-[#2166D1]" onClick={() => handleNavClick('solutions')}>
                    <div className="text-xs font-bold text-[#C00000] uppercase">POWER &amp; TELECOM</div>
                    <div className="text-sm font-bold text-[#0754AE]">Structured Electrical Duct Banks</div>
                    <p className="text-xs text-slate-600 font-sans">High-voltage conduit spacers, precast pull boxes, and access covers.</p>
                  </div>

                  <div className="p-5 bg-[#F0F7FF] rounded-lg border border-blue-200 space-y-2 cursor-pointer hover:border-[#2166D1]" onClick={() => handleNavClick('solutions')}>
                    <div className="text-xs font-bold text-[#C00000] uppercase">HIGHWAY &amp; STORMWATER</div>
                    <div className="text-sm font-bold text-[#0754AE]">AASHTO H-20 Heavy Traffic Systems</div>
                    <p className="text-xs text-slate-600 font-sans">Heavy ductile iron castings, polymer channels, and HDPE culverts.</p>
                  </div>
                </div>
              )}

              {/* ENGINEERING MEGAMENU */}
              {activeMegaMenu === 'engineering' && (
                <div className="grid grid-cols-12 gap-8 items-center font-mono">
                  <div className="col-span-8 space-y-3">
                    <div className="text-xs font-bold text-[#0754AE] uppercase pb-2 border-b-2 border-blue-200">
                      PE STAMPED SERVICES &amp; SUBMITTALS
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div className="p-3 bg-[#F0F7FF] rounded border border-blue-200">
                        <div className="font-bold text-[#0754AE]">PE Structural Calculation Packets</div>
                        <div className="text-[11px] text-slate-500">PE-stamped engineering for municipal plan approval.</div>
                      </div>
                      <div className="p-3 bg-[#F0F7FF] rounded border border-blue-200">
                        <div className="font-bold text-[#0754AE]">AutoCAD (.DWG) &amp; Revit (.RVT) Library</div>
                        <div className="text-[11px] text-slate-500">Instant download CAD geometry models.</div>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-4 bg-[#0754AE] text-white p-6 rounded-lg space-y-3">
                    <div className="text-xs font-bold uppercase text-[#FFD700]">ENGINEERING HOTLINE</div>
                    <div className="text-lg font-bold">Need Custom PE Shoring Support?</div>
                    <button 
                      onClick={onOpenQuoteModal}
                      className="bg-[#C00000] hover:bg-[#A00000] text-white w-full text-xs py-2 px-3 justify-center rounded-none font-mono font-bold transition-colors"
                    >
                      REQUEST PE CONSULTATION
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>
        )}

      </div>

      {/* ────── TIER 3: BREADCRUMBS STRIP (Hidden on Homepage, Shown on Inner Pages) ────── */}
      {activePage !== 'home' && (
        <div className="bg-[#F0F7FF] border-b border-blue-200 py-2.5 px-4 sm:px-8 lg:px-12 font-mono text-[11px] text-[#0754AE] shadow-inner">
          <div className="w-full flex justify-between items-center">
            
            {/* Breadcrumb Path Links */}
            <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap">
              <button 
                onClick={() => onSelectPage('home')}
                className="flex items-center gap-1 font-bold text-[#0754AE] hover:text-[#2166D1] transition-colors"
              >
                <Home className="w-3.5 h-3.5 text-[#2166D1]" />
                <span>HOME</span>
              </button>

              <ChevronRight className="w-3 h-3 text-slate-400" />

              <span className="text-slate-500 uppercase font-semibold">
                UNDERGROUND INFRASTRUCTURE
              </span>

              <ChevronRight className="w-3 h-3 text-slate-400" />

              <span className="font-extrabold text-[#C00000] uppercase tracking-wider">
                DOCUMENTARY STORY — WHAT IS TRENCH?
              </span>
            </div>

            {/* Right Breadcrumb System Code Badge */}
            <div className="hidden sm:flex items-center gap-3 text-[10px] text-slate-500 font-bold">
              <span>SYS ID: <strong className="text-[#0754AE]">TU-INFRA-2026</strong></span>
              <span>|</span>
              <span>STATUS: <strong className="text-[#2166D1]">PE VERIFIED</strong></span>
            </div>

          </div>
        </div>
      )}

    </header>
  );
};
