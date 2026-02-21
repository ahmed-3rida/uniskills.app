# Uni Skills Landing Page

Modern, responsive landing page for Uni Skills educational app built with Next.js, TypeScript, and Tailwind CSS.

## Features

- ✨ Modern, premium design inspired by Stripe, Notion, and Linear
- 🌓 Dark mode and Light mode with smooth transitions
- 🌍 Bilingual support (Arabic RTL & English LTR)
- 📱 Fully responsive design
- 🎨 Smooth animations with Framer Motion
- ⚡ Optimized for Vercel deployment
- 🎯 SEO optimized
- 🚀 Fast loading with Next.js 14

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Font:** Cairo (Google Fonts)

## Color Scheme

Matches the Flutter app's design system:

### Light Theme
- Primary: `#2E3FE6`
- Secondary: `#4A5FE7`
- Background: `#F5F5F5`

### Dark Theme (Neon)
- Neon Blue: `#00D9FF`
- Neon Purple: `#BB86FC`
- Neon Pink: `#FF006E`
- Neon Green: `#39FF14`
- Dark Background: `#0A0E27`
- Dark Surface: `#1A1F3A`

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Run development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
# or
yarn build
```

## Deployment on Vercel

### Quick Deploy

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js and configure everything
6. Click "Deploy"

### Manual Configuration

If needed, use these settings:

- **Framework Preset:** Next.js
- **Build Command:** `npm run build`
- **Output Directory:** `.next`
- **Install Command:** `npm install`

### Environment Variables

No environment variables required for basic functionality.

## Project Structure

```
Uniskills Web/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Home page
│   ├── terms/
│   │   └── page.tsx        # Terms of Service page
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── HeroSection.tsx     # Hero section with CTA
│   ├── FeaturesSection.tsx # Features grid
│   ├── ComingSoonSection.tsx # Coming soon features
│   ├── AboutSection.tsx    # About section
│   ├── SocialSection.tsx   # Social media links
│   ├── Footer.tsx          # Footer component
│   └── ThemeProvider.tsx   # Theme & language context
├── lib/
│   └── translations.ts     # Arabic & English translations
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
├── next.config.js         # Next.js configuration
└── package.json           # Dependencies

```

## Customization

### Update Content

Edit translations in `lib/translations.ts`:

```typescript
export const translations = {
  ar: { /* Arabic content */ },
  en: { /* English content */ }
}
```

### Update Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: '#2E3FE6',
  // Add your colors
}
```

### Update Social Links

Edit `components/SocialSection.tsx`:

```typescript
const socialLinks = [
  { name: 'Facebook', url: 'your-url', ... }
]
```

## Pages

- **Home (`/`):** Main landing page with all sections
- **Terms (`/terms`):** Terms of Service page

## Features Included

### Home Page Sections
1. Hero Section with download CTA
2. Features grid (6 features)
3. Coming Soon section (Exams & iOS)
4. About section with stats
5. Social media links
6. Footer with navigation

### Terms Page
- Fully styled terms of service
- 7 comprehensive sections
- Back to home navigation
- Matches main design system

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1s
- Time to Interactive: < 2s
- Static generation for optimal performance

## License

© 2024 Uni Skills. All Rights Reserved.

## Support

For questions or issues:
- Facebook: [facebook.com/uniskills.eg](https://facebook.com/uniskills.eg)
- Instagram: [@uniskills.app](https://instagram.com/uniskills.app)
- WhatsApp: [Channel Link](https://whatsapp.com/channel/0029VbCWl5B2f3EBP01LLm2d)
- YouTube: [@uni.skills](https://youtube.com/@uni.skills)
