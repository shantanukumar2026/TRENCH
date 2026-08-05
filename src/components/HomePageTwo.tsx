import React from 'react';
import { HeroTwo } from './HeroTwo';
import { ProductFinderSection } from './ProductFinderSection';
import { SystemExplorer } from './SystemExplorer';
import { FeaturedProductsSectionTwo } from './FeaturedProductsSectionTwo';
import { RentalFleetSection } from './RentalFleetSection';
import { EquipmentComparisonPreviewSection } from './EquipmentComparisonPreviewSection';
import { WaterManagementSection } from './WaterManagementSection';
import { IndustrialGratingsSection } from './IndustrialGratingsSection';
import { SubsurfaceUtilitySection } from './SubsurfaceUtilitySection';
import { Solutions } from './Solutions';
import { PECalculatorSection } from './PECalculatorSection';
import { TabulatedDataLibrarySection } from './TabulatedDataLibrarySection';
import { CastIronGradeGuide } from './CastIronGradeGuide';
import { IronCastingQualityChecklist } from './IronCastingQualityChecklist';
import { LoadClassMatrixSection } from './LoadClassMatrixSection';
import { TechnicalStandards } from './TechnicalStandards';
import { CertificationsAndComplianceSection } from './CertificationsAndComplianceSection';
import { ManufacturingCapabilities } from './ManufacturingCapabilities';
import { IndustriesView } from './IndustriesView';
import { CustomFabricationStudioSection } from './CustomFabricationStudioSection';
import { CaseStudy } from './CaseStudy';
import { DuctileIronLoadCalculatorInteractive } from './DuctileIronLoadCalculatorInteractive';
import { FinalCTA } from './FinalCTA';
import { Product } from '../types';

interface HomePageTwoProps {
  onExploreProducts: () => void;
  onTalkToExpert: () => void;
  onSelectCategory: (categoryId: string) => void;
  onSelectProduct: (product: Product) => void;
  onRequestQuote: (product?: Product) => void;
  onExploreAll: () => void;
  onOpenSubmittalDrawer: () => void;
  onNavigateToSection: (sectionId: string) => void;
}

export const HomePageTwo: React.FC<HomePageTwoProps> = ({
  onExploreProducts,
  onTalkToExpert,
  onSelectCategory,
  onSelectProduct,
  onRequestQuote,
  onExploreAll,
  onOpenSubmittalDrawer,
  onNavigateToSection
}) => {
  return (
    <main className="space-y-0">
      {/* 1. Orange Hero Section */}
      <HeroTwo
        onExploreProducts={onExploreProducts}
        onTalkToExpert={onTalkToExpert}
      />

      {/* 2. Configurator */}
      <ProductFinderSection
        onSelectCategory={onSelectCategory}
        onRequestQuote={() => onRequestQuote()}
      />

      {/* 3. System Explorer */}
      <SystemExplorer
        onSelectHotspot={onSelectCategory}
      />

      {/* 4. Orange Featured Products Section */}
      <FeaturedProductsSectionTwo
        onSelectProduct={onSelectProduct}
        onRequestQuote={(p) => onRequestQuote(p)}
        onExploreAll={onExploreAll}
      />

      {/* 5. Rental Fleet */}
      <RentalFleetSection
        onRequestQuote={() => onRequestQuote()}
      />

      {/* 6. Comparison Preview */}
      <EquipmentComparisonPreviewSection
        onRequestQuote={() => onRequestQuote()}
      />

      {/* 7. Water Management */}
      <WaterManagementSection
        onExploreDrainage={() => onSelectCategory('safety-protection')}
        onRequestQuote={() => onRequestQuote()}
      />

      {/* 8. Industrial Gratings */}
      <IndustrialGratingsSection
        onRequestQuote={() => onRequestQuote()}
      />

      {/* 9. Subsurface Utility */}
      <SubsurfaceUtilitySection
        onRequestQuote={() => onRequestQuote()}
      />

      {/* 10. Solutions */}
      <Solutions
        onSelectSolution={() => onExploreProducts()}
        onOpenDocLink={onOpenSubmittalDrawer}
      />

      {/* 11. PE Calculator */}
      <PECalculatorSection
        onOpenSubmittals={onOpenSubmittalDrawer}
      />

      {/* 12. Tabulated Data Library */}
      <TabulatedDataLibrarySection
        onOpenDrawer={onOpenSubmittalDrawer}
      />

      {/* 13. Metallurgy Guide */}
      <CastIronGradeGuide />

      {/* 14. Quality Checklist */}
      <IronCastingQualityChecklist />

      {/* 15. Load Class Matrix */}
      <LoadClassMatrixSection />

      {/* 16. Technical Standards */}
      <TechnicalStandards
        onOpenDocLibrary={() => onNavigateToSection('solutions')}
      />

      {/* 17. Certifications */}
      <CertificationsAndComplianceSection />

      {/* 18. Manufacturing Capabilities */}
      <ManufacturingCapabilities />

      {/* 19. Civil Sectors */}
      <IndustriesView
        onSelectCategory={onSelectCategory}
      />

      {/* 20. Custom Fabrication Studio */}
      <CustomFabricationStudioSection
        onRequestQuote={() => onRequestQuote()}
      />

      {/* 21. Case Study */}
      <CaseStudy />

      {/* 22. Load Calculator Interactive */}
      <DuctileIronLoadCalculatorInteractive
        onRequestQuote={() => onRequestQuote()}
      />

      {/* 23. Final Enterprise CTA */}
      <FinalCTA
        onRequestQuote={() => onRequestQuote()}
        onTalkToTeam={() => onRequestQuote()}
      />
    </main>
  );
};
