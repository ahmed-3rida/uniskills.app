# تحديث صورة المشاركة على السوشيال ميديا ✅

## المشكلة
عند مشاركة رابط الموقع على فيسبوك، تويتر، واتساب، كانت تظهر صورة `uniskills.png` بدلاً من `uniskills-logo.png`

## الحل
تم تحديث جميع meta tags الخاصة بالمشاركة الاجتماعية لاستخدام `uniskills-logo.png`

---

## الملفات المحدثة

### 1. جميع صفحات HTML
- ✅ `index.html`
- ✅ `faq.html`
- ✅ `privacy.html`
- ✅ `terms.html`

### 2. ملفات SEO
- ✅ `sitemap.xml`

---

## التحديثات المطبقة

### Open Graph (فيسبوك، واتساب، لينكد إن)
```html
<meta property="og:image" content="https://www.uniskills.pro/uniskills-logo.png">
```

### Twitter Card
```html
<meta name="twitter:image" content="https://www.uniskills.pro/uniskills-logo.png">
```

### Schema.org (محركات البحث)
```json
"logo": "https://www.uniskills.pro/uniskills-logo.png"
```

---

## اختبار المشاركة

### فيسبوك
1. افتح [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
2. أدخل رابط الموقع: `https://www.uniskills.pro`
3. اضغط **Scrape Again** لتحديث الكاش
4. تحقق من ظهور `uniskills-logo.png`

### تويتر
1. افتح [Twitter Card Validator](https://cards-dev.twitter.com/validator)
2. أدخل رابط الموقع: `https://www.uniskills.pro`
3. اضغط **Preview Card**
4. تحقق من ظهور الصورة الصحيحة

### لينكد إن
1. افتح [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
2. أدخل رابط الموقع
3. اضغط **Inspect**
4. تحقق من الصورة

---

## ملاحظات مهمة ⚠️

### مسح الكاش
بعد رفع التحديثات، قد تحتاج لمسح كاش المنصات الاجتماعية:

1. **فيسبوك**: استخدم Sharing Debugger (الرابط أعلاه)
2. **تويتر**: استخدم Card Validator (الرابط أعلاه)
3. **واتساب**: قد يستغرق 24 ساعة لتحديث الكاش تلقائياً

### متطلبات الصورة
للحصول على أفضل نتيجة، تأكد أن `uniskills-logo.png`:
- ✅ الحجم الموصى به: 1200x630 بكسل
- ✅ الحجم الأدنى: 600x315 بكسل
- ✅ نسبة العرض للارتفاع: 1.91:1
- ✅ حجم الملف: أقل من 8 ميجابايت

---

## الفوائد

- ✅ صورة احترافية عند المشاركة
- ✅ تحسين معدل النقر (CTR)
- ✅ مظهر موحد عبر جميع المنصات
- ✅ تعزيز الهوية البصرية للعلامة التجارية

---

## الخطوة التالية

بعد رفع التحديثات على Vercel:

```bash
cd "Uniskills Web"
git add .
git commit -m "Update social share image to uniskills-logo.png"
git push
```

ثم امسح كاش المنصات الاجتماعية باستخدام الأدوات المذكورة أعلاه.

---

تم التحديث: 2 مارس 2026 ✅
