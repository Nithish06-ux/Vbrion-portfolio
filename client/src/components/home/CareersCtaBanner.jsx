import React, { useState } from 'react';
import { ArrowRight, Users, Sparkles, Briefcase, FileText, CheckCircle2, X, Send, Download } from 'lucide-react';
import siteConfig from '../../config/siteConfig';
import { trackCtaEvent } from '../../services/apiService';
import { LinkedInIcon } from '../common/SocialIcons';

export default function CareersCtaBanner({ onSelectServiceForContact }) {
  const [careersModalOpen, setCareersModalOpen] = useState(false);
  const [deckDownloaded, setDeckDownloaded] = useState(false);

  const sampleRoles = [
    {
      id: 1,
      title: 'Principal AI / ML Research Engineer',
      location: 'Mumbai / Hybrid',
      type: 'Full-time',
      tag: '[OPEN ROLE - PLACEHOLDER]',
      skills: ['PyTorch', 'Distributed Systems', 'Low-Latency Inference']
    },
    {
      id: 2,
      title: 'Senior Risk & Regulatory Governance Consultant',
      location: 'Mumbai / Hybrid',
      type: 'Full-time',
      tag: '[OPEN ROLE - PLACEHOLDER]',
      skills: ['ERM Frameworks', 'Statutory Compliance', 'BFSI Advisory']
    },
    {
      id: 3,
      title: 'Lead Healthcare Analytics Architect',
      location: 'Remote / India',
      type: 'Full-time',
      tag: '[OPEN ROLE - PLACEHOLDER]',
      skills: ['FHIR', 'Databricks', 'Predictive Clinical Models']
    }
  ];

  const handleDownloadDeck = () => {
    setDeckDownloaded(true);
    // Track CTA download in DB
    trackCtaEvent('deck_download', 'Executive Capabilities Overview Deck', 'careers_banner');

    // Simulate generation/download of executive capabilities overview
    const element = document.createElement('a');
    const file = new Blob([
      `vbrion analytics — Executive Capabilities Overview\n\nTagline: engineering what's next\nContact: ${siteConfig.contact.phone} | ${siteConfig.contact.email}\nAddress: ${siteConfig.contact.address.fullFormatted}\n\n11 Core Services:\n- Risk & Governance\n- Legal Compliances\n- Business Solutions\n- Career Consulting\n- Placement Consulting\n- Technology Consulting\n- Fintech Solutions\n- Healthcare Analytics\n- Banking Solutions\n- Education Analytics\n- Business Development Analytics\n\n© ${new Date().getFullYear()} vbrion analytics. Confidential.`
    ], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'vbrion-Executive-Capabilities-Overview.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section className="relative py-24 bg-[#0A1120] border-t border-white/[0.08] overflow-hidden">
      {/* Background ambient gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-r from-[#00D4FF]/10 via-[#1AA3E0]/15 to-[#0B4C7A]/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Grand CTA & Careers Container */}
        <div className="glass-panel rounded-3xl p-8 sm:p-14 border border-white/[0.1] relative overflow-hidden shadow-2xl bg-gradient-to-br from-[#101A2E]/90 via-[#14213A]/80 to-[#101A2E]/90">
          {/* Subtle top cyan line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00D4FF] to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Bold Headline & Value Proposition */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101A2E] border border-[#00D4FF]/30 text-xs font-semibold text-[#00D4FF] uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" /> Shape The Next Horizon With Us
              </div>

              <h2 className="text-3xl sm:text-5xl font-montserrat font-extrabold text-white tracking-tight leading-tight">
                Ready to engineer <br />
                <span className="text-gradient">sustainable advantage?</span>
              </h2>

              <p className="text-base sm:text-lg text-[#C9D3E3] leading-relaxed max-w-xl">
                Whether you need a confidential board-level governance review, a high-throughput AI telemetry lakehouse, or are an ambitious quant seeking high-impact problems—vbrion is where vision meets execution.
              </p>

              {/* Action Buttons: Dual Path CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#contact"
                  className="px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#00D4FF] via-[#1AA3E0] to-[#0B4C7A] shadow-cyan-glow hover:shadow-cyan-glow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] inline-flex items-center gap-2"
                >
                  <span>Initiate Client Discovery</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  onClick={() => setCareersModalOpen(true)}
                  className="px-6 py-3.5 rounded-xl font-semibold text-sm text-[#C9D3E3] hover:text-white bg-[#14213A] hover:bg-[#1A2C4E] border border-white/[0.08] hover:border-[#00D4FF]/30 transition-all inline-flex items-center gap-2"
                >
                  <Briefcase className="w-4 h-4 text-[#00D4FF]" />
                  <span>Careers &amp; Culture</span>
                </button>

                <button
                  onClick={handleDownloadDeck}
                  className="px-5 py-3.5 rounded-xl font-medium text-xs text-[#8B97AD] hover:text-white hover:bg-white/[0.04] transition-colors inline-flex items-center gap-1.5"
                  title="Download executive overview deck"
                >
                  <Download className="w-3.5 h-3.5 text-[#00D4FF]" />
                  <span>{deckDownloaded ? 'Overview Deck Downloaded' : 'Executive Overview Deck'}</span>
                </button>

                {/* Company LinkedIn Placeholder CTA */}
                <a
                  href={siteConfig.socials?.linkedin || 'https://linkedin.com/company/vbrion'}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3.5 rounded-xl font-semibold text-xs text-[#00D4FF] bg-[#101A2E] hover:bg-[#14213A] border border-[#00D4FF]/30 hover:border-[#00D4FF] transition-all inline-flex items-center gap-2 group shadow-sm"
                  title="Company LinkedIn [Placeholder]"
                >
                  <LinkedInIcon className="w-4 h-4 text-[#00D4FF] group-hover:scale-110 transition-transform" />
                  <span>Company LinkedIn</span>
                  <span className="px-1.5 py-0.5 text-[9px] font-mono bg-amber-400/10 text-amber-300 rounded border border-amber-400/20">
                    [PLACEHOLDER]
                  </span>
                </a>
              </div>
            </div>

            {/* Right Column: Mini Metric & Culture Card */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-2xl bg-[#0A1120]/70 border border-white/[0.06] backdrop-blur-md space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#00D4FF]">
                    The vbrion Collective
                  </span>
                  <span className="text-[10px] font-mono text-amber-300 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                    [CULTURE BANNER]
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#00D4FF] mt-1 shrink-0" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">Direct Executive Governance</h4>
                      <p className="text-xs text-[#8B97AD]">Senior partners lead every engagement from day zero to production release.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#1AA3E0] mt-1 shrink-0" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">Multidisciplinary Synergy</h4>
                      <p className="text-xs text-[#8B97AD]">Where legal-tech analysts, quantitative mathematicians, and cloud architects sit at the same table.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#00D4FF] mt-1 shrink-0" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">Strict Mutual NDA by Default</h4>
                      <p className="text-xs text-[#8B97AD]">All discovery sessions and institutional telemetry are bound by enterprise-grade confidentiality.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-[#8B97AD]">
                  <span>Explore opportunities:</span>
                  <button
                    onClick={() => setCareersModalOpen(true)}
                    className="text-[#00D4FF] hover:underline font-semibold"
                  >
                    View Open Positions &rarr;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Careers Modal */}
      {careersModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="w-full max-w-2xl bg-[#101A2E] border border-white/[0.1] rounded-3xl p-6 sm:p-8 shadow-2xl relative max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setCareersModalOpen(false)}
              className="absolute top-5 right-5 p-2 text-[#8B97AD] hover:text-white rounded-xl transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#00D4FF]/10 text-[#00D4FF] border border-[#00D4FF]/20">
                Careers at vbrion
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-400/10 text-amber-300 border border-amber-400/20">
                [PLACEHOLDER]
              </span>
            </div>

            <h3 className="text-2xl font-montserrat font-bold text-white mb-2">
              Join Our Engineering &amp; Advisory Collective
            </h3>
            <p className="text-sm text-[#8B97AD] mb-6">
              We look for mathematicians, regulatory counsels, and engineers with an appetite for high-stakes problem solving.
            </p>

            {/* Roles List */}
            <div className="space-y-3 mb-6">
              {sampleRoles.map((role) => (
                <div
                  key={role.id}
                  className="p-4 rounded-2xl bg-[#14213A] border border-white/[0.06] hover:border-[#00D4FF]/30 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-sm font-semibold text-white">{role.title}</h4>
                      <span className="text-[10px] font-mono text-amber-300 bg-amber-500/10 px-1.5 py-0.5 rounded">
                        {role.tag}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-[#8B97AD]">
                      <span>{role.location}</span>
                      <span>&bull;</span>
                      <span>{role.type}</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {role.skills.map((s, idx) => (
                        <span key={idx} className="px-2 py-0.5 text-[10px] font-mono bg-[#101A2E] text-[#00D4FF] rounded">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={`mailto:${siteConfig.contact.email}?subject=Application for ${encodeURIComponent(role.title)}`}
                    className="shrink-0 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#00D4FF] to-[#0B4C7A] hover:shadow-cyan-glow transition-all text-center"
                  >
                    Apply Now
                  </a>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-[#0A1120] border border-white/[0.05] text-xs text-[#8B97AD] flex items-center justify-between">
              <span>Don't see your discipline listed? Send your dossier directly:</span>
              <a href={`mailto:${siteConfig.contact.email}`} className="text-[#00D4FF] font-semibold hover:underline">
                {siteConfig.contact.email}
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
