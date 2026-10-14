import React from 'react';
import BrandLogo from '../common/BrandLogo';
import siteConfig from '../../config/siteConfig';
import { servicesData } from '../../data/servicesData';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { LinkedInIcon, TwitterXIcon, GitHubIcon, InstagramIcon } from '../common/SocialIcons';
import NewsletterSubscription from '../common/NewsletterSubscription';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070C16] border-t border-white/[0.08] text-[#8B97AD] pt-16 pb-12 relative overflow-hidden">
      {/* Subtle top cyan line glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00D4FF]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Executive Foresight Newsletter Subscription Box */}
        <NewsletterSubscription />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/[0.08]">
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-4 space-y-6">
            <BrandLogo size="default" showTagline={true} />
            
            <p className="text-sm text-[#C9D3E3] leading-relaxed max-w-sm">
              vbrion combines expert consulting with advanced data, analytics and AI engineering to anticipate challenges and build defensible competitive advantage.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-[#101A2E] hover:bg-[#00D4FF] hover:text-[#0A1120] text-[#C9D3E3] flex items-center justify-center border border-white/[0.06] transition-all"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.twitter}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-[#101A2E] hover:bg-[#00D4FF] hover:text-[#0A1120] text-[#C9D3E3] flex items-center justify-center border border-white/[0.06] transition-all"
                aria-label="Twitter / X"
              >
                <TwitterXIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-[#101A2E] hover:bg-[#00D4FF] hover:text-[#0A1120] text-[#C9D3E3] flex items-center justify-center border border-white/[0.06] transition-all"
                aria-label="GitHub"
              >
                <GitHubIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-[#101A2E] hover:bg-[#00D4FF] hover:text-[#0A1120] text-[#C9D3E3] flex items-center justify-center border border-white/[0.06] transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Consulting Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-montserrat font-bold text-sm text-white uppercase tracking-wider">
              Consulting Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {servicesData.divisions[0].services.map((s) => (
                <li key={s.id}>
                  <a href="/#services" className="hover:text-[#00D4FF] transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Analytical Solutions */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-montserrat font-bold text-sm text-white uppercase tracking-wider">
              Analytical Solutions
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {servicesData.divisions[1].services.map((s) => (
                <li key={s.id}>
                  <a href="/#services" className="hover:text-[#00D4FF] transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-montserrat font-bold text-sm text-white uppercase tracking-wider">
              Direct Desk
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="flex items-center gap-2 hover:text-[#00D4FF] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#00D4FF] shrink-0" />
                <span>{siteConfig.contact.phone}</span>
              </a>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-2 hover:text-[#00D4FF] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#00D4FF] shrink-0" />
                <span>{siteConfig.contact.email}</span>
              </a>

              <div className="flex items-start gap-2 pt-2 text-[#8B97AD] text-xs">
                <MapPin className="w-4 h-4 text-[#00D4FF] shrink-0 mt-0.5" />
                <span>
                  {siteConfig.contact.address.line1}<br />
                  {siteConfig.contact.address.city}, {siteConfig.contact.address.country}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8B97AD] gap-4">
          <div>
            &copy; {new Date().getFullYear()} {siteConfig.company.name} analytics. All rights reserved. &bull; Tagline: <em>&ldquo;{siteConfig.company.tagline}&rdquo;</em>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#101A2E] hover:bg-[#14213A] text-[#00D4FF] border border-white/[0.06] transition-colors"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
