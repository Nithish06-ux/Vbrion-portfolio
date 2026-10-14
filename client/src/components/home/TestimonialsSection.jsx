import React, { useState } from 'react';
import { clientLogos, testimonialsData } from '../../data/companyData';
import { Quote, ChevronLeft, ChevronRight, Star, Building2, Sparkles } from 'lucide-react';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <section id="clients" className="relative py-28 bg-[#0A1120] border-t border-white/[0.06] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-[#1AA3E0]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101A2E] border border-[#00D4FF]/30 text-xs font-semibold text-[#00D4FF] uppercase tracking-wider mb-4">
            <Building2 className="w-3.5 h-3.5" /> Partners &bull; Executive Testimonials
          </div>
          <h2 className="text-3xl sm:text-5xl font-montserrat font-extrabold text-white tracking-tight mb-4">
            Trusted by Leaders <br />
            <span className="text-gradient">Across Regulated Sectors</span>
          </h2>
          <div className="inline-block px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-300 font-mono text-xs">
            [PLACEHOLDER CLIENT MARQUEE &amp; TESTIMONIALS]
          </div>
        </div>

        {/* Client Logos Marquee Strip */}
        <div className="mb-20">
          <div className="text-center text-xs font-mono uppercase tracking-widest text-[#8B97AD] mb-6">
            Enterprise Client Archetypes [PLACEHOLDER]
          </div>
          <div className="relative overflow-hidden py-4 border-y border-white/[0.06] bg-[#101A2E]/40">
            <div className="flex space-x-8 animate-marquee whitespace-nowrap">
              {[...clientLogos, ...clientLogos].map((logo, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-[#14213A]/50 border border-white/[0.05] hover:border-[#00D4FF]/30 transition-colors"
                >
                  <Building2 className="w-4 h-4 text-[#00D4FF]" />
                  <span className="font-montserrat font-semibold text-sm text-[#C9D3E3]">
                    {logo.name}
                  </span>
                  <span className="text-[10px] text-[#8B97AD] font-mono px-2 py-0.5 rounded bg-white/[0.04]">
                    {logo.sector}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Quote Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-panel rounded-3xl p-8 sm:p-12 relative border border-white/[0.08] shadow-2xl">
            {/* Top quote icon & stars */}
            <div className="flex items-center justify-between mb-8">
              <div className="w-12 h-12 rounded-2xl bg-[#14213A] border border-white/[0.08] flex items-center justify-center text-[#00D4FF]">
                <Quote className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-1">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>

            {/* Testimonial Quote */}
            <p className="text-lg sm:text-2xl font-normal text-white leading-relaxed mb-8 italic">
              &ldquo;{currentTestimonial.quote}&rdquo;
            </p>

            {/* Author Info & Slider Controls */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-6 border-t border-white/[0.08] gap-4">
              <div>
                <h4 className="font-montserrat font-bold text-lg text-white">
                  {currentTestimonial.author}
                </h4>
                <p className="text-xs text-[#00D4FF] font-medium">
                  {currentTestimonial.title}
                </p>
                <p className="text-xs text-[#8B97AD]">
                  {currentTestimonial.company}
                </p>
              </div>

              {/* Slider Prev / Next buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={prevSlide}
                  className="w-11 h-11 rounded-xl bg-[#14213A] hover:bg-[#00D4FF]/20 border border-white/[0.08] hover:border-[#00D4FF]/40 flex items-center justify-center text-white transition-all"
                  aria-label="Previous quote"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-xs font-mono text-[#8B97AD]">
                  {currentIndex + 1} / {testimonialsData.length}
                </span>
                <button
                  onClick={nextSlide}
                  className="w-11 h-11 rounded-xl bg-[#14213A] hover:bg-[#00D4FF]/20 border border-white/[0.08] hover:border-[#00D4FF]/40 flex items-center justify-center text-white transition-all"
                  aria-label="Next quote"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
