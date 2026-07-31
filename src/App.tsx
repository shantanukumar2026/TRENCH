import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DepthNav } from './components/DepthNav';
import { SystemExplorer } from './components/SystemExplorer';
import { CategoryRail } from './components/CategoryRail';
import { CategoryDetail } from './components/CategoryDetail';
import { ProductStage } from './components/ProductStage';
import { Anatomy } from './components/Anatomy';
import { Solutions } from './components/Solutions';
import { IndustriesView } from './components/IndustriesView';
import { TechnicalStandards } from './components/TechnicalStandards';
import { ManufacturingCapabilities } from './components/ManufacturingCapabilities';
import { EngineeringWorkspace } from './components/EngineeringWorkspace';
import { HowItWorks } from './components/HowItWorks';
import { CaseStudy } from './components/CaseStudy';
import { ProductsPage } from './components/ProductsPage';
import { ProductPage } from './components/ProductPage';
import { ResourcesHub } from './components/ResourcesHub';
import { CompanyProfile } from './components/CompanyProfile';
import { TrenchStory } from './components/TrenchStory';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { SubmittalDrawer } from './components/SubmittalDrawer';
import { RequestQuoteModal } from './components/RequestQuoteModal';
import { ProductModal } from './components/ProductModal';
import { ProductComparisonModal } from './components/ProductComparisonModal';
import { Product } from './types';
import { PRODUCTS_CATALOGUE } from './data/trenchData';

export function App() {
  const [activePage, setActivePage] = useState<'home' | 'products' | 'product' | 'story'>('home');
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

  const scrollToSection = (sectionId: string) => {
    if (activePage !== 'home') {
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
    setActivePage('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenProductPage = (product: Product) => {
    setActiveProductPage(product);
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
    <div className="min-h-screen bg-slate-50 text-[#163B66] font-body selection:bg-[#2166D1] selection:text-white">
      {/* Primary Fixed Navbar */}
      <Navbar 
        activePage={activePage === 'story' ? 'story' : activePage === 'products' ? 'products' : 'home'}
        onSelectPage={(page) => {
          setActivePage(page as any);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenQuoteModal={() => { setQuoteInitialProduct(null); setQuoteModalOpen(true); }}
        onOpenSubmittalDrawer={() => setSubmittalDrawerOpen(true)}
        onNavigateToSection={scrollToSection}
      />

      {/* Dynamic View Rendering */}
      {activePage === 'products' ? (
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
      ) : activePage === 'home' ? (
        <main>
          {/* 1. Hero Section — "Below The Surface" 3D Cutaway */}
          <Hero 
            onExploreProducts={() => handleOpenProductsPage('all')}
            onTalkToExpert={() => setQuoteModalOpen(true)}
          />

          {/* 2. "Choose Your Depth" Navigation */}
          <DepthNav 
            onSelectProduct={() => handleOpenProductsPage('all')}
          />

          {/* 3. Product System Explorer ("Everything Trench. 10 Systems Below Ground") */}
          <SystemExplorer 
            onSelectHotspot={(catId) => handleOpenProductsPage(catId)}
          />

          {/* 4. Featured Engineering Product 3D Stage */}
          <ProductStage 
            onRequestSpecSheet={() => handleOpenProductPage(PRODUCTS_CATALOGUE[0])}
          />

          {/* 5. The Trench Anatomy (Educational Cutaway) */}
          <Anatomy />

          {/* 6. Solutions & Industry Sectors */}
          <Solutions 
            onSelectSolution={() => handleOpenProductsPage('all')}
            onOpenDocLink={() => setSubmittalDrawerOpen(true)}
          />

          <IndustriesView 
            onSelectCategory={(catId) => handleOpenProductsPage(catId)}
          />

          {/* 7. Engineering Quality & Standards Compliance */}
          <TechnicalStandards 
            onOpenDocLibrary={() => scrollToSection('resources')}
          />

          {/* 8. Industrial Manufacturing Capabilities */}
          <ManufacturingCapabilities />

          {/* 9. Engineering & Technical Support Workspace */}
          <EngineeringWorkspace 
            onOpenDocLibrary={() => scrollToSection('resources')}
            onOpenEngineeringForm={() => setQuoteModalOpen(true)}
          />

          {/* 10. How It Works (Project Sequence Timeline) */}
          <HowItWorks 
            onExploreSolutions={() => scrollToSection('solutions')}
            onTalkToExpert={() => setQuoteModalOpen(true)}
          />

          {/* 11. Project Case Study (Project 042) */}
          <CaseStudy />

          {/* 12. Technical Resources Hub */}
          <ResourcesHub 
            onDownloadResource={() => setSubmittalDrawerOpen(true)}
          />

          {/* 13. Company Profile ("Built Around the Jobsite") */}
          <CompanyProfile />

          {/* 14. Architectural Final CTA */}
          <FinalCTA 
            onRequestQuote={() => setQuoteModalOpen(true)}
            onTalkToTeam={() => setQuoteModalOpen(true)}
          />
        </main>
      ) : (
        <main>
          {/* Dedicated Story Page: "WHAT IS TRENCH?" */}
          <TrenchStory 
            onExploreProducts={() => handleOpenProductsPage('all')}
            onRequestQuote={() => setQuoteModalOpen(true)}
          />

          {/* Architectural Final CTA */}
          <FinalCTA 
            onRequestQuote={() => setQuoteModalOpen(true)}
            onTalkToTeam={() => setQuoteModalOpen(true)}
          />
        </main>
      )}

      {/* Zero-Black Compliant Blue Gradient Footer */}
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
