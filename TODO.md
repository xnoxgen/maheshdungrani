# Project Roadmap & Task Status: Mahesh Dungrani Portfolio

**Positioning:** Control & Instrumentation (C&I) Lead Design and Engineering Professional for Thermal & Nuclear Power Projects (NPCIL / GIPCL).

---

## 1. Typography Scale & Spacing Overhaul Across All Pages
- [x] **Complete Readability & Spacing Overhaul**:
  - **Font Size Enhancements**:
    - Increased body text across all sections from `text-xs/sm` to `text-base/lg` and `text-lg/xl`.
    - Headings scaled up to `text-3xl sm:text-4xl md:text-5xl lg:text-6xl`.
    - Technical labels and sublabels upgraded to readable `text-sm sm:text-base font-mono`.
    - List items and bullet points enlarged with generous line-height (`leading-relaxed`).
  - **Spacious, Non-Cramped Container Architecture**:
    - Resolved card clipping on Windows and scaled viewports by replacing `h-full overflow-hidden` with `min-h-full overflow-y-auto overflow-x-hidden`.
    - **Contact Slide ([Contact.tsx](file:///c:/Users/MAHESH/Documents/Kavya/portfolio/src/sections/Contact.tsx))**: Balanced 12-column layout with generous padding (`p-8 sm:p-10`), large typography, no nested box clutter, and full clearance for the LinkedIn button.
    - **Education Slide ([Education.tsx](file:///c:/Users/MAHESH/Documents/Kavya/portfolio/src/sections/Education.tsx))**: Expansive layout with enlarged degree details and 4 foundational discipline cards.
    - **Projects Slide ([Projects.tsx](file:///c:/Users/MAHESH/Documents/Kavya/portfolio/src/sections/Projects.tsx))**: Increased padding to `p-8 sm:p-10`, larger titles, and readable bullet points with `space-y-3`.
    - **Experience Slide ([Experience.tsx](file:///c:/Users/MAHESH/Documents/Kavya/portfolio/src/sections/Experience.tsx))**: Expanded pinned card to `max-w-5xl` with larger responsibility text (`text-sm sm:text-base`) and generous list spacing.
    - **Expertise Slide ([Expertise.tsx](file:///c:/Users/MAHESH/Documents/Kavya/portfolio/src/sections/Expertise.tsx))**: 6-card grid with larger headings, descriptions, and list items.
    - **About Slide ([About.tsx](file:///c:/Users/MAHESH/Documents/Kavya/portfolio/src/sections/About.tsx))**: Narrative enlarged to `text-lg sm:text-xl md:text-2xl` and stats counters to `text-5xl sm:text-6xl`.
    - **Hero Slide ([Hero.tsx](file:///c:/Users/MAHESH/Documents/Kavya/portfolio/src/sections/Hero.tsx))**: Enlarged monogram spotlight card (`w-80 h-[26rem] sm:w-96 sm:h-[30rem] lg:w-[24rem] lg:h-[32rem]`), larger subtitle, and prominent action buttons.

---

## 2. Single-Slide Presentation Architecture with Multi-Input Scroll Navigation
- [x] **Full-Screen Slide Presentation System (7 Distinct Slides)**:
  - Entire website operates as a presentation of **individual full-screen slides**.
  - Clicking any navigation item in the header switches directly to that slide with zero page scrolling.
  - **Cross-Browser & OS-Normalized Mouse Wheel Scrolling**:
    - Normalized `deltaMode === 1` (DOM_DELTA_LINE on Windows / Firefox physical wheel mice) with $40\times$ line multiplier and `deltaMode === 2` ($800\times$).
    - Replaced brittle boolean lock with an immutable `Date.now()` 500ms timestamp cooldown to prevent stuck scroll locks.
    - Added dual-layer event listening (both native `window.addEventListener('wheel')` and container `onWheel`) with stable refs to eliminate stale closures and unbind gaps.
    - Scrolling mouse wheel DOWN moves smoothly forward: `Home` &rarr; `About` &rarr; `Expertise` &rarr; `Experience` &rarr; `Projects` &rarr; `Education` &rarr; `Contact`.
    - Scrolling mouse wheel UP moves smoothly backward: `Contact` &rarr; `Education` &rarr; `Projects` &rarr; `Experience` &rarr; `Expertise` &rarr; `About` &rarr; `Home`.
    - Custom cubic-bezier vertical slide transitions (`ease: [0.22, 1, 0.36, 1]`) providing an ultra-smooth, editorial feel.
  - Synced with URL hash (`#home`, `#about`, `#expertise`, `#experience`, `#projects`, `#education`, `#contact`).
  - Slide controls at bottom with 7 interactive indicator pills, slide counter (`01 / 07`), and `PREV` / `NEXT` arrow buttons.
  - Full keyboard arrow navigation (`ArrowDown`, `ArrowUp`, `ArrowRight`, `ArrowLeft`, `PageDown`, `PageUp`).
  - Mobile touch swipe navigation.

---

## 3. In-Place Scrollytelling Experience ([Experience.tsx](file:///c:/Users/MAHESH/Documents/Kavya/portfolio/src/sections/Experience.tsx))
- [x] **Pinned Screen with Scroll-Triggered Phase Transitions**:
  - **Constant Screen**: The Experience screen stays pinned in place.
  - **Scroll Down Action 1**: Starts at **Phase 1: GIPCL** (2001–2010 | 9 Years, 125 MWe Thermal, MaxDNA DCS, Siemens TELEPERM ME, ABB PROCONTROL).
  - **Scroll Down Action 2**: Scrolling seamlessly transitions the card in-place to **Phase 2: NPCIL** (2010–Present | 16 Years, 700 MWe Nuclear PHWR, System Validation, Regulatory Approvals).
  - **Scroll Down Action 3**: Further scrolling transitions the card in-place to **Phase 3: 24+ Years Leadership Culmination** (4 core pillar counters, synthesis quote, and technology mastery).
  - **Scroll Down Action 4**: Scrolling down from Phase 3 smoothly advances to **Projects**.
  - **Reverse Scrolling**: Scrolling up from Projects lands on Phase 3 (`24+ Years`), and subsequent upward scrolls transition back through `NPCIL` &rarr; `GIPCL` &rarr; `Expertise`.
  - **Interactive Controls**: Users can also click the milestone node buttons or use the `PREV` / `NEXT` buttons on screen.

---

## 4. Implemented Slides (7 Total)
1. **Slide 1: Home ([Hero.tsx](file:///c:/Users/MAHESH/Documents/Kavya/portfolio/src/sections/Hero.tsx))** — 12-column spotlight layout with portrait card, headline, description, Mumbai location, and dual CTAs.
2. **Slide 2: Executive Summary ([About.tsx](file:///c:/Users/MAHESH/Documents/Kavya/portfolio/src/sections/About.tsx))** — 3 concise high-impact paragraphs, 4-column counter matrix, and philosophy banner.
3. **Slide 3: Technical Precision ([Expertise.tsx](file:///c:/Users/MAHESH/Documents/Kavya/portfolio/src/sections/Expertise.tsx))** — 6 C&I engineering domain cards arranged in 3-column &times; 2-row layout with glowing hover states.
4. **Slide 4: Career Journey ([Experience.tsx](file:///c:/Users/MAHESH/Documents/Kavya/portfolio/src/sections/Experience.tsx))** — Pinned scrollytelling view (`GIPCL` &rarr; `NPCIL` &rarr; `24+ Years`).
5. **Slide 5: Project Applications ([Projects.tsx](file:///c:/Users/MAHESH/Documents/Kavya/portfolio/src/sections/Projects.tsx))** — Nuclear (700 MWe PHWR with atom SVG) & Thermal (125 MWe with heat SVG) project showcases.
6. **Slide 6: Academic Foundation ([Education.tsx](file:///c:/Users/MAHESH/Documents/Kavya/portfolio/src/sections/Education.tsx))** — Bachelor of Engineering in Instrumentation & Control, Shantilal Shah Engineering College, Bhavnagar, Distinction, 1996–2000.
7. **Slide 7: Professional Networking Hub ([Contact.tsx](file:///c:/Users/MAHESH/Documents/Kavya/portfolio/src/sections/Contact.tsx))** — Expansive 2-column editorial spread with Mumbai location, NPCIL role, and LinkedIn CTA.

---

## 5. Tasks for Future Agents / Developers
- [ ] **Official Headshot**: Replace placeholder in `src/sections/Hero.tsx` when an official photo is provided.
- [ ] **Deployment**: Deploy `dist/` bundle to target hosting (Vercel, Cloudflare Pages, Netlify, or GitHub Pages).
