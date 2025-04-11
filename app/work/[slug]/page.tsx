"use client"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { MobileMenu } from "@/components/mobile-menu"
import { ProjectSection } from "@/components/project-detail/project-section"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { useState } from "react"

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <main className="min-h-screen bg-[#f8f8f8] text-[#333333]">
      <Header menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <MobileMenu menuOpen={menuOpen} toggleMenu={toggleMenu} />

      <div className="px-6 md:px-12 lg:px-24 py-12 pt-32">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <Link href="/work" className="inline-flex items-center text-xl hover:opacity-60 transition-opacity mb-12">
            <ArrowLeft className="mr-2 w-5 h-5" /> Back to work
          </Link>
        </motion.div>

        <ProjectSection slug={params.slug} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-light mb-8">Next Project</h2>
          <Link
            href={`/work/${Number.parseInt(params.slug) + 1}`}
            className="inline-flex items-center text-xl hover:opacity-60 transition-opacity"
          >
            View next project <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>

      <Footer />
    </main>
  )
}
