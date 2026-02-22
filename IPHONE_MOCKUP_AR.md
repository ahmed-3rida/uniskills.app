# 📱 تصميم iPhone Mockup للاسكرينات

## ✨ التصميم الجديد

تم تحويل الاسكرينات لتظهر كأنها داخل شاشة آيفون حقيقية!

---

## 🎨 المميزات

### 1. iPhone Frame
- إطار أسود بتصميم آيفون الحديث
- حواف مستديرة (42px border-radius)
- ظلال واقعية ثلاثية الأبعاد

### 2. Dynamic Island / Notch
- نوتش (Notch) في أعلى الشاشة
- سماعة (Speaker) في المنتصف
- تصميم يشبه iPhone 14 Pro

### 3. تأثيرات احترافية
- Shadow متعدد الطبقات
- Hover effect سلس
- Dark mode support مع neon glow

---

## 🎯 التفاصيل التقنية

### iPhone Container
```css
.screenshot-item {
    flex: 0 0 320px;
    background: #1a1a1a;
    border-radius: 42px;
    padding: 14px;
    box-shadow: 
        0 20px 60px rgba(0, 0, 0, 0.3),
        0 0 0 1px rgba(255, 255, 255, 0.1),
        inset 0 0 0 1px rgba(255, 255, 255, 0.05);
}
```

### Notch (النوتش)
```css
.screenshot-item::before {
    content: '';
    position: absolute;
    top: 14px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 28px;
    background: #1a1a1a;
    border-radius: 0 0 20px 20px;
}
```

### Speaker (السماعة)
```css
.screenshot-item::after {
    content: '';
    position: absolute;
    top: 22px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 6px;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 3px;
}
```

### Screen (الشاشة)
```css
.screenshot-item img {
    width: 100%;
    height: auto;
    border-radius: 32px;
    background: #000;
}
```

---

## 🌙 Dark Mode

في الوضع الليلي، الآيفون يحصل على:
- خلفية أغمق (#0a0a0a)
- Neon glow أزرق سماوي
- Shadow مع تأثير neon

```css
[data-theme="dark"] .screenshot-item {
    background: #0a0a0a;
    box-shadow:
        0 20px 60px rgba(0, 217, 255, 0.15),
        0 0 0 1px rgba(0, 217, 255, 0.2),
        inset 0 0 0 1px rgba(0, 217, 255, 0.1);
}
```

---

## 📱 Responsive Design

### Tablet (768px)
```css
.screenshot-item {
    flex: 0 0 280px;
    padding: 12px;
    border-radius: 38px;
}

.screenshot-item::before {
    width: 100px;
    height: 24px;
}
```

### Mobile (480px)
```css
.screenshot-item {
    flex: 0 0 260px;
    padding: 10px;
    border-radius: 34px;
}

.screenshot-item::before {
    width: 90px;
    height: 22px;
}
```

---

## 🎭 Hover Effects

عند الـ hover:
- الآيفون يرتفع للأعلى
- يكبر قليلاً (scale 1.03)
- الظل يزيد
- الصورة تكبر قليلاً جداً

```css
.screenshot-item:hover {
    transform: translateY(-12px) scale(1.03);
    box-shadow: 
        0 30px 80px rgba(0, 0, 0, 0.4),
        0 0 0 1px rgba(255, 255, 255, 0.15);
}

.screenshot-item:hover img {
    transform: scale(1.01);
}
```

---

## 🎨 الألوان المستخدمة

### Light Mode
- Frame: `#1a1a1a` (رمادي غامق)
- Notch: `#1a1a1a`
- Speaker: `rgba(0, 0, 0, 0.8)`
- Screen Background: `#000`

### Dark Mode
- Frame: `#0a0a0a` (أسود)
- Neon Glow: `rgba(0, 217, 255, 0.15)`
- Border: `rgba(0, 217, 255, 0.2)`

---

## 📐 الأبعاد

### Desktop
- Width: 320px
- Padding: 14px
- Border Radius: 42px
- Notch Width: 120px
- Notch Height: 28px
- Speaker Width: 60px
- Speaker Height: 6px

### Tablet
- Width: 280px
- Padding: 12px
- Border Radius: 38px
- Notch Width: 100px
- Notch Height: 24px

### Mobile
- Width: 260px
- Padding: 10px
- Border Radius: 34px
- Notch Width: 90px
- Notch Height: 22px

---

## ✅ المميزات الإضافية

### 1. Realistic Shadows
ظلال متعددة الطبقات تعطي عمق واقعي:
```css
box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.3),      /* Main shadow */
    0 0 0 1px rgba(255, 255, 255, 0.1),  /* Border glow */
    inset 0 0 0 1px rgba(255, 255, 255, 0.05); /* Inner glow */
```

### 2. Smooth Transitions
جميع التأثيرات سلسة:
```css
transition: all var(--transition-normal);
```

### 3. Z-Index Management
- Notch: z-index: 10
- Speaker: z-index: 11
- Screen: z-index: 1

---

## 🚀 التحسينات المستقبلية (اختيارية)

### 1. إضافة أزرار الآيفون
```css
/* Power button */
.screenshot-item::after {
    /* يمكن إضافة زر الباور على الجانب */
}
```

### 2. إضافة Camera
```css
/* Front camera */
.screenshot-item .camera {
    position: absolute;
    width: 12px;
    height: 12px;
    background: #000;
    border-radius: 50%;
}
```

### 3. إضافة Home Indicator
```css
/* Bottom home indicator for newer iPhones */
.screenshot-item .home-indicator {
    position: absolute;
    bottom: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 4px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 2px;
}
```

---

## 🎯 النتيجة

الآن الاسكرينات تظهر بشكل احترافي جداً:
- ✅ تصميم آيفون واقعي
- ✅ نوتش وسماعة
- ✅ ظلال ثلاثية الأبعاد
- ✅ Dark mode مع neon glow
- ✅ Responsive على جميع الأجهزة
- ✅ Hover effects سلسة

---

## 📋 الملفات المعدلة

- ✅ `style.css` - تصميم iPhone mockup
- ✅ `index.html` - تحديث رقم الإصدار (v=9)

---

## 🧪 للاختبار

1. افتح `index.html` في المتصفح
2. اضغط Ctrl+Shift+R لمسح الكاش
3. scroll للـ Screenshots section
4. شوف التصميم الجديد!
5. جرب hover على الصور
6. جرب Dark mode
7. جرب على موبايل

---

**تم التحديث**: 22 فبراير 2026
**الحالة**: ✅ جاهز للاستخدام
**التصميم**: iPhone 14 Pro inspired
