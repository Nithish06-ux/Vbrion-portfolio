/**
 * vbrion Portfolio - Central Configuration File
 * All contact info, branding, address, social links and feature flags are managed here.
 */

export const siteConfig = {
  company: {
    name: 'vbrion',
    wordmark: 'vbrion analytics',
    tagline: 'engineering what\'s next',
    shortDescription: 'Combining expert consulting with data, analytics and AI engineering to anticipate what is next and engineer sustainable advantage.',
    foundedYear: 2024,
  },

  contact: {
    phone: '+91 7718079297',
    phoneRaw: '+917718079297',
    email: 'info@vbrion.com',
    whatsappUrl: 'https://wa.me/917718079297?text=Hello%20vbrion%20team%2C%20I%20would%20like%20to%20discuss%20a%20project.',
    // Address placeholder as specified by requirements
    address: {
      line1: '[TO BE ADDED - Enterprise Plaza, Suite 400]',
      line2: '[Bandra Kurla Complex (BKC)]',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400051',
      country: 'India',
      fullFormatted: '[Address to be added, Mumbai, Maharashtra, India]'
    },
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120615.86776118475!2d72.825838!3d19.076090!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin'
  },

  socials: {
    linkedin: 'https://linkedin.com/company/vbrion',
    twitter: 'https://twitter.com/vbrion_ai',
    github: 'https://github.com/vbrion',
    instagram: 'https://instagram.com/vbrion.analytics',
  },

  featureFlags: {
    enableAiAssistant: true,
    enableCustomCursor: true,
    enableParticleHero: true,
  },

  impactMetrics: [
    { id: 1, label: 'Analytics & AI Models Deployed', value: 120, suffix: '+', note: '[PLACEHOLDER]' },
    { id: 2, label: 'Compliance & Governance Accuracy', value: 99.8, suffix: '%', decimals: 1, note: '[PLACEHOLDER]' },
    { id: 3, label: 'Average Client Efficiency Gain', value: 38, suffix: '%', note: '[PLACEHOLDER]' },
    { id: 4, label: 'Enterprise Domains Served', value: 8, suffix: '+', note: '[PLACEHOLDER]' },
  ],

  navigation: [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#portfolio' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Industries', href: '#industries' },
    { label: 'Process', href: '#process' },
    { label: 'Impact', href: '#impact' },
    { label: 'Contact', href: '#contact' },
  ]
};

export default siteConfig;
