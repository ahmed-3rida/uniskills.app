# UniSkills Website

A modern, responsive, and production-ready website for the UniSkills mobile learning platform.

## 🚀 Features

- **Modern Design**: Clean, futuristic UI with glassmorphism effects
- **Fully Responsive**: Works perfectly on mobile, tablet, and desktop
- **Bilingual Support**: Arabic (RTL) and English (LTR) with language switcher
- **Theme Support**: Light and dark mode with localStorage persistence
- **Smooth Animations**: Scroll animations, hover effects, and micro-interactions
- **Performance Optimized**: Fast loading with minimal dependencies
- **SEO Friendly**: Semantic HTML and proper meta tags
- **Production Ready**: Optimized for Vercel deployment

## 📁 File Structure

```
Uniskills Web/
├── index.html          # Main landing page
├── terms.html          # Terms of Service page
├── style.css           # All styles and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🎨 Sections

### Main Page (index.html)
1. **Hero Section** - Eye-catching introduction with download button
2. **Features Section** - Platform features showcase
3. **About Section** - Platform vision and mission
4. **Coming Soon Section** - Upcoming features
5. **Download Section** - Call-to-action for app download
6. **Social Media Section** - Social media links
7. **Footer** - Copyright and links

### Terms Page (terms.html)
- Comprehensive Terms of Service
- Professional legal content
- Fully translated (Arabic/English)

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS variables
- **Vanilla JavaScript** - No frameworks or libraries
- **Google Fonts** - Cairo (Arabic) and Inter (English)

## 🌐 Deployment on Vercel

### Option 1: Using Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Navigate to the website folder:
```bash
cd "Uniskills Web"
```

3. Deploy:
```bash
vercel
```

### Option 2: Using Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your Git repository or upload the folder
4. Vercel will automatically detect the static site
5. Click "Deploy"

### Option 3: Drag and Drop

1. Go to [vercel.com/new](https://vercel.com/new)
2. Drag and drop the "Uniskills Web" folder
3. Click "Deploy"

## ⚙️ Configuration

### Vercel Configuration (Optional)

Create a `vercel.json` file if you need custom configuration:

```json
{
  "cleanUrls": true,
  "trailingSlash": false
}
```

## 🎯 Features Breakdown

### Theme System
- Light and dark mode toggle
- Saves preference in localStorage
- Smooth transitions between themes
- Custom CSS variables for easy customization

### Language System
- Arabic (RTL) and English (LTR) support
- Complete translations for all content
- Saves preference in localStorage
- Automatic direction switching

### Animations
- Fade in on scroll
- Smooth hover effects
- Gradient orb animations
- Card reveal animations
- Button micro-interactions

### Performance
- Minimal JavaScript
- Optimized CSS
- No external dependencies (except fonts)
- Fast loading times
- Lazy loading support

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 481px - 768px
- **Desktop**: > 768px

## 🎨 Color Scheme

### Light Mode
- Background: #ffffff
- Text: #1a1a1a
- Accent: #6366f1 → #8b5cf6 (gradient)

### Dark Mode
- Background: #0f0f0f
- Text: #ffffff
- Accent: #6366f1 → #8b5cf6 (gradient)

## 🔗 Links

- **Google Play**: https://play.google.com/store/apps/details?id=com.uniskills.app
- **Facebook**: https://facebook.com/uniskills.eg
- **Instagram**: https://instagram.com/uniskills.app
- **WhatsApp**: https://whatsapp.com/channel/0029VbCWl5B2f3EBP01LLm2d
- **YouTube**: https://youtube.com/@uni.skills

## 📝 Customization

### Changing Colors
Edit CSS variables in `style.css`:
```css
:root {
    --accent-primary: #6366f1;
    --accent-secondary: #8b5cf6;
    /* ... more variables */
}
```

### Adding Translations
Edit the translations object in `script.js`:
```javascript
const translations = {
    ar: { /* Arabic translations */ },
    en: { /* English translations */ }
};
```

### Modifying Content
Simply edit the HTML files - all content uses `data-translate` attributes for easy translation management.

## 🐛 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

© 2024 UniSkills. All rights reserved.

## 🤝 Support

For questions or issues, contact us via:
- Facebook: https://facebook.com/uniskills.eg
- Instagram: https://instagram.com/uniskills.app
- WhatsApp: https://whatsapp.com/channel/0029VbCWl5B2f3EBP01LLm2d

---

Built with ❤️ for UniSkills
