import type { Metadata } from 'next'
import { Cairo } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const cairo = Cairo({ 
  subsets: ['latin', 'arabic'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-cairo',
})

export const metadata: Metadata = {
  title: 'Uni Skills - المهارات الجامعية',
  description: 'منصة تعليمية حديثة مصممة لمساعدة الطلاب على الوصول إلى الدورات والدروس والمحتوى التعليمي المنظم في مكان واحد',
  keywords: 'تعليم, دورات, طلاب, جامعة, مهارات, Uni Skills',
  authors: [{ name: 'Uni Skills' }],
  openGraph: {
    title: 'Uni Skills - المهارات الجامعية',
    description: 'منصة تعليمية حديثة للطلاب',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={cairo.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
