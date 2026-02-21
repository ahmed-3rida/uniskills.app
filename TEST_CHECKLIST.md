# UniSkills Website - Testing Checklist

Use this checklist to verify everything works correctly before and after deployment.

## 🧪 Pre-Deployment Tests (Local)

### File Verification
- [ ] All files are present in "Uniskills Web" folder
- [ ] index.html opens in browser
- [ ] terms.html opens in browser
- [ ] style.css is linked correctly
- [ ] script.js is linked correctly
- [ ] No 404 errors in browser console

### Visual Tests
- [ ] Page loads without visual errors
- [ ] Fonts load correctly (Cairo for Arabic, Inter for English)
- [ ] Colors look good
- [ ] Layout is not broken
- [ ] No overlapping elements
- [ ] Images/icons display correctly (emojis)

### Theme Toggle
- [ ] Click theme toggle button
- [ ] Page switches to dark mode
- [ ] All colors change appropriately
- [ ] Icon changes (🌙 ↔ ☀️)
- [ ] Refresh page - theme persists
- [ ] Switch back to light mode
- [ ] Refresh page - theme persists

### Language Toggle
- [ ] Click language toggle button
- [ ] Page switches to English
- [ ] All text translates
- [ ] Direction changes (RTL → LTR)
- [ ] Button text changes (EN ↔ AR)
- [ ] Refresh page - language persists
- [ ] Switch back to Arabic
- [ ] Refresh page - language persists

### Navigation
- [ ] Logo is visible
- [ ] Navbar is sticky (scroll down to check)
- [ ] Navbar shadow appears on scroll
- [ ] All navigation elements work

### Hero Section
- [ ] Gradient orbs are animated
- [ ] Title displays correctly
- [ ] Description is readable
- [ ] Download button is visible
- [ ] Download button has hover effect
- [ ] Coming soon notes display
- [ ] Scroll indicator animates

### Features Section
- [ ] All 6 feature cards display
- [ ] Icons show correctly
- [ ] Cards have hover effect
- [ ] Cards animate on scroll (scroll to section)
- [ ] Text is readable
- [ ] Layout is responsive

### About Section
- [ ] Text displays correctly
- [ ] Statistics show (1000+, 50+, 24/7)
- [ ] Vision card displays
- [ ] Section animates on scroll
- [ ] Two-column layout works

### Coming Soon Section
- [ ] All 3 cards display
- [ ] "Coming Soon" badges show
- [ ] Cards have hover effect
- [ ] Cards animate on scroll
- [ ] Icons display correctly

### Download Section
- [ ] Section has gradient background
- [ ] Text is white and readable
- [ ] Google Play button displays
- [ ] Button has hover effect
- [ ] Button links to correct URL

### Social Media Section
- [ ] All 4 social links display
- [ ] Icons show correctly
- [ ] Links have hover effects
- [ ] Hover changes background color
- [ ] Each link goes to correct URL

### Footer
- [ ] Logo displays
- [ ] Description shows
- [ ] Terms link works
- [ ] Copyright text displays
- [ ] Layout looks good

### Terms Page
- [ ] Page loads correctly
- [ ] All 14 sections display
- [ ] Text is readable
- [ ] Formatting is correct
- [ ] Lists display properly
- [ ] Links work (social media links)
- [ ] "Back to Home" button works
- [ ] Theme toggle works on this page
- [ ] Language toggle works on this page

### Responsive Design - Mobile (< 480px)
- [ ] Open browser dev tools (F12)
- [ ] Switch to mobile view (iPhone/Android)
- [ ] Page layout adjusts
- [ ] Text is readable
- [ ] Buttons are touchable
- [ ] No horizontal scroll
- [ ] All sections stack vertically
- [ ] Navigation works
- [ ] Theme toggle works
- [ ] Language toggle works

### Responsive Design - Tablet (481px - 768px)
- [ ] Switch to tablet view (iPad)
- [ ] Layout adjusts appropriately
- [ ] Cards display in grid
- [ ] Text is readable
- [ ] All features work

### Responsive Design - Desktop (> 768px)
- [ ] Switch to desktop view
- [ ] Full layout displays
- [ ] Multi-column grids work
- [ ] Hover effects work
- [ ] All animations work

### Performance
- [ ] Page loads quickly (< 3 seconds)
- [ ] Animations are smooth (60fps)
- [ ] No lag when scrolling
- [ ] No lag when switching theme
- [ ] No lag when switching language
- [ ] Browser console has no errors
- [ ] Browser console has no warnings

### Links Verification
- [ ] Google Play link: `https://play.google.com/store/apps/details?id=com.uniskills.app`
- [ ] Facebook: `https://facebook.com/uniskills.eg`
- [ ] Instagram: `https://instagram.com/uniskills.app`
- [ ] WhatsApp: `https://whatsapp.com/channel/0029VbCWl5B2f3EBP01LLm2d`
- [ ] YouTube: `https://youtube.com/@uni.skills`
- [ ] Terms page link works

## 🚀 Post-Deployment Tests (Live)

### Deployment Verification
- [ ] Website is live at Vercel URL
- [ ] HTTPS is working (🔒 in address bar)
- [ ] No SSL certificate errors
- [ ] Custom domain works (if configured)

### Functionality Tests (Repeat on Live Site)
- [ ] Home page loads
- [ ] Terms page loads
- [ ] Theme toggle works
- [ ] Language toggle works
- [ ] All animations work
- [ ] All links work
- [ ] Mobile responsive works
- [ ] Tablet responsive works
- [ ] Desktop layout works

### Cross-Browser Testing
Test on different browsers:

#### Chrome
- [ ] Desktop Chrome
- [ ] Mobile Chrome (Android)
- [ ] All features work

#### Firefox
- [ ] Desktop Firefox
- [ ] Mobile Firefox
- [ ] All features work

#### Safari
- [ ] Desktop Safari (Mac)
- [ ] Mobile Safari (iPhone)
- [ ] All features work

#### Edge
- [ ] Desktop Edge
- [ ] All features work

### Cross-Device Testing
Test on actual devices if possible:

#### Mobile Devices
- [ ] iPhone (Safari)
- [ ] Android phone (Chrome)
- [ ] Small screen (< 375px)
- [ ] Medium screen (375px - 414px)
- [ ] Large screen (> 414px)

#### Tablets
- [ ] iPad (Safari)
- [ ] Android tablet (Chrome)
- [ ] Portrait orientation
- [ ] Landscape orientation

#### Desktop
- [ ] Windows PC
- [ ] Mac
- [ ] Linux
- [ ] Small screen (1366px)
- [ ] Medium screen (1920px)
- [ ] Large screen (> 1920px)

### Performance Testing (Live)
- [ ] Run Google PageSpeed Insights
- [ ] Score > 90 on Performance
- [ ] Score > 90 on Accessibility
- [ ] Score > 90 on Best Practices
- [ ] Score > 90 on SEO
- [ ] First Contentful Paint < 1.5s
- [ ] Time to Interactive < 3s
- [ ] No console errors

### SEO Testing
- [ ] Page title is correct
- [ ] Meta description is present
- [ ] Open Graph tags (optional)
- [ ] Favicon displays (if added)
- [ ] Sitemap accessible (if added)
- [ ] robots.txt accessible (if added)

### Analytics Testing (If Configured)
- [ ] Google Analytics tracking works
- [ ] Vercel Analytics shows data
- [ ] Events are tracked
- [ ] Page views are recorded

### Security Testing
- [ ] HTTPS is enforced
- [ ] Security headers are present (check in dev tools)
- [ ] No mixed content warnings
- [ ] No XSS vulnerabilities
- [ ] No clickjacking vulnerabilities

## 🐛 Common Issues & Solutions

### Issue: Theme doesn't persist
**Solution**: Check if localStorage is enabled in browser settings

### Issue: Language doesn't switch
**Solution**: Check browser console for JavaScript errors

### Issue: Animations don't work
**Solution**: Check if browser supports Intersection Observer API

### Issue: Fonts don't load
**Solution**: Check internet connection and Google Fonts availability

### Issue: Mobile layout broken
**Solution**: Check viewport meta tag in HTML

### Issue: Links don't work
**Solution**: Verify URLs are correct and accessible

### Issue: Page loads slowly
**Solution**: Check Vercel deployment status and CDN

### Issue: 404 on terms page
**Solution**: Use `/terms` instead of `/terms.html` or check vercel.json

## ✅ Final Verification

Before considering the project complete:

- [ ] All pre-deployment tests passed
- [ ] All post-deployment tests passed
- [ ] Tested on at least 3 browsers
- [ ] Tested on at least 2 devices
- [ ] No console errors
- [ ] No visual bugs
- [ ] All links work
- [ ] Performance is good
- [ ] Mobile experience is smooth
- [ ] Desktop experience is smooth

## 📊 Testing Report Template

After testing, document your results:

```
Testing Date: ___________
Tester Name: ___________
Environment: ___________

✅ Passed Tests: ___/___
❌ Failed Tests: ___/___
⚠️  Issues Found: ___

Critical Issues:
- None / List issues

Minor Issues:
- None / List issues

Browser Compatibility:
- Chrome: ✅/❌
- Firefox: ✅/❌
- Safari: ✅/❌
- Edge: ✅/❌

Device Compatibility:
- Mobile: ✅/❌
- Tablet: ✅/❌
- Desktop: ✅/❌

Performance Score: ___/100

Overall Status: PASS / FAIL

Notes:
___________________________
```

## 🎯 Success Criteria

The website is ready for production when:
- ✅ All critical tests pass
- ✅ No console errors
- ✅ Works on major browsers
- ✅ Works on mobile devices
- ✅ Performance score > 85
- ✅ All links work correctly
- ✅ Theme and language persist
- ✅ Animations are smooth

## 📞 Need Help?

If tests fail:
1. Check browser console for errors
2. Review the code in the affected file
3. Check DEPLOYMENT_GUIDE.md for solutions
4. Test in incognito mode (rules out extensions)
5. Clear browser cache and test again

---

**Happy Testing!** 🧪

Once all tests pass, your website is ready to go live! 🚀
