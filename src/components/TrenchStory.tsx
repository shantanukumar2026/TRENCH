import React from 'react';
import { ShieldCheck, AlertTriangle, CheckCircle2, ArrowRight, Layers, HardHat, Ruler, ArrowDown } from 'lucide-react';

interface TrenchStoryProps {
  onExploreProducts: () => void;
  onRequestQuote: () => void;
}

export const TrenchStory: React.FC<TrenchStoryProps> = ({ onExploreProducts, onRequestQuote }) => {
  return (
    <div className="pt-24 bg-white">

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 1: FULL-WIDTH HERO — "What Is a Trench?"
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        {/* Full-bleed background image */}
        <div className="absolute inset-0">
          <img
            src="/greates/TI-001.jpg"
            alt="Active trench excavation site"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#004AAD]/90 via-[#004AAD]/70 to-transparent"></div>
        </div>

        <div className="container-custom relative z-10 py-28 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/15 border border-white/30 mb-6">
            <Layers className="w-4 h-4 text-white" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-white">
              UNDERSTANDING THE TRENCH
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-extrabold text-white font-heading uppercase leading-tight mb-6">
            WHAT IS <br /><span className="text-[#00BBFF]">A TRENCH?</span>
          </h1>

          <p className="text-lg text-blue-100 font-medium leading-relaxed max-w-2xl mb-4">
            A trench is a narrow excavation cut into the earth — deeper than it is wide, and no more than 15 feet across at the bottom. Every water line, sewer main, gas pipe, fiber optic cable, and electrical conduit running beneath America's streets was installed inside one.
          </p>
          <p className="text-base text-blue-200 font-medium leading-relaxed max-w-2xl">
            Without trenches, modern civilization stops. No running water. No natural gas. No drainage. No communications. The trench is where infrastructure begins.
          </p>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════
          SECTION 2: THE PROBLEM — "Why Trenches Are Dangerous"
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-[#FFF8F0] border-y-2 border-orange-200">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left: The danger */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-orange-100 border border-orange-300">
                <AlertTriangle className="w-4 h-4 text-orange-600" />
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-orange-700">
                  THE HIDDEN DANGER
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#004AAD] font-heading uppercase leading-tight">
                CAVE-INS KILL <br /><span className="text-[#D90429]">IN SECONDS.</span>
              </h2>

              <p className="text-base text-[#004AAD] font-medium leading-relaxed">
                One cubic yard of soil weighs approximately <strong>3,000 pounds</strong> — as much as a compact car. When trench walls collapse, workers are buried instantly under thousands of pounds of earth.
              </p>

              <p className="text-base text-[#004AAD] font-medium leading-relaxed">
                Cave-ins are the <strong>#1 cause of death</strong> in trenching operations. OSHA reports that trench collapses are <strong>2.5x more likely to be fatal</strong> than other construction accidents. Many victims suffocate within minutes.
              </p>

              {/* Key stats */}
              <div className="grid grid-cols-3 gap-4 pt-2">
                <div className="p-4 bg-white border-2 border-orange-200 text-center">
                  <div className="text-2xl font-extrabold text-[#D90429]">3,000</div>
                  <div className="text-[10px] font-mono font-bold text-[#004AAD] uppercase mt-1">LBS PER CUBIC YARD</div>
                </div>
                <div className="p-4 bg-white border-2 border-orange-200 text-center">
                  <div className="text-2xl font-extrabold text-[#D90429]">5 FT</div>
                  <div className="text-[10px] font-mono font-bold text-[#004AAD] uppercase mt-1">OSHA PROTECTION REQUIRED</div>
                </div>
                <div className="p-4 bg-white border-2 border-orange-200 text-center">
                  <div className="text-2xl font-extrabold text-[#D90429]">2.5×</div>
                  <div className="text-[10px] font-mono font-bold text-[#004AAD] uppercase mt-1">MORE LIKELY FATAL</div>
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative">
              <img
                src="/greates/trench-grate-horizontal-view (10).jpeg"
                alt="Deep trench excavation requiring cave-in protection"
                className="w-full h-[440px] object-cover shadow-lg border-2 border-orange-200"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-3 border border-orange-200">
                <p className="text-xs font-mono font-bold text-[#D90429] uppercase">
                  OSHA 29 CFR 1926 SUBPART P — Any trench 5 feet deep or more requires a protective system.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════
          SECTION 3: THE SOLUTION — "How Trench Protection Works"
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#F4F8FF] border border-[#0085F4]/30 mx-auto">
              <ShieldCheck className="w-4 h-4 text-[#0085F4]" />
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#004AAD]">
                THE PROTECTIVE SYSTEMS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#004AAD] font-heading uppercase leading-tight">
              HOW WE PROTECT <span className="text-[#0085F4]">EVERY CREW</span>
            </h2>
            <p className="text-base text-blue-600 font-medium leading-relaxed">
              OSHA mandates one of four methods for any trench 5 feet or deeper. Here's what they look like in the field.
            </p>
          </div>

          {/* 4 Protection Methods — Visual Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Method 1: Shielding */}
            <div className="group border-2 border-blue-200 hover:border-[#0066FF] bg-white transition-all overflow-hidden">
              <img
                src="/greates/pre-trench-01.JPG"
                alt="Steel trench shield box protecting workers"
                className="w-full h-56 object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 bg-[#004AAD] text-white text-[10px] font-mono font-bold">01</span>
                  <h3 className="text-lg font-extrabold text-[#004AAD] font-heading uppercase">SHIELDING</h3>
                </div>
                <p className="text-sm text-blue-600 font-medium leading-relaxed">
                  Heavy steel trench boxes (trench shields) are lowered into the excavation to create a protective cage around workers. They don't prevent the collapse — they absorb the force and protect the crew inside. The most common method on U.S. jobsites.
                </p>
                <div className="text-xs font-mono font-bold text-[#0085F4]">EQUIPMENT: Steel Trench Boxes, Aluminum Shields</div>
              </div>
            </div>

            {/* Method 2: Shoring */}
            <div className="group border-2 border-blue-200 hover:border-[#0066FF] bg-white transition-all overflow-hidden">
              <img
                src="/greates/trench-grates-img-diagonal-view (7).jpeg"
                alt="Hydraulic shoring rails bracing trench walls"
                className="w-full h-56 object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 bg-[#004AAD] text-white text-[10px] font-mono font-bold">02</span>
                  <h3 className="text-lg font-extrabold text-[#004AAD] font-heading uppercase">SHORING</h3>
                </div>
                <p className="text-sm text-blue-600 font-medium leading-relaxed">
                  Hydraulic or pneumatic systems are installed to actively push against the trench walls, preventing soil from moving. Aluminum hydraulic shores can be installed entirely from above ground — the crew never enters an unprotected trench.
                </p>
                <div className="text-xs font-mono font-bold text-[#0085F4]">EQUIPMENT: Hydraulic Shores, Pneumatic Struts</div>
              </div>
            </div>

            {/* Method 3: Slide Rail */}
            <div className="group border-2 border-blue-200 hover:border-[#0066FF] bg-white transition-all overflow-hidden">
              <img
                src="/greates/trench-precast02.JPG"
                alt="Modular slide rail system in deep excavation"
                className="w-full h-56 object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 bg-[#004AAD] text-white text-[10px] font-mono font-bold">03</span>
                  <h3 className="text-lg font-extrabold text-[#004AAD] font-heading uppercase">SLIDE RAIL SYSTEMS</h3>
                </div>
                <p className="text-sm text-blue-600 font-medium leading-relaxed">
                  For deeper excavations (15–30+ feet), modular slide rail panels are pushed into the ground as the excavator digs. No vibration, no ground disturbance to neighboring structures. The modern replacement for driven sheet piling.
                </p>
                <div className="text-xs font-mono font-bold text-[#0085F4]">EQUIPMENT: Modular Slide Rail Panels & Posts</div>
              </div>
            </div>

            {/* Method 4: Access & Egress */}
            <div className="group border-2 border-blue-200 hover:border-[#0066FF] bg-white transition-all overflow-hidden">
              <img
                src="/greates/TI-003.JPG"
                alt="Trench access ladders and road plates"
                className="w-full h-56 object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 bg-[#004AAD] text-white text-[10px] font-mono font-bold">04</span>
                  <h3 className="text-lg font-extrabold text-[#004AAD] font-heading uppercase">ACCESS & ROAD PLATES</h3>
                </div>
                <p className="text-sm text-blue-600 font-medium leading-relaxed">
                  OSHA requires a safe exit within 25 feet of every worker. Trench ladders with walk-through handrails provide compliant access. Steel road plates bridge open trenches so traffic can safely pass over active excavations.
                </p>
                <div className="text-xs font-mono font-bold text-[#0085F4]">EQUIPMENT: Trench Ladders, AASHTO H-20 Road Plates</div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════
          SECTION 4: SOIL CLASSIFICATION — "Know Your Ground"
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-[#F8FAFC] border-y-2 border-blue-200">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Left: Explanation */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-[#0085F4]/30">
                <Ruler className="w-4 h-4 text-[#0085F4]" />
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#004AAD]">
                  OSHA SOIL CLASSIFICATION
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#004AAD] font-heading uppercase leading-tight">
                EVERY TRENCH STARTS <br /><span className="text-[#0085F4]">WITH THE SOIL.</span>
              </h2>

              <p className="text-base text-blue-600 font-medium leading-relaxed">
                Before a single piece of shoring equipment is selected, a competent person must classify the soil. OSHA defines three soil types — each requiring different levels of protection:
              </p>

              <img
                src="/greates/trench-grates-vertical-view (3).jpeg"
                alt="Soil layers in excavation"
                className="w-full h-64 object-cover shadow-md border-2 border-blue-200"
              />
            </div>

            {/* Right: 3 Soil Types */}
            <div className="space-y-4">
              {/* Type A */}
              <div className="p-6 bg-white border-2 border-[#004AAD] hover:border-[#0085F4] transition-colors shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-10 h-10 flex items-center justify-center bg-[#004AAD] text-white font-extrabold text-sm font-mono">A</span>
                  <div>
                    <h3 className="text-base font-extrabold text-[#004AAD] font-heading uppercase">TYPE A — STABLE</h3>
                    <span className="text-xs font-mono text-[#0085F4] font-bold">&gt; 1.5 TONS/SQ FT COMPRESSIVE STRENGTH</span>
                  </div>
                </div>
                <p className="text-sm text-blue-900 font-medium leading-relaxed">
                  Clay, silty clay, and hardpan. The most stable soil type. Trenches in Type A soil may use simpler protection systems like sloping at 3/4:1 ratio. Hydraulic shores are commonly used.
                </p>
              </div>

              {/* Type B */}
              <div className="p-6 bg-white border-2 border-[#0085F4] hover:border-[#00BBFF] transition-colors shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-10 h-10 flex items-center justify-center bg-[#0085F4] text-white font-extrabold text-sm font-mono">B</span>
                  <div>
                    <h3 className="text-base font-extrabold text-[#004AAD] font-heading uppercase">TYPE B — MODERATE</h3>
                    <span className="text-xs font-mono text-[#0085F4] font-bold">0.5 – 1.5 TONS/SQ FT COMPRESSIVE STRENGTH</span>
                  </div>
                </div>
                <p className="text-sm text-blue-900 font-medium leading-relaxed">
                  Silt, sandy loam, and medium clay. Requires steeper sloping (1:1) or active shoring systems. Previously disturbed soil, even if originally Type A, is automatically classified as Type B.
                </p>
              </div>

              {/* Type C */}
              <div className="p-6 bg-white border-2 border-[#003380] hover:border-[#0085F4] transition-colors shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-10 h-10 flex items-center justify-center bg-[#003380] text-white font-extrabold text-sm font-mono">C</span>
                  <div>
                    <h3 className="text-base font-extrabold text-[#004AAD] font-heading uppercase">TYPE C — UNSTABLE</h3>
                  </div>
                </div>
                <p className="text-sm text-blue-600 font-medium leading-relaxed">
                  Gravel, sand, submerged soil, and any soil from which water is freely seeping. The most dangerous classification. Requires maximum protection — heavy steel trench boxes or slide rail systems are mandatory. Benching is not allowed.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════
          SECTION 5: WHAT WE DO — "Trench Unlimited"
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left: Image */}
            <div className="relative">
              <img
                src="/greates/trench-grate-horizontal-view (15).jpeg"
                alt="Trench shoring equipment on American construction site"
                className="w-full h-[440px] object-cover shadow-lg border-2 border-blue-200"
              />
            </div>

            {/* Right: Our role */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#F4F8FF] border border-[#0085F4]/30">
                <HardHat className="w-4 h-4 text-[#0085F4]" />
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#004AAD]">
                  ABOUT TRENCH UNLIMITED™
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#004AAD] font-heading uppercase leading-tight">
                WE SUPPLY <span className="text-[#0085F4]">EVERYTHING TRENCH.</span>
              </h2>

              <p className="text-base text-blue-600 font-medium leading-relaxed">
                Trench Unlimited is a U.S.-based supplier of trench shoring, shielding, and safety equipment for contractors, municipalities, and utility authorities building America's underground infrastructure.
              </p>

              <div className="space-y-3">
                {[
                  'OSHA 1926 Subpart P certified steel trench shields & boxes',
                  '6061-T6 aluminum hydraulic shoring systems',
                  'Modular slide rail systems for deep excavation',
                  'OSHA compliant trench access ladders & platforms',
                  'AASHTO H-20 rated steel road plates for trench bridging',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#0085F4] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#004AAD] font-bold">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={onExploreProducts}
                  className="btn-primary py-4 px-8 text-sm"
                >
                  VIEW ALL EQUIPMENT
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onRequestQuote}
                  className="btn-secondary py-4 px-8 text-sm"
                >
                  REQUEST A QUOTE
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
