import React, { useState, useEffect } from 'react';
import {
  Search, FileText, ChevronDown, Menu, X, ArrowRight, ShieldCheck,
  BookOpen, Layers, Cpu, Box, MapPin, Download, HardHat, PhoneCall,
  CheckCircle2, Globe, ArrowUpRight, Home, ChevronRight, Building2, Wrench, Shield, FileSpreadsheet
} from 'lucide-react';

interface NavbarProps {
  activePage: 'home' | 'home-two' | 'products' | 'product' | 'solutions' | 'industries' | 'standards' | 'custom-studio' | 'rental-fleet' | 'story' | 'maintenance' | '404';
  onSelectPage: (page: 'home' | 'home-two' | 'products' | 'product' | 'solutions' | 'industries' | 'standards' | 'custom-studio' | 'rental-fleet' | 'story' | 'maintenance' | '404') => void;
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
    window.location.hash = '#/';
    onSelectPage('home');
    setActiveMegaMenu(null);
    setMobileMenuOpen(false);
    setTimeout(() => {
      onNavigateToSection(sectionId);
    }, 50);
  };

  const handleCategorySelect = (catId: string) => {
    window.location.hash = '#/products';
    onSelectPage('products');
    setActiveMegaMenu(null);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-xl bg-white/95 backdrop-blur-md' : 'bg-white'
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
        <div className="container-industrial py-2 md:py-2.5 flex justify-between items-center">

          {/* Logo & Brand Identity */}
          <div
            onClick={() => { onSelectPage('home'); handleNavClick('hero'); }}
            className="cursor-pointer flex items-center group mr-auto"
          >
            <div className="h-11 sm:h-12 md:h-13.5 flex items-center">
              <img
                src="/c1b3988b-7b1c-49dd-a5cb-48c9ee3d3a02.png"
                alt="Trench Unlimited Brand Logo"
                className="h-11 sm:h-12 md:h-13.5 w-auto max-w-[340px] sm:max-w-[420px] md:max-w-[490px] object-contain transition-transform duration-200 group-hover:scale-[1.02] logo-img"
              />
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
                <div className="absolute top-full left-0 w-[720px] bg-white border-2 border-[#004AAD] shadow-2xl p-6 z-50 space-y-4">
                  {/* Top 3 Core Categories Header Bar */}
                  <div className="pb-3 border-b border-[#E2E8F0] flex justify-between items-center">
                    <span className="text-xs font-mono font-bold text-[#0085F4] uppercase tracking-wider">Our Categories</span>
                    <button onClick={() => handleCategorySelect('all')} className="text-xs text-[#004AAD] hover:underline font-bold flex items-center gap-1">
                      VIEW FULL CATALOGUE <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* 3 Main Featured Categories Cards */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { id: 'designer-trench-gratings', title: 'TRENCH GRATINGS', desc: 'ADA Heel-Proof Wave & Heavy Channel Covers' },
                      { id: 'tree-grates-guards', title: 'TREE GRATES & GUARDS', desc: 'Square, Round & Vertical Iron Trunk Protection' },
                      { id: 'heavy-civil-drainage', title: 'CATCH BASIN & DRAINAGE', desc: 'Curb Inlets & AASHTO H-20 / F900 Runways' }
                    ].map((cat) => (
                      <div
                        key={cat.id}
                        onClick={() => handleCategorySelect(cat.id)}
                        className="p-3 bg-[#004AAD] text-white hover:bg-[#0085F4] cursor-pointer transition-all rounded shadow-sm group"
                      >
                        <div className="font-extrabold font-mono text-xs uppercase flex items-center justify-between">
                          <span>{cat.title}</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#00BBFF]" />
                        </div>
                        <div className="text-[11px] text-blue-100 mt-1 leading-snug font-normal">{cat.desc}</div>
                      </div>
                    ))}
                  </div>

                  {/* Product Families & Types Grid */}
                  {/* <div className="pt-2 border-t border-[#E2E8F0] font-mono text-[11px] font-bold text-[#0085F4] uppercase">
                    Popular Equipment Lines
                  </div>
                  <div className="grid grid-cols-2 gap-2.5">
                    {[
                      { title: 'Tree Grates (Square)', desc: '4x4ft & 5x5ft expandable cast iron tree grates', id: 'tree-grates-guards' },
                      { title: 'Tree Grates (Round)', desc: 'Radial sunburst circular cast iron tree grates', id: 'tree-grates-guards' },
                      { title: 'Iron Tree Guards', desc: 'Heavy vertical ductile iron trunk guards', id: 'tree-grates-guards' },
                      { title: 'ADA Wave Gratings', desc: '1/4" slot heel-proof decorative trench covers', id: 'designer-trench-gratings' },
                      { title: 'AASHTO H-20 Grates', desc: 'Heavy vehicular ductile iron trench covers & frames', id: 'heavy-civil-drainage' },
                      { title: 'Airport F900 Channels', desc: '900 kN proof load airport runway iron channels', id: 'heavy-civil-drainage' },
                      { title: 'Ductile Iron Covers', desc: 'ASTM A536 80-55-06 nodular iron castings', id: 'designer-trench-gratings' },
                      { title: 'Catch Basin Inlets', desc: 'Municipal curb inlets & manhole iron frames', id: 'heavy-civil-drainage' },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        onClick={() => handleCategorySelect(item.id)}
                        className="p-2.5 bg-[#F8F8F8] hover:bg-[#F0F7FF] border border-[#E2E8F0] hover:border-[#0085F4] cursor-pointer transition-all group"
                      >
                        <div className="font-bold text-[#004AAD] group-hover:text-[#0085F4] flex items-center justify-between text-xs">
                          {item.title}
                          <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#0085F4]" />
                        </div>
                        <div className="text-[11px] text-[#475569] mt-0.5 font-normal">{item.desc}</div>
                      </div>
                    ))}
                  </div> */}
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
                onClick={() => { window.location.hash = '#/industries'; setActiveMegaMenu(null); }}
                className={`px-3 py-2 flex items-center gap-1 hover:text-[#0085F4] transition-colors ${activePage === 'industries' ? 'text-[#0085F4]' : ''}`}
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
                      onClick={() => { window.location.hash = '#/industries'; setActiveMegaMenu(null); }}
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
                onClick={() => { window.location.hash = '#/solutions'; setActiveMegaMenu(null); }}
                className={`px-3 py-2 flex items-center gap-1 hover:text-[#0085F4] transition-colors ${activePage === 'solutions' ? 'text-[#0085F4]' : ''}`}
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
                      onClick={() => { window.location.hash = '#/solutions'; setActiveMegaMenu(null); }}
                      className="p-2.5 bg-[#F8F8F8] hover:bg-[#F0F7FF] border border-[#E2E8F0] hover:border-[#0085F4] cursor-pointer transition-colors"
                    >
                      <div className="font-bold text-[#004AAD] text-xs">{sol.title}</div>
                      <div className="text-[11px] text-[#475569]">{sol.desc}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* STANDARDS / ENGINEERING */}
            <button
              onClick={() => { window.location.hash = '#/standards'; }}
              className={`px-3 py-2 hover:text-[#0085F4] transition-colors ${activePage === 'standards' ? 'text-[#0085F4]' : ''}`}
            >
              STANDARDS
            </button>

            {/* CUSTOM STUDIO */}
            {/* <button
              onClick={() => { window.location.hash = '#/custom-studio'; }}
              className={`px-3 py-2 hover:text-[#0085F4] transition-colors ${activePage === 'custom-studio' ? 'text-[#0085F4]' : ''}`}
            >
              CUSTOM STUDIO
            </button> */}

            {/* RENTAL FLEET */}
            {/* <button
              onClick={() => { window.location.hash = '#/rental-fleet'; }}
              className={`px-3 py-2 hover:text-[#0085F4] transition-colors ${activePage === 'rental-fleet' ? 'text-[#0085F4]' : ''}`}
            >
              RENTAL FLEET
            </button> */}

            {/* COMPANY */}
            <button
              onClick={() => { window.location.hash = '#/story'; }}
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
            <button onClick={() => { window.location.hash = '#/'; setMobileMenuOpen(false); }} className="text-left py-2 hover:text-[#0085F4]">
              HOME
            </button>
            <button onClick={() => { window.location.hash = '#/products'; setMobileMenuOpen(false); }} className="text-left py-2 hover:text-[#0085F4] flex justify-between items-center">
              PRODUCTS CATALOGUE <ChevronRight className="w-4 h-4" />
            </button>
            <button onClick={() => { window.location.hash = '#/industries'; setMobileMenuOpen(false); }} className="text-left py-2 hover:text-[#0085F4]">
              INDUSTRIES
            </button>
            <button onClick={() => { window.location.hash = '#/solutions'; setMobileMenuOpen(false); }} className="text-left py-2 hover:text-[#0085F4]">
              SOLUTIONS
            </button>
            <button onClick={() => { window.location.hash = '#/standards'; setMobileMenuOpen(false); }} className="text-left py-2 hover:text-[#0085F4]">
              TECHNICAL STANDARDS
            </button>
            <button onClick={() => { window.location.hash = '#/custom-studio'; setMobileMenuOpen(false); }} className="text-left py-2 hover:text-[#0085F4]">
              CUSTOM STUDIO
            </button>
            <button onClick={() => { window.location.hash = '#/rental-fleet'; setMobileMenuOpen(false); }} className="text-left py-2 hover:text-[#0085F4]">
              RENTAL FLEET
            </button>
            <button onClick={() => { window.location.hash = '#/story'; setMobileMenuOpen(false); }} className="text-left py-2 hover:text-[#0085F4]">
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
