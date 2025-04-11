"use client"

import { motion } from "framer-motion"
import Link from "next/link"

interface MobileMenuProps {
  menuOpen: boolean
  toggleMenu: () => void
}

export function MobileMenu({ menuOpen, toggleMenu }: MobileMenuProps) {
  return (
    <motion.div
      className="fixed inset-0 z-40 bg-[#f8f8f8] flex flex-col justify-center items-center"
      initial={{ opacity: 0, x: "100%" }}
      animate={{
        opacity: menuOpen ? 1 : 0,
        x: menuOpen ? 0 : "100%",
      }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="flex flex-col space-y-8 text-3xl font-light">
        <Link href="#work" onClick={toggleMenu} className="hover:opacity-60 transition-opacity">
          Work
        </Link>
        <Link href="#about" onClick={toggleMenu} className="hover:opacity-60 transition-opacity">
          About
        </Link>
        <Link href="#services" onClick={toggleMenu} className="hover:opacity-60 transition-opacity">
          Services
        </Link>
        <Link href="#contact" onClick={toggleMenu} className="hover:opacity-60 transition-opacity">
          Contact
        </Link>
      </nav>
    </motion.div>
  )
}
