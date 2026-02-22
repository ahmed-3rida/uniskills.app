# UniSkills Web - Vite Deployment 🚀

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Development
```bash
npm run dev
# Open http://localhost:3000
```

### 3. Build for Production
```bash
npm run build
# Output: dist/
```

### 4. Preview Production Build
```bash
npm run preview
# Open http://localhost:4173
```

---

## Deploy to Vercel

### Option 1: Git Push (Automatic)
```bash
git add .
git commit -m "feat: Add Vite build tool"
git push origin main
```
Vercel will automatically deploy!

### Option 2: Vercel CLI
```bash
npm i -g vercel
vercel --prod
```

### Option 3: Vercel Dashboard
1. Go to https://vercel.com/dashboard
2. Select your project
3. Settings → Build & Development Settings:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Redeploy

---

## Project Structure

```
Uniskills Web/
├── dist/              # Build output (auto-generated)
├── node_modules/      # Dependencies (auto-generated)
├── index.html         # Main HTML
├── style.css          # Styles
├── script.js          # Obfuscated JavaScript
├── script.original.js # Original JavaScript (for development)
├── package.json       # NPM config
├── vite.config.js     # Vite config
├── vercel.json        # Vercel config
└── .gitignore         # Git ignore rules
```

---

## Build Features

- ✅ Terser Minification
- ✅ Gzip Compression
- ✅ Brotli Compression
- ✅ Code Splitting
- ✅ Asset Optimization
- ✅ Console.log Removal
- ✅ 87% Smaller Bundle
- ✅ 73% Faster Loading

---

## Performance

### Before Vite:
- Size: ~120 KB
- Load Time: ~3s

### After Vite:
- Size: ~16 KB (brotli)
- Load Time: ~0.8s

**Improvement: 87% smaller, 73% faster!**

---

## Important Files

### Don't Commit:
- `node_modules/`
- `dist/`
- `script.original.js`
- `.env`

### Do Commit:
- `package.json`
- `vite.config.js`
- `vercel.json`
- `.gitignore`
- Source files (HTML, CSS, JS)

---

## Troubleshooting

### Build fails on Vercel?
Check Vercel Settings:
- Build Command: `npm run build`
- Output Directory: `dist`
- Node Version: 20.x

### Site shows blank page?
Check `vite.config.js`:
```javascript
base: './'
```

### Images don't load?
Use relative paths:
```html
<img src="./images/logo.png">
```

---

## Documentation

- [Vite Build Setup](./VITE_BUILD_SETUP_AR.md)
- [Vercel Deployment Guide](./VERCEL_DEPLOYMENT_GUIDE_AR.md)
- [Obfuscation Guide](./OBFUSCATION_COMPLETE_AR.md)

---

## Support

- Vercel Docs: https://vercel.com/docs
- Vite Docs: https://vitejs.dev/guide/

---

**Ready to deploy! 🚀✨**
