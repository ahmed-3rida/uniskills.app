# Deployment Guide - Uni Skills Landing Page

Complete guide to deploy your Uni Skills landing page on Vercel.

## Prerequisites

- GitHub account
- Vercel account (free tier is sufficient)
- Git installed on your computer

## Step 1: Prepare Your Repository

### 1.1 Initialize Git (if not already done)

```bash
cd "Uniskills Web"
git init
```

### 1.2 Create .gitignore

Already included in the project. Verify it contains:

```
/node_modules
/.next
/out
.env*.local
.vercel
```

### 1.3 Commit Your Code

```bash
git add .
git commit -m "Initial commit: Uni Skills landing page"
```

### 1.4 Push to GitHub

Create a new repository on GitHub, then:

```bash
git remote add origin https://github.com/YOUR_USERNAME/uniskills-landing.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy on Vercel

### Method 1: Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Add New..." → "Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js settings:
   - **Framework Preset:** Next.js
   - **Root Directory:** `./`
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next`
6. Click "Deploy"
7. Wait 2-3 minutes for deployment
8. Your site is live! 🎉

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

## Step 3: Configure Custom Domain (Optional)

1. Go to your project on Vercel
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Update DNS records as instructed
5. Wait for DNS propagation (5-30 minutes)

## Step 4: Verify Deployment

### Check These URLs:

- Home page: `https://your-domain.vercel.app/`
- Terms page: `https://your-domain.vercel.app/terms/`

### Test Features:

- ✅ Theme toggle (light/dark)
- ✅ Language toggle (Arabic/English)
- ✅ All animations working
- ✅ Download button links to Play Store
- ✅ Social media links working
- ✅ Responsive on mobile/tablet/desktop

## Step 5: Performance Optimization

### Already Included:

- ✅ Static generation (`output: 'export'`)
- ✅ Image optimization disabled for static export
- ✅ Trailing slashes for clean URLs
- ✅ Minified CSS and JS
- ✅ Font optimization with Next.js

### Verify Performance:

1. Open Chrome DevTools
2. Go to Lighthouse tab
3. Run audit
4. Expected scores:
   - Performance: 95+
   - Accessibility: 95+
   - Best Practices: 95+
   - SEO: 95+

## Troubleshooting

### Build Fails

**Error:** `Module not found`
```bash
# Solution: Install dependencies
npm install
```

**Error:** `TypeScript errors`
```bash
# Solution: Check tsconfig.json and fix type errors
npm run build
```

### Deployment Issues

**Issue:** Site not updating
```bash
# Solution: Clear cache and redeploy
vercel --prod --force
```

**Issue:** 404 on routes
- Verify `next.config.js` has `trailingSlash: true`
- Check file names match routes

### Performance Issues

**Issue:** Slow loading
- Check image sizes (should be optimized)
- Verify animations aren't too heavy
- Check bundle size: `npm run build`

## Environment Variables

This project doesn't require environment variables for basic functionality.

If you need to add them later:

1. Go to Vercel Dashboard
2. Project Settings → Environment Variables
3. Add variables
4. Redeploy

## Continuous Deployment

Vercel automatically deploys when you push to GitHub:

```bash
# Make changes
git add .
git commit -m "Update content"
git push

# Vercel will automatically deploy
```

### Branch Deployments

- `main` branch → Production
- Other branches → Preview deployments

## Monitoring

### Vercel Analytics (Optional)

1. Go to your project on Vercel
2. Click "Analytics" tab
3. Enable Web Analytics
4. Add to `app/layout.tsx`:

```typescript
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

## Security

### Already Configured:

- ✅ HTTPS enabled by default
- ✅ Security headers
- ✅ XSS protection
- ✅ No sensitive data in client code

## Backup

### Export Static Site

```bash
npm run build
# Output in .next folder
```

### Download from Vercel

1. Go to Deployment
2. Click "..." menu
3. Download source or build output

## Support

### Vercel Support

- Documentation: [vercel.com/docs](https://vercel.com/docs)
- Community: [github.com/vercel/next.js/discussions](https://github.com/vercel/next.js/discussions)

### Project Issues

- Check build logs in Vercel Dashboard
- Review error messages
- Test locally first: `npm run build && npm start`

## Checklist

Before going live:

- [ ] All content reviewed and correct
- [ ] Social media links tested
- [ ] Download button links to correct Play Store URL
- [ ] Both languages (AR/EN) working
- [ ] Both themes (light/dark) working
- [ ] Mobile responsive
- [ ] Terms page complete
- [ ] Performance score 90+
- [ ] No console errors
- [ ] Custom domain configured (if applicable)

## Next Steps

After deployment:

1. Share your live URL
2. Test on multiple devices
3. Monitor analytics
4. Gather user feedback
5. Iterate and improve

---

**Congratulations! Your Uni Skills landing page is now live! 🚀**
