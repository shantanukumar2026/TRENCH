import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductFinderSection } from './components/ProductFinderSection';
import { SystemExplorer } from './components/SystemExplorer';
import { WaterManagementSection } from './components/WaterManagementSection';
import { IndustrialGratingsSection } from './components/IndustrialGratingsSection';
import { Solutions } from './components/Solutions';
import { GlobalProjectsSection } from './components/GlobalProjectsSection';
import { LoadClassMatrixSection } from './components/LoadClassMatrixSection';
import { TechnicalStandards } from './components/TechnicalStandards';
import { ManufacturingCapabilities } from './components/ManufacturingCapabilities';
import { ContractorTestimonialsSection } from './components/ContractorTestimonialsSection';
import { IndustriesView } from './components/IndustriesView';
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
    <div className="min-h-screen bg-white text-[#004AAD] font-body selection:bg-[#0085F4] selection:text-white">
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

          {/* 4. Underground Water & Linear Drainage Systems (Inspired by ACO & MEA) */}
          <WaterManagementSection
            onExploreDrainage={() => handleOpenProductsPage('safety-protection')}
            onRequestQuote={() => setQuoteModalOpen(true)}
          />

          {/* 5. Industrial Gratings & AASHTO Road Decking (Inspired by Lichtgitter & Richard Brink) */}
          <IndustrialGratingsSection
            onRequestQuote={() => setQuoteModalOpen(true)}
          />

          {/* 6. Core Trench Safety & Shoring Solutions */}
          <Solutions
            onSelectSolution={() => handleOpenProductsPage('all')}
            onOpenDocLink={() => setSubmittalDrawerOpen(true)}
          />

          {/* 7. Load Class & Material Science Comparison Matrix */}
          <LoadClassMatrixSection />

          {/* 8. Engineering Quality & OSHA Standards Compliance */}
          <TechnicalStandards
            onOpenDocLibrary={() => scrollToSection('solutions')}
          />

          {/* 9. Industrial Manufacturing & Robotic Steel Fabrication */}
          <ManufacturingCapabilities />

          {/* 10. Civil Sectors Showcase */}
          <IndustriesView
            onSelectCategory={(catId) => handleOpenProductsPage(catId)}
          />

          {/* 13. Field Engineering Case Study */}
          <CaseStudy />

          {/* 14. Architectural Final Enterprise CTA */}
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
