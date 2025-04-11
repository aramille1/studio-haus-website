"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Building2, ChevronDown, Laptop, RefreshCw, Trash2, Wrench } from "lucide-react"
import { useRef } from "react"
import { IconWrapper } from "./ui/icon-wrapper"

interface HeroSectionProps {
  loaded: boolean
}

export function HeroSection({ loaded }: HeroSectionProps) {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 200], [1, 0])
  const scale = useTransform(scrollY, [0, 200], [1, 0.95])

  return (
    <motion.div
      ref={heroRef}
      style={{ opacity, scale }}
      className="flex min-h-screen flex-col items-center justify-center p-4 md:p-44 pt-44"
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.p
          className="text-3xl md:text-4xl lg:text-5xl leading-normal font-light "
          initial={{ opacity: 0 }}
          animate={{ opacity: loaded ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          We get it. In Berlin{" "}
          <IconWrapper icon={<Building2 className="w-10 h-10 md:w-12 md:h-12" />} delay={1.2} />, everything moves
          fast. One site here, another gone{" "}
          <IconWrapper icon={<Trash2 className="w-10 h-10 md:w-12 md:h-12" />} delay={1.6} />. Designs fade. Code
          breaks. Users bounce. But not yours. We build websites{" "}
          <IconWrapper icon={<Laptop className="w-10 h-10 md:w-12 md:h-12" />} delay={2.0} /> that last — clear,
          human, and made for real people. No fluff, just tools{" "}
          <IconWrapper icon={<Wrench className="w-10 h-10 md:w-12 md:h-12" />} delay={2.4} /> that make it easier
          for your audience to stay, click, and come back. Let's create something that actually works — and keeps
          working. <IconWrapper icon={<RefreshCw className="w-10 h-10 md:w-12 md:h-12" />} delay={2.8} />
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
        transition={{ duration: 0.8, delay: 4.0 }}
        className="mt-16"
      >
        <ChevronDown className="w-10 h-10 animate-bounce" />
      </motion.div>
    </motion.div>
  )
}
