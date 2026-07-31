import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DepthNav } from './components/DepthNav';
import { SystemExplorer } from './components/SystemExplorer';
import { ProductStage } from './components/ProductStage';
import { Anatomy } from './components/Anatomy';
import { Solutions } from './components/Solutions';
import { TechnicalStandards } from './components/TechnicalStandards';
import { ManufacturingCapabilities } from './components/ManufacturingCapabilities';
import { EngineeringWorkspace } from './components/EngineeringWorkspace';
import { HowItWorks } from './components/HowItWorks';
import { CaseStudy } from './components/CaseStudy';
import { Catalogue } from './components/Catalogue';
import { ResourcesHub } from './components/ResourcesHub';
import { CompanyProfile } from './components/CompanyProfile';
import { TrenchStory } from './components/TrenchStory';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { SubmittalDrawer } from './components/SubmittalDrawer';
import { RequestQuoteModal } from './components/RequestQuoteModal';
import { ProductModal } from './components/ProductModal';
import { Product } from './types';
import { PRODUCTS_CATALOGUE } from './data/trenchData';

export function App() {
  const [activePage, setActivePage] = useState<'home' | 'story'>('home');
  const [quoteModalOpen, setQuoteModalOpen] = useState<boolean>(false);
  const [submittalDrawerOpen, setSubmittalDrawerOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const scrollToSection = (sectionId: string) => {
    setActivePage('home');
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        const yOffset = -80;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-[#163B66] font-body selection:bg-[#2166D1] selection:text-white">
      {/* Primary Fixed Navbar */}
      <Navbar 
        activePage={activePage}
        onSelectPage={(page) => {
          setActivePage(page);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenQuoteModal={() => setQuoteModalOpen(true)}
        onOpenSubmittalDrawer={() => setSubmittalDrawerOpen(true)}
        onNavigateToSection={scrollToSection}
      />

      {/* Dynamic View Rendering */}
      {activePage === 'home' ? (
        <main>
          {/* 1. Hero Section — "Below The Surface" 3D Cutaway */}
          <Hero 
            onExploreProducts={() => scrollToSection('catalogue')}
            onTalkToExpert={() => setQuoteModalOpen(true)}
          />

          {/* 2. "Choose Your Depth" Navigation */}
          <DepthNav 
            onSelectProduct={(depthId) => scrollToSection('catalogue')}
          />

          {/* 3. Product System Explorer ("Everything Trench. One System") */}
          <SystemExplorer 
            onSelectHotspot={(category) => scrollToSection('catalogue')}
          />

          {/* 4. Featured Engineering Product 3D Stage */}
          <ProductStage 
            onRequestSpecSheet={() => setSelectedProduct(PRODUCTS_CATALOGUE[0])}
          />

          {/* 5. The Trench Anatomy (Educational Cutaway) */}
          <Anatomy />

          {/* 6. Solutions by Application */}
          <Solutions 
            onSelectSolution={(solId) => scrollToSection('catalogue')}
            onOpenDocLink={() => setSubmittalDrawerOpen(true)}
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

          {/* 12. Product Catalogue Engine */}
          <Catalogue 
            onSelectProductModal={(p) => setSelectedProduct(p)}
            onOpenSpecDownload={(p) => setSelectedProduct(p)}
          />

          {/* 13. Technical Resources Hub */}
          <ResourcesHub 
            onDownloadResource={(title) => setSubmittalDrawerOpen(true)}
          />

          {/* 14. Company Profile ("Built Around the Jobsite") */}
          <CompanyProfile />

          {/* 15. Architectural Final CTA */}
          <FinalCTA 
            onRequestQuote={() => setQuoteModalOpen(true)}
            onTalkToTeam={() => setQuoteModalOpen(true)}
          />
        </main>
      ) : (
        <main>
          {/* Dedicated Story Page: "WHAT IS TRENCH?" */}
          <TrenchStory 
            onExploreProducts={() => { setActivePage('home'); scrollToSection('catalogue'); }}
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
        onClose={() => setQuoteModalOpen(false)}
      />

      <ProductModal 
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onRequestQuote={() => setQuoteModalOpen(true)}
      />
    </div>
  );
}

export default App;
