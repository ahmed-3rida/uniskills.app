'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'
type Language = 'ar' | 'en'

interface ThemeContextType {
  theme: Theme
  language: Language
  toggleTheme: () => void
  toggleLanguage: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')
  const [language, setLanguage] = useState<Language>('ar')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('theme') as Theme
    const savedLanguage = localStorage.getItem('language') as Language
    
    if (savedTheme) setTheme(savedTheme)
    if (savedLanguage) setLanguage(savedLanguage)
  }, [])

  useEffect(() => {
    if (!mounted) return
    
    const root = document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme, mounted])

  useEffect(() => {
    if (!mounted) return
    
    const root = document.documentElement
    root.setAttribute('lang', language)
    root.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr')
    localStorage.setItem('language', language)
  }, [language, mounted])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ar' ? 'en' : 'ar')
  }

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <ThemeContext.Provider value={{ theme, language, toggleTheme, toggleLanguage }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within ThemeProvider')
  return context
}
