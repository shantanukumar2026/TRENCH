import React from 'react';
import { Globe2, Building, Wrench, Award } from 'lucide-react';

export const StatsSection: React.FC = () => {
  const stats = [
    {
      number: '50+',
      label: 'Countries Served',
      icon: Globe2,
      desc: 'Global civil infrastructure & municipal supply'
    },
    {
      number: '1,200+',
      label: 'Projects Completed',
      icon: Building,
      desc: 'Airports, seaports, highways & urban streetscapes'
    },
    {
      number: '80+',
      label: 'Product Configurations',
      icon: Wrench,
      desc: 'Trench covers, tree grates & catch basin frames'
    },
    {
      number: '30 Years',
      label: 'Manufacturing Experience',
      icon: Award,
      desc: 'Precision ductile & gray iron foundry casting'
    }
  ];

  return (
    <section id="statistics" className="py-20 bg-[#0A1628] bg-industrial-grid-dark text-white border-b border-slate-800 relative">
      <div className="container-industrial">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-900/80 border border-slate-800 rounded-2xl p-8 space-y-4 hover:border-[#F97316] transition-all shadow-xl group"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center group-hover:bg-[#F97316] transition-colors">
                  <Icon className="w-6 h-6 text-[#F97316] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white tracking-tight font-heading">
                    {s.number}
                  </div>
                  <div className="text-lg font-bold text-[#F97316] mt-1 font-heading">
                    {s.label}
                  </div>
                  <p className="text-xs text-slate-400 font-mono mt-2 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
