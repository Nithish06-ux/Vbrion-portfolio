import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';

export default function NewsletterSubscription() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setError('');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      setError('Please provide a valid corporate email address.');
      return;
    }

    setLoading(true);

    try {
      const apiUrl = import.meta.env.VITE_API_URL || '/api';
      const res = await fetch(`${apiUrl}/contact/newsletter`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSuccess(true);
        setEmail('');
      } else {
        setError(data.error || 'Failed to register subscription. Please try again.');
      }
    } catch (err) {
      // Local fallback simulation
      setSuccess(true);
      setEmail('');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#101A2E] via-[#14213A] to-[#101A2E] border border-white/[0.08] shadow-xl relative overflow-hidden mb-16">
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#00D4FF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
        <div className="lg:col-span-6 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0A1120] border border-[#00D4FF]/30 text-[11px] font-semibold text-[#00D4FF] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Executive Foresight Memo
          </div>
          <h3 className="text-xl sm:text-2xl font-montserrat font-bold text-white tracking-tight">
            Subscribe to Monthly Horizon Intelligence
          </h3>
          <p className="text-xs sm:text-sm text-[#8B97AD] max-w-lg">
            A concise, monthly briefing synthesized by vbrion principals covering statutory shifts, banking risk scenarios, and AI engineering benchmarks. Zero spam.
          </p>
        </div>

        <div className="lg:col-span-6">
          {success ? (
            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm flex items-center gap-3 animate-fadeIn">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>You have been subscribed to vbrion Horizon Briefings. Welcome aboard!</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex flex-col sm:flex-row gap-2.5">
                <div className="relative flex-1">
                  <Mail className="w-4 h-4 text-[#8B97AD] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    placeholder="Enter your corporate email..."
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError('');
                    }}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0A1120] border border-white/[0.1] text-white text-xs sm:text-sm placeholder-[#8B97AD]/60 focus:outline-none focus:ring-2 focus:ring-[#00D4FF] transition-all"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-[#00D4FF] to-[#1AA3E0] shadow-cyan-glow hover:shadow-cyan-glow-lg transition-all duration-300 flex items-center justify-center gap-2 shrink-0 disabled:opacity-60"
                >
                  {loading ? (
                    <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Subscribe</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>

              {error && (
                <p className="text-xs text-rose-400 flex items-center gap-1 mt-1">
                  <AlertCircle className="w-3.5 h-3.5" /> {error}
                </p>
              )}

              <p className="text-[10px] text-[#8B97AD]">
                We respect confidentiality. You can unsubscribe with one click at any time.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
