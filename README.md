# Natalia Website

A modern Next.js website built with Plasmic Studio, featuring visual design capabilities and automated deployment through GitHub Actions to Netlify.

## 🚀 Deployment Workflow

The project follows a fully automated CI/CD pipeline from design to production:

```
┌─────────────────┐      ┌──────────────────┐      ┌─────────────────┐
│                 │      │                  │      │                 │
│  Plasmic.app    │───►  │  GitHub Actions  │───►  │    Netlify      │
│  Visual Editor  │      │  CI/CD Pipeline  │      │   CDN & Host    │
│                 │      │                  │      │                 │
└─────────────────┘      └──────────────────┘      └─────────────────┘
        │                         │                         │
        │                         │                         │
    [Publish]              [Sync & Build]              [Deploy]
        │                         │                         │
        ▼                         ▼                         ▼
   Design Pages           Commit to Repo           Live Website
   & Components          Update Codebase          Global CDN
```

### Workflow Details

| Stage | Platform | Description | Action |
|-------|----------|-------------|--------|
| **1. Design** | [Plasmic Studio](https://plasmic.app) | Visual design environment where components and pages are created | Click "Publish" to deploy |
| **2. Sync** | GitHub Actions | Automated workflow triggered by Plasmic webhook | Syncs design changes to code |
| **3. Build** | GitHub Repository | Next.js application build and validation | Commits changes to main branch |
| **4. Deploy** | [Netlify](https://app.netlify.com/projects/genuine-biscuit-6e490c/overview) | Automatic deployment on push | Builds and serves the site |
| **5. Distribute** | Netlify CDN | Global content delivery network | Optimized worldwide access |

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) - React framework for production
- **Design System**: [Plasmic](https://www.plasmic.app/) - Visual page builder
- **Styling**: CSS Modules with Plasmic design tokens
- **Components**: 
  - Ant Design 5 components
  - React Aria for accessibility
  - React Slick for carousels
  - YouTube integration
- **Deployment**: [Netlify](https://www.netlify.com/) - Hosting and CDN
- **CI/CD**: GitHub Actions - Automated workflows

## 📁 Project Structure

```
.
├── .github/
│   └── workflows/
│       └── plasmic.yml      # GitHub Actions workflow
├── components/              # Custom React components
├── pages/                   # Next.js pages
├── plasmic/                 # Plasmic-generated components
├── public/                  # Static assets
├── styles/                  # Global styles
├── plasmic.json            # Plasmic configuration
├── package.json            # Project dependencies
└── next.config.js          # Next.js configuration
```

## 🚦 Getting Started

### Prerequisites

- Node.js 22.13.1 (managed by Volta)
- npm or yarn package manager
- Access to Plasmic project (for design updates)

### Local Development

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   ```
   http://localhost:3000
   ```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build production-ready application |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint for code quality |

## 🔄 Making Changes

### Design Changes (Recommended)

1. **Open Plasmic Studio**: Access your project at [plasmic.app](https://plasmic.app)
2. **Make visual changes**: Use the visual editor to modify components and pages
3. **Preview changes**: Test your changes in Plasmic's preview mode
4. **Publish**: Click the "Publish" button to trigger deployment
5. **Automatic deployment**: Changes will flow through GitHub to Netlify automatically

### Code Changes

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**: Edit code locally
3. **Test locally**: Ensure changes work as expected
4. **Commit and push**
   ```bash
   git add .
   git commit -m "feat: description of changes"
   git push origin feature/your-feature-name
   ```

5. **Create Pull Request**: Open PR to main branch for review

## 🔐 Environment Variables

For local development, create a `.env.local` file:

```env
# Add any required environment variables here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 📊 Performance Optimization

The site implements several performance optimizations:

- **Static Generation**: Pages are pre-rendered at build time
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting for faster page loads
- **CDN Distribution**: Global edge caching via Netlify
- **SEO Optimization**: Automatic sitemap generation post-build

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is private and proprietary.

## 🆘 Support

For issues or questions:
- **Design issues**: Contact via Plasmic Studio support
- **Deployment issues**: Check Netlify dashboard or GitHub Actions logs
- **Code issues**: Open an issue in this repository

## 🔗 Useful Links

- [Plasmic Documentation](https://docs.plasmic.app/learn/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Netlify Documentation](https://docs.netlify.com/)
- [Project Dashboard on Netlify](https://app.netlify.com/projects/genuine-biscuit-6e490c/overview)

---

**Last Updated**: December 2024