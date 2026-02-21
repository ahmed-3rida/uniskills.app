# Quick Start Guide - Uni Skills Landing Page

Get your landing page running in 5 minutes!

## 🚀 Super Quick Start

```bash
# 1. Navigate to project
cd "Uniskills Web"

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev

# 4. Open browser
# Visit: http://localhost:3000
```

That's it! Your landing page is running locally.

## 📦 What's Included

- ✅ Modern landing page with 7 sections
- ✅ Terms of Service page
- ✅ Dark/Light theme toggle
- ✅ Arabic/English language support
- ✅ Smooth animations
- ✅ Fully responsive design
- ✅ Ready for Vercel deployment

## 🎨 Preview Features

### Test These Features:

1. **Theme Toggle**
   - Click moon/sun icon in header
   - Watch smooth transition to dark mode

2. **Language Toggle**
   - Click globe icon in header
   - Switch between Arabic (RTL) and English (LTR)

3. **Animations**
   - Scroll down to see fade-in effects
   - Hover over cards for interactions
   - Watch floating elements

4. **Navigation**
   - Click "Terms of Service" in footer
   - Test back button on terms page

## 🛠️ Quick Customization

### Change App Name

Edit `lib/translations.ts`:
```typescript
ar: { appName: 'اسم تطبيقك' },
en: { appName: 'Your App Name' }
```

### Change Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: '#YOUR_COLOR',
}
```

### Update Social Links

Edit `components/SocialSection.tsx`:
```typescript
const socialLinks = [
  { name: 'Facebook', url: 'YOUR_URL' }
]
```

## 🚢 Deploy to Vercel

### Fastest Way:

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repo
5. Click "Deploy"
6. Done! ✨

### Using CLI:

```bash
npm i -g vercel
vercel login
vercel --prod
```

## 📱 Test Responsive Design

### In Browser:

1. Open DevTools (F12)
2. Click device toggle (Ctrl+Shift+M)
3. Test different screen sizes:
   - Mobile: 375px
   - Tablet: 768px
   - Desktop: 1920px

## 🐛 Common Issues

### Port Already in Use

```bash
# Use different port
npm run dev -- -p 3001
```

### Dependencies Error

```bash
# Clear and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Error

```bash
# Check for TypeScript errors
npm run build
```

## 📚 Project Structure

```
Uniskills Web/
├── app/
│   ├── page.tsx           # Home page
│   └── terms/page.tsx     # Terms page
├── components/            # All UI components
├── lib/
│   └── translations.ts    # Content in AR/EN
└── public/               # Static files
```

## 🎯 Next Steps

1. ✅ Run locally and test all features
2. ✅ Customize content and colors
3. ✅ Test on mobile devices
4. ✅ Deploy to Vercel
5. ✅ Share your live URL!

## 💡 Pro Tips

- **Hot Reload:** Changes auto-refresh in dev mode
- **Type Safety:** TypeScript catches errors before runtime
- **Performance:** Built-in optimization with Next.js
- **SEO:** Meta tags already configured

## 📞 Need Help?

- Check `README.md` for detailed docs
- Check `DEPLOYMENT.md` for deployment guide
- Review code comments for explanations

## ✨ Features Checklist

Test these before deploying:

- [ ] Home page loads correctly
- [ ] Terms page accessible
- [ ] Theme toggle works
- [ ] Language toggle works
- [ ] All animations smooth
- [ ] Download button links correctly
- [ ] Social links work
- [ ] Mobile responsive
- [ ] No console errors

---

**Ready to launch? Let's go! 🚀**

Time to deploy: ~5 minutes
Time to customize: ~15 minutes
Time to go live: ~20 minutes total
