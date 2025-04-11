"use client"

import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { MobileMenu } from "@/components/mobile-menu"
import { ServicesSection } from "@/components/services-section"
import { WorkSection } from "@/components/work-section"
import { useState, useEffect } from "react"

export default function Home() {
  const [loaded, setLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <main className="min-h-screen bg-[#f8f8f8] text-[#333333] overflow-x-hidden">
      <Header menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <MobileMenu menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <HeroSection loaded={loaded} />
      <WorkSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
