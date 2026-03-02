# تحديث صورة المشاركة على السوشيال ميديا ✅

## المشكلة
عند مشاركة رابط الموقع على فيسبوك، تويتر، واتساب، كانت تظهر صورة `uniskills.png` بدلاً من `uniskills-logo.png`

## الحل
تم تحديث جميع meta tags الخاصة بالمشاركة الاجتماعية لاستخدام `uniskills-logo.png` مع إضافة tags إضافية لواتساب

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
<meta property="og:image:secure_url" content="https://www.uniskills.pro/uniskills-logo.png">
<meta property="og:image:type" content="image/png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="UniSkills - منصة التعلم الذكي">
<meta property="og:site_name" content="UniSkills">
```

### Twitter Card
```html
<meta name="twitter:image" content="https://www.uniskills.pro/uniskills-logo.png">
<meta name="twitter:image:alt" content="UniSkills - منصة التعلم الذكي">
```

### Schema.org (محركات البحث)
```json
"logo": "https://www.uniskills.pro/uniskills-logo.png"
```

---

## اختبار المشاركة

### واتساب 💬
**الطريقة الأولى - اختبار مباشر:**
1. افتح واتساب على الموبايل
2. أرسل الرابط لنفسك أو لصديق: `https://www.uniskills.pro`
3. انتظر ثواني حتى يظهر الكارد
4. تحقق من ظهور `uniskills-logo.png`

**الطريقة الثانية - مسح الكاش:**
إذا لم تظهر الصورة الجديدة:
1. احذف الرسالة القديمة
2. انتظر 5 دقائق
3. أرسل الرابط مرة أخرى

**ملاحظة:** واتساب يحتفظ بالكاش لمدة طويلة، قد يستغرق 24 ساعة لتحديث الصورة تلقائياً

### فيسبوك 📘
1. افتح [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
2. أدخل رابط الموقع: `https://www.uniskills.pro`
3. اضغط **Scrape Again** لتحديث الكاش
4. تحقق من ظهور `uniskills-logo.png`

### تويتر 🐦
1. افتح [Twitter Card Validator](https://cards-dev.twitter.com/validator)
2. أدخل رابط الموقع: `https://www.uniskills.pro`
3. اضغط **Preview Card**
4. تحقق من ظهور الصورة الصحيحة

### لينكد إن 💼
1. افتح [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
2. أدخل رابط الموقع
3. اضغط **Inspect**
4. تحقق من الصورة

---

## ملاحظات مهمة ⚠️

### مسح الكاش
بعد رفع التحديثات، قد تحتاج لمسح كاش المنصات الاجتماعية:

1. **فيسبوك**: استخدم Sharing Debugger (الرابط أعلاه) ✅ فوري
2. **تويتر**: استخدم Card Validator (الرابط أعلاه) ✅ فوري
3. **واتساب**: قد يستغرق 24 ساعة لتحديث الكاش تلقائياً ⏰
4. **لينكد إن**: استخدم Post Inspector (الرابط أعلاه) ✅ فوري

### متطلبات الصورة للواتساب
للحصول على أفضل نتيجة، تأكد أن `uniskills-logo.png`:
- ✅ الحجم الموصى به: 1200x630 بكسل (نسبة 1.91:1)
- ✅ الحجم الأدنى: 300x200 بكسل
- ✅ الحجم الأقصى: 5 ميجابايت
- ✅ الصيغة: PNG أو JPG
- ✅ يجب أن يكون الرابط HTTPS (✅ تم)

### Tags المضافة خصيصاً للواتساب
```html
<!-- هذه تضمن عمل الكارد بشكل مثالي -->
<meta property="og:image:secure_url" content="https://...">
<meta property="og:image:type" content="image/png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:site_name" content="UniSkills">
```

---

## الفوائد

- ✅ صورة احترافية عند المشاركة على واتساب
- ✅ كارد جذاب يزيد معدل النقر (CTR)
- ✅ مظهر موحد عبر جميع المنصات
- ✅ تعزيز الهوية البصرية للعلامة التجارية
- ✅ زيادة الثقة والمصداقية

---

## استكشاف الأخطاء - واتساب

### المشكلة: الصورة القديمة لا تزال تظهر
**الحل:**
1. احذف الرسالة من واتساب
2. انتظر 5-10 دقائق
3. أرسل الرابط مرة أخرى
4. إذا لم ينجح، انتظر 24 ساعة

### المشكلة: لا تظهر أي صورة
**الحل:**
1. تأكد من رفع ملف `uniskills-logo.png` على السيرفر
2. تحقق من أن الرابط يعمل: `https://www.uniskills.pro/uniskills-logo.png`
3. تأكد من أن حجم الصورة مناسب (1200x630)

### المشكلة: الصورة مقصوصة بشكل غريب
**الحل:**
- تأكد من نسبة العرض للارتفاع 1.91:1 (مثل 1200x630)
- ضع العناصر المهمة في منتصف الصورة

---

## الخطوة التالية

بعد رفع التحديثات على Vercel:

```bash
cd "Uniskills Web"
git add .
git commit -m "Add WhatsApp card support with uniskills-logo.png"
git push
```

ثم:
1. ✅ امسح كاش فيسبوك باستخدام Sharing Debugger
2. ✅ اختبر على واتساب بإرسال الرابط
3. ⏰ انتظر 24 ساعة إذا لم تظهر الصورة الجديدة فوراً

---

## نصيحة إضافية 💡

لاختبار سريع على واتساب:
1. افتح واتساب ويب: [web.whatsapp.com](https://web.whatsapp.com)
2. أرسل الرابط لـ "رسائلي" (Saved Messages)
3. شاهد كيف يظهر الكارد

---

تم التحديث: 2 مارس 2026 ✅
