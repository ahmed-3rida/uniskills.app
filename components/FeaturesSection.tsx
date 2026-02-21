'use client'

import { motion } from 'framer-motion'
import { BookOpen, Zap, Users, RefreshCw, Headphones, Layout } from 'lucide-react'
import { useTheme } from './ThemeProvider'
import { translations } from '@/lib/translations'

const icons = [BookOpen, Layout, Zap, Users, RefreshCw, Headphones]

export default function FeaturesSection() {
  const { language } = useTheme()
  const t = translations[language].features

  return (
    <section className="py-20 px-6 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.items.map((feature, index) => {
            const Icon = icons[index]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="h-full p-8 rounded-3xl glass-effect-light dark:glass-effect hover:shadow-2xl dark:hover:neon-glow transition-all duration-300">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-primary to-secondary dark:from-neon-blue dark:to-neon-purple flex items-center justify-center"
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
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
