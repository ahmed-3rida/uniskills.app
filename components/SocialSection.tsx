'use client'

import { motion } from 'framer-motion'
import { Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react'
import { useTheme } from './ThemeProvider'
import { translations } from '@/lib/translations'

const socialLinks = [
  {
    name: 'Facebook',
    icon: Facebook,
    url: 'https://facebook.com/uniskills.eg',
    color: 'from-blue-500 to-blue-600',
    darkColor: 'from-neon-blue to-blue-400',
  },
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://instagram.com/uniskills.app',
    color: 'from-pink-500 to-purple-600',
    darkColor: 'from-neon-pink to-neon-purple',
  },
  {
    name: 'WhatsApp',
    icon: MessageCircle,
    url: 'https://whatsapp.com/channel/0029VbCWl5B2f3EBP01LLm2d',
    color: 'from-green-500 to-green-600',
    darkColor: 'from-neon-green to-green-400',
  },
  {
    name: 'YouTube',
    icon: Youtube,
    url: 'https://youtube.com/@uni.skills',
    color: 'from-red-500 to-red-600',
    darkColor: 'from-red-400 to-red-500',
  },
]

export default function SocialSection() {
  const { language } = useTheme()
  const t = translations[language].social

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto relative z-10">
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {socialLinks.map((social, index) => {
            const Icon = social.icon
            return (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="group"
              >
                <div className="p-8 rounded-3xl glass-effect-light dark:glass-effect hover:shadow-2xl transition-all duration-300">
                  <motion.div
                    whileHover={{ y: -5 }}
                    className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${social.color} dark:bg-gradient-to-br dark:${social.darkColor} flex items-center justify-center shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <p className="text-center font-semibold text-gray-900 dark:text-white">
                    {social.name}
                  </p>
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
