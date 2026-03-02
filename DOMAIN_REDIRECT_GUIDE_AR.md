# دليل تحويل الدومين إلى www.uniskills.pro 🌐

## ما تم إنجازه ✅

تم إعداد 301 Redirect كامل من الدومين القديم إلى الدومين الجديد مع تحديث جميع الروابط الداخلية.

---

## 1. إعداد 301 Redirect

### في ملف `vercel.json`

```json
"redirects": [
  {
    "source": "/(.*)",
    "destination": "https://www.uniskills.pro/$1",
    "permanent": true,
    "has": [
      {
        "type": "host",
        "value": "uniskills-app.vercel.app"
      }
    ]
  }
]
```

هذا يضمن:
- ✅ تحويل تلقائي من `uniskills-app.vercel.app` إلى `www.uniskills.pro`
- ✅ الحفاظ على المسارات (مثل `/faq.html` → `www.uniskills.pro/faq.html`)
- ✅ 301 Redirect دائم (permanent) لتحسين SEO

### في ملف `.htaccess`

```apache
RewriteEngine On

# 301 Redirect to new domain
RewriteCond %{HTTP_HOST} ^uniskills-app\.vercel\.app$ [NC]
RewriteRule ^(.*)$ https://www.uniskills.pro/$1 [R=301,L]
```

---

## 2. تحديث الروابط الداخلية

تم تحديث جميع الروابط في الملفات التالية:

### الملفات المحدثة:
- ✅ `index.html` - الصفحة الرئيسية
- ✅ `faq.html` - الأسئلة الشائعة
- ✅ `privacy.html` - سياسة الخصوصية
- ✅ `terms.html` - شروط الخدمة
- ✅ `404.html` - صفحة الخطأ
- ✅ `sitemap.xml` - خريطة الموقع
- ✅ `robots.txt` - ملف الروبوتات

### ما تم تحديثه في كل ملف:
1. **Canonical URLs** - الروابط المعيارية
2. **Open Graph URLs** - روابط مشاركة فيسبوك
3. **Twitter Card URLs** - روابط مشاركة تويتر
4. **Schema.org URLs** - البيانات المنظمة
5. **Image URLs** - روابط الصور

---

## 3. خطوات النشر على Vercel

### الخطوة 1: رفع التحديثات
```bash
cd "Uniskills Web"
git add .
git commit -m "Add 301 redirect to www.uniskills.pro"
git push
```

### الخطوة 2: ربط الدومين الجديد في Vercel

1. افتح مشروعك في Vercel Dashboard
2. اذهب إلى **Settings** → **Domains**
3. أضف الدومين الجديد: `www.uniskills.pro`
4. اتبع تعليمات Vercel لتحديث DNS Records

### الخطوة 3: إعدادات DNS المطلوبة

أضف هذه السجلات في لوحة تحكم الدومين:

#### A Record (للدومين الرئيسي)
```
Type: A
Name: @
Value: 76.76.21.21
TTL: Auto
```

#### CNAME Record (للـ www)
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: Auto
```

---

## 4. التحقق من نجاح التحويل

### اختبار 301 Redirect:

افتح Terminal واكتب:
```bash
curl -I https://uniskills-app.vercel.app
```

يجب أن ترى:
```
HTTP/2 301
location: https://www.uniskills.pro/
```

### اختبار في المتصفح:

1. افتح `https://uniskills-app.vercel.app`
2. يجب أن يتم التحويل تلقائياً إلى `https://www.uniskills.pro`
3. تحقق من شريط العنوان أن الدومين الجديد يظهر

---

## 5. تحديثات SEO المطلوبة

### Google Search Console

1. أضف الموقع الجديد: `https://www.uniskills.pro`
2. ارفع ملف `sitemap.xml` الجديد
3. استخدم أداة **Change of Address** لإخبار Google بالتحويل

### Google Analytics (إذا كان موجود)

1. حدّث Property Settings
2. غيّر Default URL إلى `https://www.uniskills.pro`

### Social Media

حدّث الروابط في:
- ✅ صفحة فيسبوك
- ✅ حساب تويتر/X
- ✅ قناة يوتيوب
- ✅ أي منصات أخرى

---

## 6. الفوائد من 301 Redirect

- ✅ **الحفاظ على SEO**: نقل قوة الدومين القديم للجديد
- ✅ **تجربة مستخدم أفضل**: لا روابط مكسورة
- ✅ **احترافية**: دومين مخصص بدلاً من subdomain
- ✅ **مصداقية**: دومين `.pro` يعطي انطباع احترافي

---

## 7. الجدول الزمني المتوقع

| المرحلة | الوقت المتوقع |
|---------|---------------|
| تفعيل DNS | 1-48 ساعة |
| ظهور في Google | 1-4 أسابيع |
| نقل كامل لـ SEO | 2-6 أشهر |

---

## 8. ملاحظات مهمة ⚠️

1. **لا تحذف الدومين القديم** لمدة 6 أشهر على الأقل
2. **راقب Google Search Console** لأي أخطاء في الزحف
3. **تحقق من Analytics** للتأكد من تتبع الزيارات بشكل صحيح
4. **اختبر جميع الصفحات** بعد التحويل

---

## 9. استكشاف الأخطاء

### المشكلة: الدومين الجديد لا يعمل
**الحل**: تحقق من إعدادات DNS وانتظر حتى 48 ساعة

### المشكلة: 301 Redirect لا يعمل
**الحل**: تأكد من رفع ملف `vercel.json` المحدث ونشره

### المشكلة: الصور لا تظهر
**الحل**: امسح الكاش في المتصفح أو استخدم Incognito Mode

---

## 10. الدعم والمساعدة

إذا واجهت أي مشاكل:
1. تحقق من Vercel Deployment Logs
2. راجع DNS Settings في لوحة تحكم الدومين
3. استخدم أدوات مثل [whatsmydns.net](https://www.whatsmydns.net) للتحقق من DNS

---

## ملخص سريع 📋

```bash
# 1. رفع التحديثات
git add .
git commit -m "Add 301 redirect to www.uniskills.pro"
git push

# 2. إضافة الدومين في Vercel
# Settings → Domains → Add www.uniskills.pro

# 3. تحديث DNS Records
# A Record: @ → 76.76.21.21
# CNAME: www → cname.vercel-dns.com

# 4. اختبار
curl -I https://uniskills-app.vercel.app
# يجب أن يظهر: location: https://www.uniskills.pro/
```

---

تم التحديث: 2 مارس 2026 ✅
