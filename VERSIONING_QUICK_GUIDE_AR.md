# دليل سريع لنظام الإصدارات 📦

## الإصدار الحالي: v4.2.0

---

## طريقة التحديث السريعة ⚡

### باستخدام PowerShell Script (موصى به):

```powershell
# في مجلد Uniskills Web
.\update-version.ps1 -NewVersion "4.3.0"
```

السكريبت سيقوم بـ:
- ✅ تحديث جميع ملفات HTML تلقائياً
- ✅ إنشاء/تحديث CHANGELOG.md
- ✅ عرض ملخص التغييرات
- ✅ إعطاء الخطوات التالية

---

## الطريقة اليدوية 🔧

### 1. حدد نوع التحديث:

| النوع | متى تستخدمه | مثال |
|-------|-------------|------|
| **MAJOR** | تغييرات كبيرة في التصميم | 4.2.0 → 5.0.0 |
| **MINOR** | إضافة ميزات جديدة | 4.2.0 → 4.3.0 |
| **PATCH** | إصلاحات بسيطة | 4.2.0 → 4.2.1 |

### 2. حدّث الملفات:

ابحث عن `v=4.2.0` واستبدله بـ `v=4.3.0` في:
- index.html
- faq.html
- privacy.html
- terms.html
- 404.html

### 3. حدّث CHANGELOG.md:

أضف في الأعلى:
```markdown
## v4.3.0 - 2026-03-XX

### إضافات ✨
- وصف التغييرات

### تحسينات 🚀
- وصف التحسينات
```

### 4. ارفع على Git:

```bash
git add .
git commit -m "Update to v4.3.0 - وصف مختصر"
git push
```

---

## أمثلة على التحديثات 📝

### مثال 1: إضافة ميزة جديدة (MINOR)

```bash
# من v4.2.0 إلى v4.3.0
.\update-version.ps1 -NewVersion "4.3.0"

# في CHANGELOG.md
## v4.3.0 - 2026-03-05
### إضافات ✨
- إضافة قسم الشهادات
- إضافة نظام التقييمات

git commit -m "Update to v4.3.0 - Add certificates and ratings sections"
```

### مثال 2: إصلاح خطأ (PATCH)

```bash
# من v4.2.0 إلى v4.2.1
.\update-version.ps1 -NewVersion "4.2.1"

# في CHANGELOG.md
## v4.2.1 - 2026-03-03
### إصلاحات 🐛
- إصلاح مشكلة في عرض الصور على Safari

git commit -m "Update to v4.2.1 - Fix Safari image display issue"
```

### مثال 3: تصميم جديد كلياً (MAJOR)

```bash
# من v4.2.0 إلى v5.0.0
.\update-version.ps1 -NewVersion "5.0.0"

# في CHANGELOG.md
## v5.0.0 - 2026-04-01
### إضافات ✨
- تصميم جديد كلياً
- نظام ألوان محدث
- تجربة مستخدم محسّنة

git commit -m "Update to v5.0.0 - Complete redesign"
```

---

## التحقق من الإصدار الحالي 🔍

### في PowerShell:
```powershell
Select-String -Path "index.html" -Pattern "v=(\d+\.\d+\.\d+)" | 
Select-Object -First 1
```

### في المتصفح:
1. افتح Developer Tools (F12)
2. اذهب إلى Network Tab
3. ابحث عن `style.css` أو `script.js`
4. شاهد رقم الإصدار في URL

---

## نصائح مهمة ⚠️

1. **لا تنسَ التحديث** عند تعديل CSS أو JS
2. **استخدم نفس الرقم** في جميع الملفات
3. **وثّق التغييرات** في CHANGELOG.md
4. **اختبر دائماً** في Incognito Mode بعد النشر

---

## استكشاف الأخطاء 🔧

### المشكلة: التغييرات لا تظهر بعد النشر
**الحل**: 
- تأكد من تحديث رقم الإصدار
- امسح الكاش (Ctrl+Shift+Delete)
- جرب Incognito Mode

### المشكلة: بعض الملفات محدثة وبعضها لا
**الحل**:
- استخدم PowerShell Script للتحديث التلقائي
- أو تحقق يدوياً من جميع ملفات HTML

### المشكلة: الإصدار القديم يظهر في بعض الصفحات
**الحل**:
```powershell
# ابحث عن جميع الإصدارات
Select-String -Path "*.html" -Pattern "v=\d+\.\d+\.\d+"
```

---

## الملفات المهمة 📁

| الملف | الوصف |
|-------|--------|
| `update-version.ps1` | سكريبت التحديث التلقائي |
| `CHANGELOG.md` | سجل جميع التغييرات |
| `VERSION_UPDATE_AR.md` | دليل شامل للـ versioning |
| `VERSIONING_QUICK_GUIDE_AR.md` | هذا الملف - دليل سريع |

---

## ملخص الأوامر 📋

```powershell
# تحديث الإصدار
.\update-version.ps1 -NewVersion "4.3.0"

# التحقق من الإصدار الحالي
Select-String -Path "index.html" -Pattern "v=(\d+\.\d+\.\d+)"

# البحث عن جميع الإصدارات
Select-String -Path "*.html" -Pattern "v=\d+\.\d+\.\d+"

# رفع على Git
git add .
git commit -m "Update to v4.3.0"
git push
```

---

**الإصدار الحالي**: v4.2.0  
**آخر تحديث**: 2 مارس 2026  
**الخطوة التالية**: v4.3.0 أو v4.2.1 حسب نوع التحديث
