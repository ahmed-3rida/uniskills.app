# سجل التغييرات - UniSkills Website

جميع التغييرات المهمة في موقع UniSkills موثقة هنا.

---

## v4.2.0 - 2026-03-02

### إضافات ✨
- إضافة 301 Redirect إلى الدومين الجديد `www.uniskills.pro`
- تحسين Favicon مع أحجام متعددة للتوافق مع جميع المتصفحات
- إضافة صفحة Privacy في sitemap.xml

### تحسينات 🚀
- تحديث جميع الروابط الداخلية للدومين الجديد
- تحسين Cache Headers في vercel.json
- فصل Cache Headers حسب نوع الملف (CSS, JS, Images, Fonts, HTML)
- تحديث sitemap.xml مع التاريخ الجديد
- تحديث robots.txt للدومين الجديد

### إصلاحات 🐛
- إصلاح مشكلة عدم ظهور الأيقونة في بعض المتصفحات

### ملفات محدثة
- `vercel.json` - إضافة redirect rules وتحسين headers
- `.htaccess` - إضافة Apache redirect rules
- `index.html`, `faq.html`, `privacy.html`, `terms.html`, `404.html` - تحديث الروابط والـ favicon
- `sitemap.xml` - تحديث URLs والتواريخ
- `robots.txt` - تحديث رابط sitemap

---

## v4.1.0 - 2026-02-25

### إضافات ✨
- إضافة Structured Data (Schema.org) للصفحة الرئيسية
- إضافة Open Graph و Twitter Card meta tags
- إضافة صفحة FAQ مع أسئلة شائعة
- إضافة صفحة Privacy Policy
- إضافة صفحة Terms of Service

### تحسينات 🚀
- تحسين SEO للصفحات
- إضافة Canonical URLs
- تحسين meta descriptions
- إضافة sitemap.xml
- إضافة robots.txt

---

## v4.0.0 - 2026-02

### إضافات ✨
- إطلاق التصميم الجديد بالكامل
- إضافة قسم الميزات
- إضافة قسم Screenshots
- إضافة قسم AI Features
- إضافة قسم Download
- إضافة Footer مع روابط التواصل

### تحسينات 🚀
- تصميم responsive كامل
- استخدام CSS Variables
- إضافة Dark Mode
- تحسين الأداء
- إضافة Animations (AOS)
- إضافة Swiper للـ Screenshots

---

## كيفية استخدام هذا الملف

### عند إضافة تحديث جديد:

1. أضف قسم جديد في الأعلى بالصيغة:
```markdown
## vX.Y.Z - YYYY-MM-DD

### إضافات ✨
- ميزة جديدة 1
- ميزة جديدة 2

### تحسينات 🚀
- تحسين 1
- تحسين 2

### إصلاحات 🐛
- إصلاح مشكلة 1
- إصلاح مشكلة 2
```

2. استخدم الرموز التعبيرية:
- ✨ للإضافات الجديدة
- 🚀 للتحسينات
- 🐛 لإصلاح الأخطاء
- 🔒 للأمان
- 📝 للتوثيق
- 🎨 للتصميم

3. كن واضحاً ومختصراً في الوصف

---

آخر تحديث: 2 مارس 2026
