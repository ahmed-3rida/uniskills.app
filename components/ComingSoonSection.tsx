'use client'

import { motion } from 'framer-motion'
import { FileCheck, Apple } from 'lucide-react'
import { useTheme } from './ThemeProvider'
import { translations } from '@/lib/translations'

const icons = [FileCheck, Apple]

export default function ComingSoonSection() {
  const { language } = useTheme()
  const t = translations[language].comingSoon

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-neon-blue/5 dark:to-neon-purple/5" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block mb-4 px-6 py-2 rounded-full bg-gradient-to-r from-primary to-secondary dark:from-neon-blue dark:to-neon-purple"
          >
            <span className="text-sm font-bold text-white">
              {language === 'ar' ? 'قريباً' : 'Coming Soon'}
            </span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {t.items.map((item, index) => {
            const Icon = icons[index]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className="h-full p-8 rounded-3xl glass-effect-light dark:glass-effect border-2 border-primary/20 dark:border-neon-blue/20 hover:border-primary dark:hover:border-neon-blue transition-all duration-300">
                  {/* Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/10 dark:bg-neon-blue/10 border border-primary/30 dark:border-neon-blue/30">
                    <span className="text-xs font-bold text-primary dark:text-neon-blue">
                      {item.badge}
                    </span>
                  </div>

                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="w-20 h-20 mb-6 mt-8 rounded-2xl bg-gradient-to-br from-primary to-secondary dark:from-neon-blue dark:to-neon-purple flex items-center justify-center mx-auto"
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white text-center">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
