import React from 'react';
import { industriesData } from '../../data/companyData';
import IconHelper from '../common/IconHelper';
import { Globe, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function IndustriesSection({ onSelectServiceForContact }) {
  const handleInquireIndustry = (industryTitle) => {
    if (onSelectServiceForContact) {
      onSelectServiceForContact(`${industryTitle} Analytics`);
    }
    const elem = document.getElementById('contact');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="industries" className="relative py-28 bg-[#0A1120] border-t border-white/[0.06] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-[#00D4FF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101A2E] border border-[#00D4FF]/30 text-xs font-semibold text-[#00D4FF] uppercase tracking-wider mb-3">
              <Globe className="w-3.5 h-3.5" /> Domain Specialization
            </div>
            <h2 className="text-3xl sm:text-5xl font-montserrat font-extrabold text-white tracking-tight">
              Industries Where Foresight <br />
              <span className="text-gradient">Dictates Survival</span>
            </h2>
          </div>
          <p className="text-[#C9D3E3] max-w-xl text-base sm:text-lg leading-relaxed">
            We operate in high-consequence verticals where regulatory compliance, operational velocity, and model precision are paramount.
          </p>
        </div>

        {/* 4 Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industriesData.map((ind) => (
            <div
              key={ind.id}
              className="glass-panel group rounded-3xl p-6 sm:p-7 relative overflow-hidden transition-all duration-300 hover:border-[#00D4FF]/40 hover:bg-[#14213A] flex flex-col justify-between"
            >
              <div>
                {/* Icon & Stat Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#14213A] border border-white/[0.08] flex items-center justify-center text-[#00D4FF] group-hover:scale-105 group-hover:shadow-cyan-glow transition-all">
                    <IconHelper name={ind.icon} className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold text-[#00D4FF] bg-[#00D4FF]/10 px-2.5 py-1 rounded-full border border-[#00D4FF]/20">
                    {ind.stats}
                  </span>
                </div>

                <h3 className="text-xl font-montserrat font-bold text-white mb-1 group-hover:text-[#00D4FF] transition-colors">
                  {ind.title}
                </h3>

                <p className="text-xs font-semibold text-[#1AA3E0] uppercase tracking-wider mb-3">
                  {ind.tagline}
                </p>

                <p className="text-xs sm:text-sm text-[#8B97AD] leading-relaxed mb-6">
                  {ind.description}
                </p>

                {/* Solutions List */}
                <div className="space-y-2 mb-6">
                  {ind.solutions.map((sol, idx) => (
                    <div key={idx} className="flex items-center text-xs text-[#C9D3E3]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00D4FF] mr-2 shrink-0" />
                      <span>{sol}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Inquire CTA */}
              <div className="pt-4 border-t border-white/[0.06]">
                <button
                  onClick={() => handleInquireIndustry(ind.title)}
                  className="w-full py-2.5 px-3 rounded-xl text-xs font-semibold text-[#C9D3E3] hover:text-white bg-[#101A2E] hover:bg-[#00D4FF]/20 border border-white/[0.06] hover:border-[#00D4FF]/40 transition-all flex items-center justify-center gap-2 group/b"
                >
                  <span>Explore {ind.title} Practice</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/b:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
