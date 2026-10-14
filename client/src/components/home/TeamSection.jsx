import React from 'react';
import { teamMembers } from '../../data/companyData';
import { Users, Sparkles, Award, Code2 } from 'lucide-react';

export default function TeamSection() {
  return (
    <section id="team" className="relative py-28 bg-[#0A1120] border-t border-white/[0.06] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-[#00D4FF]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101A2E] border border-[#00D4FF]/30 text-xs font-semibold text-[#00D4FF] uppercase tracking-wider mb-4">
            <Users className="w-3.5 h-3.5" /> Our Pillars
          </div>
          <h2 className="text-3xl sm:text-5xl font-montserrat font-extrabold text-white tracking-tight mb-4">
            Leadership &amp; Core Pillars <br />
            <span className="text-gradient">Steering What&apos;s Next</span>
          </h2>
          <p className="text-[#8B97AD] text-sm sm:text-base max-w-2xl mx-auto">
            Meet the visionary founders, technology heads, and engineering specialists powering vbrion&apos;s digital transformation and client success.
          </p>
        </div>

        {/* Pillars Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teamMembers.map((member) => {
            const isDirector = member.role?.includes('Director');
            const isLead =
              member.badge === 'Lead' ||
              member.role?.toLowerCase().includes('head') ||
              member.role?.toLowerCase().includes('lead') ||
              member.name?.toLowerCase().includes('nesarajan');

            return (
              <div
                key={member.id}
                className="glass-panel group rounded-3xl overflow-hidden border border-white/[0.08] hover:border-[#00D4FF]/40 transition-all duration-300 hover:shadow-card-elevated flex flex-col justify-between"
              >
                <div>
                  {/* Photo with gradient vignette */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101A2E] via-transparent to-transparent opacity-90" />
                    
                    {/* Role Badge in Top Right */}
                    <div className="absolute top-4 right-4">
                      {isDirector ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-[#101A2E]/90 backdrop-blur-md text-[#00D4FF] border border-[#00D4FF]/30">
                          <Sparkles className="w-2.5 h-2.5" /> Leadership
                        </span>
                      ) : isLead ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-[#101A2E]/90 backdrop-blur-md text-[#00D4FF] border border-[#00D4FF]/50 shadow-[0_0_12px_rgba(0,212,255,0.25)]">
                          <Award className="w-2.5 h-2.5 text-[#00D4FF]" /> Lead
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-[#101A2E]/80 backdrop-blur-md text-[#8B97AD] border border-white/10">
                          <Code2 className="w-2.5 h-2.5" /> Engineering
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-montserrat font-bold text-white mb-1 group-hover:text-[#00D4FF] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#00D4FF] uppercase tracking-wider mb-3">
                      {member.role}
                    </p>
                    <p className="text-xs sm:text-sm text-[#8B97AD] leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

