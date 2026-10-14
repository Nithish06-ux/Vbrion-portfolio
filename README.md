# vbrion | engineering what's next

A modern, visually striking company portfolio website built for **vbrion** ("vbrion analytics") combining high-stakes strategic consulting with precision data, analytics, and AI engineering.

---

## 🌟 Overview & Architecture

- **Positioning**: A forward-looking firm combining expert consulting with data, analytics, and AI engineering.
- **Brand Identity**: Fuses a "VB" monogram in cyan-blue line art with an observer peering through a telescope—symbolizing vigilant foresight, empirical rigor, and horizon vision.
- **Design Language**: Dark, premium, immersive aesthetic (`#0A1120` background, `#101A2E` surfaces, `#00D4FF` cyan glow accents) with fluid typography (Montserrat for headings, Inter for body), animated interactive particle canvas, glassmorphism panels, and smooth anchor navigation.

---

## 📁 Repository Structure

```text
vbrion-portfolio/
├── client/                               # Frontend Single-Page Portfolio (Vite + React)
│   ├── public/
│   │   ├── logo-icon.svg                 # VB Monogram & Stargazer Telescope SVG
│   │   ├── robots.txt                    # Search engine crawler instructions
│   │   └── sitemap.xml                   # XML sitemap for SEO
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/
│   │   │   │   ├── BrandLogo.jsx         # Wordmark & Monogram component
│   │   │   │   ├── CustomCursor.jsx      # Subtle cyan cursor ring (desktop only)
│   │   │   │   ├── FloatingQuickActions.jsx # WhatsApp (+91 7718079297), Call & Top
│   │   │   │   ├── AIChatbotWidget.jsx   # Feature-flagged foresight advisor
│   │   │   │   ├── IconHelper.jsx        # Safe Lucide line icon resolver
│   │   │   │   └── SocialIcons.jsx       # LinkedIn, Twitter/X, GitHub, Instagram
│   │   │   ├── home/
│   │   │   │   ├── HeroSection.jsx       # Section 1: Animated particle/stargazer hero
│   │   │   │   ├── AboutSection.jsx      # Section 2: Telescope brand story, vision, 4 values
│   │   │   │   ├── ServicesSection.jsx   # Section 3: 2 divisions & 11 service cards
│   │   │   │   ├── PortfolioSection.jsx  # Section 4: Filterable 6-project case studies
│   │   │   │   ├── CaseStudyModal.jsx    # Challenge, Approach, Solution, Results modal
│   │   │   │   ├── CapabilitiesSection.jsx # Section 5: 6 core domains & tech badges
│   │   │   │   ├── IndustriesSection.jsx # Section 6: Fintech, Health, Banking, Education
│   │   │   │   ├── ProcessSection.jsx    # Section 7: 4-step lifecycle (Discover to Support)
│   │   │   │   ├── ImpactSection.jsx     # Section 8: Animated count-up metrics [PLACEHOLDER]
│   │   │   │   ├── TestimonialsSection.jsx # Section 9: Client marquee & quote slider [PLACEHOLDER]
│   │   │   │   ├── TeamSection.jsx       # Section 10: Leadership cards [PLACEHOLDER]
│   │   │   │   └── ContactSection.jsx    # Section 11: Consultation form & contact block
│   │   │   └── layout/
│   │   │       ├── Navbar.jsx            # Sticky glass header, mega-menu, mobile drawer
│   │   │       └── Footer.jsx            # Section 12: Rich footer & directory
│   │   ├── config/
│   │   │   └── siteConfig.js             # Centralized contact, address, socials, phone config
│   │   ├── data/
│   │   │   ├── servicesData.js           # 11 services across Consulting & Analytical
│   │   │   ├── portfolioData.js          # 6 detailed placeholder case studies
│   │   │   └── companyData.js            # Capabilities, industries, process, testimonials
│   │   ├── App.jsx                       # Main application shell
│   │   ├── index.css                     # Tailwind CSS tokens, variables, glassmorphism
│   │   └── main.jsx                      # Vite entry point
│   ├── tailwind.config.js                # Custom palette, cyan glows, font families
│   ├── vite.config.js                    # Vite configuration with proxy to server (5001)
│   └── package.json
│
├── server/                               # Backend API Service (Express + Node.js)
│   ├── src/
│   │   ├── models/
│   │   │   └── Enquiry.js                # Mongoose schema for client contact submissions
│   │   ├── repositories/
│   │   │   ├── enquiryRepository.js      # Abstracted repository with in-memory fallback
│   │   │   └── projectRepository.js      # Project case study access layer
│   │   ├── routes/
│   │   │   ├── contactRoutes.js          # /api/contact: Rate-limited, honeypot protected
│   │   │   ├── projectRoutes.js          # /api/projects: Case studies listing & detail
│   │   │   └── aiRoutes.js               # /api/ai/chat: Foresight assistant endpoint
│   │   ├── seeds/
│   │   │   ├── services.json             # Seed file with all 11 services
│   │   │   ├── projects.json             # Seed file with 6 placeholder case studies
│   │   │   └── seed.js                   # Seed execution script
│   │   ├── services/
│   │   │   └── emailService.js           # Nodemailer dispatch to info@vbrion.com
│   │   └── server.js                     # Express server, Helmet, CORS, DB connection
│   ├── .env.example                      # Server environment variables template
│   └── package.json
│
├── .env.example                          # Root environment variables template
├── package.json                          # Root orchestration package
└── README.md                             # Comprehensive documentation & handoff checklist
```

---

## 🚀 Quick Start & Local Setup

### Prerequisites
- Node.js `v18+` or `v20+`
- npm `v9+` or `v10+`
- MongoDB (Optional: The application automatically operates with a built-in in-memory fallback if MongoDB is not running locally).

### 1. Install Dependencies
Run from the root directory:
```bash
# In client directory
cd client
npm install

# In server directory
cd ../server
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env`:
```bash
# In server directory
cp .env.example .env
```
Default parameters in `.env`:
- `PORT=5001`
- `CLIENT_URL=http://localhost:5173`
- `CONTACT_EMAIL=info@vbrion.com`
- `MONGODB_URI=mongodb://127.0.0.1:27017/vbrion_portfolio`

### 3. Launch Development Servers
You can start both client and server:

**Terminal 1 (Backend API):**
```bash
cd server
npm run dev
# Server runs on http://localhost:5001
# Health endpoint: http://localhost:5001/api/health
```

**Terminal 2 (Frontend Client):**
```bash
cd client
npm run dev
# Vite runs on http://localhost:5173
```

---

## 🛠️ Editing Content Without Code Changes

All content, telephone numbers, address placeholders, and services are decoupled into simple, editable configuration and JSON files:

1. **Company & Contact Details**:
   - File: `client/src/config/siteConfig.js`
   - Modify phone (`+91 7718079297`), email (`info@vbrion.com`), physical address, WhatsApp URL, social links, or feature flags (`enableAiAssistant`, `enableCustomCursor`).

2. **11 Services & Offerings**:
   - Client: `client/src/data/servicesData.js`
   - Server Seed: `server/src/seeds/services.json`
   - Add, edit, or adjust service descriptions and the 3 hover reveal offerings for each service.

3. **Case Studies & Projects**:
   - Client: `client/src/data/portfolioData.js`
   - Server Seed: `server/src/seeds/projects.json`
   - Contains Challenge, Approach, Solution, Quantified Results, and Tech Used.

4. **Capabilities, Process & Testimonials**:
   - File: `client/src/data/companyData.js`
   - Edit the 6 capability badges, 4 process phases, or testimonial quotes.

---

## 🌐 Production Deployment Guide

### Frontend Deployment (Vercel or Netlify)
1. Push repository to GitHub/GitLab.
2. Link the repository in **Vercel** or **Netlify**.
3. Set **Root Directory** to `client`.
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Add Environment Variable:
   - `VITE_API_URL`: Your deployed backend URL (e.g., `https://api.vbrion.com/api` or `https://vbrion-api.onrender.com/api`).

### Backend Deployment (Render or Railway)
1. Link the repository in **Render** or **Railway**.
2. Set **Root Directory** to `server`.
3. Build Command: `npm install`
4. Start Command: `node src/server.js`
5. Configure Environment Variables:
   - `PORT`: `5001` (or provided by host)
   - `CLIENT_URL`: `https://vbrion.com` (your frontend domain)
   - `MONGODB_URI`: Your MongoDB Atlas connection string (`mongodb+srv://...`)
   - `CONTACT_EMAIL`: `info@vbrion.com`
   - `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` (e.g., SendGrid, Mailgun, or Google Workspace App Password for automated dispatch)
   - `GEMINI_API_KEY`: (Optional) Your Google Gemini API key if enabling live LLM chat.

---

## 📋 Comprehensive Replacement Checklist

Before promoting to official client-facing production, complete the following replacements:

- [ ] **Physical Address**:
  - Open `client/src/config/siteConfig.js` and replace the placeholder address:
    `[TO BE ADDED - Enterprise Plaza, Suite 400]` with the actual registered office address.
- [x] **Official Logo Vector Files & Icon**:
  - Integrated the official high-resolution VB monogram icon and full wordmark with suited telescope observer (`vbrion-icon-transparent.png` and `vbrion-logo-transparent.png`). Active in Navbar, About section, favicon, and OpenGraph meta tags.
- [ ] **Impact Numbers / Statistics**:
  - Verify and replace the sample metrics in `client/src/config/siteConfig.js` (`impactMetrics` array) and `client/src/components/home/ImpactSection.jsx` once empirical metrics are finalized. Remove `[PLACEHOLDER]` tags.
- [ ] **Testimonials & Clients**:
  - In `client/src/data/companyData.js`, replace the placeholder client names (`Apex Capital`, `Novis Health`, etc.) and quotes with approved client references and permissions.
- [ ] **Leadership Team Photos & Names**:
  - In `client/src/data/companyData.js` (`teamMembers` array), replace sample leadership member names, real portraits, and actual LinkedIn profile URLs.
- [ ] **Project Images & Real Case Studies**:
  - In `client/src/data/portfolioData.js`, replace the Unsplash imagery with proprietary project screenshots or diagram exports. Update sample case study copy.
- [ ] **Social Media Links**:
  - In `client/src/config/siteConfig.js`, replace `https://linkedin.com/company/vbrion` and `https://twitter.com/vbrion_ai` with your official company profile handles.
- [ ] **SMTP Email Credentials**:
  - In `server/.env`, configure your live SMTP host and credentials so client enquiries are instantly forwarded to `info@vbrion.com`.

---

## 🔒 Security & Performance Features

- **Honeypot Protection**: Built-in hidden honeypot field (`website_trap`) silently identifies and neutralizes automated spam submissions.
- **Express Rate Limiting**: Strict rate limiting on `/api/contact` and `/api/ai/chat` prevents Denial of Service attacks.
- **Abstracted Data Repository**: Zero crashes if MongoDB is restarting or offline; automatically buffers into resilient in-memory storage.
- **Helmet & CORS**: Strict HTTP security headers and whitelist domain origin validation.
- **WCAG AA Compliance**: High-contrast ratios (`#00D4FF` / `#FFFFFF` on `#0A1120`), visible focus rings, ARIA labels on all modal and interactive elements, and `prefers-reduced-motion` detection.
