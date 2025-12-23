# Natalia Website

<div align="center">

![Build Process Animation](https://raw.githubusercontent.com/getnataliagh/website/main/.github/assets/build-flow.svg)

**Modern static website for Natalia - AI Voice Assistant for businesses**

[![Node Version](https://img.shields.io/badge/node-22.13.1-brightgreen)](https://nodejs.org/)
[![License](https://img.shields.io/badge/license-Private-red)]()
[![Netlify Status](https://api.netlify.com/api/v1/badges/bf402192-50ba-40b1-94f2-5fd00c21de98/deploy-status)](https://app.netlify.com/projects/genuine-biscuit-6e490c/deploys)

[Live Site](https://getnatalia.com)
</div>

---

## Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development](#development)
- [Build & Deployment](#build--deployment)
- [Features](#features)
- [Configuration](#configuration)
- [Scripts](#scripts)
- [Pages & Routes](#pages--routes)
- [Contributing](#contributing)
- [License](#license)

## Overview

**Natalia** is a modern, high-performance static website built for an AI-powered voice assistant platform. The site showcases enterprise voice AI solutions with a focus on performance, accessibility, and SEO.

### Key Highlights

- **100% Static** - Pre-rendered HTML for maximum performance
- **SEO Optimized** - Automatic sitemap generation, meta tags, semantic HTML
- **Mobile First** - Fully responsive design with TailwindCSS
- **Accessible** - WCAG 2.1 AA compliant
- **Fast Loading** - Optimized assets, lazy loading, CDN delivery
- **Modern Design** - Glassmorphism, bento-style layouts, micro-interactions

## Architecture

The project uses a **static site generation** approach with a modern build pipeline:

```
Source (EJS + TailwindCSS + JS)
         ↓
   Parcel Bundler
         ↓
  PostCSS Processing
         ↓
   Asset Optimization
         ↓
   Static HTML Output
         ↓
   Netlify CDN Deployment
```

### Build Pipeline

1. **Template Processing**: EJS templates are compiled with data from `data.js`
2. **CSS Processing**: TailwindCSS is processed by PostCSS with autoprefixer
3. **JavaScript Bundling**: ES6 modules are bundled and minified
4. **Asset Optimization**: Images and static files are copied and optimized
5. **Sitemap Generation**: Automatic sitemap.xml creation from routes
6. **Deployment**: Continuous deployment to Netlify on push to `main`

## Tech Stack

### Core

| Technology | Version | Purpose |
|------------|---------|---------|
| [Parcel](https://parceljs.org/) | 2.9.3 | Zero-config bundler and build tool |
| [EJS](https://ejs.co/) | - | Templating engine for HTML generation |
| [TailwindCSS](https://tailwindcss.com/) | 3.4.0 | Utility-first CSS framework |
| [Node.js](https://nodejs.org/) | 22.13.1 | JavaScript runtime (Volta managed) |

### Libraries & Plugins

- **Swiper** (11.0.5) - Touch-enabled carousels and sliders
- **Lottie Web** (5.12.2) - Lightweight animations from After Effects
- **PostCSS** - CSS processing and optimization
  - `autoprefixer` - Automatic vendor prefixing
  - `postcss-import` - CSS @import inlining
  - `postcss-100vh-fix` - Mobile viewport height fix
- **Parcel Transformers**
  - `parcel-transformer-ejs` - EJS template compilation
  - `parcel-reporter-sitemap` - Automatic sitemap.xml generation
  - `parcel-reporter-static-files-copy` - Static asset copying

### Development Tools

- **Nodemon** - Auto-reload on file changes
- **Volta** - Node version management

### Deployment

- **Netlify** - Static site hosting with CDN
- **GitHub Pages** - Alternative deployment target (GitLab CI configured)

## Project Structure

```
.
├── .github/
│   └── workflows/
│       └── deploy-pages.yml        # GitHub Actions workflow
├── scripts/
│   └── generate-favicon.sh         # Favicon generation script
├── src/                            # Source files
│   ├── assets/
│   │   ├── favicon.ico
│   │   └── images/                 # Image assets
│   ├── css/
│   │   └── main.css                # Additional styles
│   ├── includes/                   # Reusable partials
│   │   ├── _head.ejs               # <head> meta tags, fonts
│   │   ├── _header.ejs             # Global navigation header
│   │   └── _footer.ejs             # Global footer
│   ├── js/                         # JavaScript modules
│   │   ├── main.js                 # Main app logic
│   │   ├── mobile-menu.js          # Mobile menu interactions
│   │   └── scroll-animations.js    # Scroll-based animations
│   ├── *.ejs                       # Page templates
│   └── style.scss                  # Main stylesheet
├── static/                         # Static assets (copied to dist/)
│   ├── robots.txt
│   ├── favicon.ico
│   └── assets/
│       └── images/
├── data.js                         # Global data for templates
├── package.json                    # Dependencies and scripts
├── tailwind.config.js              # TailwindCSS configuration
├── postcss.config.js               # PostCSS configuration
├── .parcelrc                       # Parcel configuration
├── netlify.toml                    # Netlify deployment config
├── .gitlab-ci.yml                  # GitLab CI/CD config
├── .ejsrc.js                       # EJS configuration
└── README.md                       # This file
```

### Key Directories

- **`src/`** - All source files (templates, styles, scripts)
- **`src/includes/`** - Reusable EJS partials (header, footer, head)
- **`src/js/`** - JavaScript modules for interactivity
- **`static/`** - Static files copied as-is to `dist/`
- **`dist/`** - Generated output (gitignored, created on build)

### Important Files

- **`data.js`** - Centralized data source for all pages (navigation, site metadata, features, etc.)
- **`tailwind.config.js`** - TailwindCSS theme customization (colors, fonts, animations)
- **`.parcelrc`** - Parcel plugins and transformers configuration
- **`netlify.toml`** - Netlify build settings and security headers

## Getting Started

### Prerequisites

- **Node.js 22.13.1** (managed via Volta)
- **npm** (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/getnataliagh/website.git
cd website/.conductor/lusaka

# Install dependencies
npm install
```

## Development

### Local Development Server

```bash
# Start development server with hot reload
npm run serve
```

This command:
1. Watches for changes in `data.js`, `.ejs`, `.js`, and `.json` files
2. Rebuilds on changes (using Parcel)
3. Serves the `dist/` folder on `http://localhost:3000`

### Build for Development

```bash
# Build without cache (faster iteration)
npm run build:dev
```

### Production Build

```bash
# Build optimized production bundle
npm run build
```

This creates a production-ready `dist/` folder with:
- Minified HTML
- Optimized CSS (purged unused classes)
- Minified JavaScript
- Optimized images
- Generated sitemap.xml

### Clean Build

```bash
# Remove build artifacts
npm run clean
```

## Build & Deployment

### Netlify (Primary)

**Automatic Deployment** on push to `main` branch.

Build configuration (from `netlify.toml`):

```toml
[build]
  command = "npm install && npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "22"
```

**Security Headers** configured:
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`

**Cache Control**:
- Static assets (CSS, JS, images): 1 year immutable cache
- HTML: No cache (always fetch latest)

### GitHub Pages (Alternative)

Workflow: `.github/workflows/deploy-pages.yml`

Triggered on push to `main`:
1. Checkout code
2. Setup Node.js 22
3. Install dependencies
4. Build production bundle
5. Deploy to GitHub Pages

### GitLab CI (Alternative)

Configuration: `.gitlab-ci.yml`

Two-stage pipeline:
1. **Build**: `npm ci && npm run build` → artifacts to `dist/`
2. **Pages**: Move `dist/` → `public/` for GitLab Pages

## Features

### Design System

#### Colors

Custom brand colors defined in `tailwind.config.js`:

- **Primary**: `#5C39EE` - Main brand purple
- **Secondary**: `#B041F0` - Accent purple
- **Success**: `#16A34A` - Green for positive actions
- **Destructive**: `#DC2626` - Red for errors/warnings
- **Brand System**: Blue palette for trust/tech elements
- **Muted**: Gray scale for text hierarchy

#### Typography

Fonts loaded from Google Fonts:

- **Sans**: Inter (primary UI font)
- **Body**: Instrument Sans (readable body text)
- **Display**: Montserrat (headings and hero text)

Custom font sizes:
- H1: 52px desktop / 35px mobile
- H2: 40px desktop / 28px mobile
- H3: 24px desktop / 18px mobile
- Body: 16px with 1.6 line-height

#### Animations

Custom CSS animations:

- `fade-in` - Simple opacity fade
- `fade-in-up` - Fade with upward slide (scroll reveals)
- `slide-up`, `slide-down` - Vertical sliding
- `slide-in-left`, `slide-in-right` - Horizontal sliding
- `pulse-glow` - Glowing effect for CTAs
- `pulse-dot` - Dot indicator pulse
- `shimmer` - Gradient shimmer effect
- `float` - Subtle floating animation

### JavaScript Features

Modular JavaScript architecture (`src/js/main.js`):

- **Scroll Progress** - Visual progress indicator in header
- **Parallax Effects** - Smooth parallax on `[data-parallax]` elements
- **Animated Counters** - Number count-up animations on scroll
- **Mobile Menu** - Enhanced mobile navigation with focus trap
- **Dropdown Menus** - Accessible dropdown navigation
- **Lottie Animations** - SVG animations with scroll triggers
- **Swiper Carousels** - Touch-enabled sliders
- **Smooth Scroll** - Smooth anchor link scrolling
- **Magnetic Buttons** - Subtle mouse-follow effect on CTAs
- **Form Validation** - Client-side form validation

### Advanced Interactions

Scroll-based animations (`src/js/scroll-animations.js`):

```javascript
// Auto-detected animation triggers:
[data-animate="fade-up"]    // Fade in with upward slide
[data-animate="fade-left"]  // Slide in from left
[data-animate="fade-right"] // Slide in from right
[data-animate="scale"]      // Scale up on scroll
[data-stagger]              // Stagger child animations
```

### SEO Features

- **Automatic Sitemap** - Generated via `parcel-reporter-sitemap`
- **Meta Tags** - Open Graph and Twitter Card support
- **Semantic HTML** - Proper heading hierarchy and ARIA labels
- **robots.txt** - Search engine crawl directives
- **Canonical URLs** - Defined in page metadata
- **Structured Data** - JSON-LD schema markup (organization, breadcrumbs)

## Configuration

### TailwindCSS (`tailwind.config.js`)

Content sources:
```javascript
content: ['src/**/*.ejs', 'src/**/*.svg']
```

Extended theme with:
- Custom color palette
- Typography scale
- Spacing utilities
- Border radius tokens
- Box shadow utilities
- Animation keyframes

Plugins:
- `@tailwindcss/typography` - Prose styling for rich text

### PostCSS (`postcss.config.js`)

```javascript
module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss': {},
    'autoprefixer': {},
    'postcss-100vh-fix': {}
  }
}
```

### Parcel (`.parcelrc`)

```json
{
  "extends": ["@parcel/config-default"],
  "transformers": {
    "*.ejs": ["parcel-transformer-ejs"]
  },
  "reporters": [
    "parcel-reporter-sitemap",
    "parcel-reporter-static-files-copy"
  ]
}
```

### EJS (`.ejsrc.js`)

```javascript
module.exports = require('./data.js');
```

All templates have access to `locals` object from `data.js`:
- `locals.site` - Site metadata
- `locals.navigation` - Navigation menus
- `locals.features` - Feature lists
- `locals.testimonials` - Customer testimonials
- `locals.stats` - Statistics
- `locals.cta` - Call-to-action buttons

## Scripts

| Command | Description |
|---------|-------------|
| `npm run serve` | Development server with hot reload |
| `npm run build:dev` | Build for development (no cache) |
| `npm run build` | Production build with optimizations |
| `npm run clean` | Remove dist/ and .parcel-cache/ |

## Pages & Routes

### Public Pages

| Route | File | Description |
|-------|------|-------------|
| `/` | `index.ejs` | Homepage with hero, features, and CTA |
| `/assistante-vocale-ia` | `assistante-vocale-ia.ejs` | Voice AI solution page |
| `/analyse` | `analyse.ejs` | Call analysis solution |
| `/whatsapp` | `whatsapp.ejs` | WhatsApp integration solution |
| `/assistant-mail-automatisation-ia` | `assistant-mail-automatisation-ia.ejs` | Email automation |
| `/automobile` | `automobile.ejs` | Automotive industry solution |
| `/centre-d-appel` | `centre-d-appel.ejs` | Call center solution |
| `/helpdesk` | `helpdesk.ejs` | IT helpdesk solution |
| `/hotline` | `hotline.ejs` | 24/7 hotline solution |
| `/calculateur` | `calculateur.ejs` | ROI calculator |
| `/partenaires` | `partenaires.ejs` | Partners page |
| `/presse` | `presse.ejs` | Press and media page |
| `/a-propos` | `a-propos.ejs` | About us page |
| `/contact` | `contact.ejs` | Contact form |

### Legal Pages

| Route | File | Description |
|-------|------|-------------|
| `/legal` | `legal.ejs` | Legal hub page |
| `/mentions-legales` | `mentions-legales.ejs` | Legal mentions |
| `/politique-confidentialite` | `politique-confidentialite.ejs` | Privacy policy |
| `/conditions-generales-utilisation` | `conditions-generales-utilisation.ejs` | Terms of service |

### Error Pages

| Route | File | Description |
|-------|------|-------------|
| `/404` | `404.ejs` | Custom 404 page with animated SVG |

All pages include:
- SEO meta tags
- Open Graph tags
- Twitter Card tags
- Canonical URLs
- Proper heading hierarchy

## Data Management

All site data is centralized in `data.js`:

```javascript
module.exports = {
  site: {
    currentYear: new Date().getFullYear(),
    name: 'Natalia',
    title: 'Natalia - Assistante Vocale IA',
    description: '...',
    url: 'https://getnatalia.com',
    // ... more metadata
  },
  navigation: {
    main: [...],
    footer: [...]
  },
  features: [...],
  testimonials: [...],
  stats: [...],
  cta: {...}
}
```

This approach:
- Centralizes content management
- Enables easy updates across all pages
- Supports future CMS integration
- Maintains consistency

## Link Validation

### Internal Links

All internal links use relative paths:
- Solutions: `./assistante-vocale-ia`, `./analyse`, `./whatsapp`
- Sectors: `./automobile`, `./centre-d-appel`, `./helpdesk`, `./hotline`
- Company: `./a-propos`, `./partenaires`, `./presse`, `./contact`
- Legal: `./mentions-legales`, `./politique-confidentialite`, `./conditions-generales-utilisation`
- Tools: `./calculateur`

### External Links

Validated external resources:

**CDN & Libraries:**
- ✅ Google Fonts: `https://fonts.googleapis.com`
- ✅ Swiper CSS: `https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css`
- ✅ Swiper JS: `https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js`
- ✅ Lottie: `https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js`

**Contact & Forms:**
- ✅ Email: `contact@getnatalia.com`
- ✅ Press Email: `presse@getnatalia.com`
- ⚠️ Form Endpoint: `https://formspree.io/f/contact` (configure with actual form ID)

**Team LinkedIn Profiles:**
- ✅ Nicolas Dubreuil: `https://linkedin.com/in/nicolas-dubreuil-essca/`
- ✅ Jeremy David: `https://linkedin.com/in/jeremy-david-279564157/`
- ✅ Louis Marsais: `https://linkedin.com/in/louis-marsais/`
- ✅ François-Guillaume Ribreau: `https://linkedin.com/in/francoisguillaumeribreau/`
- ✅ Baptiste Parmantier: `https://linkedin.com/in/baptiste-parmantier/`

**External References:**
- ✅ SaaS Camp: `https://www.saas.camp/`
- ✅ Press Article: `https://www.informateurjudiciaire.fr/actualites/natalia-lia-transforme-la-gestion-administrative/`

**Social Media:**
- ⚠️ LinkedIn: Empty (configure in `data.js`)
- ⚠️ Twitter: Empty (configure in `data.js`)

## Performance Optimizations

- **Code Splitting** - Automatic by Parcel
- **Tree Shaking** - Unused code removal
- **Minification** - HTML, CSS, JS compression
- **Image Optimization** - Automatic format conversion
- **Lazy Loading** - Images and animations load on scroll
- **CSS Purging** - TailwindCSS removes unused utilities
- **Asset Hashing** - Cache busting for static files
- **Preconnect** - DNS prefetch for external resources
- **Font Display Swap** - Prevent FOIT (Flash of Invisible Text)

## Browser Support

Targets modern browsers with ES6+ support:

- Chrome/Edge: Last 2 versions
- Firefox: Last 2 versions
- Safari: Last 2 versions
- iOS Safari: Last 2 versions
- Android Chrome: Last 2 versions

Graceful degradation:
- `<noscript>` fallbacks for animations
- CSS feature queries for modern features
- Progressive enhancement approach

## Accessibility

WCAG 2.1 AA compliant:

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Screen reader optimized
- Color contrast ratios met
- Alt text for images
- Skip to main content link

## Contributing

This is a private project. For team members:

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make changes and test locally
3. Commit: `git commit -m "feat: description"`
4. Push: `git push origin feature/your-feature`
5. Create Pull Request to `main`

### Commit Convention

Follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `style:` Formatting, no code change
- `refactor:` Code restructuring
- `perf:` Performance improvement
- `test:` Adding tests
- `chore:` Build process or auxiliary tools

## Troubleshooting

### Build Issues

**Problem**: Parcel cache causing issues
```bash
npm run clean
npm run build
```

**Problem**: Node version mismatch
```bash
# Ensure Volta is installed
volta install node@22.13.1
```

### Development Server

**Problem**: Hot reload not working
```bash
# Restart development server
npm run serve
```

**Problem**: Port 3000 already in use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

### Styling Issues

**Problem**: TailwindCSS classes not applying
- Check `tailwind.config.js` content paths
- Verify class names are valid
- Run `npm run build:dev` to rebuild

## License

This project is private and proprietary.

**Copyright** &copy; 2024 Natalia. All rights reserved.

---

<div align="center">

**Built with** ❤️ **by the Natalia team**

[Website](https://getnatalia.com) • [Contact](mailto:contact@getnatalia.com)

</div>
