# Installation & Testing Guide

Complete guide to install, test, and verify the Uni Skills landing page.

## 📋 Prerequisites

Before you begin, ensure you have:

- ✅ **Node.js 18+** installed ([Download](https://nodejs.org/))
- ✅ **npm** or **yarn** package manager
- ✅ **Git** installed (for version control)
- ✅ **Code editor** (VS Code recommended)
- ✅ **Modern browser** (Chrome, Firefox, Safari, or Edge)

### Check Your Setup

```bash
# Check Node.js version (should be 18+)
node --version

# Check npm version
npm --version

# Check Git version
git --version
```

## 🚀 Installation Steps

### Step 1: Navigate to Project

```bash
cd "Uniskills Web"
```

### Step 2: Install Dependencies

```bash
# Using npm
npm install

# Or using yarn
yarn install
```

**Expected output:**
```
added 250+ packages in 30s
```

**If you see errors:**
```bash
# Clear cache and retry
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Step 3: Verify Installation

```bash
# Check if node_modules exists
ls node_modules

# Should see folders like: next, react, framer-motion, etc.
```

## 🧪 Testing Locally

### Start Development Server

```bash
npm run dev
```

**Expected output:**
```
▲ Next.js 14.2.0
- Local:        http://localhost:3000
- Ready in 2.5s
```

### Open in Browser

1. Open your browser
2. Navigate to: `http://localhost:3000`
3. You should see the landing page!

## ✅ Testing Checklist

### Visual Tests

#### 1. Home Page Load
- [ ] Page loads without errors
- [ ] Header is visible and fixed at top
- [ ] Hero section displays correctly
- [ ] All sections are visible
- [ ] Footer is at bottom

#### 2. Theme Toggle
- [ ] Click moon/sun icon in header
- [ ] Page switches between light and dark mode
- [ ] Colors change appropriately
- [ ] Neon effects visible in dark mode
- [ ] Theme persists on page refresh

#### 3. Language Toggle
- [ ] Click globe icon in header
- [ ] Content switches between Arabic and English
- [ ] Text direction changes (RTL/LTR)
- [ ] All text translates correctly
- [ ] Language persists on page refresh

#### 4. Animations
- [ ] Hero section fades in on load
- [ ] Phone mockup floats up and down
- [ ] Features cards fade in on scroll
- [ ] Cards lift on hover
- [ ] Icons rotate on hover
- [ ] Buttons glow on hover
- [ ] Background gradients animate

#### 5. Navigation
- [ ] Click "Terms of Service" in footer
- [ ] Terms page loads correctly
- [ ] Click "Back to Home" button
- [ ] Returns to home page
- [ ] Smooth scrolling works

#### 6. External Links
- [ ] Click "Download Now" button
- [ ] Opens Google Play Store in new tab
- [ ] Click Facebook icon
- [ ] Opens Facebook page in new tab
- [ ] Test all social media links
- [ ] All links work correctly

### Responsive Tests

#### Mobile (375px)
```bash
# In browser DevTools:
# 1. Press F12
# 2. Click device toggle (Ctrl+Shift+M)
# 3. Select iPhone SE or similar
```

- [ ] Layout stacks vertically
- [ ] Text is readable
- [ ] Buttons are tappable
- [ ] Images scale correctly
- [ ] No horizontal scroll

#### Tablet (768px)
```bash
# In DevTools, select iPad or similar
```

- [ ] 2-column layout for features
- [ ] Hero section side-by-side
- [ ] Comfortable spacing
- [ ] Touch targets adequate

#### Desktop (1920px)
```bash
# In DevTools, select Responsive and set to 1920x1080
```

- [ ] Content centered
- [ ] Max-width container works
- [ ] 3-column feature grid
- [ ] Proper spacing
- [ ] No stretched elements

### Performance Tests

#### Lighthouse Audit

1. Open Chrome DevTools (F12)
2. Go to "Lighthouse" tab
3. Select "Desktop" or "Mobile"
4. Click "Analyze page load"

**Expected Scores:**
- Performance: 95+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

#### Load Time Test

1. Open DevTools Network tab
2. Refresh page (Ctrl+R)
3. Check load time

**Expected:**
- DOMContentLoaded: < 1s
- Load: < 2s
- Total size: < 500KB

### Browser Compatibility Tests

Test in multiple browsers:

- [ ] **Chrome** (latest)
  - All features work
  - Animations smooth
  - No console errors

- [ ] **Firefox** (latest)
  - All features work
  - Animations smooth
  - No console errors

- [ ] **Safari** (latest)
  - All features work
  - Animations smooth
  - No console errors

- [ ] **Edge** (latest)
  - All features work
  - Animations smooth
  - No console errors

### Console Check

Open browser console (F12 → Console tab):

- [ ] No red errors
- [ ] No warnings (or only minor ones)
- [ ] No 404 errors
- [ ] No CORS errors

## 🔍 Debugging Common Issues

### Issue: Port 3000 Already in Use

**Solution:**
```bash
# Use different port
npm run dev -- -p 3001

# Or kill process on port 3000
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux:
lsof -ti:3000 | xargs kill
```

### Issue: Module Not Found

**Solution:**
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Issue: TypeScript Errors

**Solution:**
```bash
# Check for type errors
npm run build

# Fix errors shown in output
```

### Issue: Styles Not Loading

**Solution:**
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

### Issue: Animations Not Working

**Check:**
- Framer Motion installed: `npm list framer-motion`
- No JavaScript errors in console
- Browser supports CSS animations

### Issue: Theme Not Persisting

**Check:**
- Browser allows localStorage
- No private/incognito mode
- Check browser console for errors

## 🏗️ Build for Production

### Create Production Build

```bash
npm run build
```

**Expected output:**
```
✓ Compiled successfully
✓ Collecting page data
✓ Generating static pages (2/2)
✓ Finalizing page optimization

Route (app)                Size
┌ ○ /                      1.2 kB
└ ○ /terms                 1.5 kB
```

### Test Production Build Locally

```bash
# Build first
npm run build

# Serve the build
npx serve out

# Open http://localhost:3000
```

### Verify Production Build

- [ ] All pages load
- [ ] No console errors
- [ ] Animations work
- [ ] Theme toggle works
- [ ] Language toggle works
- [ ] All links work

## 📊 Performance Optimization

### Check Bundle Size

```bash
npm run build

# Look for output like:
# First Load JS: 85 kB
# Should be under 200 kB
```

### Analyze Bundle

```bash
# Install analyzer
npm install --save-dev @next/bundle-analyzer

# Add to next.config.js:
# const withBundleAnalyzer = require('@next/bundle-analyzer')({
#   enabled: process.env.ANALYZE === 'true',
# })

# Run analysis
ANALYZE=true npm run build
```

## 🔒 Security Check

### Check for Vulnerabilities

```bash
npm audit

# If issues found:
npm audit fix
```

### Update Dependencies

```bash
# Check outdated packages
npm outdated

# Update all
npm update

# Or update specific package
npm update next
```

## 📝 Pre-Deployment Checklist

Before deploying to production:

- [ ] All tests pass
- [ ] No console errors
- [ ] Lighthouse score 90+
- [ ] All links work
- [ ] Content reviewed
- [ ] Responsive on all devices
- [ ] Both themes work
- [ ] Both languages work
- [ ] Terms page complete
- [ ] Social links correct
- [ ] Download button correct
- [ ] No TODO comments in code
- [ ] README updated
- [ ] Git committed

## 🚀 Ready to Deploy?

If all tests pass, you're ready to deploy!

See `DEPLOYMENT.md` for deployment instructions.

## 📞 Need Help?

### Common Resources

- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind Docs:** https://tailwindcss.com/docs
- **Framer Motion:** https://www.framer.com/motion/

### Troubleshooting Steps

1. Check console for errors
2. Verify all dependencies installed
3. Clear cache and rebuild
4. Test in different browser
5. Check documentation
6. Search for error message

## 🎉 Success!

If you've completed all tests successfully, congratulations! Your Uni Skills landing page is ready for production.

**Next Steps:**
1. Commit your code to Git
2. Push to GitHub
3. Deploy to Vercel
4. Share your live URL!

---

**Happy Testing! 🚀**
