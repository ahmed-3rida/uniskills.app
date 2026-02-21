'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { useTheme } from './ThemeProvider'
import { translations } from '@/lib/translations'

export default function AboutSection() {
  const { language } = useTheme()
  const t = translations[language].about

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-neon-blue/20 dark:to-neon-purple/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="p-12 rounded-3xl glass-effect-light dark:glass-effect border-2 border-primary/20 dark:border-neon-blue/20">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-primary to-secondary dark:from-neon-blue dark:to-neon-purple flex items-center justify-center"
            >
              <Sparkles className="w-10 h-10 text-white" />
            </motion.div>

            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-center text-gray-900 dark:text-white">
              {t.title}
            </h2>

            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed text-center">
              {t.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              {[
                { value: '1000+', label: language === 'ar' ? 'طالب' : 'Students' },
                { value: '50+', label: language === 'ar' ? 'دورة' : 'Courses' },
                { value: '4.8', label: language === 'ar' ? 'تقييم' : 'Rating' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl lg:text-4xl font-bold text-primary dark:text-neon-blue mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
