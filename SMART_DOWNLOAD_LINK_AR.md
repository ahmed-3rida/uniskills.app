# Smart Download Link - app.uniskills.pro 📱

## نظرة عامة

تم إنشاء صفحة تحميل ذكية على `app.uniskills.pro` تكتشف نظام تشغيل المستخدم تلقائياً وتوجهه للمتجر المناسب.

---

## المميزات ✨

### 1. الكشف التلقائي عن النظام
- ✅ **Android** → يوجه إلى Google Play Store
- ✅ **iOS** → يوجه إلى App Store
- ✅ **Desktop/Other** → يوجه إلى Google Play (افتراضي)

### 2. تجربة مستخدم ممتازة
- تصميم عصري بتأثيرات Glassmorphism
- رسوم متحركة سلسة
- تحويل تلقائي بعد ثانيتين
- روابط بديلة للمتاجر

### 3. SEO Optimized
- Meta tags كاملة
- Open Graph للمشاركة على السوشيال ميديا
- Twitter Cards
- Canonical URLs

### 4. Responsive Design
- يعمل على جميع أحجام الشاشات
- تصميم متجاوب للموبايل والتابلت
- دعم RTL كامل

---

## الروابط المتاحة

يمكن الوصول لصفحة التحميل من خلال:

1. **Subdomain**: `https://app.uniskills.pro`
2. **Direct**: `https://www.uniskills.pro/app.html`
3. **Short**: `https://www.uniskills.pro/app`
4. **Alternative**: `https://www.uniskills.pro/download`

---

## كيف يعمل؟

### 1. الكشف عن النظام
```javascript
function detectPlatform() {
    const userAgent = navigator.userAgent;
    
    // iOS detection
    if (/iPad|iPhone|iPod/.test(userAgent)) {
        return 'ios';
    }
    
    // Android detection
    if (/android/i.test(userAgent)) {
        return 'android';
    }
    
    return 'other';
}
```

### 2. التوجيه التلقائي
- يكتشف النظام فوراً عند تحميل الصفحة
- يعرض الزر المناسب (Google Play أو App Store)
- يحول المستخدم تلقائياً بعد ثانيتين
- يمكن للمستخدم النقر مباشرة دون انتظار

### 3. روابط بديلة
إذا لم يحدث التحويل التلقائي، يوجد روابط يدوية للمتاجر في أسفل الصفحة.

---

## التكوين المطلوب

### 1. تحديث روابط المتاجر

افتح ملف `app.html` وحدّث هذه الروابط:

```javascript
// في السطر ~200
const PLAY_STORE_URL = 'رابط_تطبيقك_على_جوجل_بلاي';
const APP_STORE_URL = 'رابط_تطبيقك_على_آب_ستور';
```

**مثال:**
```javascript
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.uniskills.app';
const APP_STORE_URL = 'https://apps.apple.com/sa/app/uniskills/id123456789';
```

### 2. إضافة Subdomain في Vercel

#### الخطوة 1: في Vercel Dashboard
1. افتح مشروعك في Vercel
2. اذهب إلى **Settings** → **Domains**
3. اضغط **Add Domain**
4. أدخل: `app.uniskills.pro`
5. اضغط **Add**

#### الخطوة 2: تحديث DNS
أضف CNAME Record في لوحة تحكم الدومين:

```
Type: CNAME
Name: app
Value: cname.vercel-dns.com
TTL: Auto
```

---

## الملفات المحدثة

### 1. `app.html` (جديد)
صفحة التحميل الذكية الكاملة

### 2. `vercel.json`
تمت إضافة:
```json
{
  "source": "/(.*)",
  "destination": "/app.html",
  "has": [
    {
      "type": "host",
      "value": "app.uniskills.pro"
    }
  ]
}
```

### 3. `sitemap.xml`
تمت إضافة صفحة التحميل

---

## استخدامات الرابط

### 1. في التطبيق نفسه
استخدم الرابط لمشاركة التطبيق:
```dart
const String APP_DOWNLOAD_URL = 'https://app.uniskills.pro';
```

### 2. في السوشيال ميديا
شارك الرابط على:
- فيسبوك
- تويتر/X
- إنستجرام
- واتساب

### 3. في الإعلانات
استخدم الرابط في:
- Google Ads
- Facebook Ads
- إعلانات يوتيوب

### 4. في QR Code
أنشئ QR Code يوجه إلى `https://app.uniskills.pro`

---

## تتبع التحميلات (Analytics)

الصفحة جاهزة لتتبع التحميلات. فقط أضف Google Analytics:

### إضافة Google Analytics

أضف هذا الكود قبل `</head>` في `app.html`:

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

الصفحة ستتبع تلقائياً:
- عدد الزيارات
- النظام المستخدم (Android/iOS/Other)
- عدد النقرات على أزرار التحميل

---

## التخصيص

### تغيير الألوان
في قسم `<style>`:
```css
/* الألوان الرئيسية */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* لون الزر */
.download-btn {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### تغيير النصوص
ابحث عن النصوص في HTML وغيّرها:
```html
<h1>حمّل تطبيق UniSkills</h1>
<p class="subtitle">منصة التعلم الذكي بالذكاء الاصطناعي</p>
```

### إضافة/إزالة مميزات
في قسم `.features`:
```html
<div class="feature">
    <svg>...</svg>
    <span>ميزة جديدة</span>
</div>
```

---

## الاختبار

### 1. اختبار محلي
```bash
# افتح الملف مباشرة في المتصفح
start "Uniskills Web/app.html"
```

### 2. اختبار على الموبايل
بعد النشر، افتح الرابط على:
- ✅ هاتف Android
- ✅ هاتف iPhone
- ✅ تابلت
- ✅ كمبيوتر

### 3. اختبار الكشف التلقائي
- على Android: يجب أن يظهر زر Google Play
- على iOS: يجب أن يظهر زر App Store
- على Desktop: يجب أن يظهر زر عام

---

## نصائح للتسويق

### 1. استخدم الرابط القصير
`app.uniskills.pro` أسهل في التذكر من الرابط الكامل

### 2. أنشئ QR Code
استخدم موقع مثل [qr-code-generator.com](https://www.qr-code-generator.com/)

### 3. أضف الرابط في:
- ✅ توقيع البريد الإلكتروني
- ✅ بطاقات العمل
- ✅ المطبوعات الدعائية
- ✅ العروض التقديمية

### 4. شارك على السوشيال ميديا
الصفحة محسّنة للمشاركة مع:
- صورة معاينة جذابة
- عنوان ووصف مناسب
- Open Graph tags

---

## استكشاف الأخطاء

### المشكلة: الصفحة لا تظهر على app.uniskills.pro
**الحل**: 
1. تأكد من إضافة CNAME في DNS
2. انتظر حتى 48 ساعة لانتشار DNS
3. تحقق من إعدادات Vercel

### المشكلة: الكشف التلقائي لا يعمل
**الحل**:
1. افتح Console في المتصفح (F12)
2. تحقق من وجود أخطاء JavaScript
3. تأكد من تحديث روابط المتاجر

### المشكلة: الصور لا تظهر
**الحل**:
1. تأكد من وجود `uniskills-logo.png` في نفس المجلد
2. امسح الكاش في المتصفح
3. تحقق من مسار الصورة

---

## خطوات النشر السريعة

```bash
# 1. رفع التحديثات
cd "Uniskills Web"
git add .
git commit -m "Add smart download link at app.uniskills.pro"
git push

# 2. إضافة subdomain في Vercel
# Settings → Domains → Add: app.uniskills.pro

# 3. تحديث DNS
# CNAME: app → cname.vercel-dns.com

# 4. اختبار
# افتح: https://app.uniskills.pro
```

---

## الخلاصة

✅ صفحة تحميل ذكية جاهزة
✅ كشف تلقائي للنظام
✅ تصميم عصري ومتجاوب
✅ SEO محسّن
✅ جاهزة للتتبع والتحليل
✅ سهلة التخصيص

---

تم الإنشاء: 2 مارس 2026 🚀
