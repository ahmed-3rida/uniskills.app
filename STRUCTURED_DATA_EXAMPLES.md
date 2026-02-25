# 📊 UniSkills Structured Data Examples (Schema.org JSON-LD)

## Overview
This document contains all structured data implementations for the UniSkills website. These schemas help search engines understand your content better and enable rich snippets in search results.

---

## 🏢 1. Educational Organization Schema (Homepage)

**Purpose:** Identifies UniSkills as an educational organization  
**Benefits:** Enhanced brand presence in search results, knowledge panel eligibility

```json
{
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "UniSkills",
  "alternateName": "يونيسكيلز",
  "url": "https://uniskills.vercel.app",
  "logo": "https://uniskills.vercel.app/uniskills.png",
  "description": "منصة تعليمية عربية متطورة تدمج الذكاء الاصطناعي لتوفير كورسات، امتحانات تفاعلية، شهادات معتمدة ومساعد ذكي للطلاب الجامعيين",
  "sameAs": [
    "https://play.google.com/store/apps/details?id=com.uniskills.app"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "ahmedsalmanareda@gmail.com",
    "contactType": "Customer Support",
    "availableLanguage": ["Arabic", "English"]
  }
}
```

**Implementation Location:** `index.html` in `<head>` section

---

## 🌐 2. WebSite Schema (Homepage)

**Purpose:** Enables sitelinks search box in Google  
**Benefits:** Users can search your site directly from Google results

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "UniSkills",
  "url": "https://uniskills.vercel.app",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://uniskills.vercel.app/?s={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

**Implementation Location:** `index.html` in `<head>` section

**Note:** Update the search URL when you implement site search functionality

---

## 📱 3. Mobile Application Schema (Homepage)

**Purpose:** Provides app information to search engines  
**Benefits:** App install buttons in search results, app pack in knowledge panel

```json
{
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  "name": "UniSkills",
  "operatingSystem": "Android",
  "applicationCategory": "EducationalApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "ratingCount": "1000"
  },
  "downloadUrl": "https://play.google.com/store/apps/details?id=com.uniskills.app"
}
```

**Implementation Location:** `index.html` in `<head>` section

**Update When:**
- iOS version launches (add separate schema)
- Rating/review count changes
- Price changes (if premium features added)

---

## ❓ 4. FAQPage Schema (FAQ Page)

**Purpose:** Displays FAQ rich snippets in search results  
**Benefits:** Increased visibility, higher CTR, featured snippet eligibility

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "هل التطبيق مجاني؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "نعم، يتيح التطبيق تجربة تعليمية واسعة مجاناً؛ هدفنا هو تسهيل رحلتك التعليمية بأفضل محتوى ممكن. وهناك مزايا إضافية مدفوعة باشتراكات مناسبة حسب احتياجك."
      }
    },
    {
      "@type": "Question",
      "name": "هل يدعم التطبيق الذكاء الاصطناعي (AI)؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "بالتأكيد! دمجنا أدوات ذكاء اصطناعي قوية داخل منصتنا يمكنها الإجابة على استفساراتك المعقدة، تحليل مستواك، وتوليد أسئلة دراسية تفاعلية من ملفات الـ PDF التي ترفعها."
      }
    },
    {
      "@type": "Question",
      "name": "كيف أبدأ في الموقع؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ببساطة، حمّل التطبيق من زر التنزيل، قم بتسجيل عضوية جديدة وأكمل إعداد ملفك الشخصي لتتمكن من الوصول لآلاف الكورسات والمقالات."
      }
    },
    {
      "@type": "Question",
      "name": "هل الشهادات معتمدة؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "نوفر شهادات إتمام للكورسات تؤكد الجهد الذي بذلته. يمكنك إضافتها لملفك المهني في LinkedIn أو السيرة الذاتية (CV). لا نمنح شهادات أكاديمية رسمية تصدر من جامعات."
      }
    },
    {
      "@type": "Question",
      "name": "كيف أتواصل مع الدعم الفني؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "عبر قسم المساعدة داخل التطبيق، أو يمكنك التواصل المباشر عبر البريد الإلكتروني ahmedsalmanareda@gmail.com وسنرد في أقرب وقت."
      }
    },
    {
      "@type": "Question",
      "name": "هل يمكن الوصول للدورات بعد الانتهاء منها؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "نعم، الكورسات والمواد التعليمية المندرجة تحت حسابك تبقى محفوظة في أرشيفك وتستطيع العودة لتدريب وتجديد معلوماتك متى ما شئت."
      }
    }
  ]
}
```

**Implementation Location:** `faq.html` in `<head>` section

**Update When:** Adding or modifying FAQ questions

---

## 🎓 5. Course Schema (Future Implementation)

**Purpose:** For individual course pages (when implemented)  
**Benefits:** Course rich snippets with ratings, price, provider info

```json
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "اسم الكورس",
  "description": "وصف الكورس التعليمي",
  "provider": {
    "@type": "Organization",
    "name": "UniSkills",
    "sameAs": "https://uniskills.vercel.app"
  },
  "offers": {
    "@type": "Offer",
    "category": "Free",
    "price": "0",
    "priceCurrency": "USD"
  },
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "online",
    "courseWorkload": "PT10H"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "150"
  }
}
```

**Implementation:** Add to individual course detail pages when created

---

## 📝 6. Article Schema (Future Implementation)

**Purpose:** For blog posts or educational articles  
**Benefits:** Article rich snippets with images, dates, author info

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "عنوان المقال",
  "description": "وصف مختصر للمقال",
  "image": "https://uniskills.vercel.app/article-image.jpg",
  "author": {
    "@type": "Person",
    "name": "اسم الكاتب"
  },
  "publisher": {
    "@type": "Organization",
    "name": "UniSkills",
    "logo": {
      "@type": "ImageObject",
      "url": "https://uniskills.vercel.app/uniskills.png"
    }
  },
  "datePublished": "2026-02-25",
  "dateModified": "2026-02-25"
}
```

**Implementation:** Add to article/blog pages when created

---

## 🎬 7. VideoObject Schema (Future Implementation)

**Purpose:** For video tutorials and lessons  
**Benefits:** Video rich snippets with thumbnails, duration, upload date

```json
{
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "عنوان الفيديو التعليمي",
  "description": "وصف محتوى الفيديو",
  "thumbnailUrl": "https://uniskills.vercel.app/video-thumbnail.jpg",
  "uploadDate": "2026-02-25",
  "duration": "PT15M",
  "contentUrl": "https://www.youtube.com/watch?v=VIDEO_ID",
  "embedUrl": "https://www.youtube.com/embed/VIDEO_ID",
  "publisher": {
    "@type": "Organization",
    "name": "UniSkills",
    "logo": {
      "@type": "ImageObject",
      "url": "https://uniskills.vercel.app/uniskills.png"
    }
  }
}
```

**Implementation:** Add to video lesson pages when created

---

## 🏆 8. Review/Rating Schema (Future Implementation)

**Purpose:** Display star ratings in search results  
**Benefits:** Increased CTR, trust signals

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "UniSkills App",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "2500",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "اسم المستخدم"
      },
      "datePublished": "2026-02-20",
      "reviewBody": "تطبيق رائع ساعدني كثيراً في دراستي",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      }
    }
  ]
}
```

**Implementation:** Add when collecting user reviews

---

## 🍞 9. BreadcrumbList Schema (Future Implementation)

**Purpose:** Display breadcrumb navigation in search results  
**Benefits:** Better site structure understanding, improved navigation

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "الرئيسية",
      "item": "https://uniskills.vercel.app/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "الكورسات",
      "item": "https://uniskills.vercel.app/courses"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "اسم الكورس",
      "item": "https://uniskills.vercel.app/courses/course-name"
    }
  ]
}
```

**Implementation:** Add to pages with breadcrumb navigation

---

## 🔍 Testing Your Structured Data

### Google Rich Results Test
1. Visit: https://search.google.com/test/rich-results
2. Enter your page URL
3. Check for errors and warnings
4. Fix any issues found

### Schema Markup Validator
1. Visit: https://validator.schema.org/
2. Paste your JSON-LD code
3. Validate syntax and structure

### Google Search Console
1. Go to "Enhancements" section
2. Check for structured data errors
3. Monitor rich result performance

---

## 📝 Best Practices

1. **Always validate** structured data before deploying
2. **Keep data accurate** - update when content changes
3. **Don't spam** - only mark up visible content
4. **Use specific types** - choose the most specific schema type
5. **Include required properties** - check schema.org documentation
6. **Test regularly** - verify rich results are working
7. **Monitor performance** - track CTR improvements

---

## 🚨 Common Mistakes to Avoid

❌ Marking up content not visible to users  
❌ Using incorrect schema types  
❌ Missing required properties  
❌ Outdated information (old dates, prices)  
❌ Duplicate schemas on same page  
❌ Invalid JSON syntax  
❌ Wrong URL formats  

---

## 📚 Resources

- **Schema.org Documentation**: https://schema.org/
- **Google Search Central**: https://developers.google.com/search/docs/appearance/structured-data
- **JSON-LD Playground**: https://json-ld.org/playground/
- **Rich Results Test**: https://search.google.com/test/rich-results
- **Schema Validator**: https://validator.schema.org/

---

## 🔄 Update Schedule

| Schema Type | Update Frequency | Trigger |
|-------------|------------------|---------|
| Organization | Quarterly | Contact info changes |
| MobileApplication | Monthly | Rating/download updates |
| FAQPage | As needed | New questions added |
| Course | Per course | New courses launched |
| Article | Per article | New content published |

---

## 📞 Support

For questions about structured data implementation:
- **Email**: ahmedsalmanareda@gmail.com
- **Documentation**: See SEO_IMPLEMENTATION_GUIDE.md

---

**Last Updated**: February 25, 2026  
**Version**: 1.0
