import React from 'react';
import { capabilitiesData } from '../../data/companyData';
import IconHelper from '../common/IconHelper';
import { Cpu, Sparkles, Layers, CheckCircle } from 'lucide-react';

export default function CapabilitiesSection() {
  return (
    <section id="capabilities" className="relative py-28 bg-[#0A1120] border-t border-white/[0.06] overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-[#00D4FF]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101A2E] border border-[#00D4FF]/30 text-xs font-semibold text-[#00D4FF] uppercase tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5" /> Capabilities &amp; Technology Ecosystem
          </div>
          <h2 className="text-3xl sm:text-5xl font-montserrat font-extrabold text-white tracking-tight mb-4">
            Deep Technical Mastery. <br />
            <span className="text-gradient">Production-Grade Rigor.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#C9D3E3] leading-relaxed">
            We don’t experiment with unproven toys on your infrastructure. Our engineers harness battle-tested tools across data engineering, neural architectures, and distributed systems.
          </p>
        </div>

        {/* 6 Capabilities Visual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilitiesData.map((cap) => (
            <div
              key={cap.id}
              className="glass-panel group rounded-3xl p-8 relative overflow-hidden transition-all duration-300 hover:border-[#00D4FF]/40 hover:bg-[#14213A] flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00D4FF]/5 rounded-bl-full group-hover:bg-[#00D4FF]/10 transition-colors pointer-events-none" />

              <div>
                {/* Icon & Category Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-[#14213A] border border-white/[0.08] flex items-center justify-center text-[#00D4FF] group-hover:scale-105 group-hover:shadow-cyan-glow transition-all">
                    <IconHelper name={cap.icon} className="w-7 h-7" />
                  </div>
                  <span className="text-[11px] font-mono text-[#8B97AD] px-2.5 py-1 rounded bg-white/[0.04]">
                    Tier-1 Stack
                  </span>
                </div>

                <h3 className="text-xl font-montserrat font-bold text-white mb-1.5 group-hover:text-[#00D4FF] transition-colors">
                  {cap.title}
                </h3>

                <p className="text-xs font-medium text-[#1AA3E0] uppercase tracking-wider mb-3">
                  {cap.subtitle}
                </p>

                <p className="text-sm text-[#8B97AD] leading-relaxed mb-6">
                  {cap.description}
                </p>
              </div>

              {/* Tool & Tech Badges */}
              <div className="pt-4 border-t border-white/[0.06]">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#C9D3E3] block mb-2.5">
                  Frameworks &amp; Tooling:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {cap.badges.map((badge, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-[#101A2E] text-[#C9D3E3] border border-white/[0.08] hover:border-[#00D4FF]/40 hover:text-white transition-colors"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
