import React, { useState, useEffect } from 'react';
import { 
  Search, FileText, ChevronDown, Menu, X, ArrowRight, ShieldCheck, 
  BookOpen, Layers, Cpu, Box, MapPin, Download, HardHat, PhoneCall,
  CheckCircle2, Globe, ArrowUpRight, Home, ChevronRight, Building2, Wrench, Shield, FileSpreadsheet
} from 'lucide-react';

interface NavbarProps {
  activePage: 'home' | 'products' | 'story';
  onSelectPage: (page: 'home' | 'products' | 'story') => void;
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
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
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

  const handleCategorySelect = (catId: string) => {
    onSelectPage('products');
    setActiveMegaMenu(null);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'shadow-xl bg-white/95 backdrop-blur-md' : 'bg-white'
    }`}>
      {/* Top Corporate Strip */}
      <div className="bg-[#004AAD] text-white py-2 text-xs font-mono">
        <div className="container-industrial flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00BBFF]" />
              OSHA 1926 SUBPART P CERTIFIED MANUFACTURER
            </span>
            <span className="hidden md:inline text-[#0085F4]">|</span>
            <span className="hidden md:flex items-center gap-1.5 text-blue-100">
              <Globe className="w-3.5 h-3.5 text-[#00BBFF]" />
              AMERICAN HEAVY CIVIL & UNDERGROUND INFRASTRUCTURE
            </span>
          </div>

          <div className="flex items-center gap-6 font-semibold">
            <button 
              onClick={onOpenSubmittalDrawer} 
              className="hover:text-[#00BBFF] flex items-center gap-1.5 transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              SUBMITTAL DRAWER
            </button>
            <span className="text-[#0085F4]">|</span>
            <a href="tel:18008736248" className="hover:text-[#00BBFF] flex items-center gap-1.5 transition-colors">
              <PhoneCall className="w-3.5 h-3.5" />
              1-800-TRENCH-U
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="border-b border-[#E2E8F0] bg-white">
        <div className="container-industrial py-3.5 flex justify-between items-center">
          
          {/* Logo & Brand Identity */}
          <div 
            onClick={() => { onSelectPage('home'); handleNavClick('hero'); }} 
            className="cursor-pointer flex items-center gap-3 group"
          >
            <div className="h-11 flex items-center">
              <img 
                src="/logo.png" 
                alt="Trench Unlimited Brand Logo" 
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
                className="h-10 w-auto max-w-[260px] object-contain transition-transform duration-200 group-hover:scale-[1.01]"
              />
            </div>
            <div className="hidden xl:block pl-3 border-l-2 border-[#0085F4]">
              <div className="text-[11px] font-mono text-[#004AAD] font-extrabold tracking-widest uppercase leading-tight">
                TRENCH UNLIMITED™
              </div>
              <div className="text-[12px] font-bold text-[#0085F4] leading-tight">
                Underground Safety & Shoring
              </div>
            </div>
          </div>

          {/* Desktop Mega Menu Nav */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-bold text-[#004AAD]">
            <button 
              onClick={() => { onSelectPage('home'); handleNavClick('hero'); }} 
              className={`px-3 py-2 hover:text-[#0085F4] transition-colors ${activePage === 'home' ? 'text-[#0085F4]' : ''}`}
            >
              HOME
            </button>

            {/* PRODUCTS Mega Menu */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveMegaMenu('products')}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <button 
                onClick={() => handleCategorySelect('all')}
                className={`px-3 py-2 flex items-center gap-1 hover:text-[#0085F4] transition-colors ${activePage === 'products' ? 'text-[#0085F4]' : ''}`}
              >
                PRODUCTS
                <ChevronDown className="w-4 h-4 text-[#0085F4]" />
              </button>

              {activeMegaMenu === 'products' && (
                <div className="absolute top-full left-0 w-[640px] bg-white border-2 border-[#004AAD] shadow-2xl p-6 grid grid-cols-2 gap-4 z-50">
                  <div className="col-span-2 pb-2 border-b border-[#E2E8F0] flex justify-between items-center">
                    <span className="text-xs font-mono font-bold text-[#0085F4] uppercase">Trench Equipment & Shoring Systems</span>
                    <button onClick={() => handleCategorySelect('all')} className="text-xs text-[#004AAD] hover:underline font-bold flex items-center gap-1">
                      VIEW FULL CATALOGUE <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  {[
                    { title: 'Trench Safety', desc: 'OSHA Subpart P shields & protection', id: 'safety-protection' },
                    { title: 'Steel Trench Shields', desc: 'Double-walled A572 steel trench boxes', id: 'safety-protection' },
                    { title: 'Hydraulic Shores', desc: 'Hand-pumped aluminum shoring rails', id: 'hydraulic-shoring' },
                    { title: 'Slide Rail Systems', desc: 'Modular dig-and-push trench panels', id: 'slide-rail' },
                    { title: 'Road Plates', desc: 'AASHTO H-20 heavy traffic crossing plates', id: 'trench-road-plates' },
                    { title: 'Manhole Boxes', desc: '4-sided modular utility vault boxes', id: 'safety-protection' },
                    { title: 'Utility Boxes', desc: 'Lightweight municipal trench shields', id: 'hydraulic-shoring' },
                    { title: 'Access Systems', desc: 'Extendable ladders & walk-thru safety gates', id: 'trench-access-safety' },
                    { title: 'Ground Mats', desc: 'Heavy vehicle site protection mats', id: 'trench-road-plates' },
                    { title: 'Accessories', desc: 'Spreaders, pins, lifting chains & pumps', id: 'hydraulic-shoring' },
                  ].map((item, idx) => (
                    <div 
                      key={idx}
                      onClick={() => handleCategorySelect(item.id)}
                      className="p-3 bg-[#F8F8F8] hover:bg-[#F0F7FF] border border-[#E2E8F0] hover:border-[#0085F4] cursor-pointer transition-all group"
                    >
                      <div className="font-bold text-[#004AAD] group-hover:text-[#0085F4] flex items-center justify-between text-sm">
                        {item.title}
                        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#0085F4]" />
                      </div>
                      <div className="text-xs text-[#475569] mt-0.5">{item.desc}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* INDUSTRIES Mega Menu */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveMegaMenu('industries')}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <button 
                onClick={() => handleNavClick('industries')}
                className="px-3 py-2 flex items-center gap-1 hover:text-[#0085F4] transition-colors"
              >
                INDUSTRIES
                <ChevronDown className="w-4 h-4 text-[#0085F4]" />
              </button>

              {activeMegaMenu === 'industries' && (
                <div className="absolute top-full left-0 w-[500px] bg-white border-2 border-[#004AAD] shadow-2xl p-6 grid grid-cols-2 gap-3 z-50">
                  <div className="col-span-2 pb-2 border-b border-[#E2E8F0] font-mono text-xs font-bold text-[#0085F4] uppercase">
                    Civil Infrastructure Sectors
                  </div>
                  {[
                    'Municipal Water & Sewer',
                    'Waterworks Infrastructure',
                    'Stormwater & Drainage',
                    'Wastewater Treatment',
                    'Underground Utilities',
                    'Highway & Roadway Civil',
                    'Heavy Civil Infrastructure',
                    'Commercial Site Development',
                    'Industrial Manufacturing',
                    'Energy & Pipeline Projects'
                  ].map((ind, idx) => (
                    <div 
                      key={idx}
                      onClick={() => handleNavClick('industries')}
                      className="p-2.5 bg-[#F8F8F8] hover:bg-[#F0F7FF] border border-[#E2E8F0] hover:border-[#0085F4] text-xs font-bold text-[#004AAD] hover:text-[#0085F4] cursor-pointer transition-colors"
                    >
                      {ind}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* SOLUTIONS */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveMegaMenu('solutions')}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <button 
                onClick={() => handleNavClick('solutions')}
                className="px-3 py-2 flex items-center gap-1 hover:text-[#0085F4] transition-colors"
              >
                SOLUTIONS
                <ChevronDown className="w-4 h-4 text-[#0085F4]" />
              </button>

              {activeMegaMenu === 'solutions' && (
                <div className="absolute top-full left-0 w-[450px] bg-white border-2 border-[#004AAD] shadow-2xl p-5 grid grid-cols-1 gap-2.5 z-50">
                  <div className="pb-2 border-b border-[#E2E8F0] font-mono text-xs font-bold text-[#0085F4] uppercase">
                    Jobsite Engineering Solutions
                  </div>
                  {[
                    { title: 'Excavation Safety', desc: 'OSHA 1926 Subpart P certified shoring boxes & rails' },
                    { title: 'Pipe Installation', desc: 'High-clearance spreader pipe clearance systems' },
                    { title: 'Road Crossing', desc: 'AASHTO H-20 heavy traffic steel road plates' },
                    { title: 'Drainage & Culverts', desc: 'Modular slide rail panels for wide culvert trenches' },
                    { title: 'Utility Vault Shoring', desc: '4-sided manhole & transformer vault protection' },
                    { title: 'Confined Space Entry', desc: 'OSHA compliant ladders, platforms & retrieval systems' }
                  ].map((sol, idx) => (
                    <div 
                      key={idx}
                      onClick={() => handleNavClick('solutions')}
                      className="p-2.5 bg-[#F8F8F8] hover:bg-[#F0F7FF] border border-[#E2E8F0] hover:border-[#0085F4] cursor-pointer transition-colors"
                    >
                      <div className="font-bold text-[#004AAD] text-xs">{sol.title}</div>
                      <div className="text-[11px] text-[#475569]">{sol.desc}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* ENGINEERING */}
            <button 
              onClick={() => handleNavClick('technical')}
              className="px-3 py-2 hover:text-[#0085F4] transition-colors"
            >
              ENGINEERING
            </button>

            {/* RESOURCES */}
            <button 
              onClick={onOpenSubmittalDrawer}
              className="px-3 py-2 hover:text-[#0085F4] transition-colors"
            >
              RESOURCES
            </button>

            {/* COMPANY */}
            <button 
              onClick={() => { onSelectPage('story'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className={`px-3 py-2 hover:text-[#0085F4] transition-colors ${activePage === 'story' ? 'text-[#0085F4]' : ''}`}
            >
              COMPANY
            </button>

            {/* CONTACT */}
            <button 
              onClick={() => handleNavClick('footer')}
              className="px-3 py-2 hover:text-[#0085F4] transition-colors"
            >
              CONTACT
            </button>
          </nav>

          {/* Primary CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button 
              onClick={onOpenQuoteModal} 
              className="btn-brand-primary py-2.5 px-5 text-xs tracking-wider font-extrabold"
            >
              REQUEST QUOTE
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#004AAD] border border-[#004AAD]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b-2 border-[#004AAD] px-4 py-6 space-y-4">
          <div className="font-mono text-xs text-[#0085F4] font-bold uppercase pb-2 border-b border-[#E2E8F0]">
            Trench Unlimited Navigation
          </div>
          <div className="flex flex-col gap-2 font-bold text-[#004AAD]">
            <button onClick={() => { onSelectPage('home'); handleNavClick('hero'); }} className="text-left py-2 hover:text-[#0085F4]">
              HOME
            </button>
            <button onClick={() => handleCategorySelect('all')} className="text-left py-2 hover:text-[#0085F4] flex justify-between items-center">
              PRODUCTS CATALOGUE <ChevronRight className="w-4 h-4" />
            </button>
            <button onClick={() => handleNavClick('industries')} className="text-left py-2 hover:text-[#0085F4]">
              INDUSTRIES
            </button>
            <button onClick={() => handleNavClick('solutions')} className="text-left py-2 hover:text-[#0085F4]">
              SOLUTIONS
            </button>
            <button onClick={() => handleNavClick('technical')} className="text-left py-2 hover:text-[#0085F4]">
              ENGINEERING & STANDARDS
            </button>
            <button onClick={() => { onSelectPage('story'); setMobileMenuOpen(false); }} className="text-left py-2 hover:text-[#0085F4]">
              COMPANY STORY
            </button>
          </div>
          <div className="pt-4 border-t border-[#E2E8F0] space-y-2">
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenQuoteModal(); }} 
              className="w-full btn-brand-primary py-3 text-xs"
            >
              REQUEST COMMERCIAL QUOTE
            </button>
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenSubmittalDrawer(); }} 
              className="w-full btn-brand-secondary py-3 text-xs"
            >
              OPEN SUBMITTAL DRAWER
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
