import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Award,
  Sparkles,
  Layers,
  Sliders
} from 'lucide-react';

export interface HeroSlide {
  id: string;
  badge: string;
  badgeColor?: string;
  title: string;
  highlightText: string;
  subtitle: string;
  series: string;
  description: string;
  image: string;
  videoUrl?: string;
  specs: { label: string; value: string }[];
  categoryTag: string;
}

interface HeroProps {
  onExploreProducts: () => void;
  onTalkToExpert: () => void;
  customSlides?: HeroSlide[];
}

export const DEFAULT_HERO_SLIDES: HeroSlide[] = [
  {
    id: 'slide-01',
    badge: 'NEW',
    badgeColor: 'bg-[#DC2626]',
    title: 'ACHIEVE OPTIMAL DRAINAGE —',
    highlightText: 'HIGH PERFORMANCE SYSTEMS',
    subtitle: 'DECORATIVE & ADA HEEL-PROOF CAST IRON TRENCH COVERS',
    series: 'TU-TG-SQ44 Series • Architectural Castings',
    description: 'Designer cast iron tree grates and ADA heel-proof trench covers engineered with expandable knockout rings and anti-slip textures.',
    image: '/greates/TI-001.jpg',
    videoUrl: '/greates/hero-section-video12.mp4',
    categoryTag: 'ADA ARCHITECTURAL CASTINGS',
    specs: [
      { label: 'SLOT GEOMETRY', value: '1/4" MAX HEEL-PROOF' },
      { label: 'FOUNDRY SPEC', value: 'ASTM A536 DUCTILE IRON' }
    ]
  },
  {
    id: 'slide-02',
    badge: 'CLASS F900',
    badgeColor: 'bg-[#DC2626]',
    title: 'EXTREME LOAD RUNWAYS —',
    highlightText: '900 kN AIRPORT INFRASTRUCTURE',
    subtitle: 'HEAVY DUTY DUCTILE IRON LINEAR CHANNEL FRAMES',
    series: 'TU-CH-F900 Series • Heavy Civil Infrastructure',
    description: 'EN 1433 Class F900 airport and seaport continuous trench drainage channels built for 900 kN wheel load proofing.',
    image: '/greates/pre-trench-01.JPG',
    categoryTag: 'HEAVY CIVIL DRAINAGE',
    specs: [
      { label: 'PROOF LOAD', value: '900 kN AIRPORT CERTIFIED' },
      { label: 'LOCKING SPEC', value: '4-POINT MECHANICAL BOLT' }
    ]
  },
  {
    id: 'slide-03',
    badge: 'FEATURED',
    badgeColor: 'bg-[#DC2626]',
    title: 'URBAN RADIAL SUNBURST —',
    highlightText: 'TREE AERATION SYSTEMS',
    subtitle: 'DECORATIVE CIRCULAR CAST IRON LANDSCAPE GRATES',
    series: 'TU-TG-RD60 Series • Urban Landscape Architecture',
    description: 'Radial slot circular cast iron tree grates engineered for maximum soil aeration, root watering, and vehicle load overrun.',
    image: '/greates/TI-002.JPG',
    categoryTag: 'TREE GRATES & GUARDS',
    specs: [
      { label: 'DIAMETER', value: '60" RADIAL CIRCULAR' },
      { label: 'SURFACE FINISH', value: 'KTL E-COAT FINISH' }
    ]
  },
  {
    id: 'slide-04',
    badge: 'AASHTO H-20',
    badgeColor: 'bg-[#DC2626]',
    title: 'HIGH-FLOW SLOTTED DRAINS —',
    highlightText: 'HIGHWAY CROSSINGS',
    subtitle: 'HEAVY DUTY LONGITUDINAL DUCTILE IRON GRATINGS',
    series: 'TU-SLOT-H20 Series • Municipal Transportation',
    description: 'Longitudinal slot ductile iron trench covers optimized for high-volume stormwater intake along interstate freight corridors.',
    image: '/greates/trench-grate-horizontal-view (10).jpeg',
    categoryTag: 'HIGHWAY TRENCH GRATINGS',
    specs: [
      { label: 'LOAD RATING', value: 'AASHTO H-20 VEHICULAR' },
      { label: 'FLOW CAPACITY', value: 'HIGH INLET HYDRAULICS' }
    ]
  },
  {
    id: 'slide-05',
    badge: 'CUSTOM STUDIO',
    badgeColor: 'bg-[#DC2626]',
    title: 'CUSTOM FOUNDRY CASTINGS —',
    highlightText: 'PE STAMPED ENGINEERING',
    subtitle: 'ARCHITECTURAL & CUSTOM FABRICATED INFRASTRUCTURE',
    series: 'TU-CUST-9000 Series • Foundry Fabrication Studio',
    description: 'Precision custom iron casting and trench frame fabrication tailored to municipal master plans and historical site geometries.',
    image: '/examples/istockphoto-1313570090-2048x2048.jpg',
    categoryTag: 'CUSTOM FABRICATION',
    specs: [
      { label: 'CAD COMPLIANCE', value: 'PE STAMPED CAD SPECS' },
      { label: 'COMPLIANCE', value: 'BUY AMERICA CERTIFIED' }
    ]
  },
  {
    id: 'slide-06',
    badge: 'HEAVY CIVIL',
    badgeColor: 'bg-[#DC2626]',
    title: 'LINEAR STORM CHANNELS —',
    highlightText: 'HIGH VOLUME HYDRAULICS',
    subtitle: 'PRECAST CONCRETE CHANNELS & DUCTILE RAILS',
    series: 'TU-PRE-LIN Series • Stormwater Conveyance',
    description: 'Monolithic precast linear concrete channels integrated with heavy duty ductile iron anchoring rails for continuous drainage.',
    image: '/greates/trench-precast01.JPG',
    categoryTag: 'PRECAST CHANNELS',
    specs: [
      { label: 'CANAL WIDTH', value: '12" TO 36" CLEAR OPENING' },
      { label: 'LOAD CLASS', value: 'CLASS E600 HEAVY FREIGHT' }
    ]
  }
];

const AUTO_SLIDE_DURATION_MS = 5500;

export const Hero: React.FC<HeroProps> = ({
  onExploreProducts,
  onTalkToExpert,
  customSlides
}) => {
  const slides = customSlides && customSlides.length > 0 ? customSlides : DEFAULT_HERO_SLIDES;

  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const progressBarRef = useRef<HTMLDivElement>(null);
  const thumbnailContainerRef = useRef<HTMLDivElement>(null);
  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Auto-rotate interval
  useEffect(() => {
    if (!isPlaying || slides.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, AUTO_SLIDE_DURATION_MS);

    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  // Auto-scroll active thumbnail into view smoothly
  useEffect(() => {
    const activeThumb = thumbnailRefs.current[currentSlide];
    const container = thumbnailContainerRef.current;
    if (activeThumb && container) {
      const scrollLeft =
        activeThumb.offsetLeft -
        container.offsetWidth / 2 +
        activeThumb.offsetWidth / 2;
      container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    }
  }, [currentSlide]);

  // GSAP Progress Bar Animation
  useEffect(() => {
    if (!progressBarRef.current || !isPlaying) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        progressBarRef.current,
        { width: '0%' },
        { width: '100%', duration: AUTO_SLIDE_DURATION_MS / 1000, ease: 'none' }
      );
    });

    return () => ctx.revert();
  }, [currentSlide, isPlaying]);

  const activeSlide = slides[currentSlide] || slides[0];

  const goToSlide = (idx: number) => {
    setCurrentSlide(idx);
  };

  const handleNext = () => {
    goToSlide((currentSlide + 1) % slides.length);
  };

  const handlePrev = () => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  const scrollThumbnails = (dir: 'left' | 'right') => {
    if (thumbnailContainerRef.current) {
      const offset = dir === 'left' ? -200 : 200;
      thumbnailContainerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  // Full Slide Curtain Transition Variants (One hides smoothly, then second appears)
  const fullSlideVariants = {
    initial: {
      opacity: 0,
      x: 40
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.55,
        ease: [0.25, 1, 0.5, 1]
      }
    },
    exit: {
      opacity: 0,
      x: -30,
      transition: {
        duration: 0.35,
        ease: [0.4, 0, 1, 1]
      }
    }
  };

  return (
    <section id="hero" className="relative pt-28 md:pt-36 pb-12 min-h-[calc(100vh-80px)] flex flex-col justify-between bg-[#0B192C] bg-industrial-grid-dark border-b border-[#0085F4]/30 overflow-hidden text-white">
      
      {/* Background Radial Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#0085F4]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/3 w-[450px] h-[450px] bg-[#00BBFF]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content Area: Smooth Hide-Then-Show Full Slide Transition */}
      <div className="container-industrial relative z-10 my-auto py-4 min-h-[460px] flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide.id}
            variants={fullSlideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full"
          >

            {/* Left Column / Media Showcase Box */}
            <div className="lg:col-span-6 relative order-1 lg:order-1">
              <div className="relative border-2 border-[#0085F4]/50 bg-[#0B192C] shadow-[0_25px_60px_rgba(0,74,173,0.45)] overflow-hidden rounded-sm group min-h-[350px] md:min-h-[430px] flex items-center justify-center">

                <div className="w-full h-full relative">
                  {activeSlide.videoUrl ? (
                    <video
                      src={activeSlide.videoUrl}
                      poster={activeSlide.image}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-[350px] md:h-[430px] object-cover"
                    />
                  ) : (
                    <img
                      src={activeSlide.image}
                      alt={activeSlide.title}
                      className="w-full h-[350px] md:h-[430px] object-cover"
                    />
                  )}

                  {/* Photo Overlay Tag */}
                  <div className="absolute top-4 left-4 bg-[#0B192C]/90 backdrop-blur-md text-white px-3.5 py-1.5 text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 border border-[#00BBFF]/30 shadow-md z-30">
                    <Award className="w-4 h-4 text-[#00BBFF]" />
                    <span>SYSTEM SPEC // {activeSlide.categoryTag}</span>
                  </div>

                  {/* Dynamic Telemetry Metric Box */}
                  <div className="absolute bottom-4 left-4 right-4 glass-card-dark p-4 text-white shadow-2xl z-30">
                    <div className="flex justify-between items-center pb-2 border-b border-white/15">
                      <span className="font-mono text-xs font-bold text-[#00BBFF] uppercase tracking-wider">
                        {activeSlide.series}
                      </span>
                      <span className="text-[10px] font-mono font-extrabold bg-[#0085F4]/40 text-white px-2 py-0.5 border border-[#00BBFF]/40">
                        VERIFIED SPEC SHEET
                      </span>
                    </div>
                    <div className="mt-2.5 grid grid-cols-2 gap-3 text-xs font-mono">
                      {activeSlide.specs.map((spec, i) => (
                        <div key={i}>
                          <span className="text-slate-400 block text-[10px] uppercase">{spec.label}:</span>
                          <strong className="text-white text-xs">{spec.value}</strong>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Headline, Badge, Copy & CTAs */}
            <div className="lg:col-span-6 space-y-6 md:space-y-7 order-2 lg:order-2">

              {/* Slide Header & Red Badge */}
              <div className="space-y-3.5">

                {/* Eyebrow & Badge Row */}
                <div className="flex items-center gap-3 flex-wrap pb-0.5">
                  <span className="inline-block bg-[#DC2626] text-white text-[11px] font-mono font-extrabold px-3 py-1 uppercase tracking-wider shadow-md rounded-xs">
                    {activeSlide.badge}
                  </span>

                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-[#00BBFF]/30 backdrop-blur-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00BBFF] animate-pulse"></span>
                    <span className="text-[11px] font-mono font-extrabold text-[#00BBFF] tracking-wider uppercase">
                      AMERICAN CAST IRON &amp; FOUNDRY
                    </span>
                  </div>
                </div>

                {/* Title, Subtitle & Description */}
                <div className="min-h-[190px] flex flex-col justify-start">
                  <div className="space-y-2.5">
                    <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold uppercase tracking-tight text-white leading-[1.25] sm:leading-[1.2]">
                      {activeSlide.title} <br />
                      <span className="gradient-text-cyan text-lg sm:text-xl lg:text-2xl font-extrabold block pt-1.5 leading-snug">
                        {activeSlide.highlightText}
                      </span>
                    </h1>

                    <div className="font-mono text-xs sm:text-sm tracking-wider font-bold text-[#00BBFF] uppercase pt-1">
                      {activeSlide.subtitle}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 max-w-lg font-normal leading-relaxed pt-1.5 line-clamp-2">
                      {activeSlide.description}
                    </p>
                  </div>
                </div>

              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3.5">
                <button
                  onClick={onExploreProducts}
                  className="group py-2.5 px-5 text-xs font-mono font-extrabold tracking-wider bg-[#0085F4] hover:bg-[#0070D2] border border-[#00BBFF]/50 hover:border-[#00BBFF] text-white rounded-xs flex items-center justify-center gap-2 uppercase shadow-md hover:shadow-[0_0_20px_rgba(0,133,244,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                >
                  <span>EXPLORE CAST IRON PRODUCTS</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={onTalkToExpert}
                  className="group py-2.5 px-5 text-xs font-mono font-extrabold tracking-wider bg-white/5 hover:bg-[#0085F4]/20 border border-[#0085F4]/60 hover:border-[#00BBFF] text-white rounded-xs flex items-center justify-center gap-2 uppercase shadow-sm hover:shadow-[0_0_15px_rgba(0,187,255,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                >
                  <Phone className="w-3.5 h-3.5 text-[#00BBFF] group-hover:scale-110 transition-transform" />
                  <span>REQUEST FOUNDRY QUOTE</span>
                </button>
              </div>

              {/* Trust Badges Bar */}
              <div className="pt-5 border-t border-white/15 grid grid-cols-3 gap-3 font-mono text-[11px] font-bold text-blue-200">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00BBFF] shrink-0" />
                  <span>PE STAMPED SPECS</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00BBFF] shrink-0" />
                  <span>RAPID DISPATCH</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00BBFF] shrink-0" />
                  <span>ASTM A536 IRON</span>
                </div>
              </div>

            </div>

          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Floating Dynamic Thumbnail Carousel & Auto-Play Progress Strip */}
      <div className="w-full bg-[#071322]/90 backdrop-blur-md border-t border-[#0085F4]/30 relative mt-4">
        
        {/* GSAP Progress Bar across the top of thumbnail strip */}
        <div className="w-full h-1 bg-slate-800 overflow-hidden relative">
          {isPlaying && (
            <div
              ref={progressBarRef}
              className="h-full bg-gradient-to-r from-[#0085F4] via-[#00BBFF] to-white shadow-[0_0_10px_#00BBFF] w-0"
            />
          )}
        </div>

        <div className="container-industrial py-3 flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Left slide counter & state tag */}
          <div className="flex items-center gap-2.5 font-mono text-xs text-slate-300">
            <Layers className="w-4 h-4 text-[#00BBFF]" />
            <span className="font-bold text-white uppercase hidden sm:inline">FEATURED CAROUSEL</span>
            <span className="text-slate-500 hidden sm:inline">|</span>
            <span className="text-[#00BBFF] font-bold">SLIDE 0{currentSlide + 1}</span>
            <span className="text-slate-400">/ 0{slides.length}</span>
          </div>

          {/* Dynamic Scrollable Thumbnail Strip & Controls */}
          <div className="flex items-center gap-2 max-w-full">

            {/* Prev Arrow */}
            <button
              onClick={handlePrev}
              aria-label="Previous Slide"
              className="p-2.5 bg-slate-800/90 hover:bg-[#0085F4] text-slate-300 hover:text-white border border-slate-700 hover:border-[#00BBFF] hover:shadow-[0_0_12px_rgba(0,133,244,0.5)] transition-all duration-200 shrink-0"
              title="Previous Slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Left Strip Scroll Trigger */}
            <button
              onClick={() => scrollThumbnails('left')}
              className="p-2 text-slate-400 hover:text-[#00BBFF] hidden lg:block shrink-0 transition-colors"
              title="Scroll Thumbnails Left"
            >
              <Sliders className="w-3.5 h-3.5 rotate-90" />
            </button>

            {/* Dynamic Scrollable Thumbnail List Container */}
            <div
              ref={thumbnailContainerRef}
              className="flex items-center gap-2.5 overflow-x-auto scrollbar-none py-1.5 px-1 max-w-[280px] sm:max-w-[460px] md:max-w-[560px] lg:max-w-[640px] scroll-smooth"
            >
              {slides.map((slide, idx) => {
                const isActive = idx === currentSlide;
                return (
                  <button
                    key={slide.id}
                    ref={(el) => (thumbnailRefs.current[idx] = el)}
                    onClick={() => goToSlide(idx)}
                    className={`relative w-16 h-12 sm:w-20 sm:h-14 rounded-xs overflow-hidden border-2 transition-all duration-200 shrink-0 ${
                      isActive
                        ? 'border-[#00BBFF] ring-2 ring-[#00BBFF]/60 scale-105 opacity-100 shadow-[0_0_18px_rgba(0,187,255,0.6)]'
                        : 'border-slate-700 hover:border-[#00BBFF] hover:ring-2 hover:ring-[#00BBFF]/30 opacity-60 hover:opacity-100 hover:scale-105'
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Badge Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-[#0B192C]/85 text-[9px] font-mono font-bold text-center text-white py-0.5 truncate px-0.5">
                      {slide.badge}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Strip Scroll Trigger */}
            <button
              onClick={() => scrollThumbnails('right')}
              className="p-2 text-slate-400 hover:text-[#00BBFF] hidden lg:block shrink-0 transition-colors"
              title="Scroll Thumbnails Right"
            >
              <Sliders className="w-3.5 h-3.5 -rotate-90" />
            </button>

            {/* Pause / Play Toggle */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? 'Pause Auto-Play' : 'Start Auto-Play'}
              className={`p-2.5 transition-all duration-200 border shrink-0 ${
                isPlaying
                  ? 'bg-slate-800/90 hover:bg-[#0085F4] text-slate-300 hover:text-white border-slate-700 hover:border-[#00BBFF]'
                  : 'bg-[#0085F4] text-white border-[#00BBFF] animate-pulse shadow-[0_0_15px_rgba(0,133,244,0.6)]'
              }`}
              title={isPlaying ? 'Pause Auto Slider' : 'Resume Auto Slider'}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>

            {/* Next Arrow */}
            <button
              onClick={handleNext}
              aria-label="Next Slide"
              className="p-2.5 bg-slate-800/90 hover:bg-[#0085F4] text-slate-300 hover:text-white border border-slate-700 hover:border-[#00BBFF] hover:shadow-[0_0_12px_rgba(0,133,244,0.5)] transition-all duration-200 shrink-0"
              title="Next Slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

          </div>

        </div>
      </div>

    </section>
  );
};
