import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductFinderSection } from './components/ProductFinderSection';
import { SystemExplorer } from './components/SystemExplorer';
import { WaterManagementSection } from './components/WaterManagementSection';
import { IndustrialGratingsSection } from './components/IndustrialGratingsSection';
import { Solutions } from './components/Solutions';
import { DuctileIronLoadCalculatorInteractive } from './components/DuctileIronLoadCalculatorInteractive';
import { LoadClassMatrixSection } from './components/LoadClassMatrixSection';
import { TechnicalStandards } from './components/TechnicalStandards';
import { ManufacturingCapabilities } from './components/ManufacturingCapabilities';
import { CustomFabricationStudioSection } from './components/CustomFabricationStudioSection';
import { IndustriesView } from './components/IndustriesView';
import { RentalFleetSection } from './components/RentalFleetSection';
import { PECalculatorSection } from './components/PECalculatorSection';
import { SubsurfaceUtilitySection } from './components/SubsurfaceUtilitySection';
import { FeaturedProductsSection } from './components/FeaturedProductsSection';
import { TabulatedDataLibrarySection } from './components/TabulatedDataLibrarySection';
import { CastIronGradeGuide } from './components/CastIronGradeGuide';
import { IronCastingQualityChecklist } from './components/IronCastingQualityChecklist';
import { EquipmentComparisonPreviewSection } from './components/EquipmentComparisonPreviewSection';
import { CertificationsAndComplianceSection } from './components/CertificationsAndComplianceSection';
import { CaseStudy } from './components/CaseStudy';
import { ProductsPage } from './components/ProductsPage';
import { ProductPage } from './components/ProductPage';
import { TrenchStory } from './components/TrenchStory';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { SubmittalDrawer } from './components/SubmittalDrawer';
import { RequestQuoteModal } from './components/RequestQuoteModal';
import { ProductModal } from './components/ProductModal';
import { ProductComparisonModal } from './components/ProductComparisonModal';
import { HomePageTwo } from './components/HomePageTwo';
import { NotFoundPage } from './components/NotFoundPage';
import { MaintenancePage } from './components/MaintenancePage';
import { Product } from './types';
import { PRODUCTS_CATALOGUE } from './data/trenchData';

export function App() {
  const [activePage, setActivePage] = useState<'home' | 'home-two' | 'products' | 'product' | 'solutions' | 'industries' | 'standards' | 'custom-studio' | 'rental-fleet' | 'story' | 'maintenance' | '404'>('home');
  const [activeProductPage, setActiveProductPage] = useState<Product | null>(null);

  const [quoteModalOpen, setQuoteModalOpen] = useState<boolean>(false);
  const [submittalDrawerOpen, setSubmittalDrawerOpen] = useState<boolean>(false);
  const [selectedProductModal, setSelectedProductModal] = useState<Product | null>(null);
  const [quoteInitialProduct, setQuoteInitialProduct] = useState<Product | null>(null);

  // Category & Filter States
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('all');

  // Product Comparison States (up to 4 products)
  const [comparedProductIds, setComparedProductIds] = useState<string[]>([]);
  const [comparisonModalOpen, setComparisonModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleHashChange = () => {
      const rawHash = window.location.hash || '#/';
      const hash = rawHash.toLowerCase();

      if (hash.startsWith('#/product/')) {
        const prodId = rawHash.replace('#/product/', '').split('?')[0].trim();
        const foundProduct = PRODUCTS_CATALOGUE.find(p => p.id === prodId || p.partNumber.toLowerCase() === prodId.toLowerCase());
        if (foundProduct) {
          setActiveProductPage(foundProduct);
          setActivePage('product');
        } else {
          setActivePage('404');
        }
      } else if (hash.includes('home-two') || hash.includes('home2') || hash.includes('orange')) {
        setActivePage('home-two');
      } else if (hash.startsWith('#/products') || hash.includes('catalogue')) {
        setActivePage('products');
      } else if (hash.startsWith('#/solutions')) {
        setActivePage('solutions');
      } else if (hash.startsWith('#/industries')) {
        setActivePage('industries');
      } else if (hash.startsWith('#/standards') || hash.includes('technical')) {
        setActivePage('standards');
      } else if (hash.startsWith('#/custom-studio') || hash.includes('custom')) {
        setActivePage('custom-studio');
      } else if (hash.startsWith('#/rental-fleet') || hash.includes('rental')) {
        setActivePage('rental-fleet');
      } else if (hash.startsWith('#/story') || hash.includes('about') || hash.includes('company')) {
        setActivePage('story');
      } else if (hash.startsWith('#/maintenance')) {
        setActivePage('maintenance');
      } else if (hash === '#/' || hash === '#/home' || hash === '' || hash.includes('home1') || hash.includes('default')) {
        setActivePage('home');
      } else if (hash.startsWith('#/404')) {
        setActivePage('404');
      } else {
        setActivePage('404');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (activePage !== 'home') {
      window.location.hash = '#/';
      setActivePage('home');
    }
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        const yOffset = -80;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 50);
  };

  const handleOpenProductsPage = (catId: string = 'all') => {
    setSelectedCategoryFilter(catId);
    window.location.hash = '#/products';
    setActivePage('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenProductPage = (product: Product) => {
    setActiveProductPage(product);
    window.location.hash = `#/product/${product.id}`;
    setActivePage('product');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleCompare = (product: Product) => {
    if (comparedProductIds.includes(product.id)) {
      setComparedProductIds(comparedProductIds.filter(id => id !== product.id));
    } else {
      if (comparedProductIds.length >= 4) {
        alert('You can compare up to 4 products at a time.');
        return;
      }
      setComparedProductIds([...comparedProductIds, product.id]);
    }
  };

  const handleRequestQuoteForProduct = (product: Product) => {
    setQuoteInitialProduct(product);
    setQuoteModalOpen(true);
  };

  const comparedProducts = PRODUCTS_CATALOGUE.filter(p => comparedProductIds.includes(p.id));

  return (
    <div className="min-h-screen bg-white text-[#004AAD] font-body selection:bg-[#0085F4] selection:text-white">
      {/* Primary Fixed Navbar */}
      <Navbar
        activePage={activePage === 'product' ? 'products' : activePage}
        onSelectPage={(page) => {
          setActivePage(page);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenQuoteModal={() => { setQuoteInitialProduct(null); setQuoteModalOpen(true); }}
        onOpenSubmittalDrawer={() => setSubmittalDrawerOpen(true)}
        onNavigateToSection={scrollToSection}
      />

      {/* Dynamic View Rendering */}
      {activePage === 'home-two' ? (
        <HomePageTwo
          onExploreProducts={() => handleOpenProductsPage('all')}
          onTalkToExpert={() => setQuoteModalOpen(true)}
          onSelectCategory={(catId) => handleOpenProductsPage(catId)}
          onSelectProduct={handleOpenProductPage}
          onRequestQuote={(p) => p ? handleRequestQuoteForProduct(p) : setQuoteModalOpen(true)}
          onExploreAll={() => handleOpenProductsPage('all')}
          onOpenSubmittalDrawer={() => setSubmittalDrawerOpen(true)}
          onNavigateToSection={scrollToSection}
        />
      ) : activePage === 'products' ? (
        <main>
          <ProductsPage
            selectedCategoryFilter={selectedCategoryFilter}
            onCategoryFilterChange={(catId) => setSelectedCategoryFilter(catId)}
            onSelectProduct={handleOpenProductPage}
            onRequestQuote={handleRequestQuoteForProduct}
            onToggleCompare={handleToggleCompare}
            comparedProductIds={comparedProductIds}
            onOpenComparisonModal={() => setComparisonModalOpen(true)}
          />
        </main>
      ) : activePage === 'product' && activeProductPage ? (
        <main className="pt-24">
          <ProductPage
            product={activeProductPage}
            onBackToCatalogue={() => handleOpenProductsPage(selectedCategoryFilter)}
            onRequestQuote={handleRequestQuoteForProduct}
            onSelectRelatedProduct={handleOpenProductPage}
          />
        </main>
      ) : activePage === 'solutions' ? (
        <main className="pt-24">
          <Solutions
            onSelectSolution={(sId) => handleOpenProductsPage('all')}
            onOpenDocLink={() => setSubmittalDrawerOpen(true)}
          />
        </main>
      ) : activePage === 'industries' ? (
        <main className="pt-24">
          <IndustriesView
            onSelectCategory={(cId) => handleOpenProductsPage(cId)}
          />
        </main>
      ) : activePage === 'standards' ? (
        <main className="pt-24">
          <TechnicalStandards
            onOpenDocLibrary={() => setSubmittalDrawerOpen(true)}
          />
        </main>
      ) : activePage === 'custom-studio' ? (
        <main className="pt-24">
          <CustomFabricationStudioSection
            onRequestQuote={() => setQuoteModalOpen(true)}
          />
        </main>
      ) : activePage === 'rental-fleet' ? (
        <main className="pt-24">
          <RentalFleetSection
            onRequestQuote={() => setQuoteModalOpen(true)}
          />
        </main>
      ) : activePage === 'story' ? (
        <main>
          <TrenchStory
            onExploreProducts={() => handleOpenProductsPage('all')}
            onRequestQuote={() => setQuoteModalOpen(true)}
          />

          <FinalCTA
            onRequestQuote={() => setQuoteModalOpen(true)}
            onTalkToTeam={() => setQuoteModalOpen(true)}
          />
        </main>
      ) : activePage === 'maintenance' ? (
        <main className="pt-24">
          <MaintenancePage
            onNavigateHome={() => { window.location.hash = '#/'; setActivePage('home'); }}
            onRequestQuote={() => setQuoteModalOpen(true)}
          />
        </main>
      ) : activePage === '404' ? (
        <main className="pt-24">
          <NotFoundPage
            onNavigateHome={() => { window.location.hash = '#/'; setActivePage('home'); }}
            onNavigateProducts={() => handleOpenProductsPage('all')}
            onRequestQuote={() => setQuoteModalOpen(true)}
          />
        </main>
      ) : (
        <main>
          {/* 1. Hero Section */}
          <Hero
            onExploreProducts={() => handleOpenProductsPage('all')}
            onTalkToExpert={() => setQuoteModalOpen(true)}
          />

          {/* 2. Interactive 3-Step Equipment & Shoring Configurator */}
          <ProductFinderSection
            onSelectCategory={(catId) => handleOpenProductsPage(catId)}
            onRequestQuote={() => setQuoteModalOpen(true)}
          />

          {/* 3. Primary Equipment & Shoring Categories Grid */}
          <SystemExplorer
            onSelectHotspot={(catId) => handleOpenProductsPage(catId)}
          />

          {/* 4. Featured Industrial Products Catalogue Showcase */}
          <FeaturedProductsSection
            onSelectProduct={(p) => handleOpenProductPage(p)}
            onRequestQuote={(p) => handleRequestQuoteForProduct(p)}
            onExploreAll={() => handleOpenProductsPage('all')}
          />

          {/* 5. Nationwide Rental Fleet & Emergency Jobsite Logistics */}
          <RentalFleetSection
            onRequestQuote={() => setQuoteModalOpen(true)}
          />

          {/* 6. Shoring Equipment Comparison Decision Matrix */}
          <EquipmentComparisonPreviewSection
            onRequestQuote={() => setQuoteModalOpen(true)}
          />

          {/* 7. Underground Water & Linear Drainage Systems */}
          <WaterManagementSection
            onExploreDrainage={() => handleOpenProductsPage('safety-protection')}
            onRequestQuote={() => setQuoteModalOpen(true)}
          />

          {/* 8. Industrial Gratings & AASHTO Road Decking */}
          <IndustrialGratingsSection
            onRequestQuote={() => setQuoteModalOpen(true)}
          />

          {/* 9. Subsurface Utility Engineering (SUE) & Hydro-Vac Protection */}
          <SubsurfaceUtilitySection
            onRequestQuote={() => setQuoteModalOpen(true)}
          />

          {/* 10. Core Trench Safety & Shoring Solutions */}
          <Solutions
            onSelectSolution={() => handleOpenProductsPage('all')}
            onOpenDocLink={() => setSubmittalDrawerOpen(true)}
          />

          {/* 11. PE-Stamped Tabulated Data & Depth Calculator */}
          <PECalculatorSection
            onOpenSubmittals={() => setSubmittalDrawerOpen(true)}
          />

          {/* 12. PE Tabulated Data & Submittal Download Library */}
          <TabulatedDataLibrarySection
            onOpenDrawer={() => setSubmittalDrawerOpen(true)}
          />

          {/* 13. Ductile Iron & Cast Iron Metallurgy Guide */}
          <CastIronGradeGuide />

          {/* 14. Ductile Iron Casting Quality Control & Inspection Checklist */}
          <IronCastingQualityChecklist />

          {/* 15. Load Class & Material Science Comparison Matrix */}
          <LoadClassMatrixSection />

          {/* 16. Engineering Quality & OSHA Standards Compliance */}
          <TechnicalStandards
            onOpenDocLibrary={() => scrollToSection('solutions')}
          />

          {/* 17. Industry Quality & Engineering Certifications */}
          <CertificationsAndComplianceSection />

          {/* 18. Industrial Manufacturing & Robotic Steel Fabrication */}
          <ManufacturingCapabilities />

          {/* 19. Civil Sectors Showcase */}
          <IndustriesView
            onSelectCategory={(catId) => handleOpenProductsPage(catId)}
          />

          {/* 20. Custom Engineering & Robotic Steel Fabrication Studio */}
          <CustomFabricationStudioSection
            onRequestQuote={() => setQuoteModalOpen(true)}
          />

          {/* 21. Field Engineering Case Study */}
          <CaseStudy />

          {/* 22. Interactive Ductile Iron Wheel Load Engine & Proof Load Simulator */}
          <DuctileIronLoadCalculatorInteractive
            onRequestQuote={() => setQuoteModalOpen(true)}
          />

          {/* 23. Architectural Final Enterprise CTA */}
          <FinalCTA
            onRequestQuote={() => setQuoteModalOpen(true)}
            onTalkToTeam={() => setQuoteModalOpen(true)}
          />
        </main>
      )}

      {/* Corporate Blue Footer */}
      <Footer
        onNavigateToSection={scrollToSection}
        onOpenQuoteModal={() => setQuoteModalOpen(true)}
      />

      {/* Modals & Drawers */}
      <SubmittalDrawer
        isOpen={submittalDrawerOpen}
        onClose={() => setSubmittalDrawerOpen(false)}
      />

      <RequestQuoteModal
        isOpen={quoteModalOpen}
        onClose={() => { setQuoteModalOpen(false); setQuoteInitialProduct(null); }}
        initialProduct={quoteInitialProduct}
      />

      <ProductModal
        product={selectedProductModal}
        onClose={() => setSelectedProductModal(null)}
        onRequestQuote={handleRequestQuoteForProduct}
      />

      <ProductComparisonModal
        isOpen={comparisonModalOpen}
        onClose={() => setComparisonModalOpen(false)}
        comparedProducts={comparedProducts}
        onRemoveProduct={(id) => setComparedProductIds(comparedProductIds.filter(pId => pId !== id))}
        onRequestQuoteForProduct={handleRequestQuoteForProduct}
      />
    </div>
  );
}

export default App;
