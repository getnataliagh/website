# Natalia Website

Site vitrine statique pour Natalia, l'assistante vocale IA.

## Stack Technique

- **Generateur**: [Eleventy (11ty)](https://www.11ty.dev/) v3
- **Templates**: Nunjucks (.njk)
- **Styles**: TailwindCSS v3.4
- **Hebergement**: Netlify
- **JavaScript**: Vanilla JS uniquement

## Structure du Projet

```
albany/
├── .eleventy.js          # Configuration Eleventy
├── package.json
├── netlify.toml          # Config Netlify
├── tailwind.config.js
├── postcss.config.js
│
├── src/
│   ├── _data/
│   │   └── site.json     # Metadonnees du site
│   │
│   ├── _includes/
│   │   ├── layouts/
│   │   │   └── base.njk  # Template HTML de base
│   │   │
│   │   └── components/
│   │       ├── navbar.njk
│   │       ├── footer.njk
│   │       └── [autres composants]
│   │
│   ├── pages/            # Pages du site (17 pages)
│   │   ├── index.njk
│   │   ├── contact.njk
│   │   ├── a-propos.njk
│   │   └── [...]
│   │
│   ├── css/
│   │   └── main.css      # TailwindCSS
│   │
│   ├── js/
│   │   └── main.js       # JavaScript vanilla
│   │
│   └── assets/
│       └── images/       # Images et assets
│
└── dist/                 # Build output
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage |
| `/a-propos/` | A propos |
| `/contact/` | Contact |
| `/automobile/` | Secteur automobile |
| `/calculateur/` | Calculateur ROI |
| `/assistante-vocale-ia/` | Produit - Assistante vocale |
| `/assistant-mail-automatisation-ia/` | Produit - Automatisation mail |
| `/centre-d-appel/` | Secteur - Centre d'appels |
| `/helpdesk/` | Secteur - Helpdesk |
| `/hotline/` | Secteur - Hotline |
| `/partenaires/` | Partenaires |
| `/presse/` | Presse |
| `/legal/` | Page legale principale |
| `/mentions-legales/` | Mentions legales |
| `/politique-confidentialite/` | Politique de confidentialite |
| `/conditions-generales-utilisation/` | CGU |

## Scripts

```bash
# Developpement (watch mode)
npm run dev

# Build production
npm run build

# Preview du build
npm run preview

# Nettoyer le dossier dist
npm run clean
```

## Deploiement

Le site se deploie automatiquement sur Netlify a chaque push sur la branche `main`.

Configuration Netlify:
- Build command: `npm run build`
- Publish directory: `dist`
- Node version: 22

## SEO

- `sitemap.xml` genere automatiquement
- `robots.txt` configure
- Meta tags Open Graph et Twitter
- URLs canoniques

---

**Last Updated**: December 2024
