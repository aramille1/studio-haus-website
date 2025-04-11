"use client"

import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 bg-[#333] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <Link href="/" className="text-3xl font-serif italic">
            Studio Haus
          </Link>

          <nav className="mt-8 md:mt-0 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <Link href="#work" className="text-lg hover:opacity-60 transition-opacity">
              Work
            </Link>
            <Link href="#about" className="text-lg hover:opacity-60 transition-opacity">
              About
            </Link>
            <Link href="#services" className="text-lg hover:opacity-60 transition-opacity">
              Services
            </Link>
            <Link href="#contact" className="text-lg hover:opacity-60 transition-opacity">
              Contact
            </Link>
          </nav>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-start md:items-center">
          <p className="text-sm opacity-60">© {new Date().getFullYear()} Studio Haus. All rights reserved.</p>

          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-sm opacity-60 hover:opacity-100 transition-opacity">
              Privacy Policy
            </a>
            <a href="#" className="text-sm opacity-60 hover:opacity-100 transition-opacity">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
