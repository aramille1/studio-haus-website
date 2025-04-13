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
    <main className="min-h-screen h-screen bg-[#f8f8f8] text-[#333333] overflow-hidden flex flex-col">
      <Header menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <MobileMenu menuOpen={menuOpen} toggleMenu={toggleMenu} />

      <div className="flex-grow overflow-y-auto snap-y snap-mandatory scroll-smooth">
        <div className="snap-start"><HeroSection loaded={loaded} /></div>
        <div className="snap-start"><WorkSection /></div>
        <div className="snap-start"><AboutSection /></div>
        <div className="snap-start"><ServicesSection /></div>
        <div className="snap-start"><ContactSection /></div>
        <div className="snap-end"><Footer /></div>
      </div>

    </main>
  )
}
