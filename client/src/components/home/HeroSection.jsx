import React, { useEffect, useRef } from 'react';
import { ArrowRight, Eye, Sparkles, Compass, ShieldCheck, Activity, ChevronDown } from 'lucide-react';
import siteConfig from '../../config/siteConfig';

export default function HeroSection() {
  const canvasRef = useRef(null);

  // Animated Particle & Constellation Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle nodes representing data points and telescope stars
    const particleCount = Math.min(Math.floor(width / 16), 75);
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.8 + 0.8,
        alpha: Math.random() * 0.6 + 0.2,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.15 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      // Draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, ${p.alpha})`;
        ctx.shadowColor = '#00D4FF';
        ctx.shadowBlur = 8;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-32 sm:pt-36 pb-16 overflow-hidden bg-[#0A1120]"
    >
      {/* Dynamic Animated Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0 opacity-60"
      />

      {/* Background Data Grid Mesh Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 z-0 pointer-events-none" />

      {/* Atmospheric Radial Gradient Light Beams */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-b from-[#00D4FF]/15 via-[#1AA3E0]/10 to-transparent blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-[#0B4C7A]/20 blur-[100px] rounded-full pointer-events-none z-0" />

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Foresight Tag */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#101A2E]/80 border border-[#00D4FF]/30 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(0,212,255,0.15)] animate-fadeIn">
          <div className="w-2 h-2 rounded-full bg-[#00D4FF] animate-ping" />
          <span className="text-xs font-semibold tracking-wider uppercase text-[#00D4FF]">
            vbrion analytics • foresight &amp; engineering
          </span>
          <span className="text-xs text-[#8B97AD] hidden sm:inline">|</span>
          <span className="text-xs text-[#C9D3E3] hidden sm:inline flex items-center gap-1">
            <Eye className="w-3.5 h-3.5 text-[#1AA3E0]" /> Looking Beyond The Curve
          </span>
        </div>

        {/* Main Headline: "engineering what's next" */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-montserrat font-extrabold tracking-tight text-white max-w-5xl leading-[1.08] mb-6">
          engineering <br className="hidden sm:inline" />
          <span className="text-gradient">
            what&apos;s next
          </span>
        </h1>

        {/* Sub-line embodying the brand positioning and telescope motif */}
        <p className="text-lg sm:text-xl md:text-2xl text-[#C9D3E3] max-w-3xl font-normal leading-relaxed mb-10 text-balance">
          We combine high-stakes strategic consulting with precision data, analytics, 
          and AI engineering—equipping forward-looking enterprises to anticipate market shifts, navigate complex governance, and build sustainable advantage.
        </p>

        {/* CTAs: "View Our Work" and "Get in Touch" */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
          <a
            href="#portfolio"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-[#00D4FF] via-[#1AA3E0] to-[#0B4C7A] rounded-xl shadow-cyan-glow hover:shadow-cyan-glow-lg transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] group"
          >
            <span>View Our Work</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-semibold text-[#C9D3E3] hover:text-white bg-[#101A2E]/80 hover:bg-[#14213A] border border-white/[0.1] hover:border-[#00D4FF]/40 rounded-xl transition-all duration-300 backdrop-blur-md"
          >
            <span>Get in Touch</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-[#00D4FF]/10 text-[#00D4FF] border border-[#00D4FF]/20">
              Direct
            </span>
          </a>
        </div>

        {/* Core Horizon Pill Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl w-full pt-4 border-t border-white/[0.08]">
          <div className="p-3 rounded-xl bg-[#101A2E]/60 border border-white/[0.05] text-left hover:border-[#00D4FF]/30 transition-colors">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#00D4FF] mb-1">
              <Compass className="w-3.5 h-3.5" />
              <span>Horizon Vision</span>
            </div>
            <p className="text-xs text-[#8B97AD]">Predictive foresight into emerging regulatory & market shifts</p>
          </div>

          <div className="p-3 rounded-xl bg-[#101A2E]/60 border border-white/[0.05] text-left hover:border-[#00D4FF]/30 transition-colors">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#1AA3E0] mb-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Risk &amp; Governance</span>
            </div>
            <p className="text-xs text-[#8B97AD]">Bulletproof compliance frameworks & board oversight</p>
          </div>

          <div className="p-3 rounded-xl bg-[#101A2E]/60 border border-white/[0.05] text-left hover:border-[#00D4FF]/30 transition-colors">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#00D4FF] mb-1">
              <Activity className="w-3.5 h-3.5" />
              <span>AI Engineering</span>
            </div>
            <p className="text-xs text-[#8B97AD]">Production machine learning & low-latency streaming models</p>
          </div>

          <div className="p-3 rounded-xl bg-[#101A2E]/60 border border-white/[0.05] text-left hover:border-[#00D4FF]/30 transition-colors">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#1AA3E0] mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Quantitative Rigor</span>
            </div>
            <p className="text-xs text-[#8B97AD]">Empirical evidence turning raw telemetry into bottom-line ROI</p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#about"
          className="mt-12 inline-flex flex-col items-center text-xs text-[#8B97AD] hover:text-[#00D4FF] transition-colors group"
          aria-label="Scroll to About section"
        >
          <span className="tracking-widest uppercase text-[10px] mb-1">Explore vbrion</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#00D4FF]" />
        </a>
      </div>
    </section>
  );
}
