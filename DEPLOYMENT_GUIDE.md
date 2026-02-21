# UniSkills Website - Deployment Guide

Complete guide for deploying the UniSkills website to Vercel.

## 🚀 Quick Deploy (Recommended)

### Method 1: Vercel Dashboard (Easiest)

1. **Prepare Your Files**
   - Make sure all files are in the "Uniskills Web" folder:
     - index.html
     - terms.html
     - style.css
     - script.js
     - vercel.json
     - README.md

2. **Go to Vercel**
   - Visit: https://vercel.com
   - Sign up or log in (you can use GitHub, GitLab, or Bitbucket)

3. **Create New Project**
   - Click "Add New..." → "Project"
   - Choose "Import Git Repository" or "Deploy from Template"

4. **Upload Your Files**
   - If using Git: Connect your repository
   - If not using Git: Use the drag-and-drop feature
   - Select the "Uniskills Web" folder

5. **Configure Project**
   - Project Name: `uniskills-website` (or your preferred name)
   - Framework Preset: Select "Other" (it's a static site)
   - Root Directory: Leave as is (or select the folder if needed)
   - Build Command: Leave empty (no build needed)
   - Output Directory: Leave empty (static files)

6. **Deploy**
   - Click "Deploy"
   - Wait 30-60 seconds
   - Your site will be live at: `https://your-project-name.vercel.app`

### Method 2: Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Navigate to Project**
   ```bash
   cd "Uniskills Web"
   ```

3. **Login to Vercel**
   ```bash
   vercel login
   ```

4. **Deploy**
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - What's your project's name? `uniskills-website`
   - In which directory is your code located? `./`

5. **Production Deploy**
   ```bash
   vercel --prod
   ```

### Method 3: GitHub Integration (Best for Updates)

1. **Create GitHub Repository**
   - Go to https://github.com/new
   - Create a new repository (e.g., "uniskills-website")
   - Don't initialize with README (we already have one)

2. **Push Your Code**
   ```bash
   cd "Uniskills Web"
   git init
   git add .
   git commit -m "Initial commit: UniSkills website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/uniskills-website.git
   git push -u origin main
   ```

3. **Connect to Vercel**
   - Go to https://vercel.com/new
   - Click "Import Git Repository"
   - Select your GitHub repository
   - Click "Import"
   - Configure as in Method 1
   - Click "Deploy"

4. **Automatic Deployments**
   - Now every push to `main` branch will auto-deploy
   - Pull requests will get preview deployments

## 🔧 Configuration

### Custom Domain (Optional)

1. **In Vercel Dashboard**
   - Go to your project
   - Click "Settings" → "Domains"
   - Add your custom domain (e.g., `uniskills.com`)

2. **Update DNS**
   - Add CNAME record pointing to `cname.vercel-dns.com`
   - Or use Vercel nameservers for full DNS management

3. **SSL Certificate**
   - Vercel automatically provisions SSL certificates
   - Your site will be available via HTTPS

### Environment Variables (If Needed)

If you add any API keys or secrets later:

1. Go to Project Settings → Environment Variables
2. Add your variables
3. Redeploy the project

## 📊 Post-Deployment Checklist

After deployment, verify:

- [ ] Website loads correctly
- [ ] Both pages work (index.html and terms.html)
- [ ] Theme toggle works (light/dark mode)
- [ ] Language toggle works (Arabic/English)
- [ ] All links work correctly
- [ ] Google Play button links to the app
- [ ] Social media links work
- [ ] Mobile responsive design works
- [ ] Animations work smoothly
- [ ] No console errors

## 🔍 Testing Your Deployment

### Test URLs
After deployment, test these URLs:
- `https://your-domain.vercel.app/` - Home page
- `https://your-domain.vercel.app/terms` - Terms page
- `https://your-domain.vercel.app/terms.html` - Terms page (alternative)

### Test Features
1. **Theme Toggle**: Click moon/sun icon
2. **Language Toggle**: Click EN/AR button
3. **Scroll Animations**: Scroll down the page
4. **Hover Effects**: Hover over cards and buttons
5. **Mobile View**: Test on mobile device or use browser dev tools
6. **Download Button**: Click to verify Google Play link
7. **Social Links**: Click each social media icon

## 🐛 Troubleshooting

### Issue: 404 Error on terms.html

**Solution**: Vercel's `cleanUrls` setting should handle this. If not:
- Access via `/terms` instead of `/terms.html`
- Or remove `"cleanUrls": true` from `vercel.json`

### Issue: Fonts Not Loading

**Solution**: 
- Check internet connection (fonts load from Google Fonts)
- Verify the font link in HTML is correct
- Check browser console for errors

### Issue: Animations Not Working

**Solution**:
- Check browser compatibility
- Verify JavaScript is enabled
- Check browser console for errors
- Test in different browsers

### Issue: Theme/Language Not Persisting

**Solution**:
- Check if localStorage is enabled in browser
- Verify browser allows cookies/storage
- Test in incognito mode to rule out extensions

### Issue: Slow Loading

**Solution**:
- Vercel's CDN should make it fast globally
- Check your internet connection
- Verify no large images are added
- Check Vercel Analytics for insights

## 📈 Analytics (Optional)

### Add Google Analytics

1. Get your GA4 tracking ID
2. Add to `index.html` and `terms.html` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Vercel Analytics

1. Go to your project in Vercel
2. Click "Analytics" tab
3. Enable Vercel Analytics
4. View real-time performance metrics

## 🔄 Updating Your Website

### If Using Git/GitHub:

```bash
# Make your changes to the files
git add .
git commit -m "Description of changes"
git push
```

Vercel will automatically deploy the changes.

### If Using Vercel CLI:

```bash
# Make your changes to the files
vercel --prod
```

### If Using Dashboard Upload:

1. Make your changes locally
2. Go to Vercel dashboard
3. Go to Deployments
4. Upload new files or redeploy

## 🎯 Performance Optimization

Your site is already optimized, but for future reference:

1. **Images**: Use WebP format and lazy loading
2. **CSS**: Already minified and optimized
3. **JavaScript**: Minimal and efficient
4. **Fonts**: Using Google Fonts CDN
5. **Caching**: Configured in vercel.json

## 🔒 Security Headers

Already configured in `vercel.json`:
- X-Content-Type-Options
- X-Frame-Options
- X-XSS-Protection
- Referrer-Policy
- Cache-Control

## 📱 Mobile App Deep Linking (Future)

If you want to add deep linking to open the app if installed:

```html
<a href="intent://details?id=com.uniskills.app#Intent;scheme=market;action=android.intent.action.VIEW;package=com.android.vending;end">
  Download App
</a>
```

## 🌐 Multi-Language SEO (Future Enhancement)

For better SEO with multiple languages:

1. Add `<link rel="alternate">` tags
2. Use proper `hreflang` attributes
3. Create separate URLs for each language

## 📞 Support

If you encounter issues:

1. Check Vercel Status: https://www.vercel-status.com/
2. Vercel Documentation: https://vercel.com/docs
3. Vercel Support: https://vercel.com/support

## ✅ Success!

Once deployed, your website will be:
- ✅ Live and accessible worldwide
- ✅ Fast with global CDN
- ✅ Secure with HTTPS
- ✅ Automatically backed up
- ✅ Easy to update

Your UniSkills website is now live! 🎉

---

**Next Steps:**
1. Share your website URL
2. Test all features
3. Monitor analytics
4. Gather user feedback
5. Make improvements

Good luck with your UniSkills platform! 🚀
