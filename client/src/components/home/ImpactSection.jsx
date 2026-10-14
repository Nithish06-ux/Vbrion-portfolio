import React, { useState, useEffect, useRef } from 'react';
import siteConfig from '../../config/siteConfig';
import { TrendingUp, Award, CheckCircle, Sparkles } from 'lucide-react';

function CounterItem({ targetValue, suffix, decimals = 0, isTriggered }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!isTriggered) return;
    let startTimestamp = null;
    const duration = 1600; // ms

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const val = ease * targetValue;
      setCurrent(decimals > 0 ? parseFloat(val.toFixed(decimals)) : Math.floor(val));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [isTriggered, targetValue, decimals]);

  return (
    <span>
      {decimals > 0 ? current.toFixed(decimals) : current}
      {suffix}
    </span>
  );
}

export default function ImpactSection() {
  const [hasTriggered, setHasTriggered] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasTriggered(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="impact"
      ref={sectionRef}
      className="relative py-28 bg-[#0A1120] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Ambient gradient lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#00D4FF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101A2E] border border-[#00D4FF]/30 text-xs font-semibold text-[#00D4FF] uppercase tracking-wider mb-4">
            <TrendingUp className="w-3.5 h-3.5" /> Empirical Benchmark Metrics
          </div>
          <h2 className="text-3xl sm:text-5xl font-montserrat font-extrabold text-white tracking-tight mb-4">
            Impact in Numbers <br />
            <span className="text-gradient">Engineered for Quantifiable Value</span>
          </h2>
          <p className="text-base text-[#C9D3E3]">
            Target metrics and benchmark performance outcomes delivered across enterprise deployments.
          </p>
          <div className="mt-2 inline-block px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-300 font-mono text-xs">
            [SAMPLE BENCHMARK PLACEHOLDER METRICS]
          </div>
        </div>

        {/* Counter Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.impactMetrics.map((item) => (
            <div
              key={item.id}
              className="glass-panel group rounded-3xl p-8 relative overflow-hidden text-center transition-all duration-300 hover:border-[#00D4FF]/40 hover:bg-[#14213A] hover:shadow-cyan-glow"
            >
              <div className="text-[10px] font-mono text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded inline-block mb-3 border border-amber-400/20">
                {item.note}
              </div>

              <div className="text-4xl sm:text-5xl lg:text-6xl font-montserrat font-black text-white tracking-tight mb-3 group-hover:text-[#00D4FF] transition-colors">
                <CounterItem
                  targetValue={item.value}
                  suffix={item.suffix}
                  decimals={item.decimals || 0}
                  isTriggered={hasTriggered}
                />
              </div>

              <div className="h-0.5 w-12 bg-gradient-to-r from-[#00D4FF] to-transparent mx-auto mb-4" />

              <p className="text-sm font-medium text-[#C9D3E3] leading-snug">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
