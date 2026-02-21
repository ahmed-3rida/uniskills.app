'use client'

import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import Link from 'next/link'
import { useTheme } from './ThemeProvider'
import { translations } from '@/lib/translations'

export default function Footer() {
  const { language } = useTheme()
  const t = translations[language].footer

  return (
    <footer className="py-12 px-6 glass-effect-light dark:glass-effect border-t border-gray-200 dark:border-dark-card">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo & Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary dark:from-neon-blue dark:to-neon-purple flex items-center justify-center">
                <span className="text-white font-bold text-xl">U</span>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                Uni Skills
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © 2024 Uni Skills. {t.rights}
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-6"
          >
            <Link
              href="/terms"
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-neon-blue transition-colors"
            >
              {t.terms}
            </Link>
          </motion.div>

          {/* Made with Love */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
          >
            <span className="text-sm">{t.madeWith}</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            </motion.div>
            <span className="text-sm">{t.by}</span>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
