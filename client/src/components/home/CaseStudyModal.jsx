import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, ArrowRight, CheckCircle2, Cpu, BarChart3, AlertCircle, Layers, ExternalLink } from 'lucide-react';

export default function CaseStudyModal({ project, isOpen, onClose, onDiscussProject }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl bg-[#101A2E] border border-white/[0.1] rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#0A1120]/80">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#00D4FF]/10 text-[#00D4FF] border border-[#00D4FF]/20">
              {project.industryTag}
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20">
              {project.badgeText}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#8B97AD] hover:text-white hover:bg-white/[0.08] rounded-xl transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Header Banner */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-montserrat font-bold text-white mb-3">
              {project.title}
            </h3>
            <p className="text-base text-[#00D4FF] font-medium leading-relaxed">
              Outcome: {project.outcome}
            </p>
          </div>

          {/* Project Thumbnail Image with Subtle Overlay */}
          <div className="relative h-60 sm:h-80 rounded-2xl overflow-hidden border border-white/[0.08]">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#101A2E] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4 bg-[#0A1120]/80 backdrop-blur-md p-3 rounded-xl border border-white/[0.08]">
              <p className="text-xs text-[#C9D3E3]">
                {project.summary}
              </p>
            </div>
          </div>

          {/* Quantified Results Grid */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#8B97AD] mb-3 flex items-center gap-1.5">
              <BarChart3 className="w-4 h-4 text-[#00D4FF]" /> Quantified Impact &amp; Results
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.results.map((res, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#14213A] border border-white/[0.06]">
                  <div className="text-2xl sm:text-3xl font-montserrat font-extrabold text-[#00D4FF] mb-1">
                    {res.metric}
                  </div>
                  <div className="text-xs text-[#8B97AD]">
                    {res.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Challenge, Approach & Solution Detailed Architecture */}
          <div className="space-y-6">
            <div className="p-5 rounded-2xl bg-[#0A1120]/60 border border-white/[0.05]">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-400 block mb-1">
                The Core Challenge
              </span>
              <p className="text-sm text-[#C9D3E3] leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0A1120]/60 border border-white/[0.05]">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1AA3E0] block mb-1">
                Strategic Approach
              </span>
              <p className="text-sm text-[#C9D3E3] leading-relaxed">
                {project.approach}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0A1120]/60 border border-white/[0.05]">
              <span className="text-xs font-bold uppercase tracking-wider text-[#00D4FF] block mb-1">
                Engineered Solution
              </span>
              <p className="text-sm text-[#C9D3E3] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Tech Stack Badges */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#8B97AD] mb-3 flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-[#00D4FF]" /> Technologies &amp; Tooling Deployed
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techUsed.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-[#14213A] text-white border border-white/[0.08]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between p-6 border-t border-white/[0.08] bg-[#0A1120]/90 gap-4">
          <div className="flex items-center gap-4">
            <Link
              to={`/project/${project.id}`}
              className="text-xs font-semibold text-[#00D4FF] hover:underline inline-flex items-center gap-1.5"
            >
              <span>Open Dedicated Page &amp; Shareable URL</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
          <button
            onClick={() => {
              onClose();
              if (onDiscussProject) onDiscussProject(project.title);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#00D4FF] via-[#1AA3E0] to-[#0B4C7A] shadow-cyan-glow hover:shadow-cyan-glow-lg transition-all"
          >
            <span>Discuss This Solution With Us</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
