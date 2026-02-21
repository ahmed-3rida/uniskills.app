'use client'

import { motion } from 'framer-motion'
import { Download, Smartphone } from 'lucide-react'
import { useTheme } from './ThemeProvider'
import { translations } from '@/lib/translations'

export default function HeroSection() {
  const { language } = useTheme()
  const t = translations[language].hero

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 left-10 w-72 h-72 bg-primary/10 dark:bg-neon-blue/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 dark:bg-neon-purple/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: language === 'ar' ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-right"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4 px-4 py-2 rounded-full glass-effect-light dark:glass-effect"
            >
              <span className="text-sm font-semibold text-primary dark:text-neon-blue">
                {t.availableOn} Google Play
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-7xl font-bold mb-4 text-gray-900 dark:text-white"
            >
              {t.title}
              <br />
              <span className="text-primary dark:text-neon-blue dark:neon-text">
                {t.subtitle}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              {t.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="https://play.google.com/store/apps/details?id=com.uniskills.app"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary dark:bg-neon-blue text-white dark:text-dark-bg rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl dark:neon-glow transition-all"
              >
                <Download className="w-6 h-6" />
                {t.cta}
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="relative mx-auto w-[300px] h-[600px]"
            >
              {/* Phone Frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] shadow-2xl p-3">
                <div className="w-full h-full bg-white dark:bg-dark-bg rounded-[2.5rem] overflow-hidden">
                  {/* Screen Content */}
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-neon-blue/20 dark:to-neon-purple/20 flex items-center justify-center">
                    <Smartphone className="w-24 h-24 text-primary dark:text-neon-blue opacity-50" />
                  </div>
                </div>
              </div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 dark:from-neon-blue/30 dark:to-neon-purple/30 rounded-[3rem] blur-3xl -z-10" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
