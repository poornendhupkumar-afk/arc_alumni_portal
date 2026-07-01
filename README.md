# ARC Alumni Portal — Track 2

**Alumni Relations Cell (ARC) · Technical Team Recruitment**
**Live Site:** https://arc-alumni-portal.vercel.app

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Features Implemented](#features-implemented)
5. [Setup & Running Locally](#setup--running-locally)
6. [Design Decisions & Assumptions](#design-decisions--assumptions)
7. [Additional Features Beyond Brief](#additional-features-beyond-brief)
8. [Accessibility & Performance](#accessibility--performance)
9. [Deployment](#deployment)

---

## Project Overview

The ARC Alumni Portal is a modern, fully responsive web application that serves as the central hub for alumni engagement and community interaction. It enables alumni to connect with each other, discover fellow graduates, explore achievements, browse job opportunities, find mentors, attend events, and engage with the broader alumni network — all through an intuitive, visually rich experience.

The portal is built as a **single-file, zero-dependency frontend** — no build tooling or package managers are required. All styles, logic, and markup are self-contained, making it trivially easy to deploy anywhere (Vercel, Netlify, GitHub Pages, or even a plain file server).

---

## Tech Stack

| Layer | Technology |
|---|---|
| Markup | Semantic HTML5 |
| Styling | Vanilla CSS (custom design tokens, CSS variables) |
| Interactivity | Vanilla JavaScript (ES2020+) |
| Fonts | Google Fonts — Inter + Playfair Display |
| Hosting | Vercel |
| Build system | None required (static HTML) |

**Why no framework?** Track 2 explicitly states a backend is not required and mock data is acceptable. A framework would add unnecessary build complexity for what is fundamentally a UI/UX showcase. Vanilla JS also demonstrates direct DOM competence with no abstraction layer.

---

## Project Structure

```
arc-alumni-portal/
├── index.html          # Entire application — HTML, CSS, and JS in one file
└── README.md           # This file
```

The single-file architecture is intentional. All sections (Landing, Directory, Events, Jobs, Mentorship, Stories, About, Dashboard) are rendered inline and toggled via JavaScript — functioning as a single-page application (SPA) without a router dependency.

---

## Features Implemented

### Core Brief Requirements

| Requirement | Status | Notes |
|---|---|---|
| Landing Page | ✅ | Hero with animated blobs, tagline, CTAs, hero alumni card |
| Dashboard | ✅ | Profile completion ring, recommended connections, upcoming events |
| Alumni Directory | ✅ | Grid of alumni cards with full profiles |
| Search Experience | ✅ | Text, batch, domain, and quick-filter search |
| Alumni Profile Pages | ✅ | Modal with career timeline, skills, connect/message actions |
| Success Stories | ✅ | Testimonial grid with star ratings and author details |
| About Us | ✅ | ARC story, values, and team cards |
| Dark Mode | ✅ | Full dark/light toggle with `localStorage` persistence |

### Optional Enhancements (from brief)

| Enhancement | Status | Implementation |
|---|---|---|
| Advanced search & filtering | ✅ | Batch year, domain, city, and keyword filtering; quick-filter tag buttons |
| Personalised dashboard | ✅ | Profile completion ring (canvas), recommended connections, upcoming event feed, completion checklist |
| Animations & micro-interactions | ✅ | Page loader, animated stat counters (scroll-triggered), floating hero badges, card hover effects, timeline reveal animations |
| Mobile-first experience | ✅ | Mobile drawer nav, bottom navigation bar, touch-friendly cards, responsive grid breakpoints |
| Creative visual storytelling | ✅ | ARC Journey timeline section with scroll-triggered reveal |
| Accessibility improvements | ✅ | Skip link, ARIA labels, roles, `aria-live` regions, focus rings, `prefers-reduced-motion` support |

---

## Setup & Running Locally

No installation or build step is required.

**Option 1 — Open directly**

```bash
# Clone or download the repository
git clone https://github.com/<your-username>/arc-alumni-portal.git
cd arc-alumni-portal

# Open in browser
open index.html        # macOS
start index.html       # Windows
xdg-open index.html    # Linux
```

**Option 2 — Serve with a local server (recommended for Google Fonts)**

```bash
# Using Python (pre-installed on most systems)
python3 -m http.server 3000
# Then open http://localhost:3000

# Or using Node.js
npx serve .
```

**No `.env` files, no API keys, no database, no build step.** Everything runs client-side with mock data.

---

## Design Decisions & Assumptions

### Mock Data
All alumni, events, jobs, stories, and mentor data is statically defined in JavaScript within `index.html`. This is explicitly permitted by the brief ("mock data may be used where appropriate") and makes the portal fully functional without a backend.

### Single-Page Application Architecture
Rather than separate HTML pages, all content is shown/hidden via a `showSection()` JavaScript function. This gives SPA-style navigation with zero routing dependency and instant page transitions.

### Dark Mode Persistence
Dark mode preference is stored in `localStorage` under the key `arc-theme`. On page load, the stored preference is applied before the first paint to prevent flash-of-wrong-theme.

### Profile Modal vs Separate Profile Page
Alumni profiles open in a modal overlay rather than a separate route. This decision was made because:
- The brief does not mandate a backend or URL-based routing
- Modals provide faster perceived navigation
- A separate profile page would require a router and unique URLs, which are unnecessary without a backend

### Stat Counter Animation
The hero and stats bar animate numeric counters from 0 to their target value using `requestAnimationFrame`-style intervals with an ease-out cubic curve. Counters in the stats bar are triggered on scroll (IntersectionObserver), not on page load, to ensure they are visible when animated.

### Search Algorithm
Filtering is done entirely client-side using JavaScript `Array.filter`. The search matches against name, company, role, and tag fields simultaneously. Batch and domain are exact-match dropdowns. Quick-filter tags (`Open to Mentor`, `Hiring`, city filters) cross-match the alumni's `tags` array.

### Event Registration
Event registration state is maintained in a JavaScript `Set` during the session. Registering updates the button label and colour and fires a toast notification. This state is not persisted (no backend), which is a known limitation noted under assumptions.

### Responsive Breakpoints
- `< 768px` — Mobile: hamburger nav hidden, bottom navigation bar shown, grid collapses to single column
- `768px – 1024px` — Tablet: two-column grids, mobile drawer hidden
- `> 1024px` — Desktop: full navigation, multi-column layouts

---

## Additional Features Beyond Brief

The following features were added beyond what the brief specifies:

### 1. Jobs Board
A dedicated jobs section listing roles posted by ARC alumni exclusively. Includes search by keyword, filter by job type (Full-time / Internship / Contract) and remote preference (Remote / Hybrid / On-site). Each card shows the alumni who referred the role and a one-click Apply button with a toast confirmation.

### 2. Mentorship Matching Widget
A standalone mentorship section (distinct from the full Track 3 platform) where students can browse and request mentorship from alumni mentors. Includes domain-based filtering, mentor availability status (Open / Waitlist), expertise tags, and request buttons.

### 3. Alumni Chapter Map
A hand-crafted SVG map of India with interactive city-chapter nodes. Each node is sized proportionally to chapter membership. Clicking a node or a city in the sidebar list shows a tooltip with member count and annual events. Eight major chapters are represented: Bangalore, Mumbai, Delhi NCR, Hyderabad, Chennai, Kolkata, Pune, and Kochi.

### 4. Newsletter Signup
A dedicated newsletter section with real-time email validation (empty check + regex), inline error messages, and a success confirmation state. On valid submission, the input and button are replaced with a success message, and a toast notification fires.

### 5. Alumni of the Month Spotlight
A featured alumni card with crown badge, pull-quote, expertise tags, and batch year — rotated monthly. Designed to celebrate outstanding alumni contributions.

### 6. Toast Notification System
A global, accessible toast system for all user actions: connection requests, event registration, newsletter signup, mentor requests, job applications, and more. Toasts are colour-coded by type (success / error / info / warning), auto-dismiss after 4 seconds, and include a manual dismiss button. They are announced to screen readers via `aria-live="polite"`.

### 7. Back-to-Top Button
A floating button that appears after 400px of scroll. Smooth-scrolls to the top on click. Positioned above the bottom navigation bar on mobile.

### 8. Animated Stat Counters on Scroll
Both the hero section and the stats bar animate their numeric counters from zero to their target values using an ease-out cubic interpolation. The stats bar animation is triggered by `IntersectionObserver` on scroll so it plays when the section enters the viewport.

### 9. ARC Journey / Timeline Section
An immersive visual storytelling timeline tracing ARC's history from 1998 to 2025. Uses `IntersectionObserver` to reveal each timeline entry with a fade-up animation as the user scrolls. Alternating left/right layout on desktop, linear on mobile.

### 10. Profile Completion Ring (Dashboard)
The dashboard renders a circular progress ring on an HTML `<canvas>` element showing the user's profile completion percentage (72% for the demo user). Accompanied by a checklist of pending profile items with visual tick/circle indicators.

### 11. Mobile Bottom Navigation Bar
On screens narrower than 768px, a persistent bottom navigation bar with icon + label pairs (Home, People, Events, Jobs, Dashboard) replaces the top navigation links. This follows standard native mobile UX patterns.

### 12. Personalized Dashboard
The dashboard aggregates: profile completion ring, four key stats (connections, events attended, messages, mentor requests), a recommended connections panel, an upcoming events panel, and a profile completion checklist — all with mock data representative of a real logged-in user.

---

## Accessibility & Performance

### Accessibility
- Skip-to-main-content link for keyboard users
- All interactive elements have `aria-label`, `role`, and `aria-expanded` where appropriate
- Toast notifications use `aria-live="polite"` for screen reader announcements
- Form inputs have associated `<label>` elements and `aria-describedby` for error messages
- Chapter map nodes have `role="button"` and `aria-label` with city and count info
- `prefers-reduced-motion` media query disables all CSS animations for users who request it
- Focus rings are visible on all interactive elements via `:focus-visible`

### Performance
- No JavaScript frameworks, no npm packages, no build step — **zero bundle overhead**
- Google Fonts loaded with `rel="preconnect"` hints and `display=swap`
- Animations use CSS transforms and opacity only (GPU-composited properties)
- Images are entirely replaced with CSS gradients and SVG — **zero image HTTP requests**
- IntersectionObserver used for lazy stat animation (avoids animating off-screen)
- Total page size: **~1 HTML file, ~80 KB uncompressed**

---

## Deployment

The portal is deployed on **Vercel** as a static site.

**Live URL:** https://arc-alumni-portal.vercel.app

To deploy your own instance:

```bash
# Install Vercel CLI
npm install -g vercel

# From the project root
vercel

# Follow prompts — framework: Other, root: ./
```

Alternatively, drag and drop the `index.html` file into **Netlify Drop** at https://app.netlify.com/drop for instant deployment.

---

## Known Limitations & Future Scope

| Limitation | Notes |
|---|---|
| All data is mock/static | A real backend (e.g. Spring Boot + PostgreSQL) would power live alumni data |
| No authentication | Login/signup flow is UI-only with no real session management |
| Event registration is session-only | Registrations reset on page refresh without a backend |
| Search is client-side only | At scale, server-side search (Elasticsearch) would be needed |
| No real-time messaging | The "Message" button in profile modals is a placeholder |
| Chapter map is India-only | An international map with global chapter data is a natural extension |

---

*Built for the ARC Technical Team Recruitment — Track 2: Alumni Portal Design.*
*All alumni, events, jobs, and stories shown are illustrative mock data.*
