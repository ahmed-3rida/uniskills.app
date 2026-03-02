# تحديث أرقام الإصدار (Cache Busting) 🔄

## الإصدار الجديد: v4.2.0

تم تحديث أرقام إصدار جميع الملفات الثابتة لضمان تحديث الكاش عند المستخدمين.

---

## ما تم تحديثه ✅

### 1. أرقام الإصدار في HTML Files

تم تحديث من `v=4.1.0` إلى `v=4.2.0` في:

```html
<!-- CSS -->
<link rel="stylesheet" href="style.css?v=4.2.0">

<!-- JavaScript -->
<script src="script.js?v=4.2.0"></script>
```

### الملفات المحدثة:
- ✅ `index.html`
- ✅ `faq.html`
- ✅ `privacy.html`
- ✅ `terms.html`
- ✅ `404.html`

---

## 2. تحسين Cache Headers في vercel.json

تم تحسين إعدادات الكاش لأنواع الملفات المختلفة:

### CSS & JavaScript
```json
{
  "source": "/(.*)\\.(css|js)",
  "headers": [
    {
      "key": "Cache-Control",
      "value": "public, max-age=31536000, immutable"
    }
  ]
}
```
- **max-age=31536000**: كاش لمدة سنة كاملة
- **immutable**: الملف لن يتغير (بسبب versioning)

### الصور
```json
{
  "source": "/(.*)\\.(jpg|jpeg|png|gif|svg|ico|webp)",
  "headers": [
    {
      "key": "Cache-Control",
      "value": "public, max-age=31536000, immutable"
    }
  ]
}
```

### الخطوط
```json
{
  "source": "/(.*)\\.(woff|woff2|ttf|eot)",
  "headers": [
    {
      "key": "Cache-Control",
      "value": "public, max-age=31536000, immutable"
    }
  ]
}
```

### HTML Files
```json
{
  "source": "/(.*)\\.html",
  "headers": [
    {
      "key": "Cache-Control",
      "value": "public, max-age=0, must-revalidate"
    }
  ]
}
```
- **max-age=0**: لا كاش للـ HTML
- **must-revalidate**: تحقق دائماً من النسخة الجديدة

---

## 3. الفوائد

### أداء أفضل 🚀
- تحميل أسرع للزوار المتكررين
- تقليل استهلاك Bandwidth
- تحسين Core Web Vitals

### تحكم أفضل في التحديثات 🎯
- عند تغيير CSS/JS، فقط غيّر رقم الإصدار
- المستخدمون سيحصلون على النسخة الجديدة فوراً
- لا حاجة لمسح الكاش يدوياً

### SEO أفضل 📈
- سرعة التحميل عامل مهم في ترتيب Google
- تجربة مستخدم أفضل = معدل ارتداد أقل

---

## 4. كيفية التحديث في المستقبل

عند تعديل `style.css` أو `script.js`:

### الخطوة 1: عدّل الملف
```css
/* في style.css */
.new-feature {
  color: blue;
}
```

### الخطوة 2: زد رقم الإصدار
```bash
# من v=4.2.0 إلى v=4.3.0
```

### الخطوة 3: حدّث جميع HTML Files
```html
<!-- قبل -->
<link rel="stylesheet" href="style.css?v=4.2.0">

<!-- بعد -->
<link rel="stylesheet" href="style.css?v=4.3.0">
```

### الخطوة 4: ارفع على Git
```bash
git add .
git commit -m "Update to v4.3.0"
git push
```

---

## 5. نظام الترقيم (Semantic Versioning)

نستخدم نظام `MAJOR.MINOR.PATCH`:

### MAJOR (الرقم الأول)
- تغييرات كبيرة في التصميم
- إعادة هيكلة كاملة
- مثال: `4.0.0` → `5.0.0`

### MINOR (الرقم الثاني)
- إضافة ميزات جديدة
- تحسينات ملحوظة
- مثال: `4.1.0` → `4.2.0`

### PATCH (الرقم الثالث)
- إصلاحات بسيطة
- تعديلات صغيرة
- مثال: `4.2.0` → `4.2.1`

---

## 6. سجل الإصدارات

| الإصدار | التاريخ | التغييرات |
|---------|---------|-----------|
| v4.2.0 | 2 مارس 2026 | - تحديث الدومين إلى www.uniskills.pro<br>- تحسين Favicon<br>- إضافة 301 Redirect<br>- تحسين Cache Headers |
| v4.1.0 | 25 فبراير 2026 | - تحسينات SEO<br>- إضافة Structured Data<br>- تحسين الأداء |
| v4.0.0 | فبراير 2026 | - إطلاق التصميم الجديد<br>- إضافة أقسام جديدة |

---

## 7. اختبار التحديث

### في المتصفح:
1. افتح Developer Tools (F12)
2. اذهب إلى Network Tab
3. حدّث الصفحة (Ctrl+F5)
4. ابحث عن `style.css?v=4.2.0`
5. تحقق من Status: `200` (تحميل جديد) أو `304` (من الكاش)

### باستخدام cURL:
```bash
curl -I https://www.uniskills.pro/style.css?v=4.2.0
```

يجب أن ترى:
```
Cache-Control: public, max-age=31536000, immutable
```

---

## 8. نصائح مهمة ⚠️

1. **لا تنسَ تحديث رقم الإصدار** عند تعديل CSS/JS
2. **استخدم نفس الرقم** في جميع HTML files
3. **اختبر دائماً** بعد التحديث في Incognito Mode
4. **وثّق التغييرات** في سجل الإصدارات

---

## 9. أدوات مساعدة

### PowerShell Script للتحديث التلقائي:
```powershell
# تحديث من v4.2.0 إلى v4.3.0
$oldVersion = "4.2.0"
$newVersion = "4.3.0"

Get-ChildItem "Uniskills Web" -Filter "*.html" | ForEach-Object {
    (Get-Content $_.FullName -Raw) -replace "v=$oldVersion", "v=$newVersion" | 
    Set-Content $_.FullName -NoNewline
}

Write-Host "Updated to v$newVersion" -ForegroundColor Green
```

### التحقق من الإصدار الحالي:
```powershell
Select-String -Path "Uniskills Web/*.html" -Pattern "v=\d+\.\d+\.\d+" | 
Select-Object -First 1
```

---

## 10. الخطوات التالية

بعد رفع التحديثات:

1. ✅ اختبر الموقع في Incognito Mode
2. ✅ تحقق من تحميل CSS/JS بشكل صحيح
3. ✅ راقب Google PageSpeed Insights
4. ✅ تحقق من Vercel Analytics

---

## ملخص سريع 📋

```bash
# الإصدار الحالي
v4.2.0

# التحديثات
✅ جميع HTML files محدثة
✅ Cache Headers محسّنة في vercel.json
✅ نظام versioning جاهز للاستخدام

# للنشر
git add .
git commit -m "Update to v4.2.0 - Domain redirect & cache improvements"
git push
```

---

تم التحديث: 2 مارس 2026 ✅
الإصدار الحالي: **v4.2.0**
