import React, { useState } from 'react';
import { processSteps } from '../../data/companyData';
import { GitBranch, Clock, CheckCircle2, ChevronRight, Zap } from 'lucide-react';

export default function ProcessSection() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  return (
    <section id="process" className="relative py-28 bg-[#0A1120] border-t border-white/[0.06] overflow-hidden">
      {/* Radial lighting background */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#00D4FF]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101A2E] border border-[#00D4FF]/30 text-xs font-semibold text-[#00D4FF] uppercase tracking-wider mb-4">
            <GitBranch className="w-3.5 h-3.5" /> How We Work &bull; Delivery Lifecycle
          </div>
          <h2 className="text-3xl sm:text-5xl font-montserrat font-extrabold text-white tracking-tight mb-4">
            From Horizon Discovery to <br />
            <span className="text-gradient">Production Endurance</span>
          </h2>
          <p className="text-base sm:text-lg text-[#C9D3E3] leading-relaxed">
            A disciplined, four-phase engineering framework designed to eliminate guesswork, mitigate delivery risk, and guarantee measurable business impact.
          </p>
        </div>

        {/* 4-Step Animated Timeline & Grid */}
        <div className="relative">
          {/* Connecting Cyan Gradient Line across desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#00D4FF]/40 to-transparent -translate-y-12 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {processSteps.map((step, idx) => {
              const isSelected = activeStepIndex === idx;

              return (
                <div
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`glass-panel cursor-pointer rounded-3xl p-7 relative overflow-hidden transition-all duration-300 flex flex-col justify-between ${
                    isSelected
                      ? 'border-[#00D4FF] bg-[#14213A] shadow-cyan-glow scale-[1.02]'
                      : 'border-white/[0.08] hover:border-white/[0.2] hover:bg-[#101A2E]/90'
                  }`}
                >
                  {/* Top glowing step badge */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center font-montserrat font-black text-xl transition-all ${
                          isSelected
                            ? 'bg-gradient-to-tr from-[#00D4FF] to-[#1AA3E0] text-[#0A1120] shadow-[0_0_15px_#00D4FF]'
                            : 'bg-[#101A2E] text-[#00D4FF] border border-white/[0.08]'
                        }`}
                      >
                        {step.step}
                      </div>

                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] text-[11px] font-mono text-[#8B97AD]">
                        <Clock className="w-3 h-3 text-[#00D4FF]" />
                        <span>{step.duration}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-montserrat font-bold text-white mb-2">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#8B97AD] leading-relaxed mb-6">
                      {step.description}
                    </p>
                  </div>

                  {/* Core Deliverable Card */}
                  <div className="p-3.5 rounded-2xl bg-[#0A1120]/70 border border-white/[0.06] mt-4">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#00D4FF] flex items-center gap-1 mb-1">
                      <Zap className="w-3 h-3" /> Key Milestone
                    </span>
                    <p className="text-xs text-[#C9D3E3] font-medium leading-snug">
                      {step.keyDeliverable}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Process Guarantee Note */}
        <div className="mt-12 text-center text-xs text-[#8B97AD]">
          <span>Sprint cadences are synchronized with weekly steering briefings and live progress observability.</span>
        </div>
      </div>
    </section>
  );
}
