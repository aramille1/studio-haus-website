"use client"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { MobileMenu } from "@/components/mobile-menu"
import { ProjectCard } from "@/components/ui/project-card"
import { getAllProjects, generateDummyProjects } from "@/lib/projects"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function WorkPage() {
  const [menuOpen, setMenuOpen] = useState(false)

  // Get real projects and generate additional dummy ones for the grid
  const realProjects = getAllProjects();
  const dummyProjects = generateDummyProjects(10); // Generate 10 dummy projects
  const allProjects = [...realProjects, ...dummyProjects];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <main className="min-h-screen bg-[#f8f8f8] text-[#333333]">
      <Header menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <MobileMenu menuOpen={menuOpen} toggleMenu={toggleMenu} />

      <div className="px-6 md:px-12 lg:px-24 py-12 pt-32">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <Link href="/" className="inline-flex items-center text-xl hover:opacity-60 transition-opacity mb-12">
            <ArrowLeft className="mr-2 w-5 h-5" /> Back to home
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-6xl font-serif italic mb-16">Our Work</h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {allProjects.map((project, index) => (
            <ProjectCard key={project.id} index={index + 1} item={project} />
          ))}
        </div>
      </div>

      <Footer />
    </main>
  )
}
