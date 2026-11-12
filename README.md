# Mahesh Dungrani — Engineering Portfolio Website

A premium, modern, responsive personal portfolio website for **Mahesh Dungrani**, Control & Instrumentation (C&I) Lead Design and Engineering Professional with 24+ years of experience across conventional Thermal and Nuclear Power Projects (NPCIL and GIPCL).

---

## 🛠️ Tech Stack

- **Framework**: [React 18 / 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom Engineering SVGs

---

## 🎨 Design System

| Token | Hex / Value | Description |
|---|---|---|
| Primary Background | `#100D0B` | Deep industrial charcoal/black |
| Secondary Background | `#19130F` | Warm dark card surface |
| Accent Orange | `#FF720C` | Primary brand accent & highlights |
| Deep Burnt Orange | `#A83F0B` | Secondary gradient & glow base |
| Primary Text | `#F5F0E9` | Crisp off-white |
| Secondary Text | `#A9A19A` | Readable secondary slate |
| Muted Text | `#77716B` | Technical labels & indicators |
| Border | `rgba(255, 255, 255, 0.10)` | Subtle card outlines |

### Typography
- **Headings**: `Playfair Display` (Serif)
- **Body Text**: `Inter` (Sans-Serif)
- **Technical Labels & Badges**: `IBM Plex Mono` (Monospaced)

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg          # Custom MD monogram browser favicon
│   └── og-image.svg         # 1200x630 Social preview banner
├── src/
│   ├── assets/              # Static assets
│   ├── components/
│   │   └── ui/
│   │       ├── Icons.tsx            # Custom SVG icons (LinkedIn, etc.)
│   │       └── SectionWrapper.tsx   # Centered layout primitives & headings
│   ├── data/
│   │   └── portfolio.ts     # Authentic factual data store
│   ├── hooks/
│   │   └── useScroll.ts     # Scroll position, active section, reduced motion
│   ├── sections/
│   │   ├── Navbar.tsx       # Floating blurred navigation with centered links
│   │   ├── Hero.tsx         # Asymmetric hero with portrait spotlight & dual CTAs
│   │   ├── About.tsx        # Condensed narrative + 4-column stat matrix
│   │   ├── Expertise.tsx    # 6-card C&I engineering domain grid
│   │   ├── Experience.tsx   # Horizontal milestone timeline & side-by-side cards
│   │   ├── Projects.tsx     # 2-column Nuclear & Thermal project showcases
│   │   ├── Technologies.tsx # 5-column technical systems & DCS matrix
│   │   ├── Education.tsx    # Centered B.E. (Distinction) academic card
│   │   ├── Philosophy.tsx   # Full-width engineering philosophy statement
│   │   ├── Contact.tsx      # Centered contact hub with LinkedIn CTA
│   │   └── Footer.tsx       # Minimalist footer with smooth back-to-top button
│   ├── App.tsx              # Root component assembly
│   ├── index.css            # Tailwind theme tokens & global styles
│   └── main.tsx             # React DOM entry point
├── index.html               # Semantic HTML, Google Fonts, JSON-LD schema
├── TODO.md                  # Comprehensive roadmap & status checklist
├── package.json
└── vite.config.ts
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
```bash
npm run build
```
Generates optimized static assets in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

---

## 📌 Sections Overview

1. **Floating Navigation**: Monogram logo, dead-centered desktop navigation with active spring indicator, mobile drawer, and LinkedIn CTA.
2. **Hero Section**: 12-column balanced composition featuring a prominent MD spotlight card, technical indicators, and dual CTAs.
3. **About**: Concise 3-paragraph executive narrative with a 4-column counter matrix (24+ Years, 16 at NPCIL, 9 at GIPCL, 2 Sectors).
4. **Technical Expertise**: 6 domain cards covering C&I Engineering, P&ID Documentation, DCS Platforms, System Validation, Nuclear Engineering, and Vibration Monitoring.
5. **Horizontal Career Timeline**: Interactive milestone track (**2001** GIPCL &rarr; **2010** NPCIL &rarr; **PRESENT**) with side-by-side milestone cards and readable checkmark bullet points.
6. **Project Experience**: Nuclear (700 MWe PHWR) and Thermal (125 MWe) showcases with custom engineering SVG overlays.
7. **Systems & Technologies**: 5-column matrix of industrial DCS platforms, turbine governing, and vibration monitoring systems.
8. **Academic Foundation**: B.E. in Instrumentation & Control, Shantilal Shah Engineering College, Bhavnagar (Graduated with Distinction).
9. **Engineering Philosophy**: Full-width statement: *"Precision in Design. Reliability in Execution. Excellence in Engineering."*
10. **Contact & Footer**: Verified Mumbai location, direct LinkedIn connection button, and back-to-top interaction.

---

## 📄 License & Ownership
Copyright © 2026 Mahesh Dungrani. All Rights Reserved.
