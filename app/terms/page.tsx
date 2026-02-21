'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, FileText } from 'lucide-react'
import { useTheme } from '@/components/ThemeProvider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const dynamic = 'force-dynamic'

const termsContent = {
  ar: {
    title: 'شروط الخدمة',
    lastUpdated: 'آخر تحديث: 21 فبراير 2024',
    backToHome: 'العودة للرئيسية',
    sections: [
      {
        title: '1. المقدمة',
        content: 'مرحباً بك في Uni Skills. باستخدامك لتطبيقنا، فإنك توافق على الالتزام بهذه الشروط والأحكام. يرجى قراءتها بعناية قبل استخدام خدماتنا.',
      },
      {
        title: '2. مسؤوليات المستخدم',
        content: 'أنت مسؤول عن الحفاظ على سرية حسابك وكلمة المرور الخاصة بك. يجب عليك إخطارنا فوراً بأي استخدام غير مصرح به لحسابك. يجب أن تكون جميع المعلومات التي تقدمها دقيقة وحديثة.',
      },
      {
        title: '3. الاستخدام المقبول',
        content: 'يجب استخدام التطبيق للأغراض التعليمية فقط. يُحظر استخدام التطبيق لأي أنشطة غير قانونية أو ضارة. نحتفظ بالحق في تعليق أو إنهاء حسابك في حالة انتهاك هذه الشروط.',
      },
      {
        title: '4. الملكية الفكرية',
        content: 'جميع المحتويات والمواد المتاحة في التطبيق، بما في ذلك النصوص والرسومات والشعارات، هي ملك لـ Uni Skills أو مرخصيها. لا يجوز لك نسخ أو توزيع أو تعديل أي محتوى دون إذن كتابي مسبق.',
      },
      {
        title: '5. حدود المسؤولية',
        content: 'نحن نبذل قصارى جهدنا لضمان دقة المحتوى التعليمي، لكننا لا نضمن أن المحتوى خالٍ من الأخطاء. لن نكون مسؤولين عن أي أضرار مباشرة أو غير مباشرة ناتجة عن استخدام التطبيق.',
      },
      {
        title: '6. التحديثات على الشروط',
        content: 'نحتفظ بالحق في تحديث هذه الشروط في أي وقت. سيتم إخطارك بأي تغييرات جوهرية عبر التطبيق أو البريد الإلكتروني. استمرارك في استخدام التطبيق بعد التحديثات يعني موافقتك على الشروط الجديدة.',
      },
      {
        title: '7. معلومات الاتصال',
        content: 'إذا كان لديك أي أسئلة حول هذه الشروط، يرجى التواصل معنا عبر وسائل التواصل الاجتماعي الخاصة بنا أو من خلال التطبيق.',
      },
    ],
  },
  en: {
    title: 'Terms of Service',
    lastUpdated: 'Last Updated: February 21, 2024',
    backToHome: 'Back to Home',
    sections: [
      {
        title: '1. Introduction',
        content: 'Welcome to Uni Skills. By using our app, you agree to comply with these terms and conditions. Please read them carefully before using our services.',
      },
      {
        title: '2. User Responsibilities',
        content: 'You are responsible for maintaining the confidentiality of your account and password. You must notify us immediately of any unauthorized use of your account. All information you provide must be accurate and up-to-date.',
      },
      {
        title: '3. Acceptable Use',
        content: 'The app must be used for educational purposes only. Using the app for any illegal or harmful activities is prohibited. We reserve the right to suspend or terminate your account in case of violation of these terms.',
      },
      {
        title: '4. Intellectual Property',
        content: 'All content and materials available in the app, including text, graphics, and logos, are owned by Uni Skills or its licensors. You may not copy, distribute, or modify any content without prior written permission.',
      },
      {
        title: '5. Limitation of Liability',
        content: 'We strive to ensure the accuracy of educational content, but we do not guarantee that the content is error-free. We will not be liable for any direct or indirect damages resulting from the use of the app.',
      },
      {
        title: '6. Updates to Terms',
        content: 'We reserve the right to update these terms at any time. You will be notified of any material changes via the app or email. Your continued use of the app after updates means you agree to the new terms.',
      },
      {
        title: '7. Contact Information',
        content: 'If you have any questions about these terms, please contact us through our social media channels or through the app.',
      },
    ],
  },
}

export default function TermsPage() {
  const { language } = useTheme()
  const t = termsContent[language]
  const isRTL = language === 'ar'

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-dark-bg transition-colors duration-300">
      <Header />
      
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-primary dark:text-neon-blue hover:gap-3 transition-all"
            >
              {isRTL ? (
                <ArrowRight className="w-5 h-5" />
              ) : (
                <ArrowLeft className="w-5 h-5" />
              )}
              <span className="font-semibold">{t.backToHome}</span>
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-secondary dark:from-neon-blue dark:to-neon-purple flex items-center justify-center"
            >
              <FileText className="w-10 h-10 text-white" />
            </motion.div>

            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              {t.title}
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              {t.lastUpdated}
            </p>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            {t.sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="p-8 rounded-3xl glass-effect-light dark:glass-effect"
              >
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  {section.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-neon-blue/10 dark:to-neon-purple/10 border-2 border-primary/20 dark:border-neon-blue/20 text-center"
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              {language === 'ar' ? 'هل لديك أسئلة؟' : 'Have Questions?'}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {language === 'ar' 
                ? 'تواصل معنا عبر وسائل التواصل الاجتماعي'
                : 'Contact us through our social media channels'}
            </p>
            <Link
              href="/"
              className="inline-block px-8 py-4 bg-primary dark:bg-neon-blue text-white dark:text-dark-bg rounded-2xl font-bold hover:shadow-xl dark:hover:neon-glow transition-all"
            >
              {language === 'ar' ? 'العودة للرئيسية' : 'Back to Home'}
            </Link>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
