import React from 'react';
import { Quote, Star, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const ContractorTestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "Trench Unlimited steel boxes and PE tabulated data made our 24-foot deep sewer main expansion 100% compliant with zero safety holds from municipal inspectors.",
      author: "Marcus Vance",
      role: "Senior Civil Superintendent",
      company: "Midwest Infrastructure Contractors"
    },
    {
      quote: "The aluminum hydraulic shores allowed our crews to perform spot water line taps completely from above ground. Fast setup, lightweight, and zero collapse risk.",
      author: "Sarah Jenkins, PE",
      role: "Director of Municipal Waterworks",
      company: "Regional Utilities District"
    },
    {
      quote: "Their Class E polymer concrete channels and AASHTO H-20 road plates handled heavy freight truck loads over active street trenches without shifting.",
      author: "David Thorne",
      role: "Project Director",
      company: "Thorpe Heavy Civil Development"
    }
  ];

  return (
    <section className="py-20 bg-[#F8F8F8] border-b border-[#E2E8F0] relative">
      <div className="container-industrial space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#0085F4] text-xs font-mono font-bold text-[#004AAD]">
            <Quote className="w-4 h-4 text-[#0085F4]" />
            <span>VERIFIED FIELD TESTIMONIALS</span>
          </div>
          <h2 className="text-section-title text-[#004AAD] uppercase">
            TRUSTED BY <span className="text-[#0085F4]">CONTRACTORS &amp; MUNICIPALITIES</span>
          </h2>
          <p className="text-body-large text-[#475569] font-medium">
            Real feedback from civil superintendents, licensed professional engineers, and municipal waterworks directors.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white border-2 border-[#E2E8F0] p-8 shadow-md hover:border-[#0085F4] transition-all flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex gap-1 text-[#0085F4]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#0085F4]" />
                  ))}
                </div>
                <p className="text-sm font-medium text-[#475569] italic leading-relaxed font-sans">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#E2E8F0] font-mono text-xs">
                <div className="font-extrabold text-[#004AAD] text-sm uppercase">{t.author}</div>
                <div className="text-[#0085F4] font-bold">{t.role}</div>
                <div className="text-[#475569] text-[11px]">{t.company}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
