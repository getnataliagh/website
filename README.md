# Natalia Website

Site vitrine statique pour Natalia, l'assistante vocale IA.

## Stack Technique

- **Generateur**: [Eleventy (11ty)](https://www.11ty.dev/) v3
- **Templates**: Nunjucks (.njk)
- **Styles**: TailwindCSS v3.4
- **Hebergement**: Netlify
- **JavaScript**: Vanilla JS uniquement


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
