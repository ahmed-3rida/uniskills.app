# خطوات النشر السريعة 🚀

## ما تم عمله ✅
- إعداد 301 Redirect في `vercel.json` و `.htaccess`
- تحديث جميع الروابط من `uniskills-app.vercel.app` إلى `www.uniskills.pro`
- تحديث `sitemap.xml` و `robots.txt`

---

## الخطوات المطلوبة منك الآن:

### 1️⃣ رفع التحديثات على Git
```bash
cd "Uniskills Web"
git add .
git commit -m "Setup 301 redirect to www.uniskills.pro"
git push
```

### 2️⃣ إضافة الدومين في Vercel
1. افتح [Vercel Dashboard](https://vercel.com/dashboard)
2. اختر مشروع UniSkills
3. اذهب إلى **Settings** → **Domains**
4. اضغط **Add Domain**
5. أدخل: `www.uniskills.pro`
6. اضغط **Add**

### 3️⃣ تحديث DNS في لوحة تحكم الدومين
أضف هذه السجلات:

**A Record:**
```
Type: A
Name: @
Value: 76.76.21.21
```

**CNAME Record:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### 4️⃣ انتظر (1-48 ساعة)
DNS يحتاج وقت للتحديث عالمياً

### 5️⃣ اختبار
افتح `https://uniskills-app.vercel.app` - يجب أن يحول تلقائياً إلى `https://www.uniskills.pro`

---

## بعد التفعيل:

### Google Search Console
1. أضف الموقع الجديد
2. ارفع `sitemap.xml`
3. استخدم أداة **Change of Address**

### حدّث الروابط في:
- صفحات التواصل الاجتماعي
- Google Play Store (وصف التطبيق)
- أي مكان آخر يحتوي على رابط الموقع

---

## التحقق من نجاح التحويل:
```bash
curl -I https://uniskills-app.vercel.app
```
يجب أن ترى: `location: https://www.uniskills.pro/`

---

✅ جاهز للنشر!
