"use client"

import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import Link from "next/link"

interface HeaderProps {
  menuOpen: boolean
  toggleMenu: () => void
}

export function Header({ menuOpen, toggleMenu }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 md:py-6 flex justify-between items-center bg-[#f8f8f8]/90 backdrop-blur-sm">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <Link href="/" className="text-2xl md:text-3xl font-serif italic">
          Studio Haus
        </Link>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        onClick={toggleMenu}
        className="z-50"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </motion.button>
    </header>
  )
}
