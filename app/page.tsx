'use client'

import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import ComingSoonSection from '@/components/ComingSoonSection'
import AboutSection from '@/components/AboutSection'
import SocialSection from '@/components/SocialSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-dark-bg transition-colors duration-300">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ComingSoonSection />
      <AboutSection />
      <SocialSection />
      <Footer />
    </main>
  )
}
