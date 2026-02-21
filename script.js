// ==================== Page Loader ====================
window.addEventListener('load', () => {
    const loader = document.querySelector('.page-loader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 500);
    }
});

// ==================== Translations ====================
const translations = {
    ar: {
        'nav.home': 'الرئيسية',
        'nav.features': 'المميزات',
        'nav.about': 'عن المنصة',
        'nav.testimonials': 'أراء الطلاب',
        'nav.faq': 'الأسئلة الشائعة',
        'hero.title': 'تعلم بذكاء مع UniSkills',
        'hero.description': 'منصة تعليمية حديثة مصممة لمساعدة الطلاب على التعلم بذكاء وسهولة. استمتع بتجربة تعليمية سلسة ومنظمة مع واجهة مستخدم عصرية وأداء فائق السرعة.',
        'hero.download': 'حمل التطبيق الآن',
        'hero.exams': 'ميزة الامتحانات قريباً',
        'hero.ios': 'نسخة iOS قريباً',
        'screenshots.title': 'لقطات من التطبيق',
        'screenshots.subtitle': 'استكشف واجهة التطبيق وتصميمه العصري',
        'features.title': 'مميزات المنصة',
        'features.subtitle': 'تجربة تعليمية متكاملة بأحدث التقنيات',
        'features.ai.title': 'ذكاء اصطناعي',
        'features.ai.desc': 'مساعد ذكي مخصص لك',
        'features.content.title': 'محتوى متميز',
        'features.content.desc': 'كورسات تعليمية بجودة عالية',
        'features.certificates.title': 'شهادات',
        'features.certificates.desc': 'شهادات موثقة لمسارك',
        'features.fast.title': 'تطور سريع',
        'features.fast.desc': 'تطوير مهاراتك بتسارع',
        'features.progress.title': 'تتبع التقدم',
        'features.progress.desc': 'راقب تقدمك وإنجازاتك بشكل مستمر',
        'features.articles.title': 'مقالات تعليمية',
        'features.articles.desc': 'محتوى تعليمي غني ومتنوع',
        'about.title': 'عن UniSkills',
        'about.desc1': 'UniSkills هي منصة تعليمية حديثة تهدف إلى تحويل تجربة التعلم للطلاب في العالم العربي. نؤمن بأن التعليم يجب أن يكون متاحاً وسهلاً وممتعاً للجميع.',
        'about.desc2': 'نسعى لتوفير بيئة تعليمية متكاملة تجمع بين المحتوى عالي الجودة والتكنولوجيا الحديثة، مما يساعد الطلاب على تحقيق أهدافهم الأكاديمية بكفاءة وفعالية.',
        'about.students': 'طالب نشط',
        'about.courses': 'دورة تعليمية',
        'about.support': 'دعم مستمر',
        'about.mission': 'رؤيتنا',
        'about.mission.desc': 'جعل التعليم الجيد متاحاً للجميع',
        'coming.title': 'قريباً',
        'coming.subtitle': 'مميزات جديدة ومثيرة في الطريق',
        'coming.exams.title': 'نظام الامتحانات',
        'coming.exams.desc': 'اختبر معلوماتك مع نظام امتحانات تفاعلي وشامل',
        'coming.ios.title': 'تطبيق iOS',
        'coming.ios.desc': 'قريباً على App Store لمستخدمي أجهزة Apple',
        'coming.features.title': 'مميزات إضافية',
        'coming.features.desc': 'المزيد من الأدوات القوية لتحسين تجربة التعلم',
        'coming.badge': 'قريباً',
        // Testimonials
        'testimonials.title': 'شهادات طلابنا',
        'testimonials.subtitle': 'تجارب حقيقية من طلاب استفادوا من UniSkills',
        'testimonials.student1.name': 'أحمد محمد',
        'testimonials.student1.role': 'طالب حاسبات ومعلومات',
        'testimonials.student1.text': 'المنصة دي بجد فظيعة! كطالب حاسبات، المحتوى هنا ساعدني جداً في منهج الكلية، والشرح عملي وبيخلي المواد الصعبة سهلة جداً.',
        'testimonials.student2.name': 'سارة أحمد',
        'testimonials.student2.role': 'طالبة حاسبات ومعلومات',
        'testimonials.student2.text': 'المساعد الذكي فرق معايا جداً، ساعدني أختار التخصص اللي بحبه وكمان بيشرح لي الأجزاء اللي مش بفهمها في المحاضرات.',
        'testimonials.student3.name': 'محمد علي',
        'testimonials.student3.role': 'طالب حاسبات ومعلومات',
        'testimonials.student3.text': 'كنت ضايع في الكورسات، بس المساعد الذكي رسم لي الطريق المناسب، وبقيت بخلص منهجي وأنا فاهم كل تفصيلة برمجية.',
        'testimonials.student4.name': 'فاطمة حسن',
        'testimonials.student4.role': 'طالبة حاسبات ومعلومات',
        'testimonials.student4.text': 'جودة الكورسات خرافية، والشهادات فعلاً قوية وساعدتني في الـ LinkedIn، وكمان المنهج ماشي مع اللي بدرسه في الجامعة بالظبط.',
        'testimonials.student5.name': 'محمود ياسين',
        'testimonials.student5.role': 'طالب حاسبات ومعلومات',
        'testimonials.student5.text': 'أحلى حاجة إن كل حاجة مترتبة صح، والمساعد الذكي دايماً موجود يجاوب على أي سؤال رخم واقف قدامي في مواد التخصص.',
        'testimonials.student6.name': 'ليلى إبراهيم',
        'testimonials.student6.role': 'طالبة حاسبات ومعلومات',
        'testimonials.student6.text': 'التعلم هنا ممتع بجد مش زي ورق الجامعة التقليدي، والمساعد الذكي بيخليني حاسة إني دايماً متفوقة وبطور نفسي كل يوم.',
        // Why Choose Us
        'why.title': 'لماذا تختار UniSkills؟',
        'why.subtitle': 'نقدم لك تجربة تعليمية فريدة ومتميزة',
        'why.updated.title': 'محتوى متجدد باستمرار',
        'why.updated.desc': 'نضيف دورات ومقالات جديدة بشكل دوري لمواكبة أحدث التطورات',
        'why.easy.title': 'واجهة سهلة الاستخدام',
        'why.easy.desc': 'تصميم عصري وبسيط يجعل التعلم ممتعاً وسهلاً للجميع',
        'why.support.title': 'دعم مباشر 24/7',
        'why.support.desc': 'فريق دعم متاح دائماً للإجابة على استفساراتك ومساعدتك',
        'why.tracking.title': 'أدوات متابعة التقدم',
        'why.tracking.desc': 'تتبع تقدمك وإنجازاتك بشكل تفصيلي مع تقارير شاملة',
        // Upcoming Exams
        'exams.title': 'الامتحانات القادمة',
        'exams.subtitle': 'استعد للامتحانات مع نظامنا التفاعلي الجديد',
        'exams.system.title': 'نظام امتحانات تفاعلي',
        'exams.system.desc': 'قريباً: نظام امتحانات شامل مع تقييم فوري ونتائج تفصيلية',
        'exams.feature1': 'تقييم فوري',
        'exams.feature2': 'تتبع الأداء',
        'exams.feature3': 'شهادات معتمدة',
        'exams.countdown': 'قريباً جداً',
        'exams.badge': 'قيد التطوير',
        // FAQ
        'faq.title': 'الأسئلة الشائعة',
        'faq.subtitle': 'إجابات على أكثر الأسئلة شيوعاً',
        'faq.q1': 'هل التطبيق مجاني؟',
        'faq.a1': 'نعم كل الكورسات مجانية بالكامل',
        'faq.q2': 'هل يحتاج التطبيق إلى تسجيل؟',
        'faq.a2': 'نعم، يتطلب التطبيق إنشاء حساب لتتمكن من الوصول إلى الدورات وتتبع تقدمك والحصول على الشهادات.',
        'faq.q3': 'كيف أسجل في الدورة؟',
        'faq.a3': 'اضغط على زر "اشترك الآن" في صفحة تفاصيل الدورة، وستتمكن من الوصول إلى جميع دروس الدورة فوراً.',
        'faq.q4': 'هل الشهادات معتمدة؟',
        'faq.a4': 'نعم، جميع الشهادات معتمدة من UniSkills ويمكنك تحميلها ومشاركتها على LinkedIn وغيرها من المنصات.',
        'faq.q5': 'كيف أتواصل مع المدرب؟',
        'faq.a5': 'يمكنك التواصل عبر قسم الملف الشخصي للمدرب في كل درس.',
        'faq.q6': 'هل يمكنني الوصول للدورات بعد الانتهاء منها؟',
        'faq.a6': 'نعم، لديك وصول مدى الحياة للدورات التي تشترك فيها. يمكنك العودة إليها في أي وقت.',
        // CTA
        'cta.download': 'حمل التطبيق الآن',
        'download.title': 'ابدأ رحلتك التعليمية الآن',
        'download.subtitle': 'حمل التطبيق واستمتع بتجربة تعليمية فريدة',
        'download.available': 'متوفر على',
        'social.title': 'تواصل معنا',
        'social.subtitle': 'تابعنا على منصات التواصل الاجتماعي',
        'footer.description': 'منصة تعليمية حديثة تهدف إلى تمكين الطلاب من خلال التكنولوجيا والذكاء الاصطناعي.',
        'footer.quickLinks': 'روابط سريعة',
        'footer.contact': 'اتصل بنا',
        'footer.address': 'القاهرة، مصر',
        'footer.email': 'ahmedsalmanareda@gmail.com',
        'footer.terms': 'شروط الخدمة',
        'footer.copyright': '© 2026 UniSkills. جميع الحقوق محفوظة.',
        // Terms page translations
        'terms.title': 'شروط الخدمة',
        'terms.updated': 'آخر تحديث: يناير 2024',
        'terms.acceptance.title': '1. قبول الشروط',
        'terms.acceptance.p1': 'مرحباً بك في UniSkills. باستخدامك لمنصتنا وتطبيقنا، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على أي جزء من هذه الشروط، يرجى عدم استخدام خدماتنا.',
        'terms.acceptance.p2': 'نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سيتم إخطارك بأي تغييرات جوهرية، واستمرارك في استخدام الخدمة بعد هذه التغييرات يعني موافقتك عليها.',
        'terms.disclaimer.title': '2. إخلاء مسؤولية المحتوى (YouTube)',
        'terms.disclaimer.p1': 'يود فريق UniSkills التوضيح بأن المحتوى التعليمي المرئي (الفيديوهات) المتاح عبر المنصة ليس ملكاً حصرياً للمنصة، بل هو محتوى متاح للعموم على موقع يوتيوب (YouTube). نقوم بتنظيم وتسهيل الوصول لهذا المحتوى لخدمة الطلاب، ونقر بكامل حقوق الملكية الفكرية لصناع المحتوى الأصليين.',
        'terms.intellectual.title': '3. الملكية الفكرية',
        'terms.intellectual.p1': 'جميع المحتويات المتاحة على منصة UniSkills، بما في ذلك النصوص والرسومات والشعارات والصور والبرمجيات، هي ملك لـ UniSkills أو مرخصيها. أما فيما يخص الفيديوهات التعليمية، فتطبق عليها شروط "إخلاء مسؤولية المحتوى" الموضحة في البند رقم 2.',
        'terms.intellectual.p2': 'لا يجوز لك نسخ أو تعديل أو توزيع أو بيع أو تأجير أي جزء من خدماتنا أو البرمجيات المضمنة دون إذن كتابي صريح منا.',
        'terms.certificates.title': '4. الشهادات الصادرة',
        'terms.certificates.p1': 'الشهادات الصادرة من UniSkills هي شهادات إتمام للدورات التدريبية وليست شهادات أكاديمية رسمية. قد لا تكون معترف بها من قبل جميع المؤسسات التعليمية أو أصحاب العمل، وهي تهدف لتوثيق الجهد المبذول فقط.',
        'terms.usage.title': '5. استخدام المنصة',
        'terms.usage.p1': 'UniSkills هي منصة تعليمية مصممة لمساعدة الطلاب على الوصول إلى محتوى تعليمي عالي الجودة. يجب عليك استخدام المنصة بطريقة قانونية ومسؤولة.',
        'terms.usage.allowed.title': 'الاستخدامات المسموحة:',
        'terms.usage.allowed.1': 'الوصول إلى المحتوى التعليمي للأغراض الشخصية والأكاديمية',
        'terms.usage.allowed.2': 'التفاعل مع المحتوى والمشاركة في الأنشطة التعليمية',
        'terms.usage.allowed.3': 'تتبع تقدمك الأكاديمي وإنجازاتك',
        'terms.usage.prohibited.title': 'الاستخدامات المحظورة:',
        'terms.usage.prohibited.1': 'نسخ أو توزيع المحتوى دون إذن',
        'terms.usage.prohibited.2': 'استخدام المنصة لأغراض تجارية دون موافقة',
        'terms.usage.prohibited.3': 'محاولة اختراق أو تعطيل النظام',
        'terms.usage.prohibited.4': 'انتحال شخصية الآخرين أو إنشاء حسابات وهمية',
        'terms.usage.prohibited.5': 'نشر محتوى مسيء أو غير قانوني',
        'terms.account.title': '6. حساب المستخدم',
        'terms.account.p1': 'عند إنشاء حساب على UniSkills، أنت مسؤول عن الحفاظ على سرية معلومات حسابك وكلمة المرور الخاصة بك. أنت مسؤول عن جميع الأنشطة التي تحدث تحت حسابك.',
        'terms.account.p2': 'يجب عليك إخطارنا فوراً بأي استخدام غير مصرح به لحسابك أو أي خرق أمني آخر. لن نكون مسؤولين عن أي خسارة أو ضرر ناتج عن فشلك في الامتثال لهذا القسم.',
        'terms.content.title': '7. محتوى المستخدم',
        'terms.content.p1': 'قد تتيح لك بعض أجزاء المنصة نشر أو تحميل محتوى. أنت تحتفظ بجميع حقوق الملكية في المحتوى الذي تنشره، ولكنك تمنحنا ترخيصاً عالمياً غير حصري لاستخدام هذا المحتوى لتشغيل وتحسين خدماتنا.',
        'terms.content.p2': 'أنت مسؤول عن المحتوى الذي تنشره وتضمن أنه لا ينتهك حقوق أي طرف ثالث ولا يحتوي على مواد غير قانونية أو مسيئة.',
        'terms.privacy.title': '8. الخصوصية وحماية البيانات',
        'terms.privacy.p1': 'نحن نأخذ خصوصيتك على محمل الجد. نقوم بجمع واستخدام معلوماتك الشخصية وفقاً لسياسة الخصوصية الخاصة بنا. باستخدام خدماتنا، فإنك توافق على جمع واستخدام المعلومات كما هو موضح في سياسة الخصوصية.',
        'terms.payments.title': '9. المدفوعات والاشتراكات',
        'terms.payments.p1': 'قد تتطلب بعض الميزات أو المحتوى على المنصة دفع رسوم. جميع الرسوم غير قابلة للاسترداد ما لم ينص على خلاف ذلك صراحة.',
        'terms.payments.p2': 'نحتفظ بالحق في تغيير أسعارنا في أي وقت. سيتم إخطارك بأي تغييرات في الأسعار قبل تطبيقها على اشتراكك.',
        'terms.liability.title': '10. تحديد المسؤولية',
        'terms.liability.p1': 'يتم توفير خدمات UniSkills "كما هي" و"حسب التوفر". لا نقدم أي ضمانات، صريحة أو ضمنية، فيما يتعلق بتشغيل خدماتنا أو المعلومات أو المحتوى أو المواد المضمنة فيها.',
        'terms.liability.p2': 'لن نكون مسؤولين عن أي أضرار مباشرة أو غير مباشرة أو عرضية أو خاصة أو تبعية ناتجة عن استخدامك أو عدم قدرتك على استخدام الخدمة.',
        'terms.liability.p3': 'نحن لا نضمن أن الخدمة ستكون متاحة دائماً أو خالية من الأخطاء. قد نقوم بتعليق أو سحب أو تقييد توفر الخدمة دون إشعار مسبق.',
        'terms.termination.title': '11. إنهاء الخدمة',
        'terms.termination.p1': 'يمكنك إنهاء حسابك في أي وقت عن طريق الاتصال بنا. نحتفظ بالحق في تعليق أو إنهاء حسابك إذا انتهكت هذه الشروط أو إذا كان استخدامك للخدمة يضر بالمنصة أو المستخدمين الآخرين.',
        'terms.termination.p2': 'عند إنهاء حسابك، سيتم حذف بياناتك وفقاً لسياسة الخصوصية الخاصة بنا، ولن تتمكن من الوصول إلى أي محتوى أو ميزات مدفوعة.',
        'terms.changes.title': '12. التغييرات على الخدمة',
        'terms.changes.p1': 'نحتفظ بالحق في تعديل أو إيقاف الخدمة (أو أي جزء منها) مؤقتاً أو بشكل دائم في أي وقت دون إشعار مسبق. لن نكون مسؤولين تجاهك أو تجاه أي طرف ثالث عن أي تعديل أو تعليق أو إيقاف للخدمة.',
        'terms.contact.title': '13. الاتصال بنا',
        'terms.contact.p1': 'إذا كان لديك أي أسئلة حول هذه الشروط، يرجى الاتصال بنا عبر البريد الإلكتروني ahmedsalmanareda@gmail.com',
        'terms.footer.thanks': 'شكراً لاستخدامك UniSkills. نحن ملتزمون بتوفير أفضل تجربة تعليمية ممكنة.',
        'terms.back': 'العودة للرئيسية'
    },
    en: {
        'nav.home': 'Home',
        'nav.features': 'Features',
        'nav.about': 'About',
        'nav.testimonials': 'Testimonials',
        'nav.faq': 'FAQ',
        'hero.title': 'Learn Smarter with UniSkills',
        'hero.description': 'A modern learning platform designed to help students learn smarter and easier. Enjoy a seamless and organized learning experience with a modern user interface and superior performance.',
        'hero.download': 'Download Now',
        'hero.exams': 'Exams feature coming soon',
        'hero.ios': 'iOS version coming soon',
        'screenshots.title': 'App Screenshots',
        'screenshots.subtitle': 'Explore the app interface and modern design',
        'features.title': 'Platform Features',
        'features.subtitle': 'Complete learning experience with the latest technologies',
        'features.ai.title': 'AI Powered',
        'features.ai.desc': 'Smart personal assistant',
        'features.content.title': 'Pro Content',
        'features.content.desc': 'High quality courses',
        'features.certificates.title': 'Certificates',
        'features.certificates.desc': 'Verified certificates',
        'features.fast.title': 'Fast Growth',
        'features.fast.desc': 'Accelerate your skills',
        'features.progress.title': 'Progress Tracking',
        'features.progress.desc': 'Monitor your progress and achievements continuously',
        'features.articles.title': 'Educational Articles',
        'features.articles.desc': 'Rich and diverse educational content',
        'about.title': 'About UniSkills',
        'about.desc1': 'UniSkills is a modern learning platform aimed at transforming the learning experience for students in the Arab world. We believe that education should be accessible, easy, and enjoyable for everyone.',
        'about.desc2': 'We strive to provide a comprehensive learning environment that combines high-quality content with modern technology, helping students achieve their academic goals efficiently and effectively.',
        'about.students': 'Active Students',
        'about.courses': 'Courses',
        'about.support': 'Support',
        'about.mission': 'Our Vision',
        'about.mission.desc': 'Making quality education accessible to everyone',
        'coming.title': 'Coming Soon',
        'coming.subtitle': 'Exciting new features on the way',
        'coming.exams.title': 'Exams System',
        'coming.exams.desc': 'Test your knowledge with an interactive and comprehensive exam system',
        'coming.ios.title': 'iOS App',
        'coming.ios.desc': 'Coming soon to App Store for Apple device users',
        'coming.features.title': 'Additional Features',
        'coming.features.desc': 'More powerful tools to enhance the learning experience',
        'coming.badge': 'Coming Soon',
        // Testimonials
        'testimonials.title': 'Student Testimonials',
        'testimonials.subtitle': 'Real experiences from students who benefited from UniSkills',
        'testimonials.student1.name': 'Ahmed Mohamed',
        'testimonials.student1.role': 'Computer Science Student',
        'testimonials.student1.text': 'Really an amazing platform! As a CS student, the technical content here is among the best I have seen, and the explanation is very practical and easy to understand.',
        'testimonials.student2.name': 'Sara Ahmed',
        'testimonials.student2.role': 'Computer Science Student',
        'testimonials.student2.text': 'The AI assistant helped me a lot in choosing the right specialization for me within the computer field, and I started developing myself correctly thanks to its guidance.',
        'testimonials.student3.name': 'Mohamed Ali',
        'testimonials.student3.role': 'Computer Science Student',
        'testimonials.student3.text': 'I was lost between courses, but the AI assistant suggested the perfect educational path for me and I developed my programming skills in record time.',
        'testimonials.student4.name': 'Fatma Hassan',
        'testimonials.student4.role': 'Computer Science Student',
        'testimonials.student4.text': 'The quality of the courses is fantastic, and the certified certificates helped me a lot in building my profile professionally on LinkedIn.',
        'testimonials.student5.name': 'Mahmoud Yassin',
        'testimonials.student5.role': 'Computer Science Student',
        'testimonials.student5.text': 'The best thing about the platform is the logical arrangement of topics, and the AI assistant is always there to answer any complex technical inquiry.',
        'testimonials.student6.name': 'Laila Ibrahim',
        'testimonials.student6.role': 'Computer Science Student',
        'testimonials.student6.text': 'The user interface is very modern, and learning here is fun and not boring, especially with the AI assistant support that constantly motivates me.',
        // Why Choose Us
        'why.title': 'Why Choose UniSkills?',
        'why.subtitle': 'We offer you a unique and distinguished learning experience',
        'why.updated.title': 'Constantly Updated Content',
        'why.updated.desc': 'We add new courses and articles regularly to keep up with the latest developments',
        'why.easy.title': 'Easy to Use Interface',
        'why.easy.desc': 'Modern and simple design makes learning fun and easy for everyone',
        'why.support.title': 'Direct Support 24/7',
        'why.support.desc': 'Support team always available to answer your questions and help you',
        'why.tracking.title': 'Progress Tracking Tools',
        'why.tracking.desc': 'Track your progress and achievements in detail with comprehensive reports',
        // Upcoming Exams
        'exams.title': 'Upcoming Exams',
        'exams.subtitle': 'Prepare for exams with our new interactive system',
        'exams.system.title': 'Interactive Exam System',
        'exams.system.desc': 'Coming soon: Comprehensive exam system with instant evaluation and detailed results',
        'exams.feature1': 'Instant Evaluation',
        'exams.feature2': 'Performance Tracking',
        'exams.feature3': 'Certified Certificates',
        'exams.countdown': 'Very Soon',
        'exams.badge': 'In Development',
        // FAQ
        'faq.title': 'Frequently Asked Questions',
        'faq.subtitle': 'Answers to the most common questions',
        'faq.q1': 'Is the app free?',
        'faq.a1': 'Yes, all courses are completely free',
        'faq.q2': 'Does the app require registration?',
        'faq.a2': 'Yes, the app requires creating an account to access courses, track your progress, and get certificates.',
        'faq.q3': 'How do I enroll in a course?',
        'faq.a3': 'Click the "Subscribe Now" button on the course details page, and you will be able to access all course lessons immediately.',
        'faq.q4': 'Are certificates accredited?',
        'faq.a4': 'Yes, all certificates are accredited by UniSkills and you can download and share them on LinkedIn and other platforms.',
        'faq.q5': 'How do I contact the instructor?',
        'faq.a5': 'You can contact via the instructor profile section in each lesson.',
        'faq.q6': 'Can I access courses after finishing them?',
        'faq.a6': 'Yes, you have lifetime access to the courses you subscribe to. You can return to them at any time.',
        // CTA
        'cta.download': 'Download Now',
        'download.title': 'Start Your Learning Journey Now',
        'download.subtitle': 'Download the app and enjoy a unique learning experience',
        'download.available': 'Available on',
        'social.title': 'Connect With Us',
        'social.subtitle': 'Follow us on social media platforms',
        'footer.description': 'A modern educational platform aiming to empower students through technology and AI.',
        'footer.quickLinks': 'Quick Links',
        'footer.contact': 'Contact Us',
        'footer.address': 'Cairo, Egypt',
        'footer.email': 'support@uniskills.app',
        'footer.terms': 'Terms of Service',
        'footer.copyright': '© 2026 UniSkills. All rights reserved.',
        // Terms page translations
        'terms.title': 'Terms of Service',
        'terms.updated': 'Last updated: January 2024',
        'terms.acceptance.title': '1. Acceptance of Terms',
        'terms.acceptance.p1': 'Welcome to UniSkills. By using our platform and application, you agree to comply with these terms and conditions. If you do not agree to any part of these terms, please do not use our services.',
        'terms.acceptance.p2': 'We reserve the right to modify these terms at any time. You will be notified of any material changes, and your continued use of the service after such changes constitutes your acceptance of them.',
        'terms.disclaimer.title': '2. Content Disclaimer (YouTube)',
        'terms.disclaimer.p1': 'The UniSkills team clarifies that the visual educational content (videos) available through the platform is not the exclusive property of the platform, but is publicly available content on YouTube. We organize and facilitate access to this content to serve students, acknowledging the full intellectual property rights of the original content creators.',
        'terms.intellectual.title': '3. Intellectual Property',
        'terms.intellectual.p1': 'All content available on the UniSkills platform, including text, graphics, logos, images, and software, is owned by UniSkills or its licensors. Regarding educational videos, the "Content Disclaimer" terms shown in Section 2 apply.',
        'terms.intellectual.p2': 'You may not copy, modify, distribute, sell, or lease any part of our services or included software without explicit written permission from us.',
        'terms.certificates.title': '4. Issued Certificates',
        'terms.certificates.p1': 'Certificates issued by UniSkills are course completion certificates and not official academic certificates. They may not be recognized by all educational institutions or employers, and are intended to document the effort made only.',
        'terms.usage.title': '5. Platform Usage',
        'terms.usage.p1': 'UniSkills is an educational platform designed to help students access high-quality educational content. You must use the platform in a legal and responsible manner.',
        'terms.usage.allowed.title': 'Permitted Uses:',
        'terms.usage.allowed.1': 'Accessing educational content for personal and academic purposes',
        'terms.usage.allowed.2': 'Interacting with content and participating in educational activities',
        'terms.usage.allowed.3': 'Tracking your academic progress and achievements',
        'terms.usage.prohibited.title': 'Prohibited Uses:',
        'terms.usage.prohibited.1': 'Copying or distributing content without permission',
        'terms.usage.prohibited.2': 'Using the platform for commercial purposes without approval',
        'terms.usage.prohibited.3': 'Attempting to hack or disrupt the system',
        'terms.usage.prohibited.4': 'Impersonating others or creating fake accounts',
        'terms.usage.prohibited.5': 'Publishing offensive or illegal content',
        'terms.account.title': '6. User Account',
        'terms.account.p1': 'When creating an account on UniSkills, you are responsible for maintaining the confidentiality of your account information and password. You are responsible for all activities that occur under your account.',
        'terms.account.p2': 'You must notify us immediately of any unauthorized use of your account or any other security breach. We will not be liable for any loss or damage resulting from your failure to comply with this section.',
        'terms.content.title': '7. User Content',
        'terms.content.p1': 'Some parts of the platform may allow you to post or upload content. You retain all ownership rights in the content you post, but you grant us a worldwide, non-exclusive license to use that content to operate and improve our services.',
        'terms.content.p2': 'You are responsible for the content you post and warrant that it does not infringe the rights of any third party and does not contain illegal or offensive materials.',
        'terms.privacy.title': '8. Privacy and Data Protection',
        'terms.privacy.p1': 'We take your privacy seriously. We collect and use your personal information in accordance with our Privacy Policy. By using our services, you agree to the collection and use of information as described in the Privacy Policy.',
        'terms.payments.title': '9. Payments and Subscriptions',
        'terms.payments.p1': 'Some features or content on the platform may require payment of fees. All fees are non-refundable unless explicitly stated otherwise.',
        'terms.payments.p2': 'We reserve the right to change our prices at any time. You will be notified of any price changes before they are applied to your subscription.',
        'terms.liability.title': '10. Limitation of Liability',
        'terms.liability.p1': 'UniSkills services are provided "as is" and "as available". We make no warranties, express or implied, regarding the operation of our services or the information, content, or materials included therein.',
        'terms.liability.p2': 'We will not be liable for any direct, indirect, incidental, special, or consequential damages resulting from your use or inability to use the service.',
        'terms.liability.p3': 'We do not guarantee that the service will always be available or error-free. We may suspend, withdraw, or restrict the availability of the service without prior notice.',
        'terms.termination.title': '11. Service Termination',
        'terms.termination.p1': 'You may terminate your account at any time by contacting us. We reserve the right to suspend or terminate your account if you violate these terms or if your use of the service harms the platform or other users.',
        'terms.termination.p2': 'Upon termination of your account, your data will be deleted in accordance with our Privacy Policy, and you will not be able to access any paid content or features.',
        'terms.changes.title': '12. Changes to Service',
        'terms.changes.p1': 'We reserve the right to modify or discontinue the service (or any part thereof) temporarily or permanently at any time without prior notice. We will not be liable to you or any third party for any modification, suspension, or discontinuation of the service.',
        'terms.contact.title': '13. Contact Us',
        'terms.contact.p1': 'If you have any questions about these terms, please contact us via email at ahmedsalmanareda@gmail.com',
        'terms.footer.thanks': 'Thank you for using UniSkills. We are committed to providing the best possible learning experience.',
        'terms.back': 'Back to Home'
    }
};

// ==================== Theme Management ====================
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Load saved theme - Default is DARK
const savedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);

    // Add animation to button
    themeToggle.style.transform = 'rotate(360deg)';
    setTimeout(() => {
        themeToggle.style.transform = 'rotate(0deg)';
    }, 300);
});

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('.theme-icon');
    icon.innerHTML = theme === 'light'
        ? '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z"/></svg>'
        : '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12,18C11.11,18 10.26,17.8 9.5,17.45C11.56,16.5 13,14.42 13,12C13,9.58 11.56,7.5 9.5,6.55C10.26,6.2 11.11,6 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31L23.31,12L20,8.69Z"/></svg>';
}

// ==================== Language Management ====================
const langToggle = document.getElementById('langToggle');
let currentLang = localStorage.getItem('lang') || 'ar';

// Set initial language
setLanguage(currentLang);

langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    setLanguage(currentLang);
    localStorage.setItem('lang', currentLang);

    // Reset slider position on language change
    if (window.sliderReset) {
        window.sliderReset();
    }

    // Add animation to button
    langToggle.style.transform = 'scale(0.9)';
    setTimeout(() => {
        langToggle.style.transform = 'scale(1)';
    }, 200);
});

function setLanguage(lang) {
    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    // Update language toggle button
    const langText = langToggle.querySelector('.lang-text');
    langText.textContent = lang === 'ar' ? 'EN' : 'AR';

    // Update all translatable elements
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            // Check if element has children (like badge with icon)
            const hasIcon = element.querySelector('svg, .badge-icon');
            if (hasIcon) {
                // Find the text node or span and update it
                const textNode = Array.from(element.childNodes).find(node =>
                    node.nodeType === Node.TEXT_NODE || (node.tagName === 'SPAN' && !node.classList.contains('badge-icon'))
                );
                if (textNode) {
                    if (textNode.nodeType === Node.TEXT_NODE) {
                        textNode.textContent = translations[lang][key];
                    } else {
                        textNode.textContent = translations[lang][key];
                    }
                }
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    // Update page title
    if (window.location.pathname.includes('terms')) {
        document.title = lang === 'ar' ? 'شروط الخدمة - UniSkills' : 'Terms of Service - UniSkills';
    } else {
        document.title = lang === 'ar' ? 'UniSkills - منصة التعلم الذكي' : 'UniSkills - Smart Learning Platform';
    }
}

// ==================== Scroll Animations ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all animated elements
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.feature-card, .coming-card, .social-link, .about-text, .about-visual, .testimonial-card, .exam-preview-card, .faq-item, .why-card'
    );

    animatedElements.forEach(el => observer.observe(el));
});

// ==================== Smooth Scroll ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll indicator click
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
        const featuresSection = document.getElementById('features');
        if (featuresSection) {
            featuresSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });

    // Hide scroll indicator after scrolling
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.pointerEvents = 'none';
        } else {
            scrollIndicator.style.opacity = '1';
            scrollIndicator.style.pointerEvents = 'auto';
        }
    });
}

// ==================== Navbar Scroll Effect ====================
let lastScroll = 0;
const navbar = document.querySelector('.navbar');
const scrollProgress = document.querySelector('.scroll-progress');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Navbar shadow effect
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Scroll progress bar
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (currentScroll / windowHeight) * 100;
    if (scrollProgress) {
        scrollProgress.style.width = scrolled + '%';
    }

    lastScroll = currentScroll;
});

// ==================== Performance Optimization ====================
// Lazy load images if any are added
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ==================== Counter Animation ====================
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + (element.dataset.suffix || '');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + (element.dataset.suffix || '');
        }
    }, 16);
}

// Animate counters when they come into view
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            entry.target.classList.add('counted');
            const target = parseInt(entry.target.dataset.target);
            animateCounter(entry.target, target);
        }
    });
}, { threshold: 0.5 });

// Observe all counter elements
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => counterObserver.observe(counter));
});

// ==================== Analytics (Optional) ====================
// Add your analytics code here if needed
// Example: Google Analytics, Facebook Pixel, etc.

// ==================== Screenshots Slider ====================
document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.screenshots-track');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    if (track && prevBtn && nextBtn) {
        let currentPosition = 0;
        const itemWidth = 300 + 32; // width + gap
        const visibleItems = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
        const maxPosition = -(itemWidth * (8 - visibleItems));

        function updateSliderPosition() {
            const isRTL = html.getAttribute('dir') === 'rtl';
            if (isRTL) {
                track.style.transform = `translateX(${-currentPosition}px)`;
            } else {
                track.style.transform = `translateX(${currentPosition}px)`;
            }
        }

        // Reset function for language change
        window.sliderReset = function () {
            currentPosition = 0;
            updateSliderPosition();
        };

        // Manual navigation only - no auto scroll
        prevBtn.addEventListener('click', () => {
            const isRTL = html.getAttribute('dir') === 'rtl';

            if (isRTL) {
                // في RTL: prev يعني نروح لليمين (نقلل الـ position)
                if (currentPosition > maxPosition) {
                    currentPosition -= itemWidth;
                    updateSliderPosition();
                }
            } else {
                // في LTR: prev يعني نروح لليسار (نزود الـ position)
                if (currentPosition < 0) {
                    currentPosition += itemWidth;
                    updateSliderPosition();
                }
            }
        });

        nextBtn.addEventListener('click', () => {
            const isRTL = html.getAttribute('dir') === 'rtl';

            if (isRTL) {
                // في RTL: next يعني نروح لليسار (نزود الـ position)
                if (currentPosition < 0) {
                    currentPosition += itemWidth;
                    updateSliderPosition();
                }
            } else {
                // في LTR: next يعني نروح لليمين (نقلل الـ position)
                if (currentPosition > maxPosition) {
                    currentPosition -= itemWidth;
                    updateSliderPosition();
                }
            }
        });

        // Update on resize
        window.addEventListener('resize', () => {
            currentPosition = 0;
            updateSliderPosition();
        });

        // Initialize position
        updateSliderPosition();
    }
});

console.log('UniSkills website loaded successfully! 🎓');

// ==================== Back to Top Button ====================
const backToTopBtn = document.getElementById('backToTop');

if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}


// ==================== FAQ Accordion ====================
document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => {
                // Close other items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                    }
                });

                // Toggle current item
                item.classList.toggle('active');
            });
        }
    });
});

// ==================== Countdown Timer (Exams) ====================
function updateCountdown() {
    const countdownValues = document.querySelectorAll('.countdown-value');
    if (countdownValues.length > 0) {
        // For now, show placeholder. You can set a target date here
        // const targetDate = new Date('2024-12-31T23:59:59').getTime();
        countdownValues.forEach(value => {
            if (value.textContent === '--') {
                value.textContent = '00';
            }
        });
    }
}

// Call once on load
document.addEventListener('DOMContentLoaded', updateCountdown);

// ==================== Mobile Menu Toggle ====================
document.addEventListener('DOMContentLoaded', () => {
    const mobileToggle = document.getElementById('mobileToggle');
    const navLinks = document.getElementById('navLinks');
    const navItems = document.querySelectorAll('.nav-links a');

    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileToggle.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });

        // Close menu when clicking a link
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileToggle.classList.remove('active');
                document.body.classList.remove('no-scroll');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !mobileToggle.contains(e.target) && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileToggle.classList.remove('active');
                document.body.classList.remove('no-scroll');
            }
        });
    }
});

// ==================== Active Link Highlighting ====================
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    const links = document.querySelectorAll('.nav-links a');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });

    links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});
