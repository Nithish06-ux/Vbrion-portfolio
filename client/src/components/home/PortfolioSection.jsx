import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { portfolioCategories, portfolioProjects } from '../../data/portfolioData';
import CaseStudyModal from './CaseStudyModal';
import { ArrowRight, Eye, Sparkles, Filter, ExternalLink } from 'lucide-react';

export default function PortfolioSection({ onSelectServiceForContact }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filteredProjects = selectedCategory === 'all'
    ? portfolioProjects
    : portfolioProjects.filter(p => p.category === selectedCategory);

  const handleOpenCaseStudy = (project) => {
    setActiveModalProject(project);
  };

  const handleDiscussProject = (projectTitle) => {
    if (onSelectServiceForContact) {
      onSelectServiceForContact(projectTitle);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="portfolio" className="relative py-28 bg-[#0A1120] border-t border-white/[0.06] overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#00D4FF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#0B4C7A]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101A2E] border border-[#00D4FF]/30 text-xs font-semibold text-[#00D4FF] uppercase tracking-wider mb-3">
              <Eye className="w-3.5 h-3.5" /> Proven Engineering &bull; Realized Outcomes
            </div>
            <h2 className="text-3xl sm:text-5xl font-montserrat font-extrabold text-white tracking-tight">
              Featured Case Studies &amp; <br />
              <span className="text-gradient">Engineered Milestones</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm sm:text-base text-[#8B97AD]">
              Explore sample architecture blueprints and quant outcomes delivered across regulated industries.
              <span className="block text-xs text-amber-400 mt-1 font-mono">
                [Note: 6 sample placeholder case studies marked for presentation]
              </span>
            </p>
          </div>
        </div>

        {/* Filter Tabs Bar (All | Consulting | Fintech | Healthcare | Banking | Education | Business Development) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {portfolioCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-[#00D4FF] to-[#1AA3E0] text-white shadow-cyan-glow'
                  : 'bg-[#101A2E] text-[#8B97AD] hover:text-white hover:bg-[#14213A] border border-white/[0.05]'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="glass-panel group rounded-3xl overflow-hidden border border-white/[0.08] hover:border-[#00D4FF]/40 transition-all duration-300 flex flex-col justify-between hover:shadow-card-elevated"
            >
              <div>
                {/* Thumbnail Image with Tag */}
                <div className="relative h-52 sm:h-56 overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101A2E] via-transparent to-transparent opacity-90" />
                  
                  {/* Industry Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#0A1120]/80 backdrop-blur-md text-[#00D4FF] border border-[#00D4FF]/30">
                      {project.industryTag}
                    </span>
                  </div>

                  {/* Sample Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-black/60 backdrop-blur-md text-amber-300 border border-amber-500/30">
                      {project.badgeText}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-montserrat font-bold text-white mb-2.5 group-hover:text-[#00D4FF] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  {/* One-line outcome as specified */}
                  <div className="p-3 rounded-xl bg-[#14213A]/60 border border-white/[0.05] mb-4">
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-[#00D4FF] block mb-0.5">
                      Key Outcome
                    </span>
                    <p className="text-xs text-[#C9D3E3] font-medium leading-relaxed">
                      {project.outcome}
                    </p>
                  </div>

                  {/* Tech stack badge pills */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.techUsed.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-[#14213A] text-[#8B97AD] border border-white/[0.05]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techUsed.length > 4 && (
                      <span className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-[#14213A] text-[#00D4FF]">
                        +{project.techUsed.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions: Dynamic Route & Quick View */}
              <div className="px-6 pb-6 pt-2 flex items-center gap-2">
                <Link
                  to={`/project/${project.id}`}
                  className="flex-1 py-3 px-4 rounded-xl text-xs font-bold text-white bg-[#14213A] hover:bg-gradient-to-r hover:from-[#00D4FF] hover:to-[#1AA3E0] hover:shadow-cyan-glow border border-white/[0.08] hover:border-transparent transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
                <button
                  onClick={() => handleOpenCaseStudy(project)}
                  className="p-3 rounded-xl text-xs text-[#8B97AD] hover:text-[#00D4FF] bg-[#14213A] hover:bg-[#101A2E] border border-white/[0.08] transition-colors"
                  title="Quick modal preview"
                  aria-label={`Quick preview for ${project.title}`}
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Global CTA Banner beneath Portfolio */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#101A2E] via-[#14213A] to-[#101A2E] border border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl sm:text-2xl font-montserrat font-bold text-white mb-2">
              Ready to engineer your own breakthrough?
            </h4>
            <p className="text-sm text-[#8B97AD] max-w-xl">
              Connect with our principal architects to scope an empirical proof-of-concept tailored to your operational ecosystem.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#00D4FF] to-[#0B4C7A] shadow-cyan-glow hover:scale-105 transition-transform"
          >
            Initiate Project Discovery
          </a>
        </div>
      </div>

      {/* Case Study Modal Detail View */}
      <CaseStudyModal
        project={activeModalProject}
        isOpen={!!activeModalProject}
        onClose={() => setActiveModalProject(null)}
        onDiscussProject={handleDiscussProject}
      />
    </section>
  );
}
