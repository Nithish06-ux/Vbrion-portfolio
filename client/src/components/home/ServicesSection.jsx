import React, { useState } from 'react';
import { servicesData } from '../../data/servicesData';
import IconHelper from '../common/IconHelper';
import { ArrowRight, CheckCircle2, ChevronRight, Layers, Sparkles } from 'lucide-react';

export default function ServicesSection({ onSelectServiceForContact }) {
  const [activeDivisionTab, setActiveDivisionTab] = useState('all');

  const handleInquire = (serviceTitle) => {
    if (onSelectServiceForContact) {
      onSelectServiceForContact(serviceTitle);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentDivisions = activeDivisionTab === 'all'
    ? servicesData.divisions
    : servicesData.divisions.filter(d => d.id === activeDivisionTab);

  return (
    <section id="services" className="relative py-28 bg-[#0A1120] border-t border-white/[0.06] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#14213A]/30 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101A2E] border border-[#00D4FF]/30 text-xs font-semibold text-[#00D4FF] uppercase tracking-wider mb-4 shadow-sm">
            <Layers className="w-3.5 h-3.5" /> What We Do &bull; Two Dedicated Divisions
          </div>
          <h2 className="text-3xl sm:text-5xl font-montserrat font-extrabold text-white tracking-tight mb-4">
            Unified Consulting &amp; <br />
            <span className="text-gradient">Analytical Engineering</span>
          </h2>
          <p className="text-base sm:text-lg text-[#C9D3E3] leading-relaxed">
            From boardroom governance mandates to sub-second streaming inference models, our dual-division model provides full-spectrum strategic clarity and technological execution.
          </p>

          {/* Division Selector Tabs */}
          <div className="flex items-center justify-center gap-2 mt-8 p-1.5 bg-[#101A2E] border border-white/[0.08] rounded-2xl max-w-md mx-auto">
            <button
              onClick={() => setActiveDivisionTab('all')}
              className={`flex-1 py-2 px-3 text-xs sm:text-sm font-semibold rounded-xl transition-all ${
                activeDivisionTab === 'all'
                  ? 'bg-gradient-to-r from-[#00D4FF] to-[#1AA3E0] text-white shadow-cyan-glow'
                  : 'text-[#8B97AD] hover:text-white'
              }`}
            >
              All 11 Practices
            </button>
            <button
              onClick={() => setActiveDivisionTab('consulting')}
              className={`flex-1 py-2 px-3 text-xs sm:text-sm font-semibold rounded-xl transition-all ${
                activeDivisionTab === 'consulting'
                  ? 'bg-gradient-to-r from-[#00D4FF] to-[#1AA3E0] text-white shadow-cyan-glow'
                  : 'text-[#8B97AD] hover:text-white'
              }`}
            >
              Consulting (6)
            </button>
            <button
              onClick={() => setActiveDivisionTab('analytical')}
              className={`flex-1 py-2 px-3 text-xs sm:text-sm font-semibold rounded-xl transition-all ${
                activeDivisionTab === 'analytical'
                  ? 'bg-gradient-to-r from-[#00D4FF] to-[#1AA3E0] text-white shadow-cyan-glow'
                  : 'text-[#8B97AD] hover:text-white'
              }`}
            >
              Analytical (5)
            </button>
          </div>
        </div>

        {/* Divisions Presentation */}
        <div className="space-y-16">
          {currentDivisions.map((division) => (
            <div
              key={division.id}
              className="p-6 sm:p-10 rounded-3xl bg-[#101A2E]/50 border border-white/[0.07] backdrop-blur-sm relative"
            >
              {/* Division Header Banner */}
              <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-8 border-b border-white/[0.06] gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#00D4FF]/10 text-[#00D4FF] border border-[#00D4FF]/20">
                      {division.badge}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-montserrat font-bold text-white">
                      {division.name}
                    </h3>
                  </div>
                  <p className="text-sm text-[#8B97AD] max-w-2xl mt-1">
                    {division.description}
                  </p>
                </div>

                <div className="text-xs text-[#00D4FF] font-medium bg-[#14213A] px-4 py-2 rounded-xl border border-white/[0.05] self-start md:self-auto">
                  {division.services.length} Specialized Service Lines
                </div>
              </div>

              {/* Service Cards Grid */}
              <div className={`grid grid-cols-1 md:grid-cols-2 ${division.id === 'consulting' ? 'lg:grid-cols-3' : 'lg:grid-cols-3'} gap-6`}>
                {division.services.map((service) => (
                  <div
                    key={service.id}
                    className="glass-panel group rounded-2xl p-6 relative overflow-hidden transition-all duration-300 hover:border-[#00D4FF]/40 hover:bg-[#14213A] flex flex-col justify-between"
                  >
                    {/* Top gradient highlight on hover */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00D4FF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div>
                      {/* Icon & Title Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-[#14213A] border border-white/[0.08] flex items-center justify-center text-[#00D4FF] group-hover:scale-105 group-hover:border-[#00D4FF]/50 transition-all">
                          <IconHelper name={service.icon} className="w-6 h-6" />
                        </div>
                        <span className="text-[11px] font-mono text-[#8B97AD] px-2 py-0.5 rounded bg-white/[0.03]">
                          #{service.id}
                        </span>
                      </div>

                      <h4 className="text-lg font-montserrat font-bold text-white mb-2 group-hover:text-[#00D4FF] transition-colors">
                        {service.title}
                      </h4>

                      <p className="text-xs sm:text-sm text-[#8B97AD] line-clamp-2 mb-4 leading-relaxed">
                        {service.shortDesc}
                      </p>

                      {/* Hover Reveal: 3 Key Offerings */}
                      <div className="mt-4 pt-4 border-t border-white/[0.06]">
                        <span className="text-[11px] uppercase tracking-wider font-semibold text-[#00D4FF] block mb-2">
                          Key Deliverables:
                        </span>
                        <ul className="space-y-1.5">
                          {service.offerings.map((offering, idx) => (
                            <li key={idx} className="flex items-start text-xs text-[#C9D3E3]">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#00D4FF] mr-2 shrink-0 mt-0.5" />
                              <span className="leading-snug">{offering}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Bottom Action / Quick Inquire */}
                    <div className="mt-6 pt-3 border-t border-white/[0.05] flex items-center justify-between">
                      <button
                        onClick={() => handleInquire(service.title)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00D4FF] hover:text-white transition-colors"
                      >
                        <span>Consult on {service.title}</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
