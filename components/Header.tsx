'use client'

import { motion } from 'framer-motion'
import { Moon, Sun, Globe } from 'lucide-react'
import { useTheme } from './ThemeProvider'
import { translations } from '@/lib/translations'

export default function Header() {
  const { theme, language, toggleTheme, toggleLanguage } = useTheme()
  const t = translations[language]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass-effect-light dark:glass-effect"
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary dark:from-neon-blue dark:to-neon-purple flex items-center justify-center">
              <span className="text-white font-bold text-xl">U</span>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              {t.appName}
            </span>
          </motion.div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Language Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleLanguage}
              className="p-2 rounded-lg glass-effect-light dark:glass-effect hover:bg-gray-100 dark:hover:bg-dark-card transition-colors"
              aria-label="Toggle language"
            >
              <Globe className="w-5 h-5 text-gray-700 dark:text-neon-blue" />
            </motion.button>

            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-lg glass-effect-light dark:glass-effect hover:bg-gray-100 dark:hover:bg-dark-card transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-gray-700" />
              ) : (
                <Sun className="w-5 h-5 text-neon-yellow" />
              )}
            </motion.button>
          </div>
        </div>
      </nav>
    </motion.header>
  )
}
