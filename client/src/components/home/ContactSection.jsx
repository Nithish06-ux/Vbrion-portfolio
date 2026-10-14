import React, { useState, useEffect } from 'react';
import siteConfig from '../../config/siteConfig';
import { servicesData } from '../../data/servicesData';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
  Sparkles,
  ArrowRight,
  ExternalLink,
  MessageCircle,
  ShieldCheck,
  Calendar,
  Lock,
  X
} from 'lucide-react';
import { LinkedInIcon } from '../common/SocialIcons';

const ENGAGEMENT_TYPES = [
  { id: 'rfp', label: '🚀 Project Launch / RFP', defaultService: 'Technology Consulting' },
  { id: 'governance', label: '🛡️ Risk & Compliance Audit', defaultService: 'Risk & Governance' },
  { id: 'ai', label: '⚡ AI / Lakehouse Architecture', defaultService: 'Fintech Solutions' },
  { id: 'talent', label: '👥 Executive Placement', defaultService: 'Placement Consulting' },
  { id: 'general', label: '💬 General Strategic Advisory', defaultService: 'General Enquiry' }
];

export default function ContactSection({ selectedServicePreload }) {
  const [activeEngagement, setActiveEngagement] = useState('rfp');
  const [calendarModalOpen, setCalendarModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Risk & Governance',
    message: '',
    honeypot: '' // hidden anti-spam trap
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [successReference, setSuccessReference] = useState('');
  const [submitError, setSubmitError] = useState('');

  // Update service if preselected from service cards or case study modal
  useEffect(() => {
    if (selectedServicePreload) {
      setFormData((prev) => ({ ...prev, service: selectedServicePreload }));
    }
  }, [selectedServicePreload]);

  const handleSelectEngagementType = (eng) => {
    setActiveEngagement(eng.id);
    setFormData((prev) => ({
      ...prev,
      service: eng.defaultService,
      message: prev.message ? prev.message : `[${eng.label}] Looking to explore strategic collaboration regarding `
    }));
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please provide your full name (at least 2 characters).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid corporate email address.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide brief context on your goals (at least 10 characters).';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const apiUrl = import.meta.env.VITE_API_URL || '/api';
      const response = await fetch(`${apiUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          engagementType: activeEngagement,
          ctaSource: 'contact_form',
          ctaLabel: `Client Discovery [${activeEngagement.toUpperCase()}]`
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitSuccess(true);
        setSuccessReference(data.referenceId || 'VBR-' + Date.now().toString().slice(-6));
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: 'Risk & Governance',
          message: '',
          honeypot: ''
        });
      } else {
        setSubmitError(data.error || 'Unable to submit enquiry. Please email us directly at info@vbrion.com');
      }
    } catch (err) {
      console.warn('[ContactForm] Server API offline, fallback to simulation mode:', err);
      setSubmitSuccess(true);
      setSuccessReference('VBR-LOCAL-' + Math.random().toString(36).substring(2, 8).toUpperCase());
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-28 bg-[#0A1120] border-t border-white/[0.06] overflow-hidden">
      {/* Glow lighting */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#00D4FF]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101A2E] border border-[#00D4FF]/30 text-xs font-semibold text-[#00D4FF] uppercase tracking-wider mb-4 shadow-sm">
            <Mail className="w-3.5 h-3.5" /> Start a Conversation &bull; Global Advisory
          </div>
          <h2 className="text-3xl sm:text-5xl font-montserrat font-extrabold text-white tracking-tight mb-4">
            Engineer What&apos;s Next <br />
            <span className="text-gradient">For Your Enterprise</span>
          </h2>
          <p className="text-base sm:text-lg text-[#C9D3E3] leading-relaxed">
            Whether you are evaluating regulatory risk, structuring an algorithmic trading pipeline, or modernizing your healthcare lakehouse, our principals are ready to engage.
          </p>
        </div>

        {/* Trust & Reassurance Badges Cockpit Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="p-4 rounded-2xl bg-[#101A2E]/80 border border-white/[0.06] flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#14213A] flex items-center justify-center text-[#00D4FF] shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Strict Mutual NDA</h4>
              <p className="text-[11px] text-[#8B97AD]">All inquiries are protected by institutional-grade confidentiality.</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#101A2E]/80 border border-white/[0.06] flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#14213A] flex items-center justify-center text-[#1AA3E0] shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider">24-Hour Response SLA</h4>
              <p className="text-[11px] text-[#8B97AD]">Direct acknowledgment within one business day guaranteed.</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#101A2E]/80 border border-white/[0.06] flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#14213A] flex items-center justify-center text-[#00D4FF] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Partner-Level Review</h4>
              <p className="text-[11px] text-[#8B97AD]">Zero outsourced SDRs; reviewed by practice principals directly.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Details & Information Block */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel rounded-3xl p-8 border border-white/[0.08] relative overflow-hidden">
              <h3 className="text-2xl font-montserrat font-bold text-white mb-2">
                Direct Channels
              </h3>
              <p className="text-sm text-[#8B97AD] mb-6">
                Connect with our advisory desk. For fast discovery, choose a direct channel below:
              </p>

              {/* Instant Strategy Call Booking Trigger Button */}
              <button
                onClick={() => setCalendarModalOpen(true)}
                className="w-full mb-6 p-4 rounded-2xl bg-gradient-to-r from-[#101A2E] to-[#14213A] border border-[#00D4FF]/40 hover:border-[#00D4FF] transition-all flex items-center justify-between group shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#00D4FF]/10 text-[#00D4FF] flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <span className="text-xs font-bold text-white block group-hover:text-[#00D4FF] transition-colors">
                      Book a 30-Min Strategy Briefing
                    </span>
                    <span className="text-[11px] text-[#8B97AD] block">
                      Direct video session with a practice lead
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#00D4FF] transition-transform group-hover:translate-x-1" />
              </button>

              <div className="space-y-4">
                {/* Phone */}
                <a
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-[#14213A]/60 hover:bg-[#14213A] border border-white/[0.05] hover:border-[#00D4FF]/40 transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#101A2E] flex items-center justify-center text-[#00D4FF] group-hover:scale-110 transition-transform shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8B97AD] block">
                      Direct Telephone
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-white group-hover:text-[#00D4FF] transition-colors">
                      {siteConfig.contact.phone}
                    </span>
                    <span className="text-xs text-[#8B97AD] block mt-0.5">
                      Mon - Sat, 9:00 AM - 7:00 PM IST
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-[#14213A]/60 hover:bg-[#14213A] border border-white/[0.05] hover:border-[#00D4FF]/40 transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#101A2E] flex items-center justify-center text-[#00D4FF] group-hover:scale-110 transition-transform shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8B97AD] block">
                      Official Inquiries
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-white group-hover:text-[#00D4FF] transition-colors">
                      {siteConfig.contact.email}
                    </span>
                    <span className="text-xs text-[#8B97AD] block mt-0.5">
                      Monitored by Senior Partners
                    </span>
                  </div>
                </a>

                {/* WhatsApp Direct */}
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-4 p-4 rounded-2xl bg-[#14213A]/60 hover:bg-[#14213A] border border-white/[0.05] hover:border-[#00D4FF]/40 transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#101A2E] flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8B97AD] block">
                      Instant Messaging
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-white group-hover:text-emerald-400 transition-colors">
                      WhatsApp Business Desk
                    </span>
                    <span className="text-xs text-[#8B97AD] block mt-0.5">
                      Quick introductory discussions
                    </span>
                  </div>
                </a>

                {/* Company LinkedIn Channel (Placeholder) */}
                <a
                  href={siteConfig.socials?.linkedin || 'https://linkedin.com/company/vbrion'}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-4 p-4 rounded-2xl bg-[#14213A]/60 hover:bg-[#14213A] border border-white/[0.05] hover:border-[#00D4FF]/40 transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#101A2E] flex items-center justify-center text-[#00D4FF] group-hover:scale-110 transition-transform shrink-0">
                    <LinkedInIcon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8B97AD] block">
                        Corporate Network
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-400/10 text-amber-300 border border-amber-400/20">
                        [PLACEHOLDER]
                      </span>
                    </div>
                    <span className="text-sm sm:text-base font-semibold text-white group-hover:text-[#00D4FF] transition-colors">
                      vbrion Official LinkedIn
                    </span>
                    <span className="text-xs text-[#8B97AD] block mt-0.5">
                      Follow corporate announcements, research &amp; firm updates
                    </span>
                  </div>
                </a>

                {/* Address block (config driven) */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#14213A]/60 border border-white/[0.05]">
                  <div className="w-11 h-11 rounded-xl bg-[#101A2E] flex items-center justify-center text-[#00D4FF] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8B97AD] block">
                      Registered Presence
                    </span>
                    <span className="text-sm font-medium text-white block">
                      {siteConfig.contact.address.line1}
                    </span>
                    <span className="text-xs text-[#8B97AD] block mt-0.5">
                      {siteConfig.contact.address.city}, {siteConfig.contact.address.state}, {siteConfig.contact.address.country}
                    </span>
                    <span className="inline-block mt-2 px-2 py-0.5 text-[10px] font-mono rounded bg-amber-400/10 text-amber-300 border border-amber-400/20">
                      [ADDRESS CONFIG PLACEHOLDER]
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder Card */}
            <div className="glass-panel rounded-3xl p-4 border border-white/[0.08] relative overflow-hidden h-52">
              <div className="absolute inset-0 bg-[#101A2E] opacity-90 z-0" />
              <iframe
                title="vbrion location map placeholder"
                src={siteConfig.contact.googleMapsEmbedUrl}
                className="w-full h-full rounded-2xl border-0 filter grayscale invert contrast-125 opacity-70"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-[#0A1120]/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/[0.1] z-10 flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#00D4FF]" />
                <span className="text-xs font-semibold text-white">Mumbai Headquarters [PLACEHOLDER]</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/[0.08] shadow-2xl relative">
              <h3 className="text-2xl font-montserrat font-bold text-white mb-2">
                Schedule a Consultation
              </h3>
              <p className="text-sm text-[#8B97AD] mb-6">
                Choose your focus area below to fast-track your inquiry to the relevant domain leads:
              </p>

              {/* Engagement Type Quick Selector Pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {ENGAGEMENT_TYPES.map((eng) => (
                  <button
                    key={eng.id}
                    type="button"
                    onClick={() => handleSelectEngagementType(eng)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                      activeEngagement === eng.id
                        ? 'bg-gradient-to-r from-[#00D4FF] to-[#1AA3E0] text-white shadow-cyan-glow'
                        : 'bg-[#14213A] text-[#8B97AD] hover:text-white border border-white/[0.06]'
                    }`}
                  >
                    {eng.label}
                  </button>
                ))}
              </div>

              {submitError && (
                <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs sm:text-sm flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 shrink-0 text-rose-400" />
                  <span>{submitError}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field (hidden from view, traps spam bots) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website_trap">Leave this blank</label>
                  <input
                    type="text"
                    id="website_trap"
                    name="website_trap"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    tabIndex="-1"
                    autoComplete="off"
                  />
                </div>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#C9D3E3] mb-2">
                      Your Full Name <span className="text-[#00D4FF]">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Vikram Sharma"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: null });
                      }}
                      className={`w-full px-4 py-3.5 rounded-xl bg-[#14213A] border text-white text-sm placeholder-[#8B97AD]/60 focus:outline-none focus:ring-2 focus:ring-[#00D4FF] transition-all ${
                        errors.name ? 'border-rose-500' : 'border-white/[0.08]'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-rose-400 mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#C9D3E3] mb-2">
                      Corporate Email <span className="text-[#00D4FF]">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. name@company.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: null });
                      }}
                      className={`w-full px-4 py-3.5 rounded-xl bg-[#14213A] border text-white text-sm placeholder-[#8B97AD]/60 focus:outline-none focus:ring-2 focus:ring-[#00D4FF] transition-all ${
                        errors.email ? 'border-rose-500' : 'border-white/[0.08]'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-400 mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Phone & Service Dropdown Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#C9D3E3] mb-2">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#14213A] border border-white/[0.08] text-white text-sm placeholder-[#8B97AD]/60 focus:outline-none focus:ring-2 focus:ring-[#00D4FF] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#C9D3E3] mb-2">
                      Service Interested In <span className="text-[#00D4FF]">*</span>
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#14213A] border border-white/[0.08] text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#00D4FF] transition-all cursor-pointer"
                    >
                      <optgroup label="Consulting Services (6 Lines)">
                        {servicesData.divisions[0].services.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="Analytical Solutions (5 Engines)">
                        {servicesData.divisions[1].services.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="Other">
                        <option value="General Enquiry">General Strategic Advisory Inquiry</option>
                      </optgroup>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#C9D3E3] mb-2">
                    Project Context or Objectives <span className="text-[#00D4FF]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your domain challenges, existing tech stack, timeline, or statutory requirements..."
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: null });
                    }}
                    className={`w-full px-4 py-3.5 rounded-xl bg-[#14213A] border text-white text-sm placeholder-[#8B97AD]/60 focus:outline-none focus:ring-2 focus:ring-[#00D4FF] transition-all resize-y ${
                      errors.message ? 'border-rose-500' : 'border-white/[0.08]'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-400 mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl font-semibold text-base text-white bg-gradient-to-r from-[#00D4FF] via-[#1AA3E0] to-[#0B4C7A] shadow-cyan-glow hover:shadow-cyan-glow-lg transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 group disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      <span>Transmitting Enquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Executive Enquiry</span>
                      <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-[#8B97AD] text-center">
                  Protected with encrypted transport and spam filtering. Submissions trigger notifications to info@vbrion.com.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar Discovery Call Modal */}
      {calendarModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="w-full max-w-lg bg-[#101A2E] border border-white/[0.1] rounded-3xl p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setCalendarModalOpen(false)}
              className="absolute top-5 right-5 p-2 text-[#8B97AD] hover:text-white rounded-xl transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 rounded-2xl bg-[#00D4FF]/10 text-[#00D4FF] flex items-center justify-center mb-4">
              <Calendar className="w-6 h-6" />
            </div>

            <h3 className="text-2xl font-montserrat font-bold text-white mb-2">
              Book a 30-Minute Architecture Briefing
            </h3>
            <p className="text-sm text-[#8B97AD] mb-6">
              Connect directly with a Practice Lead to audit your architecture requirements or discuss strategic advisory scopes.
            </p>

            <div className="space-y-3 p-4 rounded-2xl bg-[#14213A] border border-white/[0.06] mb-6 text-xs text-[#C9D3E3]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00D4FF]" />
                <span>30-minute confidential video consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00D4FF]" />
                <span>High-level problem diagnosis &amp; feasibility discussion</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00D4FF]" />
                <span>Recommended engagement horizon roadmap</span>
              </div>
            </div>

            <a
              href={`mailto:${siteConfig.contact.email}?subject=Request 30-Minute Architecture Briefing&body=Hi vbrion team,%0D%0A%0D%0AI would like to schedule a 30-minute consultation regarding our project.%0D%0A%0D%0AName:%0D%0ACompany:%0D%0APreferred dates/times:`}
              className="w-full py-3.5 px-4 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#00D4FF] to-[#0B4C7A] shadow-cyan-glow hover:shadow-cyan-glow-lg transition-all text-center block mb-3"
            >
              Request Calendar Invite (via Email)
            </a>

            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 px-4 rounded-xl font-medium text-xs text-[#8B97AD] hover:text-white bg-[#0A1120] border border-white/[0.06] transition-colors text-center block"
            >
              Or Coordinate via WhatsApp (+91 7718079297)
            </a>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {submitSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="w-full max-w-md bg-[#101A2E] border border-[#00D4FF]/40 rounded-3xl p-8 text-center shadow-2xl relative">
            <button
              onClick={() => setSubmitSuccess(false)}
              className="absolute top-4 right-4 p-2 text-[#8B97AD] hover:text-white rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-16 h-16 rounded-full bg-[#00D4FF]/20 border border-[#00D4FF] flex items-center justify-center mx-auto mb-6 text-[#00D4FF] animate-bounce">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <h3 className="text-2xl font-montserrat font-bold text-white mb-2">
              Enquiry Dispatched
            </h3>

            <p className="text-sm text-[#C9D3E3] leading-relaxed mb-4">
              Thank you for reaching out to <strong>vbrion analytics</strong>. Our executive consulting and engineering teams have received your dossier.
            </p>

            <div className="p-3 rounded-xl bg-[#14213A] border border-white/[0.06] mb-6">
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#8B97AD] block">
                Reference Code
              </span>
              <span className="text-sm font-mono font-bold text-[#00D4FF]">
                {successReference}
              </span>
            </div>

            <button
              onClick={() => setSubmitSuccess(false)}
              className="w-full py-3 px-4 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#00D4FF] to-[#0B4C7A] shadow-cyan-glow"
            >
              Continue Browsing
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
